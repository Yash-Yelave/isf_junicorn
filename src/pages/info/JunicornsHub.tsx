import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.png";

export function JunicornsHub() {
  // FAQs State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselImages = [
    "/assets/themes/jupiterx/junicon-26/images/1-Dflng3M3.jpeg",
    "/assets/themes/jupiterx/junicon-26/images/2-D5iViCrB.jpeg",
    "/assets/themes/jupiterx/junicon-26/images/3-ABFBH8VL.jpeg",
    "/assets/themes/jupiterx/junicon-26/images/4-CuFzIIly.jpeg",
    "/assets/themes/jupiterx/junicon-26/images/5-BbKaZVGX.jpeg",
    "/assets/themes/jupiterx/junicon-26/images/6-DQAgMgq0.jpeg",
    "/assets/themes/jupiterx/junicon-26/images/7-liHkMaih.jpeg",
    "/assets/themes/jupiterx/junicon-26/images/8-BQhgRRGq.jpeg"
  ];

  const handleNextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const missions = [
    {
      icon: "/assets/2026/03/rocket-icon.svg",
      name: "Core Mission",
      desc: "Empowering rural youth by connecting them to global opportunities and driving national sector growth."
    },
    {
      icon: "/assets/2026/03/green-globe.svg",
      name: "Global Expeditions",
      desc: "Immersive experiences in tech hubs to foster a global mindset and collaborative innovation."
    },
    {
      icon: "/assets/2026/03/talent.svg",
      name: "Rural Talent",
      desc: "Discovering and nurturing undiscovered talent in rural areas, providing resources to help them shine."
    },
    {
      icon: "/assets/2026/03/green-brian.svg",
      name: "MVP prototyping",
      desc: "Enabling participants to build and test their ideas, turning innovative concepts into tangible solutions."
    },
    {
      icon: "/assets/2026/03/flag.svg",
      name: "National Priorities",
      desc: "Aligning innovations with national priority sectors to ensure impactful and relevant outcomes."
    },
    {
      icon: "/assets/2026/03/youth.svg",
      name: "Youth Empowerment",
      desc: "Providing young innovators with the tools and mentorship needed to succeed on global stage."
    },
    {
      icon: "/assets/2026/03/cap.svg",
      name: "University Collaboration",
      desc: "Partnering with universities to bridge the gap between academia and industry for practical innovation."
    },
    {
      icon: "/assets/2026/03/rocket-icon.svg",
      name: "Global Ideas",
      desc: "Creating a platform for the cross-pollination of ideas from diverse minds across the world."
    }
  ];

  const benefits = [
    {
      title: "Global Exposure",
      desc: "Connect with international markets, investors and partners to scale your business beyond borders."
    },
    {
      title: "Expert Mentorship",
      desc: "Gain invaluable insights and one-on-one guidance from seasoned industry leaders and successful founders."
    },
    {
      title: "Economic Growth",
      desc: "We provide the resources and support to help you create jobs and foster sustainable economic development."
    },
    {
      title: "Network",
      desc: "Join a vibrant community of peers, mentors and partners dedicated to innovation and collaboration."
    }
  ];

  const focusAreas = [
    {
      title: "Clean Water Access & Clean Energy",
      desc: "Sustainable utilities for rural and climate-vulnerable regions",
      icon: "/assets/2026/03/ability.svg",
      bgColor: "bg-[#C7F4FF]"
    },
    {
      title: "AgriTech & Rural Innovation",
      desc: "From precision sensing to autonomous systems—built for real field conditions.",
      icon: "/assets/2026/03/plant.svg",
      bgColor: "bg-[#FFE0F7]"
    },
    {
      title: "Sustainable construction",
      desc: "Youth-led, partner-driven, and impact-measured sustainability initiatives.",
      icon: "/assets/2026/03/expert.svg",
      bgColor: "bg-[#E0FFF2]"
    },
    {
      title: "Women Empowerment & Health",
      desc: "Health, safety, and livelihood solutions for women- designed for trust and access",
      icon: "/assets/2026/03/youth.svg",
      bgColor: "bg-[#FFF3DD]"
    },
    {
      title: "EdTech Equity",
      desc: "From rural classrooms to self-learners- education without barriers",
      icon: "/assets/2026/03/cap2.svg",
      bgColor: "bg-[#FFEEDD]"
    },
    {
      title: "Ability-Inclusive Access",
      desc: "Wearables and assistive systems built to restore confidence, safety, and mobility.",
      icon: "/assets/2026/03/ability.svg",
      bgColor: "bg-[#FEEEEB]"
    }
  ];

  const innovations = [
    { name: "Jalapatra", desc: "Capsule purifier, no electricity, biodegradable pot system" },
    { name: "ATLITOS", desc: "AI match engine, booking system, rentals, decentralized sports ecosystem" },
    { name: "Krishi Yantra", desc: "AI detection, multi-tasking robot, solar + DC power" },
    { name: "YTSAT 2.0 (Bhuvani)", desc: "Student-built satellite providing hyper-local weather and soil data to help farmers." },
    { name: "Eco-Brickster", desc: "Eco-friendly construction bricks made from recycled plastic." },
    { name: "Audibleyes", desc: "Smart wearable device for the visually impaired to navigate safely using sensors + AI" },
    { name: "Rural Volt", desc: "Turns household organic waste into ethanol biofuel for villages" },
    { name: "6D SchoolBot", desc: "AI-powered village-based teaching robot delivering education where teachers are unavailable." },
    { name: "NeuroRide", desc: "Smart helmet detecting drowsiness using EEG sensors for two-wheeler riders." },
    { name: "NaturaShe", desc: "Biodegradable sanitary pads made by rural women for health + sustainability" },
    { name: "OffStage", desc: "AI platform curating cultural experiences for business travelers (MICE sector)." },
    { name: "NGreen Tech", desc: "Student-led e-waste recycling initiative focused on awareness and collection" },
    { name: "SP Band", desc: "Wearable safety band for women with instant SOS, live GPS, and audio recording." },
    { name: "Wave-Warn", desc: "AI-based system to predict and warn people of dangerous heatwaves" },
    { name: "Grow@Home", desc: "App for urban families to grow organic food with AI tips and education" },
    { name: "SmartHeal", desc: "AI app offering real-time wound care guidance and ER referral recommendations." },
    { name: "MyChemLab", desc: "AI-powered digital chemistry lab for students focused on equitable STEM education." },
    { name: "Masala GPT", desc: "AI spice dispenser for creating custom masalas from 10 basic ingredients." },
    { name: "SenseVibe", desc: "Wearable for deaf-blind users that detects obstacles and alerts with vibrations" },
    { name: "NerdU", desc: "AI-based learning platform for underserved and first-gen learners" },
    { name: "HydraTrack", desc: "Smart bottle that reminds users to drink water and tracks hydration" },
    { name: "Eden", desc: "Sustainable fashion brand with Indian roots and tech-based personalization" },
    { name: "SoBady", desc: "A grid-independent EV prototype generating energy using solar, kinetic, piezo, and wind" },
    { name: "GlucoCharm", desc: "Kid-centric CGM wearable with AI buddy, food scanner, and charm system" },
    { name: "Happy Swimmers", desc: "Swimsuit with sensors and CO2 system to prevent child drowning" }
  ];

  const faqs = [
    {
      q: "Do I need a team to register?",
      a: "No, you can register individually or as a team."
    },
    {
      q: "Who is eligible to participate?",
      a: "Anyone with interest in the domain can participate."
    },
    {
      q: "What are the judging criteria?",
      a: "Innovation, execution, and presentation."
    },
    {
      q: "What tools and technologies are we allowed to use?",
      a: "You can use any tools and technologies that best suit your project. We encourage using modern frameworks, cloud services, and development tools to build your solution effectively."
    }
  ];

  return (
    <div className="font-inter bg-white text-[#111111]">
      
      {/* 1. Hero Block & Founder's Message Combined */}
      <section className="bg-[#FAF8F5] pt-32 pb-16 border-b border-gray-100 relative overflow-hidden">
        {/* Background shapes mimicking the illustration (optional decorative) */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#F59E0B]/20 rounded-full blur-3xl -z-10 translate-x-1/3"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#458B79]/20 rounded-full blur-3xl -z-10 translate-y-1/3"></div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Text + Founder */}
            <div className="lg:col-span-6 space-y-10 z-10">
              
              {/* Hero Title & Subtitle */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0C3E2B] leading-tight font-baskerville">
                  Empowering the Next Generation of Global{" "}
                  <span className="whitespace-nowrap">
                    <span className="text-[#D24D7F]">Entre</span>
                    <span className="text-[#0C3E2B]">pr</span>
                    <span className="text-[#EAB308]">e</span>
                    <span className="text-[#0C3E2B]">neurs</span>
                  </span>
                </h1>
                <p className="text-base md:text-lg text-[#0C3E2B] max-w-xl font-normal leading-relaxed">
                  Connecting founders in emerging markets with the mentorship, network, and capital to build the future.
                </p>
                <div className="pt-2">
                  <Link
                    to="/registration/student"
                    className="bg-[#D24D7F] hover:bg-[#C73E6E] text-white text-sm font-bold tracking-wide px-8 py-4 rounded-full shadow-md transition-colors inline-block"
                  >
                    Join the movement
                  </Link>
                </div>
              </div>

              {/* Founder Message Section */}
              <div className="mt-4 pt-6 border-t border-gray-200/50">
                <div className="bg-white/60 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold font-baskerville text-[#0C3E2B] mb-4 text-center sm:text-left">
                    Message from the Founder & Chairman
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                    <div className="relative shrink-0">
                      {/* Background blob behind founder photo */}
                      <div className="absolute -inset-1.5 bg-gradient-to-br from-[#EAB308] to-[#F59E0B] rounded-full translate-x-1.5 translate-y-1.5 opacity-90 blur-[2px]"></div>
                      <img
                        src="/assets/themes/jupiterx/junicon-26/images/jac.png"
                        alt="J A Chowdary"
                        className="relative w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-[3px] border-white shadow-md z-10"
                        onError={(e) => {
                          e.currentTarget.src = "/assets/2024/02/J-A-Chowdary.jpg";
                        }}
                      />
                    </div>
                    <div className="space-y-2 text-center sm:text-left flex-1">
                      <h4 className="text-base font-bold text-[#0C3E2B] font-baskerville m-0">J A Chowdary</h4>
                      <p className="text-[#0C3E2B]/85 text-[13px] sm:text-sm italic font-medium leading-relaxed bg-white/40 p-3 rounded-xl border border-white/60 inline-block">
                        "To realize Bharat 2047, we must equip youth—especially from rural India and Tier 2 & 3 cities—with the right tools, mentorship, and global exposure. ISF Junicorn100K is a game-changing movement to empower 100,000 innovators."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Right Column: Hero Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end z-10 relative">
              <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl translate-x-4 lg:translate-x-8">
                <img 
                  src="/assets/images/hero-De-l_Mnh.png" 
                  alt="Hero Illustration" 
                  className="w-full h-auto object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 8-part Mission Grid */}
      <section className="py-10 md:py-12 bg-[#6B9D8F] text-center border-none relative z-0 shadow-[inset_0_15px_40px_rgba(0,0,0,0.2)]">
        {/* Subtle radial gradient for center lighting effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent -z-10 pointer-events-none"></div>
        <div className="container-custom space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-inter tracking-tight m-0">
              Junicorn100K Initiative
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {missions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 md:p-6 flex flex-col items-start text-left space-y-3 shadow-md hover:shadow-xl transition-shadow border-none"
              >
                <div className="w-10 h-10 flex items-center justify-start mb-1">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8 object-contain opacity-80"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/2026/03/rocket-icon.svg";
                    }}
                  />
                </div>
                <h3 className="text-lg md:text-[20px] font-bold text-[#0C3E2B] font-inter">
                  {item.name}
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#0C3E2B]/85 leading-snug font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Benefits Highlight Blocks */}
      <section className="py-20 bg-white border-b border-gray-150">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-[#0C3E2B]">
              Why Junicorn is Your Launchpad to Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {benefits.map((item, idx) => {
              // Assign specific colors to cards based on index as per image 3
              const colorMaps = [
                { bg: "bg-[#E8F5E9]", text: "text-[#458B79]", icon: "globe" }, // Green
                { bg: "bg-[#FCE4EC]", text: "text-[#D24D7F]", icon: "users" }, // Pink
                { bg: "bg-[#FFFDE7]", text: "text-[#EAB308]", icon: "briefcase" }, // Yellow/Gold
                { bg: "bg-[#E8EAF6]", text: "text-[#3B82F6]", icon: "share-2" } // Blue
              ];
              const c = colorMaps[idx % colorMaps.length];

              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all space-y-5 shadow-md flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${c.bg}`}>
                     {/* Replace with specific icons if available, or just a simple placeholder icon for the color */}
                    <div className={`w-6 h-6 rounded-full border-2 border-current opacity-70 ${c.text}`}></div>
                  </div>
                  <h3 className="text-xl font-bold font-baskerville text-[#0C3E2B]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#0C3E2B]/70 leading-relaxed font-light grow">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/registration/student"
              className="bg-[#D24D7F] hover:bg-[#C73E6E] text-white text-sm font-bold tracking-wide px-8 py-4 rounded-full shadow-md transition-colors inline-block"
            >
              Join the movement
            </Link>
          </div>
        </div>
      </section>



      {/* 5. Target Industries visual block */}
      <section className="py-16 bg-[#f9f9f9] border-b border-gray-200">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-[#111111]">
              Key Focus Areas
            </h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">
              Nurturing Breakthrough Solutions in Crucial Sectors
            </p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-[#e6e6e6] shadow-sm flex flex-col items-start text-left space-y-6 hover:border-isf-orange transition-colors"
              >
                <div className={`w-[72px] h-[72px] rounded-full flex items-center justify-center ${item.bgColor}`}>
                  <img
                    alt={item.title}
                    className="w-3/5 h-3/5 object-contain"
                    src={item.icon}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#111111] font-baskerville">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#666666] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Innovations Catalog */}
      <section className="py-16 bg-white border-b border-gray-150 overflow-hidden">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-[#111111]">
              Junicorn Innovations
            </h2>
            <p className="text-xs text-[#666666] font-semibold uppercase tracking-wider">
              25 Hardware and Software Breakthroughs catalog
            </p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          {/* Auto-revolving marquee container */}
          <div className="relative flex overflow-hidden group py-4">
            <div className="flex gap-6 w-max animate-marquee pr-6">
              {[...innovations, ...innovations].map((item, idx) => (
                <div
                  key={idx}
                  className="w-[300px] md:w-[320px] shrink-0 bg-white p-6 rounded-xl border border-[#e6e6e6] shadow-sm hover:shadow-md hover:border-isf-orange transition-all flex flex-col relative"
                  style={{ minHeight: "180px" }}
                >
                  <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white font-bold text-xs bg-isf-orange">
                    {(idx % innovations.length) + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#111111] mb-2 pr-12 font-baskerville">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#666666] font-light leading-relaxed grow">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Austin Highlights Carousel */}
      <section className="py-16 bg-[#f9f9f9] border-b border-gray-200">
        <div className="container-custom space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-[#111111]">
              Austin Summit Highlights
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="bg-[#fff9eb] rounded-xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 border border-[#fedb8d]/50">
            {/* Carousel display */}
            <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden relative shadow border border-gray-200">
              <img
                src={carouselImages[carouselIndex]}
                alt={`Austin Summit Highlight ${carouselIndex + 1}`}
                className="h-full w-full object-cover"
              />
              
              {/* Navigation arrows inside carousel */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 p-2 rounded-full shadow transition-all focus:outline-none cursor-pointer flex items-center justify-center"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 p-2 rounded-full shadow transition-all focus:outline-none cursor-pointer flex items-center justify-center"
              >
                <ChevronRight size={16} />
              </button>

              {/* Dots indicator inside carousel */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      carouselIndex === idx ? "w-4 bg-isf-orange" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Description next to carousel */}
            <div className="w-full md:w-1/2 space-y-4">
              <span className="text-xs font-bold text-isf-orange uppercase tracking-wider block">
                Youth Powered Impact - UN SDGs
              </span>
              <h3 className="text-xl font-bold font-baskerville text-[#111111]">
                Democratizing Global Tech Ecosystems
              </h3>
              <p className="text-xs text-[#666666] font-light leading-relaxed">
                Watch actual delegates pitching hardware prototypes directly to international venture capitalists. Junicorn provides the structured pipeline to connect local talent with global capital channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-[#111111]">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#e6e6e6] pb-4">
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="flex items-center justify-between w-full text-left py-2 font-medium text-[#111111] hover:text-isf-orange transition-colors"
              >
                <span className="text-base font-baskerville">{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp size={16} className="text-isf-orange" />
                ) : (
                  <ChevronDown size={16} className="text-[#666666]" />
                )}
              </button>
              {openFaq === idx && (
                <div className="mt-2 text-xs text-[#666666] leading-relaxed font-light pl-1">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
