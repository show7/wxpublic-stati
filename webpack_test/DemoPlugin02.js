'use strict';

function FileListPlugin (options) {

}

FileListPlugin.prototype.apply = (compiler) => {
  compiler.plugin('emit', (compilation, callback) => {
    var filelist = 'in this build: \n\n';

    for (var filename in compilation.assets) {
      filelist += ('- ' + filename + '\n');
    }

    compilation.assets['filelist.md'] = {
      source: function () {
        return filelist;
      },
      size: function () {
        return filelist.length;
      },
    };

    callback();
  });
};

module.exports = FileListPlugin;