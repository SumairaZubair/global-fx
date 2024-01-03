// next.config.js
module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
        },
      });
  
      return config;
    },
  };
  