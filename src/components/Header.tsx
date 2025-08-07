import Link from "next/link";
import SearchBar from "./ui/SearchBar";

//temporary name, it should be updated
const title = "A Wonderful World";

export default function Header() {
  return (
    <header className="top-0 z-50 bg-transparent dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <h1 className="text-white font-bold text-xl md:text-4xl text-center">
        {title}
      </h1>
      <div className="flex items-right justify-between">
        <nav className="flex space-x-6">
          <Link
            href={"/volunteering"}
            className="text-grey text-sm md:text-xl text-white"
          >
            Volunteering
          </Link>
          <Link
            href={"/about"}
            className="text-grey text-sm md:text-xl text-white"
          >
            About
          </Link>
          <SearchBar />
        </nav>
      </div>
    </header>
  );
}
