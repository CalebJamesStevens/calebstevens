const path = require('path');

module.exports = {
  resolve: {
    roots: [__dirname, path.resolve(__dirname, 'src')],
    alias: {
      //Expample: path.resolve(__dirname, 'src/*')
    }
  }
}