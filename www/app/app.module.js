define([
    'angular',
    './namespace',
    './product/namespace',
    './cart/namespace',
    './product/product.module.require',
    './cart/cart.module.require'
],function(angular,namespace, productNamespace, cartNamespace) {

  console.log("App module");

  return angular.module(namespace,[
      productNamespace,
      cartNamespace
  ]);

});
