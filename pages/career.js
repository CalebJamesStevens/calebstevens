import React from 'react';

/** MUI Components */
import Box from '@mui/material/Box';

import { keyframes, Typography, useMediaQuery } from '@mui/material';

const loadIn = (theme) => keyframes`
  from {
    margin-top: ${theme.spacing(-22.5)};
  }

  to {
    margin-top: ${theme.spacing(0)};
  }
`;

const loadInMobile = (theme) => keyframes`
  from {
    margin-top: ${theme.spacing(-37.5)};
  }

  to {
    margin-top: ${theme.spacing(0)};
  }
`;

const labelEvenLoadIn = (theme) => keyframes`
  0% {
    visibility: visible;
    transform: translate(-52px, 0px) scale(.01, .2);
    border-radius: 100% 50% 50% 100% / 100% 50% 50% 100%;
    rotate: 0deg;
  }
  60% {
    visibility: visible;
    transform: translate(-52px, 0px) scale(1.12, .5);
    border-radius: 100% 0 0 100% / 100% 10% 10% 100%;
    rotate: 0deg;
  }
  100% {
    visibility: visible;
    transform: translate(8px, 0px) scale(1, 1) skew(0deg, 0deg);
    border-radius: 10px;
  }
`;

const labelOddLoadIn = (theme) => keyframes`
  0% {
    visibility: visible;
    transform: translate(48px, 0px) scale(.01, .2);
    rotate: -90deg
    border-radius: 50% 100% 100% 50% / 50% 100% 100% 50%;
  }
  60% {
    transform: translate(48px, 0px) scale(1.12, .5);
    border-radius: 0 100% 100% 0 / 10% 100% 100% 10%;
    rotate: 0deg;
  }
  100% {
    visibility: visible;
    transform: translate(-8px, 0px) scale(1, 1);
    border-radius: 10px;
    rotate: 0deg;
  }
`;

const pointAnimation = (theme) => keyframes`
  0% {
    box-shadow: 0px 0px 0px 10px ${theme.palette.background.main}, 0px 0px 0px 15px ${theme.palette.primary.main};
    border-radius: 50% 40% 40% 45% / 50% 50% 50% 50%;
  }
  25% {
    border-radius: 45% 50% 40% 40%/ 50% 50% 50% 50%;
  }
  50% {
    box-shadow: 0px 0px 0px 9px ${theme.palette.background.main}, 0px 0px 0px 14px ${theme.palette.primary.main};
    border-radius: 40% 45% 50% 40%/ 50% 50% 50% 50%;
  }
  75% {
    border-radius: 40% 40% 45% 50%/ 50% 50% 50% 50%;
  }
  100% {
    box-shadow: 0px 0px 0px 10px ${theme.palette.background.main}, 0px 0px 0px 15px ${theme.palette.primary.main};
    border-radius: 50% 40% 40% 45%/ 50% 50% 50% 50%;
  }
`;

const mobileAnimation = keyframes`
  0% {
    transform-origin: top center;
    visibility: visible;
    transform: translate(0px, 0px) scale(.01, .01);
    rotate: -90deg
    border-radius: 100% 100% 50% 50% / 100% 100% 50% 50%;
  }
  60% {
    transform-origin: top center;
    transform: translate(0px, 5px) scale(.1, 1.8);
    border-radius: 100% 100% 0 0 / 100% 100% 10% 10%;
    rotate: 0deg;
  }
  100% {
    transform-origin: top center;
    visibility: visible;
    transform: translate(0px, 75px) scale(1, 1);
    border-radius: 10px;
    rotate: 0deg;
  }
`;

const pointAfterAnimation = keyframes`
  0% {
    scale: 1;
  }
  50% {
    scale: 1.2;
  }
  100% {
    scale: 1;
  }
`;

