import React, { useState, useEffect, useRef } from "react";
import { Heart, Users, Award, Shield, Target, Activity, Calendar, Zap, Handshake, ChevronRight, PlayCircle, Star, Building2, Globe, FileText, CheckCircle2 } from "lucide-react";

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
      title: "Enduring Connections",
      desc: "We prioritize enduring connections, recognizing their power to drive sustained entrepreneurial success.",
    },
    {
      title: "Extensive Network",
      desc: "Aims to connect with over 50,000 startups, contributing to their goals and fostering growth",
    },
    {
      title: "Mentorship & Guidance",
      desc: "Provides mentorship opportunities, enriching its support for startups through guidance and expertise.",
    },
    {
      title: "Rural Enhancement",
      desc: "ISF values rural entrepreneurship for its potential in driving inclusive growth and economic development.",
    },
    {
      title: "Youth Empowerment",
      desc: "Encouraging entrepreneurship among the younger generation, ISF supports under-16 entrepreneurs and acknowledges their contributions",
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
    { name: "J A Chowdary", role: "Key Architect, Indian Tech Industry / Chairperson & Convenor, India Startup Festival", image: "/assets/about-us/J-A-Chowdary.jpg" },
    { name: "Dr. Siva Mahesh Tangutooru", role: "Founder CEO, Jama Botanics & TurfPearl Agritech / Co-founder & Managing Trustee India Startup Foundation", image: "/assets/about-us/Dr.-Siva-Mahesh-Tangutooru.jpg" },
    { name: "M. Sathyendra Kumar", role: "Business Unit Head – India, Maccaferri Environmental Solutions Pvt Ltd / Co-founder, India Startup Festival", image: "/assets/about-us/M.-Sathyendra-Kumar.jpg" },
    { name: "Deenanath Harapanahalli", role: "Founder CEO, LifeCykul / Co-founder & India Startup Foundation", image: "/assets/about-us/Deenanath-Harapanahalli.jpg" },
    { name: "Seshadri Vangala", role: "Founder and Group CEO IFin Global Group & SGlobal Group / Co-founder & India Startup Festival", image: "/assets/about-us/Seshadri-Vangala.jpg" },
    { name: "Achyut Yerragangu", role: "Founder, CEO, Nature Quotient Ventures Pvt Ltd / Co-founder & COO, International Startup Foundation", image: "/assets/about-us/Achyut-Yerragangu.jpg" },
    { name: "Bipin Chandra Pendyala", role: "CPO, InvenioLSI / Co-founder, India Startup Festival", image: "/assets/about-us/Bipin-Chandra-Pendyala.jpg" },
    { name: "Dr. Bhanu Prakash Varla", role: "Partner & Director, Plural Technology & EdifyPath / Co-founder, India Startup Festival", image: "/assets/about-us/ct10-2.jpg" }
  ];

  return (
    <div className="font-inter bg-white text-[#111111] antialiased overflow-hidden">
      
      {/* 1. Hero Section */}
      <section 
        className="relative py-24 md:py-36 bg-cover bg-center text-white overflow-hidden flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/assets/about-us/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="container-custom text-center relative z-10 max-w-4xl mx-auto px-6 space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg text-white">
            Unveiling the <br className="hidden md:block" />
            International Startup Foundation
          </h1>
          
          {/* Custom Zigzag Divider matching the screenshot */}
          <div className="flex justify-center py-2 opacity-80">
            <svg width="200" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6 L10 1 L20 11 L30 1 L40 11 L50 1 L60 11 L70 1 L80 11 L90 1 L100 11 L110 1 L120 11 L130 1 L140 11 L150 1 L160 11 L170 1 L180 11 L190 1 L200 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400 drop-shadow">
            ISF INDIA
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
            <div className="flex justify-center items-center">
              <div className="relative p-6 bg-amber-50/50 rounded-3xl border border-amber-100 max-w-md w-full">
                <img 
                  src="/assets/about-us/about-isf.svg" 
                  alt="About ISF" 
                  className="w-full h-auto object-contain max-h-[350px]" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ISF Mission Section */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-b border-gray-200">
        <div className="container-custom px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image on Left */}
            <div className="order-2 lg:order-1 flex justify-center items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-xl max-w-md w-full border-4 border-white">
                <img 
                  src="/assets/about-us/8704.jpg" 
                  alt="ISF Team Gathering" 
                  className="w-full h-auto object-cover max-h-[350px]" 
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
                ISF India reimagines the startup ecosystem, fueling creativity and innovation to shape a brighter future. We empower startups, forge meaningful connections, and cultivate an environment where entrepreneurship thrives.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Stats Bar & Video */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="container-custom px-4">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold font-inter tracking-tight uppercase">Quick Stats</h2>
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

          <div className="max-w-5xl mx-auto bg-white p-4 md:p-6 rounded-3xl border border-gray-150 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300">
             <img 
               src="/assets/about-us/about-ISF-1024x499.png" 
               alt="ISF Ecosystem Growth Timeline (2022 - 2024)" 
               className="w-full rounded-2xl object-contain" 
             />
          </div>
        </div>
      </section>

      {/* 3. ISF INDIA KEY FEATURES */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight uppercase">ISF INDIA KEY FEATURES</h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">Signature Features of ISF India’s Support Ecosystem</p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-[#FAF8F5] border border-[#e6e6e6] rounded-xl p-8 hover:shadow-lg hover:border-[#D24D7F] transition-all space-y-4">
                <h3 className="text-xl font-bold font-inter text-[#D24D7F] uppercase">{feat.title}</h3>
                <p className="text-base text-[#666666] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ISF INDIA CORE VALUES */}
      <section className="py-16 bg-[#FAF9F6] border-b border-gray-200">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold font-inter tracking-tight uppercase text-[#111111]">ISF INDIA CORE VALUES</h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">Ambitious Values Shaping the Nation's Future Success</p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-[#FAF8F5] flex items-center justify-center p-4">
                <img src="/assets/about-us/commitment.svg" alt="Commitment" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-[#D24D7F]">Commitment</h3>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-[#FAF8F5] flex items-center justify-center p-4">
                <img src="/assets/about-us/innovation.svg" alt="Innovation" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-isf-orange">Innovation</h3>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-[#FAF8F5] flex items-center justify-center p-4">
                <img src="/assets/about-us/collaboration.svg" alt="Collaboration" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-teal-600">Collaboration</h3>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-[#FAF8F5] flex items-center justify-center p-4">
                <img src="/assets/about-us/support.svg" alt="Support" className="w-full h-full object-contain" />
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
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase">ISF INDIA’S PAST ACHIEVEMENTS</h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">Echoes of Success: ISF India's Remarkable Chronicles</p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
            <h3 className="text-xl font-bold mt-4 text-[#D24D7F] uppercase">ISF 2023 Journey Highlights</h3>
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight uppercase">ISF LIFETIME ACHIEVEMENT AWARDEES</h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">Honoring Excellence: Meet the Stalwarts of ISF</p>
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

      {/* 7. ISF STARTUP AWARD WINNERS */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight uppercase">ISF STARTUP AWARD WINNERS</h2>
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

      {/* 8. ISF JUNICORNS */}
      <section className="py-16 bg-[#E8F5E9] border-b border-gray-200 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none w-1/3">
           <img src="/assets/about-us/friends.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="container-custom space-y-12 relative z-10 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-teal-800">ISF JUNICONS</h2>
            <p className="text-xs text-teal-600 font-bold uppercase tracking-wider">Fueling the Innovation Spark in the Next Generation</p>
            <div className="w-12 h-1 bg-teal-600 mx-auto rounded"></div>
            <h3 className="text-xl font-bold mt-4 uppercase text-[#D24D7F]">Encouraging Next Generation Innovators</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
             {junicorns.map((img, i) => (
                 <div key={i} className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-center hover:shadow-md transition-shadow">
                     <img src={img} alt={`Junicon ${i+1}`} className="w-full h-24 object-contain" />
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* 9. ISF MOUs */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase">ISF MOUs</h2>
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

      {/* 10. ISF MEDIA COVERAGE */}
      <section className="py-16 bg-[#FAF8F5] border-b border-gray-200">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase">ISF MEDIA COVERAGE</h2>
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

      {/* 11. INTERNATIONAL STARTUP FESTIVALS 2024 Banner */}
      <section className="py-16 bg-[#111] text-white">
        <div className="container-custom text-center px-4">
           <h2 className="text-2xl md:text-4xl font-extrabold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-isf-orange to-[#D24D7F]">
             INTERNATIONAL STARTUP FESTIVALS 2024
           </h2>
        </div>
      </section>

      {/* 12. ISF Team */}
      <section className="py-16 bg-white border-b border-gray-150">
        <div className="container-custom space-y-12 px-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight uppercase">ISF Team</h2>
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

    </div>
  );
}
