import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Compass, 
  Rocket, 
  Globe, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Users, 
  Zap,
  Building,
  ChevronRight,
  Trophy,
  Medal,
  Star
} from "lucide-react";
import { getImageUrl } from "../../utils/imageUtils";

// ─── Scroll-triggered Fade In Component ─────────────────────────────────────
function FadeInCard({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated Curved Journey Line Component ──────────────────────────────────
function AnimatedCurvedJourneyLine({ targetRef }: { targetRef: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 70%", "end 30%"]
  });

  // Apply spring physics for butter-smooth fluid movement with scroll inertia
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  // Calculate the dot Y position (0% to 100%)
  const dotY = useTransform(smoothProgress, v => `${v * 100}%`);
  
  // Calculate the dot X position. Weave in central corridor (X=42% to 58%)
  const dotX = useTransform(smoothProgress, v => {
    const angle = v * 6 * Math.PI;
    const normalized = (Math.cos(angle) + 1) / 2; // Oscillates 1 -> 0 -> 1 -> 0 -> 1
    return `${42 + normalized * 16}%`;
  });

  // Generate 1000-segment smooth SVG curve path centered in the middle corridor (X=42% to 58%)
  const pathD = Array.from({ length: 1000 }).map((_, i) => {
    const v = i / 999;
    const y = v * 100;
    const angle = v * 6 * Math.PI;
    const normalized = (Math.cos(angle) + 1) / 2;
    const x = 42 + normalized * 16;
    return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
  }).join(' ');

  // Smooth clipPath reveal from top to bottom perfectly aligned with smoothProgress
  const clipPath = useTransform(smoothProgress, v => `inset(0 0 ${Math.max(0, (1 - v) * 100)}% 0)`);
  const dotOpacity = useTransform(smoothProgress, [0, 0.01, 0.99, 1], [0, 1, 1, 0]);

  return (
    <>
      {/* Desktop Curved Center Line */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden md:block">
        {/* Background static dashed curved track - ALWAYS VISIBLE AS A GUIDE */}
        <svg
          className="w-full h-full overflow-visible opacity-30"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d={pathD}
            fill="none"
            stroke="#64748B"
            strokeWidth="3.5"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="6 6"
          />
        </svg>

        {/* Animated glowing gradient curved line revealed with smooth clipPath */}
        <motion.div className="absolute inset-0" style={{ clipPath }}>
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ filter: "drop-shadow(0 0 10px rgba(210,77,127,0.6)) drop-shadow(0 0 14px rgba(229,83,42,0.5))" }}
          >
            <defs>
              <linearGradient id="journeyLightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D24D7F" />
                <stop offset="35%" stopColor="#E5532A" />
                <stop offset="70%" stopColor="#EAB308" />
                <stop offset="100%" stopColor="#026956" />
              </linearGradient>
            </defs>
            <path
              d={pathD}
              fill="none"
              stroke="url(#journeyLightGrad)"
              strokeWidth="5"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Animated moving glowing pulse dot riding along the curve */}
        <motion.div
          style={{ top: dotY, left: dotX, opacity: dotOpacity }}
          className="absolute w-6 h-6 rounded-full bg-amber-400 border-2 border-white shadow-[0_0_20px_#F59E0B] -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-slate-900 animate-ping" />
        </motion.div>
      </div>

      {/* Mobile Left-Aligned Line */}
      <div className="absolute left-4 top-0 bottom-0 w-1 pointer-events-none z-10 md:hidden">
        <div className="absolute inset-0 bg-slate-200 rounded-full" />
        <motion.div
          style={{ clipPath }}
          className="absolute inset-0 bg-gradient-to-b from-[#D24D7F] via-[#E5532A] to-[#026956] rounded-full shadow-md"
        />
      </div>
    </>
  );
}

