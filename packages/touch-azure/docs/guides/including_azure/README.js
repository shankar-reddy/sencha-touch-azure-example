Ext.data.JsonP.including_azure({"guide":"<h1 id='including_azure-section-including-azure-in-your-application'>Including Azure in your Application</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/including_azure-section-downloading-and-installing-the-sencha-touch-azure-extension'>Downloading and Installing the Sencha Touch Azure Extension</a></li>\n<li><a href='#!/guide/including_azure-section-including-azure-in-your-application'>Including Azure in your Application</a></li>\n</ol>\n</div>\n\n<p>Including the Sencha Touch Extensions for Windows Azure is a simple matter of retrieving the package, unpacking it and telling your applicaton where to find the source files.</p>\n\n<p>There are two methods for obtaining the Azure extensions, both of which are outlined below. Regardless of the method you choose to obtain and install the extensions, configuring your application with the location of the source is the same.</p>\n\n<p>This guide steps you through the download and install process and outlines how to configure your application with the location of the Azure Extension source files.</p>\n\n<h2 id='including_azure-section-downloading-and-installing-the-sencha-touch-azure-extension'>Downloading and Installing the Sencha Touch Azure Extension</h2>\n\n<p>The Azure extension can be installed using either one of the following two methods outlined here. Which method you decide to use is totally up to you.</p>\n\n<ul>\n<li><p><strong>Manual Installation</strong></p>\n\n<p>  In most Touch applications, if you wish to add an external library of classes, you simply download the package, unpack it in your application directory and configure the Touch loader with the location of the library.</p>\n\n<p>  You can manually add Azure to your application using the following steps :</p>\n\n<ol>\n<li><p> Download the Azure package from <a href=\"https://market.sencha.com/extensions/sencha-touch-extensions-for-windows-azure\">here</a> (You may use your Sencha Forums ID to access this area)</p></li>\n<li><p> If one does not already exist, create a directory named <strong>packages</strong> under your application directory.</p></li>\n<li><p> Copy the Azure package from the download directory to the application's <strong>packages</strong> directory and unzip the contents.</p>\n\n<pre><code>  $ cd /path/to/application/packages/\n  $ mv /download-location/touch-azure.zip .\n  $ unzip touch-azure.zip  \n</code></pre></li>\n</ol>\n\n\n<p>  This will unzip the contents into <strong>packages/touch-azure/</strong> under your application directory and contains the entire Azure package source, examples and documentation. The location of the package source can be found in <strong>packages/touch-azure/src</strong>.</p></li>\n<li><p><strong>Installation as a Sencha Package</strong></p>\n\n<p>  <strong>Note</strong>: This method can only be used if you have generated your application using the <em>sencha generate app</em> command.</p>\n\n<p>  All applications generated by Sencha Cmd have a \"packages\" folder at the root. The location of this folder can be configured, but regardless of its location, the role of the \"packages\" folder is to serve as the storage of all packages used by your application (or applications if you have created a Sencha Workspace).</p>\n\n<p>  As <a href=\"#!/api/Ext.Azure\" rel=\"Ext.Azure\" class=\"docClass\">Ext.Azure</a> is a Sencha Cmd \"package\", the source code can be easily installed and included in your application using Sencha Cmd. (See <a href=\"http://docs.sencha.com/cmd/3.1.2/#!/guide/command_packages\">Sencha Cmd Packages</a> for more information).</p>\n\n<p>  To download and install the Azure package from the Sencha Packages repository, you will need to add the package name to your <strong>app.json</strong> file and build your application:</p>\n\n<ol>\n<li><p> Add the Azure package to the requires section of your app.json file:</p>\n\n<pre><code>  {\n      \"name\": \"Basic\",\n      \"requires\": [\n          \"touch-azure\"\n      ]\n  }\n</code></pre></li>\n<li><p> Rebuild your application using <strong>sencha cmd</strong> to fetch and install the Azure package:</p>\n\n<pre><code>  $ sencha app build\n</code></pre></li>\n</ol>\n\n\n<p>  Both <strong>sencha app build</strong> and <strong>sencha app refresh</strong> will both now perform the steps needed to integrate the package in to your application. Typically, after changing package requirements, you will need to run <strong>sencha app refresh</strong> so that the metadata required to support \"dev mode\" is up to date.</p>\n\n<p>  Whichever command you run, Sencha Cmd will download and expand the package to your \"packages\" folder. After this you will find a \"packages/touch-azure\" folder in your workspace.</p>\n\n<p>  <strong>NOTE:</strong> You can alternatively run the following commands manually. These are wrapped inside <strong>sencha app build</strong>, but if you don't want to run the full build:</p>\n\n<pre><code>      $ sencha package repo sync\n      $ sencha package install touch-azure\n</code></pre></li>\n</ul>\n\n\n<h2 id='including_azure-section-including-azure-in-your-application'>Including Azure in your Application</h2>\n\n<p>The final step to including Azure in your application is to specify the location of the Azure source files and require the Azure class.</p>\n\n<p>In your Touch application's <strong>app.js</strong> file make the following additions:</p>\n\n<ol>\n<li><p>Configure the Sencha Loader with the location of the Azure source code:</p>\n\n<pre><code> Ext.Loader.setConfig({\n     enabled : true,\n     paths   : {\n         'Ext'       : 'touch/src',\n         'Ext.azure' : 'packages/touch-azure/src'\n     }\n });\n</code></pre></li>\n<li><p>Require the Azure class files:</p>\n\n<pre><code>Ext.application({\n\n     requires: [ '<a href=\"#!/api/Ext.Azure\" rel=\"Ext.Azure\" class=\"docClass\">Ext.azure.Azure</a>' ],\n\n     // ...\n\n });\n</code></pre></li>\n</ol>\n\n\n<p>Now that you have successully added Sencha Touch Extensions for Windows Azure to your application, you may now proceed with <a href=\"#!/guide/configuration\">Configuring Azure</a>.</p>\n","title":"Downloading & Including Azure"});