---
layout: tutorial
title: Handling Push Notifications in Cordova
relevantTo: [cordova]
downloads:
  - name: Download Cordova project
    url: https://github.com/MobileFirst-Platform-Developer-Center/PushNotificationsCordova/tree/release80
weight: 4
---
## Overview
Before iOS, Android and Windows Cordova applications are able to receive and display push notifications, the **cordova-plugin-mfp-push** Cordova plug-in needs to be added to the Cordova project. Once an application has been configured, MobileFirst-provided Notifications API can be used in order to register &amp; unregister devices, subscribe &amp; unsubscribe tags and handle notifications. In this tutorial, you will learn how to handle push notification in Cordova applications.

> **Note:** In the release, authenticated notifications are **not supported** in Cordova applications due to a defect. However a workaround is provided: each `MFPPush` API call can be wrapped by `WLAuthorizationManager.obtainAccessToken("push.mobileclient").then( ... );`. The provided sample application uses this workround.

**Prequisites:**

* Make sure you have read the following tutorials:
    * [Setting up your MobileFirst development environment](../../setting-up-your-development-environment/)
    * [Adding the MobileFirst Foundation SDK to Android applications](../../adding-the-mfpf-sdk/cordova)
    * [Push Notifications Overview](../)
* MobileFirst Server to run locally, or a remotely running MobileFirst Server
* MobileFirst CLI installed on the developer workstation
* Cordova CLI installed on the developer workstation

#### Jump to
* [Notifications Configuration](#notifications-configuration)
* [Notifications API](#notifications-api)
* [Handling a push notification](#handling-a-push-notification)
* [Sample application](#sample-application)

## Notifications Configuration
Create a new Cordova project or use an existing one, and add one or more of the supported platforms: iOS, Android, Windows.

> If the MobileFirst Cordova SDK is not already present in the project, follow the instructions in the [Adding the MobileFirst Foundation SDK to Cordova applications](../../adding-the-mfpf-sdk/cordova) tutorial.

### Adding the Push plug-in

1. From a **command-line** window, navigate to the root of the Cordova project.  

2. Add the push plug-in to by running the command:

    ```bash
    cordova plugin add cordova-plugin-mfp-push
    ```

3. Build the Cordova project by running the command:

    ```bash
    cordova build
    ```

### iOS platform
The iOS platform requires an additional step.  
In Xcode, enable push notifications for your application in the **Capabilities** screen.

> <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> **Important:** the bundleId selected for the application must match the AppId that you have previously created in the Apple Developer site. See the [Push Notifications Overview] tutorial.

![image of where is the capability in Xcode](push-capability.png)

## Notifications API
### Client-side
Javascript Function | Description
--- | ---
[`MFPPush.initialize(success, failure)`](#initialization) | Initialize the MFPPush instance.
[`MFPPush.isPushSupported(success, failure)`](#is-push-supported) | Does the device support push notifications.
[`MFPPush.registerDevice(success, failure)`](#register-device) | Registers the device with the Push Notifications Service.
[`MFPPush.getTags(success, failure)`](#get-tags) | Retrieves all the tags available in a push notification service instance.
[`MFPPush.subscribe(tag, success, failure)`](#subscribe) | Subscribes to a particular tag.
[`MFPPush.getSubsciptions(success, failure)`](#get-subscriptions) | Retrieves the tags device is currently subscribed to
[`MFPPush.unsubscribe(tag, success, failure)`](#unsubscribe) | Unsubscribes from a particular tag.
[`MFPPush.unregisterDevice(success, failure)`](#unregister) | Unregisters the device from the Push Notifications Service

### API implementation

#### Initialization
Initialize the **MFPPush** instance.

- Required for the client application to connect to MFPPush service with the right application context.  
- The API method should be called first before using any other MFPPush APIs.
- Registers the callback function to handle received push notifications.

```javascript
MFPPush.initialize (
    function(successResponse) {
        alert("Successfully intialized");
        MFPPush.registerNotificationsCallback(notificationReceived);
    },
    function(failureResponse) {
        alert("Failed to initialize");
    }
);
```

#### Is push supported
Check if the device supports push notifications.

```javascript
MFPPush.isPushSupported (
    function(successResponse) {
        alert("Push Supported: " + successResponse);
    },
    function(failureResponse) {
        alert("Failed to get push support status");
    }
);
```

#### Register device
Register the device to the push notifications service.


```javascript
var options = { };
MFPPush.registerDevice(
    options,
    function(successResponse) {
        alert("Successfully registered");
    },
    function(failureResponse) {
        alert("Failed to register");
    }
);
```

> **Note:** Due to a defect, the `options` object for **Cordova-based Android** apps must currently contain an empty value as follows: `"phoneNumber":""`. Read more about the the `available options in the user documentation.

#### Get tags
Retrieve all the available tags from the push notification service.

```javascript
MFPPush.getTags (
    function(tags) {
        alert(JSON.stringify(tags));
},
    function() {
        alert("Failed to get tags");
    }
);
```

#### Subscribe
Subscribe to desired tags.

```javascript
var tags = ['sample-tag1','sample-tag2'];

MFPPush.subscribe(
    tags,
    function(tags) {
        alert("Subscribed successfully");
    },
    function() {
        alert("Failed to subscribe");
    }
);
```

#### Get subscriptions
Retrieve tags the device is currently subscribed to.

```javascript
MFPPush.getSubscriptions (
    function(subscriptions) {
        alert(JSON.stringify(subscriptions));
    },
    function() {
        alert("Failed to get subscriptions");
    }
);
```

#### Unsubscribe
Unsubscribe from tags.

```javascript
var tags = ['sample-tag1','sample-tag2'];

MFPPush.unsubscribe(
    tags,
    function(tags) {
        alert("Unsubscribed successfully");
    },
    function() {
        alert("Failed to unsubscribe");
    }
);
```

#### Unregister
Unregister the device from push notification service instance.

```javascript
MFPPush.unregisterDevice(
    function(successResponse) {
        alert("Unregistered successfully");
    },
    function() {
        alert("Failed to unregister");
    }
);
```

## Handling a push notification
You can handle a received push notification by operating on its response object in the registered callback function.

```javascript
var notificationReceived = function(message) {
    alert(JSON.stringify(message));
};
```

<img alt="Image of the sample application" src="notifications-app.png" style="float:right"/>
## Sample application
[Click to download](https://github.com/MobileFirst-Platform-Developer-Center/PushNotificationsCordova/tree/release80) the Cordova project.

**Note:** The latest version of Google Play Services is required to be installed on any Android device for the sample to run.

### Sample usage

1. From a **Command-line**, navigate to the project's root folder.
2. Add a platform using the `cordova platform add` command.
3. Register the application by running the command: `mfpdev app register`.
4. In the MobileFirst Operations Console
    - Setup the MobileFirst Server with either GCM details or APNS certificate, and define tags.
    - Under **Applications** → **PushNotificationsAndroid** → **Security** → **Map scope elements to security checks**, add a mapping for `push.mobileclient`.
5. Run the application by running the `cordova run` command.

**[Sending a notification](../sending-push-notifications):**

* Tag notification
    * Use the **MobileFirst Operations Console → [your application] → Push → Send Push tab**.
* Authenticated notification:
    * Deploy the [**UserLogin** Security Check](../../authentication-and-security/user-authentication/security-check).
    * In **MobileFirst Operations Console → [your application] → Security tab**, map the **push.mobileclient** scope to the **UserLogin** Security Check.
    * Use either the [REST APIs](../sending-push-notifications#rest-apis) to send the notification, or send to a userId from the Push section in the MobileFirst Operations Console.

