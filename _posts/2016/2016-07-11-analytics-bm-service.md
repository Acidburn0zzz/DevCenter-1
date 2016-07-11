---
title: Configuring Mobile Analytics and Mobile Foundation Bluemix services
date: 2016-07-11
tags:
- Bluemix
- Mobile_Foundation
version:
- 8.0
author:
  name: Ajay Chebbi
---

IBM MobileFirst Foundation capabilities are now available on Bluemix as a service called [Mobile Foundation](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/ibm-containers/using-mobile-foundation/). Mobile Foundation service provides you with all the capabilities that you need to build secure mobile apps using any technology of your choice for all the popular mobile OSs.

A new experimental Bluemix service was launched in April called [Mobile Analytics](https://mobilefirstplatform.ibmcloud.com/blog/2016/04/30/mobile-analytics-for-bluemix-service/). Mobile Analytics provides the developer valuable insight into the runtime of the app. It can provide you with app analytics like how many devices have connected, what is the OS breakdown, crash reporting  etc. etc. My personal favourite - client side developer logs. This is how I get to know if the code is falling in catch blocks where "you should never be here!". That too when its running on a users phone! We know all too well the app performs at its best when running on the  developers phone ;-)

<<<<<<< HEAD
Though the Mobile Analytics service is advertised (and [documented](https://new-console.ng.bluemix.net/docs/services/mobileanalytics/index.html) ) to be used only with its own client side SDKs, you can actually connect a Mobile Foundation server (or an on prem IBM MobileFirst Platform Server) to pump the events to this server! The MFP SDK that you install as part of integrating to MFP is enough to generate the analytics data - no additional SDK is needed. 
=======
Though the Mobile Analytics service is advertised (and documented) to be used only with its own client side SDKs, you can actually connect a Mobile Foundation server (or an on-prem IBM MobileFirst Server) to pump the events to this server! The MFP SDK that you install as part of integrating to MFP is enough to generate the analytics data - no additional SDK is needed. 
>>>>>>> MFPSamples/master

If you are familiar to the Analytics server of MFP, you will see the similiarities. Lets see how you can configure a MFP server to the Mobile Analytics service.


## Create an instance of the Mobile Analytics service
Login to your bluemix.net account and go to "All items". Then click the + button on the top right. This lists the catalog. Scroll all the wayyyy to the bottom to see a hidden treasure - a link called "Bluemix Experimental Services". Under the Mobile section you will see the "Mobile Analytics" service! phew! Click on it - give it a name - and you are ready to get started. Click on the Mobile Analytics instance tile you just created and go to the tab "Service Credentials". Here you will see a json with the access key. You will need this later

```json
{
    "credentials": {
        "accessKey": "<your analytics access key>"
    }
}
```


## Create an instance of the Mobile Foundation service
Now you can go to the catalog again, and in the "Mobile" section of the main catalog you will see the "Mobile Foundation" service. Pick a plan, give it a name - you know the drill now. On the landing page of this service, click on "Start server with advanced configuration". If you have already created a instance of the Mobile Foundation service, just go to the "Settings" tab.

Here go to the go to the JNDI section in the "Server Configuration" tab. If its already blank, click on "Copy from sample". You will see something like below. 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<server description="new server">

    <!-- MFPF Server properties JNDI entries -->

    <jndiEntry jndiName="${env.MFPF_RUNTIME_ROOT}/mfp.authorization.server" value='"embedded"'/>

    <!-- Declare the JNDI properties for the MobileFirst Administration Service. -->
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.admin.push.url" value='"http://${env.ADMIN_HOST}:${env.MFPF_SERVER_HTTPPORT}/${env.MFPF_PUSH_ROOT}"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.admin.authorization.server.url" value='"http://${env.ADMIN_HOST}:${env.MFPF_SERVER_HTTPPORT}/${env.MFPF_RUNTIME_ROOT}"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.push.authorization.client.id" value='"push"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.push.authorization.client.secret" value='"hsup"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.admin.authorization.client.id" value='"admin"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.admin.authorization.client.secret" value='"nimda"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.config.service.user" value='"${env.MFPF_SERVER_ADMIN_USER}"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.config.service.password" value='"${env.MFPF_SERVER_ADMIN_PASSWORD}"'/>


<!-- Declare the JNDI properties for the MobileFirst Analytics server. -->
<!--  <jndiEntry jndiName="${env.MFPF_RUNTIME_ROOT}/mfp.analytics.url" value="http://server:9080/analytics-service/rest"/> -->
<!--  <jndiEntry jndiName="${env.MFPF_RUNTIME_ROOT}/mfp.analytics.console.url" value="http://server:9080/analytics/console"/> -->
<!-- If the mfp-analytics.url is to an on-premises installed MFPF Analytics server, enter correct values for the following two properties -->
<!--   <jndiEntry jndiName="${env.MFPF_RUNTIME_ROOT}/mfp.analytics.username" value="admin"/> -->
<!--  <jndiEntry jndiName="${env.MFPF_RUNTIME_ROOT}/mfp.analytics.password" value="admin"/> -->
<!-- If the mfp.analytics.url is to Bluemix Mobile Analytics service, uncomment the following and enter the correct value -->
<!-- <jndiEntry jndiName="${env.MFPF_RUNTIME_ROOT}/bms.analytics.apikey" value='"a"'/> -->

</server>

```
 Change the highlighted lines. 

1. Change the JNDI parameter `{env.MFPF_RUNTIME_ROOT}/bms.analytics.apikey` to add the "accessKey" parameter from the Analytics service Credentials.

2. Specify the `${env.MFPF_RUNTIME_ROOT}/mfp.analytics.url` to `https://mobile-analytics-dashboard.ng.bluemix.net/analytics-service/rest` 

3. Optionally specify the `${env.MFPF_RUNTIME_ROOT}/mfp.analytics.console.url`  Here specify the *Instance ID*, this is the Analytics service instance ID - that you get from the analytics service dashboard URL - This is needed only if you want the direct link from the MFP console to the analytics console.

Now your JNDI entries would look like following

```xml
<?xml version="1.0" encoding="UTF-8"?>
<server description="new server">
  
  <!-- MFPF Server properties JNDI entries -->

    <jndiEntry jndiName="${env.MFPF_RUNTIME_ROOT}/mfp.authorization.server" value='"embedded"'/>

    <!-- Declare the JNDI properties for the MobileFirst Administration Service. -->
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.admin.push.url" value='"http://${env.ADMIN_HOST}:${env.MFPF_SERVER_HTTPPORT}/${env.MFPF_PUSH_ROOT}"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.admin.authorization.server.url" value='"http://${env.ADMIN_HOST}:${env.MFPF_SERVER_HTTPPORT}/${env.MFPF_RUNTIME_ROOT}"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.push.authorization.client.id" value='"push"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.push.authorization.client.secret" value='"hsup"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.admin.authorization.client.id" value='"admin"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.admin.authorization.client.secret" value='"nimda"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.config.service.user" value='"${env.MFPF_SERVER_ADMIN_USER}"'/>
    <jndiEntry jndiName="${env.MFPF_ADMIN_ROOT}/mfp.config.service.password" value='"${env.MFPF_SERVER_ADMIN_PASSWORD}"'/>


<!-- Declare the JNDI properties for the MobileFirst Analytics server. -->
  <jndiEntry jndiName="${env.MFPF_RUNTIME_ROOT}/mfp.analytics.console.url" value=" https://mobile-analytics-dashboard.ng.bluemix.net/analytics/console/dashboard?instanceId=<your instance id>"/> 
  <jndiEntry jndiName="${env.MFPF_RUNTIME_ROOT}/mfp.analytics.url" value="https://mobile-analytics-dashboard.ng.bluemix.net/analytics-service/rest"/> 
<!-- If the mfp-analytics.url is to an on-premises installed MFPF Analytics server, enter correct values for the following two properties -->
<!--   <jndiEntry jndiName="${env.MFPF_RUNTIME_ROOT}/mfp.analytics.username" value="admin"/> -->
<!--  <jndiEntry jndiName="${env.MFPF_RUNTIME_ROOT}/mfp.analytics.password" value="admin"/> -->
<!-- If the mfp.analytics.url is to Bluemix Mobile Analytics service, uncomment the following and enter the correct value -->
 <jndiEntry jndiName="${env.MFPF_RUNTIME_ROOT}/bms.analytics.apikey" value="your analytics access key"/> 

</server>

```
Now hit on "Start Advanced Server" at the bottom of the page. 
Couple of minutes later you will get a MFP server with Mobile Analytics configured. 

## Analytics
Once you start using the apps connected to the Mobile First server instance - the analytics data starts getting published. If you want to see more in the analytics service - please leave a comment at the bottom of the [analytics announcement article](https://mobilefirstplatform.ibmcloud.com/blog/2016/04/30/mobile-analytics-for-bluemix-service/) .

