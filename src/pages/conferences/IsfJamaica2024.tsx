import { useState } from "react";
import { Calendar, MapPin, CheckCircle, ChevronLeft, ChevronRight, Quote, FileText, Download, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { jamaicaEventData } from "./jamaicaData";

export function IsfJamaica2024() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<"AM" | "PM">("AM");

  // De-duplicate items at raw level
  const uniqueAgenda = jamaicaEventData.agenda.filter((item, idx, self) => {
    const descStr = item.desc.join(" ").trim().toLowerCase();
    return self.findIndex(t => 
      t.time.trim().toLowerCase() === item.time.trim().toLowerCase() && 
      t.desc.join(" ").trim().toLowerCase() === descStr
    ) === idx;
  });

  // Group unique agenda items by time
  const groupedAgenda: { time: string; title: string; items: string[]; isBreak: boolean }[] = [];
  
  uniqueAgenda.forEach(item => {
    const existing = groupedAgenda.find(g => g.time.toLowerCase() === item.time.toLowerCase());
    if (existing) {
      item.desc.forEach(d => {
        if (!existing.items.includes(d)) {
          existing.items.push(d);
        }
      });
    } else {
      groupedAgenda.push({
        time: item.time,
        title: item.title,
        items: [...item.desc],
        isBreak: item.isBreak
      });
    }
  });

  const getCleanItems = (items: string[]) => {
    const clean: string[] = [];
    items.forEach(item => {
      if (clean.some(c => c.includes(item))) return;
      const subIdx = clean.findIndex(c => item.includes(c));
      if (subIdx !== -1) {
        clean[subIdx] = item;
      } else {
        clean.push(item);
      }
    });
    return clean;
  };

  // Filter AM (9:30 am to 12:00 pm) and PM (12:30 pm onwards)
  const amAgenda = groupedAgenda.filter(item => {
    const t = item.time.toLowerCase();
    return t.includes("am") || t.startsWith("12:00");
  });

  const pmAgenda = groupedAgenda.filter(item => {
    const t = item.time.toLowerCase();
    return !t.includes("am") && !t.startsWith("12:00");
  });

  const currentAgenda = activeTab === "AM" ? amAgenda : pmAgenda;

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
    <div className="font-inter pb-16 pt-20 bg-gradient-to-br from-orange-50/20 via-white to-amber-50/10 min-h-screen">

      {/* 1. Header Banner */}
      <section 
        className="text-white pt-24 pb-32 md:pt-32 md:pb-40 relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/assets/images/jamaica-beach.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/60 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-isf-orange font-bold uppercase tracking-widest text-xs block">
            ISF GLOBAL CXO SUMMIT
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-baskerville text-white leading-tight tracking-tight">
            ISF 2024{" "}
            <span className="whitespace-nowrap italic">
              <span className="text-white">Jam</span>
              <span className="text-amber-300">ai</span>
              <span className="text-white">ca</span>
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Montego Bay — June 5th to 9th, 2024<br />
            <span className="text-amber-100/80 font-baskerville italic font-medium">Empowering the Next Wave of Caribbean Innovation & Global Capital</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <Calendar size={16} className="text-isf-orange" />
              June 5 - 9, 2024
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
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

        {/* Shape Divider - Wave effect at the bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[75px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C150,90 350,120 600,120 C850,120 1050,90 1200,0 L1200,120 L0,120 Z" className="fill-orange-50/20"></path>
            <path d="M0,30 C300,120 600,120 900,30 C1050,0 1150,0 1200,30 L1200,120 L0,120 Z" className="fill-white/70 opacity-40"></path>
            <path d="M0,50 C300,140 900,40 1200,80 L1200,120 L0,120 Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="py-12 max-w-4xl mx-auto px-4">
        <div className="bg-white border border-slate-150 rounded-2xl p-8 md:p-12 shadow-sm text-center space-y-6">
          <h2 className="text-2xl font-bold font-baskerville text-slate-800">
            Unlock Caribbean Tech and Investment Access
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            Join us for exciting networking with Global CEOs, Top Investors & Mentors and Brilliant Startups. This is your premium chance to invest in Jamaica and build near-shore KPO/tech capabilities for the US market.
          </p>
        </div>
      </section>

      {/* 3. Opportunities */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-md border border-slate-150 rounded-2xl p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
          <div className="bg-orange-50/30 border border-orange-100 p-8 rounded-xl space-y-4 shadow-xxs">
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
          <span className="text-isf-orange font-bold uppercase tracking-widest text-xs">
            CONFERENCE SCHEDULE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-baskerville">
            Global CXO Summit Agenda
          </h2>
          <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
        </div>

        {/* AM / PM Toggle Tabs */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("AM")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "AM" 
                ? "bg-isf-orange text-white shadow-sm" 
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            Morning Session (AM)
          </button>
          <button
            onClick={() => setActiveTab("PM")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "PM" 
                ? "bg-isf-orange text-white shadow-sm" 
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            Afternoon Session (PM)
          </button>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-orange-100 ml-4 md:ml-6 space-y-8 py-4 transition-all duration-500">
          {currentAgenda.map((item, idx) => {
            const cleanItems = getCleanItems(item.items);
            return (
              <div key={idx} className="relative pl-6 md:pl-8 group">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-isf-orange bg-white group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-isf-orange group-hover:bg-isf-orange-hover animate-pulse"></div>
                </div>

                {/* Agenda Card */}
                <div 
                  className={`border rounded-xl p-5 md:p-6 shadow-xxs hover:shadow-sm transition-all duration-300 border-l-4 ${
                    item.isBreak 
                      ? "bg-orange-50/50 border-orange-200 border-l-isf-orange" 
                      : "bg-white border-slate-150 border-l-orange-300 hover:border-l-isf-orange hover:border-isf-orange"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-isf-orange uppercase tracking-wider">
                      <Clock size={14} />
                      {item.time}
                    </span>
                    {item.title && item.title !== item.time && !item.isBreak && (
                      <span className="text-xxs font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded">
                        {item.title}
                      </span>
                    )}
                  </div>
                  {item.title && item.title !== item.time && item.isBreak && (
                    <h4 className="text-sm font-bold text-isf-orange font-baskerville mb-1">
                      {item.title}
                    </h4>
                  )}
                  <div className="mt-2 text-xs md:text-sm text-slate-700 font-medium leading-relaxed">
                    {cleanItems.length === 1 ? (
                      <p>{cleanItems[0]}</p>
                    ) : (
                      <ul className="list-disc pl-4 space-y-1.5">
                        {cleanItems.map((sub, sIdx) => (
                          <li key={sIdx}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Dignitaries */}
      <section className="py-20 bg-[#FFF3E8] border-t border-b border-orange-100/40">
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
      <section className="py-20 bg-gradient-to-b from-white/40 via-orange-50/15 to-transparent">
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
      <section className="py-20 bg-gradient-to-br from-orange-50/50 via-amber-50/40 to-yellow-50/25 border-t border-b border-amber-100/20">
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
      <section className="py-20 bg-gradient-to-t from-orange-50/30 via-white to-transparent">
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