export function ISFJourney() {
  const [activeTab, setActiveTab] = useState<"events" | "awards">("events");
  const eventsTimelineRef = useRef<HTMLDivElement>(null);
  const awardsTimelineRef = useRef<HTMLDivElement>(null);

  // Timeline events array sorted NEWEST to OLDEST (2026 → Genesis)
  const timelineEvents = [
    {
      id: "cohort-3-launch-2026",
      year: "2026",
      date: "June 2026",
      title: "ISF Junicorn Cohort 3.0 National Launch",
      location: "Pan-India & Global Tech Hubs",
      category: "National Movement",
      tagColor: "bg-pink-100 text-[#D24D7F] border-pink-300",
      badgeColor: "bg-[#D24D7F] text-white",
      accentLine: "bg-gradient-to-r from-[#D24D7F] to-purple-500",
      desc: "Massive scale-up of the Junicorns program targeting 100,000 young innovators across rural schools, colleges, and Tier 2/3 universities in India.",
      highlights: [
        "25 Hardware and Software breakthrough prototypes cataloged",
        "Monthly J-Spotlight regional pitch meets across tech hubs",
        "Direct pathway to global investor summits in Texas & Dubai"
      ],
      image: getImageUrl("/assets/images/1hour-1week.png"),
      link: "/cohort-3",
      isExternal: false,
      linkText: "Explore Cohort 3.0"
    },
    {
      id: "dubai-summit-jan-2026",
      year: "2026",
      date: "January 9-11, 2026",
      title: "Cohort 2.0: Dubai Global Innovation Summit & Retreat",
      location: "InterContinental Dubai Festival City, UAE",
      category: "International Summit",
      tagColor: "bg-emerald-100 text-[#026956] border-emerald-300",
      badgeColor: "bg-[#026956] text-white",
      accentLine: "bg-gradient-to-r from-[#026956] to-teal-400",
      desc: "500+ global delegates, CXOs, and Middle East VCs assembled in Dubai. Junicorn student delegates showcased hardware & AI prototypes to GCC investor networks.",
      highlights: [
        "Hosted alongside Global CIO Circle at InterContinental Dubai",
        "Live prototype showcases to international venture capital funds",
        "Cross-border trade and ecosystem integration workshops"
      ],
      image: getImageUrl("/assets/cohort3/group-photo.png"),
      link: "/cohort-2-dubai",
      isExternal: false,
      linkText: "View Dubai Summit"
    },
    {
      id: "investor-meet-nov-2025",
      year: "2025",
      date: "November 2025",
      title: "ISF Investor Conclave & Angel Network Expansion",
      location: "Bengaluru & Hyderabad",
      category: "Investor Conclave",
      tagColor: "bg-purple-100 text-purple-900 border-purple-300",
      badgeColor: "bg-purple-600 text-white",
      accentLine: "bg-gradient-to-r from-purple-600 to-indigo-500",
      desc: "Connecting 200+ angel investors, family offices, and VCs with early-stage deep-tech, agri-tech, and rural youth startups.",
      highlights: [
        "Expansion of ISF Angel Network for early-stage prototype funding",
        "Speed-dating sessions between founders and institutional investors",
        "Over ₹15 Cr committed in seed funding pathways"
      ],
      image: getImageUrl("/assets/images/journey-highlight-2.jpg"),
      link: "/junicornshub",
      isExternal: false,
      linkText: "Learn More"
    },
    {
      id: "prototyping-bootcamp-aug-2025",
      year: "2025",
      date: "August 2025",
      title: "Junicorns Prototyping Bootcamp & SDG Hackathon",
      location: "T-Works & SRM University",
      category: "Innovation Camp",
      tagColor: "bg-cyan-100 text-cyan-900 border-cyan-300",
      badgeColor: "bg-cyan-600 text-white",
      accentLine: "bg-gradient-to-r from-cyan-600 to-blue-500",
      desc: "Intensive 3-day hardware & software MVP building bootcamp for 150+ selected student innovators tackling UN Sustainable Development Goals.",
      highlights: [
        "Hands-on prototyping support at T-Works hardware maker lab",
        "One-on-one technical guidance from 50+ industry engineering leads",
        "Top 10 prototypes selected for global summit travel grants"
      ],
      image: getImageUrl("/assets/images/journey-highlight-3.jpg"),
      link: "/1hour-per-week",
      isExternal: false,
      linkText: "View Mentorship Program"
    },
    {
      id: "hyderabad-festival-sep-2024",
      year: "2024",
      date: "September 2024",
      title: "ISF 2024 Hyderabad Global Startup Festival",
      location: "HITEX Exhibition Centre, Hyderabad",
      category: "Flagship Festival",
      tagColor: "bg-orange-100 text-[#E5532A] border-orange-300",
      badgeColor: "bg-[#E5532A] text-white",
      accentLine: "bg-gradient-to-r from-[#E5532A] to-amber-500",
      desc: "India's premier grassroots startup convention uniting 50,000+ attendees, 800+ VCs, 100+ global delegates, and 500+ startup exhibition stalls.",
      highlights: [
        "Inaugurated by ministers and global technology leaders",
        "Massive Expo featuring rural, women-led, and student startups",
        "Ankura Bus Yatra covered 25+ districts mobilizing youth"
      ],
      image: getImageUrl("/assets/images/isf-logo-festival-2024.png"),
      link: "/isf-hyderabad-2024-main",
      isExternal: false,
      linkText: "Explore Hyderabad Festival"
    },
    {
      id: "austin-summit-may-2024",
      year: "2024",
      date: "May 2024",
      title: "Cohort 1.0: Austin USA Pitch Competition & Summit",
      location: "Texas State University, Austin TX, USA",
      category: "US Expedition",
      tagColor: "bg-amber-100 text-amber-900 border-amber-300",
      badgeColor: "bg-amber-600 text-white",
      accentLine: "bg-gradient-to-r from-amber-600 to-orange-500",
      desc: "Inaugural Junicorn delegation taking 27 student founders from rural India to Silicon Hills, Austin TX, pitching directly to American VCs and McCoy College deans.",
      highlights: [
        "Pioneering delegation of rural Indian youth to Silicon Hills",
        "Academic partnership with McCoy College of Business at Texas State University",
        "100% of delegates received international mentor matching"
      ],
      image: getImageUrl("/assets/themes/jupiterx/junicon-26/images/1-Dflng3M3.jpeg"),
      link: "/cohort-1-austin",
      isExternal: false,
      linkText: "Explore Austin Summit"
    },
    {
      id: "pune-conclave-jul-2024",
      year: "2024",
      date: "July 2024",
      title: "ISF 2024 Pune Startup Conclave",
      location: "Pune, Maharashtra",
      category: "Regional Summit",
      tagColor: "bg-teal-100 text-teal-900 border-teal-300",
      badgeColor: "bg-teal-600 text-white",
      accentLine: "bg-gradient-to-r from-teal-600 to-emerald-500",
      desc: "Industrial leadership summit focusing on MSME digitization, EV manufacturing, and West India startup ecosystem growth.",
      highlights: [
        "Focus on EV mobility, Deep-Tech, and Industrial Automation",
        "100+ West India startups pitched to Angel networks",
        "MoU signed for regional university incubation centers"
      ],
      image: getImageUrl("/assets/images/courthouse.jpg"),
      link: "/isf-2024-pune",
      isExternal: false,
      linkText: "View Pune Conclave"
    },
    {
      id: "jamaica-retreat-apr-2024",
      year: "2024",
      date: "April 2024",
      title: "ISF 2024 Jamaica Global CXO Retreat",
      location: "Montego Bay, Jamaica",
      category: "Caribbean Retreat",
      tagColor: "bg-blue-100 text-blue-900 border-blue-300",
      badgeColor: "bg-blue-600 text-white",
      accentLine: "bg-gradient-to-r from-blue-600 to-sky-500",
      desc: "Caribbean & Latin America CXO gathering fostering cross-border trade, tech transfer, and global mentorship expansion.",
      highlights: [
        "Addressed by Sen. Hon. Aubyn Hill, Minister of Industry & Commerce, Jamaica",
        "Cross-border tech transfer agreements signed",
        "Launch of Latin America mentor network"
      ],
      image: getImageUrl("/assets/images/jamaica-beach.jpg"),
      link: "/isf-jamaica-isf-global-cxo-summit",
      isExternal: false,
      linkText: "View Jamaica Summit"
    },
    {
      id: "journey-highlights-2023",
      year: "2023",
      date: "Full Year 2023",
      title: "2023 Journey Highlights: Foundation & Rural Outreach",
      location: "Bengaluru, Hyderabad & Regional Centers",
      category: "Ecosystem Milestones",
      tagColor: "bg-purple-100 text-purple-900 border-purple-300",
      badgeColor: "bg-purple-600 text-white",
      accentLine: "bg-gradient-to-r from-purple-600 via-[#D24D7F] to-[#E5532A]",
      desc: "A landmark founding year establishing the core infrastructure for International Startup Foundation, onboarding 200+ inaugural mentors and conducting rural innovation drives.",
      highlights: [
        "Rolled out the 3 M's Framework: Mentorship, Market Access, and Capital Pathways",
        "Onboarded initial 200+ industry CXOs across India and global hubs",
        "Conducted 15+ university & college outreach sessions for student founders",
        "Laid the groundwork for the inaugural Junicorns Cohort 1.0 delegation"
      ],
      image: getImageUrl("/assets/images/journey-highlight-1.jpg"),
      link: "/aboutus",
      isExternal: false,
      linkText: "Explore 2023 Highlights"
    },
    {
      id: "genesis-2023",
      year: "Genesis",
      date: "2023",
      title: "Inauguration of International Startup Foundation (ISF)",
      location: "Bengaluru & Hyderabad, India",
      category: "Foundation Genesis",
      tagColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
      badgeColor: "bg-indigo-600 text-white",
      accentLine: "bg-gradient-to-r from-indigo-600 to-purple-500",
      desc: "Founded by IT industry veteran Dr. J A Chowdary with the mission to democratize entrepreneurship, bridging rural talent with global mentorship, market access, and capital.",
      highlights: [
        "Establishment of the 3 M's Framework (Mentorship, Market Access, Money)",
        "Launch of 'One Hour a Week' Global Mentor Network",
        "Initiation of Junicorns Junior Unicorns Rural Innovation Movement"
      ],
      image: getImageUrl("/assets/speakers/JA_chowdary.jpg"),
      link: "/aboutus",
      isExternal: false,
      linkText: "Read ISF Story"
    }
  ];

  // Awards & Recognition array sorted NEWEST to OLDEST (2026 → Genesis)
  const awardsEvents = [
    {
      id: "global-innovation-award-2026",
      year: "2026",
      date: "January 2026",
      title: "Global Youth Innovator of the Year Award 2026",
      conferringBody: "International Startup Foundation & Dubai Chamber of Commerce",
      location: "Dubai Festival City, UAE",
      category: "Youth Innovation Honor",
      tagColor: "bg-amber-100 text-amber-900 border-amber-300",
      badgeColor: "bg-amber-500 text-slate-950",
      accentLine: "bg-gradient-to-r from-[#D24D7F] via-[#E5532A] to-amber-500",
      desc: "Recognizing top 5 student hardware & AI prototypes built by under-21 founders addressing UN Sustainable Development Goals.",
      highlights: [
        "$50,000 Total Equity-Free Grant Pool distributed across top 5 student teams",
        "International Acceleration Mentorship by GCC venture capital heads",
        "Global showcase at InterContinental Dubai Festival City"
      ],
      image: getImageUrl("/assets/cohort3/group-photo.png"),
      link: "/cohort-2-dubai",
      isExternal: false,
      linkText: "View Dubai Laureates"
    },
    {
      id: "national-grassroots-leadership-2025",
      year: "2025",
      date: "November 2025",
      title: "National Grassroots Startup Leadership Award 2025",
      conferringBody: "Federation of Indian Chambers & Industry Councils",
      location: "Vigyan Bhawan, New Delhi",
      category: "National Recognition",
      tagColor: "bg-pink-100 text-[#D24D7F] border-pink-300",
      badgeColor: "bg-[#D24D7F] text-white",
      accentLine: "bg-gradient-to-r from-[#D24D7F] to-purple-500",
      desc: "Awarded to International Startup Foundation for mobilizing 50,000+ Tier 2, Tier 3, and rural youth startups across India.",
      highlights: [
        "Honored for Ankura Bus Yatra reaching 25+ districts",
        "Recognized for 800+ pro-bono mentor onboarding via 1 Hour a Week",
        "Conferred at National Leadership Conclave in New Delhi"
      ],
      image: getImageUrl("/assets/speakers/JA_chowdary.jpg"),
      link: "/aboutus",
      isExternal: false,
      linkText: "Read Foundation Story"
    },
    {
      id: "mentor-excellence-citation-2025",
      year: "2025",
      date: "August 2025",
      title: "Exemplary Pro-Bono Mentorship Citation 2025",
      conferringBody: "ISF Global Advisory Board & T-Works",
      location: "T-Works Prototyping Center, Hyderabad",
      category: "Mentorship Citation",
      tagColor: "bg-emerald-100 text-[#026956] border-emerald-300",
      badgeColor: "bg-[#026956] text-white",
      accentLine: "bg-gradient-to-r from-[#026956] to-teal-400",
      desc: "Honoring top 20 corporate CXOs and tech leaders who contributed 50+ hours of dedicated one-on-one guidance to student founders.",
      highlights: [
        "Over 1,200 total mentorship hours completed in 2025",
        "45 student prototypes transformed into registered DPIIT startups",
        "Special citation presented by IT industry leaders"
      ],
      image: getImageUrl("/assets/images/1hour-1week.png"),
      link: "/1hour-per-week",
      isExternal: false,
      linkText: "Explore Mentorship Network"
    },
    {
      id: "austin-laureate-2024",
      year: "2024",
      date: "May 2024",
      title: "Austin Silicon Hills Innovation Laureate 2024",
      conferringBody: "McCoy College of Business, Texas State University",
      location: "Austin, Texas, USA",
      category: "International Academic Honor",
      tagColor: "bg-amber-100 text-amber-900 border-amber-300",
      badgeColor: "bg-amber-600 text-white",
      accentLine: "bg-gradient-to-r from-amber-600 to-orange-500",
      desc: "Conferred on the ISF Junicorns Cohort 1.0 delegation for outstanding student innovation presented at Texas State University.",
      highlights: [
        "27 student delegates honored on global stage in Austin, Texas",
        "Academic exchange and incubation pathways established with US universities",
        "100% international mentor matching for delegate founders"
      ],
      image: getImageUrl("/assets/themes/jupiterx/junicon-26/images/1-Dflng3M3.jpeg"),
      link: "/cohort-1-austin",
      isExternal: false,
      linkText: "Explore Austin Delegation"
    },
    {
      id: "hyderabad-ecosystem-award-2024",
      year: "2024",
      date: "September 2024",
      title: "Hyderabad Startup Ecosystem Excellence Award 2024",
      conferringBody: "Government of Telangana & ISF Network",
      location: "HITEX Exhibition Centre, Hyderabad",
      category: "State Ecosystem Award",
      tagColor: "bg-orange-100 text-[#E5532A] border-orange-300",
      badgeColor: "bg-[#E5532A] text-white",
      accentLine: "bg-gradient-to-r from-[#E5532A] to-amber-500",
      desc: "Celebrating 500+ exhibiting startups and top 10 pitch contest winners during the ISF 2024 Hyderabad Startup Festival.",
      highlights: [
        "₹25 Lakhs in non-dilutive prototype grants awarded to rural student builders",
        "Special commendation for women-led sustainable ventures",
        "50,000+ convention attendees across 3 festival days"
      ],
      image: getImageUrl("/assets/images/isf-logo-festival-2024.png"),
      link: "/isf-hyderabad-2024-main",
      isExternal: false,
      linkText: "Explore Festival Awards"
    },
    {
      id: "genesis-torchbearer-citation-2023",
      year: "Genesis",
      date: "2023",
      title: "Visionary Entrepreneurship Torchbearer Citation 2023",
      conferringBody: "Global Technology & Startup Leadership Forum",
      location: "Bengaluru, Karnataka",
      category: "Founding Citation",
      tagColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
      badgeColor: "bg-indigo-600 text-white",
      accentLine: "bg-gradient-to-r from-indigo-600 to-purple-500",
      desc: "Presented to Dr. J A Chowdary and the founding board of ISF for establishing the 3 M's Framework (Mentorship, Market Access, Money).",
      highlights: [
        "Democratizing startup mentorship for rural and Tier 2/3 youth",
        "Zero-fee platform model connecting student innovators with CXOs",
        "Initiation of Junior Unicorns (Junicorns) movement"
      ],
      image: getImageUrl("/assets/speakers/JA_chowdary.jpg"),
      link: "/aboutus",
      isExternal: false,
      linkText: "Read Foundation Story"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-slate-50 to-[#FFF7ED] text-slate-900 font-inter relative overflow-hidden pt-20 pb-24">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-100/50 rounded-full blur-[140px] pointer-events-none -z-0"></div>
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-200 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-800 shadow-sm">
            <Sparkles size={16} className="text-[#D24D7F] animate-pulse" />
            <span>INTERACTIVE SHOWCASE & CHRONICLE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5532A]"></span>
            <span className="text-slate-600 font-normal">2023 — 2026</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-baskerville tracking-tight leading-tight text-slate-900">
            The <span className="bg-gradient-to-r from-[#D24D7F] via-[#E5532A] to-[#026956] bg-clip-text text-transparent">ISF Journey</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            A comprehensive milestone showcase mapping global summits, ecosystem breakthroughs, youth expeditions, and prestigious honors across the International Startup Foundation.
          </p>
        </div>

        {/* Top 2 Main Navigation Tabs (Events vs Awards) */}
        <div className="mt-10 flex justify-center items-center gap-3 sm:gap-4 relative z-20">
          <button
            type="button"
            onClick={() => setActiveTab("events")}
            className={`inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "events"
                ? "bg-gradient-to-r from-[#D24D7F] via-[#E5532A] to-[#EAB308] text-white shadow-xl shadow-pink-500/25 scale-105"
                : "bg-white hover:bg-slate-100 text-slate-700 border border-gray-250 shadow-sm"
            }`}
          >
            <Calendar size={18} />
            <span>Events Timeline</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("awards")}
            className={`inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "awards"
                ? "bg-gradient-to-r from-[#D24D7F] via-[#E5532A] to-[#EAB308] text-white shadow-xl shadow-pink-500/25 scale-105"
                : "bg-white hover:bg-slate-100 text-slate-700 border border-gray-250 shadow-sm"
            }`}
          >
            <Trophy size={18} />
            <span>Awards & Recognition</span>
          </button>
        </div>

        {/* Tab Content with Side-Slide AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === "events" ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === "events" ? 40 : -40 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {activeTab === "events" ? (
              /* ─── EVENTS TIMELINE VIEW ──────────────────────────────── */
              <div ref={eventsTimelineRef} className="mt-16 md:mt-20 relative min-h-[600px]">
                
                {/* Animated Curved Journey Line */}
                <AnimatedCurvedJourneyLine targetRef={eventsTimelineRef} />

                {/* Events List */}
                <div className="space-y-16 md:space-y-28 relative z-20">
                  {timelineEvents.map((event, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <FadeInCard key={event.id} delay={0.1}>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                          
                          {/* Event Info Details Card */}
                          <div className={`md:col-span-5 ${isEven ? "md:order-1" : "md:order-3"} pl-10 md:pl-0`}>
                            <div className="bg-white border border-gray-200/90 p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-2xl hover:border-[#D45625]/50 transition-all duration-300 relative group overflow-hidden">
                              
                              {/* Top Accent Color Line */}
                              <div className={`absolute top-0 left-0 right-0 h-1.5 ${event.accentLine}`} />

                              {/* Header Badges */}
                              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pt-1">
                                <span className={`text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${event.tagColor}`}>
                                  {event.category}
                                </span>
                                <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full border border-gray-200">
                                  <Calendar size={13} className="text-[#E5532A]" />
                                  {event.date}
                                </span>
                              </div>

                              {/* Event Title */}
                              <h3 className="text-xl sm:text-2xl font-bold font-baskerville text-slate-900 group-hover:text-[#D24D7F] transition-colors leading-snug">
                                {event.title}
                              </h3>

                              {/* Location Row */}
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium mt-2">
                                <MapPin size={16} className="text-[#E5532A] shrink-0" />
                                <span>{event.location}</span>
                              </div>

                              {/* Description */}
                              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-3">
                                {event.desc}
                              </p>

                              {/* Highlights List */}
                              <div className="space-y-2 pt-3 border-t border-gray-150 mt-4">
                                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Key Highlights:</h4>
                                <ul className="space-y-1.5 text-xs text-slate-700 font-normal">
                                  {event.highlights.map((item, hIdx) => (
                                    <li key={hIdx} className="flex items-start gap-2">
                                      <CheckCircle2 size={14} className="text-[#026956] shrink-0 mt-0.5" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* CTA Link */}
                              <div className="pt-5 flex items-center justify-between">
                                {event.isExternal ? (
                                  <a
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D24D7F] hover:text-[#E5532A] transition-colors"
                                  >
                                    <span>{event.linkText}</span>
                                    <ChevronRight size={16} />
                                  </a>
                                ) : (
                                  <Link
                                    to={event.link}
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D24D7F] hover:text-[#E5532A] transition-colors"
                                  >
                                    <span>{event.linkText}</span>
                                    <ChevronRight size={16} />
                                  </Link>
                                )}
                                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${event.badgeColor}`}>
                                  {event.year}
                                </span>
                              </div>

                            </div>
                          </div>

                          {/* Central Corridor Node Badge */}
                          <div className="hidden md:flex md:col-span-2 md:order-2 justify-center items-center relative z-20">
                            <div className="w-12 h-12 rounded-full bg-white border-2 border-[#D45625] shadow-lg flex items-center justify-center text-xs font-extrabold text-slate-900 group-hover:scale-110 transition-transform">
                              <span className="bg-gradient-to-r from-[#D24D7F] to-[#E5532A] bg-clip-text text-transparent">
                                {event.year}
                              </span>
                            </div>
                          </div>

                          {/* Right Column (Photo Card) */}
                          <div className={`md:col-span-5 ${isEven ? "md:order-3" : "md:order-1"} pl-10 md:pl-0`}>
                            <div className="bg-white p-3 rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all group overflow-hidden">
                              <div className="aspect-[16/10] rounded-2xl overflow-hidden relative bg-slate-100">
                                <img
                                  src={event.image}
                                  alt={event.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                  onError={(e) => {
                                    e.currentTarget.src = "/assets/images/1hour-1week.png";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
                                  <span className="bg-slate-900/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                                    {event.category}
                                  </span>
                                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-bold text-amber-300">
                                    {event.year}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </FadeInCard>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* ─── AWARDS & RECOGNITION VIEW ────────────────────────── */
              <div ref={awardsTimelineRef} className="mt-16 md:mt-20 relative min-h-[600px]">
                
                {/* Animated Curved Journey Line */}
                <AnimatedCurvedJourneyLine targetRef={awardsTimelineRef} />

                {/* Awards List */}
                <div className="space-y-16 md:space-y-28 relative z-20">
                  {awardsEvents.map((award, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <FadeInCard key={award.id} delay={0.1}>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                          
                          {/* Award Info Details Card */}
                          <div className={`md:col-span-5 ${isEven ? "md:order-1" : "md:order-3"} pl-10 md:pl-0`}>
                            <div className="bg-white border border-gray-200/90 p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300 relative group overflow-hidden">
                              
                              {/* Top Accent Color Line */}
                              <div className={`absolute top-0 left-0 right-0 h-1.5 ${award.accentLine}`} />

                              {/* Header Badges */}
                              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pt-1">
                                <span className={`text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border flex items-center gap-1.5 ${award.tagColor}`}>
                                  <Trophy size={13} className="text-amber-600" />
                                  {award.category}
                                </span>
                                <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full border border-gray-200">
                                  <Calendar size={13} className="text-[#E5532A]" />
                                  {award.date}
                                </span>
                              </div>

                              {/* Award Title */}
                              <h3 className="text-xl sm:text-2xl font-bold font-baskerville text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                                {award.title}
                              </h3>

                              {/* Conferring Body Row */}
                              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-900 bg-amber-50/80 px-3 py-1.5 rounded-xl border border-amber-200/70 mt-3">
                                <Award size={16} className="text-amber-600 shrink-0" />
                                <span>{award.conferringBody}</span>
                              </div>

                              {/* Location Row */}
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium mt-2">
                                <MapPin size={16} className="text-[#E5532A] shrink-0" />
                                <span>{award.location}</span>
                              </div>

                              {/* Description */}
                              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-3">
                                {award.desc}
                              </p>

                              {/* Highlights List */}
                              <div className="space-y-2 pt-3 border-t border-gray-150 mt-4">
                                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Recognition Highlights:</h4>
                                <ul className="space-y-1.5 text-xs text-slate-700 font-normal">
                                  {award.highlights.map((item, hIdx) => (
                                    <li key={hIdx} className="flex items-start gap-2">
                                      <Star size={14} className="text-amber-500 shrink-0 mt-0.5 fill-amber-400" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* CTA Link */}
                              <div className="pt-5 flex items-center justify-between">
                                {award.isExternal ? (
                                  <a
                                    href={award.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-900 transition-colors"
                                  >
                                    <span>{award.linkText}</span>
                                    <ChevronRight size={16} />
                                  </a>
                                ) : (
                                  <Link
                                    to={award.link}
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-900 transition-colors"
                                  >
                                    <span>{award.linkText}</span>
                                    <ChevronRight size={16} />
                                  </Link>
                                )}
                                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${award.badgeColor}`}>
                                  {award.year}
                                </span>
                              </div>

                            </div>
                          </div>

                          {/* Central Corridor Node Badge */}
                          <div className="hidden md:flex md:col-span-2 md:order-2 justify-center items-center relative z-20">
                            <div className="w-12 h-12 rounded-full bg-white border-2 border-amber-500 shadow-lg flex items-center justify-center text-xs font-extrabold text-slate-900 group-hover:scale-110 transition-transform">
                              <Trophy size={18} className="text-amber-600" />
                            </div>
                          </div>

                          {/* Right Column (Ceremony Photo Card) */}
                          <div className={`md:col-span-5 ${isEven ? "md:order-3" : "md:order-1"} pl-10 md:pl-0`}>
                            <div className="bg-white p-3 rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all group overflow-hidden">
                              <div className="aspect-[16/10] rounded-2xl overflow-hidden relative bg-slate-100">
                                <img
                                  src={award.image}
                                  alt={award.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                  onError={(e) => {
                                    e.currentTarget.src = "/assets/images/1hour-1week.png";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
                                  <span className="bg-slate-900/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                                    <Medal size={13} className="text-amber-400" />
                                    {award.category}
                                  </span>
                                  <span className="bg-amber-500/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-extrabold text-slate-950">
                                    {award.year}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </FadeInCard>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer Call to Action Banner */}
        <div className="mt-24 max-w-4xl mx-auto bg-gradient-to-r from-emerald-50 via-white to-pink-50 border border-gray-200/90 p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-100 text-[#D24D7F] border border-pink-200 mb-2">
            <Rocket size={28} />
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-baskerville text-slate-900 leading-tight">
            Be Part of the Next Chapter in the ISF Journey
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-light leading-relaxed">
            Whether you're a student founder, school mentor, corporate CXO, or angel investor, there is a place for you in the ISF global ecosystem.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/registration/student"
              className="bg-gradient-to-r from-[#D24D7F] to-[#E5532A] hover:opacity-95 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-pink-500/20 transition-all"
            >
              Register as Innovator
            </Link>
            <Link
              to="/1hour-per-week"
              className="bg-white hover:bg-slate-50 text-slate-900 border border-gray-300 font-bold text-sm px-8 py-4 rounded-full shadow-sm transition-all"
            >
              Become a Mentor
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
