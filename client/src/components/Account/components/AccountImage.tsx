import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { deleteImageThunk } from 'src/store/asyncThunk/deleteImageThunk';
import styles from 'src/styles/accountStyle';
import { useAppDispatch, useAppSelector } from 'src/types/Apphooks';
import { Image } from 'src/types/photo';
import { fullPath } from 'src/utils/fullPath';

type Props = {
  setImage: React.Dispatch<React.SetStateAction<Image | null>>;
  blurElement: React.MutableRefObject<HTMLElement | null>;
};

const AccountImage: FC<Props> = ({ setImage, blurElement }) => {
  const userImages = useAppSelector((state) => state.user.images);
  const dispatch = useAppDispatch();

  return (
    <Paper elevation={2} sx={styles.accountImages}>
      {userImages &&
        userImages.map((userImage) => (
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
                        dispatch(deleteImageThunk(userImage.id));
                        console.log('delete', userImage.id);
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        ))}
    </Paper>
  );
};

export default AccountImage;
