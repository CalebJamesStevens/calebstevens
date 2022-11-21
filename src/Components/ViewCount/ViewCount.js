import React from 'react';
import useSWR from 'swr';

/** MUI Components */
import { CircularProgress, Typography } from '@mui/material';

/** Icons */
import { Visibility } from '@mui/icons-material';

/** Styles */
import styles from './styles';

async function fetcher(...args) {
  const res = await fetch(...args);

  return res.json();
}

export default function ViewCount({ slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  return (
    <Typography sx={styles.text}>
      <Visibility />
      {data ? views > 0 ? views.toLocaleString() : '0' : <CircularProgress sx={styles.circularProgress} />}
    </Typography>
  );
}
