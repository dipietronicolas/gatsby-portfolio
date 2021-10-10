import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Link, Grid } from '@mui/material';

const SocialMediaIcons = [
  { icon: GitHubIcon, link: "https://github.com/dipietronicolas" },
  { icon: LinkedInIcon, link: "https://www.linkedin.com/in/dipietronicolas/" }
]


const Social = ({ direction }) => {
  return (
    <Grid container 
      direction={direction} 
      spacing={3} 
      alignItems='center' 
      justifyContent="center"
      justifyItems="end">
      {
        SocialMediaIcons.map((item, idx) => {
          return (
            <Grid item key={idx}>
              <Link href={item.link} target="_blank" rel="noreferrer">
                <IconButton>
                  <item.icon />
                </IconButton>
              </Link>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default Social
