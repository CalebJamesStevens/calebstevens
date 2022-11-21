import remarkFrontmatter from 'remark-frontmatter';
import path from 'path';
import dotenv from 'dotenv';
import createMDX from '@next/mdx';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

const resolveRoot = (newPath) => {
  return path.resolve(__dirname, newPath);
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

export default withMDX({
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
          FeaturedArticleCard: resolveRoot('./src/Components/HomePage/FeaturedArticleCard/FeaturedArticleCard'),
          ArticleWrapper: resolveRoot('./src/Components/ArticleWrapper/ArticleWrapper'),
          ViewCount: resolveRoot('./src/Components/ViewCount/ViewCount'),
          IncrementViewCount: resolveRoot('./src/Components/IncrementViewCount/IncrementViewCount'),
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
