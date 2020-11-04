import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './SectionElement'
import image from './../../videos/code.svg'
const Section = () => {
    const classes = useStyles()
    return (
        <>
         <Box className={classes.box}>
           <Grid container className={classes.maincontainer} spacing='4'>
           <Grid item md={1}/>
               <Grid item container direction='column' xs={10} md={5} spacing='4'>
              
               <Grid item>
                <Typography className={classes.h5} variant='h5'>
                 ABOUT
                </Typography>
                </Grid>
                <Grid item>
                <Typography variant='h4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eum.
                </Typography>
                </Grid>
                <Grid item>
                <Button className={classes.btn} variant='contained' color='default' >COOL RIGHT</Button>
                </Grid>
              
               </Grid>
               
               <Grid container item xs={12} md={5} >
               <Grid item xs={1} md={0} />
               <Grid item xs={10}>
                 <img className={classes.img} src={image} />
                 </Grid>
                 <Grid item xs={1} md={0}/>
                
                </Grid>
                <Grid item md={1}/>
           </Grid>
         </Box>
        </>
    )
}

export default Section
