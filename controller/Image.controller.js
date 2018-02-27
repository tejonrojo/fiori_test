sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";
	return Controller.extend("net.holcim.la.crd1.controller.Image", {
		onShowHello: function() {
			MessageToast.show("Test");
		}
	});
});