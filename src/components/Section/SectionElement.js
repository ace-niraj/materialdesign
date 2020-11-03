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
   
   content:{
      zIndex:'1',
      color:'#222'
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
      color:'#222',
      background:'transparent',
      border:'1px solid #fff',
     
      transition:'all 0.3s ease-in-out',

      '&:hover':{
         color:'#222',
        
         border:'1px solid #fff',
         transition:'all 0.3s ease-in-out',
      }

   }
  
  
}))


export default useStyles