module.exports = {
  // Autres configurations de Webpack
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.m?js/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules\/@mediapipe/ // Ajouter cette ligne pour exclure mediapipe
      }
    ]
  },
  // Autres options de configuration
};
