import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ChevronLeft, ChevronRight, Play, Clock, Building, Map, Volume2, VolumeX, ChevronDown, ChevronUp } from "lucide-react";
import { speakers as austinSpeakers, junicorns as austinJunicorns, angels as austinAngels } from "./conferences/summitData";
import { junicorns as dubaiJunicorns } from "./conferences/dubaiEventData";

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

const mediaVideos = [
  { id: "POtf5roWMwE", title: "Global Mentorship Program", category: "Mentorship" },
  { id: "hVPoLKMRfKQ", title: "ISF Summit Highlights", category: "Summit" },
  { id: "nP4ME1M5Ev4", title: "Empowering Rural Ambitions", category: "Rural Innovation" },
  { id: "iWi1173Bh_0", title: "Junicorns Pitching Session", category: "Pitches" },
  { id: "n6hSZS8wi-o", title: "Future Leaders Showcase", category: "Leaders" },
  { id: "8DiEYebHZUY", title: "Ecosystem Partner Network", category: "Ecosystem" },
  { id: "Z1PXHqvQ_sY", title: "Startup Scaling & Success", category: "Startups" },
  { id: "fDpX7sfh8d4", title: "Innovation Spotlight", category: "Spotlight" }
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

interface VideoCardProps {
  videoId: string;
  title: string;
  category: string;
}

function VideoCard({ videoId, title, category }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[280px] sm:w-[340px] shrink-0 bg-white border border-slate-200/60 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 16:9 Video Container */}
      <div className="w-full aspect-video relative overflow-hidden bg-slate-950">
        {/* Static YouTube Thumbnail Overlay */}
        <div 
          className={`absolute inset-0 transition-opacity duration-300 z-10 ${
            isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-isf-orange group-hover:border-isf-orange transition-all duration-300 shadow-md">
              <Play size={18} className="text-white fill-white ml-0.5" />
            </div>
          </div>
        </div>

        {/* Embed on Hover */}
        {isHovered && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${videoId}`}
            title={title}
            className="w-full h-full border-0 absolute inset-0 pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )}
      </div>

      {/* Card Content details below */}
      <div className="p-4 sm:p-5 flex flex-col gap-2 flex-grow text-left bg-white">
        <span className="text-[10px] sm:text-xs font-bold text-isf-orange tracking-widest uppercase font-inter">
          {category}
        </span>
        <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug font-inter line-clamp-2 group-hover:text-isf-orange transition-colors duration-300">
          {title}
        </h4>
      </div>
    </div>
  );
}

