"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 relative w-full">
      <div className="flex justify-between items-center w-full">
        {/* ✅ Left-aligned Logo & Hamburger */}
        <div className="flex items-center gap-4 justify-start w-full">
          <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <Link href="/" className="text-xl font-bold flex items-center">
            <img src="/logo.png" alt="Logo" className="mr-2 w-16 h-16 rounded-lg" />
            MyReader
          </Link>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <ul className={`absolute top-16 left-0 w-full bg-gray-800 py-4 flex flex-col items-center gap-4 ${isOpen ? "block" : "hidden"}`}>
        <li><Link href="/novels" onClick={() => setIsOpen(false)}>Novels</Link></li>
        <li><Link href="/manga" onClick={() => setIsOpen(false)}>Manga</Link></li>
        <li><Link href="/library" onClick={() => setIsOpen(false)}>Library</Link></li>
        <li><Link href="/search" onClick={() => setIsOpen(false)}>Search</Link></li>
      </ul>
    </nav>
  );
}
