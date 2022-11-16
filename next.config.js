const path = require('path');
require('dotenv').config();

const resolveRoot = (newPath) => {
  return path.resolve(__dirname, newPath);
};

module.exports = {
  webpack: (config) => {
    const resolveAlias = config.resolve.alias;

    config = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...resolveAlias,
          Navbar: resolveRoot('./src/Components/Navbar/Navbar'),
          ProjectCard: resolveRoot('./src/Components/HomePage/ProjectCard/ProjectCard'),
        },
      },
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.devtool = process.env.NODE_ENV !== 'production' && 'eval-source-map';
    return config;
  },
};
