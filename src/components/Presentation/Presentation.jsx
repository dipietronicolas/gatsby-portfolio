import React from 'react';
import { Box, Grid, Container, Paper, Typography, Button, useMediaQuery, Fade } from "@mui/material/";
import Social from './Social/Social';
import myStyles from './PresentationStyles';
import { StaticImage } from 'gatsby-plugin-image';
import { ColorModeContext } from '../../context/colorModeContext';

const Presentation = () => {

  const presentationRef = React.useRef(null);
  const matches = useMediaQuery('(max-width:700px)');
  const { colorMode } = React.useContext(ColorModeContext);

  React.useEffect(() => {
    console.log(matches);
    
  }, [matches])

  const handleScrollButton = () => {
    window[`scrollTo`]({ top: presentationRef.current.clientHeight, behavior: 'smooth' });
  }


  return (
    <Paper sx={myStyles.section} elevation={3} id="presentation" ref={presentationRef}>
      {
        colorMode === 'dark'
          ? <StaticImage
            style={myStyles.wallpaper}
            src="../../images/night-1080.jpg"
            alt="background image dipietronicolas website" />
          : <StaticImage
            style={myStyles.wallpaper}
            src="../../images/waterdrops.jpg"
            alt="background image dipietronicolas website" />
      }
      <Box sx={myStyles.overlay(colorMode)}></Box>
      <Container sx={myStyles.container} maxWidth="md">
        <Grid container
          sx={myStyles.gridContainer}
          spacing={3}
          direction={matches ? "column" : "row"}>
          <Fade in={true} appear={true} timeout={500}>
            <Grid item sm={8} lg={9} sx={myStyles.presentationContainer}>
              {/* <Typography component="h1" variant={matches ? 'h4' : "h2"}> */}
              <Typography component="h1" variant="h2">
                Hello, my name is Nicolas Di Pietro Paolo
              </Typography>
              <Typography component="h3" variant={matches ? 'h6' : "h5"}>
                I'm a software engineer, I build responsive websites and web applications. You may see some of my work down below.
              </Typography>
              <Box my={3} sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button variant="contained" color="success" onClick={handleScrollButton} >My work</Button>
               
                <Button
                  underline="none"
                  variant="outlined"
                  color="secondary"
                  href="/dipietronicolas.pdf"
                  target="_blank">Download my cv</Button>
              </Box>
            </Grid>
          </Fade >
          <Fade in={true} appear={true} timeout={500}>
            <Grid sx={myStyles.socialMediaGrid} item lg={3} >
              <Social direction={matches ? "row" : "column"} />
            </Grid>
          </Fade >
        </Grid>
      </Container>

    </Paper >
  )
}

export default Presentation
