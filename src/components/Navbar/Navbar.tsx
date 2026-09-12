import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-base-100/95 backdrop-blur border-b border-base-300">
      <nav className="navbar max-w-7xl mx-auto px-4">
        {/* Mobile hamburger — left */}
        <div className="navbar-start lg:hidden">
          <button
            type="button"
            className="btn btn-ghost btn-square"
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Brand — center on mobile, left on desktop */}
        <div className="navbar-center lg:navbar-start">
          <a href="#home" className="flex items-center">
            <img
              src="/logo-text.png"
              alt="Dev Stack"
              className="h-9 md:h-10 w-auto"
            />
          </a>
        </div>

        {/* Desktop links — center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Auth buttons — right (desktop + mobile) */}
        <div className="navbar-end gap-2">
          <button type="button" className="btn btn-ghost btn-sm">
            Sign In
          </button>
          <button type="button" className="btn btn-sm btn-brand rounded-full">
            Sign Up
          </button>
        </div>
      </nav>

      {open && (
        <ul className="menu bg-base-100 border-t border-base-300 px-4 pb-4 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
