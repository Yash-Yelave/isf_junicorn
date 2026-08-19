import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  Pencil
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
    // Hide default system cursor ONLY on J-Spotlight page
    document.body.classList.add("custom-pencil-cursor");

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Pre-load Lucide Pencil SVG Image
    const pencilImg = new Image();
    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%2380243E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>`;
    pencilImg.src = `data:image/svg+xml;utf8,${svgStr}`;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      lastMouseRef.current = { x, y };

      // Append mouse point to Ref array for zero-latency frame sync
      pointsRef.current.push({ x, y, alpha: 1 });
      if (pointsRef.current.length > 12) {
        pointsRef.current.shift();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 60 FPS GPU-accelerated Canvas render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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

      // 2. Draw Pencil Cursor in real-time at exact mouse position (ZERO frame latency!)
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
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Scoped CSS rule to hide standard browser cursor on J-Spotlight page */}
      <style>{`
        .custom-pencil-cursor, .custom-pencil-cursor * {
          cursor: none !important;
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

export function JSpotlight() {
  return (
    <div className="font-inter bg-[#FAF8F3] text-slate-900 min-h-screen pt-20 overflow-x-hidden relative">
      
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
        {/* SECTION 1: HERO SPOTLIGHT (PDF Page 1) */}
        {/* ========================================================================= */}
        <section className="relative flex flex-col items-center text-center py-4 md:py-8 space-y-6">
          
          {/* Eyebrow Header Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 bg-white/90 backdrop-blur border border-amber-900/15 px-4 py-1.5 rounded-full shadow-xs text-xs font-extrabold uppercase tracking-widest text-[#09523B]"
          >
            <span>Jnanana Foundation Presents</span>
            <span className="text-amber-400">•</span>
            <span className="text-[#C22B57]">A Monthly Spotlight Series</span>
            <span className="text-amber-400">•</span>
            <span className="bg-[#09523B] text-amber-300 text-[10px] px-2 py-0.5 rounded border border-emerald-700">Edition 01</span>
          </motion.div>

          {/* Glowing Downward Spotlight Cone Graphic Backdrop */}
          <div className="relative w-full max-w-3xl flex flex-col items-center justify-center my-2">
            
            {/* SVG Spotlight Beam Triangle */}
            <div className="absolute -top-12 inset-x-0 mx-auto w-full h-80 max-w-xl opacity-70 pointer-events-none -z-10">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                <polygon points="35,0 65,0 100,100 0,100" fill="url(#heroSpotlightGrad)" />
                <defs>
                  <linearGradient id="heroSpotlightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F4B825" stopOpacity="0.5" />
                    <stop offset="60%" stopColor="#FDE68A" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Concentric Decorative Rings */}
            <div className="absolute w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] rounded-full border border-slate-400/20 pointer-events-none -z-10" />
            <div className="absolute w-[220px] h-[220px] sm:w-[330px] sm:h-[330px] rounded-full border border-slate-400/15 pointer-events-none -z-10" />

            {/* Main Heading */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative z-10 space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-black text-slate-800 tracking-widest uppercase font-inter">
                What is
              </h2>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#09523B] tracking-tight leading-none flex items-center justify-center flex-wrap gap-x-1 sm:gap-x-2">
                <span>J-SP</span>
                
                {/* Custom Glowing Stage Spotlight Beam SVG 'O' */}
                <span className="relative inline-flex items-center justify-center w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-100 text-slate-950 shadow-[0_0_30px_rgba(244,184,37,0.8)] border-2 border-[#09523B] mx-1 overflow-visible">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 sm:w-10 sm:h-10 text-slate-950 drop-shadow-md">
                    <path d="M16 3L11 9H21L16 3Z" fill="#09523B" />
                    <ellipse cx="16" cy="9" rx="5" ry="1.5" fill="#F4B825" />
                    <path d="M11 9.5L4 28H28L21 9.5H11Z" fill="url(#heroLightConeGrad)" opacity="0.85" />
                    <circle cx="16" cy="9.5" r="3" fill="#FFFFFF" />
                    <defs>
                      <linearGradient id="heroLightConeGrad" x1="16" y1="9.5" x2="16" y2="28" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFFFFF" stopOpacity="0.95" />
                        <stop offset="0.5" stopColor="#FBBF24" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute -inset-2 rounded-full bg-amber-400/30 blur-md -z-10 animate-pulse" />
                </span>

                <span>TLIGHT</span>
                <span className="text-[#C22B57] font-black ml-1">?</span>
              </h1>

              {/* Brush Stroke Banner */}
              <div className="inline-block relative pt-1">
                <div className="bg-[#80243E] text-white text-sm sm:text-lg font-black uppercase px-6 py-2 rounded-xl tracking-wider shadow-md transform -rotate-1 border border-pink-700/50">
                  Finding The Next Junicorn
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl font-medium text-slate-700 max-w-2xl leading-relaxed pt-2"
          >
            A monthly gathering where <span className="font-bold text-[#09523B]">ideas</span>, <span className="font-bold text-[#09523B]">people</span> and <span className="font-bold text-[#C22B57]">possible</span> come together.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <a
              href="https://forms.gle/y5R1jv5FbQuu6VrNA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#09523B] hover:bg-[#073f2d] text-white text-sm sm:text-base font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-600/40 cursor-pointer group"
            >
              <span>REQUEST DELEGATE SEAT</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-amber-300/80 shadow-xs text-xs sm:text-sm font-bold text-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
              <span>29 AUG 2026 • 4:00 - 6:00 PM • DRAPER U INDIA</span>
            </div>
          </motion.div>

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

            {/* Realistic VIP Ticket Stub Design with Ultra High-Contrast Text */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-[#073F2D] text-white rounded-3xl p-6 sm:p-7 border-2 border-amber-400/90 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
            >
              {/* Decorative Perforated Ticket Notches */}
              <div className="hidden md:block absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-2 border-amber-400" />
              <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-2 border-amber-400" />
              
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

              {/* Price & Ticket Info */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-100 text-slate-950 flex flex-col items-center justify-center font-black shrink-0 shadow-lg border-2 border-white">
                  <span className="text-2xl sm:text-3xl leading-none">₹349</span>
                  <span className="text-[9px] uppercase tracking-widest text-slate-800 font-black">ENTRY PASS</span>
                </div>

                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 bg-amber-400/20 px-3 py-0.5 rounded-full border border-amber-300/40">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-amber-300">OFFICIAL EVENT PASS</span>
                  </div>
                  {/* High-Contrast Bold Text */}
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug drop-shadow-sm">
                    Edition 01 Entry Delegate Access
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">
                    Includes pitch conclave access, founder networking, and keynote inauguration session.
                  </p>
                </div>
              </div>

              {/* Booking CTA Button */}
              <a
                href="https://forms.gle/y5R1jv5FbQuu6VrNA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 text-slate-950 text-base font-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer border border-white shrink-0 group transform hover:-translate-y-0.5"
              >
                <span>REQUEST DELEGATE SEAT</span>
                <Ticket size={20} className="group-hover:rotate-12 transition-transform text-slate-950" />
              </a>
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

        {/* BOTTOM FOOTER BRANDING */}
        <div className="text-center pt-8 border-t border-slate-300/80 text-xs font-extrabold text-slate-600 uppercase tracking-widest">
          Jnanana Foundation × ISF Junicorns • Edition 01 Spotlight Conclave
        </div>

      </div>
    </div>
  );
}
