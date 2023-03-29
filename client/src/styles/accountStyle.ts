import { commonStyles } from './commonStyles';

const styles = {
  container: {
    width: '545px',
    // ...commonStyles.flex,
    flexDirection: 'column',
  },

  account: {
    ...commonStyles.flex,
    flexDirection: 'column',
  },

  accountInfo: {
    width: '210px',
    height: `${210 / 1.15}px`,
    marginBottom: '2vh',
    position: 'relative',
    ...commonStyles.flex,
    flexDirection: 'column',
    borderRadius: '10px',
  },

  paperGradient: {
    width: '100%',
    height: '37%',
    zIndex: '0',
    position: 'absolute',
    left: 0,
    top: 0,
    background:
      'linear-gradient(110deg, rgba(204,255,246,1) 0%, rgba(255,251,217,1) 100%)',
    borderRadius: '10px 10px 0 0',
  },

  statistics: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '210px',
    height: '40px',
    borderRadius: '10px',
  },

  icons: {
    display: 'flex',
    width: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  icon: {
    ...commonStyles.flex,
    width: 50,
  },

  dragAndDrop: {
    position: 'relative',
    width: `${210 * 1.5}px`,
    boxSizing: 'border-box',
    cursor: 'pointer',
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
    input: {
      position: 'relative',
      zIndex: '10',
    },
  },

  uploadNewImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    ...commonStyles.flex,
    flexDirection: 'column',
  },

  accountImages: {
    width: `${210 + 210 * 1.5 + 20}px`,
    py: 2,
    ...commonStyles.flex,
    gap: 2.5,
    position: 'relative',
    flexWrap: 'wrap',
    minHeight: '30vh',
  },

  uploadedImage: {
    width: `${210 + 210 * 2 + 20}px`,
    // minHeight: '500px',
    py: 4,
    px: 3,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 2.5,
    position: 'relative',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },

  uploadedImageCard: {
    width: '300px',
    height: '325px',
    overflow: 'hidden',
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },

  uploadImageInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '240px',
    gap: 1.5,
  },

  userImage: {
    width: '150px',
    height: '150px',
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    '&:hover .editImage': {
      opacity: 1,
    },
  },

  editImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0,
    transition: '0.15s all ease-in-out',
    background:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.25) 200%)',
  },

  imageOptions: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: '3px',
    boxSizing: 'border-box',
    padding: '8px',
    width: '100%',
    height: '100%',
    img: {
      width: '19.5px',
      height: '19.5px',
    },
  },

  imageOptionsDescription: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
  },

  confirmDeleteImage: {
    position: 'absolute',
    p: 2,
    width: '70%',
    height: '30%',
    zIndex: 99,
    ...commonStyles.flex,
  },

  confirmBody: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 2,
  },

  confirmBodyButtons: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    pr: 10,
    gap: 1,
  },
};
export default styles;
