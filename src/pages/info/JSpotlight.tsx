import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getImageUrl } from "../../utils/imageUtils";
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Ticket, 
  Lightbulb, 
  MessageSquare, 
  Compass, 
  Star, 
  X, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Pencil,
  ChevronDown,
  HelpCircle
} from "lucide-react";

interface TrailPoint {
  x: number;
  y: number;
  alpha: number;
}

function PencilMouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<TrailPoint[]>([]);
  const lastMouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Hide default system cursor ONLY on desktop devices with fine pointer
    document.body.classList.add("custom-pencil-cursor");

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    // Retina & High-DPI Display Scaling for iPhone / iPad Super Retina screens
    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.scale(dpr, dpr);
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Pre-load Lucide Pencil SVG Image
    const pencilImg = new Image();
    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%2380243E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>`;
    pencilImg.src = `data:image/svg+xml;utf8,${svgStr}`;

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      lastMouseRef.current = { x, y };

      pointsRef.current.push({ x, y, alpha: 1 });
      if (pointsRef.current.length > 12) {
        pointsRef.current.shift();
      }
    };

    // Touch event handlers for iOS Safari & Mobile touchscreens
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        lastMouseRef.current = { x, y };

        pointsRef.current.push({ x, y, alpha: 1 });
        if (pointsRef.current.length > 12) {
          pointsRef.current.shift();
        }
      }
    };

    const handleTouchEnd = () => {
      lastMouseRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchEnd, { passive: true });

    // 60 FPS GPU-accelerated Canvas render loop
    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const points = pointsRef.current;
      
      // 1. Draw smooth emerald pencil graphite line
      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
          const xc = (points[i].x + points[i - 1].x) / 2;
          const yc = (points[i].y + points[i - 1].y) / 2;
          ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
        }

        ctx.strokeStyle = "rgba(9, 82, 59, 0.85)";
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();

        // Fade out points for a short, clean trail
        for (let i = points.length - 1; i >= 0; i--) {
          points[i].alpha -= 0.08;
          if (points[i].alpha <= 0) {
            points.splice(i, 1);
          }
        }
      }

      // 2. Draw Pencil Cursor in real-time at exact coordinates (ZERO frame latency!)
      if (lastMouseRef.current) {
        const { x, y } = lastMouseRef.current;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((-35 * Math.PI) / 180);
        
        // Offset (-2.5, -21.5) puts the SVG pencil lead tip at (x, y)
        ctx.drawImage(pencilImg, -2.5, -21.5, 24, 24);

        // Gold lead tip sparkle point
        ctx.fillStyle = "#F59E0B";
        ctx.beginPath();
        ctx.arc(0, 0, 1.25, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      document.body.classList.remove("custom-pencil-cursor");
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Scoped CSS rule to hide standard browser cursor on desktop while preserving iOS touch support */}
      <style>{`
        @media (pointer: fine) {
          .custom-pencil-cursor, .custom-pencil-cursor * {
            cursor: none !important;
          }
        }
        /* Mobile & iOS Tap Highlight Reset */
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>

      {/* Hardware-accelerated 60 FPS Canvas overlay */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[100]"
      />
    </>
  );
}

const spotlightFaqs = [
  {
    q: "1. What is J-Spotlight?",
    a: "J-Spotlight is a monthly spotlight series by Jnanana Foundation × ISF Junicorns, bringing together students, innovators, builders, dreamers and problem-solvers to share ideas, connect with people and discover opportunities."
  },
  {
    q: "2. Who is J-Spotlight for?",
    a: "It is for anyone with curiosity, an idea or something they are building — including students, young innovators, aspiring founders, creators, researchers and problem-solvers."
  },
  {
    q: "3. Do I need a startup or an idea to attend?",
    a: "No. You don’t need a startup, funding or a perfect pitch. You simply need something worth sharing, or the curiosity to learn, connect and explore."
  },
  {
    q: "4. Is J-Spotlight invite-only?",
    a: "Yes. Edition 01 is an invite-only gathering with a curated community and only 50 seats."
  },
  {
    q: "5. Can I share or pitch my idea?",
    a: "Yes. J-Spotlight creates opportunities for participants to share what they are building, exploring or thinking about. Selected participants may get the opportunity to take the spotlight during the event."
  },
  {
    q: "6. How much is the J-Spotlight pass?",
    a: "The Event Pass for Edition 01 is ₹349. Your seat is confirmed after successful pass purchase and confirmation from the J-Spotlight team."
  }
];

