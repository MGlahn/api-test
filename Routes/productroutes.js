var express = require('express');
var routes = function () {
    var productRouter = express.Router();
    var productController = require('../Controllers/productcontroller')();
    console.log('routes here');

    productRouter.route('/')
        .get(productController.get);

    productRouter.route('/all')
        .get(productController.getAll);

    productRouter.route('/info/:productname')
        .get(productController.productInfo);

    return productRouter;
};

module.exports = routes;