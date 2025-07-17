import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CardItem from "@/components/ui/CardItem";
import NEWS_API_KEY from "dotenv";

const apiKey = NEWS_API_KEY;
const title = "A Wonderful World";

export default async function Home() {
  const numsOfNews = 20;
  const url =
    "http://newsapi.org/v2/top-headlines?" +
    "language=en" +
    "&pageSize=" +
    numsOfNews +
    "&apiKey=" +
    apiKey;
  const data = await fetch(url);
  if (!data) {
    throw new Error(`Response status: ${data})`);
  }
  const news = await data.json();
  const articals = await news.articles;

  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col max-w-5xl mx-auto h-dch">
        <h1 className="text-white font-bold text-xl md:text-4xl text-center">
          {title}
        </h1>
        <ul>
          {articals.map(
            (news: {
              title: string;
              urlToImage: string;
              description: string;
              date: string;
              author: string;
              publishedAt: string;
            }) => (
              <li key={news.title}>
                <CardItem
                  imageUrl={news.urlToImage}
                  title={news.title}
                  description={news.description}
                  date={news.publishedAt}
                  author={news.author}
                ></CardItem>
              </li>
            )
          )}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
