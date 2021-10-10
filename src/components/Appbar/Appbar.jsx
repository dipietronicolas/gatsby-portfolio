import * as React from 'react';
import { 
  Toolbar, FormControlLabel, 
  IconButton, AppBar, Box 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { myStyles, MaterialUISwitch } from './AppbarStyle';
import { ColorModeContext } from '../../context/colorModeContext';

export default function Appbar() {

  const { colorMode, toggleColorMode } = React.useContext(ColorModeContext);
  const toggleDarkMode = () => toggleColorMode();

  return (
    <Box sx={myStyles.container}>
      <AppBar sx={myStyles.navbar} position="fixed" color="transparent">
        <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <FormControlLabel
            control={
              <MaterialUISwitch 
                defaultChecked 
                onClick={toggleDarkMode} />
            }
            label={colorMode}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}