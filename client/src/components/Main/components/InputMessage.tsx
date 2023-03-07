import { Box, Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from 'src/components/styles/mainStyle';
import { FC, useState } from 'react';
import { Comment } from 'src/types/comment';

type Props = {
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
};

const InputMessage: FC<Props> = ({ setComments }) => {
  const [message, setMessage] = useState('');
  return (
    <Box sx={styles.inputMessage}>
      <Input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Leave your comment"
        sx={{ fontSize: '14px', width: '90%', mr: 1 }}
      />
      <SendIcon
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          console.log(message);
          setComments((prev) => [
            ...prev,
            { ...prev[0], text: message, id: Date.now() },
          ]);
          setMessage('');
        }}
        fontSize="small"
      />
    </Box>
  );
};

export default InputMessage;
