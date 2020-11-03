import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles  from './SectionElement'




const Section = () => {
    const classes = useStyles()
    
    return (
        <>
           <Box component='section' className={classes.container}>
               
               <Box className={classes.content}>
                  <Grid container  direction='column' spacing={4}>
                      <Grid item>
                          <Typography className={classes.h2} variant='h2'> ENJOY THE SHOW</Typography>
                      </Grid>
                      <Grid item>
                          <Typography className={classes.p} variant='p' >Lorem ipsum dolor sitssss ssss amet, consectetur adipisicing elit. Ex, ut.</Typography>
                      </Grid>
                      <Grid item>
                         <Button className={classes.btn} variant='contained'>Get started </Button>
                      </Grid>
                  </Grid>
               </Box>
           </Box>
        </>
    )
}

export default Section
