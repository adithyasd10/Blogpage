import React from 'react'
import { Box,AppBar,Toolbar,IconButton,Typography,Button} from '@mui/material';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar class="bx"  position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 1 }}
          >

          </IconButton>
          
          <Typography class="blg"  variant="h1" component="div"  sx={{ flexGrow: 1 }}>
            <div  className='lora' variant="h1"  >BLOG PAGE</div>
          </Typography> 
          

          
          <div class="bx">
              <Button variant='outlined' color="primary"className='lora' ><Link to={'/'}>Home</Link></Button>
              <Button variant='outlined' color="success"className='lora' ><Link to={'/add'}>Add Blog</Link></Button>   
                
          </div> 


        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header
