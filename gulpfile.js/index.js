global.$ = {
    // Пакеты
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    browsersync: require("browser-sync").create(),

    // Конфигурация
    path: require("./config/path.js"),
    app: require("./config/app.js"),

    // Плагины
    sass: require("gulp-sass")(require("sass")),
    webpack: require("webpack-stream")
}

// Задачи
const clear = require("./task/clear.js");
const server = require("./task/server.js");
const html = require("./task/html.js");
const scss = require("./task/scss.js");
const js = require("./task/js.js");
const img = require("./task/img.js");
const fonts = require("./task/fonts.js");

// Наблюдение
const watcher = () => {
    $.gulp.watch($.path.html.watch, html).on("all", $.browsersync.reload);
    $.gulp.watch($.path.scss.watch, scss).on("all", $.browsersync.reload);
    $.gulp.watch($.path.js.watch, js).on("all", $.browsersync.reload);
    $.gulp.watch($.path.img.watch, img).on("all", $.browsersync.reload);
    $.gulp.watch($.path.fonts.watch, fonts).on("all", $.browsersync.reload);
}

// Build
const build = $.gulp.series(
    clear,
    $.gulp.parallel(html, scss, js, img, fonts)
);

// Dev
const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, server)
);


// Задачи Gulp
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.clear = clear;

// Сборка
exports.default = $.app.isProd
    ? build
    : dev;

