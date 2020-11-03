import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=>({
   container:{
      position:'relative',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      height:'120vh',
      overflow:'hidden'
   },
   video:{
      position:'absolute',
      top:'0',
      left:'0',
      right:'0',
      bottom:'0',
      overflow:'hidden',
      background:'#222',
      zIndex:'-1'
   },
   content:{
      zIndex:'1',
      color:'#fff'
   },
   h2:{
      letterSpacing:'.5rem',
      [theme.breakpoints.down('sm')]: {
         letterSpacing:'.2rem',
        fontSize:'3rem'
       },
   },
   p:{
      letterSpacing:'.2rem'
   },
   btn:{
      letterSpacing:'.3rem',
      border:'1px solid transparent ' ,
      transition:'all 0.3s ease-in-out',

      '&:hover':{
         color:'#fff',
         background:'transparent',
         border:'1px solid #fff',
         transition:'all 0.3s ease-in-out',
      }

   }
  
  
}))


export default useStyles