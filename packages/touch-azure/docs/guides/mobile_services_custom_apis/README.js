Ext.data.JsonP.mobile_services_custom_apis({"guide":"<h1 id='mobile_services_custom_apis-section-using-windows-azure-custom-apis-in-your-app'>Using Windows Azure Custom APIs in your App</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/mobile_services_custom_apis-section-creating-custom-apis-in-windows-azure'>Creating Custom APIs in Windows Azure</a></li>\n<li><a href='#!/guide/mobile_services_custom_apis-section-adding-custom-apis-to-the-azure-proxy'>Adding Custom APIs to the Azure Proxy</a></li>\n</ol>\n</div>\n\n<p>This guide explains how to add custom APIs you create in the Azure portal to your Azure proxy. If you have not already done so, it is advised that you are familiar with configuring Azure data services within your Touch application. More information about this is available in the <a href=\"#!/guide/mobile_services_data\">Getting Started with Data in Azure Mobile Services</a> guide.</p>\n\n<p>In Windows Azure, a custom API enables you to define custom functions within the Azure mobile service that are made available to your application. These functions do not map to the standard INSERT, UPDATE, DELETE, or READ operations. By using a custom API, you can have more control over messaging, including reading and setting HTTP message headers and defining a message body format other than JSON.</p>\n\n<h2 id='mobile_services_custom_apis-section-creating-custom-apis-in-windows-azure'>Creating Custom APIs in Windows Azure</h2>\n\n<p>First, you'll need to follow some of the setup instruction in the Azure <a href=\"https://www.windowsazure.com/en-us/develop/mobile/tutorials/call-custom-api-js/\">Call a Custom API</a> tutorial. Specifically, you'll need to follow step #1: <strong>Define the custom API</strong> (steps #2 &amp; #3 can be ignored).</p>\n\n<h2 id='mobile_services_custom_apis-section-adding-custom-apis-to-the-azure-proxy'>Adding Custom APIs to the Azure Proxy</h2>\n\n<p>Once your custom API has been configured in the Azure Portal, you will need to tell your application's Azure proxy the name of the API it will be using. This is done in the proxy configuration using the <strong>customApiName</strong> property:</p>\n\n<pre><code>Ext.define('todo.store.TodoItems', {\n    extend : 'Ext.data.Store',\n\n    requires: [\n        'todo.model.TodoItem',\n        '<a href=\"#!/api/Ext.azure.Proxy\" rel=\"Ext.azure.Proxy\" class=\"docClass\">Ext.azure.Proxy</a>'\n    ],\n\n    config : {\n        model        : 'todo.model.TodoItem',\n        autoSync     : true,\n\n        proxy : {\n            type          : 'azure',\n            customApiName : 'YOUR_API_NAME'\n        }\n    }\n});\n</code></pre>\n\n<p>When a <strong>customApiName</strong> property is defined in an Azure proxy, requests are no longer directed to the default data endpoints but instead sent to the following endpoint:</p>\n\n<ul>\n<li>https://YOUR_AZURE_SERVICE.azure-mobile.net/api/YOUR_API_NAME</li>\n</ul>\n\n\n<p>Your next step is to ensure that the server-side logic of your API is defined and functioning correctly. You may add your server-side logic to the API via the \"Scripts\" tab in your Azure portal per the <a href=\"https://www.windowsazure.com/en-us/develop/mobile/tutorials/call-custom-api-js/\">Call a Custom API</a> tutorial.</p>\n","title":"Custom APIs"});