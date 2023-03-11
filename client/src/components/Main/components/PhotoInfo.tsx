import {
  Favorite as FavoriteIcon,
  Room as RoomIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { green, red } from '@mui/material/colors';
import { FC, useRef, useState } from 'react';
import Map from 'src/components/Map/Map';
import styles from 'src/styles/mainStyle';
import { useAppSelector } from 'src/types/Apphooks';
import { IExtendedImage } from 'src/types/photo';
import useLikeDebounce from '../hooks/useLikeDebounce';

type Props = {
  image: IExtendedImage;
};

const PhotoInfo: FC<Props> = ({ image }) => {
  const refInitLike = useRef<boolean>(false);
  const [liked, setLiked] = useState(image.likedBefore);
  const [showMap, setShowMap] = useState(false);
  const [likeCount, setLikeCount] = useState(image._count.likes);

  const checkUser = useAppSelector((state) => state.user.id);

  useLikeDebounce({ initLike: refInitLike.current, imageId: image.id, liked });

  const handleLike = () => {
    if (!checkUser) return;

    liked ? setLikeCount((prev) => prev - 1) : setLikeCount((prev) => prev + 1);
    setLiked((prev) => !prev);
    refInitLike.current = true;
  };

  return (
    <Box className='photoInfo' sx={styles.photoInfo}>
      <Box sx={styles.photoInfoMenu}>
        <Typography fontSize='24px'>{image.name}</Typography>
        <Stack direction='row' spacing={1}>
          <Box display='flex' alignItems='center'>
            <Typography
              fontSize='18.5px'
              marginRight={0.5}
              color={liked ? red[500] : 'white'}
            >
              {likeCount}
            </Typography>
            <FavoriteIcon
              fontSize='medium'
              sx={{ ...styles.infoMenuIcon, color: liked ? red[500] : 'white' }}
              onClick={handleLike}
            />
          </Box>
          <ShareIcon sx={styles.infoMenuIcon} />
          {showMap && (
            <Map x={image.coordX || 51.505} y={image.coordY || -0.09} />
          )}
          <RoomIcon
            fontSize='medium'
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
