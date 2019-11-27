---
layout: tutorial
title: CD Update の新機能
breadcrumb_title: CD Updates
weight: 2
---
<!-- NLS_CHARSET=UTF-8 -->
<br/>
暫定修正および CD Update では、問題を修正し、モバイル・オペレーティング・システムの新しいリリースに対して {{ site.data.keys.product_full }} を最新にしておくためのパッチおよび更新を提供します。 また、CD Update は、新しいフィーチャーを導入することにより、製品の機能を強化します。

暫定修正および CD Update は累積的です。 最新の v8.0 暫定修正または CD Update をダウンロードすると、v8.0 より前の暫定修正および CD Update のすべての修正とフィーチャーが得られます。

以下のセクションに記載されているすべてのフィーチャーを取得するには、最新の CD Update をダウンロードしてインストールします。

> {{ site.data.keys.product }} 8.0 の iFix リリースのリストについては、[ここを参照してください]({{site.baseurl}}/blog/tag/iFix_8.0/)。

### CD Update 6 (8.0.0.0-MFPF-IF201911050809-CDUpdate-06) に含まれるフィーチャー

#### <span style="color:Black">サーバー</span>
##### <span style="color:NAVY">**パフォーマンスの向上**</span>

Mobile Foundation データベース操作を最適化し、レコード・データベースの自動パージを導入しました。

##### <span style="color:NAVY">**DevKit 内部で使用可能となった Application Center**</span>

Application Center は、[DevKit]({{site.baseurl}}/downloads/) が付属したパッケージとして使用できるようになりました。これにより、開発者はアプリをビルドしてプライベート・ストアに発行でき、DevKit の一部として使用できるようになりました。

##### <span style="color:NAVY">**ベンダー・ソフトウェアのスタック・サポート**</span>

Mobile Foundation は Windows Server 2016 SE と Oracle 18c をサポートするようになりました。

##### <span style="color:NAVY">**アプリケーション開発フレームワークのサポート**</span>

Mobile Foundation は、[iOS 13]({{site.baseurl}}/blog/2019/09/19/IBM-MobileFoundation-iOS13/)、iPadOS、および [Android 10]({{site.baseurl}}/blog/2019/09/04/mobilefirst-android-Q/) をサポートする、Apple および Google がリリースした最新のフレームワークをサポートします。このプラットフォームでは、Swift 5 用の SDK も提供します。

##### <span style="color:NAVY">**API Proxy を使用した、バックエンド・アプリへのセキュアな接続**</span>

エンタープライズ・バックエンドに接続するときに、API プロキシーを使用して Mobile Foundation プラットフォームのセキュリティーと分析を活用できます。API プロキシーは、要求を実際のバックエンドにプロキシーします。[詳細はこちらを参照してください]({{site.baseurl}}/tutorials/en/foundation/8.0/digital-app-builder/api-proxy/)。

#### <span style="color:Black">分析</span>
##### <span style="color:NAVY">**アプリ内フィードバック**</span>

アプリ内フィードバック・フィーチャーは、以前は IBM Cloud の Mobile Foundation サービスで提供され、現在は Mobile Foundation のオンプレミス配布およびコンテナー配布に移植されました。このフィーチャーを使用すると、ユーザーはスクリーン・ショット、注釈、およびテキストの形式でアプリからのフィードバックを共有できます。管理者は Analytics コンソールにログインして、受信したフィードバックを表示し、必要なアクションを実行できます。



#### <span style="color:Black">OpenShift パッケージ</span>
##### <span style="color:NAVY">**Mobile Foundation は、IBM Cloud Pak for Applications v3 の一部**</span>

Mobile Foundation は、[IBM Cloud Pak for Apps]({{site.baseurl}}/blog/2019/09/13/announcing-support-for-mf-on-rhocp/) の一部として使用可能となり、Red Hat Open Shift 3.11 および Red Hat Open Shift 4.2 をサポートします。現在使用可能なサービスは、モバイル・コア、分析、プッシュ通知、およびアプリ・センターです。この機能を使用すると、開発者はバックエンド・マイクロサービスとモバイル・サービスを使用してクラウド・ネイティブ・アプリケーションをビルドできます。


