import Image from "next/image";

type Props = {
  imageUrl: string;
  title: string;
};
export default function NewsImage({ imageUrl, title }: Props) {
  return (
    <Image
      className=" shadow-xl rounded-md"
      src={imageUrl}
      alt={title}
      width={500}
      height={250}
    />
  );
}
