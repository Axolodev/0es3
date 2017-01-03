var nunjucks = require('nunjucks');
var fs = require('fs');
var nunjucks_dir = "./nunjucks/resources/";
var output_dir = "views";


function readFiles(dirname) {
    fs.readdir(dirname, function(err, filenames) {
        filenames.forEach(function(filename) {
            fs.readFile(dirname + "/" + filename, 'utf-8', function(err, content) {
                if (err) {
                    console.log(err);
                    return;
                }

                // Compile nunjucks from file
                var compiled_nunjucks = nunjucks.render(dirname + "/" + filename);

                // Delete extension from filename
                var new_filename = filename.replace(/\.[^/.]+$/, "");

                // Write compiled nunjucks to a file
                fs.writeFile(output_dir + "/" + new_filename + ".html", compiled_nunjucks, function (err) {
                    if(err){
                        console.log(err);
                    }
                });
            });
        });
    });
}

readFiles('./nunjucks/resources/views');

