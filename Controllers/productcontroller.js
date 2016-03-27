var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

var index = 'api-test2',
    type = 'product';

var products = {
    'lamp' : 'nice lamp',
    'table' : 'even nicer table'
};

var productController = function () {
    var get = function (req, res) {
        res.send('Hello testy test World');
    };

    var getAll = function (req, res) {
        var query = {
            'index': index,
            'type': type,
            'body': {
                'query': {
                    'match_all': {}
                }
            }
        };
        client.search(query, function (err, response) {
            res.send('did search');
        });
    };

    var productInfo = function(req, res) {
        var productName = req.params.productname;
        var productInfo = products[productName];
        if(productInfo){
        if(productInfo){
            res.json(productInfo);
        } else {
            res.status(404).json('product ' + productName + ' not found');
        }
    };
    
    //Revealing module pattern
    return {
        get: get,
        getAll: getAll,
        productInfo : productInfo
    };
};

module.exports = productController;