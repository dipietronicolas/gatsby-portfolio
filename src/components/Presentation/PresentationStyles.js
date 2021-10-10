

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
  overlay: {
    minHeight: '100%',
    width: '100%',
    background: 'rgba(0,0,0,0.4)',
    position: "absolute",
    zIndex: '2'
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
    }
  },
  presentationContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  socialMediaGrid: {
    paddingRight: '1rem',
    justifyContent: 'flex-end',
    '@media (max-width: 700px)': {
      width: '100%'
    }
  }
}

export default myStyles;