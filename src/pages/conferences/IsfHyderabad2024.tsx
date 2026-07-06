import React, { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Info
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  hyderabadSpeakers, 
  hyderabadRoundtables, 
  hyderabadSchedule 
} from "./eventsData";

export function IsfHyderabad2024() {
  const [speakerCount, setSpeakerCount] = useState(8);
  const [activeTab, setActiveTab] = useState<"speakers" | "roundtables" | "schedule">("speakers");

  const toggleSpeakers = () => {
    if (speakerCount === 8) {
      setSpeakerCount(hyderabadSpeakers.length);
    } else {
      setSpeakerCount(8);
    }
  };

  return (
    <div className="font-inter pb-20 pt-20 bg-slate-50 text-slate-800 antialiased">
      
      {/* Smooth Scroll Navigation Sub-Header */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 overflow-x-auto flex gap-6 md:gap-8 scrollbar-none justify-start md:justify-center text-xs md:text-sm font-semibold text-slate-600">
          <a href="#overview" className="hover:text-isf-orange transition-colors whitespace-nowrap">Overview</a>
          <a href="#speakers" className="hover:text-isf-orange transition-colors whitespace-nowrap">Dignitaries &amp; Speakers</a>
          <a href="#roundtables" className="hover:text-isf-orange transition-colors whitespace-nowrap">Roundtables &amp; Activities</a>
          <a href="#schedule" className="hover:text-isf-orange transition-colors whitespace-nowrap">Event Agenda</a>
          <a href="#venue" className="hover:text-isf-orange transition-colors whitespace-nowrap">Venue Details</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-start overflow-hidden px-4 md:px-8 py-20" id="overview">
        <div className="absolute inset-0">
          <img 
            src="/assets/images/pexels-introspectivedsgn-18441165.jpg" 
            alt="ISF Hyderabad Background" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="bg-white/95 backdrop-blur-md border border-slate-200/60 p-8 md:p-12 rounded-3xl shadow-xl max-w-2xl text-slate-800 animate-fade-in-up">
            <span className="px-3.5 py-1 text-xs md:text-sm font-semibold bg-isf-orange/10 text-isf-orange rounded-full inline-flex items-center gap-1.5 mb-5">
              <Calendar size={14} />
              26 - 28 September, 2024 • Hyderabad, India
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-baskerville mb-5 text-slate-900 leading-tight">
              ISF 2024 <span className="text-isf-orange">Hyderabad</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-8 max-w-xl leading-relaxed">
              An Event to Celebrate Your Visions and Ventures. Network with the most brilliant and influential minds, pitch your ideas to top investors, and learn from industry pioneers who have paved the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                to="/registration/delegate" 
                className="inline-flex items-center justify-center text-xs md:text-sm font-bold uppercase tracking-wider bg-isf-orange hover:bg-isf-orange-hover text-white px-6 py-3.5 rounded shadow-md transition-all duration-300"
              >
                Register as Delegate <ArrowRight size={14} className="ml-2" />
              </Link>
              <a 
                href="#schedule" 
                className="inline-flex items-center justify-center text-xs md:text-sm font-bold uppercase tracking-wider border border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-3.5 rounded transition-all duration-300"
              >
                Explore Agenda
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro details */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-slate-950">
            Establish Connections. Get Spotlight. Deliver Pitches. Drive Innovation. Actively Engage.
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            The International Startup Festival (ISF) is complementary to the great initiatives of the Government of India, such as Startup India, Digital India, and Make-in-India. Over 10,000+ startups gathered to advance their missions and drive towards an Atmanirbhar Bharat.
          </p>
        </div>
      </section>

      {/* Dignitaries & Speakers Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80" id="speakers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Speakers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Dignitaries &amp; Speakers
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Renowned keynotes, advisors, and experts who participated in the ISF 2024 Hyderabad conference.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hyderabadSpeakers.slice(0, speakerCount).map((speaker, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-isf-orange/20">
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

          {hyderabadSpeakers.length > 8 && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={toggleSpeakers}
                className="inline-flex items-center gap-1.5 px-6 py-3 border border-slate-300 rounded-xl text-xs md:text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {speakerCount === 8 ? (
                  <>
                    Show All Speakers ({hyderabadSpeakers.length}) <ChevronDown size={16} />
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

      {/* Roundtables & Focus Area Activities */}
      <section className="py-16 md:py-24 bg-white" id="roundtables">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Activities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Round Tables &amp; Sector Focus
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Engaging roundtables covering key industries and startup sectors with leading global experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hyderabadRoundtables.map((rt, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-white to-slate-50/50 border border-slate-200 rounded-3xl p-6 md:p-8 hover:border-isf-orange transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-isf-orange" />
                  {rt.title}
                </h3>
                
                {rt.members && rt.members.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Participants &amp; Leadership:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {rt.members.map((member, mIdx) => (
                        <li key={mIdx} className="text-xs text-slate-600 pl-1 list-disc list-inside leading-relaxed">
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule / Agenda Timeline */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80" id="schedule">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block mb-3">
              Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              ISF 2024 Hyderabad Agenda
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Overview of sessions, keynote fireside chats, pitch presentations, and networking events.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
            <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-8">
              {hyderabadSchedule.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 bg-white border-2 border-isf-orange w-4 h-4 rounded-full group-hover:bg-isf-orange transition-colors"></div>
                  
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-isf-orange uppercase tracking-wider">
                      <Clock size={12} />
                      {item.time}
                    </span>
                    <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
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
              <span className="px-3 py-1 text-xs font-semibold bg-isf-orange/10 text-isf-orange rounded-full tracking-wider uppercase inline-block">
                Location
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
                Conference Venue
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-isf-orange flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm font-inter">Address</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Engineering Staff College of India (ESCI)<br />
                      Gachibowli, Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-isf-orange flex-shrink-0">
                    <Info size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm font-inter">Dates</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      September 26 - 28, 2024<br />
                      09:00 AM - 05:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/registration/delegate"
                  className="inline-flex items-center justify-center text-xs md:text-sm font-bold uppercase tracking-wider bg-isf-orange hover:bg-isf-orange-hover text-white px-6 py-3.5 rounded shadow-md transition-all duration-300"
                >
                  Register Now <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Mock Map Image or Beautiful Graphic */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 min-h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6346252102073!2d78.35824987597143!3d17.429312001596767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f5b7cb3ab3%3A0xe7a5cfa7907feea!2sEngineering%20Staff%20College%20of%20India%20(ESCI)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
