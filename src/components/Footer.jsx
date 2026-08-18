import { Link } from "react-router-dom";
import {
  LuMapPin,
  LuMessageCircle,
  LuPhone,
} from "react-icons/lu";
import logo from "../assets/footerLogo.png";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Business */}
          <div>
            <div className="flex items-center gap-4">
              <div className="h-16 w-22 shrink-0">
                <img
                  src={logo}
                  alt="Asghar Traders Logo"
                  className="block h-full w-full object-contain object-left"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Asghar Traders
                </h2>

                <p className="mt-1 text-sm text-sky-400">
                  Wholesale Grocery
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Your wholesale grocery partner in Bahawalpur, providing
              everyday grocery products for retailers, businesses and
              wholesale buyers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-sky-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-sky-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-sky-400"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-sky-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">
              Contact Us
            </h3>

            <div className="mt-4 space-y-4 text-sm">
              {/* Location */}
              <div className="flex items-start gap-3">
                <LuMapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />

                <p className="leading-6 text-slate-400">
                  Jubilee Hospital Road, Fatah Khan Bazar,
                  Old City, Bahawalpur, 63100, Pakistan
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+923024490490"
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-sky-400"
              >
                <LuPhone className="h-5 w-5 shrink-0 text-sky-500" />

                <span>+92 302 4490490</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923024490490"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-sky-400"
              >
                <LuMessageCircle className="h-5 w-5 shrink-0 text-sky-500" />

                <span>WhatsApp: +92 302 4490490</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Asghar Traders & Wholesale. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;