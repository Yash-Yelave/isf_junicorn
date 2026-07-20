import React, { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  UserPlus, 
  Lightbulb, 
  Coffee, 
  Utensils, 
  Heart, 
  Clock, 
  ExternalLink,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { 
  schedule, 
  speakers, 
  panels, 
  roundtables, 
  junicorns 
} from "./dubaiEventData";

const IconMap: Record<string, React.ComponentType<any>> = {
  UserPlus,
  Lightbulb,
  Coffee,
  Utensils,
  Award,
  Heart,
  Clock
};

export function DubaiEvent() {
  const [activeScheduleDay, setActiveScheduleDay] = useState(0);
  const [speakerCount, setSpeakerCount] = useState(12);

  const toggleSpeakers = () => {
    if (speakerCount === 12) {
      setSpeakerCount(speakers.length);
    } else {
      setSpeakerCount(12);
    }
  };

  const highlights = [
    { title: "50+ Top Junicorns Pitching", description: "Breakthrough innovations from India & UAE on a global stage." },
    { title: "Inspiring Keynotes & Talks", description: "Next-gen tech, AI, and disruptive innovation insights." },
    { title: "Industry Roundtables", description: "Engage in dynamic discussions with AI pioneers shaping the industry's future." },
    { title: "High-Impact Networking", description: "Join a vibrant community of peers, mentors and partners dedicated to innovation and collaboration." }
  ];

  return (
    <div className="font-inter pb-20 pt-20 bg-slate-50 text-slate-800 antialiased">
      {/* Local Smooth Scroll Navigation Header */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 overflow-x-auto flex gap-6 md:gap-8 scrollbar-none justify-start md:justify-center text-xs md:text-sm font-semibold text-slate-600">
          <a href="#highlights" className="hover:text-isf-orange transition-colors whitespace-nowrap">Highlights</a>
          <a href="#schedule" className="hover:text-isf-orange transition-colors whitespace-nowrap">Schedule</a>
          <a href="#speakers" className="hover:text-isf-orange transition-colors whitespace-nowrap">Speakers</a>
          <a href="#panels" className="hover:text-isf-orange transition-colors whitespace-nowrap">Panels</a>
          <a href="#roundtables" className="hover:text-isf-orange transition-colors whitespace-nowrap">Roundtables</a>
          <a href="#junicorns" className="hover:text-isf-orange transition-colors whitespace-nowrap">Junicorns</a>
          <a href="#venue" className="hover:text-isf-orange transition-colors whitespace-nowrap">Venue</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-start overflow-hidden px-4 md:px-8 py-12 md:py-16">
        <div className="absolute inset-0">
          <img 
            src="/assets/images/dubai-hero.jpg" 
            alt="Dubai Background" 
            className="w-full h-full object-cover object-center" 
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="bg-white/95 backdrop-blur-md border border-slate-200/60 p-6 md:p-8 rounded-2xl shadow-xl max-w-xl text-slate-800 animate-fade-in-up">
            <span className="px-3 py-0.5 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full inline-flex items-center gap-1.5 mb-3">
              <Calendar size={13} />
              Jan 9-11, 2026 • Dubai, UAE
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-baskerville mb-3 text-slate-900 leading-tight">
              Global Innovation <br />
              <span className="text-isf-orange">Summit & Retreat</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mb-5 max-w-lg leading-relaxed">
              Join us for an unforgettable experience at Summit 2026! Hosted by ISF & Global CIO Circle at InterContinental Hotel Dubai Festival City by IHG.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <a 
                href="#schedule" 
                className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider bg-isf-orange hover:bg-isf-orange-hover text-white px-5 py-3 rounded shadow-md transition-all duration-300"
              >
                View Schedule
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-white" id="highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Summit Highlights
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="border p-6 rounded-2xl shadow-sm transition-all duration-300 flex flex-col bg-gradient-to-br from-white to-amber-50/30 border-amber-200/60 hover:border-amber-400 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)]"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-4 bg-amber-100 text-amber-600">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-inter">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Schedule Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80" id="schedule">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Event Agenda
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto mt-2">
              January 9–11, 2026 | InterContinental Dubai Festival City
            </p>
          </div>

          <div className="flex bg-white rounded-xl p-1.5 border border-slate-200 shadow-sm mb-10">
            {schedule.map((day, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveScheduleDay(idx)}
                className={`flex-1 text-center py-3 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 ${
                  activeScheduleDay === idx 
                    ? "bg-isf-orange text-white shadow-sm" 
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {day.day} ({day.date})
              </button>
            ))}
          </div>

          <div className="relative border-l border-slate-200 pl-6 ml-3 space-y-6">
            {schedule[activeScheduleDay].events.map((ev, idx) => {
              const EventIcon = IconMap[ev.icon] || Clock;
              return (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[35px] top-1.5 w-[18px] h-[18px] bg-white border-2 border-isf-orange rounded-full flex items-center justify-center transition-transform group-hover:scale-110 z-10 shadow-sm">
                    <div className="w-1.5 h-1.5 bg-isf-orange rounded-full"></div>
                  </div>
                  <div className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-white border-slate-200/80 hover:border-slate-300">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center border rounded-xl bg-slate-50 text-slate-500 border-slate-200 group-hover:bg-isf-hover-bg group-hover:text-isf-orange transition-colors">
                        <EventIcon size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 leading-tight">
                        {ev.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold border rounded-lg px-3 py-1.5 self-start sm:self-auto bg-slate-50 border-slate-200 text-slate-500">
                      <Clock size={12} />
                      <span>{ev.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 md:py-24 bg-white" id="speakers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Speakers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Summit Speakers
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {speakers.slice(0, speakerCount).map((s, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full text-center group p-5 border-transparent hover:border-slate-300"
              >
                <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border border-slate-200 bg-slate-100">
                  <img 
                    src={s.image} 
                    alt={s.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/404";
                    }}
                  />
                </div>
                <div className="space-y-1.5 flex-grow flex flex-col justify-center">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-baskerville leading-tight">
                    {s.name}
                  </h3>
                  <p className="text-[10px] font-semibold text-slate-500 leading-snug mt-1">
                    {s.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {speakers.length > 12 && (
            <div className="text-center mt-12">
              <button 
                onClick={toggleSpeakers}
                className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold uppercase tracking-wider border border-isf-orange text-isf-orange hover:bg-isf-hover-bg px-6 py-3 rounded-lg transition-all duration-300"
              >
                {speakerCount === 12 ? (
                  <>Show All Speakers ({speakers.length}) <ChevronDown size={16} /></>
                ) : (
                  <>Show Less <ChevronUp size={16} /></>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Panels Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80" id="panels">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-600 rounded-full tracking-wider uppercase inline-block mb-3">
              Panels
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Specialized Panels
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {panels.map((p, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-blue-500 tracking-wider uppercase">Sponsored by {p.sponsoredBy}</span>
                    <h3 className="text-xl font-bold text-slate-900 font-baskerville mt-1">{p.title}</h3>
                  </div>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold">{p.time}</span>
                </div>
                {p.moderator && (
                  <div className="mb-4 text-sm font-semibold">
                    Moderator: <span className="text-isf-orange">{p.moderator}</span>
                  </div>
                )}
                <div>
                  <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Speakers</p>
                  <div className="flex flex-wrap gap-2">
                    {p.speakers.map((sp, i) => (
                      <span key={i} className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1 rounded-full">{sp}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roundtables Section */}
      <section className="py-16 md:py-24 bg-white" id="roundtables">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold bg-purple-500/10 text-purple-600 rounded-full tracking-wider uppercase inline-block mb-3">
              Discussions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Roundtables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roundtables.map((rt, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 font-baskerville mb-2">{rt.title}</h3>
                <p className="text-sm text-slate-600 mb-6 flex-grow">{rt.desc}</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold text-slate-700 mb-2"><span className="text-slate-400">Facilitator:</span> {rt.facilitator}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {Array.from(new Set(rt.speakers)).map((sp, i) => (
                      <span key={i} className="text-[10px] text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">{sp as string}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Junicorns Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80" id="junicorns">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Rising Stars
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Junicorns Dubai & Austin
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {junicorns.map((j, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between hover:border-isf-orange transition-colors">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{j.name}</h4>
                  <p className="text-[10px] font-semibold text-isf-orange uppercase tracking-wider">{j.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-16 md:py-24 bg-white" id="venue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-600 rounded-full tracking-wider uppercase inline-block mb-3">
              Venue
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              InterContinental Hotel Dubai
            </h2>
            <p className="text-slate-500 text-sm mt-2">Festival City by IHG</p>
          </div>
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative group cursor-pointer">
            <div className="aspect-video w-full bg-slate-200 flex items-center justify-center">
              <MapPin size={48} className="text-slate-400" />
            </div>
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
