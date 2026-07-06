import React, { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Award, 
  Clock, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Info,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  jamaicaSpeakers, 
  jamaicaSchedule 
} from "./eventsData";

export function IsfJamaica2024() {
  const [speakerCount, setSpeakerCount] = useState(8);

  const toggleSpeakers = () => {
    if (speakerCount === 8) {
      setSpeakerCount(jamaicaSpeakers.length);
    } else {
      setSpeakerCount(8);
    }
  };

  const opportunities = [
    {
      title: "Near-Shore Operations",
      desc: "Perfect location for KPOs and tech support centers targeting the US market with highly skilled, English-speaking professionals."
    },
    {
      title: "Special Economic Zones",
      desc: "Lucrative tax benefits and duty-free concessions for global businesses establishing tech operations in Jamaica."
    },
    {
      title: "Strategic Investments",
      desc: "Partnerships in medical technology, smart farming, and digital infrastructure between Indian tech networks and Jamaican authorities."
    },
    {
      title: "Tax Incentives",
      desc: "Robust financial frameworks facilitating international trade, software development exports, and venture capital flows."
    }
  ];

  return (
    <div className="font-inter pb-20 pt-20 bg-slate-50 text-slate-800 antialiased">
      
      {/* Smooth Scroll Navigation Sub-Header */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 overflow-x-auto flex gap-6 md:gap-8 scrollbar-none justify-start md:justify-center text-xs md:text-sm font-semibold text-slate-600">
          <a href="#overview" className="hover:text-teal-600 transition-colors whitespace-nowrap">Overview</a>
          <a href="#speakers" className="hover:text-teal-600 transition-colors whitespace-nowrap">Dignitaries</a>
          <a href="#opportunities" className="hover:text-teal-600 transition-colors whitespace-nowrap">Investment Focus</a>
          <a href="#schedule" className="hover:text-teal-600 transition-colors whitespace-nowrap">Agenda</a>
          <a href="#venue" className="hover:text-teal-600 transition-colors whitespace-nowrap">Venue Details</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-start overflow-hidden px-4 md:px-8 py-20" id="overview">
        <div className="absolute inset-0">
          <img 
            src="/assets/images/pexels-introspectivedsgn-18441165.jpg" 
            alt="ISF Jamaica Background" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-slate-950/25 backdrop-blur-[1px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="bg-white/95 backdrop-blur-md border border-slate-200/60 p-8 md:p-12 rounded-3xl shadow-xl max-w-2xl text-slate-800 animate-fade-in-up">
            <span className="px-3.5 py-1 text-xs md:text-sm font-semibold bg-teal-100 text-teal-700 rounded-full inline-flex items-center gap-1.5 mb-5">
              <Calendar size={14} />
              June 5th - 9th, 2024 • Montego Bay, Jamaica
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-baskerville mb-5 text-slate-900 leading-tight">
              ISF Global <br /><span className="text-teal-600">CXO Summit Jamaica</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-8 max-w-xl leading-relaxed">
              Fostering near-shore trade opportunities, software development hubs, and key investment frameworks between Indian tech leaders and the Jamaican government.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                to="/registration/delegate" 
                className="inline-flex items-center justify-center text-xs md:text-sm font-bold uppercase tracking-wider bg-teal-600 hover:bg-teal-700 text-white px-6 py-3.5 rounded shadow-md transition-all duration-300"
              >
                Register Now <ArrowRight size={14} className="ml-2" />
              </Link>
              <a 
                href="#schedule" 
                className="inline-flex items-center justify-center text-xs md:text-sm font-bold uppercase tracking-wider border border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-3.5 rounded transition-all duration-300"
              >
                View Agenda
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro details */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-slate-950">
            India-Jamaica Partnership for Sustainable Agribusiness &amp; IT
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Bringing together top policy makers, global investors, and tech leaders to establish robust bilateral corridors, near-shore BPO operations, and tech centers in the Caribbean.
          </p>
        </div>
      </section>

      {/* Dignitaries & Speakers Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80" id="speakers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-semibold bg-teal-100 text-teal-700 rounded-full tracking-wider uppercase inline-block mb-3">
              Dignitaries
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Dignitaries at the Summit
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Bilateral ministerial delegates, high commissioners, and business pioneers keynoting the summit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jamaicaSpeakers.slice(0, speakerCount).map((speaker, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-teal-200">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/user-placeholder.png";
                    }}
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-base font-inter mb-1">
                  {speaker.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {speaker.role}
                </p>
              </div>
            ))}
          </div>

          {jamaicaSpeakers.length > 8 && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={toggleSpeakers}
                className="inline-flex items-center gap-1.5 px-6 py-3 border border-slate-300 rounded-xl text-xs md:text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {speakerCount === 8 ? (
                  <>
                    Show All Speakers ({jamaicaSpeakers.length}) <ChevronDown size={16} />
                  </>
                ) : (
                  <>
                    Show Less <ChevronUp size={16} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Investment Focus Area */}
      <section className="py-16 md:py-24 bg-white" id="opportunities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-semibold bg-teal-100 text-teal-700 rounded-full tracking-wider uppercase inline-block mb-3">
              Investment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              ISF Jamaica Opportunities
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Key strategic growth areas and incentives highlighted by JAMPRO and JSEZA during the summit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-white to-teal-50/10 border border-slate-200 rounded-3xl p-6 md:p-8 hover:border-teal-500 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule / Agenda Timeline */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80" id="schedule">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-semibold bg-teal-100 text-teal-700 rounded-full tracking-wider uppercase inline-block mb-3">
              Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Global CXO Summit Agenda
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Detailed event schedule including ministerial remarks, investment focus panels, and technology inaugurations.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
            <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-8">
              {jamaicaSchedule.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 bg-white border-2 border-teal-600 w-4 h-4 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                  
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 uppercase tracking-wider">
                      <Clock size={12} />
                      {item.time}
                    </span>
                    <h4 className="text-sm font-bold text-slate-800 leading-relaxed">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-16 md:py-24 bg-white" id="venue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1 text-xs font-semibold bg-teal-100 text-teal-700 rounded-full tracking-wider uppercase inline-block">
                Location
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
                Summit Venue
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm font-inter">Address</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      BIMS Medical School Campus &amp; Local SEZ Centers<br />
                      Montego Bay, Jamaica
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 flex-shrink-0">
                    <Info size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm font-inter">Dates</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      June 5th - June 9th, 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/registration/delegate"
                  className="inline-flex items-center justify-center text-xs md:text-sm font-bold uppercase tracking-wider bg-teal-600 hover:bg-teal-700 text-white px-6 py-3.5 rounded shadow-md transition-all duration-300"
                >
                  Register Now <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 min-h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57545.9625345719!2d-77.92556754048705!3d18.476222927237073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eda2a2de9412cf3%3A0x6a0a2dfcb056d05f!2sMontego%20Bay%2C%20Jamaica!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Montego Bay Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
