var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var nunjucks = require('nunjucks');
var filter = require('gulp-filter');
var output_dir = "views";
var fs = require('fs');
var watch_dir = "./nunjucks/resources/views/**/",
    watch_files = "*.njk";

// Todo
gulp.task('build', function () {
    var jsonContent = fs.readFileSync("./nunjucks/data/modules.json");
    var modules = JSON.parse(jsonContent);

    fs.readdir(watch_dir, function(err, filenames) {
        filenames.forEach(function(filename) {
            // Compile nunjucks from file
            var compiled_nunjucks = nunjucks.render(watch_dir + "/" + filename);

            // Delete extension from filename
            var new_filename = filename.replace(/\.[^/.]+$/, "");

            // Write compiled nunjucks to a file
            console.log(output_dir + "/" + new_filename)
            fs.writeFile(output_dir + "/" + new_filename + ".html", compiled_nunjucks, function (err) {
                if(err){
                    console.log(err);
                }
            });
        });
        fs.close();
    });

});

gulp.task('watch', function () {
    watch(watch_dir + watch_files, batch(function (events, done) {
        gulp.start('build', done);
    }));
});
