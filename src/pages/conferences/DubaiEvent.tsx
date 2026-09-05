import { getImageUrl } from "../../utils/imageUtils";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
  ChevronUp,
  Presentation,
  Sparkles,
  Users,
  Rocket,
  ArrowRight
} from "lucide-react";
import { 
  schedule, 
  speakers, 
  panels, 
  roundtables 
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
  const location = useLocation();
  const isCohort2Dubai = location.pathname.includes("cohort-2-dubai");

  const [activeScheduleDay, setActiveScheduleDay] = useState(0);
  const [speakerCount, setSpeakerCount] = useState(12);
  const [activeHighlight, setActiveHighlight] = useState(3);

  const toggleSpeakers = () => {
    if (speakerCount === 12) {
      setSpeakerCount(speakers.length);
    } else {
      setSpeakerCount(12);
    }
  };

  const highlights = [
    { 
      title: "50+ Top Junicorns Pitching", 
      description: "Breakthrough innovations from India & UAE on a global stage.",
      icon: Presentation
    },
    { 
      title: "Inspiring Keynotes & Talks", 
      description: "Next-gen tech, AI, and disruptive innovation insights.",
      icon: Sparkles
    },
    { 
      title: "Industry Roundtables", 
      description: "Engage in dynamic discussions with AI pioneers shaping the industry's future.",
      icon: Users
    },
    { 
      title: "High-Impact Networking", 
      description: "Join a vibrant community of peers, mentors and partners dedicated to innovation and collaboration.",
      icon: Rocket
    }
  ];

  return (
    <div className="font-outfit pb-20 pt-20 bg-white text-[#2c2c2c] antialiased">
      {/* Local Smooth Scroll Navigation Header */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-[#eaeaea] shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 overflow-x-auto flex gap-6 md:gap-8 scrollbar-none justify-start md:justify-center text-xs md:text-sm font-semibold text-[#1a1a1a]">
          <a href="#highlights" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Highlights</a>
          <a href="#schedule" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Schedule</a>
          {!isCohort2Dubai && (
            <>
              <a href="#speakers" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Speakers</a>
              <a href="#panels" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Panels</a>
              <a href="#roundtables" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Roundtables</a>
              <a href="#venue" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Venue</a>
            </>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-start overflow-hidden px-4 md:px-8 py-12 md:py-16 bg-[linear-gradient(180deg,#FFF7E3_0%,#FFFFFF_100%)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img decoding="async" alt="Star decoration" className="absolute top-10 left-[15%] w-16 h-auto z-0 opacity-80" src="data:image/svg+xml,%3csvg%20width='68'%20height='69'%20viewBox='0%200%2068%2069'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M33.6348%200L36.9279%2028.8643L60.608%2013.5544L41.0345%2034.2376L67.2698%2044.0108L39.5689%2040.938L48.6038%2068.4349L33.6348%2043.92L18.6658%2068.4349L27.7007%2040.938L-0.000247955%2044.0108L26.2351%2034.2376L6.66158%2013.5544L30.3416%2028.8643L33.6348%200Z'%20fill='%23FFA2D2'/%3e%3c/svg%3e" />
          <img decoding="async" alt="Ellipse decoration" className="absolute top-20 right-[15%] w-16 h-auto z-0 opacity-80" src="data:image/svg+xml,%3csvg%20width='63'%20height='55'%20viewBox='0%200%2063%2055'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.71'%20d='M0.000395632%2015.9824C5.4098%208.13995%2013.5553%202.65882%2022.645%200.744764C31.7348%20-1.16929%2041.0241%200.640518%2048.4695%205.77606C55.9149%2010.9116%2060.9064%2018.9522%2062.3461%2028.129C63.7858%2037.3058%2061.5556%2046.8671%2056.1462%2054.7096L28.0733%2035.346L0.000395632%2015.9824Z'%20fill='%237BA89F'/%3e%3c/svg%3e" />
          <img decoding="async" alt="Polygon decoration" className="absolute bottom-10 left-[45%] transform -translate-x-1/2 w-12 h-auto z-0 opacity-80" src="data:image/svg+xml,%3csvg%20width='48'%20height='57'%20viewBox='0%200%2048%2057'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.81334%2033.16C-0.937716%2030.8087%20-0.937715%2025.3437%202.81334%2022.9924L38.0164%200.925842C42.0124%20-1.579%2047.2031%201.29346%2047.2031%206.00962L47.2031%2050.1428C47.2031%2054.859%2042.0124%2057.7315%2038.0164%2055.2266L2.81334%2033.16Z'%20fill='%23FFD89A'/%3e%3c/svg%3e" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e6f2ef] shadow-sm">
                <Calendar size={14} className="text-[#016a56]" />
                <span className="text-xs font-bold text-[#063a31] uppercase tracking-wider">Jan 9-11, 2026 • Dubai, UAE</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#063a31] leading-[1.1]">
                Global Innovation <br />
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#016a56_0%,#cd8e05_100%)]">Summit &amp; Retreat</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#4d4d4d] max-w-2xl font-normal leading-relaxed">
                Connect with global investors, tech leaders, and ecosystem builders in the heart of Dubai for 3 days of high-impact networking, keynotes, and strategic roundtables.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#schedule"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#016a56] hover:bg-[#063a31] text-white font-bold text-sm shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  View Schedule <ArrowRight size={16} />
                </a>
                {!isCohort2Dubai && (
                  <a 
                    href="#speakers"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#063a31] border border-[#eaeaea] font-bold text-sm shadow-sm transition-all duration-300"
                  >
                    Explore Speakers
                  </a>
                )}
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-[#e6f2ef] rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,#FFA2D2_0%,transparent_70%)] opacity-30 pointer-events-none"></div>
                
                <div className="space-y-4">
                  <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#fff7e3] text-[#cd8e05] rounded-full inline-block">
                    Premier Global Gathering
                  </span>
                  <h3 className="text-2xl font-bold text-[#063a31]">
                    InterContinental Hotel Dubai
                  </h3>
                  <p className="text-xs text-[#4d4d4d] leading-relaxed">
                    Festival City by IHG — hosting 500+ delegates, CXOs, and Middle East VCs assembled for cross-border collaboration.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-b border-[#eaeaea] py-4 text-left">
                  <div>
                    <span className="block text-2xl font-bold text-[#016a56]">500+</span>
                    <span className="text-[11px] text-[#4d4d4d] uppercase font-semibold">Global Delegates</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-[#cd8e05]">50+</span>
                    <span className="text-[11px] text-[#4d4d4d] uppercase font-semibold">Pitching Startups</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#063a31]">
                    <CheckCircle2 size={16} className="text-[#016a56]" />
                    <span>Live prototype showcases to VC funds</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#063a31]">
                    <CheckCircle2 size={16} className="text-[#016a56]" />
                    <span>Cross-border trade &amp; ecosystem integration</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights Interactive Grid */}
      <section className="py-16 md:py-24 bg-white" id="highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-4 py-1 text-xs font-bold bg-[#e6f2ef] text-[#016a56] rounded-full tracking-widest uppercase inline-block mb-4">
              Key Focus Areas
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#063a31]">
              Summit Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#fafafa] border border-[#eaeaea] hover:border-[#016a56]/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#e6f2ef] flex items-center justify-center text-[#016a56] group-hover:bg-[#016a56] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-[#063a31]">{h.title}</h3>
                    <p className="text-xs text-[#4d4d4d] leading-relaxed">{h.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 md:py-24 bg-[#fafafa] border-t border-b border-[#eaeaea]" id="schedule">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-4 py-1 text-xs font-bold bg-[#fff7e3] text-[#cd8e05] rounded-full tracking-widest uppercase inline-block mb-4">
              Agenda
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#063a31]">
              Event Schedule
            </h2>
          </div>

          {/* Day Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white p-1.5 rounded-2xl border border-[#eaeaea] shadow-sm">
              {schedule.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScheduleDay(idx)}
                  className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                    activeScheduleDay === idx 
                      ? "bg-[#016a56] text-white shadow-md" 
                      : "text-[#4d4d4d] hover:text-[#063a31]"
                  }`}
                >
                  {s.day} ({s.date})
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-4 max-w-3xl mx-auto text-left">
            {schedule[activeScheduleDay].events.map((ev, idx) => {
              const EventIcon = IconMap[ev.icon] || Clock;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#eaeaea] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#e6f2ef] text-[#016a56] flex items-center justify-center shrink-0 mt-0.5">
                    <EventIcon size={20} />
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm md:text-base font-bold text-[#063a31]">{ev.title}</h4>
                      <span className="text-xs font-bold text-[#cd8e05] bg-[#fff7e3] px-2.5 py-1 rounded-full w-fit">
                        {ev.time}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {!isCohort2Dubai && (
        <>
          {/* Speakers Section */}
          <section className="py-16 md:py-24 bg-white" id="speakers">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="px-4 py-1 text-xs font-bold bg-[#e6f2ef] text-[#016a56] rounded-full tracking-widest uppercase inline-block mb-4">
                  Thought Leaders
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#063a31]">
                  Featured Speakers
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {speakers.slice(0, speakerCount).map((sp, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#fafafa] border border-[#eaeaea] rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-2 border-white shadow-md bg-slate-200">
                        <img 
                          src={sp.image} 
                          alt={sp.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = "/assets/images/user-placeholder.png";
                          }}
                        />
                      </div>
                      <h3 className="text-xs md:text-sm font-bold text-[#063a31] leading-snug">{sp.name}</h3>
                    </div>
                    <p className="text-[10px] text-[#4d4d4d] font-medium leading-relaxed mt-2 border-t border-[#eaeaea] pt-2 line-clamp-3">
                      {sp.role}
                    </p>
                  </div>
                ))}
              </div>

              {speakers.length > 12 && (
                <div className="text-center mt-12">
                  <button 
                    onClick={toggleSpeakers}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#eaeaea] hover:border-[#016a56] text-[#063a31] font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-300"
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

          {/* Panel Discussions */}
          <section className="py-16 md:py-24 bg-[#fafafa] border-t border-b border-[#eaeaea]" id="panels">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="px-4 py-1 text-xs font-bold bg-[#fff7e3] text-[#cd8e05] rounded-full tracking-widest uppercase inline-block mb-4">
                  Strategic Dialogues
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#063a31]">
                  Panel Discussions
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {panels.map((p, idx) => (
                  <div key={idx} className="bg-white border border-[#eaeaea] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-3 mb-6">
                      <span className="text-[10px] font-bold text-[#cd8e05] uppercase tracking-widest bg-[#fff7e3] px-2.5 py-1 rounded-md inline-block">
                        {p.time}
                      </span>
                      <h3 className="text-lg font-bold text-[#063a31] leading-snug">{p.title}</h3>
                    </div>
                    
                    <div className="border-t border-[#eaeaea] pt-4 space-y-2">
                      <p className="text-xs font-semibold text-[#016a56]"><span className="text-[#4d4d4d] font-normal">Moderator:</span> {p.moderator}</p>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-[#4d4d4d] uppercase tracking-wider block">Panelists:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {p.speakers.map((sp, i) => (
                            <span key={i} className="text-[11px] text-[#2c2c2c] bg-[#fafafa] px-2 py-0.5 rounded border border-[#eaeaea]">{sp}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Roundtables */}
          <section className="py-16 md:py-24 bg-white" id="roundtables">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="px-4 py-1 text-xs font-bold bg-[#e6f2ef] text-[#016a56] rounded-full tracking-widest uppercase inline-block mb-4">
                  Roundtables
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#063a31]">
                  Industry Roundtables
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {roundtables.map((rt, idx) => (
                  <div key={idx} className="bg-[#fafafa] border border-[#eaeaea] hover:border-[#016a56]/40 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#063a31] mb-3 group-hover:text-[#016a56] transition-colors">{rt.title}</h3>
                      <p className="text-[#4d4d4d] mb-8 flex-grow leading-relaxed">{rt.desc}</p>
                      <div className="border-t border-[#eaeaea] pt-6">
                        <p className="text-sm font-medium text-[#2c2c2c] mb-4"><span className="text-[#4d4d4d]">Facilitator:</span> <span className="font-bold text-[#d94686]">{rt.facilitator}</span></p>
                        <div className="flex flex-wrap gap-2">
                          {Array.from(new Set(rt.speakers)).map((sp, i) => (
                            <span key={i} className="text-xs text-[#2c2c2c] bg-white border border-[#eaeaea] px-3 py-1 rounded-full font-medium shadow-sm">{sp as string}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}



      {/* Venue Section */}
      {!isCohort2Dubai && (
        <section className="py-16 md:py-32 bg-white" id="venue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="px-4 py-1 text-xs font-bold bg-[#fff7e3] text-[#cd8e05] rounded-full tracking-widest uppercase inline-block mb-4">
                Venue
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#063a31]">
                InterContinental Hotel Dubai
              </h2>
              <p className="text-[#4d4d4d] text-base mt-4 font-medium">Festival City by IHG</p>
            </div>
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#e6f2ef] relative group cursor-pointer bg-[#fafafa]">
              <div className="aspect-video w-full flex items-center justify-center">
                <MapPin size={64} className="text-[#016a56] opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 bg-[#063a31]/5 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
