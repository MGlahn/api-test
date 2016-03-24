var express = require('express');
var routes = function () {
    var productRouter = express.Router();
    var productController = require('../Controllers/productcontroller')();
    console.log('routes here');

    productRouter.route('/')
        .get(productController.get);

    productRouter.route('/new-route')
        .get(productController.newRoute);

    return productRouter;
};

module.exports = routes;