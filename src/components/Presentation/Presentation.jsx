import React from 'react';
import { Box, Grid, Container, Paper, Typography, Button, useMediaQuery, Fade } from "@mui/material/";
import Social from './Social/Social';
import myStyles from './PresentationStyles';
import { StaticImage } from 'gatsby-plugin-image';

const Presentation = () => {

  const matches = useMediaQuery('(max-width:700px)');

  React.useEffect(() => {
    console.log(matches);
  }, [matches])

  return (
    <Paper sx={myStyles.section} elevation={3} >
      <StaticImage style={myStyles.wallpaper} src="../../images/night-1080.jpg" alt="background image dipietronicolas website" />
      <Box sx={myStyles.overlay}></Box>
      <Container sx={myStyles.container} maxWidth="md">
        <Grid container
          sx={myStyles.gridContainer}
          spacing={3}
          direction={matches ? "column-reverse" : "row"}>
          <Fade in={true} appear={true} timeout={500}>
            <Grid item xs={10} md={8}>
              <Typography component="h1" variant="h2">Hello, my name is</Typography>
              <Typography component="h1" variant="h2">Nicolas Di Pietro Paolo</Typography>
              <Typography component="h3" variant="h5">
                I'm a software engineer, I build responsive websites and web applications. You may see some of my work down below.
              </Typography>
              <Box my={3}>
                <Button variant="contained" color="success">My work</Button>
              </Box>
            </Grid>
          </Fade >
          <Fade in={true} appear={true} timeout={500}>
            <Grid sx={myStyles.socialMediaGrid} item md={4} >
              <Social direction={matches ? "row" : "column"} />
            </Grid>
          </Fade >
        </Grid>
      </Container>

    </Paper >
  )
}

export default Presentation
