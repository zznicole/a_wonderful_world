import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  const title = "A Wonderful World";
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col max-w-5xl mx-auto h-dch">
        <h1 className="text-white font-bold text-xl md:text-4xl text-center">
          {title}
        </h1>
      </main>
      <Footer />
    </div>
  );
}
