const path = require('path');
require('dotenv').config();

const resolveRoot = (newPath) => {
  return path.resolve(__dirname, newPath);
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
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
});
