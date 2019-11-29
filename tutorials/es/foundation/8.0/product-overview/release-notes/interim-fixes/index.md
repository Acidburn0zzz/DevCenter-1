---
layout: tutorial
title: Novedades en los arreglos temporales de entrega continua
breadcrumb_title: CD Updates
weight: 2
---
<!-- NLS_CHARSET=UTF-8 -->
<br/>
Los arreglos temporales y las actualizaciones de entrega continua proporcionan parches y actualizaciones para corregir problemas y mantener {{ site.data.keys.product_full }} actualizado para nuevos releases de los sistemas operativos móviles. Las actualizaciones de entrega continua también amplían la funcionalidad del producto añadiendo características nuevas.

Los arreglos temporales y las actualizaciones de entrega continua son acumulativos. Cuando descarga los últimos arreglos temporales o actualizaciones de entrega continua de la v8.0, obtiene todas las correcciones de arreglos temporales y actualizaciones de entrega continua anteriores.

Descargue e instale la actualización de entrega continua más reciente para obtener todas las características que se describen en las secciones siguientes.

> Para obtener una lista de releases de iFix de {{ site.data.keys.product }} 8.0, [lea esto]({{site.baseurl}}/blog/tag/iFix_8.0/).

### Características incluidas en el disco compacto de actualización 6 (8.0.0.0-MFPF-IF201911050809-CDUpdate-06)

#### <span style="color:Black">Server</span>
##### <span style="color:NAVY">**Mejoras de rendimiento**</span>

Se han optimizado las operaciones de la base de datos de Mobile Foundation y se ha incluido la depuración automática de la base de datos de registro.

##### <span style="color:NAVY">**Ahora Application Center está disponible en DevKit**</span>

Ahora Application Center está disponible como un paquete con [DevKit]({{site.baseurl}}/downloads/). Esto permite a los desarrolladores crear aplicaciones y publicarlas en el almacén privado, que ahora está disponible como parte de DevKit.

##### <span style="color:NAVY">**Soporte de pila para el software de proveedor**</span>

Ahora Mobile Foundation da soporte a Windows Server 2016 SE y Oracle 18c.

##### <span style="color:NAVY">**Soporte de infraestructuras de desarrollo de aplicaciones**</span>

Mobile Foundation da soporte a las infraestructuras más recientes publicadas por Apple y Google con soporte para [iOS 13]({{site.baseurl}}/blog/2019/09/19/IBM-MobileFoundation-iOS13/), iPadOS y [Android 10]({{site.baseurl}}/blog/2019/09/04/mobilefirst-android-Q/). La plataforma también proporciona un SDK para Swift 5.

##### <span style="color:NAVY">**Conecte de forma segura con aplicaciones de fondo utilizando un proxy de API**</span>

Cuando conecta con el programa de fondo de la empresa, puede beneficiarse de la seguridad y las analíticas de la plataforma Mobile Foundation utilizando el proxy de API. El proxy de API actúa como proxy para las solicitudes dirigidas al programa de fondo real. [Más información]({{site.baseurl}}/tutorials/en/foundation/8.0/digital-app-builder/api-proxy/).

#### <span style="color:Black">Analíticas</span>
##### <span style="color:NAVY">**Comentarios de aplicación interna**</span>

Anteriormente, la característica de comentarios de aplicación interna estaba disponible en el servicio Mobile Foundation en IBM Cloud y ahora se ha trasladado a la distribución local y de contenedor de Mobile Foundation. Utilizando esta característica los usuarios pueden compartir comentarios desde la aplicación con el formato de capturas de pantalla, anotaciones y texto. El administrador puede iniciar sesión en la consola de analíticas para ver los comentarios recibidos y llevar a cabo las acciones necesarias. 



#### <span style="color:Black">Paquete OpenShift</span>
##### <span style="color:NAVY">**Mobile Foundation forma parte de IBM Cloud Pak for Applications v3**</span>

