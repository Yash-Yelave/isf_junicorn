import React, { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  UserPlus, 
  Lightbulb, 
  Coffee, 
  Play, 
  Utensils, 
  Heart, 
  Shield, 
  Music, 
  Clock, 
  ExternalLink, 
  Search, 
  Video,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { 
  speakers, 
  junicorns, 
  angels, 
  usaCommittee, 
  leadershipTeam, 
  managementTeam, 
  schedule, 
  keyPartnerships, 
  supportingOrganizations, 
  junicornProjectPartners, 
  hotels 
} from "./summitData";

const IconMap: Record<string, React.ComponentType<any>> = {
  UserPlus,
  Lightbulb,
  Coffee,
  Play,
  Utensils,
  Award,
  Heart,
  Shield,
  Music,
  Clock
};

export function IsfAiSummit() {
  const [activeScheduleDay, setActiveScheduleDay] = useState(0);
  const [speakerCount, setSpeakerCount] = useState(8);
  const [junicornSearch, setJunicornSearch] = useState("");
  const [activeHighlightTab, setActiveHighlightTab] = useState<"junicorn" | "ai">("junicorn");

  const toggleSpeakers = () => {
    if (speakerCount === 8) {
      setSpeakerCount(speakers.length);
    } else {
      setSpeakerCount(8);
    }
  };

  const filteredJunicorns = junicorns.filter(j => 
    j.name.toLowerCase().includes(junicornSearch.toLowerCase()) ||
    j.project.name.toLowerCase().includes(junicornSearch.toLowerCase()) ||
    j.project.description.toLowerCase().includes(junicornSearch.toLowerCase()) ||
    j.location.place.toLowerCase().includes(junicornSearch.toLowerCase())
  );

  const junicornHighlights = [
    { title: "40+ Top Junicorns Pitching", description: "Breakthrough innovations from India & USA on a global stage." },
    { title: "Inspiring Keynotes & Talks", description: "Next-gen tech, AI, and disruptive innovation insights." },
    { title: "Hands-On Orientation Sessions", description: "Dive deep into the startup ecosystem with practical guidance." },
    { title: "Student Innovation Showcase", description: "Spotlighting tomorrow’s changemakers and their ideas." },
    { title: "Best Startup Pitch Awards", description: "Celebrating game-changing ideas and visionary startups." },
    { title: "Exclusive Visits", description: "Explore NASA, local museums, and more pre/post-summit." },
    { title: "High-Impact Networking", description: "Connect with global mentors, investors, and leaders." }
  ];

  const aiHighlights = [
    { title: "Industry Roundtables with AI Trailblazers", description: "Engage in dynamic discussions with AI pioneers shaping the industry's future." },
    { title: "High-Impact Networking", description: "Connect with innovators, leaders, and visionaries in AI." },
    { title: "Exclusive Investor Connect Sessions", description: "Pitch to and network with top-tier investors in AI." },
    { title: "Inspiring Keynotes", description: "Hear from industry leaders driving the AI revolution." }
  ];

  const roundtableTopics = [
    { title: "Next-Gen Health", desc: "AI Across the Continuum", color: "border-emerald-200 hover:border-emerald-500 text-emerald-700 bg-emerald-50/30" },
    { title: "Capital Meets Innovation", desc: "AI Investor Connect", color: "border-amber-200 hover:border-amber-500 text-amber-700 bg-amber-50/30" },
    { title: "AI Everywhere", desc: "Cross-Industry Impact", color: "border-blue-200 hover:border-blue-500 text-blue-700 bg-blue-50/30" },
    { title: "GCC Without Borders", desc: "AI, Operations & Data Privacy", color: "border-indigo-200 hover:border-indigo-500 text-indigo-700 bg-indigo-50/30" },
    { title: "Future Forward", desc: "AI, Work, & What Comes Next", color: "border-purple-200 hover:border-purple-500 text-purple-700 bg-purple-50/30" }
  ];

  return (
    <div className="font-inter pb-20 pt-20 bg-slate-50 text-slate-800 antialiased">
      
      {/* Local Smooth Scroll Navigation Header */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 overflow-x-auto flex gap-6 md:gap-8 scrollbar-none justify-start md:justify-center text-xs md:text-sm font-semibold text-slate-600">
          <a href="#highlights" className="hover:text-isf-orange transition-colors whitespace-nowrap">Highlights</a>
          <a href="#livestream" className="hover:text-isf-orange transition-colors whitespace-nowrap">Livestream</a>
          <a href="#key-topics" className="hover:text-isf-orange transition-colors whitespace-nowrap">Key Topics</a>
          <a href="#junicorns" className="hover:text-isf-orange transition-colors whitespace-nowrap">Junicorns</a>
          <a href="#speakers" className="hover:text-isf-orange transition-colors whitespace-nowrap">Speakers</a>
          <a href="#schedule" className="hover:text-isf-orange transition-colors whitespace-nowrap">Schedule</a>
          <a href="#angels" className="hover:text-isf-orange transition-colors whitespace-nowrap">Idea Angels</a>
          <a href="#usa-team" className="hover:text-isf-orange transition-colors whitespace-nowrap">USA Committee</a>
          <a href="#junicorn-team" className="hover:text-isf-orange transition-colors whitespace-nowrap">Project Teams</a>
          <a href="#venue" className="hover:text-isf-orange transition-colors whitespace-nowrap">Venue & City</a>
          <a href="#partners" className="hover:text-isf-orange transition-colors whitespace-nowrap">Partners</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-start overflow-hidden px-4 md:px-8 py-24">
        <div className="absolute inset-0">
          <img 
            src="/assets/images/pexels-introspectivedsgn-18441165.jpg" 
            alt="ISF Global Background" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-slate-950/15 backdrop-blur-[1px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="bg-white/95 backdrop-blur-md border border-slate-200/60 p-8 md:p-12 rounded-3xl shadow-xl max-w-2xl text-slate-800 animate-fade-in-up">
            <span className="px-3.5 py-1 text-xs md:text-sm font-semibold bg-isf-orange/10 text-isf-orange rounded-full inline-flex items-center gap-1.5 mb-5">
              <Calendar size={14} />
              May 29-30, 2025 • Texas, USA
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-baskerville mb-5 text-slate-900 leading-tight">
              ISF Global Junicorn <br />
              <span className="text-isf-orange">&amp; AI Summit 2025</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-8 max-w-xl leading-relaxed">
              Join us for two power-packed days of action, insight, and inspiration with the world's top minds in AI, innovation, and entrepreneurship at Texas State University.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="#schedule" 
                className="inline-flex items-center justify-center text-xs md:text-sm font-bold uppercase tracking-wider bg-isf-orange hover:bg-isf-orange-hover text-white px-6 py-3.5 rounded shadow-md transition-all duration-300"
              >
                View Schedule
              </a>
              <a 
                href="#livestream" 
                className="inline-flex items-center justify-center text-xs md:text-sm font-bold uppercase tracking-wider border border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-3.5 rounded transition-all duration-300"
              >
                Join Livestream
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
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Get ready for an electrifying experience that brings together the brightest minds and boldest ideas!
            </p>
          </div>

          {/* Highlights Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              <button 
                onClick={() => setActiveHighlightTab("junicorn")}
                className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 ${
                  activeHighlightTab === "junicorn" 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Junicorn Summit (Day 1)
              </button>
              <button 
                onClick={() => setActiveHighlightTab("ai")}
                className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 ${
                  activeHighlightTab === "ai" 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Global AI Summit (Day 2)
              </button>
            </div>
          </div>

          {/* Highlights Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeHighlightTab === "junicorn" ? junicornHighlights : aiHighlights).map((item, idx) => {
              const isJunicorn = activeHighlightTab === "junicorn";
              const cardBg = isJunicorn ? "bg-gradient-to-br from-white to-amber-50/30" : "bg-gradient-to-br from-white to-blue-50/30";
              const borderCol = isJunicorn ? "border-amber-200/60 hover:border-amber-400" : "border-blue-200/60 hover:border-blue-400";
              const shadowCol = isJunicorn ? "hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)]" : "hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)]";
              const iconBg = isJunicorn ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600";
              return (
                <div 
                  key={idx}
                  className={`border p-6 rounded-2xl shadow-sm transition-all duration-300 flex flex-col justify-between ${cardBg} ${borderCol} ${shadowCol}`}
                >
                  <div>
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${iconBg}`}>
                      <CheckCircle2 size={22} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-inter">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Livestream Details */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-b border-slate-200/80" id="livestream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/20 border border-indigo-100 rounded-3xl p-8 md:p-10 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl">
                <Video size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-baskerville text-slate-900">
                  Zoom Livestream Webcast
                </h2>
                <p className="text-slate-500 text-xs md:text-sm">
                  Join us virtually for the ISF Global Junicorn &amp; AI Summit 2025.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="p-5 rounded-2xl bg-white border border-amber-200/60 hover:border-amber-300 hover:shadow-sm transition-all duration-300">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-1">
                  DAY 1
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-3 font-baskerville">
                  Junicorn Summit
                </h3>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-semibold text-slate-900">May 29, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Webinar ID:</span>
                    <span className="font-semibold text-slate-900">811 4522 9628</span>
                  </div>
                </div>
                <a 
                  href="https://zoom.us" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg text-xs transition-colors"
                >
                  Join Day 1 Webinar <ExternalLink size={12} className="ml-1.5" />
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-blue-200/60 hover:border-blue-300 hover:shadow-sm transition-all duration-300">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block mb-1">
                  DAY 2
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-3 font-baskerville">
                  Global AI Summit
                </h3>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-semibold text-slate-900">May 30, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Webinar ID:</span>
                    <span className="font-semibold text-slate-900">840 4819 9820</span>
                  </div>
                </div>
                <a 
                  href="https://zoom.us" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs transition-colors"
                >
                  Join Day 2 Webinar <ExternalLink size={12} className="ml-1.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roundtable Discussions / Key Topics */}
      <section className="py-16 md:py-24 bg-white" id="key-topics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Key Topics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Roundtable Discussions
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Engage in thought-provoking discussions on AI's transformative impact across key industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {roundtableTopics.map((topic, idx) => (
              <div 
                key={idx}
                className={`border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-56 ${topic.color}`}
              >
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-75">
                    TOPIC 0{idx+1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-baskerville mt-2 mb-3">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed opacity-90 font-medium">
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Junicorns Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80" id="junicorns">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Innovators
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Meet Our Junicorns
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Discover the brilliant projects from our young tech pioneers.
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-md mx-auto mb-10 relative">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search Junicorns by name, project, state..." 
              value={junicornSearch}
              onChange={(e) => setJunicornSearch(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-isf-orange focus:ring-1 focus:ring-isf-orange text-slate-800"
            />
          </div>

          {/* Junicorns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredJunicorns.map((j, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img 
                    src={j.photo} 
                    alt={j.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/404";
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Age {j.age}
                  </div>
                  {j.project.youtubeLink && (
                    <a 
                      href={j.project.youtubeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors shadow-md"
                      title="Watch Project Video"
                    >
                      <Play size={14} fill="currentColor" className="ml-0.5" />
                    </a>
                  )}
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                      {j.name}
                    </h3>
                    <p className="text-[10px] font-medium text-slate-400 leading-normal line-clamp-2">
                      {j.location.institution && <span>{j.location.institution}, </span>}
                      <span>{j.location.place}</span>
                    </p>
                  </div>
                  
                  <div className="border-t border-slate-100 pt-3.5 space-y-1 flex-grow">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-isf-orange block">
                      {j.project.name}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-4">
                      {j.project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJunicorns.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              No Junicorns found matching "{junicornSearch}"
            </div>
          )}
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
              Industry Leaders &amp; Innovators
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Learn from the brightest minds in AI and technology.
            </p>
          </div>

          {/* Speakers Grid */}
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
                <div className="space-y-1.5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-baskerville leading-tight">
                      {s.name}
                    </h3>
                    <p className="text-[10px] font-semibold text-slate-500 leading-snug mt-1">
                      {s.role}
                    </p>
                    {s.company && (
                      <p className="text-[9px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">
                        {s.company}
                      </p>
                    )}
                  </div>
                  {s.linkedIn && (
                    <div className="pt-3">
                      <a 
                        href={s.linkedIn} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[10px] text-blue-600 hover:text-blue-800 font-bold gap-1 hover:underline"
                      >
                        LinkedIn <ExternalLink size={8} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={toggleSpeakers}
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold uppercase tracking-wider border border-isf-orange text-isf-orange hover:bg-isf-hover-bg px-6 py-3 rounded-lg transition-all duration-300"
            >
              {speakerCount === 8 ? (
                <>Show All Speakers ({speakers.length}) <ChevronDown size={16} /></>
              ) : (
                <>Show Less <ChevronUp size={16} /></>
              )}
            </button>
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
              Event Schedule
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto mt-2">
              Join us for two days of innovation, networking, and insights at Texas State University.
            </p>
          </div>

          {/* Day Toggles */}
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
                {day.day} - {day.title} ({day.date})
              </button>
            ))}
          </div>

          {/* Schedule List */}
          <div className="relative border-l border-slate-200 pl-6 ml-3 space-y-6">
            {schedule[activeScheduleDay].events.map((ev, idx) => {
              const EventIcon = IconMap[ev.icon] || Clock;
              
              // Determine card style based on type
              const titleL = ev.title.toLowerCase();
              let cardBg = "bg-white";
              let cardBorder = "border-slate-200/80 hover:border-slate-300";
              let iconStyle = "bg-slate-50 text-slate-500 border-slate-200 group-hover:bg-isf-hover-bg group-hover:text-isf-orange";
              let badgeStyle = "bg-slate-50 border-slate-200 text-slate-500";
              
              if (titleL.includes("coffee") || titleL.includes("tea") || titleL.includes("lunch") || titleL.includes("break")) {
                cardBg = "bg-amber-50/40 hover:bg-amber-50/60";
                cardBorder = "border-amber-100 hover:border-amber-300";
                iconStyle = "bg-amber-100 text-amber-600 border-amber-200";
                badgeStyle = "bg-amber-100/50 border-amber-200 text-amber-700";
              } else if (titleL.includes("inaugural") || titleL.includes("award") || titleL.includes("ceremony") || titleL.includes("cultural")) {
                cardBg = "bg-purple-50/30 hover:bg-purple-50/50";
                cardBorder = "border-purple-100 hover:border-purple-300";
                iconStyle = "bg-purple-100 text-purple-600 border-purple-200";
                badgeStyle = "bg-purple-100/50 border-purple-200 text-purple-700";
              } else if (titleL.includes("roundtable") || titleL.includes("pitch")) {
                cardBg = "bg-blue-50/20 hover:bg-blue-50/40";
                cardBorder = "border-blue-100 hover:border-blue-300";
                iconStyle = "bg-blue-100 text-blue-600 border-blue-200";
                badgeStyle = "bg-blue-100/50 border-blue-200 text-blue-700";
              }

              return (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[35px] top-1.5 w-[18px] h-[18px] bg-white border-2 border-isf-orange rounded-full flex items-center justify-center transition-transform group-hover:scale-110 z-10 shadow-sm">
                    <div className="w-1.5 h-1.5 bg-isf-orange rounded-full"></div>
                  </div>

                  <div className={`border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between sm:items-center gap-4 ${cardBg} ${cardBorder}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 flex items-center justify-center border rounded-xl transition-colors ${iconStyle}`}>
                        <EventIcon size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 leading-tight">
                        {ev.title}
                      </h4>
                    </div>
                    
                    <div className={`flex items-center gap-1.5 text-xs font-semibold border rounded-lg px-3 py-1.5 self-start sm:self-auto ${badgeStyle}`}>
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

      {/* Idea Seed Angels & Mentors */}
      <section className="py-16 md:py-24 bg-white" id="angels">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Angels
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Idea Seed Angels &amp; Mentors
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Meet the visionaries supporting our mission.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {angels.map((a, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm text-center flex flex-col justify-between h-full hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border border-slate-200 bg-slate-100">
                    <img 
                      src={a.image} 
                      alt={a.name} 
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/images/404";
                      }}
                    />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 font-baskerville leading-tight">
                    {a.name}
                  </h3>
                </div>
                <p className="text-[10px] text-slate-500 leading-snug mt-3 border-t border-slate-200/80 pt-2.5">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USA Host Committee */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80" id="usa-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Committee
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              USA Host Committee
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Meet the team driving our mission in the USA.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {usaCommittee.map((u, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-center flex flex-col justify-between h-full hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border border-slate-200 bg-slate-100">
                    <img 
                      src={u.image} 
                      alt={u.name} 
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/images/404";
                      }}
                    />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 font-baskerville leading-tight">
                    {u.name}
                  </h3>
                </div>
                <p className="text-[10px] text-slate-500 leading-snug mt-3 border-t border-slate-200/80 pt-2.5 line-clamp-3" title={u.description}>
                  {u.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Leadership & Management Team */}
      <section className="py-16 md:py-24 bg-white" id="junicorn-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Leadership Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
                Leadership
              </span>
              <h2 className="text-3xl font-bold font-baskerville text-slate-900">
                ISF Junicorn Project Leadership Team
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5">
              {leadershipTeam.map((l, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm text-center flex flex-col justify-between h-full hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border border-slate-200 bg-slate-100">
                      <img 
                        src={l.image} 
                        alt={l.name} 
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.src = "/assets/images/404";
                        }}
                      />
                    </div>
                    <h3 className="text-xs font-bold text-slate-900 font-baskerville leading-tight">
                      {l.name}
                    </h3>
                  </div>
                  <p className="text-[9px] text-slate-500 leading-snug mt-3 border-t border-slate-200/60 pt-2 line-clamp-3" title={l.description}>
                    {l.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Management Team */}
          <div>
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
                Management
              </span>
              <h2 className="text-3xl font-bold font-baskerville text-slate-900">
                ISF Junicorn Project Management Team
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-4">
              {managementTeam.map((m, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-3 shadow-sm text-center flex flex-col justify-between h-full hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-2 border border-slate-200 bg-slate-100">
                      <img 
                        src={m.image} 
                        alt={m.name} 
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.src = "/assets/images/404";
                        }}
                      />
                    </div>
                    <h3 className="text-[10px] font-bold text-slate-900 font-baskerville leading-tight">
                      {m.name}
                    </h3>
                  </div>
                  <p className="text-[9px] text-slate-500 leading-snug mt-2 border-t border-slate-200/60 pt-1.5">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Venue and Host City */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80" id="venue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Venue and Host City
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Texas State University */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="h-56 sm:h-64 bg-slate-100 overflow-hidden relative">
                <img 
                  src="/assets/images/txst.jpg" 
                  alt="Texas State University" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-baskerville text-slate-900 flex items-center gap-2">
                    <MapPin size={20} className="text-isf-orange" />
                    Texas State University
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    Texas State University is a premier public research institution in San Marcos, Texas, known for its vibrant campus and academic excellence. With a perfect blend of historic charm and modern facilities, it fosters innovation and leadership.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a 
                    href="https://www.txst.edu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 rounded-lg transition-colors border border-slate-200"
                  >
                    View Campus Website <ExternalLink size={12} className="ml-1.5" />
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/fJx8wjpmB4YXaevHA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 rounded-lg transition-colors border border-slate-200"
                  >
                    Google Maps <ExternalLink size={12} className="ml-1.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* San Marcos, TX */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="h-56 sm:h-64 bg-slate-100 overflow-hidden relative">
                <img 
                  src="/assets/images/courthouse.jpg" 
                  alt="San Marcos, TX" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-baskerville text-slate-900 flex items-center gap-2">
                    <MapPin size={20} className="text-isf-orange" />
                    San Marcos, TX
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    Nestled between Austin and San Antonio, San Marcos offers a perfect blend of natural beauty and urban convenience. Enjoy the vibrant historic downtown square, local outlets, and scenic parks surrounding the San Marcos River.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a 
                    href="https://www.visitsanmarcos.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 rounded-lg transition-colors border border-slate-200"
                  >
                    Explore City <ExternalLink size={12} className="ml-1.5" />
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/wDvKKgVVCRXNAkCk7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 rounded-lg transition-colors border border-slate-200"
                  >
                    Google Maps <ExternalLink size={12} className="ml-1.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Parking Information card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-lg font-bold font-baskerville text-slate-900">
                Parking Information
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Find details about the Pay-to-Park garage at the LBJ Student Center. You'll be parking at the LBJ Student Center Garage, with directions provided.
              </p>
            </div>
            <a 
              href="https://www.parking.txst.edu/visitors.html#pay-garage" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider bg-isf-orange hover:bg-isf-orange-hover text-white px-5 py-3 rounded-lg shadow-sm transition-all whitespace-nowrap self-start md:self-auto"
            >
              View Parking Details <ExternalLink size={12} className="ml-1.5" />
            </a>
          </div>

          {/* Nearby Accommodations */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="text-xl font-bold font-baskerville text-slate-900">
                Nearby Accommodations
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Convenient hotels located within 3 miles of the Texas State University summit venue.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {hotels.map((hotel, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-48"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                        {hotel.name}
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                        {hotel.rating}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-normal line-clamp-2">
                      {hotel.address}
                    </p>
                    <p className="text-[10px] font-semibold text-slate-500">
                      {hotel.distance}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-700">{hotel.price}</span>
                    <a 
                      href={hotel.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[10px] font-bold text-isf-orange hover:underline gap-0.5"
                    >
                      Book Hotel <ExternalLink size={8} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-bold font-baskerville text-slate-900">
                International Startup Foundation (ISF)
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                The International Startup Foundation (ISF) is a not-for-profit organization dedicated to fostering innovation and entrepreneurship across key sectors such as Capital Investments, Health, GCC, AI, Fintech, Agriculture, Rural Development, Women, and Youth. Aligned with the Bharat 2047 vision, ISF works to build impactful ecosystems that drive economic growth and sustainable development.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-bold font-baskerville text-slate-900">
                ISF Junicorn100K Initiative
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                ISF Junicorn100K is a flagship initiative dedicated to empowering 100,000 rural youth (ages 8-25) to become innovators who tackle critical rural challenges and contribute to national priority sectors. By igniting a spirit of innovation, this initiative will cultivate a dynamic ecosystem where groundbreaking ideas transform into impactful &amp; workable prototypes, shaping a future where rural talent drives global progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Key Partnerships */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80" id="partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Partnerships
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Our Key Partnerships
            </h2>
            <p className="text-slate-500 text-xs md:text-sm max-w-2xl mx-auto mt-2">
              Collaborating with leading organizations to drive innovation and impact.
            </p>
          </div>

          {/* Grouped Partnerships */}
          <div className="space-y-12">
            {keyPartnerships.map((group, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6 text-center border-b border-slate-100 pb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                  {group.logos.map((logo, lIdx) => (
                    <div key={lIdx} className="h-12 w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="max-h-full max-w-full object-contain"
                        title={logo.alt}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Supporting Organizations */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6 text-center border-b border-slate-100 pb-3">
                Supporting Organizations
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {supportingOrganizations.map((logo, idx) => (
                  <div key={idx} className="h-10 w-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="max-h-full max-w-full object-contain"
                      title={logo.alt}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Junicorn Project Partners */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6 text-center border-b border-slate-100 pb-3">
                Junicorn Project Partners
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {junicornProjectPartners.map((logo, idx) => (
                  <div key={idx} className="h-10 w-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="max-h-full max-w-full object-contain"
                      title={logo.alt}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend? */}
      <section className="py-16 md:py-24 bg-white" id="whyattend">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Why Join?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Why Attend the Summit?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Expert-Led Insights", desc: "Gain cutting-edge insights from business, technology, and responsible AI leaders.", color: "bg-orange-50/60 text-orange-600 border-orange-100/60" },
              { title: "Global Collaboration", desc: "Connect with experts, academics, and entrepreneurs to drive ethical AI innovations.", color: "bg-blue-50/60 text-blue-600 border-blue-100/60" },
              { title: "Startup & Innovation Growth", desc: "Pitch AI solutions to VCs and mentors, fueling scalable ventures.", color: "bg-emerald-50/60 text-emerald-600 border-emerald-100/60" },
              { title: "Future-Focused Environment", desc: "Join in-person for interactive discussions and hands-on masterclasses.", color: "bg-purple-50/60 text-purple-600 border-purple-100/60" },
              { title: "Talent & Career Opportunities", desc: "Explore AI career pathways, plus specialized tracks for student Junicorns.", color: "bg-amber-50/60 text-amber-600 border-amber-100/60" },
              { title: "Recognition & Impact", desc: "Celebrate standout innovations at the ISF Innovation Awards and shape sustainable tech.", color: "bg-sky-50/60 text-sky-600 border-sky-100/60" }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-start gap-4"
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl shrink-0 mt-0.5 ${benefit.color}`}>
                  <Award size={18} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
