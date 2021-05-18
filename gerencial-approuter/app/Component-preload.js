//@ui5-bundle app/app/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"app/app/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","app/app/model/models"],function(e,t,i){"use strict";return e.extend("app.app.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"app/app/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("app.app.controller.App",{onInit:function(){}})});
},
	"app/app/i18n/i18n.properties":'title=Title\nappTitle=App\nappDescription=App Description\n',
	"app/app/manifest.json":'{"_version":"1.32.0","sap.app":{"id":"app.app","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","ach":"ach"},"sap.ui":{"technology":"UI5","icons":{"icon":"sap-icon://task","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"app.app.view.App","type":"XML","async":true,"id":"App"},"dependencies":{"minUI5Version":"1.66.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"app.app.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"app.app.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteApp","pattern":"RouteApp","target":["TargetApp"]}],"targets":{"TargetApp":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"App","viewName":"App"}}}}}',
	"app/app/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"app/app/view/App.view.xml":'<mvc:View\n    controllerName="app.app.controller.App"\n    xmlns:mvc="sap.ui.core.mvc"\n    displayBlock="true"\n    xmlns="sap.m"\n><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>cristiano}"><content /></Page></pages></App></Shell></mvc:View>\n'
}});
