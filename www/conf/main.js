requirejs.config({

    baseUrl: "../",

    paths: {
        angular: "lib/angular/angular.min",
    },

    shim: {
        "angular" : {
            exports: 'angular'
        }
    }

});

/* Importantissimo: se app è il modulo angular da applicare a document, e se app ha un controller associato, questo controller deve essere
 caricato QUI (dipendenza requirejs), prima di fare il bootstrap di app su document, altrimenti alcune volte capita che si carica
 la pagina e il controller non viene associato ad app (per race conditions nel caricamento dei js) */
define([
    'angular',
    '../app/namespace',
    '../app/app.module'
],function(angular,namespace) {

    /* N.B. a dimostrazione del fatto che app.module.js e product.product.controller.js vengono caricati ed eseguiti prima di questa parte di codice, nella console di chrome si vede che "before app module" esce DOPO
     * "App module" e "App controller" */

    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function () {
        // bootstrap the app manually
        angular.bootstrap(document,[namespace]);
    });
});
