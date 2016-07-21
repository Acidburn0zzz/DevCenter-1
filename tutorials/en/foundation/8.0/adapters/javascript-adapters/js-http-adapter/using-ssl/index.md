---
layout: tutorial
title: Using SSL in JavaScript HTTP Adapter
breadcrumb_title: Using SSL
relevantTo: [ios,android,windows,javascript]
weight: 1
---
<br/>
You can use SSL in an HTTP adapter with simple and mutual authentication to connect to back-end services.  
SSL represents transport level security, which is independent of basic authentication. It is possible to do basic authentication either over HTTP or HTTPS.

1. Set the URL protocol of the HTTP adapter to <b>https</b> in the adapter.xml file.
2. Store SSL certificates in the MobileFirst Server keystore. [See Configuring the MobileFirst Server keystore](http://www.ibm.com/support/knowledgecenter/en/SSHS8R_8.0.0/com.ibm.worklight.dev.doc/dev/t_mfp_server_keystore_configuring.html#t_mfp_server_keystore_configuring).

### SSL with mutual authentication
If you use SSL with mutual authentication, you must also perform the following steps:

1. Generate your own private key for the HTTP adapter or use one provided by a trusted authority.
2. If you generated your own private key, export the public certificate of the generated private key and import it into the back-end truststore.
3. Define an alias and password for the private key in the `connectionPolicy` element of the **adapter.xml** file. 
