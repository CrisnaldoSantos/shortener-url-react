import shortImg from 'assets/short-url.svg';
import { Image, ImageProps } from 'react-bootstrap';

interface ShortImageProps extends ImageProps {
  imageSize?: string;
}
export function ShortImage({ imageSize = '100%', ...rest }: ShortImageProps) {
  return <Image fluid src={shortImg} style={{ width: imageSize }} {...rest} />;
}
