import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Grid } from '@mui/material';

const SocialMediaIcons = [
  { icon: GitHubIcon, link: "https://github.com/dipietronicolas" },
  { icon: LinkedInIcon, link: "https://www.linkedin.com/in/dipietronicolas/" }
]

const style = {
  social: {
    display: 'flex', 
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}

const Social = ({ direction }) => {
  return (
    <Grid container
      direction={direction}
      spacing={3}>
      {
        SocialMediaIcons.map((item, idx) => {
          return (
            <Grid item key={idx} sx={style.social}>
              <IconButton href={item.link} target="_blank" rel="noreferrer">
                <item.icon />
              </IconButton>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default Social
