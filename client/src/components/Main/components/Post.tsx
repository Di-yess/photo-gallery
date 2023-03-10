import styles from 'src/styles/mainStyle';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { IExtendedImage } from 'src/types/photo';
import { API } from 'src/constants/api';

type Props = {
  image: IExtendedImage;
};

const Post: FC<Props> = ({ image }) => {
  return (
    <Paper elevation={2} sx={styles.post}>
      <Box sx={styles.userAndAbout}>
        <Avatar
          src={API + '/' + image.user.avatar.link}
          alt='someone'
          sx={{ width: '50px', height: '50px' }}
        />
        <Box sx={{ marginLeft: '1vw' }}>
          <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>
            {image.user.name}
          </Typography>
          <Typography sx={{ fontSize: '12px', marginTop: '-2px' }}>
            Subscribe
          </Typography>
        </Box>
      </Box>
      <Typography sx={styles.postText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit
        facilis elit. Quia fugit elit.
      </Typography>
      <Box sx={styles.postInfo}>
        <Typography sx={{ fontSize: '12px' }} color='#a7a7a7'>
          1000 views
        </Typography>
        <Typography sx={{ fontSize: '12px' }} color='#a7a7a7'>
          {image.createdAt.toString().slice(0, 10)}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Post;
