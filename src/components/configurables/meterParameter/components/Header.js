import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CssBaseline, IconButton } from '@mui/material'

export default function SearchAppBar() {
  return (
    <div>

<CssBaseline />
<AppBar elevation={12} position="static" style={{ background: '#c9d2d9',borderRadius:'30px' }}>
<Toolbar>
  <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
  <HomeIcon style={{ color: 'black' }} />
  </IconButton>
  <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
  <ChevronRightIcon style={{ color: 'black' }} />
  </IconButton>
  <Typography style={{ color: 'black' }}>Configurables</Typography>
  <IconButton style={{ marginLeft: '0px' }} size="large" edge="start" color="inherit" aria-label="open drawer">
  <ChevronRightIcon style={{ color: 'black' }} />
  </IconButton>
  <Typography style={{ marginRight: 'auto', marginLeft: '0px', color: 'black' }} variant='h6'>Meter Parameters</Typography>
</Toolbar>

</AppBar>
  </div>
  );
}

