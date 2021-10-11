

const myStyles = {
  section: {
    height: '90vh',
    position: "relative",
    zIndex: '0'
  },
  wallpaper: {
    height: '100%',
    width: '100%',
    position: "absolute",
    zIndex: '1'
  },
  overlay(color) {
    return ({
      minHeight: '100%',
      width: '100%',
      background: color === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.7)',
      position: "absolute",
      zIndex: '2'
    })
  },
  container: {
    height: '100%'
  },
  gridContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '3',
    position: 'relative',
    '@media (max-width: 700px)': {
      justifyContent: 'center',
      paddingTop: '5rem'
    }
  },
  presentationContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  socialMediaGrid: {
    paddingRight: '1rem',
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 700px)': {
      width: '100%'
    }
  }
}

export default myStyles;