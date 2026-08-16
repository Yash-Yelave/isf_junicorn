import { getImageUrl } from "../../utils/imageUtils";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-[#111111] text-slate-300 border-t border-gray-800 font-inter mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <img
              src={getImageUrl("/assets/images/isf-Logo-Final-TOL.png")}
              alt="ISF Logo"
              className="h-12 w-auto brightness-200"
              onError={(e) => {
                e.currentTarget.src = "/assets/isf-logo.webp";
              }}
            />
            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated to enhancing the entrepreneurial landscape, the International Startup Foundation (ISF) fosters vital connections between entrepreneurs, resources, investors, and mentors.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/theISFnetwork" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-isf-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://twitter.com/theISFnetwork" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-isf-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://www.youtube.com/@theISFnetwork" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-isf-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="https://www.linkedin.com/showcase/theisfnetwork/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-isf-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.instagram.com/theisfnetwork/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-isf-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Conferences */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Programs & Conferences
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/junicornshub" className="hover:text-isf-orange font-semibold transition-colors">
                  About Junicorn
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

          {/* Column 3: Registration Tracks */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Registrations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/registration/delegate" className="hover:text-isf-orange transition-colors">
                  Conference Delegate
                </Link>
              </li>
              <li>
                <Link to="/registration/exhibitor" className="hover:text-isf-orange transition-colors">
                  Exhibitors & Stalls
                </Link>
              </li>
              <li>
                <Link to="/registration/pitch" className="hover:text-isf-orange transition-colors">
                  Pitch Contest Entry
                </Link>
              </li>
              <li>
                <Link to="/registration/student" className="hover:text-isf-orange transition-colors">
                  Student Pass
                </Link>
              </li>
              <li>
                <Link to="/registration/bus-yatra" className="hover:text-isf-orange transition-colors">
                  Ankura Bus Yatra
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
                <span>310, Saideep Hulas, #32/2B, Old Madaras Road, Near Budigere Cross, Virgonagar, Aavalahalli, Bandapura, Bangalore Karnataka 560049</span>
              </li>
            </ul>

            {/* Managed By Info & Logo */}
            <div className="pt-2 border-t border-gray-800/80 space-y-2">
              <span className="text-[11px] font-semibold text-slate-400 block tracking-wide uppercase">
                Managed by
              </span>
              <div className="inline-block bg-white p-2 rounded-xl border border-slate-700 shadow-sm">
                <img
                  src={getImageUrl("/assets/images/jnanana-logo.png")}
                  alt="Jnanana Foundation Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ISF Network. Managed by Jnanana Foundation. All rights reserved.</p>
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
