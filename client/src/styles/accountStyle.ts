import { commonStyles } from './commonStyles';

const styles = {
  container: {
    width: '80%',
    ...commonStyles.flex,
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
};
export default styles;
