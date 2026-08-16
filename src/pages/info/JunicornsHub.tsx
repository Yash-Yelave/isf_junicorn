import { getImageUrl } from "../../utils/imageUtils";
import { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  Rocket, 
  Globe, 
  Sparkles, 
  Cpu, 
  Flag, 
  Zap, 
  GraduationCap, 
  Lightbulb,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  Coins,
  Handshake,
  Landmark
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.png";

export function JunicornsHub() {
  // FAQs State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Active Cohort Tab State
  const [activeCohortTab, setActiveCohortTab] = useState<"cohort-3" | "cohort-2" | "cohort-1">("cohort-3");




  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const missions = [
    {
      name: "Core Mission",
      desc: "Empowering rural youth by connecting them to global opportunities and driving national sector growth.",
      icon: Rocket,
      gradient: "from-[#D24D7F] to-[#E5532A]",
      badgeBg: "bg-pink-50 text-[#D24D7F]",
      badgeBorder: "border-pink-200/80"
    },
    {
      name: "Global Expeditions",
      desc: "Immersive experiences in tech hubs to foster a global mindset and collaborative innovation.",
      icon: Globe,
      gradient: "from-emerald-500 to-teal-600",
      badgeBg: "bg-emerald-50 text-emerald-600",
      badgeBorder: "border-emerald-200/80"
    },
    {
      name: "Rural Talent",
      desc: "Discovering and nurturing undiscovered talent in rural areas, providing resources to help them shine.",
      icon: Sparkles,
      gradient: "from-amber-500 to-yellow-600",
      badgeBg: "bg-amber-50 text-amber-600",
      badgeBorder: "border-amber-200/80"
    },
    {
      name: "MVP Prototyping",
      desc: "Enabling participants to build and test their ideas, turning innovative concepts into tangible solutions.",
      icon: Cpu,
      gradient: "from-purple-500 to-indigo-600",
      badgeBg: "bg-purple-50 text-purple-600",
      badgeBorder: "border-purple-200/80"
    },
    {
      name: "National Priorities",
      desc: "Aligning innovations with national priority sectors to ensure impactful and relevant outcomes.",
      icon: Flag,
      gradient: "from-[#E5532A] to-red-600",
      badgeBg: "bg-orange-50 text-[#E5532A]",
      badgeBorder: "border-orange-200/80"
    },
    {
      name: "Youth Empowerment",
      desc: "Providing young innovators with the tools and mentorship needed to succeed on the global stage.",
      icon: Zap,
      gradient: "from-sky-500 to-blue-600",
      badgeBg: "bg-sky-50 text-sky-600",
      badgeBorder: "border-sky-200/80"
    },
    {
      name: "University Collaboration",
      desc: "Partnering with universities to bridge the gap between academia and industry for practical innovation.",
      icon: GraduationCap,
      gradient: "from-rose-500 to-pink-600",
      badgeBg: "bg-rose-50 text-rose-600",
      badgeBorder: "border-rose-200/80"
    },
    {
      name: "Global Ideas",
      desc: "Creating a platform for the cross-pollination of ideas from diverse minds across the world.",
      icon: Lightbulb,
      gradient: "from-teal-500 to-cyan-600",
      badgeBg: "bg-teal-50 text-teal-600",
      badgeBorder: "border-teal-200/80"
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
      q: "What is the Junicorn Rural Innovation Challenge?",
      a: "The Junicorn (Junior Unicorns) Rural Innovation Challenge is a flagship national program by the International Startup Foundation (ISF). It bridges the gap between rural ambition and global opportunities by empowering young innovators aged 8 to 25 to solve community problems and transform their ideas into scalable, impact-driven startup ventures."
    },
    {
      q: "Who is eligible to participate in the Junicorn program?",
      a: "Students and young innovators aged 8 to 25 are eligible to apply. The initiative encompasses dedicated school-level and college-level programs to support and nurture ideas at different stages of educational growth."
    },
    {
      q: "What are the core focus sectors/arenas for Cohort 3.0?",
      a: "Cohort 3.0 invites solutions in vital domains including Agriculture & Food Security, Healthcare & Well-being, Smart Manufacturing & MSME Growth, Clean Energy & Sustainability, Water Security & Climate Action, Space & Deep-Tech, and Education & Skill Development."
    },
    {
      q: "Do I need a registered startup or a working prototype to apply?",
      a: "No, you do not need a registered company or a working prototype. We welcome early-stage problem statements and promising ideas. The program's build phase is designed to help you construct your MVP (Minimum Viable Product) from scratch with expert guidance."
    },
    {
      q: "What does the '3 M's' ecosystem stand for?",
      a: "ISF supports startups through the '3 M's': Mentorship (guidance from 800+ global industry experts), Market Access (opportunities to showcase ideas at global summits in Austin and Dubai), and Money (direct connection to angel networks, VCs, and development grants)."
    },
    {
      q: "Is there a registration fee to participate in the challenge?",
      a: "No, participation in Junicorn camps, mentorship sessions, and startup challenges is completely free. Furthermore, ISF offers travel and accommodation support for top selected teams to present at global summits."
    },
    {
      q: "Can I apply individually, and are cross-school teams allowed?",
      a: "Yes! You can apply as an individual innovator or as a team. We also highly encourage cross-institutional collaboration, allowing teams to form with members from different schools or colleges."
    },
    {
      q: "How can industry professionals and schools partner with ISF?",
      a: "Industry leaders can apply to join the Global Mentorship Program ('One Hour a Week') to guide student founders. Schools and colleges can partner with us as institutional nodes to host localized innovation bootcamps on their campuses."
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
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 bg-[#0C3E2B]/5 border border-[#0C3E2B]/15 text-[#0C3E2B] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-isf-orange animate-pulse" />
                  <span>Junicorn events and activities are managed by Jnanana Foundation</span>
                </div>
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
                  Empowering youth and rural innovators with the <strong>3 M's Framework</strong>—<strong>Mentorship</strong>, <strong>Market Access</strong>, and <strong>Money</strong>—to transform promising ideas into global startups. All Junicorn events and activities are managed by Jnanana Foundation.
                </p>
                <div className="pt-1">
                  <Link
                    to="/registration/student"
                    className="bg-[#D24D7F] hover:bg-[#C73E6E] text-white text-sm font-bold tracking-wide px-8 py-3.5 rounded-full shadow-md transition-colors inline-block"
                  >
                    Join the movement
                  </Link>
                </div>
              </div>

              {/* The 3 M's Core Ecosystem Cards */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-emerald-100 shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D24D7F]"></span>
                    <span className="text-xs font-extrabold text-[#0C3E2B] uppercase tracking-wider font-baskerville">
                      The 3 M's Foundation Ecosystem
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#D24D7F] bg-pink-50 border border-pink-200 px-2.5 py-0.5 rounded-full">
                    Core Pillars
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {/* 1. Mentorship */}
                  <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-pink-200/70 hover:border-[#D24D7F] transition-all group">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-pink-100 text-[#D24D7F] flex items-center justify-center font-extrabold text-xs shrink-0 shadow-2xs">
                        M1
                      </div>
                      <h4 className="text-xs font-extrabold text-[#0C3E2B] group-hover:text-[#D24D7F] transition-colors">
                        Mentorship
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-600 font-normal leading-snug">
                      One-on-one guidance from 800+ global industry leaders & CXOs via 1 Hour a Week.
                    </p>
                  </div>

                  {/* 2. Market Access */}
                  <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-emerald-200/70 hover:border-[#026956] transition-all group">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#026956] flex items-center justify-center font-extrabold text-xs shrink-0 shadow-2xs">
                        M2
                      </div>
                      <h4 className="text-xs font-extrabold text-[#0C3E2B] group-hover:text-[#026956] transition-colors">
                        Market Access
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-600 font-normal leading-snug">
                      Global pitch stages at summits in Austin TX, Dubai UAE, and across India.
                    </p>
                  </div>

                  {/* 3. Money / Capital */}
                  <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-amber-200/70 hover:border-[#D45625] transition-all group">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-[#D45625] flex items-center justify-center font-extrabold text-xs shrink-0 shadow-2xs">
                        M3
                      </div>
                      <h4 className="text-xs font-extrabold text-[#0C3E2B] group-hover:text-[#D45625] transition-colors">
                        Money & Capital
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-600 font-normal leading-snug">
                      Direct connections to VCs, angel networks, seed grants & prototype support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder Message Section */}
              <div className="mt-6 pt-6 border-t border-gray-200/80">
                <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all relative overflow-hidden">
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-bold font-baskerville text-[#0C3E2B] mb-2 text-center sm:text-left">
                      Message from the Founder & Chairman
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                      <div className="relative shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-br from-[#E5532A] to-[#D24D7F] rounded-full blur-[1px]"></div>
                        <img
                          src={getImageUrl("/assets/themes/jupiterx/junicon-26/images/jac.png")}
                          alt="Dr. J A Chowdary"
                          className="relative w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-white shadow-md z-10"
                          onError={(e) => {
                            e.currentTarget.src = "/assets/2024/02/J-A-Chowdary.jpg";
                          }}
                        />
                      </div>

                      <div className="space-y-2 text-center sm:text-left flex-1">
                        <div>
                          <h4 className="text-base font-bold text-[#0C3E2B] font-baskerville m-0">Dr. J A Chowdary</h4>
                          <p className="text-xs font-semibold text-[#D24D7F] mt-0.5">Founder & Chairman, International Startup Foundation</p>
                        </div>
                        <p className="text-[#0C3E2B] text-xs sm:text-sm italic font-medium leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-emerald-100/80 shadow-2xs">
                          "To realize Bharat 2047, we must equip youth—especially from rural India and Tier 2 & 3 cities—with the right tools, mentorship, and global exposure. ISF Junicorn100K is a game-changing movement to empower 100,000 innovators."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Right Column: Hero Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end z-10 relative">
              <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl translate-x-4 lg:translate-x-8">
                <img 
                  src={getImageUrl("/assets/images/hero-De-l_Mnh.png")} 
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F0FDF4] via-[#F8FAFC] to-[#FFF7ED] text-center relative overflow-hidden border-t border-b border-emerald-100/80">
        {/* Soft pastel ambient background glows */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container-custom space-y-10 relative z-10">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0C3E2B] bg-emerald-100/80 border border-emerald-200 px-4 py-1.5 rounded-full inline-block shadow-2xs">
              Empowering 100,000 Innovators
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0C3E2B] font-baskerville tracking-tight m-0">
              Junicorn100K Initiative
            </h2>
            <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Unlocking rural potential, building breakthrough prototypes, and connecting young minds to global ecosystems.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D24D7F] via-[#E5532A] to-[#EAB308] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-6 flex flex-col justify-between text-left space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-slate-200/80 relative overflow-hidden"
                >
                  {/* Top colorful gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`}></div>

                  <div className="space-y-3.5 pt-1">
                    {/* Icon badge with matching signature color */}
                    <div className={`w-12 h-12 rounded-xl ${item.badgeBg} border ${item.badgeBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xs`}>
                      <IconComponent size={24} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 font-baskerville leading-snug group-hover:text-[#0C3E2B] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Subtle bottom pillar indicator */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider group-hover:text-[#0C3E2B] transition-colors">
                      Pillar 0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#E5532A] transition-colors"></span>
                  </div>
                </div>
              );
            })}
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
            {/* Side fading gradient masks for smooth transition */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div 
              className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] pr-6"
              style={{ animationDuration: '280s' }}
            >
              {[...innovations, ...innovations].map((item, idx) => (
                <div
                  key={idx}
                  className="w-[300px] md:w-[320px] shrink-0 bg-white p-6 rounded-xl border border-[#e6e6e6] shadow-sm hover:shadow-md hover:border-isf-orange transition-all flex flex-col relative group/card"
                  style={{ minHeight: "180px" }}
                >
                  <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white font-bold text-xs bg-isf-orange shadow-2xs">
                    {(idx % innovations.length) + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#111111] mb-2 pr-12 font-baskerville group-hover/card:text-isf-orange transition-colors">
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

      {/* 7. Our Cohorts Timeline Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-gray-200" id="our-cohorts">
        <div className="container-custom space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-isf-orange uppercase tracking-widest block font-inter">
              ISF JUNICORNS PROGRAMME
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-baskerville text-slate-900 leading-tight">
              Our Cohorts
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Transforming young innovators across global stages—from Austin, Texas to Dubai, UAE and across India.
            </p>
            <div className="w-16 h-1 bg-isf-orange mx-auto rounded-full mt-3"></div>
          </div>

          {/* Cohort Tabs */}
          <div className="flex justify-center gap-2 sm:gap-4 relative z-10 -mb-[1px] flex-wrap">
            <button
              type="button"
              onClick={() => setActiveCohortTab("cohort-3")}
              className={`px-5 sm:px-8 py-3 text-sm sm:text-base font-bold rounded-t-2xl transition-all cursor-pointer ${
                activeCohortTab === "cohort-3"
                  ? "bg-[#FFF9EB] text-[#D24D7F] border-t-2 border-x border-[#FFE7C4] shadow-2xs font-extrabold"
                  : "bg-slate-200/80 text-slate-600 hover:bg-slate-300/80 hover:text-slate-900"
              }`}
            >
              Cohort 3.0 (Active 2026)
            </button>
            <button
              type="button"
              onClick={() => setActiveCohortTab("cohort-2")}
              className={`px-5 sm:px-8 py-3 text-sm sm:text-base font-bold rounded-t-2xl transition-all cursor-pointer ${
                activeCohortTab === "cohort-2"
                  ? "bg-[#FFF9EB] text-[#D24D7F] border-t-2 border-x border-[#FFE7C4] shadow-2xs font-extrabold"
                  : "bg-slate-200/80 text-slate-600 hover:bg-slate-300/80 hover:text-slate-900"
              }`}
            >
              Cohort 2.0 (Dubai 2026)
            </button>
            <button
              type="button"
              onClick={() => setActiveCohortTab("cohort-1")}
              className={`px-5 sm:px-8 py-3 text-sm sm:text-base font-bold rounded-t-2xl transition-all cursor-pointer ${
                activeCohortTab === "cohort-1"
                  ? "bg-[#FFF9EB] text-[#D24D7F] border-t-2 border-x border-[#FFE7C4] shadow-2xs font-extrabold"
                  : "bg-slate-200/80 text-slate-600 hover:bg-slate-300/80 hover:text-slate-900"
              }`}
            >
              Cohort 1.0 (Austin USA)
            </button>
          </div>

          {/* Cohort Card Container */}
          <div className="bg-[#FFF9EB] p-6 sm:p-8 md:p-12 rounded-3xl border border-[#FFE7C4] shadow-sm">
            
            {/* Cohort 3.0 Tab Content */}
            {activeCohortTab === "cohort-3" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D24D7F] bg-pink-50 border border-pink-200 px-3.5 py-1 rounded-full inline-block">
                    COHORT 3.0 • NATIONAL MOVEMENT
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-baskerville text-slate-900 leading-tight">
                    Cohort 3.0: 100K Rural Innovators Movement
                  </h3>
                  
                  <div className="space-y-2.5 py-1">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <Calendar size={18} className="text-isf-orange shrink-0" />
                      <span>2026 - Present (Ongoing National Campaign)</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <MapPin size={18} className="text-isf-orange shrink-0" />
                      <span>Pan-India & Global Tech Ecosystems</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <Users size={18} className="text-isf-orange shrink-0" />
                      <span>Targeting 100,000 Young Innovators & 25 Breakthrough Prototypes</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Cohort 3.0 elevates the Junicorns initiative into a landmark national movement. Connecting students from rural schools, universities, and Tier 2/3 cities directly with global mentors, prototyping support, and venture capital channels.
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Highlights:</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>25 Hardware and Software Breakthrough Prototypes cataloged</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Monthly J-SPOTLIGHT Meetups & live investor pitching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Direct pathway to international summits and angel funding</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/cohort-3"
                      className="inline-flex items-center gap-2 bg-[#D24D7F] hover:bg-[#C73E6E] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow transition-all"
                    >
                      <span>Explore Cohort 3.0</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6 flex justify-center">
                  <div className="bg-white p-4 rounded-2xl border border-amber-200/80 shadow-md w-full max-w-md">
                    <img
                      src={getImageUrl("/assets/images/hero-De-l_Mnh.png")}
                      alt="Cohort 3.0 Illustration"
                      className="w-full h-auto object-contain rounded-xl"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/images/1hour-1week.png";
                      }}
                    />
                    <div className="mt-3 p-3 bg-amber-50 rounded-xl text-center border border-amber-100">
                      <span className="text-xs font-bold text-[#0C3E2B]">
                        Empowering 100,000 Young Minds for Bharat 2047
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Cohort 2.0 Tab Content */}
            {activeCohortTab === "cohort-2" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#026956] bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full inline-block">
                    COHORT 2.0 • DUBAI SUMMIT 2026
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-baskerville text-slate-900 leading-tight">
                    Cohort 2.0: Dubai Global Innovation Summit & Retreat
                  </h3>
                  
                  <div className="space-y-2.5 py-1">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <Calendar size={18} className="text-isf-orange shrink-0" />
                      <span>January 9-11, 2026</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <MapPin size={18} className="text-isf-orange shrink-0" />
                      <span>InterContinental Dubai Festival City, UAE</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <Users size={18} className="text-isf-orange shrink-0" />
                      <span>500+ Global Delegates, CXOs & International Investors</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Cohort 2.0 brought Junicorn innovators to the Middle East's premier innovation hub in Dubai, connecting youth founders with international venture capitalists, CXOs, and diplomatic leaders across 3 transformational days.
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Highlights:</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Hosted alongside Global CIO Circle at InterContinental Dubai</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Live prototype showcases to GCC & international investors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Cross-border trade and ecosystem integration workshops</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/cohort-2-dubai"
                      className="inline-flex items-center gap-2 bg-[#026956] hover:bg-[#025243] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow transition-all"
                    >
                      <span>View Dubai Summit</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Cohort 2.0 Featured Image */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="bg-white p-3 rounded-2xl border border-emerald-200/80 shadow-md w-full">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-xs border border-slate-100">
                      <img
                        src={getImageUrl("/assets/cohort3/group-photo.png")}
                        alt="Cohort 2.0 Dubai Group Photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-3 p-2.5 bg-emerald-50 rounded-xl text-center border border-emerald-100">
                      <span className="text-xs font-bold text-[#026956]">
                        Cohort 2.0 Delegates & Global Mentors
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Cohort 1.0 Tab Content */}
            {activeCohortTab === "cohort-1" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E5532A] bg-orange-50 border border-orange-200 px-3.5 py-1 rounded-full inline-block">
                    COHORT 1.0 • AUSTIN TEXAS USA
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-baskerville text-slate-900 leading-tight">
                    Cohort 1.0: Austin USA Pitch Competition & Summit
                  </h3>
                  
                  <div className="space-y-2.5 py-1">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <Calendar size={18} className="text-isf-orange shrink-0" />
                      <span>May 2024 - 2025</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <MapPin size={18} className="text-isf-orange shrink-0" />
                      <span>McCoy College of Business, Texas State University, Austin TX</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <Users size={18} className="text-isf-orange shrink-0" />
                      <span>100+ Delegates, 27 Student Delegates & US Investors</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    The inaugural Junicorns Cohort took 27 student innovators from rural India to Austin, Texas. Delegates pitched their hardware & software solutions directly to Silicon Hills venture capitalists, academic deans, and global leaders.
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Highlights:</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Pioneering delegation of rural Indian youth to Silicon Hills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Partnerships with McCoy College of Business & Texas State University</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>100% of delegates received mentorship & US investor exposure</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/cohort-1-austin"
                      className="inline-flex items-center gap-2 bg-[#E5532A] hover:bg-[#D4431B] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow transition-all"
                    >
                      <span>Explore Cohort 1.0 Austin</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Cohort 1.0 Featured Image */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="bg-white p-3 rounded-2xl border border-orange-200/80 shadow-md w-full">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-xs border border-slate-100">
                      <img
                        src="/assets/themes/jupiterx/junicon-26/images/1-Dflng3M3.jpeg"
                        alt="Cohort 1.0 Austin Texas Summit"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-3 p-2.5 bg-orange-50 rounded-xl text-center border border-orange-100">
                      <span className="text-xs font-bold text-[#E5532A]">
                        Cohort 1.0 Austin Summit Delegation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 8. FAQs Section */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-extrabold text-isf-orange tracking-widest uppercase block font-inter">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-baskerville text-slate-900 leading-tight text-center">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded mt-4"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-slate-50/50 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-slate-900 pr-8 font-baskerville text-base sm:text-lg leading-snug">
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp size={20} className="text-isf-orange shrink-0 transition-transform duration-300" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400 shrink-0 transition-transform duration-300" />
                  )}
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === idx ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-slate-600 text-sm leading-relaxed font-inter">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
