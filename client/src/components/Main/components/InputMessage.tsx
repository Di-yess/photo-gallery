import SendIcon from '@mui/icons-material/Send';
import { Box, Input } from '@mui/material';
import { FC, useState } from 'react';
import styles from 'src/styles/mainStyle';
import { IComment } from 'src/types/photo';
import { fetchNewComment } from 'src/utils/fetches';

type Props = {
  imageId: number;
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
};

const InputMessage: FC<Props> = ({ imageId, setComments }) => {
  const [message, setMessage] = useState('');
  return (
    <Box sx={styles.inputMessage}>
      <Input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder='Leave your comment'
        sx={{ fontSize: '14px', width: '90%', mr: 1 }}
      />
      <SendIcon
        sx={{ cursor: 'pointer' }}
        onClick={async () => {
          await fetchNewComment(message.trim(), imageId, setComments);
          setMessage('');
        }}
        fontSize='small'
      />
    </Box>
  );
};

export default InputMessage;
