// components/Image.js
import NextImage, { ImageProps } from "next/image";
import {basePath} from "../../next.config"
// opt-out of image optimization, no-op
const customLoader = ({ src }: ImageProps) : any=> {
  return `${basePath|| ""}/${src}`
}

export default function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
}