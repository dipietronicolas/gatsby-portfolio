import React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { ColorModeContext } from '../../context/colorModeContext';
import { Box } from '@mui/material';

const Layout = ({ children }) => {

  const { colorMode } = React.useContext(ColorModeContext);

  const theme = createTheme({
    palette: {
      mode: colorMode,
    },
  });

  const responsiveTheme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={responsiveTheme}>
      <Box sx={{ overflowX: "hidden"}}>
        {children}
      </Box>
    </ThemeProvider>
  )
}

export default Layout
