import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br></br><br></br><br></br>
        <Typography variant='h3'>ADD BLOG</Typography><br></br>
        <TextField id="outlined-basic" label="Blog Name" variant="outlined" /><br></br><br></br>
        <TextField id="outlined-basic" label="Description" variant="outlined" /><br></br><br></br>
        <TextField id="outlined-basic" label="Author Name" variant="outlined" /><br></br><br></br>
        <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Add