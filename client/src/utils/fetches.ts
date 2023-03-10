import axios from 'axios';
import { API } from 'src/constants/api';
import {
  IComment,
  IExtendedImage,
  IFetchExtendedImage,
} from 'src/types/photo.d';

// fetch a full image
export const fetchFullImage = async (
  id: number,
  setFullImage: React.Dispatch<React.SetStateAction<IFetchExtendedImage>>
) => {
  try {
    const { data } = await axios.get<IExtendedImage>(`${API}/images/${id}`);
    setFullImage(data);
  } catch (err) {
    setFullImage('error');
  }
};

//leave a comment
export const fetchNewComment = async (
  text: string,
  imageId: number,
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>
) => {
  try {
    console.log(imageId, text);
    const { data } = await axios<IComment>({
      url: API + '/comments',
      method: 'POST',
      data: { imageId, text },
      headers: {
        Authorization: localStorage.getItem('token') || '',
      },
    });

    setComments((prev) => [...prev, data]);
  } catch (err) {
    console.log(err);
  }
};
