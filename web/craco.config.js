const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  webpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsOptions: { source: false },
      }),
    ],
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.module.rules.push({
        test: /react-spring/i,
        resolve: {
          fullySpecified: false,
        },
      });

      return webpackConfig;
    },
  },
};
