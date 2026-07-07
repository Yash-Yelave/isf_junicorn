import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-slate-300 border-t border-gray-800 font-inter mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <img
              src="/assets/images/isf-Logo-Final-TOL.png"
              alt="ISF Logo"
              className="h-12 w-auto brightness-200"
              onError={(e) => {
                e.currentTarget.src = "/assets/isf-logo.webp";
              }}
            />
            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated to enhancing the entrepreneurial landscape, the International Startup Foundation (ISF) fosters vital connections between entrepreneurs, resources, investors, and mentors.
            </p>
          </div>

          {/* Column 2: Conferences */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Programs & Conferences
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/junicornshub" className="hover:text-isf-orange font-semibold transition-colors">
                  Junicorns Hub
                </Link>
              </li>
              <li>
                <Link to="/isf-hyderabad-2024-main" className="hover:text-isf-orange transition-colors">
                  ISF 2024 Hyderabad
                </Link>
              </li>
              <li>
                <Link to="/isf-2024-pune" className="hover:text-isf-orange transition-colors">
                  ISF 2024 Pune
                </Link>
              </li>
              <li>
                <Link to="/isf-jamaica-isf-global-cxo-summit" className="hover:text-isf-orange transition-colors">
                  ISF 2024 Jamaica
                </Link>
              </li>
              <li>
                <Link to="/conference-delegate-registration-isf-usa-2024" className="hover:text-isf-orange transition-colors">
                  ISF 2024 New Jersey
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Mentorship */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Mentorship Program
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/1hour-per-week" className="hover:text-isf-orange transition-colors">
                  1 Hour a Week
                </Link>
              </li>
              <li>
                <Link to="/mentor-form" className="hover:text-isf-orange transition-colors">
                  Become a Mentor
                </Link>
              </li>
              <li>
                <Link to="/mentee-form" className="hover:text-isf-orange transition-colors">
                  Apply as a Mentee
                </Link>
              </li>
              <li>
                <Link to="/investors" className="hover:text-isf-orange transition-colors">
                  Portal Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-isf-orange flex-shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-isf-orange flex-shrink-0" />
                <a href="mailto:hello@isfnetwork.org" className="hover:text-isf-orange transition-colors">
                  hello@isfnetwork.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-isf-orange flex-shrink-0" />
                <span>+91 40 4600 0000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ISF Network. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-isf-orange transition-colors">Privacy Policy</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-isf-orange transition-colors">Terms & Conditions</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-isf-orange transition-colors">Cancellation & Refund</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
