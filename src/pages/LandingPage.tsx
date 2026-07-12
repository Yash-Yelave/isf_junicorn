import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ChevronLeft, ChevronRight, Play, Clock, Building, Map, Volume2, VolumeX } from "lucide-react";

export function LandingPage() {
  const [activeTab, setActiveTab] = useState("2026");
  const [heroIndex, setHeroIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [junicornIndex, setJunicornIndex] = useState(0);

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
      tag: "Global Mentorship Program",
      title: "Join the International Startup Foundation’s Global Mentorship Program – One Hour a Week",
      desc: "Empower the next generation of innovators! This program connects mentors (experienced professionals, industry leaders) with mentees (startups, students, and aspiring entrepreneurs) worldwide. Share your expertise, inspire growth, and make a global impact—all in just one hour a week.",
      primaryBtnText: "Mentor Registration",
      primaryBtnLink: "/mentor-form",
      secondaryBtnText: "Mentee Registration",
      secondaryBtnLink: "/registration/student",
      image: "/assets/images/1hour-1week.png",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      tag: "ISF Events & Summits",
      title: "ISF Global Junicorn & AI Summit 2025",
      desc: "Empowering 100,000 innovators! Join us at the world's leading summit bridging artificial intelligence and startup ventures, connecting young innovators from college incubators directly to global investors and leaders.",
      primaryBtnText: "Summit Details",
      primaryBtnLink: "/isf-ai-summit",
      secondaryBtnText: "Explore Junicorns",
      secondaryBtnLink: "/junicornshub",
      image: "/assets/cohort3/junicorns-logo.png",
      bgGradient: "from-blue-50 to-indigo-105"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);


  const carouselSlides = [
    {
      image: "/assets/2024/08/CM-of-AP-1024x478.png",
      caption: "Inviting Shri Chandrababu Naidu Hon. CM of AP"
    },
    {
      image: "/assets/2024/08/Dy-CM-of-AP-1024x478.png",
      caption: "Inviting Shri Pawan Kalyan Hon. Deputy CM of AP"
    },
    {
      image: "/assets/2024/08/Industries-Secretary-AP-1024x478.png",
      caption: "Dr. N. Yuvaraj, Secretary, Department of Industries & Commerce, Govt of AP"
    },
    {
      image: "/assets/2024/08/K_Durgesh_Minister_of_Tourism_AP-1-1024x478.png",
      caption: "Inviting Shri Kandula Durgesh Hon. Minister for Tourism and Culture Government of AP"
    },
    {
      image: "/assets/2024/08/Union-minister-of-civil-aviation-1024x478.png",
      caption: "Inviting Shri Ram Mohan Naidu Kinjarapu Hon. Union Minister of Civil Aviation"
    },
    {
      image: "/assets/2024/08/Agriculture-Minister-of-AP-Shri-Achannaidu-1024x478.png",
      caption: "Inviting Shri Kinjarapu Atchannaidu, Agriculture Minister of AP"
    },
    {
      image: "/assets/2024/08/Cabinet-Minister-of-AP-1024x478.png",
      caption: "Shri Ponguru Narayana, Cabinet Minister of AP"
    },
    {
      image: "/assets/2024/08/ISF-Pune-1024x478.png",
      caption: "ISF Event at Pune"
    },
    {
      image: "/assets/2024/08/ISF-Jamaica-1024x478.png",
      caption: "ISF Event at Jamaica"
    },
    {
      image: "/assets/2024/08/ISF-Jamaica-1-1024x478.png",
      caption: "ISF Event at Jamaica"
    },
    {
      image: "/assets/2024/08/Richardson-city-Mayor-ISF-Dallas-1024x478.png",
      caption: "Meeting Mr.Mayor Robert Dubey at ISF Dallas"
    },
    {
      image: "/assets/2024/08/South-Texas-EDC-meet-with-ISF-1024x478.png",
      caption: "South Texas EDC meet with ISF"
    }
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleNextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  const handlePrevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };



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
  }

  const events: Record<string, EventDetail[]> = {
    "2026": [
      {
        tag: "ISF 2026",
        title: "ISF Global Junicorn Cohort 3 & Competitions",
        desc: "The upcoming major events will feature the launch of Cohort 3 and exciting national-level startup competitions, bringing together the next generation of global innovators.",
        link: ""
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

  const guests = [
    { name: "Dr. Sridhar Babu", title: "Hon'ble Minister for IT, E&C, Industries & Commerce, Govt of Telangana", img: "/assets/images/D.-Sridhar-Babu.png" },
    { name: "Nalamada Uttam Kumar Reddy", title: "Hon'ble Minister for Civil Supplies & Irrigation, Govt of Telangana", img: "/assets/images/uttam-kumar-reddy.jpg" },
    { name: "Bharat Mathukumilli", title: "Hon'ble Member of Parliament, Visakhapatnam", img: "/assets/images/srbharath.jpg" },
    { name: "Dr. Guna S. Muppuri", title: "Founder / President & CEO, BIMS - School of Medicine", img: "/assets/images/GUNA-S-MUPPURI.jpg" },
    { name: "Dr. Kalidindi N. Satyanarayana", title: "Director, I.I.T. Tirupati", img: "/assets/images/sathyanarayana.jpg" },
    { name: "Raj Narayanam", title: "Founder & Exec Chairman, Zaggle", img: "/assets/images/raj-narayanam.jpg" },
    { name: "Ajit Rangnekar", title: "Director-General, RICH Hyderabad", img: "/assets/images/ajit-rangnekar.jpg" },
    { name: "Jon Levingston", title: "Executive Director, Crossroads Economic Partnership", img: "/assets/images/jon-levingston.jpg" },
    { name: "Amit Gupta", title: "Founder & Group CEO, Ecosystm Group", img: "/assets/images/amit-gupta.jpg" },
    { name: "Sanjeev Deshpande", title: "EVP-APAC, MD-India NTT DATA", img: "/assets/images/sanjeev-deshpande.jpg" },
    { name: "Dr. BVR Mohan Reddy", title: "Founder Chairman & Board Member, CYIENT", img: "/assets/images/BVR-Mohan-Reddy.jpg" },
    { name: "Dr. J. M. Vyas", title: "Vice Chancellor - NFSU & Director General - DFS", img: "/assets/images/Vyas.jpg" },
    { name: "Ram Chilukuri", title: "Entrepreneur, Investor and Ex CEO SemanticBits", img: "/assets/images/ram-chilukuri.jpg" },
    { name: "Dr. G. Rameshwar Rao", title: "Director of Engineering Staff College of India", img: "/assets/images/rameswara-rao.jpg" },
    { name: "Dr. Sangita Reddy", title: "Joint Managing Director, Apollo Hospitals Group", img: "/assets/images/sangita-reddy.jpg" }
  ];

  const cxos = [
    { name: "A Balasubramanian", title: "MD & CEO, Aditya Birla Sun Life MF", img: "/assets/images/A-Balasubramanian,-MD-&-CEO,-Aditya-Birla-Sun-Life-MF.jpg" },
    { name: "Akhil Handa", title: "Founder, Credit Fintech Pvt Ltd", img: "/assets/images/Akhil-Handa,-Founder,-Credit-Fintech-Pvt-Ltd.jpg" },
    { name: "Chaitanya Gorrepati", title: "MD, DEShaw", img: "/assets/images/Chaitanya-Gorrepati,-MD,-DEShaw.jpg" },
    { name: "Chava Satyanarayana", title: "Founder & CEO, Laurus Labs", img: "/assets/images/Chava-Satyanarayana,-Founder-&-CEO,-Laurus-Labs.jpg" },
    { name: "Dayakar Puskoor", title: "Founder & MD, Dallas Venture Capital", img: "/assets/images/Dayakar-Puskoor,-Founder-&-MD,-Dallas-Venture-Capital.jpg" },
    { name: "Devika Penekelapati", title: "Founding Partner, Borders Law", img: "/assets/images/Devika-Penekelapati,-Founding-Partner,-Borders-Law.jpg" },
    { name: "Diwakar Dayal", title: "MD & VP - India & SAARC, SentinelOne", img: "/assets/images/Diwakar-Dayal,-MD-&-Area-Vice-President---India-&-SAARC,-SentinelOne.jpg" },
    { name: "Dr. Viswanadham Duppatla", title: "Vice President, Biopharma Innovations", img: "/assets/images/Dr.-Viswanadham-Duppatla,-Vice-President,-Biopharma-Innovations.jpg" },
    { name: "Dr Ashok Sangappa Alur", title: "Vice Chancellor, Kodagu University", img: "/assets/images/Dr-Ashok-Sangappa-Alur,-Vice-Chancellor,-Kodagu-University.jpg" },
    { name: "Dr Babu UV", title: "Director R&D, Himalaya Wellness", img: "/assets/images/user-placeholder.png" },
    { name: "Dr B Rajsekhar, IAS", title: "Special Chief Secretary to Government, GoAP", img: "/assets/images/Dr-B-Rajsekhar,-IAS,-Special-Chief-Secretary-to-Government-(Agriculture,-Sericulture,-Cooperation-and-Marketing),-GoAP.jpg" },
    { name: "Dr D Nageshwar Reddy", title: "Chairman, AIG Hospitals", img: "/assets/images/Dr-D-Nageshwar-Reddy,-Chairman,-AIG-Hospitals.jpg" },
    { name: "Dr Kanwaljeet Sunny Anand", title: "Professor of Pediatrics, Stanford University", img: "/assets/images/Dr-Kanwaljeet-Sunny-Anand,-Professor-of-Pediatrics-(Pediatric-Critical-Care)-and-Anesthesiology,-Perioperative-&-Pain-Medicine,-Stanford-University.jpg" }
  ];

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
                      <Link
                        to={slide.primaryBtnLink}
                        className="bg-isf-orange hover:bg-isf-orange-hover text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded shadow transition-all cursor-pointer"
                      >
                        {slide.primaryBtnText}
                      </Link>
                      <Link
                        to={slide.secondaryBtnLink}
                        className="bg-white border border-gray-300 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded hover:bg-gray-50 transition-all cursor-pointer"
                      >
                        {slide.secondaryBtnText}
                      </Link>
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
                  Explore Junicorns Hub
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

      {/* 3.5. Video and Image Carousel Layout (Side-by-Side Section) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Column (YouTube Embed) */}
            <div className="rounded-3xl overflow-hidden aspect-video shadow-md bg-slate-950 flex items-stretch border border-gray-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VyTBaNp5NzY?si=KB16ofHH0JGaOguE"
                title="Unveiling the International Startup Foundation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            
            {/* Right Column (Image Carousel) */}
            <div className="rounded-3xl overflow-hidden aspect-video shadow-md bg-slate-100 relative group border border-gray-200">
              <img
                src={carouselSlides[carouselIndex].image}
                alt={carouselSlides[carouselIndex].caption}
                className="w-full h-full object-cover transition-all duration-300"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-isf-orange hover:bg-isf-orange-hover text-white p-2 rounded shadow-sm focus:outline-none z-30 transition-all cursor-pointer flex items-center justify-center"
              >
                <ChevronLeft size={16} strokeWidth={2.5} />
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-isf-orange hover:bg-isf-orange-hover text-white p-2 rounded shadow-sm focus:outline-none z-30 transition-all cursor-pointer flex items-center justify-center"
              >
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
              
              {/* Pagination Dots */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-1.5 z-30">
                {carouselSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${
                      carouselIndex === idx ? "bg-isf-orange" : "bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
              
              {/* Caption Overlay */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 px-4 py-1.5 rounded-full shadow border border-gray-150 max-w-[85%] text-center text-slate-800 text-[10px] font-bold tracking-wide z-30 whitespace-nowrap overflow-hidden text-ellipsis">
                {carouselSlides[carouselIndex].caption}
              </div>
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
                              KNOW MORE
                            </a>
                          ) : (
                            <Link
                              to={ev.link}
                              className="inline-block bg-[#D45625] hover:bg-[#B8451B] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded shadow transition-colors cursor-pointer"
                            >
                              KNOW MORE
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
                            KNOW MORE
                          </a>
                        ) : (
                          <Link
                            to={ev.link}
                            className="inline-block bg-[#D45625] hover:bg-[#B8451B] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded shadow transition-colors cursor-pointer"
                          >
                            KNOW MORE
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

      {/* Distinguished Guests Section */}
      <section className="py-16 bg-[#f9f9f9] border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center space-y-3 mb-10">
            <span className="text-isf-orange font-bold uppercase tracking-widest text-xs">
              INTERNATIONAL STARTUP FESTIVALS 2024
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-[#111111]">
              Distinguished Guests at ISF Conference
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {guests.map((person, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-[#e6e6e6] overflow-hidden hover:shadow-md transition-shadow group flex flex-col items-center text-center p-4">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-gray-100">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-sm text-[#111111] mb-1 leading-tight">{person.name}</h3>
                <p className="text-xs text-[#666666] font-light leading-snug">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CXOs Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center space-y-3 mb-10">
            <span className="text-isf-orange font-bold uppercase tracking-widest text-xs">
              INTERNATIONAL STARTUP FESTIVALS 2024
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-[#111111]">
              CXOs (Investors, Mentors & Leaders) at ISF Conference
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {cxos.map((person, idx) => (
              <div key={idx} className="bg-[#f9f9f9] rounded-xl shadow-sm border border-[#e6e6e6] overflow-hidden hover:shadow-md transition-shadow group flex flex-col items-center text-center p-6">
                <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-white shadow-sm">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-base text-[#111111] mb-2 leading-tight">{person.name}</h3>
                <p className="text-xs text-[#666666] font-light leading-snug">{person.title}</p>
              </div>
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
