---
layout: tutorial
title: Windows .NET Message Inspector
breadcrumb_title: Windows .NET Message Inspector
relevantTo: [android,ios,windows,javascript]
weight: 3
downloads:
  - name: Download sample
    url: https://github.com/MobileFirst-Platform-Developer-Center/DotNetTokenValidator/tree/release80
---

## Overview
This tutorial will show how to protect a simple Windows .NET resource, `GetBalanceService`, using a scope (`accessRestricted`).
In the sample we will protect a service which is self-hosted by a console application called DotNetTokenValidator.

First we will define a **Message Inspector** that will help us controlling the incoming request to the `GetBalanceService` resource.
Using this Message Inspector we will examine the incoming request and validate that it provides all the necessary headers required by **MobileFirst Authorization Server**.

**Prerequesites:**

* Make sure to read the [Using the MobileFirst Server to authenticate external resources](../) tutorial.
* Understanding of the [MobileFirst Platform Foundation security framework](../../).

#### Jump to:
* [Create and configure WCF Web HTTP Service](#create-and-configure-wcf-web-http-service)
* [Define a Message Inspector](#define-a-message-inspector)
* [Message Inspector Implementation](#message-inspector-implementation)
    * [Pre-process Validation](#pre-process-validation)
    * [Obtain Access Token from MobileFirst Authorization Server](#obtain-access-token-from-mobilefirst-authorization-server)
    * [Send request to Introspection Endpoint with client token](#send-request-to-introspection-endpoint-with-client-token)
    * [Post-process Validation](#post-process-validation)

## Create and configure WCF Web HTTP Service
First we will create a **WCF service** and call it `GetBalanceService` which we will protect later by a **message inspector**.
In our example we are using a console application as a hosting program for the service.

Here is the code of `getBalance` (the protected resource):

```c#
public class GetBalanceService : IGetBalanceService {
  public string getBalance()
  {
    Console.WriteLine("getBalance()");
    return "19938.80";
  }
}
```

We should also define a `ServiceContract`:

```c#
[ServiceContract]
public interface IGetBalanceService
{
  [OperationContract]
  [WebInvoke(Method = "GET",
  BodyStyle = WebMessageBodyStyle.Wrapped,
  ResponseFormat = WebMessageFormat.Json,
  UriTemplate = "getBalance")]
  string getBalance();
}
```

Now that we have our service ready we can configure how it will be used by the host application. This is done in the App.config file as follows:

```xml
<service behaviorConfiguration="Default" name="DotNetTokenValidator.GetBalanceService">
  <endpoint address="" behaviorConfiguration="webBehavior" binding="webHttpBinding" contract="DotNetTokenValidator.IGetBalanceService" />
  <host>
    <baseAddresses>
      <add baseAddress="http://localhost:8732/GetBalanceService" />
    </baseAddresses>
  </host>
</service>
```
Lastly we should run it from the hosting program `Main` method:

```c#
static void Main(string[] args) {
  // Create the ServiceHost.
  using (ServiceHost host = new ServiceHost(typeof(GetBalanceService)))
  {
    // Enable metadata publishing.
    ServiceMetadataBehavior smb = new ServiceMetadataBehavior();
    smb.HttpGetEnabled = true;

    Console.WriteLine("The service is ready at {0}", host.BaseAddresses[0]);
    host.Open();

    Console.WriteLine("Press <Enter> to stop the service.");
    Console.ReadLine();

    // Close the ServiceHost.
    host.Close();
  }
}
```

> For More information about WCF REST services refer to [Create a Basic WCF Web HTTP Service](https://msdn.microsoft.com/en-us/library/bb412178(v=vs.100).aspx)

## Define a Message Inspector
Before we dive into the validation process we must create and define a **message inspector** which we will use to protect the resource (the service endpoint).
A message inspector is an extensibility object that can be used in the service to inspect and alter messages after they are received or before they are sent. Service message inspectors should implement the `IDispatchMessageInspector` interface:

```c#
public class MyInspector : IDispatchMessageInspector
```

Any service message inspector must implement the two `IDispatchMessageInspector` methods `AfterReceiveRequest` and `BeforeSendReply`:

```c#
public class MyInspector : IDispatchMessageInspector {

  public object AfterReceiveRequest(ref Message request, IClientChannel channel, InstanceContext instanceContext){
  ...
  }

  public void BeforeSendReply(ref Message reply, object correlationState){
    // In our case there is no need for any code here
  }
}
```

After creating the message inspector it should be defined to protect a certain endpoint. This is done by using behaviors. A **behavior** is a class that changes the behavior of the service model runtime by changing the default configuration or adding extensions (such as message inspectors) to it.
This is done using 2 classes: one that configures the message inspector to protect the application endpoint,  and the other to return this behavior class instance and type.

```c#
public class MyCustomBehavior : IEndpointBehavior
    {
        ...
        public void ApplyDispatchBehavior(ServiceEndpoint endpoint, EndpointDispatcher endpointDispatcher)
        {
            endpointDispatcher.DispatchRuntime.MessageInspectors.Add(new MyInspector());
        }
        ...
    }

    public class MyCustomBehaviorExtension : BehaviorExtensionElement
    {
        public override Type BehaviorType
        {
            get { return typeof(MyCustomBehavior); }
        }

        protected override object CreateBehavior()
        {
            return new MyCustomBehavior();
        }
    }
```

In the `App.config` file we define a `behaviorExtension` and attach it to the behavior class we just created:

```xml
<extensions>
  <behaviorExtensions>
    <add name="extBehavior" type="DotNetTokenValidator.Inspector.MyCustomBehaviorExtension, DotNetTokenValidator"/>
  </behaviorExtensions>
</extensions>
```

Then we add this behaviorExtension to the webBehavior element that is configured in our service as endpoint behavior:

```xml
<behavior name="webBehavior">
  <webHttp />
  <extBehavior />
</behavior>
```

Here is the whole serviceModel configuration:

```xml
<system.serviceModel>
  <services>
    <service behaviorConfiguration="Default" name="DotNetTokenValidator.GetBalanceService">
      <endpoint address="" behaviorConfiguration="webBehavior" binding="webHttpBinding" contract="DotNetTokenValidator.IGetBalanceService" />
      <host>
        <baseAddresses>
          <add baseAddress="http://localhost:8732/GetBalanceService" />
        </baseAddresses>
      </host>
    </service>
  </services>
  <behaviors>
    <endpointBehaviors>
      <behavior name="webBehavior">
        <webHttp />
        <extBehavior />
      </behavior>
    </endpointBehaviors>
    <serviceBehaviors>
      <behavior name="Default">
        <serviceMetadata httpGetEnabled="true" />
      </behavior>
      <behavior name="">
        <serviceMetadata httpGetEnabled="true" httpsGetEnabled="true" />
        <serviceDebug includeExceptionDetailInFaults="false" />
      </behavior>
    </serviceBehaviors>
  </behaviors>
  <extensions>
    <behaviorExtensions>
      <add name="extBehavior" type="DotNetTokenValidator.Inspector.MyCustomBehaviorExtension, DotNetTokenValidator"/>
    </behaviorExtensions>
  </extensions>
</system.serviceModel>
```

## Message Inspector Implementation
First we will define some constants as class members in our message inspector: MobileFirst server URL, our confidential client credentials and the `scope` we will use to protect our service with. We will also define a static variable to keep the token received from MobileFirst Authorization server, so it will be available to all users:

```c#
private const string azServerBaseURL = "http://YOUR-SERVER-URL:9080/mfp/api/az/v1/";
private const string scope = "accessRestricted";
private static string filterIntrospectionToken = null;
private const string filterUserName = "USERNAME"; // Confidential Client Username
private const string filterPassword = "PASSWORD";  // Confidential Client Secret
```

Next we will create our `validateRequest` method which is the starting-point method of the validation process that we will implement in our message inspector. Then we will add a call to this method inside the `AfterReceiveRequest` method we mentioned before:

```c#
public object AfterReceiveRequest(ref Message request, IClientChannel channel, InstanceContext instanceContext) {
  validateRequest(request);
  return null;
}
```

Inside `validateRequest` there are mainly 3 steps that we will implement:

1. **Pre-process validation** - check if the request has an **authorization header**, and if there is - is it starting with the word **"Bearer"**.
2. **Get token** from MobileFirst Authorization Server - This token will be used to authenticate the client's token against MobileFirst Authorization Server.
3. **Post-process validation** - check for **conflicts**, validate that the request asks for the right **scope**, and check that the request is **active**.

```c#
private void validateRequest(Message request)
{
  // Pre-process validation: Eextract the clientToken out of the request, check it is not empty and that it starts with "Bearer"
  string clientToken = getClientTokenFromHeader(request);

  // Get token          
  if (filterIntrospectionToken == null)
  {
    filterIntrospectionToken = getIntrospectionToken();
  }

  // Check client auth header against mfp authrorization server using the token I received in previous step
  HttpWebResponse introspectionResponse = introspectClientRequest(clientToken);

  // Check if introspectionToken has expired (401)
  // - if so we should obtain a new token and resend the client request
  if (introspectionResponse.StatusCode == HttpStatusCode.Unauthorized)
  {
    filterIntrospectionToken = getIntrospectionToken();
    introspectionResponse = introspectClientRequest(clientToken);
  }

  // Post-process validation: check that the MFP authrorization server response is valid and includes the requested scope
  postProcess(introspectionResponse);
}
```

## Pre-process Validation
The pre-process validation is done as part of the getClientTokenFromHeader() method.
This process is based upon 2 checks:

1. Check that the authorization header of the request is not empty.
2. If it is not empty - check that the authorization header starts with the "Bearer " prefix.

In both cases we should respond with an **Unauthorized response status** (401) and add the **WWW-Authenticate:Bearer** header.  
After validating the authorization header this method returns the token received from the client application.

```c#
private string getClientTokenFromHeader(Message request)
{
  string token = null;
  string authHeader = null;

  // Extract the authorization header from the request
  var httpRequest = (HttpRequestMessageProperty)request.Properties[HttpRequestMessageProperty.Name];
  authHeader = httpRequest.Headers[HttpRequestHeader.Authorization];

  // Pre-process validation         
  if ((string.IsNullOrEmpty(authHeader) || !authHeader.StartsWith("Bearer", StringComparison.CurrentCulture)))
  {
    WebHeaderCollection webHeaderCollection = new WebHeaderCollection();
    webHeaderCollection.Add(HttpResponseHeader.WwwAuthenticate, "Bearer");
    returnErrorResponse(HttpStatusCode.Unauthorized, webHeaderCollection);
  }

  // extract the token without the "Bearer " prefix
  try {               
    token = authHeader.Substring("Bearer ".Length);
  }
  catch (Exception ex) {
    Console.WriteLine(ex);
  }

  return token;
}
```

`returnErrorResponse` is a helper method that receives an httpStatusCode and a WebHeaderCollection, prepares the response and sends it back to the client application. After sending the response to the client application it completes the request.

```c#
private void returnErrorResponse(HttpStatusCode httpStatusCode, WebHeaderCollection headers)
{
  OutgoingWebResponseContext outgoingResponse = WebOperationContext.Current.OutgoingResponse;
  outgoingResponse.StatusCode = httpStatusCode;
  outgoingResponse.Headers.Add(headers);
  HttpContext.Current.Response.Flush();
  HttpContext.Current.Response.SuppressContent = true; //Prevent sending content - only headers will be sent
  HttpContext.Current.ApplicationInstance.CompleteRequest();
}
```

## Obtain Access Token from MobileFirst Authorization Server
In order to authenticate the client token we should `obtain an access token` as the `message inspector` by making a request to the `token endpoint`.
Later we will use this received token to pass the client token for introspection.

```c#
private string getIntrospectionToken()
{
  string returnVal = null;
  string strResponse = null;

  string Base64Credentials = Convert.ToBase64String(
    System.Text.ASCIIEncoding.ASCII.GetBytes(
      string.Format("{0}:{1}", filterUserName, filterPassword)
    )
  );

  // Prepare Post Data
  Dictionary<string, string> postParameters = new Dictionary<string, string> { };
  postParameters.Add("grant_type", "client_credentials");
  postParameters.Add("scope", "authorization.introspect");

  try {
    HttpWebResponse resp = sendRequest(postParameters, "token", "Basic " + Base64Credentials);
    Stream dataStream = resp.GetResponseStream();
    StreamReader reader = new StreamReader(dataStream);
    strResponse = reader.ReadToEnd();

    JToken token = JObject.Parse(strResponse);
    returnVal = (string)token.SelectToken("access_token");
  }
  catch (Exception ex) {
    Debug.WriteLine(ex);
  }

  return returnVal;
}
```

The `sendRequest` method is a helper method that is responsible for sending requests to `MobileFirst Authorization server`. It is being used by `getIntrospectionToken` to send a request to the token endpoint, and by `introspectClientRequest` method to send a request to the introspection endpoint. This method returns an `HttpWebResponse` which we use in `getIntrospectionToken` method to extract the access_token from and store it as the message inspector token. In `introspectClientRequest` method it is used just to return the MFP authorization server response.

```c#
private HttpWebResponse sendRequest(Dictionary<string, string> postParameters, string endPoint, string authHeader) {
  string postData = "";
  foreach (string key in postParameters.Keys)
  {
    postData += HttpUtility.UrlEncode(key) + "=" + HttpUtility.UrlEncode(postParameters[key]) + "&";
  }

  HttpWebRequest request = (HttpWebRequest)WebRequest.Create(new System.Uri(azServerBaseURL + endPoint));
  request.Method = "POST";
  request.ContentType = "application/x-www-form-urlencoded";
  request.Headers.Add(HttpRequestHeader.Authorization, authHeader);

  // Attach Post Data
  byte[] data = Encoding.ASCII.GetBytes(postData);
  request.ContentLength = data.Length;
  Stream dataStream = request.GetRequestStream();
  dataStream.Write(data, 0, data.Length);
  dataStream.Close();

  return (HttpWebResponse)request.GetResponse();
}
```

## Send request to Introspection Endpoint with client token
Now after we are authorized by `MobileFirst Authorization Server` we can validate the `client token` content. Now we are sending a request to the `Introspection endpoint`, adding the token we received in the previous step to the request header and the `client token` in the `post data` of the request. Next we will examine the response from `MobileFirst Authorization Server` in `postProcess` method.

```c#
private HttpWebResponse introspectClientRequest(string clientToken) {
  // Prepare the Post Data - add the client token to the postParameters dictionary with the key "token"
  Dictionary<string, string> postParameters = new Dictionary<string, string> { };
  postParameters.Add("token", clientToken);

  // send the request using the sendRequest() method and return an HttpWebResponse
  return sendRequest(postParameters, "introspection", "Bearer " + filterIntrospectionToken);
}
```

## Post-process Validation
Now we examine the response status:

1. In case of **409 (Conflict response)** - we will forward this status to the client with the received headers.
2. If the response status is **401 (Unauthorized)** it means that our token has expired, so we should obtain token again and start the process again with the new token. In order to do so, we set `filterIntrospectionToken` to null and call `validateRequest` again.
3. At this point we are checking that the response equals to **200 OK** - if not we throw an exception that validation was not successful.
4. Now that we know that the response status is OK there are 2 more checks left within the response, so first we initialize `azResponse`, which is a class we defined to reprisent the response with our current response, and then we examine the following:
  1. We first make sure that this request is `active` (active==true)
  2. Lastly we check that the request includes the right `scope`

```c#
private void postProcess(OutgoingWebResponseContext response, HttpWebResponse currentResponse, string scope, Message request)
{
  // Check Conflict response (409)
  if (currentResponse.StatusCode == HttpStatusCode.Conflict)
  {
    response.StatusCode = HttpStatusCode.Conflict;
    response.Headers.Add(currentResponse.Headers);
    flushResponse();
  }

  // Check if filterToken has expired (401) - if so we should obtain a new token and run validateRequest() again
  else if (currentResponse.StatusCode == HttpStatusCode.Unauthorized)
  {
    filterIntrospectionToken = null;
    validateRequest(request);
    return; // stops the current instance of validateRequest
  }

  // Make sure that HttpStatusCode = 200 ok (before checking active==true & scope)
  else if (currentResponse.StatusCode != HttpStatusCode.OK)
  {
    throw new WebFaultException<string>("Authentication did not succeed, Please try again...", HttpStatusCode.BadRequest);
  }

  // Create an object from the response
  azResponse azResp = new azResponse(currentResponse);

  // Check if active == false
  if (!azResp.isActive)
  {
    response.StatusCode = HttpStatusCode.Unauthorized;
    response.Headers.Add(HttpResponseHeader.WwwAuthenticate, "Bearer error=\"invalid_token\"");
    flushResponse();
  }

  // Check scope
  else if (!azResp.scope.Contains(scope))
  {
    response.StatusCode = HttpStatusCode.Forbidden;
    response.Headers.Add(HttpResponseHeader.WwwAuthenticate, "Bearer error=\"insufficient_scope\", scope=\"" + scope + "\"");
    flushResponse();
  }
}
```

## Sample
[Download the Node.js sample](https://github.com/MobileFirst-Platform-Developer-Center/DotNetTokenValidator/tree/release80).

### Sample usage

1. Use Visual Studio to open, build and run the sample as a service (run Visual Studio as an administrator).
2. Make sure to [update the confidential client](../#confidential-client) and secret values in the MobileFirst Operations Console.
3. Deploy either of the security checks: **[UserLogin](../../user-authentication/security-check/)** or **[PinCodeAttempts](../../credentials-validation/security-check/)**.
4. Register the matching application.
5. Map the `accessRestricted` scope to the security check.
6. Update the client application to make the `WLResourceRequest` to your servlet URL.
