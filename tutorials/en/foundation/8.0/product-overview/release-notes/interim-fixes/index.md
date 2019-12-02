---
layout: tutorial
title: What's new in CD Updates
breadcrumb_title: CD Updates
weight: 2
---
<!-- NLS_CHARSET=UTF-8 -->
<br/>
Interim fixes and CD Updates provide patches and updates to correct problems and keep {{ site.data.keys.product_full }} current for new releases of mobile operating systems. CD Updates also enhance the functionality of the product by introducing new features.

Interim fixes and CD Updates are cumulative. When you download the latest v8.0 interim fix or CD Update, you get all of the fixes and features from earlier interim fixes and CD Updates.

Download and install the latest CD Update to obtain all of the features that are described in the following sections.

> For a list of iFix releases of {{ site.data.keys.product }} 8.0, [see here]({{site.baseurl}}/blog/tag/iFix_8.0/).

### Features included with CD update 6 (8.0.0.0-MFPF-IF201911050809-CDUpdate-06)

#### <span style="color:Black">Server</span>
##### <span style="color:NAVY">**Performance Improvements**</span>

Optimized Mobile Foundation database operations and introduced automated purging of records database.

##### <span style="color:NAVY">**Application Center now available inside DevKit**</span>

Application Center is now available as a package with [DevKit]({{site.baseurl}}/downloads/). This enables developers to build apps and publish them to the private store, which is now available as part of the DevKit.

##### <span style="color:NAVY">**Stack support for vendor software**</span>

Mobile Foundation now supports Windows Server 2016 SE and Oracle 18c.

##### <span style="color:NAVY">**Support for application development frameworks**</span>

Mobile Foundation supports the latest frameworks released by Apple and Google with support for [iOS 13]({{site.baseurl}}/blog/2019/09/19/IBM-MobileFoundation-iOS13/), iPadOS and [Android 10]({{site.baseurl}}/blog/2019/09/04/mobilefirst-android-Q/). The platform also provides an SDK for Swift 5.

##### <span style="color:NAVY">**Connect securely to backend apps using an API Proxy**</span>

When connecting to the enterprise backend, it is possible to leverage the security and analytics of Mobile Foundation platform using the API Proxy. API Proxy proxies the requests to the actual backend. [Learn more]({{site.baseurl}}/tutorials/en/foundation/8.0/digital-app-builder/api-proxy/).

#### <span style="color:Black">Analytics</span>
##### <span style="color:NAVY">**In-App Feedback**</span>

The in-app feedback feature was earlier available in the Mobile Foundation service on IBM Cloud and has now been ported to the on-prem and container distribution of Mobile Foundation. Using this feature users can share feedback from the app in the form of screen shots, annotations and text. An administrator can login to the analytics console to view the feedback received and take necessary action.



#### <span style="color:Black">OpenShift package</span>
##### <span style="color:NAVY">**Mobile Foundation is part of IBM Cloud Pak for Applications v3**</span>

Mobile Foundation is now available as part of [IBM Cloud Pak for Apps]({{site.baseurl}}/blog/2019/09/13/announcing-support-for-mf-on-rhocp/) and supports Red Hat Open Shift 3.11 and Red Hat Open Shift 4.2. The services currently available are mobile core, analytics, push notifications and app center. Using this capability developers can build cloud native applications using backend microservices and mobile services.


### Features included with CD update 5 (8.0.0.0-MFPF-IF201903190949-CDUpdate-05)

##### <span style="color:NAVY">**CoreML Update**</span>

