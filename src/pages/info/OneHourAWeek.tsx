import { getImageUrl } from "../../utils/imageUtils";
import { useState } from "react";
import { Calendar, UserCheck, ShieldCheck, HelpCircle, Globe, Lock, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export function OneHourAWeek() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const steps = [
    {
      icon: <Calendar className="w-8 h-8 text-isf-orange" />,
      title: "One Hour a Week Commitment",
      desc: "Donate just 1 hour of your weekly calendar slots to guide scaling startups or college students."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-isf-orange" />,
      title: "Secure & Password Protected",
      desc: "Your data is strictly secure, utilizing encryption protocols and customized search filters."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-isf-orange" />,
      title: "AI-Powered Matchmaking",
      desc: "Automated profile evaluations matches mentees directly with fitting mentors based on criteria."
    }
  ];

  const faqs = [
    {
      q: "What is the 'One Hour a Week' Mentorship Initiative?",
      a: "The 'One Hour a Week' initiative is a flagship global mentorship program by the International Startup Foundation (ISF). It connects experienced industry leaders, CXOs, serial entrepreneurs, and domain experts with promising student founders, early-stage startups, and rural innovators to provide dedicated 1-hour weekly guidance."
    },
    {
      q: "Who can register as a Mentor?",
      a: "Senior corporate executives, founders, investors, academic leaders, and domain experts across technology, business strategy, legal, finance, marketing, and product design are welcome to register as mentors. Minimum 5+ years of professional or entrepreneurial experience is recommended."
    },
    {
      q: "How does the mentor-mentee matching process work?",
      a: "ISF utilizes an AI-powered matchmaking algorithm that pairs mentees with mentors based on sector domain, current startup challenges, technical requirements, geographic relevance, and mutual scheduling availability."
    },
    {
      q: "What is the time commitment required from a Mentor?",
      a: "As the name suggests, mentors commit just 1 hour per week (or 4 hours a month). Mentors can customize their preferred time slots, mode of interaction (virtual video calls), and total number of active mentees they wish to guide."
    },
    {
      q: "How is mentor data privacy and security handled?",
      a: "Mentor profiles and personal contact information are password-protected and strictly secured. Direct contact details are never publicly shared; all session scheduling and initial communications occur through ISF's encrypted, permission-based platform."
    },
    {
      q: "Is there any financial compensation or fee involved?",
      a: "No. The 'One Hour a Week' program is a pro-bono social impact initiative. Mentors donate their time voluntarily to give back to the ecosystem, and participation is completely free for all selected student founders and startups."
    },
    {
      q: "What happens after I complete a mentorship session?",
      a: "After each 1-hour session, mentors and mentees submit brief session feedback on the platform. Startups showing exceptional progress and recommendation from mentors gain priority access to ISF Global Summits in Austin and Dubai, as well as seed funding and VC channels."
    }
  ];

  return (
    <div className="font-inter pb-16 pt-24 bg-white">
      
      {/* 1. Hero Block */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100/50 py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-isf-orange font-bold uppercase tracking-widest text-xs block">
              Global Mentorship Initiative
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight font-baskerville">
              Join the International Startup Foundation's Global Mentorship Program - One Hour a Week
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Empower the next generation of innovators! This program connects mentors (experienced professionals, industry leaders) with mentees (startups, students, and aspiring entrepreneurs) worldwide. Share your expertise, inspire growth, and make a global impact—all in just one hour a week.
            </p>
            <div className="flex gap-4">
              <Link
                to="/mentor-form"
                className="bg-isf-orange hover:bg-isf-orange-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded shadow transition-all"
              >
                Mentor Registration
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={getImageUrl("/assets/images/1hour-1week.png")}
              alt="1 Hour 1 Week"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. Program Details */}
      <section className="py-16 max-w-6xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold font-baskerville">
            How the Mentorship Program Works
          </h2>
          <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-slate-50 border border-gray-100 p-6 rounded-lg space-y-4">
              {step.icon}
              <h3 className="text-base font-bold font-baskerville text-slate-800">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Deep Dive Copy & Photo Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50/70 via-white to-orange-50/20 border-t border-b border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
          
          {/* Header & Aligned Feature Cards */}
          <div className="space-y-8 max-w-4xl mx-auto text-center">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-isf-orange bg-orange-50 border border-orange-200/80 px-3.5 py-1 rounded-full inline-block shadow-2xs">
                Trust & Global Impact
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold font-baskerville text-slate-900 tracking-tight">
                Secure, Structured and Impactful
              </h2>
              <div className="w-12 h-1 bg-isf-orange mx-auto rounded-full"></div>
            </div>

            {/* 2 Highlight Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-orange-300 transition-all space-y-3">
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-isf-orange border border-orange-200/60 flex items-center justify-center">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-base font-bold font-baskerville text-slate-900">
                  AI-Powered Privacy & Security
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  Our program ensures a secure and structured mentorship experience, featuring password-protected mentor profiles and an intelligent AI algorithm that guarantees privacy while connecting mentees with ideal guides.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-orange-300 transition-all space-y-3">
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-isf-orange border border-orange-200/60 flex items-center justify-center">
                  <Globe size={22} />
                </div>
                <h3 className="text-base font-bold font-baskerville text-slate-900">
                  Global Network of 1 Million Mentors
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  Backed by prominent institutions across the USA and worldwide, we are building a network of 1 million mentors. Join us by donating just one hour a week to make a lasting difference for students and startups.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            {[1, 2, 3, 4, 6, 8, 9].map((num) => (
              <div
                key={num}
                className="group aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200/90 bg-white transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={`/assets/images/1h-1w-pic${num}.jpg`}
                  alt={`1 Hour 1 Week Event ${num}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Action Forms Selection */}
      <section id="form" className="py-16 max-w-5xl mx-auto px-4 md:px-8 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold font-baskerville text-slate-800">
            Register Today
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Be part of this worthy cause and help empower startup ecosystems
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm flex flex-col justify-between hover:border-isf-orange transition-colors">
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-bold font-baskerville text-slate-900">
                Register as a Mentor
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Provide your expert evaluations, advice, and guidance to upcoming innovators. Setup your availability slot details.
              </p>
            </div>
            <Link
              to="/mentor-form"
              className="block text-center text-xs font-bold uppercase tracking-wider text-white bg-isf-orange hover:bg-isf-orange-hover py-3 rounded"
            >
              Mentor Registration
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions (FAQ) Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold text-isf-orange uppercase tracking-widest block font-inter">
              GOT QUESTIONS?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-baskerville text-slate-900 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
              Everything you need to know about the 1 Hour a Week global mentorship program.
            </p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-2xs transition-all duration-200 hover:border-orange-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-baskerville">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-gray-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
