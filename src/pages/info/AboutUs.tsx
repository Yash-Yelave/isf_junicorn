import React, { useState, useEffect, useRef } from "react";
import { Heart, Sparkles, Users, Award, Shield, Target, ArrowRight, Activity, Calendar } from "lucide-react";

// --- Helper Hook for Intersection Observer (Scroll Animations) ---
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Optional: Stop observing once visible if we only want it to animate once
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting] as const;
}

// --- Animated CountUp Component ---
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
      
      // Easing function (easeOutExpo)
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
  const stats = [
    { value: 100, suffix: "+", label: "Speakers", delay: 0 },
    { value: 100, suffix: "+", label: "CEO's & CXOs", delay: 100 },
    { value: 200, suffix: "+", label: "Investors & Mentors", delay: 200 },
    { value: 10000, suffix: "+", label: "Startup Registrations", delay: 300 }
  ];

  const features = [
    {
      icon: <Award className="w-10 h-10 text-white mb-4 transition-transform duration-500 group-hover:scale-110" />,
      title: "Enduring Connections",
      desc: "Nurturing lasting relationships between industry experts, leaders, and upcoming innovators globally.",
      color: "bg-blue-600",
      colSpan: "md:col-span-2"
    },
    {
      icon: <Users className="w-10 h-10 text-white mb-4 transition-transform duration-500 group-hover:scale-110" />,
      title: "Extensive Network",
      desc: "Reaching across borders to assemble robust ecosystems.",
      color: "bg-isf-orange",
      colSpan: "md:col-span-1"
    },
    {
      icon: <Shield className="w-10 h-10 text-white mb-4 transition-transform duration-500 group-hover:scale-110" />,
      title: "Mentorship",
      desc: "Enlisting trusted advisory frameworks for startup validation.",
      color: "bg-teal-600",
      colSpan: "md:col-span-1"
    },
    {
      icon: <Target className="w-10 h-10 text-white mb-4 transition-transform duration-500 group-hover:scale-110" />,
      title: "Rural Enhancement",
      desc: "Empowering rural ecosystems and grassroot innovators.",
      color: "bg-purple-600",
      colSpan: "md:col-span-1"
    },
    {
      icon: <Sparkles className="w-10 h-10 text-white mb-4 transition-transform duration-500 group-hover:scale-110" />,
      title: "Youth Empowerment",
      desc: "Igniting the entrepreneurial spark in next-generation builders with exclusive academic outreach.",
      color: "bg-pink-600",
      colSpan: "md:col-span-1"
    }
  ];

  const achievements = [
    {
      date: "October 2023",
      title: "Pondicherry Rural Innovation Meet",
      desc: "Focused on bridging the gap between urban innovation and rural empowerment."
    },
    {
      date: "September 2023",
      title: "MoU with Hon' PM of Netherlands",
      desc: "Strategic partnership aimed at expanding tech corridors and cross-border incubation."
    },
    {
      date: "January 2024",
      title: "India Tech Talent League, Delhi",
      desc: "Massive congregation of deep-tech talent showcasing next-generation AI and Robotics."
    }
  ];

  const awards = [
    { name: "Dr. D Nageshwar Reddy", role: "Chairman & Chief of Gastroenterology, AIG Hospitals", image: "https://www.isfnetwork.org/wp-content/uploads/2024/04/Dr-D-Nageshwar-Reddy-Chairman-AIG-Hospitals.jpg" },
    { name: "Dr. Galla Ramachandra Naidu", role: "Founder Chairman, Amara Raja Group", image: "https://www.isfnetwork.org/wp-content/uploads/2024/04/Dr-Galla-Ramachandra-Naidu.jpg" },
    { name: "Dr. Kazuhiro Chiba", role: "President, Tokyo University of Agriculture and Technology", image: "https://www.isfnetwork.org/wp-content/uploads/2024/04/Dr-Kazuhiro-Chiba.jpg" },
    { name: "Sri Atluri", role: "MD - Global Head of Enterprise Quality, BNY Mellon", image: "/assets/images/Sri-Atluri.jpg" },
    { name: "Dr. P Raja Mohan Rao", role: "Chairman, United Telecoms Group", image: "https://www.isfnetwork.org/wp-content/uploads/2024/04/Dr-P-Raja-Mohan-Rao.jpg" },
    { name: "Vineet Rai", role: "Founder & Chairman, Aavishkaar Group", image: "/assets/images/Vineet-Rai.jpg" },
    { name: "Sivakumar Surampudi", role: "Group Head, Agri & IT Businesses, ITC", image: "https://www.isfnetwork.org/wp-content/uploads/2024/04/S-Siva-Kumar-Group-Head-Agri-IT-Businesses-ITC.jpg" }
  ];

  const [missionRef, missionVisible] = useIntersectionObserver();

  return (
    <div className="font-inter bg-slate-50 text-slate-800 antialiased overflow-hidden">
      
      {/* 1. Interactive Parallax Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-4">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/60 z-10 mix-blend-multiply"></div>
          <img 
            src="/assets/images/pexels-introspectivedsgn-18441165.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover fixed top-0 left-0 -z-10 brightness-50"
          />
        </div>
        
        <div className="max-w-5xl mx-auto w-full relative z-20 text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} className="text-isf-orange" />
            connect. collaborate. celebrate.
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white font-baskerville leading-tight drop-shadow-xl">
            Unveiling the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-isf-orange to-yellow-400">International Startup Foundation</span>
          </h1>
          <p className="text-base md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
            Dedicated to enhancing India's entrepreneurial landscape, fostering vital connections between founders, resources, and visionary investors.
          </p>
          <div className="pt-8">
            <a href="#mission" className="inline-flex items-center gap-2 bg-isf-orange hover:bg-white hover:text-isf-orange text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,102,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Explore Our Journey <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Floating Stats Bar (Negative Margin to pull up over hero) */}
      <section className="relative z-30 max-w-6xl mx-auto px-4 -mt-16 sm:-mt-24 mb-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="text-3xl md:text-5xl font-black text-slate-900 font-inter mb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-600">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Sticky Mission Statement */}
      <section id="mission" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center" ref={missionRef}>
          <div className={`transition-all duration-1000 transform ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-xl md:text-2xl text-isf-orange font-bold uppercase tracking-widest mb-6">Our Mission</h2>
            <p className="text-3xl md:text-5xl font-baskerville font-medium text-slate-900 leading-tight">
              Building a brighter future to <span className="text-isf-orange relative inline-block group cursor-default">Empower<span className="absolute bottom-0 left-0 w-full h-1 bg-isf-orange/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>, <span className="text-blue-600 relative inline-block group cursor-default">Connect<span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span> and <span className="text-teal-600 relative inline-block group cursor-default">Thrive<span className="absolute bottom-0 left-0 w-full h-1 bg-teal-600/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>.
            </p>
            <p className="mt-8 text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              Evolving triumph from Seed to Sky, establishing pathways for rural development and global technical capabilities aligned with Atmanirbhar Bharat.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Bento Grid: Signature Features */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-baskerville text-slate-900 mb-4">
              Signature Features
            </h2>
            <p className="text-slate-500 text-lg">The core pillars of the ISF India support ecosystem.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {features.map((feat, idx) => (
              <div 
                key={idx} 
                className={`${feat.color} ${feat.colSpan} group rounded-3xl p-8 relative overflow-hidden flex flex-col justify-end transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default`}
              >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                
                <div className="relative z-10">
                  {feat.icon}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-baskerville">
                    {feat.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed opacity-0 max-h-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Vertical Timeline: Past Achievements */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-baskerville text-slate-900 mb-4">
              Echoes of Success
            </h2>
            <p className="text-slate-500 text-lg">ISF India's Remarkable Chronicles</p>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-isf-orange via-purple-500 to-transparent -translate-x-1/2 opacity-30"></div>
            
            <div className="space-y-12">
              {achievements.map((achieve, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`flex flex-col md:flex-row items-center justify-between w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-[45%]"></div>
                    
                    {/* Node Dot */}
                    <div className="hidden md:flex w-12 h-12 absolute left-1/2 -translate-x-1/2 bg-white border-4 border-isf-orange rounded-full items-center justify-center shadow-lg z-10 transition-transform duration-500 group-hover:scale-125 group-hover:bg-isf-orange">
                      <Activity size={20} className="text-isf-orange group-hover:text-white transition-colors" />
                    </div>
                    
                    {/* Content Card */}
                    <div className={`w-full md:w-[45%] bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-isf-orange mb-3">
                        <Calendar size={14} /> {achieve.date}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-baskerville mb-3">
                        {achieve.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {achieve.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dynamic Awardees Carousel/Grid */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-baskerville text-white mb-4">
            Lifetime Achievement Awardees
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Honoring excellence. Meet the stalwarts whose visionary leadership shaped the nation's technological foundation.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-x-hidden pb-8">
          <div className="flex gap-6 animate-scroll-marquee w-max px-4 hover:[animation-play-state:paused]">
            {/* Double the array for smooth infinite scrolling */}
            {[...awards, ...awards].map((award, idx) => (
              <div 
                key={idx} 
                className="w-[280px] md:w-[320px] bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-isf-orange transition-all duration-300 group flex flex-col items-center text-center flex-shrink-0"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-2 border-slate-600 group-hover:border-isf-orange transition-colors">
                  <img 
                    src={award.image} 
                    alt={award.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/user-placeholder.png";
                    }}
                  />
                </div>
                <h4 className="text-lg font-bold font-baskerville text-white mb-2">
                  {award.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {award.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-marquee {
          animation: scroll-marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
