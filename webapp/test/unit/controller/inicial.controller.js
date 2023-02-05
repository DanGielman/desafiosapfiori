/*global QUnit*/

sap.ui.define([
	"google_imagens/controller/inicial.controller"
], function (Controller) {
	"use strict";

	QUnit.module("inicial Controller");

	QUnit.test("I should test the inicial controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
