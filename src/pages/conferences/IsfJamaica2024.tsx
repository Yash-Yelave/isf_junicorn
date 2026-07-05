import { Calendar, MapPin, CheckCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export function IsfJamaica2024() {
  const agenda = [
    {
      time: "6th June 2024 - AM",
      title: "Inaugural & Welcome Addresses",
      desc: "Featuring Senator the Hon. Aubyn Hill, Councillor Dwight Crawford, Jason Hall (High Commissioner of Jamaica to India), Sanjay Gupta (Charge d'Affaires, India), and Dr. JA Chowdary."
    },
    {
      time: "6th June 2024 - PM (Session 1)",
      title: "Keynotes on Health & Agribusiness",
      desc: "Medical Service keynotes by Western Health Authority, Caribbean Tech Hub integrations by Conrad Robinson, and Sustainable Agribusiness partnering options by Marlene Porter."
    },
    {
      time: "6th June 2024 - PM (Session 2)",
      title: "Panel: Jamaica - Tech Hub of the Caribbean",
      desc: "Panelists: Sri Atluri, Dr. Prasad, Jason Hall, Oral Heaven, Metry Seaga, Krishna Bendapudi, Deenanath Harapanahalli, Dr. Siva Mahesh Tangutooru."
    }
  ];

  const opportunities = [
    "Near-Shore Operations for KPOs and Tech Centers for US",
    "Special Economic Zone Benefits",
    "Investment Opportunities & High-Yield Development Projects",
    "Tax Breaks & Governmental Special Support Channels"
  ];

  const dignitaries = [
    { name: "Senator the Hon. Aubyn Hill", role: "Minister of Industry, Investment and Commerce, Jamaica" },
    { name: "His Excellency Mr. Jason Hall", role: "High Commissioner of Jamaica to India" },
    { name: "His Excellency Mr. Rungsung Masakui", role: "High Commissioner" },
    { name: "Ms. Kellie-Dawn Hamilton", role: "MD, JAMPRO" },
    { name: "Ms. Shullette Cox", role: "President, JAMPRO" },
    { name: "Dr. J.A. Chowdary", role: "Founder & Chairman, ISF" },
    { name: "Sri Atluri", role: "MD, Global Head of Enterprise Quality, BNY Mellon" },
    { name: "Dr. Siva Mahesh Tangutooru", role: "Co-Founder and Director, ISF" },
    { name: "Deenanath Harapanahalli", role: "Co-Founder and Director, ISF" },
    { name: "Dr. Shanker Yalamanchali", role: "Founder & Technical Advisory Chairman" },
    { name: "Dr. Guna Muppuri OD", role: "Founder, President & CEO, Bioprist & Indies Group" },
    { name: "Santosh Kumar Yamsani", role: "Head of EQE Core Engineering, BNY Mellon" },
    { name: "Major Sunil Shetty", role: "Founder, Security Analyst" }
  ];

  return (
    <div className="font-inter pb-16 pt-24 bg-white">
      
      {/* 1. Header Banner */}
      <section className="bg-[#111111] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-isf-orange font-bold uppercase tracking-widest text-xs block">
            ISF GLOBAL CXO SUMMIT
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-baskerville tracking-tight">
            ISF 2024 Jamaica
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto font-light">
            Montego Bay, Jamaica — June 5th to June 9th, 2024
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Calendar size={16} className="text-isf-orange" />
              June 5 - 9, 2024
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin size={16} className="text-isf-orange" />
              BIMS Medical School, Montego Bay, Jamaica
            </span>
          </div>
          <div className="pt-4">
            <Link
              to="/registration/delegate"
              className="bg-isf-orange hover:bg-isf-orange-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded shadow transition-all inline-block"
            >
              Register Now
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-slate-950/70 z-0"></div>
      </section>

      {/* 2. Intro */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-2xl font-bold font-baskerville text-slate-800">
          Unlock Caribbean Tech and Investment Access
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Join us for exciting networking with Global CEOs, Top Investors & Mentors and Brilliant Startups. This is your premium chance to invest in Jamaica and build near-shore KPO/tech capabilities for the US market.
        </p>
      </section>

      {/* 3. Opportunities */}
      <section className="py-16 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-baskerville text-slate-800">
              ISF Jamaica Opportunities
            </h2>
            <div className="w-12 h-1 bg-isf-orange rounded"></div>
            <div className="space-y-4">
              {opportunities.map((opp, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-isf-orange flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 font-semibold">{opp}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-8 rounded-lg space-y-4 shadow-xxs">
            <h3 className="text-base font-bold font-baskerville text-slate-800">
              Venue Location
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              BIMS Medical School<br />
              1211 Providence Drive, Ironshore Highway, Montego Bay, Jamaica
            </p>
            <div className="pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-isf-orange hover:underline uppercase tracking-wider"
              >
                View Location Map →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Agenda */}
      <section className="py-16 max-w-5xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold font-baskerville">
            Global CXO Summit Agenda
          </h2>
          <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
        </div>
        
        <div className="space-y-6">
          {agenda.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-gray-100 p-6 rounded-lg">
              <span className="text-xxs font-bold text-isf-orange uppercase tracking-wider block mb-1">
                {item.time}
              </span>
              <h3 className="text-sm font-bold text-slate-800 font-baskerville">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Dignitaries */}
      <section className="py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold font-baskerville">
              Dignitaries at the Summit
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {dignitaries.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-isf-orange transition-colors flex flex-col justify-between"
              >
                <h4 className="text-xs font-bold text-slate-800 font-baskerville">
                  {member.name}
                </h4>
                <p className="text-xxs text-slate-500 mt-2 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
