var gulp = require('gulp');
var webserver = require('gulp-webserver');


var _path;

exports.start = function (path) {
    _path = path;
    gulp.start('default');
};

gulp.task('default', function () {
    var proxies = _path ? require(_path) : [];
    console.log(proxies);
    gulp
        .src('.')
        .pipe(webserver({
			host: "0.0.0.0",
            open: false,
            proxies: proxies
        }));
});
