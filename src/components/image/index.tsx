import { ImageThumbnail } from './image.styled';

interface Props {
  src: string;
}

export const Image = ({ src }: Props) => {
  return <ImageThumbnail src={src} />;
};
