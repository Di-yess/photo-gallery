const mainStyle = {
  grid: {
    padding: '2vh',
    marginTop: '1vh',
    display: 'grid',
    gap: '1rem',
    transition: '0.15s all ease-in-out',
    // gridTemplateColumns: 'repeat(5,100px)',
    gridTemplateColumns: {
      xs: 'repeat(1, minmax(100px,1fr) )',
      sm: 'repeat(3, minmax(100px,1fr) )',
    },
    gridAutoRows: { sm: '200px', xs: '250px' },
  },

  gridItem: {
    cursor: 'pointer',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    textAlign: 'center',
    overflow: 'hidden',
  },

  gridItemTall: {
    gridRow: 'span 2 / auto',
    // gridColumn: 'span 2/auto',
  },

  modal: {
    // margin: '0 auto',
    left: '50%',
    top: '50%',
    width: { sm: '65vw', xs: '90vw' },
    maxWidth: '700px',
    height: '64vh',
    transform: 'translate(-50%,-50%)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'fixed',
    overflow: 'hidden',
    backgroundColor: 'black',
    borderRadius: '10px',
    zIndex: '99',
  },

  modalPhoto: {
    padding: '1vh 0',
    width: '60%',
    height: '95%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    position: 'relative',
    overflow: 'hidden',
    img: {
      width: '100%',
      height: '95%',
      objectFit: 'fill',
      borderRadius: '10px',
    },
  },

  modalPhotoBlur: {
    width: '100%',
    height: '100%',
    filter: 'blur(5px)',
    objectFit: 'cover',
    position: 'absolute',
    left: '0',
    zIndex: -1,
  },

  closeModal: {
    position: 'absolute',
    right: '1.5vw',
    cursor: 'pointer',
    top: '0.8vw',
    color: 'white',
  },

  postAndCommentaries: {
    height: '90%',
    width: '30%',
    backgroundColor: 'white',
    borderRadius: '5px',
  },

  post: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    minHeight: '35%',
    margin: '1vh auto',
  },

  userAndAbout: {
    width: '85%',
    margin: '0 auto',
    paddingTop: '7px',
    display: 'flex',
    alignItems: 'center',
  },

  postText: {
    width: '85%',
    margin: '7px auto 3px',
    fontSize: '13px',
    lineHeight: '130%',
  },

  postInfo: {
    width: '84%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default mainStyle;
