---
title: Server-side log collection
breadcrumb_title: Server-side log collection
relevantTo: [ios,android,windows,javascript]
weight: 7
---
## Overview
Logging is the instrumentation of source code that uses API calls to record messages in order to facilitate diagnostics and debugging. The MobileFirst Foundation Operations Server gives you the ability to contorl which logs should be collected remotley. This gives the server administrator more fine tuned control over the server resources.

## Logging levels
Logging libraries typically have verbosity controls that are frequently called **levels**. From least to most verbose: ERROR, WARN, INFO, LOG and DEBUG. 

## Log Collection in Adapters
Logs in adapters can be viewed in the underlying application server logging mechanism.  

In WebSphere full profile and Liberty profile the **messages.log** and **trace.log** files are used, depending on the specified logging level in the **server.xml** file. These logs can also be forwarded to the Analytics console as explained in the server-sidel log collection tutorials for Java and JavaScript adapters.

## Accessing the log file
* In an on-prem installation of the MobileFirst Server, the file is available depending on the underlying application server. 
    * [IBM WebSphere Application Server Full Profile](http://ibm.biz/knowctr#SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/ttrb_trcover.html)
    * [IBM WebSphere Application Server Liberty Profile](http://ibm.biz/knowctr#SSEQTP_8.5.5/com.ibm.websphere.wlp.doc/ae/rwlp_logging.html?cp=SSEQTP_8.5.5%2F1-16-0-0)
    * [Apache Tomcat](http://tomcat.apache.org/tomcat-7.0-doc/logging.html)
* To get to the logs in an IBM Containers server deployment, see the [IBM Containers log and trace collection](../../ibm-containers/mobilefirst-server-using-scripts/log-and-trace-collection/) tutorial.