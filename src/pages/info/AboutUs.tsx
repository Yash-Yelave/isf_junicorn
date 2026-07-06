import React, { useState, useEffect, useRef } from "react";
import { Heart, Users, Award, Shield, Target, Activity, Calendar, Zap, Handshake } from "lucide-react";

// --- Animated CountUp Component (kept for numbers but styled flat) ---
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
      date: "October 2023",
      title: "Pondicherry Rural Innovation Meet",
      desc: "Focused on bridging the gap between urban innovation and rural empowerment.",
      image: "/assets/images/journey-highlight-1.jpg"
    },
    {
      date: "September 2023",
      title: "MoU with Hon' PM of Netherlands",
      desc: "Strategic partnership aimed at expanding tech corridors and cross-border incubation.",
      image: "/assets/images/journey-highlight-2.jpg"
    },
    {
      date: "January 2024",
      title: "India Tech Talent League, Delhi",
      desc: "Massive congregation of deep-tech talent showcasing next-generation AI and Robotics.",
      image: "/assets/images/journey-highlight-3.jpg"
    }
  ];

  const team = [
    { name: "J A Chowdary", role: "Chairperson & Convenor, India Startup Festival", image: "https://www.isfnetwork.org/wp-content/uploads/2024/04/J-A-Chowdary.jpg" },
    { name: "Dr. Siva Mahesh Tangutooru", role: "Co-founder & Managing Trustee", image: "https://www.isfnetwork.org/wp-content/uploads/2024/04/Dr-Siva-Mahesh-Tangutooru.jpg" },
    { name: "M. Sathyendra Kumar", role: "Co-founder", image: "https://www.isfnetwork.org/wp-content/uploads/2024/04/M-Sathyendra-Kumar.jpg" },
    { name: "Deenanath Harapanahalli", role: "Co-founder", image: "https://www.isfnetwork.org/wp-content/uploads/2024/04/Deenanath-Harapanahalli.jpg" },
    { name: "Seshadri Vangala", role: "Co-founder", image: "/assets/images/Seshadri-Vangala.jpg" },
    { name: "Achyut Yerragangu", role: "Co-founder & COO", image: "/assets/images/Achyut-Yerragangu.jpg" },
    { name: "Bipin Chandra Pendyala", role: "Co-founder", image: "https://www.isfnetwork.org/wp-content/uploads/2024/04/Bipin-Chandra-Pendyala.jpg" },
    { name: "Dr. Bhanu Prakash Varla", role: "Co-founder", image: "https://www.isfnetwork.org/wp-content/uploads/2024/04/Dr-Bhanu-Prakash-Varla.jpg" }
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

  return (
    <div className="font-inter bg-white text-[#111111] antialiased">
      
      {/* 1. Hero & Mission Section */}
      <section className="bg-[#FAF8F5] pt-32 pb-0 border-b border-gray-100">
        <div className="container-custom text-center space-y-6 pb-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0C3E2B] leading-tight font-baskerville">
              Unveiling the{" "}
              <span className="whitespace-nowrap">
                <span className="text-[#D24D7F]">Inter</span>
                <span className="text-[#0C3E2B]">national</span>{" "}
                <span className="text-[#EAB308]">Startup</span>{" "}
                <span className="text-[#458B79]">Foundation</span>
              </span>
            </h1>
            <p className="text-base md:text-lg text-[#0C3E2B]/85 max-w-2xl mx-auto font-normal leading-relaxed">
              Dedicated to enhancing India's entrepreneurial landscape, fostering vital connections between founders, resources, and visionary investors.
            </p>
          </div>

          <div className="pt-12 max-w-3xl mx-auto space-y-6">
             <h2 className="text-2xl md:text-3xl font-baskerville font-bold text-[#0C3E2B] leading-tight">
              Building a brighter future to <span className="text-[#D24D7F]">Empower</span>, <span className="text-[#3B82F6]">Connect</span> and <span className="text-[#458B79]">Thrive</span>.
            </h2>
            <p className="text-sm md:text-base text-[#666666] font-light leading-relaxed">
              Evolving triumph from Seed to Sky, establishing pathways for rural development and global technical capabilities aligned with Atmanirbhar Bharat.
            </p>
          </div>
        </div>

        {/* Static Cityscape Image Full Width */}
        <div className="w-full h-[500px] md:h-[600px]">
          <img 
            src="/assets/images/about-bg.jpg" 
            alt="Cityscape" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-150">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-bold text-[#0C3E2B] font-baskerville mb-1">
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
            <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-white">
              ISF INDIA CORE VALUES
            </h2>
            <p className="text-xs text-white/80 font-semibold uppercase tracking-wider">
              Ambitious Values Shaping the Nation's Future Success
            </p>
            <div className="w-12 h-1 bg-white mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 flex flex-col items-start text-left space-y-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#E8F5E9]">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold font-inter text-[#0C3E2B]">{val.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed font-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Signature Features */}
      <section className="py-16 bg-[#f9f9f9] border-b border-gray-200">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-[#111111]">
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
                className="bg-white border border-[#e6e6e6] rounded-xl p-8 hover:shadow-lg hover:border-isf-orange transition-all space-y-5 shadow-sm flex flex-col"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${feat.bg}`}>
                  {feat.icon === 'globe' && <Target size={24} className={feat.text} />}
                  {feat.icon === 'users' && <Users size={24} className={feat.text} />}
                  {feat.icon === 'shield' && <Shield size={24} className={feat.text} />}
                  {feat.icon === 'target' && <Activity size={24} className={feat.text} />}
                </div>
                <h3 className="text-lg font-bold font-baskerville text-[#0C3E2B]">
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

      {/* 5. Echoes of Success (Achievements Grid instead of timeline) */}
      <section className="py-16 bg-white border-b border-gray-150">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-[#111111] uppercase">
              Echoes of Success
            </h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">
              ISF India's Remarkable Chronicles
            </p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achieve, idx) => (
               <div key={idx} className="bg-white p-6 rounded-xl border border-[#e6e6e6] shadow-sm hover:shadow-md hover:border-isf-orange transition-all flex flex-col">
                 {achieve.image && (
                   <div className="w-full h-48 rounded-lg overflow-hidden mb-6 bg-gray-100">
                     <img 
                       src={achieve.image} 
                       alt={achieve.title} 
                       className="w-full h-full object-cover"
                       onError={(e) => { e.currentTarget.src = "/assets/images/placeholder.jpg"; }}
                     />
                   </div>
                 )}
                 <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-isf-orange mb-3">
                    <Calendar size={14} /> {achieve.date}
                 </span>
                 <h3 className="text-lg font-bold text-[#111111] font-baskerville mb-2">
                   {achieve.title}
                 </h3>
                 <p className="text-sm text-[#666666] font-light leading-relaxed">
                   {achieve.desc}
                 </p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lifetime Awardees */}
      <section className="py-16 bg-[#f9f9f9] border-b border-gray-200">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-[#111111]">
              Lifetime Achievement Awardees
            </h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">
              Honoring excellence and visionary leadership
            </p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {awards.map((award, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-6 border border-[#e6e6e6] shadow-sm hover:shadow-md hover:border-isf-orange transition-all flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-100">
                  <img 
                    src={award.image} 
                    alt={award.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/user-placeholder.png";
                    }}
                  />
                </div>
                <h4 className="text-base font-bold font-baskerville text-[#111111] mb-1">
                  {award.name}
                </h4>
                <p className="text-xs text-[#666666] font-light leading-relaxed">
                  {award.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ISF Team */}
      <section className="py-16 bg-white border-b border-gray-150">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-[#111111]">
              ISF Team
            </h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">
              The visionary architects behind the India Startup Foundation
            </p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-[#e6e6e6] shadow-sm hover:shadow-md hover:border-isf-orange transition-all flex flex-col items-center text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/user-placeholder.png";
                    }}
                  />
                </div>
                <h4 className="text-base font-bold font-baskerville text-[#111111] mb-1">{member.name}</h4>
                <p className="text-xs text-[#666666] font-light leading-relaxed">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
