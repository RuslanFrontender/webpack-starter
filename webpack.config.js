const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: "./src/main.js",
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: [
            'raw-loader'
        ]
    }
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  }
}



function pagesHTML() {
  const HtmlWebpackPluginConfig = []
  fs.readdirSync('./src/pages').forEach(file => {
    HtmlWebpackPluginConfig.push(new HtmlWebpackPlugin({
      filename: file,
      template: './src/pages/' + file
    }))
  })    
  return HtmlWebpackPluginConfig
}