### CD update 5 (8.0.0.0-MFPF-IF201903190949-CDUpdate-05) で導入された機能

##### <span style="color:NAVY">**CoreML Update**</span>

Apple の CoreML フレームワークを使用して、iOS モバイル・デバイスで ML (機械学習) モデルをローカルに実行できます。
Mobile Foundation には、これらのモデルをデバイスに安全に配布するように管理する機能が用意されています。 [詳細はこちらを参照してください](https://mobilefirstplatform.ibmcloud.com/blog/2019/02/08/distribute-coreml-models-securely-using-mfp/)。

##### <span style="color:NAVY">**watchOS のアプリケーション認証性**</span>

アプリケーション認証性は、アクセス提供前にアプリケーションの認証性を検証するセキュリティー機能です。 この機能はモバイル・アプリで使用できました。 この機能は今は Apple WatchOS アプリにまで拡張されています。 [詳細はこちらを参照してください]({{site.baseurl}}/tutorials/en/foundation/8.0/application-development/watchos/)。

##### <span style="color:NAVY">**プッシュ通知 - 追加メッセージのフィーチャーおよび FCM の属性**</span>

プッシュ通知は、以下の追加メッセージの属性をサポートするようになりました。
1. ライト
2. スタイル (Inbox、BigText、PictureNotifications)


### CD Update 4 (8.0.0.0-MFPF-IF201812191602-CDUpdate-04) で導入された機能

##### <span style="color:NAVY">**APNs プッシュ通知用の HTTP/2 サポート**</span>

MobileFirst のプッシュ通知で、レガシーの TCP ソケット・ベースの通知と HTTP/2 ベースの APNs プッシュ通知がサポートされるようになりました。 [詳細はこちらを参照してください]({{site.baseurl}}/tutorials/en/foundation/8.0/notifications/sending-notifications/#http2-support-for-apns-push-notifications)。

##### <span style="color:NAVY">**React Native Push SDK のリリース**</span>

React Native SDK for Push (*react-native-ibm-mobilefirst-push 1.0.0*) がこの CD Update でリリースされました。


### CD Update 3 (8.0.0.0-MFPF-IF201811050432-CDUpdate-03) で導入された機能

##### <span style="color:NAVY">**iOS でのリフレッシュ・トークンのサポート**</span>

Mobile Foundation は、この CD Update 以降、iOS でリフレッシュ・トークン機能を導入しています。 [詳細はこちらを参照してください]({{site.baseurl}}/tutorials/en/foundation/8.0/authentication-and-security/#refresh-tokens)。

##### <span style="color:NAVY">**Mobile Foundation コンソールからの管理 CLI (*mfpadm*) のダウンロード**</span>

Mobile Foundation 管理 CLI (*mfpadm*) は、Mobile Foundation コンソールの*ダウンロード・センター* 内からダウンロードできるようになりました。

##### <span style="color:NAVY">**MobileFirst CLI の Node v8.x のサポート**</span>

この iFix (*8.0.0.0-MFPF-IF201810040631*) 以降、Mobile Foundation では MobileFirst CLI の Node v8.x のサポートが追加されています。

##### <span style="color:NAVY">**Cordova プロジェクト用の *libstdc++* の依存関係の削除**</span>

この iFix (*8.0.0.0-MFPF-IF201809041150*) 以降、Cordova プロジェクトへの依存関係としての *libstdc++* を削除するための変更が導入されています。 これは、iOS 12 で実行されている新規アプリケーションで必要です。 回避策などの詳細については、[このブログ投稿](https://mobilefirstplatform.ibmcloud.com/blog/2018/07/23/mfp-support-for-ios12/)を参照してください。

### CD Update 2 (8.0.0.0-MFPF-IF201807180449-CDUpdate-02) で導入された機能

##### <span style="color:NAVY">**React Native 開発のサポート**</span>

CD Update (*8.0.0.0-MFPF-IF201807180449-CDUpdate-02*) 以降、Mobile Foundation では、IBM Mobile Foundation SDK for React Native アプリケーションが使用可能になったため React Native 開発がサポートされると[発表されています]({{site.baseurl}}/blog/2018/07/24/React-Native-SDK-Mobile-Foundation/)。 [詳細はこちらを参照してください]({{site.baseurl}}/tutorials/en/foundation/8.0/reactnative-tutorials/)。

##### <span style="color:NAVY">**iOS SDK および Cordova SDK の CouchDB データベースを使用した JSONStore コレクションの自動同期**</span>

CD Update (*8.0.0.0-MFPF-IF201807180449-CDUpdate-02*) 以降、MobileFirst iOS SDK および Cordova SDK を使用して、[Cloudant](https://www.ibm.com/in-en/marketplace/database-management) を含む CouchDB データベースの任意のフレーバーがインストールされたデバイスで JSONStore コレクション間のデータの同期を自動化することができます。 この機能について詳しくは、この[ブログ投稿]({{site.baseurl}}/blog/2018/07/24/jsonstoresync-couchdb-databases-ios-and-cordova/)を参照してください。

##### <span style="color:NAVY">**リフレッシュ・トークンの導入**</span>

CD Update (*8.0.0.0-MFPF-IF201807180449-CDUpdate-02*) 以降、Mobile Foundation では、新規アクセス・トークンを要求するために使用できる、リフレッシュ・トークンという特殊な種類のトークンが導入されています。  [詳細はこちらを参照してください]({{site.baseurl}}/tutorials/en/foundation/8.0/authentication-and-security/#refresh-tokens)。

##### <span style="color:NAVY">**Cordova v8 および Cordova Android v7 のサポート**</span>

この iFix (*8.0.0.0-MFPF-IF201804051553*) 以降、Cordova v8 および Cordova Android v7 用の MobileFirst Cordova プラグインがサポートされます。 示されたバージョンの Cordova で作業するには、最新の MobileFirst プラグインを入手して、最新の CLI (mfpdev-cli) バージョンにアップグレードする必要があります。 個々のプラットフォームでサポートされるバージョンについて詳しくは、[『Cordova アプリケーションへの MobileFirst Foundation SDK の追加』]({{site.baseurl}}/tutorials/en/foundation/8.0/application-development/sdk/cordova/#support-levels)を参照してください。

##### <span style="color:NAVY">**CouchDB データベースを使用した JSONStore コレクションの自動同期**</span>

この iFix (*8.0.0.0-MFPF-IF201802201451*) 以降、MobileFirst Android SDK を使用して、[Cloudant](https://www.ibm.com/in-en/marketplace/database-management) を含む CouchDB データベースの任意のフレーバーがインストールされたデバイスで JSONStore コレクション間のデータの同期を自動化することができます。 この機能について詳しくは、この[ブログ投稿]({{site.baseurl}}/blog/2018/02/23/jsonstoresync-couchdb-databases/)を参照してください。

### CD Update 1 (8.0.0.0-MFPF-IF201711230641-CDUpdate-01) で導入された機能

##### <span style="color:NAVY">**Eclipse UI エディターのサポート**</span>

CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01* 以降、WYSIWYG エディターが MobileFirst Studio の Eclipse で提供されるようになりました。 開発者は、この UI エディターを使用して Cordova アプリケーション用の UI を設計して実装することができます。 [詳細はこちらを参照してください](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/application-development/cordova-apps/developing-ui/)。

##### <span style="color:NAVY">**コグニティブ・アプリケーションをビルドするための新規アダプター**</span>

CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01* 以降、Mobile Foundation では、[*Watson Tone Analyzer*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonToneAnalyzer) サービスと [*Language Translator*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonLanguageTranslator) サービス用に 2 つの新しい事前ビルドされたコグニティブ・サービス・アダプターが導入されています。 これらのアダプターは、Mobile Foundation コンソールの*ダウンロード・センター* からダウンロードしてデプロイできます。

##### <span style="color:NAVY">**動的なアプリケーション認証性**</span>

iFix *8.0.0.0-MFPF-IF20170220-1900* 以降、*アプリケーション認証性* の新規実装が提供されています。 この実装では、*.authenticity_data* ファイルを生成するためのオフラインの *mfp-app-authenticity* ツールは必要ありません。 代わりに、MobileFirst コンソールから*アプリケーション認証性* を有効にしたり無効にしたりすることができます。 詳しくは、[『アプリケーション認証性の構成 (Configuring Application Authenticity)』](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/authentication-and-security/application-authenticity)を参照してください。

##### <span style="color:NAVY">**Windows 10 の Appcenter (クライアントおよびサーバー) サポート**</span>

iFix *8.0.0.0-MFPF-IF20170327-1055* 以降、Windows 10 UWP アプリケーションが IBM Application Center でサポートされます。 ユーザーは、Windows 10 UWP アプリケーションをアップロードして、これらのアプリケーションをデバイスにインストールできるようになりました。 UWP アプリケーションをインストールするための Windows 10 UWP クライアント・プロジェクトが Application Center に付属するようになりました。 このプロジェクトを Visual Studio で開いて、配布用のバイナリー (例えば、*.appx*) を作成できます。 Application Center は、モバイル・クライアントを配布するための定義済みの方法を提供していません。 詳しくは、[『Microsoft Windows 10 Universal (ネイティブ) IBM AppCenter クライアント (Microsoft Windows 10 Universal (Native) IBM AppCenter client)』](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/appcenter/preparations/#microsoft-windows-10-universal-native-ibm-appcenter-client)を参照してください。

##### <span style="color:NAVY">**Eclipse Neon 用の MobileFirst Eclipse プラグイン・サポート**</span>

iFix *8.0.0.0-MFPF-IF20170426-1210* 以降、Eclipse Neon をサポートするように MobileFirst Eclipse プラグインが更新されています。

##### <span style="color:NAVY">**より新しいバージョンの OkHttp (バージョン 3.4.1) を使用するように変更された Android SDK**</span>

iFix *8.0.0.0-MFPF-IF20170605-2216* 以降、Android SDK は、以前 MobileFirst SDK for Android にバンドルされていた古いバージョンではなく、より新しいバージョンの *OkHttp (バージョン 3.4.1)* を使用するように変更されています。 OkHttp は、SDK にバンドルされるのではなく依存関係として追加されます。 これにより、開発者用の OkHttp ライブラリーの使用時にどのバージョンを使用するかを選択できるようになり、複数のバージョンの OkHttp との競合が回避されます。

##### <span style="color:NAVY">**Cordova v7 のサポート**</span>

iFix *8.0.0.0-MFPF-IF20170608-0406* 以降、Cordova v7 がサポートされます。 個々のプラットフォームのサポートされるバージョンについて詳しくは、[『Cordova アプリケーションへの MobileFirst Foundation SDK の追加』](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/application-development/sdk/cordova/)を参照してください。

##### <span style="color:NAVY">**複数の証明書のピン留めをサポート**</span>

iFix (*8.0.0.0-MFPF-IF20170624-0159*) 以降、Mobile Foundation では複数の証明書のピン留めがサポートされます。 この iFix より前では、Mobile Foundation は単一の証明書のピン留めをサポートしていました。 Mobile Foundation では、ユーザーが複数の X509 証明書の公開鍵をクライアント・アプリケーションにピン留めできるようにすることで複数のホストへの接続を可能にする、新しい API が導入されました。 この機能は、ネイティブ Android アプリケーションと iOS アプリケーションでのみサポートされます。 詳しくは、[『What's new (新機能)』](http://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/product-overview/release-notes/whats-new/)の*『MobileFirst API の新機能 (What's new in MobileFirst APIs)』*セクションの下にある*『複数の証明書のピン留めのサポート (Multiple certificate pinning support)』*を参照してください。

##### <span style="color:NAVY">**コグニティブ・アプリケーションをビルドするためのアダプター**</span>

iFix (*8.0.0.0-MFPF-IF20170710-1834*) 以降、Mobile Foundation では、[*WatsonConversation*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonConversationAdapter)、[*WatsonDiscovery*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonDiscoveryAdapter)、[*WatsonNLU (Natural Language Understanding)*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/WatsonNLUAdapter) などの、Watson コグニティブ・サービス用に事前ビルドされたアダプターが導入されています。 これらのアダプターは、Mobile Foundation コンソールの*ダウンロード・センター* からダウンロードしてデプロイできます。

##### <span style="color:NAVY">**サーバーレス・アプリケーションをビルドするための Cloud Functions アダプター**</span>

iFix (*8.0.0.0-MFPF-IF20170710-1834*) 以降、Mobile Foundation では、[Cloud Functions プラットフォーム](https://console.bluemix.net/openwhisk/)用に [*Cloud Functions アダプター*](https://github.com/mfpdev/mfp-extension-adapters/tree/master/OpenWhiskAdapter) という事前ビルドされたアダプターが導入されました。 このアダプターは、Mobile Foundation コンソールの*ダウンロード・センター* からダウンロードしてデプロイできます。

##### <span style="color:NAVY">**Cordova SDK で複数の証明書をピン留めするためのサポート**</span>

この iFix (*8.0.0.0-MFPF-IF20170803-1112*) 以降、複数の証明書のピン留めが Cordova SDK でサポートされます。 詳しくは、[『What's new (新機能)』](http://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/product-overview/release-notes/whats-new/)の*『MobileFirst API の新機能 (What's new in MobileFirst APIs)』*セクションの下にある*『複数の証明書のピン留めのサポート (Multiple certificate pinning support)』*を参照してください。

##### <span style="color:NAVY">**Cordova ブラウザー・プラットフォームのサポート**</span>

iFix (*8.0.0.0-MFPF-IF20170823-1236*) 以降、{{ site.data.keys.product }} では、Cordova Windows、Cordova Android、および Cordova iOS の以前にサポートされたプラットフォームとともに、Cordova ブラウザー・プラットフォームがサポートされます。 [詳細はこちらを参照してください](https://mobilefirstplatform.ibmcloud.com/blog/2017/08/29/cordova-browser-compatibility-with-MFP/)。

##### <span style="color:NAVY">**アダプターをその OpenAPI 仕様から生成**</span>

iFix (*8.0.0.0-MFPF-IF20170901-1903*) 以降、{{ site.data.keys.product }} では、アダプターをその OpenAPI 仕様から自動生成する機能が導入されました。 これで、{{ site.data.keys.product }} ユーザーは、{{ site.data.keys.product }} アダプターの作成ではなく、アプリケーションを目的のバックエンド・サービスに接続するアプリケーション・ロジックに集中できるようになります。 [詳細はこちらを参照してください]({{site.baseurl}}/tutorials/en/foundation/8.0/adapters/microservice-adapter/)。

##### <span style="color:NAVY">**iOS 11 および iPhone X のサポート**</span>

CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01* 以降、Mobile Foundation では、Mobile Foundation v8.0 での iOS 11 および iPhone X のサポートが発表されました。 詳しくは、[『IBM MobileFirst Platform Foundation Support for iOS 11 and iPhone X』](https://mobilefirstplatform.ibmcloud.com/blog/2017/09/18/mfp-support-for-ios11/)のブログ投稿を参照してください。

##### **<span style="color:NAVY">Android Oreo のサポート</span>**

CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01* 以降、Mobile Foundation では、この[ブログ投稿](https://mobilefirstplatform.ibmcloud.com/blog/2017/08/22/mobilefirst-android-Oreo/)で Android Oreo のサポートを発表しました。 デバイスが OTA を使用してアップグレードされている場合、古いバージョンの Android でビルドされたネイティブ Android アプリケーションとハイブリッド/Cordova アプリケーションの両方が、Android Oreo で予期したとおりに機能します。

##### <span style="color:NAVY">**現在 Mobile Foundation は Kubernetes クラスターにデプロイ可能**</span>

CD Update *8.0.0.0-MFPF-IF201711230641-CDUpdate-01* 以降、Mobile Foundation ユーザーは、Mobile Foundation サーバー、Mobile Analytics サーバー、Application Center を含む Mobile Foundation を Kubernetes クラスターにデプロイできるようになりました。 デプロイメント・パッケージは、Kubernetes デプロイメントをサポートするように更新されています。 [発表](https://mobilefirstplatform.ibmcloud.com/blog/2017/09/09/mobilefoundation-on-kube/)を確認してください。
