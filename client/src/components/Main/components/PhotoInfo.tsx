import React, { FC, useState } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Room as RoomIcon,
} from '@mui/icons-material';
import styles from 'src/components/styles/mainStyle';
import Map from 'src/components/Map/Map';
import { red, green } from '@mui/material/colors';

type Props = {
  image: Photo;
  x: number;
  y: number;
};

const PhotoInfo: FC<Props> = ({ image, x, y }) => {
  const [liked, setLiked] = useState(false);
  const [showMap, setShowMap] = useState(false);

  return (
    <Box className="photoInfo" sx={styles.photoInfo}>
      <Box sx={styles.photoInfoMenu}>
        <Typography fontSize='23px'>{image.name}</Typography>
        <Stack direction="row" spacing={1}>
          <FavoriteIcon
            fontSize="medium"
            sx={{ ...styles.infoMenuIcon, color: liked ? red[500] : 'white' }}
            onClick={() => setLiked((prev) => !prev)}
          />
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
