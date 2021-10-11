import React from 'react';
import myStyles from './ProjectsStyles';
import {
  Box, Typography, Slide, useMediaQuery, Button
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import { StaticImage } from 'gatsby-plugin-image';
import { useInView } from 'react-hook-inview';

const Projects = () => {

  const [targetRef01, isInViewport01] = useInView({
    unobserveOnEnter: true,
  });

  const [targetRef02, isInViewport02] = useInView({
    unobserveOnEnter: true,
  });

  const matches = useMediaQuery('(max-width:850px)');

  const items = [
    {
      id: '1',
      ref: targetRef01,
      viewport: isInViewport01,
      slideDirection: "right",
      imgMobile: <StaticImage style={{ height: 'auto', width: 'auto' }}
        src='../../images/tecno-tienda-transparentBottom01.png'
        alt="dipietronicolas di pietro project tecno-tienda" />,
      imgDesktop: <StaticImage style={{ height: '30rem', width: '30rem' }}
        src='../../images/tecno-tienda-transparent04.png'
        alt="dipietronicolas di pietro project tecno-tienda" />,
      title: 'Tecno tienda',
      subTitle: 'React, ContextAPI, Hooks, Firebase',
      body: 'Tecno tienda is an ecommerce application made with React, ContextAPI to handle global state, and all functional components. Yo may see a live preview down below.',
      livePreview: 'https://tienda-online-855ba.firebaseapp.com/',
      github: 'https://github.com/dipietronicolas/CODERHOUSE-Proyecto-Final'
    },
    {
      id: '2',
      ref: targetRef02,
      viewport: isInViewport02,
      slideDirection: "left",
      imgMobile: <StaticImage style={{ height: 'auto', width: 'auto' }}
        src='../../images/tecno-tienda-transparentBottom01.png'
        alt="dipietronicolas di pietro project tecno-tienda" />,
      imgDesktop: <StaticImage style={{ height: '30rem', width: '30rem' }}
        src='../../images/tecno-tienda-transparent04.png'
        alt="dipietronicolas di pietro project tecno-tienda" />,
      title: 'Tecno tienda',
      subTitle: 'React, ContextAPI, Hooks, Firebase',
      body: 'Tecno tienda is an ecommerce application made with React, ContextAPI to handle global state, and all functional components. Yo may see a live preview down below.',
      livePreview: 'https://tienda-online-855ba.firebaseapp.com/',
      github: 'https://github.com/dipietronicolas/CODERHOUSE-Proyecto-Final'
    },
  ]

  //tecno-tienda-transparentBottom01.png
  return (
    <Box id="projects-section" sx={myStyles.projectsContainer}>
      {
        items.map(item => {
          return (
            <div key={item.id} ref={item.ref} >
              <Slide direction={item.slideDirection} in={item.viewport ? true : false}
                timeout={500} mb="10rem">
                <Box maxWidth="md" mx="auto" sx={myStyles.project}>
                  <Box lg={6} sx={myStyles.imageContainer}>
                    {
                      matches
                        ? item.imgMobile
                        : item.imgDesktop
                    }
                  </Box>
                  <Box sx={myStyles.textContainer}>
                    <Typography component="h2" variant="h3" mt={matches ? 2 : 0}>{item.title}</Typography>
                    <Typography component="h4" variant="h5" my={1} sx={{ fontStyle: 'italic' }}>
                      {item.subTitle}
                    </Typography>
                    <Typography component="p" mt={1} variant="body1">
                      {item.body}
                    </Typography>
                    <Box sx={myStyles.buttonContainer}>
                      <Button
                        variant="outlined"
                        startIcon={<VisibilityIcon />}
                        href={item.livePreview}
                        target="_blank"
                        rel="nonreferer">
                        Live preview
                      </Button>
                      <Button
                        variant="contained"
                        endIcon={<GitHubIcon />}
                        href={item.github}
                        target="_blank"
                        rel="nonreferer">
                        Code
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Slide>
            </div>
          )
        })
      }
    </Box>
  )
}

export default Projects
