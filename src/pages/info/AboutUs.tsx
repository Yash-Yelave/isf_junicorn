import { getImageUrl } from "../../utils/imageUtils";
import React, { useState, useEffect, useRef } from "react";
import { Heart, Users, Award, Shield, Target, Activity, Calendar, Zap, Handshake, ChevronRight, PlayCircle, Star, Building2, Globe, FileText, CheckCircle2, Sparkles } from "lucide-react";
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

  const features = [
    {
      id: "01",
      title: "Enduring Connections",
      desc: "Driving sustained entrepreneurial success through lasting strategic connections across global markets.",
      icon: Handshake
    },
    {
      id: "02",
      title: "Extensive Network",
      desc: "Connecting 50,000+ startups with international investors, corporate leaders, and trade delegations.",
      icon: Globe
    },
    {
      id: "03",
      title: "Mentorship & Guidance",
      desc: "Providing 1-on-1 access to seasoned CXOs, VCs, and domain experts worldwide.",
      icon: Users
    },
    {
      id: "04",
      title: "Rural Enhancement",
      desc: "Championing grassroots rural entrepreneurship for inclusive and sustainable economic development.",
      icon: Building2
    },
    {
      id: "05",
      title: "Youth Empowerment",
      desc: "Supporting student & under-16 founders with incubators, tools, and global recognition.",
      icon: Award
    },
    {
      id: "06",
      title: "And Many More",
      desc: "Continuous innovation, global pitch stages, and dedicated startup acceleration programs.",
      icon: Sparkles
    }
  ];

  const achievements = [
    {
      date: "October 2023",
      title: "Pondicherry Rural Innovation Meet",
      desc: "",
      image: "/assets/about-us/journey-highlight-1.jpg"
    },
    {
      date: "September 2023",
      title: "MoU with Hon' PM of Netherlands",
      desc: "",
      image: "/assets/about-us/journey-highlight-2.jpg"
    },
    {
      date: "January 2024",
      title: "India Tech Talent League, Delhi",
      desc: "",
      image: "/assets/about-us/journey-highlight-3.jpg"
    }
  ];

  const awards = [
    { name: "Dr. D Nageshwar Reddy", role: "Chairman & Chief of Gastroenterology, Asian Institute of Gastroenterology & AIG Hospitals", image: "/assets/about-us/life-time-1.png" },
    { name: "Dr. Galla Ramachandra Naidu", role: "Founder Chairman, Amara Raja Group", image: "/assets/about-us/life-time-2.png" },
    { name: "Dr. Kazuhiro Chiba", role: "President, Tokyo University of Agriculture and Technology", image: "/assets/about-us/life-time-3.png" },
    { name: "Sri Atluri", role: "Managing Director - Global Head of Enterprise Quality Engineering, BNY Mellon", image: "/assets/about-us/life-time-4.png" },
    { name: "Dr. P Raja Mohan Rao", role: "Chairman, United Telecoms Group", image: "/assets/about-us/life-time-5.png" },
    { name: "Vineet Rai", role: "Founder & Chairman, Aavishkaar Group", image: "/assets/about-us/life-time-6.png" },
    { name: "Sivakumar Surampudi", role: "Group Head, Agri & IT Businesses of ITC Limited", image: "/assets/about-us/life-time-7.png" }
  ];

  const startupWinners = [
    { name: "Hiringhood", image: "/assets/about-us/award-winner-1.png" },
    { name: "Rennaissance Superfoods", image: "/assets/about-us/award-winner-2.png" },
    { name: "Game On", image: "/assets/about-us/award-winner-3.png" },
    { name: "Brewed Games", image: "/assets/about-us/award-winner-4.png" },
    { name: "MetaBrix", image: "/assets/about-us/award-winner-5.png" },
    { name: "Flying Duck", image: "/assets/about-us/award-winner-6.png" },
    { name: "Medyseva", image: "/assets/about-us/award-winner-7.png" },
    { name: "EnDimensions", image: "/assets/about-us/award-winner-0.png" },
    { name: "ICATTT", image: "/assets/about-us/award-winner-0.png" },
    { name: "Arakruthu 3D Private Limited", image: "/assets/about-us/award-winner-0.png" }
  ];

  const junicorns = Array.from({ length: 10 }, (_, i) => `/assets/about-us/junicon-${i + 1}.png`);
  
  const mous = [
    { name: "Wheels Foundation USA", location: "", image: "/assets/about-us/mou-1.png" },
    { name: "Bart Foundation USA", location: "", image: "/assets/about-us/mou-2.png" },
    { name: "Software Technology Parks of India", location: "", image: "/assets/about-us/mou-3.png" },
    { name: "London Chamber of Commerce & Indistry", location: "", image: "/assets/about-us/mou-4.png" },
    { name: "Netherlands India Chamber of Commerce & Trade", location: "", image: "/assets/about-us/mou-5.png" },
    { name: "World Startups", location: "Netherlands", image: "/assets/about-us/mou-6.png" },
    { name: "Link Innovation", location: "France", image: "/assets/about-us/mou-7.png" },
    { name: "Swissnex, Consulate General of Switzerland", location: "", image: "/assets/about-us/mou-8.png" },
    { name: "London & Partners", location: "UK", image: "/assets/about-us/mou-9.png" },
    { name: "Finnish Ministry of Employment and the Economy", location: "", image: "/assets/about-us/mou-10.png" },
    { name: "Indo German Chamber of Commerce", location: "", image: "/assets/about-us/mou-11.png" }
  ];

  const mediaCoverage = Array.from({ length: 30 }, (_, i) => `/assets/about-us/media-${i + 1}.png`);

  const team = [
    { name: "Dr. J A Chowdary", role: "Founder & Chairman", linkedin: "https://www.linkedin.com/in/jachowdary/", image: "/assets/about-us/J-A-Chowdary.jpg" },
    { name: "Dr. Siva Mahesh Tangutooru", role: "Co-Founder", linkedin: "https://www.linkedin.com/in/dr-siva-mahesh-tangutooru-18410926/", image: "/assets/about-us/Dr.-Siva-Mahesh-Tangutooru.jpg" },
    { name: "M. Sathyendra Kumar", role: "Co-Founder", linkedin: "https://www.linkedin.com/in/sathyendra/", image: "/assets/about-us/M.-Sathyendra-Kumar.jpg" },
    { name: "Deenanath Harapanahalli", role: "Founder CEO, LifeCykul / Co-founder, International Startup Foundation", image: "/assets/about-us/Deenanath-Harapanahalli.jpg" },
    { name: "Seshadri Vangala", role: "Founder and Group CEO IFin Global Group & SGlobal Group / Co-founder, International Startup Foundation", image: "/assets/about-us/Seshadri-Vangala.jpg" },
    { name: "Achyut Yerragangu", role: "Founder, CEO, Nature Quotient Ventures Pvt Ltd / Co-founder & COO, International Startup Foundation", image: "/assets/about-us/Achyut-Yerragangu.jpg" },
    { name: "Bipin Chandra Pendyala", role: "CPO, InvenioLSI / Co-founder, International Startup Foundation", image: "/assets/about-us/Bipin-Chandra-Pendyala.jpg" },
    { name: "Dr. Bhanu Prakash Varla", role: "Partner & Director, Plural Technology & EdifyPath / Co-founder, International Startup Foundation", image: "/assets/about-us/ct10-2.jpg" }
  ];

  return (
    <div className="font-inter bg-white text-[#111111] antialiased overflow-hidden">
      
      {/* 1. Hero Section */}
      <section 
        className="relative py-24 md:py-36 bg-cover bg-center text-white overflow-hidden flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${getImageUrl("/assets/about-us/hero-bg.jpg")})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="container-custom text-center relative z-10 max-w-4xl mx-auto px-6 space-y-6">
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg !text-white"
            style={{ color: '#ffffff' }}
          >
            Unveiling the <br className="hidden md:block" />
            International Startup Foundation
          </h1>
          
          {/* Custom Zigzag Divider matching the screenshot */}
          <div className="flex justify-center py-2 opacity-80">
            <svg width="200" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6 L10 1 L20 11 L30 1 L40 11 L50 1 L60 11 L70 1 L80 11 L90 1 L100 11 L110 1 L120 11 L130 1 L140 11 L150 1 L160 11 L170 1 L180 11 L190 1 L200 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h2 
            className="text-2xl md:text-4xl font-extrabold uppercase tracking-wider !text-white drop-shadow"
            style={{ color: '#ffffff' }}
          >
            ISF
          </h2>
          <p className="text-xl md:text-2xl italic font-semibold text-amber-100/90 drop-shadow">
            connect. collaborate. celebrate.
          </p>
        </div>
      </section>

      {/* 2. What is ISF Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container-custom px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text on Left */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-isf-orange">About Us</span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#111111] leading-tight">
                  What is International Startup Foundation
                </h2>
                <div className="w-12 h-1 bg-isf-orange rounded"></div>
              </div>
              <p className="text-base md:text-lg text-[#666666] leading-relaxed text-justify">
                Dedicated to enhancing India’s entrepreneurial landscape, the International Startup Foundation (ISF) fosters vital connections between entrepreneurs, resources, investors, and mentors. Our commitment extends beyond conventional boundaries, embracing nature, nurturing enduring relationships, and championing youth and rural empowerment.
              </p>
              <p className="text-base md:text-lg text-[#666666] leading-relaxed text-justify">
                Aligned with GOI’s pivotal initiatives like Startup India, Digital India, and Make-in-India, ISF aims to collaborate with over 50,000 startups, fostering their growth and bolstering the vision of an Atmanirbhar Bharat.
              </p>
            </div>

            {/* Image on Right */}
            <div className="flex justify-center items-center w-full">
              <div className="relative p-2 sm:p-3 bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 max-w-xl lg:max-w-2xl w-full">
                <img 
                  src={getImageUrl("/assets/about-us/about-isf.svg")} 
                  alt="What is International Startup Foundation" 
                  className="w-full h-auto object-contain max-h-[550px]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 ISF Board of Directors Section */}
      <section className="py-10 md:py-12 bg-gradient-to-b from-white via-[#FAF8F5]/80 to-white border-b border-gray-150 relative overflow-hidden">
        {/* Decorative subtle background elements */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container-custom px-4 max-w-5xl mx-auto space-y-8 relative z-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D24D7F] bg-pink-50 border border-pink-100 px-3.5 py-1 rounded-full inline-block">
              Visionary Leadership
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] font-baskerville tracking-tight uppercase">
              Board of Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.slice(0, 3).map((member, idx) => (
              <div 
                key={idx}
                className="group relative bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center justify-between"
              >
                {/* Top orange accent line */}
                <div className="w-10 h-1 bg-[#E5532A] rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>

                <div className="flex flex-col items-center space-y-3.5">
                  {/* Portrait with theme ring */}
                  <div className="relative p-1 bg-pink-50 border border-pink-200 rounded-full shadow-xs group-hover:scale-105 group-hover:border-[#D24D7F] transition-all duration-300">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white bg-slate-100">
                      <img 
                        src={getImageUrl(member.image)} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>

                  {/* Name and Designation */}
                  <div className="space-y-1.5">
                    <h3 className="text-base md:text-lg font-bold font-baskerville text-[#111111] group-hover:text-[#0C3E2B] transition-colors leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-[#D24D7F] leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bottom LinkedIn Button */}
                <div className="mt-4 pt-3 border-t border-gray-100 w-full flex justify-center">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A66C2] bg-[#F0F6FF] hover:bg-[#0A66C2] hover:text-white px-3.5 py-1.5 rounded-full border border-[#0A66C2]/20 transition-all duration-300 shadow-2xs group/btn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ISF Mission Section */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-b border-gray-200">
        <div className="container-custom px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image on Left */}
            <div className="order-2 lg:order-1 flex justify-center items-center w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-xl max-w-xl w-full border-4 border-white">
                <img 
                  src={getImageUrl("/assets/about-us/8704.jpg")} 
                  alt="ISF Team Gathering" 
                  className="w-full h-auto object-cover max-h-[420px]" 
                />
              </div>
            </div>

            {/* Text on Right */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D24D7F]">Our Core Mission</span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#111111] leading-tight">
                  Building a Brighter Future to Empower, Connect and Thrive
                </h2>
                <div className="w-12 h-1 bg-[#D24D7F] rounded"></div>
              </div>
              <p className="text-base md:text-lg text-[#666666] leading-relaxed text-justify">
                ISF reimagines the startup ecosystem, fueling creativity and innovation to shape a brighter future. We empower startups, forge meaningful connections, and cultivate an environment where entrepreneurship thrives.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Quick Stats Section */}
      <section className="py-16 bg-[#f9f9f9] border-b border-gray-200">
        <div className="container-custom px-4 max-w-6xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold font-inter tracking-tight uppercase text-[#111111]">Quick Stats</h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">Our ISF Ecosystem Numbers</p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl md:text-5xl font-extrabold text-[#D24D7F] mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base font-semibold text-[#111111] uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto bg-white p-3 sm:p-5 rounded-3xl border border-gray-150 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col items-center space-y-4">
             <img 
               src={getImageUrl("/assets/about-us/about-ISF-1024x499.png")} 
               alt="Startups Engaged Timeline" 
               className="w-full h-auto rounded-2xl object-contain max-h-[650px]" 
             />
             <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-gray-200/90 px-6 py-2 rounded-full text-xs md:text-sm font-extrabold text-[#0C3E2B] uppercase tracking-widest shadow-2xs">
               <span className="w-2 h-2 rounded-full bg-isf-orange"></span>
               <span>Startups Engaged</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ISF KEY FEATURES */}
      <section className="py-10 md:py-12 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 border-b border-gray-200 relative overflow-hidden">
        {/* Subtle background decorative glows */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="container-custom space-y-6 md:space-y-8 px-4 max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-slate-100 border border-slate-200 px-3.5 py-1 rounded-full inline-block">
              Core Ecosystem Pillars
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-baskerville tracking-tight uppercase">
              Key Features
            </h2>
            <p className="text-xs md:text-sm text-slate-500 font-normal">
              Signature features and foundation pillars driving our startup support ecosystem globally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-xl hover:border-orange-300/80 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle hover gradient sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  <div className="space-y-3.5 relative z-10">
                    {/* Top Row: Icon Badge & Number (Gradient on Hover) */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:via-red-500 group-hover:to-rose-600 group-hover:text-white group-hover:border-transparent group-hover:scale-110 group-hover:shadow-md group-hover:shadow-red-500/25 transition-all duration-300">
                        <IconComp size={19} />
                      </div>
                      <span className="text-[10px] font-mono font-extrabold text-slate-400 bg-slate-50 border border-slate-200/60 group-hover:text-red-600 group-hover:bg-orange-50 group-hover:border-orange-200/80 px-2 py-0.5 rounded-md tracking-wider transition-colors duration-300">
                        {feat.id}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold font-baskerville text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>

                  {/* Expanding Accent Bar (Gradient on Hover) */}
                  <div className="mt-4 pt-2.5 border-t border-slate-100 relative z-10">
                    <div className="w-8 h-1 bg-slate-200 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-red-500 group-hover:to-rose-600 transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-16 bg-[#FAF9F6] border-b border-gray-200">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold font-inter tracking-tight uppercase text-[#111111]">CORE VALUES</h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">Ambitious Values Shaping the Nation's Future Success</p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-[#FAF8F5] flex items-center justify-center p-4">
                <img src={getImageUrl("/assets/about-us/commitment.svg")} alt="Commitment" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-[#D24D7F]">Commitment</h3>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-[#FAF8F5] flex items-center justify-center p-4">
                <img src={getImageUrl("/assets/about-us/innovation.svg")} alt="Innovation" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-isf-orange">Innovation</h3>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-[#FAF8F5] flex items-center justify-center p-4">
                <img src={getImageUrl("/assets/about-us/collaboration.svg")} alt="Collaboration" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-teal-600">Collaboration</h3>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-[#FAF8F5] flex items-center justify-center p-4">
                <img src={getImageUrl("/assets/about-us/support.svg")} alt="Support" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-blue-500">Support</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Echoes of Success */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase">PAST ACHIEVEMENTS</h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">Echoes of Success: Remarkable Chronicles</p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
            <h3 className="text-xl font-bold mt-4 text-[#D24D7F] uppercase">2023 Journey Highlights</h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm bg-[#f9f9f9]">
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              {achievements.map((achieve, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveAchievement(idx)}
                  className={`text-left p-5 rounded-xl transition-all duration-300 border ${
                    activeAchievement === idx 
                      ? 'bg-white border-[#D24D7F] text-[#111111] shadow-md' 
                      : 'bg-transparent border-transparent text-[#666666] hover:bg-white hover:text-[#111111]'
                  }`}
                >
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2 opacity-80 text-isf-orange">
                    <Calendar size={14} /> {achieve.date}
                  </span>
                  <h3 className="text-lg font-bold leading-tight uppercase">{achieve.title}</h3>
                </button>
              ))}
            </div>
            <div className="w-full lg:w-2/3 rounded-xl overflow-hidden relative min-h-[300px] lg:min-h-[400px] border border-gray-200 shadow-inner bg-black">
              {achievements.map((achieve, idx) => (
                <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ${activeAchievement === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <img src={achieve.image} alt={achieve.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-6 left-6 z-20 pr-6">
                     <h3 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-xl">{achieve.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lifetime Awardees */}
      <section className="py-16 bg-[#FAF8F5] border-b border-gray-200">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight uppercase">LIFETIME ACHIEVEMENT AWARDEES</h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">Honoring Excellence: Meet the Stalwarts</p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#FAF8F5] shadow-inner">
                  <img src={award.image} alt={award.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-[#D24D7F] mb-2">{award.name}</h4>
                <p className="text-sm text-[#666666] font-semibold">{award.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STARTUP AWARD WINNERS */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight uppercase">STARTUP AWARD WINNERS</h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">The Trailblazers of Tomorrow Making Lasting Impact</p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {startupWinners.map((winner, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-white shadow-md p-2 flex items-center justify-center border border-gray-100 hover:scale-105 transition-transform">
                  <img src={winner.image} alt={winner.name} className="w-16 h-16 object-contain" />
                </div>
                <span className="font-bold text-sm text-[#111111] text-center">{winner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 9. MOUs */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase">MOUs</h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mous.map((mou, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-[#f9f9f9] rounded-xl border border-gray-100 hover:shadow-md transition-all">
                <div className="w-16 h-16 shrink-0 bg-white rounded-lg p-2 shadow-sm border border-gray-100 flex items-center justify-center">
                  <img src={mou.image} alt={mou.name} className="max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#111111]">{mou.name}</h4>
                  {mou.location && <span className="text-xs font-semibold text-[#D24D7F]">{mou.location}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. MEDIA COVERAGE */}
      <section className="py-16 bg-[#FAF8F5] border-b border-gray-200">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase">MEDIA COVERAGE</h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {mediaCoverage.map((src, i) => (
               <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:scale-105 transition-all flex items-center justify-center h-24">
                  <img src={src} alt={`Media ${i+1}`} className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all" />
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Banner Removed */}

      {/* 12. ISF Board of Directors (Hidden as requested) */}
      {/* 
      <section className="py-16 bg-white border-b border-gray-150">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight uppercase">ISF Board of Directors</h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-[#f9f9f9] rounded-2xl p-6 border border-[#e6e6e6] shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-[#111111] mb-2 uppercase">{member.name}</h4>
                <p className="text-sm text-[#D24D7F] font-semibold leading-relaxed">
                  {member.role.split(' / ').map((part, i) => (
                    <span key={i}>
                      {part}
                      {i < member.role.split(' / ').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

    </div>
  );
}
