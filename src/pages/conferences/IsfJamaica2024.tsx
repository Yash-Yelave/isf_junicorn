import { useState } from "react";
import { Calendar, MapPin, CheckCircle, ChevronLeft, ChevronRight, Quote, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { jamaicaEventData } from "./jamaicaData";

export function IsfJamaica2024() {
  const [activeSlide, setActiveSlide] = useState(0);

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

  const getDignitaryImage = (name: string) => {
    const match = jamaicaEventData.dignitaries.find(d => d.name === name);
    return match ? match.img : "/assets/images/user-placeholder.png";
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % jamaicaEventData.testimonials.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + jamaicaEventData.testimonials.length) % jamaicaEventData.testimonials.length);
  };

  return (
    <div className="font-inter pb-16 pt-24 bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20 min-h-screen">

      {/* 1. Header Banner */}
      <section className="bg-transparent border-b border-gray-100 py-16 md:py-20 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="text-isf-orange font-bold uppercase tracking-widest text-xs block">
            ISF GLOBAL CXO SUMMIT
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-baskerville text-slate-900 tracking-tight">
            ISF 2024 Jamaica
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-light">
            Montego Bay, Jamaica — June 5th to June 9th, 2024
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs">
            <span className="flex items-center gap-1.5 text-slate-500 font-medium">
              <Calendar size={16} className="text-isf-orange" />
              June 5 - 9, 2024
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-medium">
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
      </section>

      {/* 2. Intro */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-2xl font-bold font-baskerville text-slate-800">
          Unlock Caribbean Tech and Investment Access
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed font-medium">
          Join us for exciting networking with Global CEOs, Top Investors & Mentors and Brilliant Startups. This is your premium chance to invest in Jamaica and build near-shore KPO/tech capabilities for the US market.
        </p>
      </section>

      {/* 3. Opportunities */}
      <section className="py-16 bg-white/40 backdrop-blur-xs border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-baskerville text-slate-800">
              ISF Jamaica Opportunities
            </h2>
            <div className="w-12 h-1 bg-isf-orange rounded"></div>
            <div className="space-y-4">
              {jamaicaEventData.opportunities.map((opp, idx) => (
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
              Providence Drive, Ironshore Highway, Montego Bay, Jamaica
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

        <div className="grid grid-cols-1 gap-6">
          {agenda.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-6 rounded-xl shadow-xs">
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
      <section className="py-16 bg-white/40 backdrop-blur-xs border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-isf-orange font-bold uppercase tracking-widest text-xs">
              INTERNATIONAL STARTUP FESTIVAL 2024
            </span>
            <h2 className="text-2xl font-bold font-baskerville text-slate-900">
              Dignitaries at the Summit
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {jamaicaEventData.dignitaries.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-isf-orange transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-orange-100 shadow-sm">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-bold text-sm text-slate-800 font-baskerville leading-tight">
                  {member.name}
                </h4>
                <p className="text-xs text-slate-500 mt-2 font-medium leading-snug">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5. Testimonial Slider ("Dignitary Speak") */}
      <section className="py-20 bg-white/60 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-isf-orange font-bold uppercase tracking-widest text-xs">
              INTERNATIONAL STARTUP FESTIVAL 2024
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-baskerville text-slate-900">
              Dignitary Speak
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          {/* Testimonial card slider */}
          <div className="relative bg-white border border-gray-150 rounded-2xl p-8 md:p-12 shadow-sm min-h-[300px] flex flex-col justify-between overflow-hidden">
            
            <div className="absolute top-6 left-6 text-orange-100">
              <Quote size={56} className="fill-orange-50 stroke-1" />
            </div>

            <div className="relative z-10 space-y-6">
              <p className="text-sm md:text-base text-slate-700 italic leading-relaxed font-medium">
                "{jamaicaEventData.testimonials[activeSlide].quote}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                  <img
                    src={getDignitaryImage(jamaicaEventData.testimonials[activeSlide].author)}
                    alt={jamaicaEventData.testimonials[activeSlide].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 font-baskerville">
                    {jamaicaEventData.testimonials[activeSlide].author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {jamaicaEventData.testimonials[activeSlide].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Navigation */}
            <div className="flex items-center justify-between mt-8 pt-4">
              <div className="flex gap-1.5">
                {jamaicaEventData.testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      activeSlide === idx ? "bg-isf-orange w-4" : "bg-slate-200 hover:bg-slate-350"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevSlide}
                  className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 p-2.5 rounded-full shadow-xs cursor-pointer flex items-center justify-center transition-colors"
                >
                  <ChevronLeft size={16} strokeWidth={2.5} />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 p-2.5 rounded-full shadow-xs cursor-pointer flex items-center justify-center transition-colors"
                >
                  <ChevronRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Conference Team */}
      <section className="py-16 bg-white/40 backdrop-blur-xs border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-isf-orange font-bold uppercase tracking-widest text-xs">
              INTERNATIONAL STARTUP FESTIVAL 2024
            </span>
            <h2 className="text-2xl font-bold font-baskerville text-slate-900">
              ISF Conference Team
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {jamaicaEventData.team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-isf-orange transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-orange-100 shadow-sm">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-bold text-sm text-slate-800 font-baskerville leading-tight">
                  {member.name}
                </h4>
                <p className="text-xs text-slate-500 mt-2 font-medium leading-snug">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Essential Document Downloads */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-isf-orange font-bold uppercase tracking-widest text-xs">
              RESOURCES & HANDOUTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-baskerville text-slate-900">
              Essential Document Downloads
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jamaicaEventData.downloads.map((doc, idx) => (
              <a
                key={idx}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-150 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-isf-orange hover:translate-y-[-2px] transition-all duration-300 group flex flex-col justify-between min-h-[140px]"
              >
                <div className="flex gap-4">
                  <div className="p-3 bg-orange-50 text-isf-orange rounded-lg shrink-0 flex items-center justify-center w-12 h-12">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 font-baskerville leading-snug group-hover:text-isf-orange transition-colors">
                    {doc.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 group-hover:text-isf-orange uppercase tracking-wider mt-4">
                  <Download size={14} />
                  Download File
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
