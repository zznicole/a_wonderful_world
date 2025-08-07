"use client";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";

export default function SearchBar() {
  const [searchQuary, setsearchQuary] = useState("");
  const debouncedSearch = useDebounce(searchQuary, 500);

  const handleInputChange = (event) => {
    setsearchQuary(event.target.value);
  };
  console.log("search quary: ", searchQuary);
  return (
    <div className="relative bg-transparent">
      {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> */}
      <svg
        id="newsSearch-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="absolute bottom-2 left-2 h-6 w-6 transition-[color,box-shadow]"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <Input
        id="newsSearch-input"
        name="newsSearch-input"
        type="search"
        placeholder="Search news...."
        value={searchQuary}
        onChange={handleInputChange}
        className="w-full pl-10 pr-10 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-full focus:ring-2 focus:ring-blue-500 dark:text-white"
      />
      <p id="newsSearch-OutPut"></p>
    </div>
  );
}
