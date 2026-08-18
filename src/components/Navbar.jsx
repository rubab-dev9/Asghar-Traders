import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  LuMenu,
  LuMessageCircle,
  LuShoppingBag,
  LuX,
} from "react-icons/lu";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="flex h-40 w-40 transition-all duration-300 group-hover:-translate-y-0.5">
              <img
                src={logo}
                alt="Asghar Traders Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Navigation */}
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-sm font-semibold transition-colors duration-300 ${isActive
                      ? "text-sky-700"
                      : "text-slate-600 hover:text-sky-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      <span
                        className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-sky-600 transition-all duration-300 ${isActive ? "w-full" : "w-0"
                          }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md"
            >
              <LuMessageCircle className="h-4 w-4" />
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-all duration-300 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <LuX className="h-5 w-5" />
            ) : (
              <LuMenu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen
            ? "max-h-96 border-t border-slate-100 opacity-100"
            : "max-h-0 opacity-0"
            }`}
        >
          <nav className="py-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 ${isActive
                      ? "bg-sky-50 text-sky-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-sky-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-700"
            >
              <LuMessageCircle className="h-4 w-4" />
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;