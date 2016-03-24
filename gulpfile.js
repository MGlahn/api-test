var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jsFiles = ['*.js', 'src/**/*.js'],
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs');

//Default gulp task with just nodemon retarting on changes. The serve task below is more advanced taking in other tasks as well
//gulp.task('default', function () {
//    nodemon({
//            script: 'app.js',
//            ext: 'js',
//            env: {
//                PORT: 5000
//            },
//            ignore: ['./node_modules/**']
//        })
//        .on('restart', function () {
//            console.log('restarting');
//        });
//});

gulp.task('style', function () {
    //When i return it, i can use it as a subtask somewhere else
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs())
        .pipe(jscs.reporter());
});

gulp.task('serve', ['style'], function() {
    //Options for nodemon: script: what nodemon should run on restart.
    //delaytime: wait a second before it runs the restart
    //env: environment variables
    //watch: what should nodemon look for changes in?
    var options = {
        script: 'app.js',
        delayTime : 1,
        env: {
            'PORT': 5000
        },
        watch: jsFiles
    };
    return nodemon(options)
    .on('restart', function(ev) {
        console.log('restarting...');
    });
});