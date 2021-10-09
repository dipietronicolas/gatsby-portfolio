import * as React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Presentation from "../components/Presentation/Presentation";

// markup
const IndexPage = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Presentation />
    </ThemeProvider>
  )
}

export default IndexPage
