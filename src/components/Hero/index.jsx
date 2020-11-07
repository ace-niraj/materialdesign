import { Box, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './HeroElement';
import video from './../../videos/video.mp4';
import { motion } from 'framer-motion';
const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <Box component='section' className={classes.container}>
        <Box className={classes.video}>
          <video src={video} autoPlay loop muted />
        </Box>
        <Box className={classes.content}>
          <Grid container direction='column' spacing={4}>
            <Grid item>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: '1' }}
              >
                <Typography className={classes.h2} variant='h2'>
                  ENJOY THE SHOW
                </Typography>
              </motion.div>
            </Grid>
            <Grid item>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: '2' }}
              >
                <Typography className={classes.p} variant='p'>
                  Lorem ipsum dolor sitssss ssss amet, consectetur adipisicing
                  elit. Ex, ut.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: '2' }}
              >
                <Button className={classes.btn} variant='contained'>
                  Get started
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
