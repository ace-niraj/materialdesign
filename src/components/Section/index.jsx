import { Box, Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';

import useStyles from './SectionElement';
import image from './../../videos/code.svg';
import { motion } from 'framer-motion';

const useOnScreen = (options) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  return [ref, visible];
};

const Section = () => {
  const classes = useStyles();
  const [ref, visible] = useOnScreen({
    root: null,
  });
  const hidden = {
    opacity: 0,
    x: -100,
  };
  const vis = {
    opacity: 1,
    x: 0,
  };
  const trans = {
    duration: 1,
  };
  return (
    <>
      <Box ref={ref} className={classes.box}>
        <Grid container className={classes.maincontainer} spacing='4'>
          <Grid item md={1} />
          <Grid item container direction='column' xs={10} md={5} spacing='4'>
            <Grid item>
              {visible ? (
                <motion.div initial={hidden} animate={vis} transition={trans}>
                  <Typography className={classes.h5} variant='h5'>
                    ABOUT
                  </Typography>
                </motion.div>
              ) : (
                ''
              )}
            </Grid>
            <Grid ref={ref} item>
              {visible ? (
                <motion.div initial={hidden} animate={vis} transition={trans}>
                  <Typography variant='h4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, eum.
                  </Typography>
                </motion.div>
              ) : (
                ''
              )}
            </Grid>
            <Grid item>
              {visible ? (
                <motion.div initial={hidden} animate={vis} transition={trans}>
                  <Button
                    className={classes.btn}
                    variant='contained'
                    color='default'
                  >
                    COOL RIGHT
                  </Button>
                </motion.div>
              ) : (
                ''
              )}
            </Grid>
          </Grid>

          <Grid container item xs={12} md={5}>
            <Grid item xs={1} md={0} />
            <Grid item xs={10}>
              <img className={classes.img} src={image} />
            </Grid>
            <Grid item xs={1} md={0} />
          </Grid>
          <Grid item md={1} />
        </Grid>
      </Box>
    </>
  );
};

export default Section;