export function LandingPage() {
  const [activeTab, setActiveTab] = useState("2026");
  const [heroIndex, setHeroIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [junicornIndex, setJunicornIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const junicornSlides = [
    {
      tag: "Cohort 2",
      title: "Junicorns Cohort 2 Innovators Team",
      image: "/assets/cohort3/team.png"
    },
    {
      tag: "Cohort 1",
      title: "Junicorns Cohort 1 Graduation & Pitches",
      image: "/assets/themes/jupiterx/junicon-26/images/1-Dflng3M3.jpeg"
    }
  ];

  // Auto-play video when scrolled into view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Attempt autoplay unmuted first to respect volume requirement
            video.muted = false;
            setIsMuted(false);
            video.play().catch(() => {
              // Fallback to muted autoplay if browser blocks audio autoplay
              video.muted = true;
              setIsMuted(true);
              video.play().catch(err => console.log("Video playback error:", err));
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto slide Junicorns images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setJunicornIndex((prev) => (prev + 1) % junicornSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [junicornSlides.length]);

  const heroSlides = [
    {
      tag: "Cohort 3.0",
      title: "Junicorn Rural Innovation Challenge — Cohort 3.0",
      desc: "Bridging the gap between rural ambition and global opportunity. Empowering young innovators from across 20+ states to transform ideas into viable start-up ventures. Tentative Event Date: December 2026.",
      primaryBtnText: "Apply Now",
      primaryBtnLink: "https://match.myanatomy.in/sc/69eaf7b184db4d003436f748/n",
      secondaryBtnText: "Cohort Details",
      secondaryBtnLink: "/cohort-3",
      image: "/assets/cohort3/bangalore-skyline.png",
      bgGradient: "from-emerald-50 to-teal-100"
    },
    {
      tag: "Global Mentorship Program",
      title: "Join the International Startup Foundation’s Global Mentorship Program – One Hour a Week",
      desc: "Empower the next generation of innovators! This program connects mentors (experienced professionals, industry leaders) with mentees (startups, students, and aspiring entrepreneurs) worldwide. Share your expertise, inspire growth, and make a global impact—all in just one hour a week.",
      primaryBtnText: "Mentor Registration",
      primaryBtnLink: "/mentor-form",
      secondaryBtnText: "Mentee Registration",
      secondaryBtnLink: "/registration/student",
      image: "/assets/images/1hour-1week.png",
      bgGradient: "from-orange-50 to-orange-100"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);


  interface EventDetail {
    tag: string;
    title: string;
    date?: string;
    time?: string;
    location?: string;
    city?: string;
    desc?: string;
    isHighlight?: boolean;
    link: string;
    btnText?: string;
  }

  const events: Record<string, EventDetail[]> = {
    "2026": [
      {
        tag: "ISF 2026",
        title: "ISF Global Junicorn Cohort 3 & Competitions",
        desc: "The upcoming major events will feature the launch of Cohort 3 and exciting national-level startup competitions, bringing together the next generation of global innovators.",
        link: "https://match.myanatomy.in/sc/69eaf7b184db4d003436f748/n",
        btnText: "Apply Now"
      }
    ],
    "2025": [
      {
        tag: "ISF 2025 USA",
        title: "ISF Global AI Summit 2025",
        date: "29th and 30th May 2025",
        location: "Austin, USA",
        link: "https://globalaisummit.www.isfnetwork.org/"
      },
      {
        tag: "ISF 2025 USA",
        title: "Junicorn Taking Ideas to Global Platform",
        date: "29 MAY, 2025",
        location: "Dallas, United States of America",
        link: "/junicorn-taking-ideas-to-global-platform"
      }
    ],
    "2024": [
      {
        tag: "ISF 2024 INDIA",
        title: "ISF 2024 Hyderabad (Main Event)",
        date: "September 26 - 28, 2024",
        location: "Engineering Staff College of India (ESCI)",
        link: "/isf-hyderabad-2024-main"
      },
      {
        tag: "ISF 2024 INDIA",
        title: "Investor Connect & Curtain Raiser",
        date: "April 15, 2024",
        location: "MIT - ADT University, Pune",
        link: "/isf-2024-pune"
      },
      {
        tag: "ISF 2024 JAMAICA",
        title: "ISF Global CXO Summit",
        date: "June 5 - 9, 2024",
        location: "Montego Bay, Jamaica",
        link: "/isf-jamaica-isf-global-cxo-summit"
      },
      {
        tag: "ISF 2024 USA",
        title: "CXO Summit & Curtain Raiser",
        date: "June 2, 2024",
        location: "Bell Works, Holmdel, New Jersey",
        link: "/conference-delegate-registration-isf-usa-2024"
      }
    ],
    "2023": [
      {
        tag: "About ISF 2023 Mumbai",
        title: "An Introduction",
        desc: "Join us at India's Startup Fest, a hub for innovators and entrepreneurs. Witness the future of business unfold in a celebration of ideas, technology, and enterprise. Ignite your startup passion!",
        link: "/isf-2023"
      },
      {
        tag: "ISF INDIA STARTUP FESTIVAL, 2023",
        title: "Mark Unmissable Days",
        date: "September 27 - 28, 2023",
        time: "09:00 AM - 05:00 PM (Asia/Kolkata)",
        location: "Bombay Exhibition Centre (BEC)",
        city: "Mumbai, India",
        isHighlight: true,
        link: ""
      }
    ],
    "2022": [
      {
        tag: "About ISF 2022 Bangalore",
        title: "An Introduction",
        desc: "The largest network of best minds from the startup ecosystem of India is coming together to redefine the future of the StartUp Revolution. The Best Space to CONNECT, COLLABORATE and CELEBRATE India Today & India Tomorrow! CEO Connect, Investor Connect, Enabler Connect, StartUp Expo, Panel Discussions and Awards are the key highlights of ISF-2022 Bengaluru",
        link: ""
      },
      {
        tag: "ISF INDIA STARTUP FESTIVAL, 2022",
        title: "Redefining The Startup",
        date: "October 1 - 2, 2022",
        time: "09:00 AM - 05:00 PM (Asia/Kolkata)",
        location: "Sathya Sai Grama, Muddenahalli",
        city: "Bangalore, India",
        isHighlight: true,
        link: ""
      }
    ]
  };



  const vcLogos = [
    "/assets/images/vc1-1.jpg",
    "/assets/images/vc2-1.jpg",
    "/assets/images/vc3-1.jpg",
    "/assets/images/vc5-2.jpg",
    "/assets/images/vc6-1.jpg",
    "/assets/images/vc7-2.jpg",
    "/assets/images/vc10-1.jpg",
    "/assets/images/108-capital.jpg",
    "/assets/images/vc9-1.jpg",
    "/assets/images/vc8-2.jpg",
    "/assets/images/vc11-1.jpg",
    "/assets/images/vc14-1.jpg",
    "/assets/images/vc13-1.jpg",
    "/assets/images/vc12-1.jpg",
    "/assets/images/vc15-1.jpg",
    "/assets/images/vc18-1.jpg",
    "/assets/images/vc19-1.jpg",
    "/assets/images/vc20-1.jpg",
    "/assets/images/vc22-1.jpg",
    "/assets/images/vc21-1.jpg",
    "/assets/images/vc23-1.jpg",
    "/assets/images/vc24-1.jpg",
    "/assets/images/vc25-1.jpg",
    "/assets/images/vc27-1.jpg",
    "/assets/images/vc26-1.jpg",
    "/assets/images/vc29-1.jpg",
    "/assets/images/vc28-1.jpg",
    "/assets/images/cc-logo.jpg"
  ];

  const team = [
    {
      name: "J A Chowdary",
      role: "Key Architect, Indian Tech Industry",
      title: "Founder, ISF",
      image: "/assets/2024/02/J-A-Chowdary.jpg"
    },
    {
      name: "Deenanath Harapanahalli",
      role: "Founder & CEO, LifeCykul & Ontropi",
      title: "Co-founder, ISF",
      image: "/assets/2024/03/Deenanath-Harapanahalli.jpg"
    },
    {
      name: "Dr. Siva Mahesh Tangutooru",
      role: "Founder & CEO, Jama Botanics & TurfPearl Agritech",
      title: "Co-founder, ISF",
      image: "/assets/2024/02/Dr.-Siva-Mahesh-Tangutooru.jpg"
    },
    {
      name: "Seshadri Vangala",
      role: "Founder and Group CEO IFin Global Group & SGlobal Group",
      title: "Co-founder, ISF",
      image: "/assets/2024/02/Seshadri-Vangala.jpg"
    },
    {
      name: "M. Sathyendra Kumar",
      role: "Business Unit Head - India, Maccaferri Environmental Solutions Pvt Ltd",
      title: "Co-founder, ISF",
      image: "/assets/2024/03/M.-Sathyendra-Kumar.jpg"
    },
    {
      name: "Achyut Yerragangu",
      role: "Founder, CEO, Nature Quotient Ventures Pvt Ltd",
      title: "Co-founder & COO, International Startup Foundation",
      image: "/assets/2024/03/Achyut-Yerragangu.jpg"
    }
  ];

  return (
    <div className="font-inter pt-20">
      {/* 1. Hero Sliding Banner Section */}
      <section className="relative w-full border-b border-gray-200 overflow-hidden h-[680px] md:h-[520px]">
        {/* Carousel Container */}
        <div 
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${heroIndex * 100}%)` }}
        >
          {heroSlides.map((slide, idx) => (
            <div 
              key={idx} 
              className={`w-full h-full shrink-0 flex items-center justify-center bg-gradient-to-r ${slide.bgGradient} py-12 md:py-16`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
                  
                  {/* Left Column Text */}
                  <div className="md:col-span-7 space-y-5 text-left flex flex-col justify-center min-h-[260px]">
                    <span className="text-isf-orange font-bold uppercase tracking-wider text-xs block font-inter">
                      {slide.tag}
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl font-inter min-h-[60px]">
                      {slide.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-2">
                      {slide.primaryBtnLink.startsWith("http") ? (
                        <a
                          href={slide.primaryBtnLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-isf-orange hover:bg-isf-orange-hover text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded shadow transition-all cursor-pointer inline-flex items-center"
                        >
                          {slide.primaryBtnText}
                        </a>
                      ) : (
                        <Link
                          to={slide.primaryBtnLink}
                          className="bg-isf-orange hover:bg-isf-orange-hover text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded shadow transition-all cursor-pointer"
                        >
                          {slide.primaryBtnText}
                        </Link>
                      )}

                      {slide.secondaryBtnLink && (
                        slide.secondaryBtnLink.startsWith("http") ? (
                          <a
                            href={slide.secondaryBtnLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-gray-300 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded hover:bg-gray-50 transition-all cursor-pointer inline-flex items-center"
                          >
                            {slide.secondaryBtnText}
                          </a>
                        ) : (
                          <Link
                            to={slide.secondaryBtnLink}
                            className="bg-white border border-gray-300 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded hover:bg-gray-50 transition-all cursor-pointer"
                          >
                            {slide.secondaryBtnText}
                          </Link>
                        )
                      )}
                    </div>
                  </div>

                  {/* Right Column Graphic */}
                  <div className="md:col-span-5 relative flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full max-h-[240px] md:max-h-[300px] object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/isf-logo.webp";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <button
          onClick={() => setHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 hover:text-isf-orange p-3 rounded-full shadow border border-gray-200 z-20 focus:outline-none transition-all cursor-pointer flex items-center justify-center"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>
        <button
          onClick={() => setHeroIndex((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 hover:text-isf-orange p-3 rounded-full shadow border border-gray-200 z-20 focus:outline-none transition-all cursor-pointer flex items-center justify-center"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                heroIndex === idx ? "bg-isf-orange scale-110" : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 1.5. Trust and Impact Strip Section */}
      <section className="relative z-30 -mt-10 sm:-mt-12 md:-mt-16 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#FFFBF7] to-[#FFF8F2] shadow-[0_20px_50px_rgba(15,23,42,0.22)] border border-orange-100/60 p-6 md:p-8 rounded-xl md:rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 text-center divide-x-0 md:divide-x divide-slate-200/80">
            <div className="px-2">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-baskerville mb-1 sm:mb-2">
                <CountUp end={austinJunicorns.length + dubaiJunicorns.length} />
              </h3>
              <p className="text-[10px] sm:text-xs font-bold text-isf-orange uppercase tracking-wider font-inter">
                Junicorns Pitching
              </p>
            </div>
            <div className="px-2 md:border-t-0 border-t pt-4 md:pt-0 border-slate-200/80">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-baskerville mb-1 sm:mb-2">
                <CountUp end={austinSpeakers.length} suffix="+" />
              </h3>
              <p className="text-[10px] sm:text-xs font-bold text-isf-orange uppercase tracking-wider font-inter">
                Global Speakers
              </p>
            </div>
            <div className="px-2 md:border-t-0 border-t pt-4 md:pt-0 border-slate-200/80">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-baskerville mb-1 sm:mb-2">
                <CountUp end={austinAngels.length} />
              </h3>
              <p className="text-[10px] sm:text-xs font-bold text-isf-orange uppercase tracking-wider font-inter">
                Idea Angels
              </p>
            </div>
            <div className="px-2 md:border-t-0 border-t pt-4 md:pt-0 border-slate-200/80">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-baskerville mb-1 sm:mb-2">
                <CountUp end={vcLogos.length} suffix="+" />
              </h3>
              <p className="text-[10px] sm:text-xs font-bold text-isf-orange uppercase tracking-wider font-inter">
                VC & Investor Partners
              </p>
            </div>
            <div className="px-2 md:border-t-0 border-t pt-4 md:pt-0 border-slate-200/80">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-baskerville mb-1 sm:mb-2">
                <CountUp end={10000} suffix="+" />
              </h3>
              <p className="text-[10px] sm:text-xs font-bold text-isf-orange uppercase tracking-wider font-inter">
                Startup Registrations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dubai Video Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-100/50 aspect-video group">
            <video
              ref={videoRef}
              src="/assets/videos/dubai.mp4"
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            
            {/* Playback Control Overlay */}
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center pointer-events-none">
              <span className="text-white text-xs font-bold tracking-widest uppercase bg-slate-900/60 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Dubai CXO Summit
              </span>
            </div>

            {/* Mute/Unmute Floating Button */}
            <button
              onClick={() => {
                if (videoRef.current) {
                  const nextMuted = !videoRef.current.muted;
                  videoRef.current.muted = nextMuted;
                  setIsMuted(nextMuted);
                }
              }}
              className="absolute bottom-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-3 rounded-full shadow-lg transition-all cursor-pointer z-20 flex items-center justify-center"
            >
              {isMuted ? (
                <VolumeX size={20} className="text-white" />
              ) : (
                <Volume2 size={20} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 2b. About Junicorns (Junior Unicorns) Section */}
      <section className="py-20 bg-gradient-to-tr from-orange-50/20 via-white to-amber-50/15 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Rich Text content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold text-isf-orange tracking-widest uppercase block font-inter">
                FUTURE LEADERS OF INNOVATION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-baskerville text-[#0C3E2B] leading-tight">
                About <span className="text-[#D24D7F]">Junicorns</span> <span className="text-slate-800 font-sans font-light text-2xl sm:text-3xl block mt-1">(Junior Unicorns)</span>
              </h2>
              
              <div className="w-16 h-1 bg-[#D24D7F] rounded-full"></div>
              
              <div className="space-y-4 text-slate-700 font-inter font-medium leading-relaxed text-sm md:text-base">
                <p>
                  Junicorns (Junior Unicorns) is a prestigious flagship initiative by the International Startup Foundation. It identifies, nurtures, and empowers student entrepreneurs and young innovators from college incubators.
                </p>
                <p>
                  By connecting them with global mentors, executive workshops, and direct investor raising channels, Junicorns bridges the gap between campus ideas and commercial success.
                </p>
              </div>
              
              <div className="pt-4">
                <Link
                  to="/junicornshub"
                  className="bg-[#D24D7F] hover:bg-[#C73E6E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow transition-all inline-block cursor-pointer"
                >
                  About Junicorn
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Slide Gallery */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 bg-white p-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={junicornSlides[junicornIndex].image}
                    alt={junicornSlides[junicornIndex].title}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/isf-logo.webp";
                    }}
                  />
                  {/* Title and Tag Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white text-left">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block font-inter mb-1">
                      {junicornSlides[junicornIndex].tag}
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold font-baskerville !text-white" style={{ color: '#ffffff' }}>
                      {junicornSlides[junicornIndex].title}
                    </h3>
                  </div>
                </div>

                {/* Slider pagination dots */}
                <div className="flex justify-center space-x-2 mt-4">
                  {junicornSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setJunicornIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        junicornIndex === idx ? "bg-[#D24D7F] w-6" : "bg-slate-200 hover:bg-slate-300 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Three Event Cards: Pune, USA, AI Summit */}
      <section className="py-16 bg-gradient-to-tr from-[#FFF7E3]/60 via-slate-50 to-[#FFE7AB]/25 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: ISF 2024 Pune */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm space-y-4 hover:border-isf-orange transition-colors group flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold text-isf-orange tracking-widest uppercase block">
                  Conference
                </span>
                <h3 className="text-lg sm:text-xl font-bold">
                  ISF 2024 Pune
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Connect with Pune's vibrant startup ecosystem, engage in strategic conversations, and explore collaboration opportunities with emerging innovators.
                </p>
              </div>
              <Link
                to="/isf-2024-pune"
                className="inline-block text-xs sm:text-sm font-bold text-isf-orange hover:text-isf-orange-hover uppercase tracking-wider pt-4 group-hover:underline"
              >
                Take Part Now →
              </Link>
            </div>

            {/* Card 2: ISF 2024 USA */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm space-y-4 hover:border-isf-orange transition-colors group flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold text-isf-orange tracking-widest uppercase block">
                  Global Summit
                </span>
                <h3 className="text-lg sm:text-xl font-bold">
                  ISF 2024 USA
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Join global delegates in New Jersey for high-impact networking, investor matchmaking, and cross-border startup collaboration at ISF's USA chapter.
                </p>
              </div>
              <Link
                to="/conference-delegate-registration-isf-usa-2024"
                className="inline-block text-xs sm:text-sm font-bold text-isf-orange hover:text-isf-orange-hover uppercase tracking-wider pt-4 group-hover:underline"
              >
                Take Part Now →
              </Link>
            </div>

            {/* Card 3: ISF AI Summit 2025 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm space-y-4 hover:border-isf-orange transition-colors group flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold text-isf-orange tracking-widest uppercase block">
                  AI Summit
                </span>
                <h3 className="text-lg sm:text-xl font-bold">
                  ISF AI Summit 2025
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Explore the frontier of artificial intelligence with top researchers, founders, and investors. Shape the future of tech at ISF's premier AI conference.
                </p>
              </div>
              <Link
                to="/isf-ai-summit"
                className="inline-block text-xs sm:text-sm font-bold text-isf-orange hover:text-isf-orange-hover uppercase tracking-wider pt-4 group-hover:underline"
              >
                Take Part Now →
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* 4. Events Timeline Tabs */}
      <section className="py-20 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block font-inter">
              INTERNATIONAL STARTUP FESTIVALS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-baskerville text-slate-900 leading-tight">
              ISF Events Timeline
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="flex justify-center gap-2 sm:gap-3 relative z-10 -mb-[1px] flex-wrap sm:flex-nowrap">
            {Object.keys(events).sort((a, b) => b.localeCompare(a)).map((year) => (
              <button
                key={year}
                onClick={() => setActiveTab(year)}
                className={`px-4 sm:px-8 py-2 md:py-3.5 text-sm sm:text-lg md:text-xl font-bold rounded-t-xl transition-all focus:outline-none cursor-pointer ${
                  activeTab === year
                    ? "bg-[#FFF7E3] text-[#D45625] border-t border-x border-[#FFE7C4]/30 font-extrabold"
                    : "bg-[#ECEFF1] text-[#1E293B] hover:bg-[#E2E8F0]"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Tab content card */}
          <div className="bg-[#FFF7E3] p-8 md:p-14 rounded-3xl md:rounded-[2rem] shadow-sm border border-[#FFE7C4]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              {events[activeTab as keyof typeof events].map((ev, idx) => {
                if (ev.isHighlight) {
                  return (
                    <div
                      key={idx}
                      className="bg-[#FFE7AB] p-8 md:p-10 rounded-3xl border border-[#FFDE95] flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider block font-inter">
                          {ev.tag}
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-baskerville text-slate-900 leading-snug">
                          {ev.title}
                        </h3>
                        <div className="space-y-3 pt-2">
                          <div className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                            <Calendar size={16} className="text-slate-900 shrink-0" />
                            <span>{ev.date}</span>
                          </div>
                          {ev.time && (
                            <div className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                              <Clock size={16} className="text-slate-900 shrink-0" />
                              <span>{ev.time}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                            <Building size={16} className="text-slate-900 shrink-0" />
                            <span>{ev.location}</span>
                          </div>
                          {ev.city && (
                            <div className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                              <Map size={16} className="text-slate-900 shrink-0" />
                              <span>{ev.city}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }

                if (ev.desc) {
                  return (
                    <div
                      key={idx}
                      className="flex flex-col justify-between items-start space-y-6"
                    >
                      <div className="space-y-4">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block font-inter">
                          {ev.tag}
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-baskerville text-slate-900 leading-snug">
                          {ev.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                          {ev.desc}
                        </p>
                      </div>
                      {ev.link && (
                        <div>
                          {ev.link.startsWith("http") ? (
                            <a
                              href={ev.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-[#D45625] hover:bg-[#B8451B] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded shadow transition-colors cursor-pointer"
                            >
                              {ev.btnText || "KNOW MORE"}
                            </a>
                          ) : (
                            <Link
                              to={ev.link}
                              className="inline-block bg-[#D45625] hover:bg-[#B8451B] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded shadow transition-colors cursor-pointer"
                            >
                              {ev.btnText || "KNOW MORE"}
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                // Standard fallback card
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between items-start space-y-6"
                  >
                    <div className="space-y-4">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block font-inter">
                        {ev.tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-baskerville text-slate-900 leading-snug">
                        {ev.title}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2.5 text-sm text-slate-600">
                          <Calendar size={16} className="text-[#D45625] shrink-0" />
                          <span>{ev.date}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-sm text-slate-600">
                          <MapPin size={16} className="text-[#D45625] shrink-0" />
                          <span>{ev.location}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      {ev.link && (
                        ev.link.startsWith("http") ? (
                          <a
                            href={ev.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#D45625] hover:bg-[#B8451B] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded shadow transition-colors cursor-pointer"
                          >
                            {ev.btnText || "KNOW MORE"}
                          </a>
                        ) : (
                          <Link
                            to={ev.link}
                            className="inline-block bg-[#D45625] hover:bg-[#B8451B] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded shadow transition-colors cursor-pointer"
                          >
                            {ev.btnText || "KNOW MORE"}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20 bg-slate-50 border-b border-gray-100 overflow-hidden relative">
        {/* Subtle grid lines background overlay */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="media-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#media-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold text-isf-orange tracking-widest uppercase block font-inter">
              Moments & Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-baskerville text-slate-900 leading-tight">
              Media Showcase
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-light font-inter">
              Highlights, stories, and moments from our global summits and challenges.
            </p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded mt-4"></div>
          </div>
        </div>

        {/* Carousel / Marquee Container */}
        <div className="w-full flex overflow-hidden py-4 select-none relative z-10">
          <div className="flex gap-6 min-w-max animate-marquee hover:[animation-play-state:paused]">
            {/* Double the array elements to ensure seamless loop */}
            {[...mediaVideos, ...mediaVideos].map((video, idx) => (
              <VideoCard
                key={`${video.id}-${idx}`}
                videoId={video.id}
                title={video.title}
                category={video.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VC & Investor Connect Section */}
      <section className="py-16 bg-[#f9f9f9] border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center space-y-3 mb-10">
            <span className="text-isf-orange font-bold uppercase tracking-widest text-[11px] sm:text-xs max-w-xl mx-auto block">
              Your Gateway to Unparalleled Investment Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-[#111111]">
              ISF VC & INVESTOR CONNECT
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded mt-4"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center max-w-6xl mx-auto">
            {vcLogos.map((logo, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border border-[#e6e6e6] hover:shadow-md transition-shadow flex items-center justify-center p-3 w-28 h-16 md:w-36 md:h-20 lg:w-40 lg:h-24">
                <img src={logo} alt={`VC Partner ${idx+1}`} className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-75 hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ISF Conference Team */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-2xl font-bold font-baskerville">
              ISF Conference Team
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-gray-100 rounded-lg p-6 text-center space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto bg-gray-200 border-2 border-isf-orange/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/cropped-isf-favicon-192x192.png";
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900 font-baskerville">
                    {member.name}
                  </h4>
                  <p className="text-xs text-isf-orange font-semibold">
                    {member.title}
                  </p>
                  <p className="text-xxs text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5. FAQ Section */}
      <section className="py-20 bg-slate-50 border-b border-gray-100">
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
                className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
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

      {/* 7. Organiser & Ecosystem Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase font-inter">
            Ecosystem Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75">
            <img
              src="/assets/images/isf-Logo-Final-TOL.png"
              alt="Partner 1"
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all cursor-pointer"
            />
            <span className="text-xs font-bold text-slate-400 tracking-wider">
              TiE Grad Global
            </span>
            <span className="text-xs font-bold text-slate-400 tracking-wider">
              LifeCykul
            </span>
            <span className="text-xs font-bold text-slate-400 tracking-wider">
              Ontropi
            </span>
            <span className="text-xs font-bold text-slate-400 tracking-wider">
              AP Innovation Valley
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
