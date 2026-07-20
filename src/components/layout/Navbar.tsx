import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      name: "1 Hour a Week",
      path: "/1hour-per-week"
    },
    {
      name: "ISF Events",
      path: "#",
      submenu: [
        { name: "ISF AI Summit 2025", path: "/isf-ai-summit" },
        { name: "ISF 2024 Hyderabad", path: "/isf-hyderabad-2024-main" },
        { name: "ISF 2024 Pune", path: "/isf-2024-pune" },
        { name: "ISF 2024 Jamaica", path: "/isf-jamaica-isf-global-cxo-summit" },
        { name: "ISF 2024 USA", path: "/conference-delegate-registration-isf-usa-2024" }
      ]
    },
    {
      name: "Junicorns",
      path: "#",
      submenu: [
        { name: "Cohort 1 Austin 2025", path: "/isf-global-junicorn-ai-summit-2025" },
        { name: "Cohort 2 Dubai 2026", path: "/event" },
        { name: "About Junicorn", path: "/junicornshub" },
        { name: "Cohort 3.0", path: "/cohort-3" }
      ]
    },
    {
      name: "Dignitaries",
      path: "/distinguished-guests"
    },
    {
      name: "About Us",
      path: "/about-us"
    }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu}>
              <img
                src="/assets/images/isf-Logo-Final-TOL.png"
                alt="ISF Network"
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/assets/isf-logo.webp";
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-semibold link-transition py-2 ${
                location.pathname === "/" ? "text-isf-orange" : "text-slate-800 hover:text-isf-orange"
              }`}
            >
              Home
            </Link>

            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.submenu ? (
                  <button className="flex items-center gap-1 text-sm font-semibold text-slate-800 hover:text-isf-orange py-2 focus:outline-none">
                    {item.name} <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-semibold link-transition py-2 ${
                      location.pathname === item.path ? "text-isf-orange" : "text-slate-800 hover:text-isf-orange"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Submenu Dropdown */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
                    {item.submenu.map((subItem, idx) => (
                      <Link
                        key={idx}
                        to={subItem.path}
                        onClick={closeMenu}
                        className={`block px-4 py-2.5 text-xs font-medium text-slate-800 hover:bg-isf-hover-bg hover:text-isf-orange transition-colors ${
                          idx !== item.submenu.length - 1 ? "border-b border-gray-100" : ""
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}


          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-isf-orange p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-sm font-semibold text-slate-800 border-b border-gray-50"
              onClick={closeMenu}
            >
              Home
            </Link>
            
            {menuItems.map((item) => (
              <div key={item.name} className="py-2 border-b border-gray-50">
                {item.submenu ? (
                  <>
                    <span className="block text-sm font-semibold text-slate-400 mb-1">
                      {item.name}
                    </span>
                    <div className="pl-4 space-y-1.5 mt-1">
                      {item.submenu.map((subItem, idx) => (
                        <Link
                          key={idx}
                          to={subItem.path}
                          className="block py-1 text-xs text-slate-700 hover:text-isf-orange"
                          onClick={closeMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-sm font-semibold text-slate-800"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}


          </div>
        </div>
      )}
    </nav>
  );
}
