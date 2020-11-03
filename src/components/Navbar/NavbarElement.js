import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme)=>({
   appbar : {
       backgroundColor:'transparent',
       zIndex:'10',
      
       marginTop:'-80px',
      
   },

   toolbar:{
       justifyContent:'space-between',
       
   },
   typography:{
       cursor:'pointer',
       fontSize:'1.5rem',
       displayItems:'center',
       marginLeft:'24px',
       fontWeight:'bold'
   },

   menuicon:{
       color:'#fff',
       fontSize:'2rem'
      
   },
   list:{
       display:'flex',
      
      
   },
   listitem:{
       cursor:'pointer',
     

       '&:hover':{
            
          color:'green'
       }
   },
   button:{
       fontSize:'1rem',
         transition:'all 0.3s ease-in-out',
         border:'1px solid #fff',
         marginRight:'24px',
       '&:hover':{
           backgroundColor:'#222',
           color:'#fff',
           transition:'all 0.3s ease-in-out',
           border:'1px solid #fff'
       }
       
   }
  
}))

export  default useStyles