ML (Machine Learning) models can be executed locally on the iOS mobile device using Apple’s CoreML framework.
Mobile Foundation provides the ability to manage the distribution of these models to devices securely. [Learn more](https://mobilefirstplatform.ibmcloud.com/blog/2019/02/08/distribute-coreml-models-securely-using-mfp/).

##### <span style="color:NAVY">**App Authenticity for watchOS**</span>

App Authenticity is a security feature, which validates the authenticity of the application before providing access. This feature was available for mobile apps. The feature is now extended for Apple WatchOS apps. [Learn more]({{site.baseurl}}/tutorials/en/foundation/8.0/application-development/watchos/).

##### <span style="color:NAVY">**Push Notifications - Additional message features and attributes for FCM**</span>

Push Notifications now supports the following additional message attributes.
1. Lights
2. Styles (Inbox, BigText, PictureNotifications)


### Features included with CD update 4 (8.0.0.0-MFPF-IF201812191602-CDUpdate-04)

##### <span style="color:NAVY">**HTTP/2 Support for APNs Push Notifications**</span>

Push Notifications in MobileFirst now supports the HTTP/2 based APNs Push Notifications along with the legacy TCP Socket based notifications. [Learn more]({{site.baseurl}}/tutorials/en/foundation/8.0/notifications/sending-notifications/#http2-support-for-apns-push-notifications).

##### <span style="color:NAVY">**React Native Push SDK released**</span>

React Native SDK for Push (*react-native-ibm-mobilefirst-push 1.0.0*) is released with this CD Update.


### Features introduced with CD update 3 (8.0.0.0-MFPF-IF201811050432-CDUpdate-03)

##### <span style="color:NAVY">**Support for refresh tokens on iOS**</span>

Mobile Foundation introduces the refresh token feature on iOS starting with this CD Update. [Learn more]({{site.baseurl}}/tutorials/en/foundation/8.0/authentication-and-security/#refresh-tokens).

##### <span style="color:NAVY">**Download admin CLI (*mfpadm*) from Mobile Foundation console**</span>

Mobile Foundation admin CLI (*mfpadm*) can now be downloaded from within the *Download Center* of the Mobile Foundation console.

##### <span style="color:NAVY">**Support for Node v8.x for MobileFirst CLI**</span>

Starting from this iFix (*8.0.0.0-MFPF-IF201810040631*), Mobile Foundation adds support for Node v8.x for MobileFirst CLI.

##### <span style="color:NAVY">**Remove dependency on *libstdc++* for Cordova projects**</span>

Starting with this iFix (*8.0.0.0-MFPF-IF201809041150*), a change to remove *libstdc++* as a dependency to Cordova projects is introduced. This is required for new apps running on iOS 12. For further details, such as a workaround, refer to [this blog post](https://mobilefirstplatform.ibmcloud.com/blog/2018/07/23/mfp-support-for-ios12/).

### Features introduced with CD update 2 (8.0.0.0-MFPF-IF201807180449-CDUpdate-02)

##### <span style="color:NAVY">**Support for React Native development**</span>

Starting with the CD Update (*8.0.0.0-MFPF-IF201807180449-CDUpdate-02*), Mobile Foundation [announces]({{site.baseurl}}/blog/2018/07/24/React-Native-SDK-Mobile-Foundation/) the support for React Native development with the availability of IBM Mobile Foundation SDK for React Native apps. [Learn more]({{site.baseurl}}/tutorials/en/foundation/8.0/reactnative-tutorials/).

##### <span style="color:NAVY">**Automated synchronization of JSONStore collections with CouchDB databases for iOS and Cordova SDK**</span>

Starting with the CD Update (*8.0.0.0-MFPF-IF201807180449-CDUpdate-02*), using MobileFirst iOS SDK and Cordova SDK, you can automate the synchronization of data between a JSONStore Collection on a device with any flavour of CouchDB database, including [Cloudant](https://www.ibm.com/in-en/marketplace/database-management). For more information on this feature, read this [blog post]({{site.baseurl}}/blog/2018/07/24/jsonstoresync-couchdb-databases-ios-and-cordova/).

##### <span style="color:NAVY">**Introducing Refresh tokens**</span>

Starting with the CD Update (*8.0.0.0-MFPF-IF201807180449-CDUpdate-02*), Mobile Foundation now introduces special kind of tokens called Refresh tokens that can be used to request a new access token.  [Learn more]({{site.baseurl}}/tutorials/en/foundation/8.0/authentication-and-security/#refresh-tokens).

##### <span style="color:NAVY">**Support for Cordova v8 and Cordova Android v7**</span>

Starting from this iFix (*8.0.0.0-MFPF-IF201804051553*), MobileFirst Cordova plugins for Cordova v8 and Cordova Android v7 is supported. To work with the mentioned version of Cordova, you need to get the latest MobileFirst plugins and upgrade to the latest CLI (mfpdev-cli) version. For details on supported versions for individual platforms, refer to  [Adding the MobileFirst Foundation SDK to Cordova Applications]({{site.baseurl}}/tutorials/en/foundation/8.0/application-development/sdk/cordova/#support-levels).

##### <span style="color:NAVY">**Automated synchronization of JSONStore collections with CouchDB databases**</span>

Starting with this iFix (*8.0.0.0-MFPF-IF201802201451*), using MobileFirst Android SDK, you can automate the synchronization of data between a JSONStore Collection on a device with any flavour of CouchDB database, including [Cloudant](https://www.ibm.com/in-en/marketplace/database-management). For more information on this feature, read this [blog post]({{site.baseurl}}/blog/2018/02/23/jsonstoresync-couchdb-databases/).

### Features introduced with CD update 1 (8.0.0.0-MFPF-IF201711230641-CDUpdate-01)

##### <span style="color:NAVY">**Support for Eclipse UI editor**</span>

Starting with CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01*, WYSIWYG editor is now provided in MobileFirst Studio’s Eclipse. Developers can design and implement UI for their Cordova applications using this UI editor. [Learn more](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/application-development/cordova-apps/developing-ui/).

##### <span style="color:NAVY">**New adapters for building cognitive apps**</span>

Starting with CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01*, Mobile Foundation has introduced two new pre-built cognitive services adapters for the [*Watson Tone Analyzer*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonToneAnalyzer) and [*Language Translator*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonLanguageTranslator) services. These adapters are available to be downloaded and deployed from the *Download Center* in the Mobile Foundation Console.

##### <span style="color:NAVY">**Dynamic App Authenticity**</span>

Starting with iFix *8.0.0.0-MFPF-IF20170220-1900*, A new implementation of *application authenticity* is provided. This implementation does not require the offline *mfp-app-authenticity* tool for generating the *.authenticity_data* file. Instead, you can enable or disable *application authenticity* from the MobileFirst console. For more information see [Configuring Application Authenticity](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/authentication-and-security/application-authenticity).

##### <span style="color:NAVY">**Appcenter (client & server) support for Windows 10**</span>

Starting with iFix *8.0.0.0-MFPF-IF20170327-1055*, Windows 10 UWP apps are supported in IBM Application Center. The user can now upload Windows 10 UWP apps and install the same on their device. The Windows 10 UWP client project for installing the UWP app is now shipped with the Application Center. You can open the project in Visual Studio and create a binary (for example, *.appx*) for distribution. Application Center does not provide a predefined method of distributing the mobile client. For more information, see [Microsoft Windows 10 Universal (Native) IBM AppCenter client](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/appcenter/preparations/#microsoft-windows-10-universal-native-ibm-appcenter-client).

##### <span style="color:NAVY">**MobileFirst Eclipse plugin support for Eclipse Neon**</span>

Starting with iFix *8.0.0.0-MFPF-IF20170426-1210*, MobileFirst Eclipse plugin is updated to support Eclipse Neon.

##### <span style="color:NAVY">**Android SDK modified to use a newer version of OkHttp (version 3.4.1)**</span>

Starting with iFix *8.0.0.0-MFPF-IF20170605-2216*, Android SDK has been modified to use a newer version of *OkHttp (version 3.4.1)* instead of the old version that was previously bundled with the MobileFirst SDK for Android. OkHttp is added as a dependency rather than being bundled with the SDK. This allows freedom of choice in using the OkHttp library for developers and also prevents conflicts with multiple versions of OkHttp.

##### <span style="color:NAVY">**Support for Cordova v7**</span>

Starting with iFix *8.0.0.0-MFPF-IF20170608-0406*, Cordova v7 is supported. For details on supported versions of individual platforms, refer to [Adding the MobileFirst Foundation SDK to Cordova Applications](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/application-development/sdk/cordova/).

##### <span style="color:NAVY">**Multiple certificate pinning support**</span>

Starting with iFix (*8.0.0.0-MFPF-IF20170624-0159*), Mobile Foundation supports pinning of multiple certificates. Earlier to this iFix, Mobile Foundation supported pinning of a single certificate. Mobile Foundation introduced a new API, which allows connection to multiple hosts by allowing the user to pin public keys of multiple X509 certificates to the client application. This feature is supported only for native Android and iOS apps. Learn more about *Multiple certificate pinning support* from [What's new](http://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/product-overview/release-notes/whats-new/), under the section *What's new in MobileFirst APIs*.

##### <span style="color:NAVY">**Adapters for building a cognitive app**</span>

Starting with iFix (*8.0.0.0-MFPF-IF20170710-1834*), Mobile Foundation has introduced pre-built adapters for Watson cognitive services such as [*WatsonConversation*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonConversationAdapter), [*WatsonDiscovery*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonDiscoveryAdapter), and [*WatsonNLU (Natural Language Understanding)*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonNLUAdapter). These adapters are available to be downloaded and deployed from the *Download Center* in the Mobile Foundation Console.

##### <span style="color:NAVY">**Cloud Functions adapter for building a serverless app**</span>

Starting with iFix (*8.0.0.0-MFPF-IF20170710-1834*), Mobile Foundation introduced a pre-built adapter called [*Cloud Functions adapter*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/OpenWhiskAdapter) for the [Cloud Functions Platform](https://console.bluemix.net/openwhisk/). The adapter is available to be downloaded and deployed from the *Download Center* in the Mobile Foundation Console.

##### <span style="color:NAVY">**Support for pinning multiple certificates in the Cordova SDK**</span>

Starting with this iFix (*8.0.0.0-MFPF-IF20170803-1112*) pinning of multiple certificates is supported in the Cordova SDK. Read more on *Multiple certificate pinning support* from [What's new](http://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/product-overview/release-notes/whats-new/), under the section *What's new in MobileFirst APIs* .

##### <span style="color:NAVY">**Support for Cordova browser platform**</span>

Starting with iFix (*8.0.0.0-MFPF-IF20170823-1236*), {{ site.data.keys.product }} supports the Cordova browser platform along with the earlier supported platforms of Cordova Windows, Cordova Android, and Cordova iOS. [Learn more](https://mobilefirstplatform.ibmcloud.com/blog/2017/08/29/cordova-browser-compatibility-with-MFP/).

##### <span style="color:NAVY">**Generate an adapter from its OpenAPI specification**</span>

Starting with iFix (*8.0.0.0-MFPF-IF20170901-1903*), {{ site.data.keys.product }} introduced the capability to auto-generate an adapter from its OpenAPI specification. {{ site.data.keys.product }} users can now focus on the application logic instead of creating the {{ site.data.keys.product }} adapter, which connects the application to the desired back-end service. [Learn more]({{site.baseurl}}/tutorials/en/foundation/8.0/adapters/microservice-adapter/).

##### <span style="color:NAVY">**Support for iOS 11 and iPhone X**</span>

Starting with CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01*, Mobile Foundation announced the support for iOS 11 and iPhone X on Mobile Foundation v8.0. For further details, read the blog post [IBM MobileFirst Platform Foundation Support for iOS 11 and iPhone X](https://mobilefirstplatform.ibmcloud.com/blog/2017/09/18/mfp-support-for-ios11/).

##### **<span style="color:NAVY">Support for Android Oreo</span>**

Starting with CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01*, Mobile Foundation announced the support for Android Oreo with this [blog post](https://mobilefirstplatform.ibmcloud.com/blog/2017/08/22/mobilefirst-android-Oreo/). Both native Android apps and hybrid/Cordova apps, built on older versions of Android, work as expected on Android Oreo when the device is upgraded through an OTA.

##### <span style="color:NAVY">**Mobile Foundation can now be deployed on Kubernetes clusters**</span>

Starting with CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01*, Mobile Foundation user can now deploy Mobile Foundation, which includes the Mobile Foundation Server, Mobile Analytics Server, and the Application Center, on Kubernetes clusters. The deployment package has been updated to support Kubernetes deployment. Read the [announcement](https://mobilefirstplatform.ibmcloud.com/blog/2017/09/09/mobilefoundation-on-kube/).
