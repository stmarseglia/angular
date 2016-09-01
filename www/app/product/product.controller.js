define([
    './product.module',
    './namespace'
],function(module,namespace) {

    var name = namespace + 'Ctrl';

  console.log("Product controller");

    function myController($scope,cartService) {

        $scope.products = [
            {
                "description": "This is a very beautiful product",
                "price": "23",
                "qty": 20
            },
            {
                "description": "I can't believe how beautiful this product is",
                "price": "250",
                "qty": 2
            }
        ];

        $scope.addProductToCart = function(product) {
            cartService.addToCart(product);
        };
    }

    console.log("controller name: " + name);

  return module.controller(name,['$scope','app.cartService',myController]);

});
