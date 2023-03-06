import styles from '../.././styles/mainStyle';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  user: { id: number; name: string; postedAt: string; src: string };
};

const Post: FC<Props> = ({user}) => {
  return (
    <Paper elevation={2} sx={styles.post}>
      <Box sx={styles.userAndAbout}>
        <Avatar
          src={user.src}
          alt="someone"
          sx={{ width: '50px', height: '50px' }}
        />
        <Box sx={{ marginLeft: '1vw' }}>
          <Typography sx={{ fontSize: '17px' }}>{user.name}</Typography>
          <Typography sx={{ fontSize: '12px', marginTop: '-2px' }}>
            Subscribe
          </Typography>
        </Box>
      </Box>
      <Typography sx={styles.postText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit
        facilis elit. Quia fugit elit. consectetur adipisicing
      </Typography>
      <Box sx={styles.postInfo}>
        <Typography sx={{ fontSize: '13px' }} color="#a7a7a7">
          1000 views
        </Typography>
        <Typography sx={{ fontSize: '13px' }} color="#a7a7a7">
          {user.postedAt}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Post;
