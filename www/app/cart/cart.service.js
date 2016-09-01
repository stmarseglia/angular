define([
    './namespace',
    './cart.module'
], function(namespace,module) {

    var currentProducts = [];

    function service() {

        return {
            addToCart       : addToCart
        }

    };

    function addToCart(productId) {
        currentProducts.push(productId);
    };


    var name = namespace + 'Service';
    module.factory(name,service);

});