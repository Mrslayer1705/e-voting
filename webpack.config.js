const path = require('path');

module.exports = {
  entry: './src/index.js', // Correctly formatted entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // ... other configurations ...
};
