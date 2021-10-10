import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ColorModeContext } from '../../context/colorModeContext';

const Layout = ({ children }) => {

  const { colorMode } = React.useContext(ColorModeContext);

  const theme = createTheme({
    palette: {
      mode: colorMode,
    },
  });


  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}

export default Layout
