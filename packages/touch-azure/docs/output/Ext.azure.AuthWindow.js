Ext.data.JsonP.Ext_azure_AuthWindow({"tagname":"class","name":"Ext.azure.AuthWindow","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true,"singleton":true},"files":[{"filename":"AuthWindow.js","href":"AuthWindow.html#Ext-azure-AuthWindow"}],"private":true,"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":["Ext.Ajax"],"uses":[],"members":[{"name":"intervalId","tagname":"property","owner":"Ext.azure.AuthWindow","id":"property-intervalId","meta":{"private":true}},{"name":"scopedMessageFn","tagname":"property","owner":"Ext.azure.AuthWindow","id":"property-scopedMessageFn","meta":{"private":true}},{"name":"window","tagname":"property","owner":"Ext.azure.AuthWindow","id":"property-window","meta":{"private":true}},{"name":"create","tagname":"method","owner":"Ext.azure.AuthWindow","id":"method-create","meta":{"private":true}},{"name":"endRequest","tagname":"method","owner":"Ext.azure.AuthWindow","id":"method-endRequest","meta":{"private":true}},{"name":"exitHandler","tagname":"method","owner":"Ext.azure.AuthWindow","id":"method-exitHandler","meta":{"private":true}},{"name":"intervalFn","tagname":"method","owner":"Ext.azure.AuthWindow","id":"method-intervalFn","meta":{"private":true}},{"name":"messageHandler","tagname":"method","owner":"Ext.azure.AuthWindow","id":"method-messageHandler","meta":{"private":true}},{"name":"urlChangeHandler","tagname":"method","owner":"Ext.azure.AuthWindow","id":"method-urlChangeHandler","meta":{"private":true}}],"code_type":"ext_define","singleton":true,"id":"class-Ext.azure.AuthWindow","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.azure.AuthWindow</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.Ajax</div><h4>Files</h4><div class='dependency'><a href='source/AuthWindow.html#Ext-azure-AuthWindow' target='_blank'>AuthWindow.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-intervalId' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.AuthWindow'>Ext.azure.AuthWindow</span><br/><a href='source/AuthWindow.html#Ext-azure-AuthWindow-property-intervalId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.AuthWindow-property-intervalId' class='name expandable'>intervalId</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-scopedMessageFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.AuthWindow'>Ext.azure.AuthWindow</span><br/><a href='source/AuthWindow.html#Ext-azure-AuthWindow-property-scopedMessageFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.AuthWindow-property-scopedMessageFn' class='name expandable'>scopedMessageFn</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-window' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.AuthWindow'>Ext.azure.AuthWindow</span><br/><a href='source/AuthWindow.html#Ext-azure-AuthWindow-property-window' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.AuthWindow-property-window' class='name expandable'>window</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-create' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.AuthWindow'>Ext.azure.AuthWindow</span><br/><a href='source/AuthWindow.html#Ext-azure-AuthWindow-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.AuthWindow-method-create' class='name expandable'>create</a>( <span class='pre'>url</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-endRequest' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.AuthWindow'>Ext.azure.AuthWindow</span><br/><a href='source/AuthWindow.html#Ext-azure-AuthWindow-method-endRequest' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.AuthWindow-method-endRequest' class='name expandable'>endRequest</a>( <span class='pre'>err, oauth</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>err</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>oauth</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-exitHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.AuthWindow'>Ext.azure.AuthWindow</span><br/><a href='source/AuthWindow.html#Ext-azure-AuthWindow-method-exitHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.AuthWindow-method-exitHandler' class='name expandable'>exitHandler</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-intervalFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.AuthWindow'>Ext.azure.AuthWindow</span><br/><a href='source/AuthWindow.html#Ext-azure-AuthWindow-method-intervalFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.AuthWindow-method-intervalFn' class='name expandable'>intervalFn</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-messageHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.AuthWindow'>Ext.azure.AuthWindow</span><br/><a href='source/AuthWindow.html#Ext-azure-AuthWindow-method-messageHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.AuthWindow-method-messageHandler' class='name expandable'>messageHandler</a>( <span class='pre'>rawResponse</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rawResponse</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-urlChangeHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.azure.AuthWindow'>Ext.azure.AuthWindow</span><br/><a href='source/AuthWindow.html#Ext-azure-AuthWindow-method-urlChangeHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.azure.AuthWindow-method-urlChangeHandler' class='name expandable'>urlChangeHandler</a>( <span class='pre'>urlObject</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>urlObject</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});