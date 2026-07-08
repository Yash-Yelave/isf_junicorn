import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Heart, Users, Shield, Lightbulb, TrendingUp, Sparkles, Target, Zap, Globe, Cpu, HeartPulse } from 'lucide-react';

const Cohort3: React.FC = () => {
  const teamMembers = [
    { name: "Dr. J A Chowdary", role: "Founder & Chairman", image: "/assets/cohort3/ja-chowdary.png" },
    { name: "Dr. Mahesh Tangatooru", role: "Co-Founder", image: "/assets/cohort3/dr-siva-mahesh.jpeg" },
    { name: "Poondla Siddharth Reddy", role: "Core Team", image: "/assets/cohort3/psr.jpg" },
    { name: "Priyanka Kamath", role: "Core Team", image: "/assets/cohort3/priyanka.jpeg" },
    { name: "Parvathi Vunnam", role: "Core Team", image: "/assets/cohort3/parvathi.png" },
    { name: "Venkata Kiran Kumar", role: "Core Team", image: "/assets/cohort3/kiran.jpeg" },
    { name: "Rounak K Shankar", role: "Core Team", image: "/assets/cohort3/rounak.jpeg" },
  ];

  const focusAreas = [
    { icon: <HeartPulse className="w-8 h-8" />, title: "Healthcare & well-being" },
    { icon: <Globe className="w-8 h-8" />, title: "Agriculture & food security" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Manufacturing & MSME growth" },
    { icon: <Zap className="w-8 h-8" />, title: "Clean energy & sustainability" },
    { icon: <Cpu className="w-8 h-8" />, title: "Space & deep-tech innovation" },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Education & skill development" },
    { icon: <Sparkles className="w-8 h-8" />, title: "Digital transformation" },
    { icon: <Target className="w-8 h-8" />, title: "Water security & climate action" }
  ];

  return (
    <div className="font-inter bg-slate-50 min-h-screen pt-20 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/assets/cohort3/cohort3-hero.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-isf-orange/20 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-isf-orange" />
            <span className="text-sm font-semibold tracking-wide text-white">Junicorns Movement</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl animate-fade-in-up font-inter" style={{animationDelay: '100ms'}}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-yellow-300">
              Rural Innovation Challenge
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-isf-orange to-yellow-400">
              Cohort 3.0
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Built for young innovators and changemakers at the start of their journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>
            <Link to="/registration" className="px-8 py-4 bg-isf-orange hover:bg-isf-orange-hover text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2">
              Register Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400 font-medium tracking-wider">Last Date for Registrations: <span className="text-white">October 1st</span></p>
        </div>
      </section>

      {/* Eligibility & Focus Areas Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-isf-orange tracking-widest uppercase mb-3">Who Can Join</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Eligibility Requirements</h3>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">A quick check before you apply — most young builders qualify.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { title: "18–25 years", desc: "Built for young innovators and changemakers at the start of their journey.", icon: <Users className="w-6 h-6" /> },
              { title: "Students & early builders", desc: "Individuals or teams with a working prototype or a lean MVP.", icon: <Target className="w-6 h-6" /> },
              { title: "Any ecosystem", desc: "Open to those with college incubators, accelerators, or going it independently.", icon: <Globe className="w-6 h-6" /> }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-isf-orange/30 transition-all duration-300 hover:shadow-xl hover:shadow-isf-orange/5 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-isf-orange shadow-sm mb-6 group-hover:scale-110 group-hover:bg-isf-orange group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Focus Areas */}
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-isf-orange/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3 text-center md:text-left">
                <h2 className="text-sm font-extrabold text-white tracking-widest uppercase mb-3 font-inter">Ten domains, one mission</h2>
                <h3 className="text-3xl md:text-4xl font-black mb-6 font-inter text-white">Focus areas for innovation</h3>
                <p className="text-slate-400 text-lg mb-8">Not limited to these — but here's where we're looking hardest.</p>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors group">
                    <div className="text-isf-orange group-hover:text-yellow-400 transition-colors">
                      {area.icon}
                    </div>
                    <span className="font-semibold">{area.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">See What Junicorns is All About</h3>
          <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative flex items-center justify-center border-4 border-white">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 to-transparent z-10"></div>
            {/* Play Button Overlay */}
            <div className="relative z-20 w-20 h-20 bg-isf-orange rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 group">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2 group-hover:border-l-slate-100 transition-colors"></div>
            </div>
            <p className="absolute bottom-6 left-6 z-20 text-white font-medium bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
              Video Placeholder (Link Pending)
            </p>
          </div>
        </div>
      </section>

      {/* About Junicorns / Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-isf-orange tracking-widest uppercase mb-3">Our Legacy</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">About Junicorns</h3>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Discover how the Junicorns movement started and evolved.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-indigo-50 rounded-[2.5rem] p-10 md:p-14 border border-indigo-100 relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/50 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm tracking-wide mb-6">Cohort 1</span>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">ISF Global Junicorn AI Summit</h4>
                <p className="text-slate-600 mb-6 font-medium text-indigo-900/60">USA, 2025</p>
                <ul className="space-y-4">
                  {[
                    "Focused on Artificial Intelligence innovations",
                    "Global reach with international participants",
                    "Launched the Junicorns movement"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-[2.5rem] p-10 md:p-14 border border-orange-100 relative overflow-hidden group hover:shadow-2xl hover:shadow-isf-orange/10 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/50 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-isf-orange font-bold text-sm tracking-wide mb-6">Cohort 2</span>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Dubai Summit 2026</h4>
                <p className="text-slate-600 mb-6 font-medium text-orange-900/60">Dubai, 2026</p>
                <ul className="space-y-4">
                  {[
                    "Scaling innovations to the Middle East",
                    "Focus on smart cities and sustainability",
                    "Connecting young founders with global investors"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-isf-orange shrink-0 mt-0.5" />
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200" id="team">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-isf-orange tracking-widest uppercase mb-3">The Visionaries</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Junicorn Team</h3>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Meet the leaders driving the Junicorns movement forward.</p>
          </div>

          {/* Leadership Grid */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {teamMembers.slice(0, 2).map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-[#e6e6e6] overflow-hidden hover:shadow-md transition-shadow group flex flex-col items-center text-center p-4 w-44">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-gray-100 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=f97316&color=fff&size=256';
                    }}
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-sm text-[#111111] mb-1 leading-tight">{member.name}</h4>
                  <p className="text-xs text-isf-orange font-semibold leading-snug">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Team Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {teamMembers.slice(2).map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-[#e6e6e6] overflow-hidden hover:shadow-md transition-shadow group flex flex-col items-center text-center p-4">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-gray-100 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=f97316&color=fff&size=256';
                    }}
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-sm text-[#111111] mb-1 leading-tight">{member.name}</h4>
                  <p className="text-xs text-isf-orange font-semibold leading-snug">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Cohort3;
