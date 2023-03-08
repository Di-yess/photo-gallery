import {
  Favorite as FavoriteIcon,
  Room as RoomIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { green, red } from '@mui/material/colors';
import { FC, useState } from 'react';
import Map from 'src/components/Map/Map';
import styles from 'src/styles/mainStyle';

type Props = {
  image: Photo;
};

const PhotoInfo: FC<Props> = ({ image }) => {
  const [liked, setLiked] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [likeCount, setLikeCount] = useState(5);

  return (
    <Box className="photoInfo" sx={styles.photoInfo}>
      <Box sx={styles.photoInfoMenu}>
        <Typography fontSize="23px">{image.name}</Typography>
        <Stack direction="row" spacing={1}>
          <Box display="flex" alignItems="center">
            <Typography
              fontSize="18.5px"
              marginRight={0.5}
              color={liked ? red[500] : 'white'}
            >
              {likeCount}
            </Typography>
            <FavoriteIcon
              fontSize="medium"
              sx={{ ...styles.infoMenuIcon, color: liked ? red[500] : 'white' }}
              onClick={() => {
                liked
                  ? setLikeCount((prev) => prev - 1)
                  : setLikeCount((prev) => prev + 1);
                setLiked((prev) => !prev);
              }}
            />
          </Box>
          <ShareIcon sx={styles.infoMenuIcon} />
          {showMap && <Map x={image.x || 51.505} y={image.y || -0.09} />}
          <RoomIcon
            fontSize="medium"
            sx={{
              ...styles.infoMenuIcon,
              color: showMap ? green[400] : 'white',
            }}
            onClick={() => {
              setShowMap((prev) => !prev);
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default PhotoInfo;
