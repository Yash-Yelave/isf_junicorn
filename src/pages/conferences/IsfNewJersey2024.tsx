import React from "react";
import {
  Calendar,
  MapPin,
  Award,
  Clock,
  ExternalLink,
  Info,
  CheckCircle2
} from "lucide-react";
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
    <div className="font-inter pb-20 pt-20 bg-slate-50 text-slate-800 antialiased">

      {/* Smooth Scroll Navigation Sub-Header */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 overflow-x-auto flex gap-6 md:gap-8 scrollbar-none justify-start md:justify-center text-xs md:text-sm font-semibold text-slate-600">
          <a href="#overview" className="hover:text-blue-700 transition-colors whitespace-nowrap">Overview</a>
          <a href="#expectations" className="hover:text-blue-700 transition-colors whitespace-nowrap">What to Expect</a>
          <a href="#agenda" className="hover:text-blue-700 transition-colors whitespace-nowrap">Agenda</a>
          <a href="#venue" className="hover:text-blue-700 transition-colors whitespace-nowrap">Venue</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-start overflow-hidden px-4 md:px-8 py-20" id="overview">
        <div className="absolute inset-0">
          <img
            src="/assets/images/pexels-introspectivedsgn-18441165.jpg"
            alt="ISF USA Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/25 backdrop-blur-[1px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="bg-white/95 backdrop-blur-md border border-slate-200/60 p-8 md:p-12 rounded-3xl shadow-xl max-w-2xl text-slate-800 animate-fade-in-up">
            <span className="px-3.5 py-1 text-xs md:text-sm font-semibold bg-blue-100 text-blue-700 rounded-full inline-flex items-center gap-1.5 mb-5">
              <Calendar size={14} />
              June 2nd, 2024 • Holmdel, New Jersey
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-baskerville mb-5 text-slate-900 leading-tight">
              ISF 2024 <br /><span className="text-blue-600">USA Curtain Raiser</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-8 max-w-xl leading-relaxed">
              Welcome and thank you for showing interest to be a part of the ISF 2024 Conference. Participate in high-value CXO connect events, investor pitching, and panels at Bell Works, Holmdel.
            </p>

          </div>
        </div>
      </section>

      {/* Slogan Details */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-slate-950">
            Reimagining Global Startup Ecosystems
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Please fill out the delegate registration form to participate. The USA chapter offers cross-border collaborations, insights on tech investment expansions, and seed-funding channels between American and Indian innovators.
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80" id="expectations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full tracking-wider uppercase inline-block mb-3">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              What to Expect
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              High-impact tracks designed to bridge capital, innovation, and global mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expects.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:border-blue-500 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-baskerville mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda & Time Panel */}
      <section className="py-16 md:py-24 bg-white" id="agenda">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full tracking-wider uppercase inline-block mb-3">
              Agenda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
              Jersey Curtain Raiser Schedule
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Brevity overview of the curtain raiser timeline and networking dinner.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-8">
              {agenda.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 bg-white border-2 border-blue-600 w-4 h-4 rounded-full group-hover:bg-blue-600 transition-colors"></div>

                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 uppercase tracking-wider">
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
              <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full tracking-wider uppercase inline-block">
                Venue
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-slate-900">
                Event Location
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm font-inter">Address</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Bell Works<br />
                      101 Crawfords Corner Rd, Holmdel, New Jersey 07733
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Info size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm font-inter">Date</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      June 2, 2024
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Map */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3789457853683!2d-74.1704207241852!3d40.378333158652494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c231ffc2f6d0f1%3A0xc3d15c7e19f96404!2sBell%20Works!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Bell Works Holmdel NJ Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
