sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController, JSONModel) {
		"use strict";

		return BaseController.extend("app.app.controller.Menu", {
			onInit: async function () {
                var that = this;
                await $.ajax({
                    "url": "/main/Employees?$expand=department",
                    "method": "GET",
                    success(data) {

                        var total = data.value.length
                        var listaFinal = data.value.reduce((lista, curr) => {
                            if (curr.department.name in lista) {
                                lista[curr.department.name]++;
                            }
                            else {
                                lista[curr.department.name] = 1;
                            }
                            return lista
                        }, {})
                        
                        listaFinal.total = total
                        console.log("sucesso")
                        that.getView().setModel(new JSONModel(listaFinal), "Total")
                    },
                    error() {
                        console.log("erro: hello")
                    }
                })
            },  
            onNavGerenciar: function(){
               this.getRouter().navTo("Gerenciar");
            },
             onNavRelatorio: function(){
                this.getRouter().navTo("Relatorio");
            },
            onNavListar: function(){
                this.getRouter().navTo("Listar");
            }
	});
});