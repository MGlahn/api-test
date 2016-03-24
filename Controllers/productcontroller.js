var productController = function () {
    var get = function (req, res) {
        res.send('Hello testy test World');
    };

    var newRoute = function (req, res) {
        res.send('Hello new route');
    };

    //Revealing module pattern
    return {
        get: get,
        newRoute: newRoute
    };
};

module.exports = productController;