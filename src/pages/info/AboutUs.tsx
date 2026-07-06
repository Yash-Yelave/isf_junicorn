import React, { useState, useEffect, useRef } from "react";
import { Heart, Users, Award, Shield, Target, Activity, Calendar, Zap, Handshake, ChevronRight } from "lucide-react";

// --- Animated CountUp Component ---
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting] as const;
}

const CountUp = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeProgress));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};


export function AboutUs() {
  const [activeAchievement, setActiveAchievement] = useState(0);

  const stats = [
    { value: 100, suffix: "+", label: "Speakers" },
    { value: 100, suffix: "+", label: "CEO's & CXOs" },
    { value: 200, suffix: "+", label: "Investors & Mentors" },
    { value: 10000, suffix: "+", label: "Startup Registrations" }
  ];

  const coreValues = [
    { icon: <Handshake size={24} className="text-[#0C3E2B]" />, title: "Collaboration", desc: "Building strong networks across borders to support global ecosystems." },
    { icon: <Zap size={24} className="text-[#0C3E2B]" />, title: "Empowerment", desc: "Uplifting rural and youth innovators with actionable insights." },
    { icon: <Heart size={24} className="text-[#0C3E2B]" />, title: "Sustainability", desc: "Focusing on enduring and impactful relationships for the long-term." },
    { icon: <Award size={24} className="text-[#0C3E2B]" />, title: "Excellence", desc: "Setting high standards for technical and business innovation." }
  ];

  const features = [
    {
      icon: "globe",
      title: "Enduring Connections",
      desc: "Nurturing lasting relationships between industry experts, leaders, and upcoming innovators globally.",
      bg: "bg-[#E8F5E9]",
      text: "text-[#458B79]",
    },
    {
      icon: "users",
      title: "Extensive Network",
      desc: "Reaching across borders to assemble robust ecosystems.",
      bg: "bg-[#FCE4EC]",
      text: "text-[#D24D7F]",
    },
    {
      icon: "shield",
      title: "Mentorship",
      desc: "Enlisting trusted advisory frameworks for startup validation.",
      bg: "bg-[#FFFDE7]",
      text: "text-[#EAB308]",
    },
    {
      icon: "target",
      title: "Rural Enhancement",
      desc: "Empowering rural ecosystems and grassroot innovators.",
      bg: "bg-[#E8EAF6]",
      text: "text-[#3B82F6]",
    }
  ];

  const achievements = [
    {
      date: "January 2024",
      title: "India Tech Talent League, Delhi",
      desc: "Massive congregation of deep-tech talent showcasing next-generation AI and Robotics.",
      image: "/assets/images/journey-highlight-3.jpg"
    },
    {
      date: "September 2023",
      title: "MoU with Hon' PM of Netherlands",
      desc: "Strategic partnership aimed at expanding tech corridors and cross-border incubation.",
      image: "/assets/images/journey-highlight-2.jpg"
    },
    {
      date: "October 2023",
      title: "Pondicherry Rural Innovation Meet",
      desc: "Focused on bridging the gap between urban innovation and rural empowerment.",
      image: "/assets/images/journey-highlight-1.jpg"
    }
  ];

  const team = [
    { name: "J A Chowdary", role: "Chairperson & Convenor", image: "/assets/images/J-A-Chowdary.jpg" },
    { name: "Dr. Siva Mahesh Tangutooru", role: "Co-founder & Managing Trustee", image: "/assets/team/shiva.a623ce07.svg" },
    { name: "M. Sathyendra Kumar", role: "Co-founder", image: "/assets/team/sathyendra_kumar.jpg" },
    { name: "Deenanath Harapanahalli", role: "Co-founder", image: "/assets/images/placeholder.jpg" },
    { name: "Seshadri Vangala", role: "Co-founder", image: "/assets/images/Seshadri-Vangala.jpg" },
    { name: "Achyut Yerragangu", role: "Co-founder & COO", image: "/assets/images/Achyut-Yerragangu.jpg" },
    { name: "Bipin Chandra Pendyala", role: "Co-founder", image: "/assets/team/bipun_chandar.jpeg" },
    { name: "Dr. Bhanu Prakash Varla", role: "Co-founder", image: "/assets/team/varla_bhanu.jpg" }
  ];

  const awards = [
    { name: "Dr. D Nageshwar Reddy", role: "Chairman & Chief of Gastroenterology, AIG Hospitals", image: "/assets/images/Dr-D-Nageshwar-Reddy,-Chairman,-AIG-Hospitals.jpg" },
    { name: "Dr. Galla Ramachandra Naidu", role: "Founder Chairman, Amara Raja Group", image: "/assets/images/placeholder.jpg" },
    { name: "Dr. Kazuhiro Chiba", role: "President, Tokyo University of Agriculture and Technology", image: "/assets/images/placeholder.jpg" },
    { name: "Sri Atluri", role: "MD - Global Head of Enterprise Quality, BNY Mellon", image: "/assets/images/Sri-Atluri.jpg" },
    { name: "Dr. P Raja Mohan Rao", role: "Chairman, United Telecoms Group", image: "/assets/images/placeholder.jpg" },
    { name: "Vineet Rai", role: "Founder & Chairman, Aavishkaar Group", image: "/assets/images/Vineet-Rai.jpg" },
    { name: "Sivakumar Surampudi", role: "Group Head, Agri & IT Businesses, ITC", image: "/assets/images/S-Siva-Kumar,-Group-Head,-Agri-&-IT-Businesses,-ITC.jpg" }
  ];

  return (
    <div className="font-inter bg-white text-[#111111] antialiased overflow-hidden">
      
      {/* 1. Hero & Mission Section - Clean White/Light BG */}
      <section className="bg-[#FAF8F5] flex flex-col items-center justify-center pt-32 pb-24 px-4 relative">
        {/* Subtle decorative background blobs instead of images */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-isf-orange/5 rounded-full blur-3xl -z-10 translate-x-1/3"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-teal-600/5 rounded-full blur-3xl -z-10 translate-y-1/3"></div>
        
        <div className="container-custom text-center space-y-10 relative z-10">
          <div className="space-y-5 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111111] leading-tight tracking-tight font-inter">
              Unveiling the{" "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-isf-orange to-[#D24D7F]">
                International Startup Foundation
              </span>
            </h1>
            <p className="text-base md:text-lg text-[#666666] max-w-2xl mx-auto font-normal leading-relaxed">
              Dedicated to enhancing India's entrepreneurial landscape, fostering vital connections between founders, resources, and visionary investors.
            </p>
          </div>

          <div className="pt-8 max-w-3xl mx-auto space-y-4 border-t border-gray-200/60">
             <h2 className="text-2xl md:text-3xl font-inter font-bold text-[#111111] leading-tight">
              Building a brighter future to <span className="text-[#D24D7F]">Empower</span>, <span className="text-blue-500">Connect</span> and <span className="text-[#458B79]">Thrive</span>.
            </h2>
            <p className="text-sm md:text-base text-[#666666] font-light leading-relaxed max-w-2xl mx-auto">
              Evolving triumph from Seed to Sky, establishing pathways for rural development and global technical capabilities aligned with Atmanirbhar Bharat.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-150 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-extrabold text-[#111111] font-inter mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm font-semibold text-[#666666] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ISF INDIA CORE VALUES */}
      <section className="py-16 bg-[#6B9D8F] border-b border-gray-150">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold font-inter text-white tracking-tight">
              ISF INDIA CORE VALUES
            </h2>
            <p className="text-xs text-white/80 font-semibold uppercase tracking-wider">
              Ambitious Values Shaping the Nation's Future Success
            </p>
            <div className="w-12 h-1 bg-white mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 flex flex-col items-start text-left space-y-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#E8F5E9]">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold font-inter text-[#111111]">{val.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed font-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Echoes of Success (Immersive Interactive Viewer - Light Theme) */}
      <section className="py-20 bg-white text-[#111111] border-b border-gray-200">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold font-inter tracking-tight uppercase">
              Echoes of Success
            </h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">
              ISF India's Remarkable Chronicles
            </p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div 
            className="flex flex-col lg:flex-row gap-8 rounded-2xl border border-[#fedb8d]/60 p-4 md:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
            style={{ backgroundColor: "color-mix(in oklab, #fedb8d 50%, transparent)" }}
          >
            {/* Interactive List (Left) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              {achievements.map((achieve, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveAchievement(idx)}
                  className={`text-left p-5 rounded-xl transition-all duration-300 border ${
                    activeAchievement === idx 
                      ? 'bg-white border-isf-orange text-[#111111] shadow-sm' 
                      : 'bg-transparent border-transparent text-[#666666] hover:bg-gray-100 hover:text-[#111111]'
                  }`}
                >
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2 opacity-80">
                    <Calendar size={14} /> {achieve.date}
                  </span>
                  <h3 className="text-lg font-bold font-inter leading-tight mb-2">
                    {achieve.title}
                  </h3>
                  {activeAchievement === idx && (
                    <p className="text-sm font-light text-[#666666] leading-relaxed mt-3 animate-fade-in">
                      {achieve.desc}
                    </p>
                  )}
                </button>
              ))}
            </div>

            {/* Immersive Image Viewer (Right) */}
            <div className="w-full lg:w-2/3 rounded-xl overflow-hidden relative min-h-[300px] lg:min-h-[400px] border border-gray-200 shadow-inner bg-gray-100">
              {achievements.map((achieve, idx) => (
                <div 
                  key={idx} 
                  className={`absolute inset-0 transition-opacity duration-700 ${activeAchievement === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <img 
                    src={achieve.image} 
                    alt={achieve.title}
                    className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-1000"
                    onError={(e) => { e.currentTarget.src = "/assets/images/placeholder.jpg"; }}
                  />
                  <div className="absolute bottom-6 left-6 z-20 pr-6">
                     <h3 className="text-2xl md:text-3xl font-baskerville font-bold text-white drop-shadow-xl mb-2">{achieve.title}</h3>
                     <span className="text-isf-orange font-bold uppercase text-xs tracking-wider flex items-center gap-1">
                       Explore Chronicle <ChevronRight size={14} />
                     </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Signature Features */}
      <section className="py-16 bg-[#f9f9f9] border-b border-gray-200">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold font-inter text-[#111111] tracking-tight">
              Signature Features
            </h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">
              The core pillars of the ISF India support ecosystem
            </p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e6e6e6] rounded-xl p-8 hover:shadow-lg hover:border-isf-orange transition-all space-y-5 shadow-sm flex flex-col group"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${feat.bg} group-hover:scale-110 transition-transform duration-300`}>
                  {feat.icon === 'globe' && <Target size={24} className={feat.text} />}
                  {feat.icon === 'users' && <Users size={24} className={feat.text} />}
                  {feat.icon === 'shield' && <Shield size={24} className={feat.text} />}
                  {feat.icon === 'target' && <Activity size={24} className={feat.text} />}
                </div>
                <h3 className="text-lg font-bold font-inter text-[#111111]">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed font-light grow">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lifetime Awardees (Horizontal Carousel to reduce image clutter) */}
      <section className="py-16 bg-[#f9f9f9] border-b border-gray-200">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold font-inter text-[#111111] tracking-tight">
              Lifetime Achievement Awardees
            </h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">
              Honoring excellence and visionary leadership
            </p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="relative group">
            {/* Horizontal scrolling container */}
            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory">
              {awards.map((award, idx) => (
                <div 
                  key={idx} 
                  className="min-w-[280px] md:min-w-[300px] snap-center bg-white rounded-xl p-6 border border-[#e6e6e6] shadow-sm hover:shadow-md hover:border-isf-orange transition-all flex flex-col items-center text-center shrink-0"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-100 shadow-inner">
                    <img 
                      src={award.image} 
                      alt={award.name} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/images/placeholder.jpg";
                      }}
                    />
                  </div>
                  <h4 className="text-base font-bold font-inter text-[#111111] mb-1">
                    {award.name}
                  </h4>
                  <p className="text-xs text-[#666666] font-light leading-relaxed">
                    {award.role}
                  </p>
                </div>
              ))}
            </div>
            {/* Visual fade hint for scrollability */}
            <div className="absolute top-0 bottom-6 right-0 w-12 bg-gradient-to-l from-[#f9f9f9] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 7. ISF Team (Horizontal Carousel to reduce image clutter) */}
      <section className="py-16 bg-white border-b border-gray-150">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold font-inter text-[#111111] tracking-tight">
              ISF Team
            </h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">
              The visionary architects behind the India Startup Foundation
            </p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>
          
          <div className="relative">
            {/* Horizontal scrolling container */}
            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory">
              {team.map((member, idx) => (
                <div 
                  key={idx} 
                  className="min-w-[260px] md:min-w-[280px] snap-center bg-white rounded-xl p-6 border border-[#e6e6e6] shadow-sm hover:shadow-md hover:border-isf-orange transition-all flex flex-col items-center text-center shrink-0"
                >
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-gray-100 shadow-inner">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/images/placeholder.jpg";
                      }}
                    />
                  </div>
                  <h4 className="text-base font-bold font-inter text-[#111111] mb-1">{member.name}</h4>
                  <p className="text-xs text-[#666666] font-light leading-relaxed">{member.role}</p>
                </div>
              ))}
            </div>
            {/* Visual fade hint for scrollability */}
            <div className="absolute top-0 bottom-6 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

    </div>
  );
}
