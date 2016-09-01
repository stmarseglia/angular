define([
    './cart.module',
    './namespace'
],function(module,namespace) {

    var name = namespace + 'Ctrl';

  console.log("Cart controller");

    function myController($scope) {

        $scope.cartProducts=[];

        $scope.addProductToCart = function(product) {
            $scope.cartProducts.push(product);
        };
    }

    console.log("controller name: " + name);

  return module.controller(name,['$scope',myController]);

});
