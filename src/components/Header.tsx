import Link from "next/link";

export default function Header() {
  return (
    <header className="header border-b border-white/100 px- py4">
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
        </nav>
      </div>
    </header>
  );
}
