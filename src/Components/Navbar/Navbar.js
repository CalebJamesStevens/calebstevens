import React from 'react';

/** Next Components */
import Link from 'next/link';

/** MUI Components */
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

/** Icons */
import MenuIcon from '@mui/icons-material/Menu';

/** Styles */
import styles from './styles';

/** Hooks */
import useMediaQuery from '@mui/material/useMediaQuery';

export const Navbar = () => {
  const mobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  if (mobile) {
    return (
      <>
        <Box sx={styles.mobileNavBar}>
          <IconButton
            onClick={() => {
              setDrawerOpen(true);
            }}
            aria-label={'Open Navigation Menu'}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Drawer
          anchor={'right'}
          open={drawerOpen}
          sx={styles.drawer}
          onClose={() => {
            setDrawerOpen(false);
          }}
        >
          <Box component={'nav'}>
            <List sx={styles.drawerNavList}>
              <ListItem>
                <Link href="/">
                  <ListItemButton>Home</ListItemButton>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/blog">
                  <ListItemButton>Blog</ListItemButton>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/career">
                  <ListItemButton>Career</ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </>
    );
  }

  return (
    <Box component={'nav'}>
      <List
        sx={styles.navList}
        orientation={'horizontal'}
      >
        <ListItem>
          <Link href="/">
            <ListItemButton>Home</ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/blog">
            <ListItemButton>Blog</ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/career">
            <ListItemButton>Career</ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navbar;
