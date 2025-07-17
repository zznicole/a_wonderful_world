import NewsImage from "./NewsImage";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  author: string;
};
export default function CardItem({
  imageUrl,
  title,
  description,
  date,
  author,
}: Props) {
  return (
    <>
      <div className="flex flex-col items-center gap-30 p-7 md:flex-row md:gap-8 rounded-2xl ">
        <div>
          <NewsImage imageUrl={imageUrl} title={title} />
        </div>
        <div className="flex items-center md:items-start">
          <span className="font-medium">{title}</span>
          <span className="font-small">{description}</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>{date}</span>
            <span>{author}</span>
          </span>
        </div>
      </div>
    </>
  );
}
