import Link from "next/link";
import SearchBar from "./ui/SearchBar";
import { Input } from "./ui/input";

//temporary name, it should be updated
const title = "A Wonderful World";

export default function Header() {
  return (
    <header className="header border-b border-white/100 px- py4">
      <h1 className="text-white font-bold text-xl md:text-4xl text-center">
        {title}
      </h1>
      <div className="flex items-right justify-between">
        <nav className="flex space-x-6">
          <Link
            href={"/volunteering"}
            className="text-grey text-sm md:text-xl text-white"
          >
            Volunteering Opportunities
          </Link>
          <Link
            href={"/about"}
            className="text-grey text-sm md:text-xl text-white"
          >
            About
          </Link>
          <Input />
        </nav>
      </div>
    </header>
  );
}
