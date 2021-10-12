const myStyles = {
  projectsContainer: {
    minHeight: '90vh',
    padding: '13rem 5rem',
    '@media (max-width: 900px)': {
      padding: '10rem 2rem',
    },
    '@media (max-width: 700px)': {
      padding: '5rem 1rem',
    }
  },
  project: {
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 850px)': {
      flexDirection: 'column'
    }
  },
  imageContainer: {
    display: 'flex', 
    justifyContent: 'center',
    '@media (max-width: 700px)': {
      margin: '0 1rem'
    },
    '@media (max-width: 450px)': {
      margin: '0'
    }
  },
  textContainer: {
    '@media (max-width: 850px)': {
      padding: '0 10rem'
    },
    '@media (max-width: 700px)': {
      padding: '0 3rem'
    },
    '@media (max-width: 450px)': {
      padding: '0 1rem'
    }
  },
  buttonContainer: {
    width: '100%',
    marginTop: '5rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '@media (max-width: 700px)': {
      marginTop: '2rem'
    }
  }
}

export default myStyles;