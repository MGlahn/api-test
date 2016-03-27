var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    productRouter = require('./Routes/productroutes')(),
    logger = require('./Middleware/logger');

console.log('hey app.js here');

app.use(logger);

//app.use() is intended for binding middleware to your application. The path is a "mount" or "prefix" path and limits the middleware to only apply to any paths requested that begin with it
app.use('/api/products', productRouter);

//make the app listen on port '5000' and also returns the HTTP server instance
app.listen(port, function (err) {
    console.log('running server on port ' + port);
});