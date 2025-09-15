
"use client";
import { FaHome, FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Navbar_2() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "প্রতিষ্ঠান পরিচিতি", href: "/about" },
    { name: "শিক্ষার্থীর তথ‌্য", href: "/students" },
    { name: "পাঠদানসংক্রান্ত তথ্য", href: "/academic" },
    { name: "নোটিশ", href: "/notices" },
    { name: "ফলাফল", href: "/results" },
    { name: "কমিটি", href: "/committee" },
    { name: "অন্যান্য", href: "/others" },
    { name: "গ‌্যালারী", href: "/gallery" },
    { name: "যোগাযোগ", href: "/contact" },
    { name: "লগইন", href: "/login" },
  ];

  return (
    <nav className="bg-white shadow lg:p-4 lg:mx-21">
      {/* Mobile Navbar */}
      <div className="flex justify-between px-3  items-center md:hidden">
        {/* Home Icon */}
        <Link href="/" className="text-black flex items-center gap-1">
          <FaHome size={20} />
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-black p-2 hover:bg-green-700 hover:text-white rounded"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="flex flex-col gap-2 mt-2  md:hidden">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="p-2 hover:bg-green-700 hover:text-white rounded"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-wrap justify-center gap-8">
        {/* Home */}
        <Link
          href="/"
          className="cursor-pointer flex p-1 items-center gap-1 text-black hover:bg-green-700 hover:text-white"
        >
          <FaHome /> হোম
        </Link>

        {/* Other Links */}
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="cursor-pointer p-1 text-black hover:bg-green-700 hover:text-white"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