Ahora Mobile Foundation está disponible como parte de [IBM Cloud Pak for Apps]({{site.baseurl}}/blog/2019/09/13/announcing-support-for-mf-on-rhocp/) y da soporte a Red Hat Open Shift 3.11 y Red Hat Open Shift 4.2. Los servicios que están disponibles actualmente son Mobile Core, Analíticas, notificaciones Push y App Center. Utilizando está prestación los desarrolladores pueden crear aplicaciones nativas utilizando los microservicios de fondo y los servicios móviles. 


### Características incluidas con el CD de actualización 5 (8.0.0.0-MFPF-IF201903190949-CDUpdate-05)

##### <span style="color:NAVY">**Actualización de CoreML**</span>

Los modelos ML (Machine Learning, aprendizaje automático) se pueden ejecutar localmente en el dispositivo móvil iOS mediante la infraestructura CoreML de Apple.
Mobile Foundation ofrece la posibilidad de gestionar la distribución de estos modelos a dispositivos de forma segura. [Más información](https://mobilefirstplatform.ibmcloud.com/blog/2019/02/08/distribute-coreml-models-securely-using-mfp/).

##### <span style="color:NAVY">**App Authenticity para watchOS**</span>

App Authenticity es una función de seguridad que valida la autenticidad de la aplicación antes de proporcionar acceso. Esta característica estaba disponible para apps para móviles. Ahora esta característica se ha ampliado a las apps WatchOS de Apple. [Más información]({{site.baseurl}}/tutorials/en/foundation/8.0/application-development/watchos/).

##### <span style="color:NAVY">**Notificaciones push: características y atributos de mensajes adicionales para FCM**</span>

Ahora las notificaciones push dan soporte a los siguientes atributos de mensajes adicionales. 
1. Lights
2. Styles (Inbox, BigText, PictureNotifications)


### Características incluidas en el disco compacto de actualización 4 (8.0.0.0-MFPF-IF201812191602-CDUpdate-04)

##### <span style="color:NAVY">**Soporte de HTTP/2 para las notificaciones push de APN**</span>

Ahora las notificaciones push en MobileFirst admiten notificaciones push de APN basadas en HTTP/2 además de las notificaciones heredadas basadas en sockets TCP. [Más información]({{site.baseurl}}/tutorials/en/foundation/8.0/notifications/sending-notifications/#http2-support-for-apns-push-notifications).

##### <span style="color:NAVY">**Publicado el kit de desarrollo de software nativo de push de React**</span>

Se ha publicado el kit de desarrollo de software nativo de React para Push (*react-native-ibm-mobilefirst-push 1.0.0*) con este disco compacto de actualización.


### Características presentadas en CD Update 3 (8.0.0.0-MFPF-IF201811050432-CDUpdate-03)

##### <span style="color:NAVY">**Soporte de señales de renovación en iOS**</span>

Mobile Foundation presenta la característica de renovación en iOS a partir de este CD Update. [Más información]({{site.baseurl}}/tutorials/en/foundation/8.0/authentication-and-security/#refresh-tokens).

##### <span style="color:NAVY">**Descargue la CLI de administración (*mfpadm*) desde la consola de Mobile Foundation**</span>

La CLI de administración de Mobile Foundation (*mfpadm*) ahora se puede descargar desde el *Centro de descargas* de la consola de Mobile Foundation.

##### <span style="color:NAVY">**Soporte de Node v8.x para la CLI de MobileFirst**</span>

A partir de este iFix (*8.0.0.0-MFPF-IF201810040631*) Mobile Foundation añade soporte de Node v8.x para la CLI de MobileFirst.

##### <span style="color:NAVY">**Eliminación de dependencia de *libstdc++* para proyectos de Cordova**</span>

A partir de este iFix (*8.0.0.0-MFPF-IF201809041150*) se presenta un cambio para eliminar *libstdc++* como dependencia de proyectos de Cordova. Esto es necesario para las aplicaciones nuevas que se ejecutan en iOS 12. Para obtener más información, como una solución alternativa, consulte [esta entrada del blog](https://mobilefirstplatform.ibmcloud.com/blog/2018/07/23/mfp-support-for-ios12/).

### Características presentadas con CD Update 2 (8.0.0.0-MFPF-IF201807180449-CDUpdate-02)

##### <span style="color:NAVY">**Soporte del despliegue de React Native**</span>

A partir de CD Update (*8.0.0.0-MFPF-IF201807180449-CDUpdate-02*) Mobile Foundation [anuncia]({{site.baseurl}}/blog/2018/07/24/React-Native-SDK-Mobile-Foundation/) el soporte del desarrollo de React Native con la disponibilidad del SDK de IBM Mobile Foundation para aplicaciones React Native. [Más información]({{site.baseurl}}/tutorials/en/foundation/8.0/reactnative-tutorials/).

##### <span style="color:NAVY">**Sincronización automatizada de recopilaciones JSONStore con bases de datos CouchDB para los SDK de iOS y Cordova**</span>

A partir de CD Update (*8.0.0.0-MFPF-IF201807180449-CDUpdate-02*), si utiliza los SDK de iOS y Cordova de MobileFirst, puede automatizar la sincronización de los datos entre una recopilación JSONStore en un dispositivo con cualquier tipo de base de datos CouchDB, incluido [Cloudant](https://www.ibm.com/in-en/marketplace/database-management). Para obtener más información sobre esta característica, lea esta [entrada del blog]({{site.baseurl}}/blog/2018/07/24/jsonstoresync-couchdb-databases-ios-and-cordova/).

##### <span style="color:NAVY">**Presentación de las señales de renovación**</span>

A partir de CD Update (*8.0.0.0-MFPF-IF201807180449-CDUpdate-02*) Mobile Foundation presenta una clase especial de señales denominadas señales de renovación que se pueden utilizar para solicitar una nueva señal de acceso.  [Más información]({{site.baseurl}}/tutorials/en/foundation/8.0/authentication-and-security/#refresh-tokens).

##### <span style="color:NAVY">**Soporte de Cordova v8 y Cordova Android v7**</span>

A partir de este iFix (*8.0.0.0-MFPF-IF201804051553*), se da soporte a los plugins MobileFirst Cordova para Cordova v8 y Cordova Android v7. Para utilizar esta versión de Cordova, debe obtener los últimos plugins de MobileFirst y actualizar a la última versión de la CLI (mfpdev-cli). Para obtener información sobre las versiones soportadas para plataformas individuales, consulte [Adición del SDK de MobileFirst Foundation a aplicaciones Cordova]({{site.baseurl}}/tutorials/en/foundation/8.0/application-development/sdk/cordova/#support-levels).

##### <span style="color:NAVY">**Sincronización automatizada de recopilaciones JSONStore con bases de datos CouchDB**</span>

A partir de este iFix (*8.0.0.0-MFPF-IF201802201451*), si utiliza el SDK de MobileFirst para Android, puede automatizar la sincronización de los datos entre una recopilación JSONStore en un dispositivo con cualquier tipo de base de datos CouchDB, incluido [Cloudant](https://www.ibm.com/in-en/marketplace/database-management). Para obtener más información sobre esta característica, lea esta [entrada del blog]({{site.baseurl}}/blog/2018/02/23/jsonstoresync-couchdb-databases/).

### Características introducidas con CD update 1 (8.0.0.0-MFPF-IF201711230641-CDUpdate-01)

##### <span style="color:NAVY">**Soporte del editor de la interfaz de usuario de Eclipse**</span>

A partir de CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01* se proporciona el editor WYSIWYG en Eclipse de MobileFirst Studio. Los desarrolladores pueden diseñar e implementar la interfaz de usuario para sus aplicaciones Cordova mediante este editor de la interfaz de usuario. [Más información](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/application-development/cordova-apps/developing-ui/).

##### <span style="color:NAVY">**Nuevos adaptadores para crear aplicaciones cognitivas**</span>

A partir de CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01*, Mobile Foundation presenta dos nuevos adaptadores de servicios cognitivos incluidos para los servicios [*Watson Tone Analyzer*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonToneAnalyzer) y [*Language Translator*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonLanguageTranslator). Estos adaptadores están disponibles para su descarga y despliegue desde el *Centro de descargas* en la consola de Mobile Foundation.

##### <span style="color:NAVY">**Autenticidad dinámica de aplicación**</span>

A partir de iFix *8.0.0.0-MFPF-IF20170220-1900* se proporciona una nueva implementación de *autenticidad de aplicación*. Esta implementación no requiere la herramienta *mfp-app-authenticity* fuera de línea para generar el archivo *.authenticity_data*. En su lugar, puede habilitar o inhabilitar la *autenticidad de aplicación* desde la consola de MobileFirst. Para obtener más información, consulte [Configuración de la autenticidad de aplicación](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/authentication-and-security/application-authenticity).

##### <span style="color:NAVY">**Soporte de Appcenter (cliente y servidor) para Windows 10**</span>

A partir de iFix *8.0.0.0-MFPF-IF20170327-1055* se da soporte a las aplicaciones Windows 10 UWP en IBM Application Center. Ahora el usuario puede subir aplicaciones Windows 10 UWP e instalarlas en su dispositivo. Ahora el proyecto de cliente de Windows 10 UWP para instalar la aplicación UWP se proporciona con Application Center. Puede abrir el proyecto en Visual Studio y crear un binario (por ejemplo, *.appx*) para la distribución. Application Center no proporciona un método predefinido para distribuir el cliente móvil. Para obtener más información, consulte [Cliente de IBM AppCenter en Microsoft Windows 10 Universal (nativo)](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/appcenter/preparations/#microsoft-windows-10-universal-native-ibm-appcenter-client).

##### <span style="color:NAVY">**Soporte del plugin de Eclipse de MobileFirst para Eclipse Neon**</span>

A partir de iFix *8.0.0.0-MFPF-IF20170426-1210* el plugin de Eclipse de MobileFirst se ha actualizado para permitir Eclipse Neon.

##### <span style="color:NAVY">**Modificación del SDK de Android para utilizar una versión más nueva de OkHttp (versión 3.4.1)**</span>

A partir de iFix *8.0.0.0-MFPF-IF20170605-2216* el SDK de Android se ha modificado para utilizar una versión más nueva de *OkHttp (versión 3.4.1)* en lugar de la versión anterior que se proporcionaba anteriormente con el SDK de MobileFirst para Android. OkHttp se añade como una dependencia en lugar de incluirse en el SDK. Esto deja más libertad a los desarrolladores al utilizar la biblioteca de OkHttp y también evita conflictos de múltiples versiones de OkHttp.

##### <span style="color:NAVY">**Soporte de Cordova v7**</span>

A partir de iFix *8.0.0.0-MFPF-IF20170608-0406* se da soporte a Cordova v7. Para obtener información sobre las versiones soportadas de plataformas individuales, consulte [Adición del SDK de MobileFirst Foundation a aplicaciones Cordova](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/application-development/sdk/cordova/).

##### <span style="color:NAVY">**Soporte de la fijación de varios certificados**</span>

A partir de iFix (*8.0.0.0-MFPF-IF20170624-0159*), Mobile Foundation permite la fijación de varios certificados. Con anterioridad a este iFix, Mobile Foundation sólo permitía fijar un certificado. Mobile Foundation presenta una nueva API que permite la conexión a varios hosts permitiendo que el usuario fije claves públicas de varios certificados X509 a la aplicación cliente. Esta característica está soportada sólo para aplicaciones Android e iOS nativas. Obtenga más información sobre *Soporte de la fijación de varios certificados* en [Novedades](http://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/product-overview/release-notes/whats-new/), en la sección *Novedades de las API de MobileFirst*.

##### <span style="color:NAVY">**Adaptadores para crear una aplicación cognitiva**</span>

A partir de iFix (*8.0.0.0-MFPF-IF20170710-1834*) Mobile Foundation presenta adaptadores incluidos para servicios cognitivos Watson como por ejemplo [*WatsonConversation*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonConversationAdapter), [*WatsonDiscovery*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonDiscoveryAdapter) y [*WatsonNLU (Natural Language Understanding)*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonNLUAdapter). Estos adaptadores están disponibles para su descarga y despliegue desde el *Centro de descargas* en la consola de Mobile Foundation.

##### <span style="color:NAVY">**Adaptador de Cloud Functions para crear una aplicación sin servidor**</span>

A partir de iFix (*8.0.0.0-MFPF-IF20170710-1834*) Mobile Foundation presenta un adaptador incluido denominado [*adaptador de Cloud Functions*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/OpenWhiskAdapter) para la [plataforma de Cloud Functions](https://console.bluemix.net/openwhisk/). El adaptador está disponible para su descarga y despliegue desde el *Centro de descargas* en la consola de Mobile Foundation.

##### <span style="color:NAVY">**Soporte de la fijación de varios certificados en el SDK de Cordova**</span>

A partir de este iFix (*8.0.0.0-MFPF-IF20170803-1112*) se da soporte a la fijación de varios certificados en el SDK de Cordova. Lea más sobre *Soporte de la fijación de varios certificados* en [Novedades](http://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/product-overview/release-notes/whats-new/), en la sección *Novedades de las API de MobileFirst* .

##### <span style="color:NAVY">**Soporte de la plataforma de navegador de Cordova**</span>

A partir de iFix (*8.0.0.0-MFPF-IF20170823-1236*) {{ site.data.keys.product }} da soporte a la plataforma de navegador de Cordova junto con las plataformas soportadas anteriormente de Cordova Windows, Cordova Android y Cordova iOS. [Más información](https://mobilefirstplatform.ibmcloud.com/blog/2017/08/29/cordova-browser-compatibility-with-MFP/).

##### <span style="color:NAVY">**Generación de un adaptador desde su especificación OpenAPI**</span>

A partir de iFix (*8.0.0.0-MFPF-IF20170901-1903*) {{ site.data.keys.product }} presenta la prestación de autogenerar un adaptador a partir de su especificación OpenAPI. Ahora los usuarios de {{ site.data.keys.product }} pueden centrarse en la lógica de la aplicación en lugar de crear el adaptador {{ site.data.keys.product }}, que conecta la aplicación al servicio de fondo que desean. [Más información]({{site.baseurl}}/tutorials/en/foundation/8.0/adapters/microservice-adapter/).

##### <span style="color:NAVY">**Soporte de iOS 11 e iPhone X**</span>

A partir de CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01* Mobile Foundation ha anunciado el soporte de iOS 11 e iPhone X en Mobile Foundation v8.0. Para obtener más información, lea la entrada del blog [Soporte de IBM MobileFirst Platform Foundation para iOS 11 e iPhone X](https://mobilefirstplatform.ibmcloud.com/blog/2017/09/18/mfp-support-for-ios11/).

##### **<span style="color:NAVY">Soporte de Android Oreo</span>**

A partir de CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01*, Mobile Foundation ha anunciado el soporte de Android Oreo con esta [publicación del blog](https://mobilefirstplatform.ibmcloud.com/blog/2017/08/22/mobilefirst-android-Oreo/). Tanto las aplicaciones Android nativas como las aplicaciones híbridas/Cordova, creadas en versiones anteriores de Android, funcionan tal como se espera en Android Oreo cuando se actualiza el dispositivo mediante OTA.

##### <span style="color:NAVY">**Ahora Mobile Foundation se puede desplegar en clústeres de Kubernetes**</span>

A partir de CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01*, los usuarios de Mobile Foundation pueden desplegar Mobile Foundation, que incluye Mobile Foundation Server, Mobile Analytics Server y Application Center, en clústeres de Kubernetes. El paquete de despliegue se ha actualizado para dar soporte al despliegue de Kubernetes. Lea el [anuncio](https://mobilefirstplatform.ibmcloud.com/blog/2017/09/09/mobilefoundation-on-kube/).
