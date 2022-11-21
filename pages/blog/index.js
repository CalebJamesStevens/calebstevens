import React from 'react';

/** MUI Components */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Divider, IconButton } from '@mui/material';

/** NextJs Components */
import Link from 'next/link';

/** Utilities */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { LinkRounded } from '@mui/icons-material';

const styles = {
  article: {
    borderBlock: '1px white solid',
    transition: '250ms',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    articleActions: {
      display: 'flex',
      alignItems: 'center',
    },
    linkIcon: {
      rotate: '45deg',
      transition: '250ms',
      ':hover': {
        cursor: 'pointer',
        scale: '1.1',
      },
    },
    ':hover': {
      scale: '1.01',
    },
    titleLink: {
      all: 'unset',
    },
    title: {
      transition: '250ms',
      '&.MuiTypography-root': {
        fontSize: '1.3rem',
        fontWeight: '400',
        width: 'fit-content',
      },
      ':after': {
        transition: '250ms',
        content: '""',
        display: 'block',
        width: '0%',
        transform: 'translate(0px, -10px)',
        borderBottom: '1px white solid',
      },
      ':hover': {
        cursor: 'pointer',
        fontSize: '1.31rem',
        ':after': {
          width: '100%',
        },
      },
    },
  },
  sectionHeading: {
    marginBlock: (theme) => theme.spacing(2),
  },
};

export const BlogHomePage = ({ articles }) => {
  return (
    <Box>
      <Typography variant="h1">Blog</Typography>
      <Divider />
      <Typography
        sx={styles.sectionHeading}
        variant="h2"
      >
        All Articles
      </Typography>
      <Grid container>
        {articles?.map((article) => {
          return (
            <Grid
              item
              xs={12}
              sx={styles.article}
              key={article.data.slug}
            >
              <Box
                sx={styles.article.titleLink}
                href={'/blog/' + article.data.slug}
                component={Link}
              >
                <Typography
                  sx={styles.article.title}
                  variant="h3"
                >
                  {article.data.title}
                </Typography>
              </Box>
              <Box sx={styles.article.articleActions}>
                <IconButton
                  onClick={() => {
                    window.navigator.clipboard.writeText('https://calebstevens.dev/blog/' + article.data.slug);
                  }}
                  sx={styles.article.linkIcon}
                >
                  <LinkRounded />
                </IconButton>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export const getStaticProps = async () => {
  const files = await fs.readdirSync(path.join(process.cwd(), 'pages', 'blog'), { withFileTypes: true });

  let mdxFiles = files.filter((file) => {
    const fileData = fs.readFileSync(path.join(process.cwd(), 'pages', 'blog', file.name), 'utf-8');
    return !!matter(fileData)?.data?.publish;
  });
  const filesWithContent = mdxFiles.map((file) => {
    const fileData = fs.readFileSync(path.join(process.cwd(), 'pages', 'blog', file.name), 'utf-8');
    const { data, content } = matter(fileData);

    return { data, content };
  });

  return {
    props: {
      articles: filesWithContent,
    },
  };
};

export default BlogHomePage;
