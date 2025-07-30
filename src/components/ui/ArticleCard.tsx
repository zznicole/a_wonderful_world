import React from "react";
import { Article } from "@/types/types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  // console.log("ArtcileCard: ", article);
  return (
    <li
      key={article.title}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="flex items-center justify-between">
        <i className="text-blue-600 dark:text-blue-400">
          {article.source.name}
        </i>
        <i>{article.publishedAt}</i>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-grey-900">{article.title}</h2>
        <p className="text-grey-600">{article.description}</p>
      </div>
    </li>
  );
}
