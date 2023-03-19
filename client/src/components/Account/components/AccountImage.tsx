import { Paper } from '@mui/material';
import { FC, useState } from 'react';
import styles from 'src/styles/accountStyle';
import { useAppSelector } from 'src/types/Apphooks';
import { IExtendedImage, Image } from 'src/types/photo';
import DeleteModalImage from './DeleteModalImage';
import UserImage from './UserImage';

type Props = {
  setImage: React.Dispatch<React.SetStateAction<Image | null>>;
  blurElement: React.MutableRefObject<HTMLElement | null>;
};

const AccountImage: FC<Props> = ({ setImage, blurElement }) => {
  const userImages = useAppSelector((state) => state.user.images);
  const [imageToDelete, setImageToDelete] = useState<IExtendedImage | null>(
    null
  );

  return (
    <Paper elevation={2} sx={styles.accountImages}>
      {imageToDelete && (
        <DeleteModalImage
          image={imageToDelete}
          setImageToDelete={setImageToDelete}
        />
      )}
      {userImages &&
        userImages.map((userImage) => (
          <UserImage
            key={userImage.id}
            userImage={userImage}
            setImage={setImage}
            blurElement={blurElement}
            setImageToDelete={setImageToDelete}
          />
        ))}
    </Paper>
  );
};

export default AccountImage;