export function JSpotlight() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isLampOn, setIsLampOn] = useState(false);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);

  useEffect(() => {
    // Step 1: At 150ms, top overhead lamp turns ON in the dark room
    const timer1 = setTimeout(() => {
      setIsLampOn(true);
    }, 150);

    // Step 2: At 1150ms (1 second after lamp turns on), full website stage lights turn ON!
    const timer2 = setTimeout(() => {
      setIsFullyRevealed(true);
    }, 1150);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="font-inter bg-[#FAF8F3] text-slate-900 min-h-screen pt-20 overflow-x-hidden relative">
      
      {/* Dramatic Pitch-Black Theater Spotlight Reveal Intro Overlay */}
      <AnimatePresence>
        {!isFullyRevealed && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#07130E] z-[120] pointer-events-none flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Dark Theater Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#122A20] via-[#07130E] to-[#040B08]" />

            {/* Spotlight Beam turning ON dynamically */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isLampOn ? 1 : 0, scale: isLampOn ? 1 : 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex flex-col items-center z-10 -mt-10"
            >
              {/* Overhead Lamp Fixture in Dark Room */}
              <div className="relative w-20 flex flex-col items-center z-20">
                <div className="w-1.5 h-12 bg-emerald-950 border-x border-emerald-800" />
                <div className="relative w-16 h-8 rounded-t-full bg-emerald-900 border-b-2 border-amber-400 shadow-[0_0_30px_#F59E0B] flex items-center justify-center">
                  <div className="absolute bottom-0 w-12 h-2 rounded-full bg-amber-200 shadow-[0_0_25px_#F59E0B] blur-[0.5px] animate-pulse" />
                </div>
              </div>

              {/* Glowing Stage Cone in Dark Room */}
              <div className="relative w-[320px] sm:w-[420px] h-[360px] sm:h-[440px] -mt-1 pointer-events-none">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                  <polygon points="38,0 62,0 100,100 0,100" fill="url(#introSpotlightGradOuter)" opacity="0.95" />
                  <polygon points="42,0 58,0 90,100 10,100" fill="url(#introSpotlightGradInner)" opacity="0.85" />
                  <defs>
                    <linearGradient id="introSpotlightGradOuter" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="introSpotlightGradInner" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.95" />
                      <stop offset="60%" stopColor="#FDE047" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Glowing Paper Lightbulb emerging inside the beam */}
                <div className="absolute top-20 inset-x-0 mx-auto flex flex-col items-center space-y-3">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[radial-gradient(ellipse_at_30%_30%,_var(--tw-gradient-stops))] from-[#FFFBEB] via-[#FBBF24] to-[#D97706] border-2 border-amber-300 shadow-[0_0_60px_rgba(251,191,36,0.95),inset_0_0_20px_rgba(255,255,255,0.9)] flex items-center justify-center">
                    <Sparkles size={36} className="text-amber-950 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>

                  <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-amber-300 animate-pulse pt-2 drop-shadow-md">
                    J-SPOTLIGHT • EDITION 01
                  </span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Interactive Pencil Writing Mouse Trail */}
      <PencilMouseTrail />

      {/* Background Subtle Grid Texture Pattern matching PDF carousel */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E0D9CB 1px, transparent 1px),
            linear-gradient(to bottom, #E0D9CB 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px'
        }}
      />

      {/* Decorative Top Ambient Spotlight Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-200/40 via-yellow-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 space-y-16 md:space-y-24">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HERO SPOTLIGHT - IDEATION (Poster Graphic Redesign) */}
        {/* ========================================================================= */}
        <section className="relative py-4 md:py-6 space-y-6">
          
          {/* Main 2-Column Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-2">
            
            {/* LEFT COLUMN: IDEATION Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Eyebrow Brush Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center bg-[#09523B] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-lg tracking-widest shadow-md transform -rotate-1 border border-emerald-700/60"
              >
                <span>THE FIRST STEP</span>
              </motion.div>

              {/* Massive Title: IDEATION. */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1"
              >
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#09523B] tracking-tight leading-none flex items-center flex-wrap gap-0.5 sm:gap-1 font-serif">
                  <span>IDEAT</span>
                  
                  {/* Embedded 'O' with Star Circle */}
                  <span className="relative inline-flex items-center justify-center w-11 h-11 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-[#09523B] text-amber-300 mx-1 shadow-md border-2 border-amber-400 shrink-0">
                    <Sparkles className="w-6 h-6 sm:w-9 sm:h-9 lg:w-11 lg:h-11 text-amber-300 fill-amber-300" />
                  </span>

                  <span>N</span>
                  <span className="text-[#C22B57] font-black">.</span>
                </h1>

                <p className="text-xl sm:text-2xl font-black text-slate-800 font-sans tracking-tight pt-2">
                  Every Junicorn starts with an idea.
                </p>
              </motion.div>

              {/* Subtitle Lines */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-1 text-slate-700 font-medium text-sm sm:text-base leading-relaxed"
              >
                <p>It could be a thought, a problem, a question, or a dream.</p>
                <p className="text-[#C22B57] font-black text-base sm:text-lg">
                  Everything begins here.
                </p>
              </motion.div>

              {/* 4 Circular Pillar Badges Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2"
              >
                {/* 1. THINK DEEPLY */}
                <div className="flex flex-col items-center text-center space-y-1.5 p-3 rounded-2xl bg-white/80 border border-amber-200/80 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md border-2 border-white shrink-0">
                    <Lightbulb size={22} className="text-slate-950" />
                  </div>
                  <span className="text-[11px] font-black uppercase text-slate-900 leading-tight">
                    THINK<br/>DEEPLY
                  </span>
                </div>

                {/* 2. QUESTION BOLDLY */}
                <div className="flex flex-col items-center text-center space-y-1.5 p-3 rounded-2xl bg-white/80 border border-amber-200/80 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-[#C22B57] text-white flex items-center justify-center shadow-md border-2 border-white text-xl font-black shrink-0">
                    ?
                  </div>
                  <span className="text-[11px] font-black uppercase text-slate-900 leading-tight">
                    QUESTION<br/>BOLDLY
                  </span>
                </div>

                {/* 3. EXPLORE POSSIBILITIES */}
                <div className="flex flex-col items-center text-center space-y-1.5 p-3 rounded-2xl bg-white/80 border border-amber-200/80 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-[#09523B] text-amber-300 flex items-center justify-center shadow-md border-2 border-white shrink-0">
                    <Compass size={22} className="text-amber-300" />
                  </div>
                  <span className="text-[11px] font-black uppercase text-slate-900 leading-tight">
                    EXPLORE<br/>POSSIBILITIES
                  </span>
                </div>

                {/* 4. DISCOVER PURPOSE */}
                <div className="flex flex-col items-center text-center space-y-1.5 p-3 rounded-2xl bg-white/80 border border-amber-200/80 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md border-2 border-white shrink-0">
                    <Star size={22} className="text-slate-950 fill-slate-950" />
                  </div>
                  <span className="text-[11px] font-black uppercase text-slate-900 leading-tight">
                    DISCOVER<br/>PURPOSE
                  </span>
                </div>
              </motion.div>

              {/* Bottom-Left Callout Brush Box */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#09523B] text-white rounded-2xl p-4 sm:p-5 shadow-xl flex items-center gap-4 border border-emerald-700/60 max-w-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-800/90 flex items-center justify-center shrink-0 border border-emerald-600/60 shadow-xs">
                  <Users size={24} className="text-amber-300" />
                </div>
                <div className="space-y-0.5 text-left">
                  <p className="text-xs sm:text-sm font-black text-white tracking-wide">
                    IDEAS DON'T NEED TO BE PERFECT.
                  </p>
                  <p className="text-xs sm:text-sm font-black text-amber-300 tracking-wide">
                    THEY NEED A PLACE TO GROW.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: Spotlight Lamp & Lightbulb Graphic Artwork */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative flex flex-col items-center justify-center py-8 min-h-[420px] sm:min-h-[500px] bg-gradient-to-b from-amber-50/60 via-amber-50/20 to-transparent rounded-3xl border border-amber-200/50 shadow-xs overflow-hidden"
            >
              {/* Hanging Dark Green Lamp Fixture */}
              <div className="absolute top-0 inset-x-0 mx-auto w-20 flex flex-col items-center z-30">
                {/* Overhead Wire */}
                <div className="w-1.5 h-7 bg-[#09523B]" />
                
                {/* Lamp Dome Shade */}
                <div className="relative w-16 h-8 rounded-t-full bg-[#09523B] border-b-2 border-amber-400 shadow-lg flex items-center justify-center overflow-hidden">
                  {/* Glowing Bulb Rim Aperture */}
                  <div className="absolute bottom-0 w-12 h-2 rounded-full bg-amber-200 shadow-[0_0_15px_#F59E0B] blur-[0.5px]" />
                </div>
              </div>

              {/* Radiant Stage Spotlight Cone Beam (Glowing Ambient Cone) */}
              <div className="absolute top-12 inset-x-0 mx-auto w-[280px] sm:w-[360px] h-[360px] sm:h-[440px] pointer-events-none z-0">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                  <polygon points="38,0 62,0 100,100 0,100" fill="url(#heroPosterSpotlightGradOuter)" opacity="0.85" />
                  <polygon points="42,0 58,0 90,100 10,100" fill="url(#heroPosterSpotlightGradInner)" opacity="0.6" />
                  <defs>
                    <linearGradient id="heroPosterSpotlightGradOuter" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.55" />
                      <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="heroPosterSpotlightGradInner" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.7" />
                      <stop offset="60%" stopColor="#FDE047" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Lightbulb & Doodles Canvas Box */}
              <div className="relative z-10 flex flex-col items-center pt-10 space-y-3">
                
                {/* Paper Lightbulb Graphic + Radial Rays Burst */}
                <div className="relative w-52 h-64 sm:w-64 sm:h-76 flex flex-col items-center justify-center">
                  
                  {/* Radial Ray Lines Radiating Outwards */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 200 240" fill="none" stroke="#09523B" strokeWidth="2" strokeLinecap="round">
                    {/* Top Rays */}
                    <line x1="100" y1="25" x2="100" y2="10" />
                    <line x1="60" y1="38" x2="48" y2="25" />
                    <line x1="140" y1="38" x2="152" y2="25" />
                    {/* Side Rays */}
                    <line x1="35" y1="75" x2="18" y2="70" />
                    <line x1="165" y1="75" x2="182" y2="70" />
                    <line x1="42" y1="120" x2="25" y2="125" />
                    <line x1="158" y1="120" x2="175" y2="125" />
                  </svg>

                  {/* Multi-layered Glowing Radial Aura */}
                  <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-amber-400/40 blur-3xl pointer-events-none animate-pulse -z-10" />
                  <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-yellow-300/50 blur-xl pointer-events-none -z-10" />

                  {/* Crumpled Yellow Paper Ball Bulb Head */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[radial-gradient(ellipse_at_30%_30%,_var(--tw-gradient-stops))] from-[#FFFBEB] via-[#FBBF24] to-[#D97706] border-2 border-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.85),inset_0_0_15px_rgba(255,255,255,0.9)] flex items-center justify-center relative overflow-hidden cursor-pointer z-10"
                  >
                    {/* Paper Texture Wrinkle Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#B45309_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-25" />
                    
                    {/* Inner Paper Fold Sparkle */}
                    <div className="relative z-10 text-amber-950/70 flex flex-col items-center justify-center">
                      <Sparkles size={28} className="animate-spin" style={{ animationDuration: '12s' }} />
                    </div>
                  </motion.div>

                  {/* Metallic Screw Base & Collar SVG */}
                  <div className="relative -mt-3 z-10 flex flex-col items-center">
                    <svg className="w-16 h-24 text-slate-800" viewBox="0 0 50 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Dark Green Socket Collar */}
                      <path d="M10 2 H40 V16 C40 20 35 24 25 24 C15 24 10 20 10 16 Z" fill="#09523B" stroke="#09523B" strokeWidth="2"/>
                      {/* Screw Threads */}
                      <path d="M14 24 H36 V30 H14 Z" fill="#CBD5E1" stroke="#334155" strokeWidth="2"/>
                      <path d="M16 30 H34 V36 H16 Z" fill="#94A3B8" stroke="#334155" strokeWidth="2"/>
                      <path d="M18 36 H32 V42 H18 Z" fill="#64748B" stroke="#334155" strokeWidth="2"/>
                      {/* Bottom Contact Tip */}
                      <path d="M21 42 L29 42 L25 48 Z" fill="#09523B"/>
                      {/* Flowing Dark Green Wire Curve */}
                      <path d="M25 48 C 20 58, 5 55, 0 65" stroke="#09523B" strokeWidth="3" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>

                </div>

                {/* Floating Doodles */}
                {/* Origami Paper Plane Doodle */}
                <div className="absolute top-8 left-2 text-slate-800 animate-bounce" style={{ animationDuration: '4s' }}>
                  <svg className="w-8 h-8 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
                  </svg>
                </div>

                {/* Speech Bubble Doodle */}
                <div className="absolute top-12 right-2 text-slate-800">
                  <div className="w-7 h-7 rounded-lg border-2 border-slate-800 flex items-center justify-center bg-white/60">
                    <span className="text-xs font-black text-slate-800">...</span>
                  </div>
                </div>

                {/* Magnifying Glass Doodle */}
                <div className="absolute top-36 right-0 text-slate-800">
                  <svg className="w-7 h-7 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.5" y1="16.5" x2="21" y2="21" />
                  </svg>
                </div>

                {/* Question Mark Doodle */}
                <div className="absolute bottom-24 right-4 text-slate-800 font-serif text-2xl font-black italic">
                  ?
                </div>

                {/* Bottom Right Badge Stack & CTA */}
                <div className="flex flex-col items-center space-y-2 pt-1">
                  <div className="flex items-center gap-1">
                    <span className="text-base font-black text-[#09523B] tracking-wider font-serif">J-SPOTLIGHT</span>
                    <span className="text-[#C22B57] font-black text-xl">.</span>
                  </div>

                  <div className="bg-[#C22B57] text-white text-xs font-black uppercase px-4 py-1.5 rounded-lg shadow-md transform rotate-1 border border-pink-700/50">
                    FINDING THE NEXT JUNICORN
                  </div>

                  <div className="bg-[#09523B] text-amber-300 text-[10px] font-black uppercase px-3 py-0.5 rounded border border-emerald-700">
                    EDITION 01
                  </div>

                  <a
                    href="https://forms.gle/y5R1jv5FbQuu6VrNA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 hover:from-amber-300 hover:to-yellow-200 text-slate-950 text-xs font-black px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all border border-white cursor-pointer group"
                  >
                    <span>REQUEST DELEGATE SEAT</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>

            </motion.div>

          </div>

        </section>


        {/* ========================================================================= */}
        {/* SECTION 2: THE GAP (PDF Page 2) */}
        {/* ========================================================================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6 pt-2 md:pt-4"
        >
          {/* Header Alignment */}
          <div className="space-y-2 max-w-4xl">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#C22B57] bg-pink-100/90 px-3.5 py-1 rounded-full border border-pink-200">
                The Gap
              </span>
              <Sparkles size={16} className="text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#09523B] leading-tight tracking-tight">
              THERE ARE <span className="text-[#C22B57] relative inline-block">
                THOUSANDS
                <svg viewBox="0 0 100 20" fill="none" className="absolute -bottom-1.5 left-0 w-full h-2.5 text-amber-400">
                  <path d="M2 15 Q 50 2, 98 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span> OF YOUNG PEOPLE WITH IDEAS.
            </h2>

            <p className="text-sm sm:text-lg text-slate-600 font-medium pt-0.5">
              But not everyone gets a chance to...
            </p>
          </div>

          {/* 2x2 Grid Cards Layout - Fits Single Screen Scroll View! */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl">
            {[
              { text: "SHARE THEM.", delay: 0.1 },
              { text: "BE HEARD.", delay: 0.2 },
              { text: "MEET THE RIGHT PEOPLE.", delay: 0.3 },
              { text: "GET THE RIGHT GUIDANCE.", delay: 0.4 }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: card.delay }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="bg-white border-2 border-pink-100/80 hover:border-pink-300 rounded-2xl p-3.5 sm:p-4.5 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 flex items-center justify-center text-slate-950 shrink-0 shadow-xs group-hover:scale-110 group-hover:rotate-12 transition-transform">
                  <Star size={16} fill="currentColor" className="text-slate-900" />
                </div>

                <span className="text-sm sm:text-base font-extrabold text-[#C22B57] tracking-wider uppercase">
                  {card.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Featured Deep Green Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative max-w-4xl"
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700 opacity-25 blur-md -z-10" />

            <div className="bg-gradient-to-r from-[#09523B] via-[#0B5B42] to-[#073F2D] text-white rounded-2xl p-5 sm:p-6 shadow-xl border border-emerald-600/40 flex items-center justify-between gap-4 overflow-hidden relative">
              <div className="space-y-0.5 relative z-10">
                <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight !text-white leading-snug" style={{ color: '#FFFFFF' }}>
                  We believe great ideas shouldn't stay hidden.
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200 font-medium">
                  J-Spotlight creates the room where early-stage builders turn vision into reality.
                </p>
              </div>

              {/* Decorative Gold Star Icon */}
              <div className="hidden sm:flex w-11 h-11 rounded-xl bg-amber-400/20 border border-amber-300/40 items-center justify-center text-amber-300 shrink-0 relative z-10">
                <Sparkles size={22} />
              </div>
            </div>
          </motion.div>
        </motion.section>


        {/* ========================================================================= */}
        {/* SECTION 3: THE IDEA (PDF Page 3) */}
        {/* ========================================================================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6 pt-2 md:pt-4"
        >
          {/* Header Alignment - Matching Section 2 & 4 Editorial Alignment */}
          <div className="space-y-2.5 max-w-4xl">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#C22B57] bg-pink-100/90 px-3.5 py-1 rounded-full border border-pink-200">
                The Idea
              </span>
              <Sparkles size={16} className="text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#09523B] leading-tight tracking-tight">
              J-SPOTLIGHT IS A PLATFORM FOR <span className="text-[#C22B57] font-serif italic relative inline-block">
                YOUNG MINDS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-400/80 rounded-full" />
              </span> TO STEP INTO THE SPOTLIGHT.
            </h2>
          </div>

          {/* Animated Interactive Orbiting Radial Diagram */}
          <div className="relative py-6 sm:py-10 flex items-center justify-center overflow-visible">
            
            {/* Ambient Background Glow behind Diagram */}
            <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-to-tr from-amber-300/30 via-yellow-200/20 to-pink-200/20 blur-2xl pointer-events-none" />

            {/* Continuously Rotating Dotted Orbit Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full border-2 border-dashed border-amber-500/40 flex items-center justify-center relative pointer-events-none"
            >
              {/* Decorative Orbit Particles */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-md animate-pulse" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#C22B57] shadow-md animate-pulse" />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#09523B] shadow-md animate-pulse" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-md animate-pulse" />
            </motion.div>

            {/* Inner Concentric Pulse Circle */}
            <motion.div 
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] rounded-full border border-amber-400/50 pointer-events-none"
            />

            {/* Center Glowing Gold Sphere */}
            <motion.div 
              animate={{ 
                scale: [1, 1.04, 1],
                boxShadow: [
                  "0 0 25px rgba(244,184,37,0.5)",
                  "0 0 55px rgba(244,184,37,0.85)",
                  "0 0 25px rgba(244,184,37,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
              className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-200 flex items-center justify-center p-3.5 text-center border-4 border-white z-20 cursor-pointer shadow-xl group"
            >
              <div className="space-y-0.5">
                <Sparkles size={18} className="mx-auto text-slate-950 group-hover:rotate-180 transition-transform duration-500" />
                <span className="block text-xs sm:text-sm font-black uppercase text-slate-950 tracking-wider leading-tight">
                  Step Into<br/>The Light
                </span>
              </div>
            </motion.div>

            {/* Orbiting Floating Cohort Pills */}
            <div className="absolute inset-0 max-w-[260px] max-h-[260px] sm:max-w-[380px] sm:max-h-[380px] mx-auto my-auto pointer-events-auto">
              
              {/* STUDENTS (Top Center) */}
              <motion.div 
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white border-2 border-emerald-500/40 px-3.5 sm:px-4.5 py-1 rounded-full shadow-md text-[11px] sm:text-xs font-extrabold text-[#09523B] flex items-center gap-1.5 cursor-pointer z-30 group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                <span>STUDENTS</span>
              </motion.div>

              {/* INNOVATORS (Top Right) */}
              <motion.div 
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="absolute top-6 -right-3 sm:-right-8 bg-white border-2 border-pink-500/40 px-3.5 sm:px-4.5 py-1 rounded-full shadow-md text-[11px] sm:text-xs font-extrabold text-[#C22B57] flex items-center gap-1.5 cursor-pointer z-30 group"
              >
                <span className="w-2 h-2 rounded-full bg-[#C22B57] group-hover:scale-150 transition-transform" />
                <span>INNOVATORS</span>
              </motion.div>

              {/* DREAMERS (Bottom Right) */}
              <motion.div 
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="absolute bottom-6 -right-3 sm:-right-8 bg-white border-2 border-amber-500/40 px-3.5 sm:px-4.5 py-1 rounded-full shadow-md text-[11px] sm:text-xs font-extrabold text-amber-600 flex items-center gap-1.5 cursor-pointer z-30 group"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-150 transition-transform" />
                <span>DREAMERS</span>
              </motion.div>

              {/* PROBLEM SOLVERS (Bottom Center) */}
              <motion.div 
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-white border-2 border-emerald-500/40 px-3.5 sm:px-4.5 py-1 rounded-full shadow-md text-[11px] sm:text-xs font-extrabold text-[#09523B] flex items-center gap-1.5 cursor-pointer z-30 group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                <span>PROBLEM SOLVERS</span>
              </motion.div>

              {/* BUILDERS (Left Center) */}
              <motion.div 
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="absolute top-1/2 -left-5 sm:-left-12 -translate-y-1/2 bg-white border-2 border-indigo-500/40 px-3.5 sm:px-4.5 py-1 rounded-full shadow-md text-[11px] sm:text-xs font-extrabold text-indigo-700 flex items-center gap-1.5 cursor-pointer z-30 group"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-600 group-hover:scale-150 transition-transform" />
                <span>BUILDERS</span>
              </motion.div>

            </div>
          </div>

          {/* Bottom Summary Quote */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-xs sm:text-base font-semibold text-slate-700 max-w-2xl mx-auto bg-white/90 backdrop-blur border border-amber-900/15 p-3.5 sm:p-4 rounded-2xl shadow-xs"
          >
            A space for people to come together, share what they're working on, and learn from one another.
          </motion.p>
        </motion.section>


        {/* ========================================================================= */}
        {/* SECTION 4: INSIDE THE ROOM / PROCESS (PDF Page 4) */}
        {/* ========================================================================= */}
        <section className="space-y-8 pt-6">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#C22B57]">
              Inside The Room
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#09523B] leading-tight">
              YOU BRING THE IDEA. <span className="text-[#C22B57]">WE BRING THE SPOTLIGHT.</span>
            </h2>
          </div>

          {/* 4 Process Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                icon: Lightbulb,
                title: "PITCH",
                desc: "Share what you're building or thinking about.",
                color: "text-[#09523B]"
              },
              {
                num: "02",
                icon: Users,
                title: "CONNECT",
                desc: "Meet people who could become collaborators, friends or mentors.",
                color: "text-[#C22B57]"
              },
              {
                num: "03",
                icon: MessageSquare,
                title: "EXCHANGE",
                desc: "Get feedback, perspectives and new ideas.",
                color: "text-[#C22B57]"
              },
              {
                num: "04",
                icon: Compass,
                title: "EXPLORE",
                desc: "Find opportunities to take your idea forward.",
                color: "text-[#09523B]"
              }
            ].map((card, i) => {
              const IconComp = card.icon;
              return (
                <div 
                  key={i}
                  className="bg-white border border-amber-900/10 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-black text-amber-500">
                      {card.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-slate-700">
                      <IconComp size={20} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className={`text-xl font-extrabold tracking-wide ${card.color}`}>
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <span className="font-serif italic font-extrabold text-lg sm:text-xl text-[#C22B57]">
              ✨ Four simple steps. One spotlight. ✨
            </span>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 5: NO PREREQUISITES (PDF Page 5) */}
        {/* ========================================================================= */}
        <section className="space-y-8 pt-6">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#C22B57]">
              No Prerequisites
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#09523B] leading-tight">
              YOU DON'T NEED TO HAVE A <span className="text-[#C22B57]">STARTUP.</span>
            </h2>
          </div>

          {/* Cross Bullet Items */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-3 text-slate-700 font-bold text-sm sm:text-base">
              <span className="w-6 h-6 rounded-full bg-pink-100 text-[#C22B57] flex items-center justify-center text-xs font-black shrink-0">
                <X size={14} />
              </span>
              <span>You don't need funding.</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-bold text-sm sm:text-base">
              <span className="w-6 h-6 rounded-full bg-pink-100 text-[#C22B57] flex items-center justify-center text-xs font-black shrink-0">
                <X size={14} />
              </span>
              <span>You don't need a perfect pitch.</span>
            </div>
          </div>

          {/* Green Central Highlight Banner */}
          <div className="bg-[#09523B] text-white rounded-3xl p-8 text-center shadow-xl border border-emerald-700">
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight !text-white" style={{ color: '#FFFFFF' }}>
              YOU JUST NEED SOMETHING WORTH SHARING.
            </h3>
          </div>

          {/* Target Intent Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {[
              { label: "BUILDING SOMETHING", color: "text-[#09523B] border-emerald-200" },
              { label: "SOLVING A PROBLEM", color: "text-[#C22B57] border-pink-200" },
              { label: "EXPLORING AN IDEA", color: "text-[#09523B] border-emerald-200" },
              { label: "LEARNING SOMETHING NEW", color: "text-[#C22B57] border-pink-200" },
              { label: "LOOKING FOR PEOPLE TO BUILD WITH", color: "text-[#09523B] border-emerald-200" }
            ].map((pill, i) => (
              <span 
                key={i}
                className={`bg-white border ${pill.color} text-xs sm:text-sm font-extrabold px-4 py-2 rounded-full shadow-xs`}
              >
                {pill.label}
              </span>
            ))}
          </div>

          <p className="text-center font-serif italic text-base sm:text-lg font-bold text-[#C22B57]">
            If that sounds like you, J-Spotlight is for you.
          </p>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 6: THE PHILOSOPHY (PDF Page 6) */}
        {/* ========================================================================= */}
        <section className="space-y-8 pt-6">
          <div className="space-y-3 text-center">
            <span className="text-xs font-black uppercase tracking-widest text-[#C22B57]">
              The Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#09523B] leading-tight">
              EVERY JUNICORN <span className="text-[#C22B57] font-serif italic">STARTS SOMEWHERE.</span>
            </h2>
          </div>

          {/* Horizontal Journey Timeline */}
          <div className="flex items-center justify-between max-w-2xl mx-auto py-6 px-4 bg-white/80 rounded-2xl border border-amber-900/10 shadow-sm overflow-x-auto gap-2">
            {[
              { step: "IDEA", isFinal: false },
              { step: "CONVERSATION", isFinal: false },
              { step: "MENTOR", isFinal: false },
              { step: "COMMUNITY", isFinal: false },
              { step: "IMPACT", isFinal: true }
            ].map((node, i, arr) => (
              <div key={i} className="flex items-center gap-2 shrink-0">
                <div className="flex flex-col items-center gap-1.5">
                  <span className={`w-4 h-4 rounded-full ${node.isFinal ? 'bg-[#C22B57] shadow-sm' : 'bg-amber-400'}`} />
                  <span className="text-[10px] sm:text-xs font-black uppercase text-slate-800 tracking-wider">
                    {node.step}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-amber-400 font-bold text-xs">➔</span>
                )}
              </div>
            ))}
          </div>

          {/* Poetic Message */}
          <div className="text-center space-y-2 max-w-xl mx-auto font-serif italic text-base sm:text-xl text-slate-700">
            <p>It could start with an idea.</p>
            <p>A problem. A conversation.</p>
            <p className="text-[#C22B57] font-bold">A mentor. A room full of the right people.</p>
          </div>

          <div className="bg-amber-100/80 border border-amber-300/80 rounded-2xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-sm sm:text-base font-extrabold text-[#09523B]">
              J-Spotlight is about finding those people early — and giving them a platform to grow.
            </p>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 7: EDITION 01 EVENT PASS & REGISTRATION (PDF Page 7) */}
        {/* ========================================================================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8 pt-8 border-t-2 border-amber-900/15"
        >
          {/* Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#09523B] text-amber-300 text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-widest border border-emerald-700 shadow-sm">
              <Sparkles size={14} className="text-amber-300" />
              <span>J-Spotlight Edition 01 • Bengaluru Conclave</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              THE NEXT JUNICORN COULD BE <span className="text-[#C22B57] font-serif italic">IN THIS ROOM</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
              Join curated student founders, mentors, and ecosystem leads for an exclusive 2-hour pitch & exchange conclave.
            </p>
          </div>

          {/* Key Event Details Card */}
          <div className="bg-white border-2 border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
            
            {/* 3 Main Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 border-b border-slate-200/80 pb-6">
              
              {/* Date */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60"
              >
                <div className="w-12 h-12 rounded-xl bg-[#09523B] text-amber-300 flex items-center justify-center shrink-0 shadow-sm">
                  <Calendar size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-black text-emerald-800 uppercase tracking-wider">DATE</p>
                  <h4 className="text-base sm:text-lg font-black text-slate-900">29 AUGUST 2026</h4>
                  <p className="text-xs font-bold text-slate-500">Saturday Afternoon</p>
                </div>
              </motion.div>

              {/* Time */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-pink-50/70 border border-pink-200/60"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C22B57] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-black text-[#C22B57] uppercase tracking-wider">TIME</p>
                  <h4 className="text-base sm:text-lg font-black text-slate-900">4:00 – 6:00 PM</h4>
                  <p className="text-xs font-bold text-slate-500">2 Hours Duration</p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-black text-amber-800 uppercase tracking-wider">VENUE</p>
                  <h4 className="text-base sm:text-lg font-black text-slate-900">DRAPER U INDIA</h4>
                  <p className="text-xs font-bold text-slate-500">Bangalore, Karnataka</p>
                </div>
              </motion.div>

            </div>

            {/* 3 Curated Badges Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-center">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex flex-col items-center hover:bg-slate-100/80 transition-colors">
                <Users size={20} className="text-[#09523B] mb-1.5" />
                <span className="text-xs font-extrabold text-[#09523B] uppercase tracking-wide">INVITE ONLY</span>
                <span className="text-[11px] text-slate-500 font-medium">Curated Innovator Cohort</span>
              </div>

              <div className="bg-pink-50/60 border border-pink-200/80 rounded-2xl p-4 flex flex-col items-center hover:bg-pink-50 transition-colors">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C22B57] animate-ping" />
                  <Sparkles size={18} className="text-[#C22B57]" />
                </div>
                <span className="text-xs font-extrabold text-[#C22B57] uppercase tracking-wide">ONLY 50 SEATS</span>
                <span className="text-[11px] text-slate-500 font-medium">High Value, High Impact</span>
              </div>

              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4 flex flex-col items-center hover:bg-amber-50 transition-colors">
                <ShieldCheck size={20} className="text-amber-700 mb-1.5" />
                <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">CONFIRMED PASS</span>
                <span className="text-[11px] text-slate-500 font-medium">Details Shared Post Registration</span>
              </div>
            </div>

            {/* High-End Executive Ticket Pass Card (NO GREEN BACKGROUND, ENLARGED FONT SIZES) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-gradient-to-br from-white via-amber-50/40 to-yellow-50/30 text-slate-900 rounded-3xl p-7 sm:p-9 border-2 border-amber-400 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
            >
              {/* Decorative Subtle Background Texture Pattern */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: `radial-gradient(#F59E0B 1.2px, transparent 1.2px)`,
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Decorative Perforated Ticket Side Notches */}
              <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FAF8F3] border-2 border-amber-400 z-20 shadow-xs" />
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FAF8F3] border-2 border-amber-400 z-20 shadow-xs" />
              
              {/* Background Radiant Amber Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

              {/* Price & Ticket Info (Perfect Vertical Alignment) */}
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left relative z-10 w-full md:w-auto self-center">
                
                {/* Price Badge Icon Box (Burgundy & Gold Accent - NO GREEN) */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#C22B57] via-[#A02146] to-[#801835] text-white flex flex-col items-center justify-center font-black shrink-0 shadow-xl border-2 border-white self-center">
                  <span className="text-2xl sm:text-3xl font-black text-amber-300 leading-none">₹349</span>
                  <span className="text-[9px] uppercase tracking-widest text-amber-100 font-black mt-1">ENTRY PASS</span>
                </div>

                {/* Text Stack with Prominent Enlarged Typography */}
                <div className="space-y-2 self-center max-w-xl">
                  <div className="inline-flex items-center gap-2 bg-amber-100/90 px-3.5 py-1 rounded-full border border-amber-300/80">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest text-amber-950">OFFICIAL EVENT PASS</span>
                  </div>

                  {/* Prominent Headline (Enlarged to 2xl/3xl) */}
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight drop-shadow-2xs">
                    Edition 01 Entry Delegate Access
                  </h3>

                  {/* Clear Subtitle (Enlarged to sm/base) */}
                  <p className="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed">
                    Includes pitch conclave access, founder networking, and keynote inauguration session.
                  </p>
                </div>
              </div>

              {/* Booking CTA Button (Enlarged High-Impact Gold Button) */}
              <div className="relative z-10 w-full md:w-auto flex flex-col items-center md:items-end gap-2.5 shrink-0 self-center">
                <a
                  href="https://forms.gle/y5R1jv5FbQuu6VrNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 hover:from-amber-300 hover:to-yellow-200 text-slate-950 text-base sm:text-lg font-black px-8 py-4.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer border-2 border-white group transform hover:-translate-y-0.5"
                >
                  <span>REQUEST DELEGATE SEAT</span>
                  <Ticket size={22} className="group-hover:rotate-12 transition-transform text-slate-950" />
                </a>

                <div className="flex items-center gap-1.5 text-xs font-black text-[#C22B57]">
                  <span className="w-2 h-2 rounded-full bg-[#C22B57] animate-ping" />
                  <span>Curated 50 Seats Only • Edition 01 Passes</span>
                </div>
              </div>
            </motion.div>

            {/* Keynote Speaker Inauguration Profile Box */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-gradient-to-r from-emerald-50/80 via-teal-50/60 to-amber-50/80 rounded-2xl p-4 sm:p-5 border border-emerald-200/80 flex flex-col sm:flex-row items-center gap-4 transition-all shadow-xs"
            >
              <img
                src={getImageUrl("/assets/speakers/JA_chowdary.jpg")}
                alt="Dr. J.A. Chowdary"
                className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shadow-md shrink-0"
                onError={(e) => { e.currentTarget.src = "/assets/images/J-A-Chowdary.png"; }}
              />
              <div className="text-center sm:text-left space-y-1">
                <div className="inline-flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#C22B57] bg-pink-100 px-2.5 py-0.5 rounded-md border border-pink-200">
                    Inauguration & Keynote
                  </span>
                </div>
                <h4 className="text-lg font-black text-slate-900 font-serif">
                  Dr. J.A. Chowdary
                </h4>
                <p className="text-xs font-bold text-[#09523B]">
                  Founder & Chairman, International Startup Foundation (ISF)
                </p>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (FAQS) */}
        {/* ========================================================================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8 pt-10 border-t-2 border-amber-900/15"
        >
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              FREQUENTLY ASKED <span className="text-[#C22B57] font-serif italic">QUESTIONS</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
              Everything you need to know about J-Spotlight Edition 01, delegate access, and how to participate.
            </p>
          </div>

          {/* Accordion List */}
          <div className="max-w-4xl mx-auto space-y-3.5">
            {spotlightFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="bg-white/90 backdrop-blur border-2 border-amber-900/10 hover:border-amber-400/80 rounded-2xl overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-extrabold text-[#09523B] leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#09523B] text-amber-300 rotate-180' : 'bg-amber-100 text-slate-700'}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 sm:px-5 pb-5 pt-1 text-sm sm:text-base text-slate-700 font-medium leading-relaxed border-t border-amber-100 bg-amber-50/30"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* BOTTOM FOOTER BRANDING */}
        <div className="text-center pt-8 border-t border-slate-300/80 text-xs font-extrabold text-slate-600 uppercase tracking-widest">
          Jnanana Foundation × ISF Junicorns • Edition 01 Spotlight Conclave
        </div>

      </div>
    </div>
  );
}
