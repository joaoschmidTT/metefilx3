const path = require('path');

module.exports = {
  entry: './src/index.js',  // Arquivo de entrada do seu app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // Nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Aplica para arquivos .js ou .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      fs: false,  // Caso não precise do fs
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      querystring: require.resolve("querystring-es3"),
      zlib: require.resolve("browserify-zlib"),
      http: require.resolve("stream-http"),
      util: require.resolve("util/"),
      net: false,  // Se você não precisar de net, pode deixá-lo como false
    },
  },
  mode: 'development',  // Modo de desenvolvimento
};
