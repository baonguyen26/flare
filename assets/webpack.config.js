const path = require('path');

module.exports = {
  entry: {
    "./app.js": "./js/app.js",
    // "./app.css": "./css/app.css",
    //'./app.js': glob.sync('./vendor/**/*.js').concat(['./js/app.js']),
    //'./froala_tui_integration.js': './js/froala_tui_integration.js',
    // './test.js': './js/test.js',
  },
  output: {
    filename: 'app.js', // Tên tệp đầu ra
    path: path.resolve(__dirname, '../priv/static/assets'), // Đường dẫn tới thư mục đầu ra
    publicPath: '/js/',
  },
  mode: 'development', // Chế độ phát triển
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Các tệp JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Sử dụng Babel để biên dịch
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Các tệp CSS
        use: ['style-loader', 'css-loader'], // Sử dụng style-loader và css-loader
      },
      {
        test: /\.html$/i,  // Để xử lý các tệp HTML
        loader: 'html-loader',
      },
    ],
  },
  devtool: 'source-map', // Tạo source map cho việc gỡ lỗi
  resolve: {
    extensions: ['.js', '.css'], // Các phần mở rộng có thể được tự động giải quyết
  },
};
