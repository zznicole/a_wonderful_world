"use client";
import { useState } from "react";

import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar({ onsearch }) {
  const [searchQuary, setSearchQuary] = useState("");

  const handleInputChange = (event) => {
    setSearchQuary(event.target.value);
  };

  const handleSumit = (event) => {
    event.preventDefault();
    onsearch(searchQuary);
  };
  return (
    <div>
      <label>
        <SearchIcon />
      </label>
      <Input
        id="newsSearch-input"
        type="search"
        placeholder="Search"
        value={searchQuary}
        onChange={handleInputChange}
        onSubmit={handleSumit}
      />
    </div>
  );
}
