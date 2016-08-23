---
layout: tutorial
title: Setting Up the MobileFirst Server on Bluemix using Scripts on Liberty for Java
breadcrumb_title: Using scripts to setup MobileFirst Foundation - Liberty for Java
relevantTo: [ios,android,windows,javascript]
weight: 2
---

## Overview
Follow the instructions below to configure a MobileFirst Server instance on a Liberty for Java runtime on Bluemix. (MobileFirst Analytics instance can be run on IBM containers only). To achieve this you will go through the following steps: 

* Setup your host computer with the required tools (Cloud Foundry CLI)
* Setup your Bluemix account
* Build a MobileFirst Server and push it to the Bluemix as a Cloud Foundry application.

Finally, you will register your mobile apps as well as deploy your adapters.

**Notes:**  

* Windows OS is currently not supported for running these scripts.  
* The MobileFirst Server Configuration tools cannot be used for deployments to IBM Containers.

#### Jump to:

* [Register an account at Bluemix](#register-an-account-at-bluemix)
* [Set up your host machine](#set-up-your-host-machine)
* [Download the ibm-mfpf-container-8.0.0.0 archive](#download-the-ibm-mfpf-container-8-0-0-0-archive)
* [Prerequisites](#prerequisites)
* [Setting Up the MobileFirst and Analytics Servers on IBM Containers](#setting-up-the-analytics-server-on-ibm-containers)
* [Applying MobileFirst Server Fixes](#applying-mobilefirst-server-fixes)
* [Removing a Container from Bluemix](#removing-a-container-from-bluemix)
* [Removing the database service configuration from Bluemix](#removing-the-database-service-configuration-from-bluemix)

## Register an account at Bluemix
If you do not have an account yet, visit the [Bluemix website](https://bluemix.net) and click **Get Started Free** or **Sign Up**. You need to fill up a registration form before you can move on to the next step.

### The Bluemix Dashboard
After signing in to Bluemix, you are presented with the Bluemix Dashboard, which provides an overview of the active Bluemix **space**. By default, this work area receives the name "dev". You can create multiple work areas/spaces if needed.

## Set up your host machine
To manage the Bluemix Cloud Foundry app, you need to install the Cloud Foundry CLI.
You can run the scripts using the macOS Terminal.app:

### Cloud Foundry CLI

1. Install the [Cloud Foundry CLI](https://github.com/cloudfoundry/cli/releases?cm_mc_uid=85906649576514533887001&cm_mc_sid_50200000=1454307195).

## Download the ibm-mfpf-container-8.0.0.0 archive
To set up IBM MobileFirst Foundation on IBM Containers, you must first create a file layout that will later be pushed to Bluemix.  
<a href="http://www-01.ibm.com/support/docview.wss?uid=swg2C7000005" target="blank">Follow the instructions in this page</a> to download the IBM MobileFirst Server 8.0 for IBM Containers archive (.zip file, search for: *CNBL0EN*).

The archive file contains the files for building an file layout (**dependencies** and **mfpf-libs**), the files for building and deploying a MobileFirst Operational Analytics Container (**mfpf-analytics**) and files for configuring a MobileFirst Server Cloud Foundry app (**mfpf-server-libertyapp**).

<div class="panel-group accordion" id="terminology" role="tablist" aria-multiselectable="false">
    <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="zip-file">
            <h4 class="panel-title">
                <a class="preventScroll" role="button" data-toggle="collapse" data-parent="#zip-file" data-target="#collapse-zip-file" aria-expanded="false" aria-controls="collapse-adapter-xml"><b>Click to read more about the archive file contents and available environment properties to use</b></a>
            </h4>
        </div>

        <div id="collapse-zip-file" class="panel-collapse collapse" role="tabpanel" aria-labelledby="zip-file">
            <div class="panel-body">
                <img src="zip.png" alt="Image showing the file system structure of the archive file" style="float:right;width:570px"/>
                <h4>dependencies folder</h4>
                <p>Contains the IBM MobileFirst Foundation runtime and IBM Java JRE 8.</p>
                
                <h4>mfpf-libs folder</h4>
                <p>Contains MobileFirst product component libraries and CLI.</p>
                
                <h4>mfpf-analytics folder</h4>
                
                <ul>
                    <li><b>Dockerfile</b>: Text document that contains all the commands that are necessary to build an image.</li>
                    <li><b>scripts</b> folder: This folder contains the <b>args</b> folder, which contains a set of configuration files. It also contains scripts to run for logging into Bluemix, building a MobileFirst Foundation Operational Analytics image and for pushing and running the image on Bluemix. You can choose to run the scripts interactively or by preconfiguring the configuration files as is further explained later. Other than the customizable args/*.properties files, do not modify any elements in this folder. For script usage help, use the <code>-h</code> or <code>--help</code> command-line arguments (for example, <code>scriptname.sh --help</code>).</li>
                    <li><b>usr</b> folder:
                        <ul>
                            <li><b>bin</b> folder: Contains the script file that gets executed when the container starts. You can add your own custom code to be executed.</li>
                            <li><b>config</b> folder: ￼Contains the server configuration fragments (keystore, server properties, user registry) used by the MobileFirst Operational Analytics.</li>
                            <li><b>keystore.xml</b> - the configuration of the repository of security certificates used for SSL encryption. The files listed must be referenced in the ./usr/security folder.</li>
                            <li><b>mfpfproperties.xml</b> - configuration properties for MobileFirst Analytics. See the supported properties listed in these documentation topics:
                                <ul>
                                    <li><a href="http://www.ibm.com/support/knowledgecenter/en/SSHS8R_8.0.0/com.ibm.worklight.analytics.doc/analytics/c_config_properties.html">List of supported Analytics configuration properties</a></li>
                                </ul>
                            </li>
                            <li><b>registry.xml</b> - user registry configuration. The basicRegistry (a basic XML-based user-registry configuration is provided as the default. User names and passwords can be configured for basicRegistry or you can configure ldapRegistry.</li>
                        </ul>
                    </li>
                    <li><b>env</b> folder: Contains the environment properties used for server initialization (server.env) and custom JVM options (jvm.options).
                    <br/>
                    <div class="panel-group accordion" id="terminology" role="tablist" aria-multiselectable="false">

                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="analytics-env">
                                <h4 class="panel-title">
                                    <a class="preventScroll" role="button" data-toggle="collapse" data-parent="#env-properties" data-target="#collapse-analytics-env" aria-expanded="false" aria-controls="collapse-analytics-env"><b>Click for a list of supported analytics environment properties</b></a>
                                </h4>
                            </div>

                            <div id="collapse-analytics-env" class="panel-collapse collapse" role="tabpanel" aria-labelledby="zip-file">
                                <div class="panel-body">
                                    <table class="table table-striped">
                                        <tr>
                                            <td><b>Property</b></td>
                                            <td><b>Default Value</b></td>
                                            <td><b>Description</b></td>
                                        </tr>
                                        <tr>
                                            <td>ANALYTICS_SERVER_HTTP PORT	</td>
                                            <td>9080*</td>
                                            <td>The port used for client HTTP requests. Use -1 to disable this port.</td>
                                        </tr>
                                        <tr>
                                            <td>ANALYTICS_SERVER_HTTPS PORT	</td>
                                            <td>9443*	</td>
                                            <td>The port used for client HTTP requests. Use -1 to disable this port.</td>
                                        </tr>
                                        <tr>
                                            <td>ANALYTICS_ADMIN_GROUP</td>
                                            <td>analyticsadmingroup</td>
                                            <td>The name of the user group possessing the predefined role <b>worklightadmin</b>.</td>
                                        </tr>
                                    </table>
                                    
                    				<br/>
                                    <a class="preventScroll" role="button" data-toggle="collapse" data-parent="#analytics-env" data-target="#collapse-analytics-env" aria-expanded="false" aria-controls="collapse-analytics-env"><b>Close section</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    </li>
                    <li><b>jre-security</b> folder: You can update the JRE security-related files (truststore, policy JAR files, and so on) by placing them in this folder. The files in this folder get copied to the JAVA_HOME/jre/lib/security/ folder in the container.</li>
                    <li><b>security</b> folder: used to store the key store, trust store, and the LTPA keys files (ltpa.keys).</li>
                    <li><b>ssh</b> folder: used to store the SSH public key file (id_rsa.pub), which is used to enable SSH access to the container.</li>
        
                </ul>
				<br/>
                <a class="preventScroll" role="button" data-toggle="collapse" data-parent="#zip-file" data-target="#collapse-zip-file" aria-expanded="false" aria-controls="collapse-zip-file"><b>Close section</b></a>
            </div>
        </div>
    </div>
</div>


## Setting Up the MobileFirst Server 
You can choose to run the scripts interactively or by using the configuration files:
A good place to start is to run the scripts interactively once, which will also record the arguments (**recorder-args**). You can later use the args files to run the scripts in a non interactive mode.
> Note: Passwords are not recorded and you will have to manually add the passwords to the argument files.

* Using the configuration files - run the scripts and pass the respective configuration file as an argument.
* Interactively - run the scripts without any arguments.

**Note:** If you choose to run the scripts interactively, you can skip the configuration but it is strongly suggested to at least read and understand the arguments that you will need to provide.

### MobileFirst Foundation Server
<div class="panel-group accordion" id="scripts2" role="tablist" aria-multiselectable="false">
    <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="step-foundation-1">
            <h4 class="panel-title">
                <a class="preventScroll" role="button" data-toggle="collapse" data-parent="#scripts2" data-target="#collapse-step-foundation-1" aria-expanded="false" aria-controls="collapse-step-foundation-1">Using the configuration files</a>
            </h4>
        </div>

        <div id="collapse-step-foundation-1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="setupCordova">
            <div class="panel-body">
            The <strong>args</strong> folder contains a set of configuration files which contain the arguments that are required to run the scripts. You can find the empty template files and the explanation of the arguments in the **args** folder, or post running the scripts interactively in the **recorded-args** folder. Following are the files:<br/>
            
              <h4>initenv.properties</h4>
              This file contains properties used to run the environment initialization.
              <h4>prepareserverdbs.properties</h4>
              The Mobile Foundation service requires an external <a href="https://console.ng.bluemix.net/catalog/services/dashdb/" target="\_blank">dashDB Enterprise Transactional database</i> instance</a> (Any plan that is marked OLTP or Transactional).<br/>
              <b>Note:</b> The deployment of the dashDB Enterprise Transactional plans is immediate for the plans marked "pay as you go". Make sure you pick one of the suitable plans like <i>Enterprise for Transactions High Availability 2.8.500 (Pay per use)</i> <br/><br/>
              After you have set up your dashDB instance, provide the required arguments.
              
              <h4>prepareserver.properties</h4>
              This file is used for the prepareserver.sh script. This prepares the server file layout and pushes it to Bluemix as a Cloud Foundry app.
              <h4>startserver.properties</h4>
              This file configures tha runtime attributes of the server and starts is. It is strongly recomended that you use a minimum of 1024 MB (**SERVER_MEM=1024**) and 3 nodes for high availablilty (**INSTANCES=3**)
              
            </div>
        </div>
    </div>

    <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="step-foundation-2">
            <h4 class="panel-title">
                <a class="preventScroll" role="button" data-toggle="collapse" data-parent="#scripts2" data-target="#collapse-step-foundation-2" aria-expanded="false" aria-controls="collapse-step-foundation-2">Running the scripts</a>
            </h4>
        </div>

        <div id="collapse-step-foundation-2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="setupCordova">
            <div class="panel-body">
              <p>The following instructions demonstrate how to run the scripts by using the configuration files. A list of command-line arguments is also available should you choose to run without in interactive mode:</p>
              <ol>
                  <li><strong>initenv.sh – Logging in to Bluemix </strong><br />
                      Run the <strong>initenv.sh</strong> script to login to Bluemix. Run this for the Org and space where your dashDB service is bound:
                        {% highlight bash %}
                        ./initenv.sh args/initenv.properties
                        {% endhighlight %}

                        You an also pass the parameters on the commandline
                        
                        {% highlight bash %}
                        initenv.sh --user Bluemix_user_ID --password Bluemix_password --org Bluemix_organization_name --space Bluemix_space_name
                        {% endhighlight %}

                        To learn all the parameters supported and their documentation run the help option
                        
                        {% highlight bash %}
                        ./initenv.sh --help
                        {% endhighlight %}
                  </li>
                  <li><strong>prepareserverdbs.sh - Prepare the MobileFirst Server database</strong><br />
                  The <strong>prepareserverdbs.sh</strong> script is used to configure your MobileFirst server with the dashDB database service or a accessible DB2 database server. The Db2 option is usable particularly when you are running BLuemix local in the same datacentre where you have the DB2 server installed. If using the dashDB service, the service instance of the dashDB service should be available in the Organization and Space that you logged in to in step 1. Run the following:
                        {% highlight bash %}
                        ./prepareserverdbs.sh args/prepareserverdbs.properties
                        {% endhighlight %}

                        You an also pass the parameters on the commandline

                        {% highlight bash %}
                        prepareserverdbs.sh --admindb MFPDashDBService
                        {% endhighlight %}

                        To learn all the parameters supported and their documentation run the help option

                        {% highlight bash %}
                        ./prepareserverdbs.sh --help
                        {% endhighlight %}
                    
                  </li>
                  <li><strong>initenv.sh(Optional) – Logging in to Bluemix </strong><br />
                      This step is required only if you need to create your server in a different Organization and Space than where the dashDB service instance is available. If yes, then update the initenv.properties with the new Organization and Space where the containers have to be created (and started), and rerun the <strong>initenv.sh</strong> script:
                        {% highlight bash %}
                        ./initenv.sh args/initenv.properties
                        {% endhighlight %}
                  </li>
                  <li><strong>prepareserver.sh - Prepare a Mobilefirst Platform Foundation Server </strong><br />
                    Run the <strong>prepareserver.sh</strong> script in order to build a MobileFirst Platform Foundation Server and push it to  Bluemix as a Cloud Foundry application. To view all the Cloud Foundry applications and theur URLs in the logged in Org and space, run: <code>cf apps</code><br/>
                  
                  
                        {% highlight bash %}
                        ./prepareserver.sh args/prepareserver.properties
                        {% endhighlight %}

                        You an also pass the parameters on the commandline

                        {% highlight bash %}
                        prepareserver.sh --name APP_NAME
                        {% endhighlight %}

                        To learn all the parameters supported and their documentation run the help option
                        
                        {% highlight bash %}
                        ./prepareserver.sh --help
                        {% endhighlight %}                  
                  
                  </li>
                  <li><strong>startserver.sh - Starting the server</strong><br />
                  The <strong>startserver.sh</strong> script is used to start the Mobilefirst Server on Liberty for Java Cloud Foundry application. Run:</p> 
                        {% highlight bash %}
                        ./startserver.sh args/startserver.properties
                        {% endhighlight %}

                        You an also pass the parameters on the commandline

                        {% highlight bash %}
                        ./startserver.sh --name APP_NAME 
                        {% endhighlight %}

                        To learn all the parameters supported and their documentation run the help option
                        
                        {% highlight bash %}
                        ./startserver.sh --help
                        {% endhighlight %}   

                  </li>
              </ol>
            </div>
        </div>
    </div>
</div>


Launch the MobileFirst Console by loading the following URL: http://APP_HOST.mybluemix.net/mfpconsole (it may take a few moments).  
Add the remote server by following the instructions in the [Using MobileFirst CLI to Manage MobileFirst Artifacts](../../using-the-mfpf-sdk/using-mobilefirst-cli-to-manage-mobilefirst-artifacts/#add-a-new-server-instance) tutorial.  

With MobileFirst Server running on IBM Bluemix, you can now start your application development. Review the MobileFirst Foundation [tutorials](../../all-tutorials).

#### Applying changes
You may need to apply changes to the server layout after you have deployed the server once, e.g: you want to update the analytics URL in /usr/config/mfpfproperties.xml. Makt the changes and then re-run the following scripts with the same set of arguments. 

1. ./prepareserver.sh 
2. ./startserver.sh 

## Applying MobileFirst Server Fixes
Interim fixes for the MobileFirst Server on IBM Containers can be obtained from [IBM Fix Central](http://www.ibm.com/support/fixcentral).  
Before you apply an interim fix, back up your existing configuration files. The configuration files are located in the 
**package_root/mfpf-server-libertyapp/usr** folders.

1. Download the interim fix archive and extract the contents to your existing installation folder, overwriting the existing files.
2. Restore your backed-up configuration files into the  **/mfpf-server-libertyapp/usr** folders, overwriting the newly installed configuration files.

You can now build and deploy the updatd server.

## Removing the database service configuration from Bluemix	
If you ran the **prepareserverdbs.sh** script during the configuration of the MobileFirst Server image, the configurations and database tables required for MobileFirst Server are created. This script also creates the database schema for the container.

To remove the database service configuration from Bluemix, perform the following procedure using Bluemix dashboard.

1. From the Bluemix dashboard, select the dashDB service you have used. Choose the dashDB service name that you had provided as parameter while running the **prepareserverdbs.sh** script.
2. Launch the dashDB console to work with the schemas and database objects of the selected dashDB service instance.
3. Select the schemas related to IBM MobileFirst Server configuration. The schema names are ones that you have provided as parameters while running the **prepareserverdbs.sh** script.
4. Delete each of the schema after carefully inspecting the schema names and the objects under them. The database configurations are removed from Bluemix.
