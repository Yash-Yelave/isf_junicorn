import { Calendar, UserCheck, ShieldCheck, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function OneHourAWeek() {
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
                className="bg-white text-[#0C3E2B] font-semibold px-6 py-2 rounded-lg text-sm transition-all hover:bg-white/95 text-center shadow-md cursor-pointer block border border-[#fedb8d]"
              >
                Mentor Registration
              </Link>
              <Link 
                to="/mentee-form"
                className="bg-transparent text-white font-semibold px-6 py-2 rounded-lg text-sm transition-all hover:bg-white/10 text-center border border-white/30 cursor-pointer block"
              >
                Mentee Registration
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/images/1hour-1week.png"
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

      {/* 3. Deep Dive Copy & Sliding Photos */}
      <section className="py-16 bg-slate-50 border-t border-b border-gray-100 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 mb-12">
          <h2 className="text-2xl font-bold font-baskerville text-slate-800">
            Secure, Structured and Impactful
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Our program ensures a secure and structured mentorship experience, with password-protected mentor information and an AI-powered algorithm that maintains privacy and security while connecting mentees with suitable mentors.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We're proud to have the support of prominent institutions from the USA and across the globe. We aim to assemble a diverse network of 1 million mentors. Join us in donating one hour a week to make a meaningful difference in the lives of students and startups.
          </p>
        </div>

        {/* Infinite Sliding Photos */}
        <div className="relative flex overflow-hidden group py-6 bg-white shadow-inner border-y border-gray-200">
          <div className="flex gap-6 w-max animate-marquee pr-6 hover:[animation-play-state:paused]">
            {[1, 2, 3, 4, 6, 8, 9].map((num) => (
              <div key={`slide-1-${num}`} className="w-[280px] md:w-[350px] h-[180px] md:h-[220px] shrink-0 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <img
                  src={`/assets/images/1h-1w-pic${num}.jpg`}
                  alt={`1 Hour 1 Week Event ${num}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {/* Duplicated for seamless loop */}
            {[1, 2, 3, 4, 6, 8, 9].map((num) => (
              <div key={`slide-2-${num}`} className="w-[280px] md:w-[350px] h-[180px] md:h-[220px] shrink-0 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <img
                  src={`/assets/images/1h-1w-pic${num}.jpg`}
                  alt={`1 Hour 1 Week Event ${num} duplicated`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm flex flex-col justify-between hover:border-isf-orange transition-colors">
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-bold font-baskerville text-slate-900">
                Register as a Mentee
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Startups, students, and early founders looking to connect with investors, resources, and technical guidance.
              </p>
            </div>
            <Link
              to="/mentee-form"
              className="block text-center text-xs font-bold uppercase tracking-wider text-slate-800 border border-gray-300 hover:bg-gray-50 py-3 rounded"
            >
              Mentee Registration
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
