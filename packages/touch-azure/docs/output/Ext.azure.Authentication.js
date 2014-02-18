Ext.data.JsonP.Ext_azure_Authentication({"tagname":"class","name":"Ext.azure.Authentication","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true,"singleton":true},"files":[{"filename":"Authentication.js","href":"Authentication.html#Ext-azure-Authentication"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":["Ext.azure.AuthOptions","Ext.azure.AuthWindow","Ext.azure.User"],"uses":[],"members":[{"name":"localStorageId","tagname":"property","owner":"Ext.azure.Authentication","id":"property-localStorageId","meta":{"private":true}},{"name":"loginUrl","tagname":"property","owner":"Ext.azure.Authentication","id":"property-loginUrl","meta":{"private":true}},{"name":"user","tagname":"property","owner":"Ext.azure.Authentication","id":"property-user","meta":{"private":true}},{"name":"buildAuthUrl","tagname":"method","owner":"Ext.azure.Authentication","id":"method-buildAuthUrl","meta":{"private":true}},{"name":"getCurrentUser","tagname":"method","owner":"Ext.azure.Authentication","id":"method-getCurrentUser","meta":{}},{"name":"getLoginUrl","tagname":"method","owner":"Ext.azure.Authentication","id":"method-getLoginUrl","meta":{}},{"name":"init","tagname":"method","owner":"Ext.azure.Authentication","id":"method-init","meta":{"private":true}},{"name":"login","tagname":"method","owner":"Ext.azure.Authentication","id":"method-login","meta":{}},{"name":"logout","tagname":"method","owner":"Ext.azure.Authentication","id":"method-logout","meta":{}},{"name":"onAuthFailure","tagname":"method","owner":"Ext.azure.Authentication","id":"method-onAuthFailure","meta":{}},{"name":"onAuthSuccess","tagname":"method","owner":"Ext.azure.Authentication","id":"method-onAuthSuccess","meta":{}},{"name":"setCurrentUser","tagname":"method","owner":"Ext.azure.Authentication","id":"method-setCurrentUser","meta":{}}],"code_type":"ext_define","singleton":true,"id":"class-Ext.azure.Authentication","short_doc":"The Azure authentication class provides the necessary functions for you to obtain user\nauthentication required by you...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.azure.Authentication</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.azure.AuthOptions' rel='Ext.azure.AuthOptions' class='docClass'>Ext.azure.AuthOptions</a></div><div class='dependency'><a href='#!/api/Ext.azure.AuthWindow' rel='Ext.azure.AuthWindow' class='docClass'>Ext.azure.AuthWindow</a></div><div class='dependency'><a href='#!/api/Ext.azure.User' rel='Ext.azure.User' class='docClass'>Ext.azure.User</a></div><h4>Files</h4><div class='dependency'><a href='source/Authentication.html#Ext-azure-Authentication' target='_blank'>Authentication.js</a></div></pre><div class='doc-contents'><p>The Azure authentication class provides the necessary functions for you to obtain user\nauthentication required by your application (if required by your application configuration).</p>\n\n<p>This class is included as part of the core Azure package and provides seamless integration\nfor your application to be authenticated via a user's existing Microsoft, Facebook, Twitter or\nGoogle account.</p>\n\n<pre><code>Ext.application({\n    name : 'MyApp',\n\n    requires : [\n        '<a href=\"#!/api/Ext.Azure\" rel=\"Ext.Azure\" class=\"docClass\">Ext.azure.Azure</a>'\n    ],\n\n    azure : {\n        appKey         : 'YOUR_AZURE_APP_KEY ',\n        appUrl         : 'YOUR_AZURE_APP_URL',\n        authIdentities : [\n            'microsoft',\n            'facebook',\n            'twitter',\n            'google'\n        ]\n    },\n\n    launch : function() {\n        <a href=\"#!/api/Ext.Azure-method-init\" rel=\"Ext.Azure-method-init\" class=\"docClass\">Ext.Azure.init</a>(this.config.azure);\n\n        //display options for authentication\n        var authOptions = Ext.create('<a href=\"#!/api/Ext.azure.AuthOptions\" rel=\"Ext.azure.AuthOptions\" class=\"docClass\">Ext.azure.AuthOptions</a>');\n        authOptions.showBy(Ext.getBody());\n    }\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-localStorageId' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.Authentication'>Ext.azure.Authentication</span><br/><a href='source/Authentication.html#Ext-azure-Authentication-property-localStorageId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.Authentication-property-localStorageId' class='name expandable'>localStorageId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'azure-user-'</code></p></div></div></div><div id='property-loginUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.Authentication'>Ext.azure.Authentication</span><br/><a href='source/Authentication.html#Ext-azure-Authentication-property-loginUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.Authentication-property-loginUrl' class='name expandable'>loginUrl</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'login/'</code></p></div></div></div><div id='property-user' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.Authentication'>Ext.azure.Authentication</span><br/><a href='source/Authentication.html#Ext-azure-Authentication-property-user' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.Authentication-property-user' class='name expandable'>user</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>An object that represents the current authenticated user.</p>\n</div><div class='long'><p>An object that represents the current authenticated user.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-buildAuthUrl' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.Authentication'>Ext.azure.Authentication</span><br/><a href='source/Authentication.html#Ext-azure-Authentication-method-buildAuthUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.Authentication-method-buildAuthUrl' class='name expandable'>buildAuthUrl</a>( <span class='pre'>authMethod</span> ) : string<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Builds the authorization url ...</div><div class='long'><p>Builds the authorization url</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>authMethod</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCurrentUser' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.Authentication'>Ext.azure.Authentication</span><br/><a href='source/Authentication.html#Ext-azure-Authentication-method-getCurrentUser' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.Authentication-method-getCurrentUser' class='name expandable'>getCurrentUser</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.azure.User\" rel=\"Ext.azure.User\" class=\"docClass\">Ext.azure.User</a>/Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Will return the current user, if one is loaded. ...</div><div class='long'><p>Will return the current user, if one is loaded. If the user is not loaded but exists in localstorage,\ngetCurrentUser() will return TRUE and asynchronously load the user.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.azure.User\" rel=\"Ext.azure.User\" class=\"docClass\">Ext.azure.User</a>/Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLoginUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.Authentication'>Ext.azure.Authentication</span><br/><a href='source/Authentication.html#Ext-azure-Authentication-method-getLoginUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.Authentication-method-getLoginUrl' class='name expandable'>getLoginUrl</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the login url ...</div><div class='long'><p>Returns the login url</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.Authentication'>Ext.azure.Authentication</span><br/><a href='source/Authentication.html#Ext-azure-Authentication-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.Authentication-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-login' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.Authentication'>Ext.azure.Authentication</span><br/><a href='source/Authentication.html#Ext-azure-Authentication-method-login' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.Authentication-method-login' class='name expandable'>login</a>( <span class='pre'>authMethod</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines the login method to use for the application. ...</div><div class='long'><p>Defines the login method to use for the application.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>authMethod</span> : Object<div class='sub-desc'><p>{String} 'microsoftaccount', 'facebook', 'twitter', or 'google'</p>\n</div></li></ul></div></div></div><div id='method-logout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.Authentication'>Ext.azure.Authentication</span><br/><a href='source/Authentication.html#Ext-azure-Authentication-method-logout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.Authentication-method-logout' class='name expandable'>logout</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Logout of application and remove local storage authentication tokens. ...</div><div class='long'><p>Logout of application and remove local storage authentication tokens.</p>\n</div></div></div><div id='method-onAuthFailure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.Authentication'>Ext.azure.Authentication</span><br/><a href='source/Authentication.html#Ext-azure-Authentication-method-onAuthFailure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.Authentication-method-onAuthFailure' class='name expandable'>onAuthFailure</a>( <span class='pre'>error</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when authentication fails. ...</div><div class='long'><p>Called when authentication fails.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onAuthSuccess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.Authentication'>Ext.azure.Authentication</span><br/><a href='source/Authentication.html#Ext-azure-Authentication-method-onAuthSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.Authentication-method-onAuthSuccess' class='name expandable'>onAuthSuccess</a>( <span class='pre'>oauth</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when application has been successfully authenticated ...</div><div class='long'><p>Called when application has been successfully authenticated</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>oauth</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setCurrentUser' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.Authentication'>Ext.azure.Authentication</span><br/><a href='source/Authentication.html#Ext-azure-Authentication-method-setCurrentUser' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.Authentication-method-setCurrentUser' class='name expandable'>setCurrentUser</a>( <span class='pre'>user</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the current user .. ...</div><div class='long'><p>Sets the current user ..</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>user</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});