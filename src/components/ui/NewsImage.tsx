import Image from "next/image";
import { title } from "process";

type Porps = {
  title: string;
  imageUrl: string;
};
export default function NewsImage({ imageUrl }: Porps) {
  return (
    <Image
      className="size-48 shadow-xl rounded-md"
      src={imageUrl}
      alt={title}
      width={800}
      height={600}
    />
  );
}
