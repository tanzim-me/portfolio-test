// components/Navbar.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        {links.map(({ name, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={
                pathname === href
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-500"
              }
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
