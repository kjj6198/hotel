const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


const PATH = {
  stylesheets: path.join(__dirname, 'src', 'assets', 'css'),
}

console.log(process.env.NODE_ENV);

const rooms = [
  {
    name: 'all',
    base: require('./src/data/rooms/all.json'),
    detail: require('./src/data/rooms/all.json'),
  },
  {
    name: 'nara',
    base: require('./src/data/rooms/all.json'),
    detail: require('./src/data/rooms/nara.json'),
  },
  {
    name: 'blue',
    base: require('./src/data/rooms/all.json'),
    detail: require('./src/data/rooms/blue.json'),
  },
  {
    name: 'hara',
    base: require('./src/data/rooms/all.json'),
    detail: require('./src/data/rooms/hara.json'),
  },
  {
    name: 'senpon',
    base: require('./src/data/rooms/all.json'),
    detail: require('./src/data/rooms/senpon.json'),
  },
]

module.exports = {
  context: __dirname,
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: './src',
    historyApiFallback: false,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  entry: {
    app: './src/assets/js/app.js',
  },
  output: {
    path: path.join(__dirname, 'src'),
    filename: '[name].bundle.js',
    publicPath: './'
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      PATH.stylesheets,
      'node_modules'
     ],
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              self: true,
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sass|scss)$/,
        include: PATH.stylesheets,
        loader: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?sourceMap=true&url=false',
            'postcss-loader?sourceMap=true',
            'sass-loader?sourceMap=true',
          ]
        })
      }
    ]
  },
  plugins: [
    ...rooms.map(room => new HtmlWebpackPlugin({
      template: './src/room.pug',
      filename: `${room.name}.html`,
      roomName: room.name,
      room: require(`./src/data/rooms/${room.name}`),
      data: require('./src/data/note.json'),
      wording: require('./src/data/wording.json'),
      base: room.base,
      detail: room.detail
    })),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/contact.pug',
      filename: 'contact.html',
      data: require('./src/data/note.json'),
      wording: require('./src/data/wording.json'),
    }),
    new HtmlWebpackPlugin({
      template: './src/rooms.pug',
      filename: 'rooms.html',
      data: require('./src/data/note.json'),
      wording: require('./src/data/wording.json'),
      rooms: require('./src/data/roomsIntro.json'),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      env: process.env.NODE_ENV || 'development',
      data: require('./src/data/wording.json'),
      setting: require('./src/data/setting-autumn.json'),
      landing: require('./src/data/rooms.json').autumn,
      wording: require('./src/data/wording.json'),
    }),
    new HtmlWebpackPlugin({
      filename: 'note.html',
      template: './src/note.pug',
      data: require('./src/data/note.json'),
      wording: require('./src/data/wording.json'),
    }),
    new ExtractTextWebpackPlugin({
      filename: 'style.min.css',
      disable: process.env.NODE_ENV !== 'production',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
       }
     })
  ]
};
