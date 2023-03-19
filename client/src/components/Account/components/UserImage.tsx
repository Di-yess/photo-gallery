import { Box, Paper, Typography } from '@mui/material';
import styles from 'src/styles/accountStyle';
import { IExtendedImage, Image } from 'src/types/photo';
import { fullPath } from 'src/utils/fullPath';

type Props = {
  userImage: IExtendedImage;
  setImage: React.Dispatch<React.SetStateAction<Image | null>>;
  blurElement: React.MutableRefObject<HTMLElement | null>;
  setImageToDelete: React.Dispatch<React.SetStateAction<IExtendedImage | null>>;
};

const UserImage = ({
  userImage,
  setImage,
  blurElement,
  setImageToDelete,
}: Props) => {
  return (
    <Paper
      elevation={2}
      sx={styles.userImage}
      key={userImage.id}
      onClick={() => {
        setImage(userImage);
        blurElement?.current?.classList.add('blur');
      }}
    >
      <img src={fullPath(userImage.link)} alt={userImage.name} />
      <Box className='editImage' sx={styles.editImage}>
        <Box sx={styles.imageOptions}>
          <Box sx={styles.imageOptionsDescription}>
            <Typography sx={{ color: 'white', fontSize: '14px' }}>
              {userImage.name.slice(0, 8) + '...'}
            </Typography>
            <Box sx={{ display: 'flex', gap: '2px' }}>
              <img
                src='/edit.svg'
                alt='edit'
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('edit', userImage.id);
                }}
              />
              <img
                src='/delete.svg'
                alt='delete'
                onClick={(e) => {
                  e.stopPropagation();
                  setImageToDelete(userImage);
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default UserImage;
