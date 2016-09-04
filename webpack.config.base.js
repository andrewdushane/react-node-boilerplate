var path = require('path');
var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV;

var env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

Object.assign(env, {
  build: (env.production || env.staging)
});

module.exports = {
  target: 'web',

  entry: [
    'babel-polyfill',
    './client/index.jsx'
  ],

  output: {
    path: path.join(process.cwd(), '/client'),
    pathInfo: true,
    publicPath: 'http://localhost:3000/client/',
    filename: 'main.js'
  },

  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'client'
    ],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],

  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded'},
      { test: /\.css$/, loader: 'style!css'},
      { test: /\.css$/, loader: 'style!css', include: /node_modules/ },
      { test: /\.md$/, loader: "html!markdown?gfm=true" },
      { test: /\.pdf$/, loader: "file?mimetype=image/pdf&name=img/[hash].[ext]" },
      { test: /\.gif$/, loader: "url?limit=10000&mimetype=image/gif&name=img/[hash].[ext]" },
      { test: /\.jpg$/, loader: "url?limit=10000&mimetype=image/jpg&name=img/[hash].[ext]" },
      { test: /\.png$/, loader: "url?limit=10000&mimetype=image/png&name=img/[hash].[ext]" },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ],

    postcss: (webpack) => {
      return [
        autoprefixer({
          browsers: ['last 2 versions'],
        }),
        postcssImport({
          addDependencyTo: webpack,
        }),
      ];
    },

    noParse: /\.min\.js/
  }
};
