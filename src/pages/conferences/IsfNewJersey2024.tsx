import { Calendar, MapPin, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function IsfNewJersey2024() {
  const expects = [
    {
      title: "CXO Connect",
      desc: "Connect and Network with Global CXOs, Tech Policy Directors, and Executive Mentors."
    },
    {
      title: "Panel Discussions",
      desc: "Learn from corporate panelists with wide experience in enterprise scaling and venture expansions."
    },
    {
      title: "Investor Connect",
      desc: "Connect and network directly with prominent seed/venture capitalists and angel investor clubs."
    }
  ];

  const agenda = [
    { time: "03:00 PM - 04:00 PM", title: "Check In & Registration" },
    { time: "04:00 PM - 07:00 PM", title: "Global CXO Summit & Keynotes" },
    { time: "07:00 PM Onwards", title: "Networking over Cocktails & Dinner" }
  ];

  return (
    <div className="font-inter pb-16 pt-24 bg-white">
      
      {/* 1. Header Banner */}
      <section className="bg-[#111111] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-isf-orange font-bold uppercase tracking-widest text-xs block">
            ISF 2024 NEW JERSEY
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-baskerville tracking-tight">
            CXO Summit & Curtain Raiser
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto font-light">
            Holmdel, New Jersey — June 2nd, 2024
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Calendar size={16} className="text-isf-orange" />
              June 2, 2024
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin size={16} className="text-isf-orange" />
              Bell Works, New Jersey
            </span>
          </div>
          <div className="pt-4">
            <Link
              to="/registration/delegate"
              className="bg-isf-orange hover:bg-isf-orange-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded shadow transition-all inline-block"
            >
              Register as Delegate
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-slate-950/70 z-0"></div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-2xl font-bold font-baskerville text-slate-800">
          Reimagining Startup Collaborations
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Join the USA Chapter of the India Startup Festival at Bell Works, Holmdel. Reconnect and collaborate with leading industry experts, founders, and policy advisors to elevate your startup's global blueprint.
        </p>
      </section>

      {/* 3. What to Expect */}
      <section className="py-16 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold font-baskerville">
              What to Expect
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expects.map((exp, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-lg space-y-4">
                <CheckCircle className="w-6 h-6 text-isf-orange" />
                <h3 className="text-base font-bold font-baskerville text-slate-800">
                  {exp.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Agenda & Location Info */}
      <section className="py-16 max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Agenda */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold font-baskerville text-slate-900 border-b border-gray-200 pb-3">
            Jersey Curtain Raiser Agenda
          </h3>
          <div className="space-y-4">
            {agenda.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded border border-gray-100">
                <span className="flex items-center gap-1 text-xxs font-bold text-isf-orange uppercase tracking-wider mt-0.5 whitespace-nowrap">
                  <Clock size={12} />
                  {item.time.split(" ")[0] + " " + item.time.split(" ")[1]}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location / QR Payment Check */}
        <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-xxs space-y-6">
          <h3 className="text-base font-bold font-baskerville text-slate-800">
            Event Venue & Details
          </h3>
          <div className="space-y-2 text-xs text-slate-500 leading-relaxed">
            <p className="font-bold text-slate-800">Bell Works</p>
            <p>101 Crawfords, Corner Rd, Holmdel, New Jersey 07733</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-isf-orange hover:underline uppercase tracking-wider block pt-1"
            >
              View Google Map →
            </a>
          </div>

          <div className="border-t border-gray-100 pt-6 space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Delegate Verification Note
            </h4>
            <p className="text-xxs text-slate-500 leading-relaxed">
              New Jersey delegates are required to register through the main delegate form using customized transaction reference vouchers. QR Code scanning guidelines and payment links are provided inside the registration panels.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
