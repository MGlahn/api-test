module.exports = function (request, response, next) {
    var startTime = +new Date();
    var stream = process.stdout;
    var duration = null;
    var url = request.url;
    var method = request.method;

    response.on('finish', function () {
        duration = +new Date() - startTime;
        stream.write(method + ' to ' + url + ' took ' + duration + ' ms');
    });
    next();
};