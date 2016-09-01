/* Questo modulo ha il compito di caricare i file js nel giusto ordine.
* In questo caso, carica product.controller.js in cui si definisce il controller di product.
* In quest'ultimo file, si associa il controller al modulo app.product. Per fare questo, il controller deve
* avere caricato prima il modulo, e quindi nel suo require si trova il caricamento di product.module.js */

define([
    './product.controller'
],function() {
    'use strict';
});