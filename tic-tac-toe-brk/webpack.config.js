const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Import the plugin

module.exports = {
  entry: './src/index.js', // The entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output filename
    library: 'TicTacToeBrk', // The name of the library
    libraryTarget: 'umd', // Universal Module Definition
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the following rules to .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript files
        },
      },
      {
        test: /\.css$/, // Apply the following rules to .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
    ],
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/styles.css', to: 'css' }], // Copy CSS files from src/css to dist/css
    }),
  ],
};