const styles = {
  pageContainer: {
    width: '100%',
  },
  timeline: {
    marginTop: (theme) => theme.spacing(10),
    width: '2px',
    backgroundColor: 'white',
    '&.MuiBox-root': (theme) => ({
      [theme.breakpoints.down('md')]: {
        marginTop: (theme) => theme.spacing(0),
      },
    }),
    position: 'relative',
    paddingBlock: (theme) => theme.spacing(0),
    marginInline: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: (theme) => theme.spacing(20),
    '&': (theme) => ({
      [theme.breakpoints.down('md')]: {
        gap: (theme) => theme.spacing(35),
      },
    }),
    event: {
      ':not(:first-of-type)': (theme) => ({
        animation: `${loadIn(theme)} 1s ease`,
        [theme.breakpoints.down('md')]: {
          animation: `${loadInMobile(theme)} 1s ease`,
        },
        animationFillMode: 'forwards',
      }),
      ':last-child': (theme) => ({
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
      }),
      display: 'flex',
      width: 'fit-content',
      alignItems: 'center',
      label: {
        visibility: 'hidden',
        backgroundColor: (theme) => theme.palette.background.light,
        minWidth: '350px',
        height: 'fit-content',
        borderRadius: '10px',
        marginInline: (theme) => theme.spacing(0, 8),
        border: '1px solid rgba(255, 255, 255, .5)',
        padding: (theme) => theme.spacing(1, 2),
        '& h2': {
          fontSize: '1.3rem',
        },
        '& h6': {
          fontWeight: 600,
          fontSize: '.9rem',
          color: (theme) => theme.palette.secondary.main,
        },
        even: (index) => ({
          marginInline: (theme) => theme.spacing(8, 0),
          animation: (theme) => `${labelEvenLoadIn(theme)} .5s ease`,
          animationDelay: `${index / 2}s`,
          animationFillMode: 'forwards',
          transformOrigin: 'left center',
          boxShadow: (theme) => '2px 3px 0px 0px white',
          textAlign: 'end',
          '&': (theme) => ({
            [theme.breakpoints.down('md')]: {
              textAlign: 'start',
              marginInline: theme.spacing(0),
              minWidth: '250px',
              animation: `${mobileAnimation} .5s ease`,
              animationDelay: `${index / 2}s`,
              animationFillMode: 'forwards',
              transformOrigin: 'top center',
            },
          }),
        }),
        odd: (index) => ({
          animation: (theme) => `${labelOddLoadIn(theme)} .5s ease`,
          animationDelay: `${index / 2}s`,
          animationFillMode: 'forwards',
          transformOrigin: 'right center',
          boxShadow: (theme) => `-2px 3px 0px 0px white`,
          '&': (theme) => ({
            [theme.breakpoints.down('md')]: {
              marginInline: theme.spacing(0),
              minWidth: '250px',
              animation: `${mobileAnimation} .5s ease`,
              animationDelay: `${index / 2}s`,
              animationFillMode: 'forwards',
              transformOrigin: 'top center',
            },
          }),
        }),
      },
      point: (theme) => ({
        ':after': {
          content: '""',
          border: `10px solid ${theme.palette.primary.main}`,
          borderRadius: '50%',
          position: 'absolute',
          animation: `${pointAfterAnimation} 1s infinite linear`,
          animationFillMode: 'initial',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '20px',
        height: '20px',
        backgroundColor: theme.palette.primary.main,
        animation: `${pointAnimation(theme)} 1s infinite linear`,
        animationFillMode: 'initial',
        [theme.breakpoints.down('md')]: {
          justifyContent: 'flex-start !important',
          flexDirection: 'column',
        },
      }),
      ':nth-child(even)': {
        '& > .MuiBox-root': {
          justifyContent: 'flex-start',
        },
      },
      ':nth-child(odd)': {
        '& > .MuiBox-root': {
          justifyContent: 'flex-end',
        },
      },
    },
  },
};

export const CareerPage = () => {
  const timelineRef = React.useRef(null);
  const matches = useMediaQuery((theme) => theme.breakpoints.down('md'));

  React.useEffect(() => {
    if (matches) {
      timelineRef.current.lastChild.style.height = `${
        timelineRef?.current?.lastChild.lastChild.lastChild.clientHeight + 75
      }px`;
    } else {
      timelineRef.current.lastChild.style.height = '0px';
    }
  }, [matches]);
  return (
    <Box
      ref={timelineRef}
      sx={styles.timeline}
    >
      <Box sx={styles.timeline.event}>
        <Box sx={styles.timeline.event.point}>
          <Box sx={[styles.timeline.event.label, styles.timeline.event.label.odd(1)]}>
            <Typography variant="h2">USMC</Typography>
            <Typography variant={'subtitle2'}>March 2020 - Sep. 2020</Typography>
            <Typography>
              Served in the United States Marine Corps for 6 months before being medically discharged.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.timeline.event}>
        <Box sx={styles.timeline.event.point}>
          <Box sx={[styles.timeline.event.label, styles.timeline.event.label.even(2)]}>
            <Typography variant="h2">CarMax</Typography>
            <Typography variant={'subtitle2'}>May 2021 - Sep. 2021</Typography>
            <Typography>Sold cars part time until leaving for Oregon in September of 2021.</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.timeline.event}>
        <Box sx={styles.timeline.event.point}>
          <Box sx={[styles.timeline.event.label, styles.timeline.event.label.odd(3)]}>
            <Typography variant="h2">Kollective Technologies</Typography>
            <Typography variant={'subtitle2'}>May 2022</Typography>
            <Typography>
              After working some odd jobs and teaching myself web development I am now currently working as a Front End
              developer at Kollective Technologies 🥳
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CareerPage;
