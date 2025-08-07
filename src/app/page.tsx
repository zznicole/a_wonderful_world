"use client";
import { useState } from "react";
import { fetchNews } from "@/services/newsApi";

import ArticleCard from "@/components/ui/ArticleCard";
import CardList from "@/components/ui/CardList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Home() {
  const selectedCategory = "all";
  const [searchQuary, setSearchQuary] = useState("");

  const articles = await fetchNews(selectedCategory, searchQuary);

  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col max-w-5xl mx-auto h-dch">
        <CardList>
          {articles.map((article) => (
            <ArticleCard key={article.source.id} article={article} />
          ))}
        </CardList>
      </main>
      <Footer />
    </div>
  );
}
