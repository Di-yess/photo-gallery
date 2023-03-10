import { scroll } from './scroll';

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
    left: '50%',
    top: '50%',
    width: { sm: '65vw', xs: '90vw' },
    maxWidth: '700px',
    height: '67vh',
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
    cursor: 'pointer',
    img: {
      width: '100%',
      height: '95%',
      objectFit: 'fill',
      borderRadius: '10px',
    },

    '&:hover .photoInfo': {
      opacity: '1',
    },
  },

  photoInfo: {
    width: '100%',
    height: '93%',
    color: 'white',
    display: 'flex',
    alignItems: 'self-end',
    justifyContent: 'flex-end',
    left: '0',
    opacity: '0',
    transition: '0.15s all ease-in-out',
    position: 'absolute',
    background:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.25) 200%)',
  },

  photoInfoMenu: {
    margin: '0 auto 2.9vh',
    width: '85%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  infoMenuIcon: {
    fontSize: '25px',
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
    top: '0.5vw',
    color: 'white',
  },

  postAndCommentaries: {
    height: '90%',
    width: '30%',
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: '5px',
  },

  post: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    maxHeight: '40%',
    margin: '1vh auto 2.5vh',
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
    maxHeight: '15vh',
    overflow: 'scroll',
    ...scroll,
    fontSize: '12px',
    lineHeight: '130%',
  },

  postInfo: {
    width: '84%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
  },

  comments: {
    margin: '0 auto',
    width: '85%',
    maxHeight: '45%',
    overflow: 'scroll',
    ...scroll,
  },

  commentText: {
    paddingBottom: '0.1vh',
    fontSize: '12px',
    lineHeight: '130%',
    cursor: 'pointer',
    maxHeight: '11vh',
    overflow: 'scroll',
    ...scroll,
  },

  commentPaper: {
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '0.9vh 0.70vw 0.7vh',
    width: '95%',
    minHeight: '60px',
    marginBottom: '1.7vh',
    display: 'flex',
    position: 'relative',
    borderRadius: '5px',
  },

  commentCreatedAt: {
    fontSize: '11px',
    position: 'absolute',
    right: '0.5vw',
    bottom: '-1px',
    color: '#a7a7a7',
  },

  inputMessage: {
    width: '90%',
    bottom: '-0.9vh',
    transform: 'translate(8%,0)',
    margin: '2vh auto',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
  },
};

export default mainStyle;
