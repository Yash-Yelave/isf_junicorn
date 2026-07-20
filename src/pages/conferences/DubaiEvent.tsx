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
    <div className="font-outfit pb-20 pt-20 bg-white text-[#2c2c2c] antialiased">
      {/* Local Smooth Scroll Navigation Header */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-[#eaeaea] shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 overflow-x-auto flex gap-6 md:gap-8 scrollbar-none justify-start md:justify-center text-xs md:text-sm font-semibold text-[#1a1a1a]">
          <a href="#highlights" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Highlights</a>
          <a href="#schedule" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Schedule</a>
          <a href="#speakers" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Speakers</a>
          <a href="#panels" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Panels</a>
          <a href="#roundtables" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Roundtables</a>
          <a href="#junicorns" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Junicorns</a>
          <a href="#venue" className="hover:text-[#d94686] transition-colors whitespace-nowrap">Venue</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-start overflow-hidden px-4 md:px-8 py-12 md:py-16 bg-[linear-gradient(180deg,#FFF7E3_0%,#FFFFFF_100%)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img decoding="async" alt="Star decoration" className="absolute top-10 left-[15%] w-16 h-auto z-0 opacity-80" src="data:image/svg+xml,%3csvg%20width=\'68\'%20height=\'69\'%20viewBox=\'0%200%2068%2069\'%20fill=\'none\'%20xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath%20d=\'M33.6348%200L36.9279%2028.8643L60.608%2013.5544L41.0345%2034.2376L67.2698%2044.0108L39.5689%2040.938L48.6038%2068.4349L33.6348%2043.92L18.6658%2068.4349L27.7007%2040.938L-0.000247955%2044.0108L26.2351%2034.2376L6.66158%2013.5544L30.3416%2028.8643L33.6348%200Z\'%20fill=\'%23FFA2D2\'/%3e%3c/svg%3e" />
          <img decoding="async" alt="Ellipse decoration" className="absolute top-20 right-[15%] w-16 h-auto z-0 opacity-80" src="data:image/svg+xml,%3csvg%20width=\'63\'%20height=\'55\'%20viewBox=\'0%200%2063%2055\'%20fill=\'none\'%20xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath%20opacity=\'0.71\'%20d=\'M0.000395632%2015.9824C5.4098%208.13995%2013.5553%202.65882%2022.645%200.744764C31.7348%20-1.16929%2041.0241%200.640518%2048.4695%205.77606C55.9149%2010.9116%2060.9064%2018.9522%2062.3461%2028.129C63.7858%2037.3058%2061.5556%2046.8671%2056.1462%2054.7096L28.0733%2035.346L0.000395632%2015.9824Z\'%20fill=\'%237BA89F\'/%3e%3c/svg%3e" />
          <img decoding="async" alt="Polygon decoration" className="absolute bottom-10 left-[45%] transform -translate-x-1/2 w-12 h-auto z-0 opacity-80" src="data:image/svg+xml,%3csvg%20width=\'48\'%20height=\'57\'%20viewBox=\'0%200%2048%2057\'%20fill=\'none\'%20xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath%20d=\'M2.81334%2033.16C-0.937716%2030.8087%20-0.937715%2025.3437%202.81334%2022.9924L38.0164%200.925842C42.0124%20-1.579%2047.2031%201.29346%2047.2031%206.00962L47.2031%2050.1428C47.2031%2054.859%2042.0124%2057.7315%2038.0164%2055.2266L2.81334%2033.16Z\'%20fill=\'%23FFD89A\'/%3e%3c/svg%3e" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#063a31] inline-flex items-center gap-1.5 mb-6">
              <Calendar size={14} />
              Jan 9-11, 2026 • Dubai, UAE
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#063a31] leading-tight">
              Global Innovation <br />
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#D7438F_0%,#FEC305_44.71%,#026956_100%)]">Summit & Retreat</span>
            </h1>
            <p className="text-sm md:text-base text-[#4d4d4d] mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us for an unforgettable experience at Summit 2026! Hosted by ISF & Global CIO Circle at InterContinental Hotel Dubai Festival City by IHG.
            </p>
            <div className="flex justify-center">
              <a 
                href="#schedule" 
                className="inline-flex items-center justify-center text-sm font-bold bg-[linear-gradient(90deg,#D7438F_0%,#FEC305_44.71%,#026956_100%)] text-white px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
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
          <div className="text-center mb-16">
            <span className="px-4 py-1 text-xs font-bold bg-[#e6f2ef] text-[#016a56] rounded-full tracking-widest uppercase inline-block mb-4">
              Highlights
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#063a31]">
              Summit Highlights
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="text-center flex flex-col items-center group"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full mb-6 bg-[#fff7e3] text-[#d94686] transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_24px_rgba(217,70,134,0.15)]">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#063a31] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#4d4d4d] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Schedule Section */}
      <section className="py-16 md:py-24 bg-[#fafafa] border-t border-b border-[#eaeaea]" id="schedule">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-1 text-xs font-bold bg-[#e6f2ef] text-[#016a56] rounded-full tracking-widest uppercase inline-block mb-4">
              Timeline
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#063a31]">
              Event Agenda
            </h2>
            <p className="text-[#4d4d4d] text-base max-w-lg mx-auto mt-4">
              January 9–11, 2026 | InterContinental Dubai Festival City
            </p>
          </div>

          <div className="flex bg-white rounded-full p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-12">
            {schedule.map((day, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveScheduleDay(idx)}
                className={`flex-1 text-center py-3.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeScheduleDay === idx 
                    ? "bg-[#063a31] text-white shadow-md" 
                    : "text-[#4d4d4d] hover:text-[#063a31]"
                }`}
              >
                {day.day} ({day.date})
              </button>
            ))}
          </div>

          <div className="relative border-l-2 border-[#e6f2ef] pl-8 ml-4 space-y-8">
            {schedule[activeScheduleDay].events.map((ev, idx) => {
              const EventIcon = IconMap[ev.icon] || Clock;
              return (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-white border-4 border-[#016a56] rounded-full flex items-center justify-center transition-transform group-hover:scale-125 z-10 shadow-sm">
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col sm:flex-row justify-between sm:items-center gap-4 border border-transparent hover:border-[#e6f2ef]">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#fff7e3] text-[#cd8e05] group-hover:bg-[#d94686]/10 group-hover:text-[#d94686] transition-colors">
                        <EventIcon size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[#063a31] leading-tight">
                        {ev.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold bg-[#fafafa] border border-[#eaeaea] rounded-full px-4 py-2 self-start sm:self-auto text-[#4d4d4d]">
                      <Clock size={14} className="text-[#d94686]" />
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
            <span className="px-4 py-1 text-xs font-bold bg-[#fff7e3] text-[#cd8e05] rounded-full tracking-widest uppercase inline-block mb-4">
              Speakers
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#063a31]">
              Summit Speakers
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {speakers.slice(0, speakerCount).map((s, idx) => (
              <div 
                key={idx}
                className="bg-[#fafafa] rounded-2xl overflow-hidden hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col h-full text-center group p-6"
              >
                <div className="mx-auto w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-5 border-4 border-white shadow-sm bg-[#e6f2ef]">
                  <img 
                    src={s.image} 
                    alt={s.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/404";
                    }}
                  />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-base md:text-lg font-bold text-[#063a31] mb-1">
                    {s.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[#d94686] font-medium leading-relaxed">
                    {s.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {speakers.length > 12 && (
            <div className="text-center mt-16">
              <button 
                onClick={toggleSpeakers}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white bg-[#016a56] hover:bg-[#063a31] px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {speakerCount === 12 ? (
                  <>Show All Speakers ({speakers.length}) <ChevronDown size={18} /></>
                ) : (
                  <>Show Less <ChevronUp size={18} /></>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Panels Section */}
      <section className="py-16 md:py-24 bg-[#fafafa] border-t border-b border-[#eaeaea]" id="panels">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-4 py-1 text-xs font-bold bg-[#e6f2ef] text-[#016a56] rounded-full tracking-widest uppercase inline-block mb-4">
              Panels
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#063a31]">
              Specialized Panels
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {panels.map((p, idx) => (
              <div key={idx} className="bg-white border-l-4 border-l-[#d94686] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#cd8e05] tracking-widest uppercase">Sponsored by {p.sponsoredBy}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-[#063a31] mt-2">{p.title}</h3>
                  </div>
                  <span className="text-xs bg-[#fff7e3] text-[#cd8e05] px-4 py-1.5 rounded-full font-bold whitespace-nowrap">{p.time}</span>
                </div>
                {p.moderator && (
                  <div className="mb-5 text-sm font-medium">
                    <span className="text-[#4d4d4d]">Moderator:</span> <span className="text-[#d94686] font-bold">{p.moderator}</span>
                  </div>
                )}
                <div>
                  <p className="text-xs font-bold text-[#4d4d4d] mb-3 uppercase tracking-widest">Speakers</p>
                  <div className="flex flex-wrap gap-2.5">
                    {p.speakers.map((sp, i) => (
                      <span key={i} className="text-sm bg-[#fafafa] border border-[#eaeaea] text-[#2c2c2c] px-4 py-1.5 rounded-full font-medium">{sp}</span>
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
            <span className="px-4 py-1 text-xs font-bold bg-[#fff7e3] text-[#cd8e05] rounded-full tracking-widest uppercase inline-block mb-4">
              Discussions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#063a31]">
              Roundtables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roundtables.map((rt, idx) => (
              <div key={idx} className="bg-[#fafafa] rounded-3xl p-8 flex flex-col h-full hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group border border-transparent hover:border-[#eaeaea]">
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
            ))}
          </div>
        </div>
      </section>

      {/* Junicorns Section */}
      <section className="py-16 md:py-24 bg-[#fafafa] border-t border-b border-[#eaeaea]" id="junicorns">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-4 py-1 text-xs font-bold bg-[#e6f2ef] text-[#016a56] rounded-full tracking-widest uppercase inline-block mb-4">
              Rising Stars
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#063a31]">
              Junicorns Dubai & Austin
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {junicorns.map((j, idx) => (
              <div key={idx} className="bg-white border-l-4 border-l-[#cd8e05] rounded-xl p-5 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-300">
                <h4 className="text-base font-bold text-[#063a31] mb-2">{j.name}</h4>
                <p className="text-xs font-bold text-[#d94686] uppercase tracking-widest">{j.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
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
    </div>
  );
}
