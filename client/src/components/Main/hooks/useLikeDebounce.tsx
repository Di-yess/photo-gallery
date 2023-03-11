import { FC, useEffect } from 'react';
import { fetchLike } from 'src/utils/fetches';

type Props = {
  initLike: boolean;
  imageId: number;
  liked: boolean;
};

const useLikeDebounce: FC<Props> = ({ initLike, imageId, liked }) => {
  useEffect(() => {
    if (!initLike) {
      return;
    }
    const debounceTimer = setTimeout(() => {
      fetchLike(imageId, liked);
    }, 250);
    
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [liked, imageId, initLike]);

  return null;
};

export default useLikeDebounce;
