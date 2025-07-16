import NewsImage from "./NewsImage";
import Thumbnail from "./Thumbnail";

type Porps = {
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
}: Porps) {
  return (
    <>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <NewsImage imageUrl={imageUrl} />
        </div>
        <div className="flex items-center md:items-start">
          <span className="text-2xl font-medium">{title}</span>
          <span className="font-medium">{description}</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  );
}
