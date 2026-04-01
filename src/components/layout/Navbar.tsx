import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/analyze", label: "Analyze" },
  { to: "/intelligence", label: "Intelligence" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <Link to="/" className="text-xl tracking-tight">
          <span className="font-serif text-gray-900">List</span>
          <span className="font-bold text-teal-600">IQ</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-teal-600 border-b-2 border-teal-600 pb-0.5"
                  : "text-gray-600 hover:text-teal-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium ${
                location.pathname === link.to
                  ? "text-teal-600"
                  : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
