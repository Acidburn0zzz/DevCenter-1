---
layout: tutorial
title: Anwendungsauthentizität
relevantTo: [android,ios,windows,javascript]
weight: 9
---
<!-- NLS_CHARSET=UTF-8 -->
## Übersicht
{: #overview }

Aktivieren Sie die vordefinierte [Sicherheitsüberprüfung](../#security-checks) der {{ site.data.keys.product_adj }}-Anwendungsauthentizität
(`appAuthenticity`). Diese Überprüfung validiert die Authentizität der Anwendung, bevor Services für die Anwendung bereitgestellt werden. Bei Anwendungen in der Produktion sollte dieses Feature aktiviert sein. 

Zum Aktivieren der Anwendungsauthentizität können Sie den in der **{{ site.data.keys.mf_console }}** unter **[Ihre Anwendung]**
→ **Authentizität** angezeigten Anweisungen folgen oder auch die nachstehenden Informationen durchlesen. 

#### Verfügbarkeit
{: #availability }
* Die Anwendungsauthentizität ist auf allen unterstützten Plattformen (iOS, watchOS, Android, Windows 8.1 Universal, Windows 10 UWP) für Cordova-Anwendungen und native Anwendungen verfügbar.

#### Fahren Sie mit folgenden Abschnitten fort: 
{: #jump-to }
- [Ablauf für Anwendungsauthentizität](#application-authenticity-flow)
- [Anwendungsauthentizität aktivieren](#enabling-application-authenticity)
- [Anwendungsauthentizität konfigurieren](#configuring-application-authenticity)
- [Build Time Secret (BTS)](#bts)
- [Fehlerbehebung](#troubleshooting)
  - [Befehl 'reset'](#reset)
  - [Validierungstypen](#validation)
  - [Unterstützung für SDKs bis Version 8.0.0.0-MFPF-IF201701250919](#legacy)

## Ablauf für Anwendungsauthentizität
{: #application-authenticity-flow }
Die Sicherheitsüberprüfung der Anwendungsauthentizität findet während der Registrierung der Anwendung bei
{{ site.data.keys.mf_server }} statt, d. h., wenn eine Instanz der Anwendung zum ersten Mal versucht, eine
Verbindung zum Server herzustellen. Standardmäßig wird die Authentizitätsprüfung nicht erneut ausgeführt. 

Wenn die App-Authentizität aktiviert ist und der Kunde Änderungen an seiner Anwendung vornehmen muss, ist eine Aktualisierung der Anwendungsversion notwendig. 

Unter [Anwendungsauthentizität konfigurieren](#configuring-application-authenticity) erfahren Sie, wie dieses Verhalten angepasst werden kann. 

## Anwendungsauthentizität aktivieren
{: #enabling-application-authenticity }
Aktivierung der Anwendungsauthentizität in Ihrer Anwendung: 

1. Öffnen Sie die {{ site.data.keys.mf_console }} in Ihrem bevorzugten Browser. 
2. Wählen Sie Ihre Anwendung in der Navigationsseitenleiste aus und klicken Sie auf den Menüeintrag **Authentizität**. 
3. Klicken Sie im Feld **Status** auf die Schaltfläche **An/Aus**. 

![Anwendungsauthentizität aktivieren](enable_application_authenticity.png)

MobileFirst Server validiert die Anwendungsauthentizität beim ersten Versuch, eine Verbindung zum Server herzustellen. Wenn diese Validierung auch auf geschützte Ressourcen angewendet werden soll, fügen Sie die Sicherheitsüberprüfung `appAuthenticity` zum schützenden Bereich hinzu.

### Anwendungsauthentizität inaktivieren
{: #disabling-application-authenticity }
Bestimmte Änderungen an der Anwendung während der Entwicklung können dazu führen, dass die Authentizität der Anwendung nicht validiert werden kann. Entsprechend wird empfohlen,
Accordingldie Anwendungsauthentizität während des Entwicklungsprozesses zu inaktivieren. Bei Anwendungen in der Produktion sollte dieses Feature aktiviert sein. 

Klicken Sie im Feld **Status** erneut auf die Schaltfläche **An/Aus**, um die Anwendungsauthentizität zu inaktivieren. 

## Anwendungsauthentizität konfigurieren
{: #configuring-application-authenticity }
Die Anwendungsauthentizität wird standardmäßig nur während der Clientregistrierung überprüft. Für Ihre
Anwendungsressourcen können Sie jedoch neben jeder anderen Sicherheitsüberprüfung den Schutz mit der
Sicherheitsüberprüfung `appAuthenticity` in der Konsole auswählen.
Folgen Sie dazu den Anweisungen unter [Ressourcen schützen](../#protecting-resources).

Sie können die vordefinierte
Sicherheitsüberprüfung der Anwendungsauthentizität
mit folgender Eigenschaft konfigurieren: 

- `expirationSec`: Der Standardwert liegt bei 3600 Sekunden (1 Stunde). Die Eigenschaft definiert die Zeit bis zum Ablauf des Authentizitätstokens. 

Eine durchgeführte Authentizitätsprüfung findet erst erneut statt, wenn das Token gemäß dem festgelegten Wert abgelaufen ist. 

#### Gehen Sie wie folgt vor, um die Eigenschaft `expirationSec` zu konfigurieren: 
{: #to-configure-the-expirationsec property }
1. Laden Sie die {{ site.data.keys.mf_console }}, navigieren Sie zu
**[Ihre Anwendung]** → **Sicherheit** → **Konfigurationen für Sicherheitsüberprüfungen** und klicken Sie
auf **Neu**.

2. Suchen Sie das Bereichselement `appAuthenticity`. 

3. Legen Sie eine neue Zeit in Sekunden fest. 

![Eigenschaft 'expirationSec' in der Konsole konfigurieren](configuring_expirationSec.png)

## Build Time Secret (BTS)
{: #bts }
Build Time Secret (BTS) ist ein **optionales Tool für die Verbesserung der Authentizitätsvalidierung** von iOS- und watchOS-Anwendungen. Das Tool injiziert einen zur
Buildzeit festgelegten geheimen Schlüssel in die Anwendung. Dieser Schlüssel wird später während der Validierung der Authentizität verwendet. 

Das Tool BTS kann über das **Download-Center** in der **{{ site.data.keys.mf_console }}** heruntergeladen werden. 

Verwenden Sie das Tool BTS wie folgt in Xcode:
1. Klicken Sie auf der Registerkarte **Build Phases** auf die Schaltfläche **+** und erstellen Sie eine neue Scriptausführungsphase (**Run Script**).
2. Kopieren Sie den Pfad des Tools BTS und fügen Sie ihn in die neu erstellte Phase **Run Script** ein.
3. Ziehen Sie die Scriptausführungsphase (**Run Script Phase**) mit der Maus an eine Position oberhalb der Ressourcenkompilierungsphase (**Compile sources**).
4. Dieser Schritt ist nur für die Anwendungsumgebung watchOS erforderlich. Für die Aktivierung von BTS muss der Entwickler nach der Position des Tools BTS mit dem Namen einer Swift-Datei aus dem watchOS-Erweiterungspaket übergeben.

Angenommen, das watchOS-Erweiterungspaket enthält die Datei `HelloWatchOS.swift`. In dem Fall muss der Entwickler den Pfad des Tools BTS mit `HelloWatchOS` als Argument übergeben. 

![Tool BTS](BTS_Tool.png)

Das Tool sollte bei der Erstellung einer Produktionsversion der Anwendung verwendet werden. 

## Fehlerbehebung
{: #troubleshooting }

### Befehl 'reset'
{: #reset }
Der Algorithmus für die Anwendungsauthentizität verwendet während der Validierung Anwendungsdaten und Metadaten. Das erste Gerät, das nach Aktivierung der Anwendungsauthentizität
eine Verbindung zum Server herstellt, liefert einen "Fingerabdruck" der Anwendung, der einige dieser Daten enthält. 

Sie können diesen Fingerabdruck zurücksetzen und neue Daten für den Algorithmus bereitstellen. Dies kann während der Entwicklung (z. B. nach einer Änderung der Anwendung
in Xcode) hilfreich sein. Verwenden Sie für das Zurücksetzen des Fingerabdrucks
[**mfpadm** in der CLI](../../administering-apps/using-cli/) mit dem Befehl **reset**.

Nach dem Zurücksetzen des Fingerabdrucks funktioniert die appAuthenticity-Sicherheitsüberprüfung weiter wie zuvor. (Dies ist für den Benutzer transparent.)

### Validierungstypen
{: #validation }

In der Mobile First Platform Foundation gibt es für Anwendungen die statische und die dynamische App-Authentizität. Diese Validierungstypen unterscheiden sich hinsichtlich der Algorithmen und Attribute, die zum Generieren der Startwerte für die App-Authentizität verwendet werden. Wenn die Anwendungsauthentizität aktiviert ist, wird standardmäßig der **dynamische** Validierungsalgorithmus verwendet. Die Sicherheit der Anwendung ist bei beiden Validierungstypen gewährleistet. Bei der dynamischen App-Authentizität werden strenge Validierungen und Überprüfungen durchgeführt. Der Algorithmus für die statische App-Authentizität ist etwas weniger strikt. Es werden nicht alle Validierungen durchgeführt, die bei der dynamischen App-Authentizität verwendet werden. 

Die dynamische App-Authentizität kann in der MobileFirst-Konsole konfiguriert werden. Der interne Algorithmus sorgt für die Generierung der App-Authentizitätsdaten anhand der in der Konsole ausgewählten Optionen.
Für die statische App-Authentizität muss die [Befehlzeilenschnittstelle **mfpadm**](../../administering-apps/using-cli/) verwendet werden.

Verwenden Sie die [Befehlszeilenschnittstelle **mfpadm**](../../administering-apps/using-cli/), um die statische App-Authentizität zu aktivieren und den Validierungstyp zu wechseln:

```bash
mfpadm --url=  --user=  --passwordfile= --secure=false app version [LAUFZEIT] [APP-NAME] [UMGEBUNG] [VERSION] set authenticity-validation TYP
```
`TYP` kann den Wert `dynamic` oder `static` haben.



### Unterstützung für SDKs bis Version 8.0.0.0-MFPF-IF201701250919
{: #legacy }
Die dynamische und statische Validierung werden nur von Client-SDKs unterstützt, die **ab Februar 2017** herausgegeben wurden. Verwenden Sie
für SDK-Versionen **bis 8.0.0.0-MFPF-IF201701250919** das traditionelle Tool für die Authentizität: 

Die Anwendungsbinärdatei muss mit dem Tool mfp-app-authenticity signiert werden. Auswählbare Binärdateien sind `ipa`-Dateien für
iOS, `apk`-Dateien für Android und `appx`-Dateien für Windows 8.1 Universal und Windows 10 UWP.

1. Laden Sie das Tool mfp-app-authenticity über das Download-Center in der **{{ site.data.keys.mf_console }}** herunter.
2. Öffnen Sie ein **Befehlszeilenfenster** und führen Sie den Befehl `java -jar path-to-mfp-app-authenticity.jar path-to-binary-file` aus. 

   Beispiel: 

   ```bash
   java -jar /Users/Ihr_Benutzername/Desktop/mfp-app-authenticity.jar /Users/Ihr_Benutzername/Desktop/MyBankApp.ipa
   ```

   Dieser Befehl generiert neben der Datei `MyBankApp.ipa` eine Datei `MyBankApp.authenticity_data`. 
3. Laden Sie die Datei `.authenticity_data` mit [**mfpadm** in der CLI](../../administering-apps/using-cli/) hoch:
  ```bash
  app version [LAUFZEITNAME] APP-NAME UMGEBUNG VERSION set authenticity-data DATEI
  ```
