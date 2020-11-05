import React, { useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import useStyles from './CarouselElement'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Box ,Grid, Typography } from '@material-ui/core';
import Testi from './../Testimonial'
import Next from '@material-ui/icons/ArrowForwardOutlined';
import Back from '@material-ui/icons/ArrowBackOutlined';
import  useMediaQuery  from "@material-ui/core/useMediaQuery";
const Carousels = () => {
    const classes = useStyles()
    const isDesktop = useMediaQuery(
         "(min-device-width: 1024px)"   
      );
      const isTablet = useMediaQuery("(min-device-width: 600px)" );
      const slideCount = isDesktop ? 3 : isTablet ? 2 : 1;
      const heightCount = isDesktop ? 60 : isTablet ? 80 : 90;
    
    return (
        
        <Box className={classes.box}>
         <Grid container className={classes.firstgrid} direction='column' alignItems='center'>
            <Grid item xs={10}>
                <Typography className={classes.h2} variant='h3'>
                    TESTIMONIAL
                </Typography>
            </Grid>
            </Grid>
         <Grid container alignItems='center' justify='center' >
       

        
        
         <Grid item xs={10} md={10} >
        <CarouselProvider 
        infinite={true}
        visibleSlides={slideCount}
        isPlaying={true}
        interval={5000}
        naturalSlideWidth={100}
        naturalSlideHeight={heightCount}
        totalSlides={5}
        className={classes.pro}
      >
       
           <Slider>
         
          <Slide index={0}>
             <Testi/>
          </Slide>
          <Slide index={1}> <Testi/> </Slide>
          <Slide index={2}> <Testi/> </Slide>
          <Slide index={3}> <Testi/></Slide>
          <Slide index={4}> <Testi/> </Slide>
        </Slider>
        <ButtonBack className={classes.back}><Back/></ButtonBack>
     <ButtonNext className={classes.next} ><Next/></ButtonNext>
    
      </CarouselProvider>
      </Grid>
     </Grid>
      
              </Box>
    )
}

export default Carousels
