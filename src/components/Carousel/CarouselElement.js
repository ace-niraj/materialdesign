import {makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    Box:{
        marginTop:'20vh',
       
    },
    img:{
        maxWidth:'100%'
    },
    firstgrid:{
        marginBottom:'5vh'
    },
    h2:{
        color:'green',
        letterSpacing:'.4rem',
        textAlign:'center',
        [theme.breakpoints.down('md')]:{
            fontSize:'2rem'
        }
    },
    back:{
        
        outline:'none',
        border:'1px solid green',
        color:'green',
        '&:hover':{
            border:'1px solid black',
            color:'black',
            outline:'none'
        }
    },
    
    next:{
        float:'right',
        outline:'none',
        border:'1px solid green',
        color:'green',
        '&:hover':{
            border:'1px solid black',
            color:'black',
            outline:'none'
        }
    },
    pro:{
        marginTop:'15vh',
        marginBottom:'20vh'
    }
}))

export default useStyles