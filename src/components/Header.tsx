import Link from "next/link";
import React from "react";
function Header() {
  return (
    <header className="flex justify-between bg-pink-600 p-4">
      <div>
        <h2 className="text-3xl font-semibold font-sans text-yellow-50 items-center">
          My Portfolio
        </h2>
      </div>
      <nav>
        <ul className="flex flex-wrap gap-x-4 justify-center  text-yellow-50 font-sans font-semibold items-center mr-6">
          <li>
            <Link className="hover:text-blue-700" href="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-blue-700" href="/about">About</Link>
          </li>
          <li>
          <Link className="hover:text-blue-700" href="/skills">Skills</Link>
        </li>
          <li>
            <Link className="hover:text-blue-700" href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
