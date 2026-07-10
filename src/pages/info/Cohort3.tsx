import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Leaf, Heart, Factory, Droplets, Rocket, BookOpen,
  Zap, Monitor, Building, Users2, ChevronDown, Globe,
  MapPin, Calendar, Star, TrendingUp, Lightbulb,
  Play, Pause, Volume2, VolumeX,
} from 'lucide-react';

// ─── Floating animation helper (inline, type-safe) ─────────────────────────
const floatAnim = (duration = 4) => ({
  animate: {
    y: [0, -10, 0] as number[],
    transition: { duration, repeat: Infinity, ease: 'easeInOut' as const }
  }
});

// ─── Scroll-triggered fade-up ───────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Live Countdown ────────────────────────────────────────────────────────
function Countdown() {
  const deadline = new Date('2026-10-01T23:59:59');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, deadline.getTime() - now.getTime());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000)
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.mins },
    { label: 'Secs', value: timeLeft.secs }
  ];

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 min-w-[70px]">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={value}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-3xl sm:text-4xl font-black tabular-nums text-white leading-none"
            >
              {String(value).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────
const arenas = [
  { icon: <Leaf />, title: 'Agriculture & Food Security', color: 'from-green-500 to-emerald-400', bg: 'bg-green-100', iconColor: 'text-green-800', border: 'border-green-500/30', desc: 'Precision farming, crop tech, cold-chain innovations for Bharat.' },
  { icon: <Heart />, title: 'Healthcare & Well-being', color: 'from-rose-500 to-pink-400', bg: 'bg-rose-100', iconColor: 'text-rose-800', border: 'border-rose-500/30', desc: 'Rural diagnostics, telemedicine, and affordable health innovations.' },
  { icon: <Factory />, title: 'Manufacturing & MSME Growth', color: 'from-amber-500 to-yellow-400', bg: 'bg-amber-100', iconColor: 'text-amber-800', border: 'border-amber-500/30', desc: 'Smart manufacturing, local supply chains, and artisan tech.' },
  { icon: <Droplets />, title: 'Water Security & Climate Action', color: 'from-blue-500 to-cyan-400', bg: 'bg-blue-100', iconColor: 'text-blue-800', border: 'border-blue-500/30', desc: 'Water conservation, climate-resilient infrastructure and practices.' },
  { icon: <Rocket />, title: 'Space & Deep-Tech Innovation', color: 'from-violet-500 to-purple-400', bg: 'bg-violet-100', iconColor: 'text-violet-800', border: 'border-violet-500/30', desc: 'AgriSat, rural connectivity, drones, and emerging deep-tech.' },
  { icon: <BookOpen />, title: 'Education & Skill Development', color: 'from-indigo-500 to-blue-400', bg: 'bg-indigo-100', iconColor: 'text-indigo-800', border: 'border-indigo-500/30', desc: 'Ed-tech, vocational platforms, and digital literacy solutions.' },
  { icon: <Zap />, title: 'Clean Energy & Sustainability', color: 'from-orange-500 to-amber-400', bg: 'bg-orange-100', iconColor: 'text-orange-800', border: 'border-orange-500/30', desc: 'Solar, biogas, clean cook-stoves and distributed energy access.' },
  { icon: <Monitor />, title: 'Digital Transformation & Future Workforce', color: 'from-teal-500 to-cyan-400', bg: 'bg-teal-100', iconColor: 'text-teal-800', border: 'border-teal-500/30', desc: 'SaaS for rural enterprise, gig platforms, digital infrastructure.' },
  { icon: <Building />, title: 'Smart Cities & Urban Development', color: 'from-slate-500 to-gray-400', bg: 'bg-slate-100', iconColor: 'text-slate-800', border: 'border-slate-500/30', desc: 'Urban mobility, waste tech, inclusive city planning and governance.' },
  { icon: <Users2 />, title: 'Women Empowerment & Social Inclusion', color: 'from-pink-500 to-rose-400', bg: 'bg-pink-100', iconColor: 'text-pink-800', border: 'border-pink-500/30', desc: 'Women-led ventures, SHG tech, inclusive social enterprise.' }
];

const pillars = [
  {
    icon: <Lightbulb className="w-7 h-7" />, title: 'Mentorship',
    desc: 'Expert guidance from industry leaders, serial entrepreneurs, and global innovators at every step of your journey.',
    iconColor: 'text-yellow-500', bgColor: 'bg-yellow-50'
  },
  {
    icon: <Globe className="w-7 h-7" />, title: 'Market Access',
    desc: 'Showcase your innovation at state, national, and international platforms. Gain visibility that matters.',
    iconColor: 'text-blue-500', bgColor: 'bg-blue-50'
  },
  {
    icon: <TrendingUp className="w-7 h-7" />, title: 'Money',
    desc: 'Access real investment opportunities, grants, and funding networks to take your startup from idea to impact.',
    iconColor: 'text-emerald-500', bgColor: 'bg-emerald-50'
  }
];

const phases = [
  { phase: 'Phase 1', date: 'May 23rd', title: 'Registration Launch', desc: 'Applications open across 20+ states. Submit your idea or prototype.', dotColor: 'bg-emerald-500', shadow: 'shadow-emerald-200' },
  { phase: 'Phase 2', date: 'August 15th', title: '1st Shortlist — Top 100', desc: 'Top 100 projects selected. Mentorship sessions begin for shortlisted teams.', dotColor: 'bg-blue-500', shadow: 'shadow-blue-200' },
  { phase: 'Phase 3', date: 'November 14th', title: '2nd Shortlist — Top 50', desc: 'Top 50 move forward. Intensive coaching, investor connects, demo prep.', dotColor: 'bg-violet-500', shadow: 'shadow-violet-200' },
  { phase: 'Phase 4', date: 'December 24th', title: 'Grand Finale', desc: 'Bengaluru, India. Grand Presentation Mega Event — pitch to global investors.', dotColor: 'bg-orange-500', shadow: 'shadow-orange-200' }
];

const impactData = [
  { cohort: 'Cohort 1', location: 'Austin, Texas, USA', year: '2025', flag: '🇺🇸', junicorns: '40', ideas: '22', incorporations: '6', grad: 'from-indigo-600 to-blue-500' },
  { cohort: 'Cohort 2', location: 'Dubai, UAE', year: '2026', flag: '🇦🇪', junicorns: '50+', ideas: '28', incorporations: '9', grad: 'from-orange-500 to-amber-400' }
];

const academies = [
  'Young Entrepreneurship', 'Future Founder', 'Deep-Tech Innovation',
  'Family Business Excellence', 'MSME Growth', 'Global Leadership'
];

const enablers = [
  { name: 'Dr. J A Chowdary', role: 'Founder & Chairman, ISF', img: '/assets/cohort3/ja-chowdary.png' },
  { name: 'Sreekanth Arimanithaya', role: 'Partner, VISARA', img: '' },
  { name: 'Dr. Siva Mahesh Tangutooru', role: 'Co-Founder, ISF', img: '/assets/cohort3/dr-siva-mahesh.jpeg' },
  { name: 'Sri Atluri', role: 'Strategic Partner', img: '' },
  { name: 'SS Raju', role: 'Ecosystem Lead', img: '' },
  { name: 'Chinmay Kumar Dash', role: 'Program Director', img: '' }
];

// ─── Main Component ────────────────────────────────────────────────────────
const Cohort3: React.FC = () => {
  const [hoveredArena, setHoveredArena] = useState<number | null>(null);
  const [introPhase, setIntroPhase] = useState<'video-only' | 'show-title' | 'show-all'>('video-only');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIntroPhase('show-title');
    }, 5000);

    const timer2 = setTimeout(() => {
      setIntroPhase('show-all');
    }, 6000);

    // Initial play check to support unmuted autoplay if allowed by browser
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Autoplay unmuted blocked. Fallback to muted: ", err);
          setIsMuted(true);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => console.log("Muted playback fallback failed: ", e));
          }
        });
      }
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(e => console.log(e));
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMute = !isMuted;
      videoRef.current.muted = nextMute;
      setIsMuted(nextMute);
    }
  };

  return (
    <div className="font-inter bg-white min-h-screen pt-0 overflow-x-hidden">

      {/* ═══ Section 1: Hero Canvas ══════════════════════════════════════════ */}
      <section className="relative w-full h-screen min-h-[720px] flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-20">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/assets/videos/dubai.mp4" type="video/mp4" />
        </video>
        
        {/* Dark faint overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introPhase !== 'video-only' ? 0.75 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-slate-950 z-10"
        />

        {/* Central Vignette Overlay to draw focus and make text pop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introPhase !== 'video-only' ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(15,23,42,0.9)_90%)] z-10 pointer-events-none"
        />

        {/* Background layers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introPhase !== 'video-only' ? 0.1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950/60 z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introPhase !== 'video-only' ? 0.1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #166534 0%, transparent 50%), radial-gradient(circle at 80% 20%, #312e81 0%, transparent 50%), radial-gradient(circle at 60% 90%, #f97316 0%, transparent 40%)' }}
        />

        {/* Floating orbs */}
        {introPhase !== 'video-only' && (
          <>
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' as const }}
              className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-emerald-600/10 blur-[80px] pointer-events-none z-10"
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' as const }}
              className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-orange-500/10 blur-[100px] pointer-events-none z-10"
            />
          </>
        )}

        {/* Video Control Bar */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-md border border-white/10 text-white transition-all shadow-lg active:scale-95 cursor-pointer"
            title={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-md border border-white/10 text-white transition-all shadow-lg active:scale-95 cursor-pointer"
            title={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          {/* Pre-header */}
          <AnimatePresence>
            {introPhase === 'show-all' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80 font-inter"
              >
                <span>Organised by</span>
                <span className="font-bold text-white">ISF</span>
                <span className="text-white/40">·</span>
                <span className="font-semibold text-white">GAVS</span>
                <span className="text-white/40">·</span>
                <span className="font-semibold text-white">MyAnatomy</span>
                <span className="text-white/40">·</span>
                <span className="font-semibold text-white">VISARA</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence>
            {introPhase !== 'video-only' && (
              <motion.h1
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none font-inter"
              >
                <span className="block text-white! font-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                  Junicorn Rural
                </span>
                <span className="block text-[#ff7a00]! text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mt-1.5 drop-shadow-[0_0_25px_rgba(255,122,0,0.45)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                  Innovation Challenge
                </span>
                <span className="block text-white/60 text-xs sm:text-sm md:text-base mt-4 font-semibold tracking-widest uppercase">
                  — Cohort 3.0
                </span>
              </motion.h1>
            )}
          </AnimatePresence>

          {/* Secondary Content & Countdown */}
          <AnimatePresence>
            {introPhase === 'show-all' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col items-center gap-6 w-full"
              >
                {/* Sub-headline */}
                <p className="text-white! text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal font-inter drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Transforming India's Rural Innovation Story.{' '}
                  <span className="text-white/80">Bridging the gap between rural ambition and global opportunity.</span>
                </p>

                {/* CTA */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' as const }}
                  className="inline-block"
                >
                  <Link
                    to="/registration"
                    className="flex items-center gap-3 bg-[#ff7a00] hover:bg-[#ff8c1a] text-white font-extrabold text-base sm:text-lg px-12 py-4.5 rounded-full shadow-[0_0_25px_rgba(255,122,0,0.4)] hover:shadow-[0_0_35px_rgba(255,122,0,0.6)] cursor-pointer transition-all active:scale-95 duration-300"
                  >
                    Apply Now <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>

                {/* Countdown */}
                <div className="space-y-4 w-full">
                  <p className="text-white/50 text-sm font-semibold uppercase tracking-widest">
                    Registration Deadline — October 1st
                  </p>
                  <Countdown />
                </div>

                {/* Scroll hint */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const }}
                  className="mt-4 text-white/30"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ Section 2: Core Philosophy — The 3Ms ════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-amber-50/40 border-b border-amber-100/60">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-isf-orange tracking-widest uppercase block mb-3">The Why</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900 leading-tight">The Core Philosophy</h2>
            </div>
          </FadeUp>

          {/* Founder Quote */}
          <FadeUp delay={0.1}>
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 mb-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-isf-orange to-amber-400 rounded-l-3xl" />
              <div className="absolute top-6 right-6 text-8xl text-white/5 font-black leading-none select-none">"</div>
              <blockquote className="relative z-10 text-base md:text-lg text-white/90 font-medium leading-relaxed italic max-w-4xl">
                India stands at a defining moment to become a global innovation powerhouse... To realize Bharat 2047, we must equip youth—especially from rural India and Tier 2 & 3 cities—with the right tools, mentorship, and global exposure.
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src="/assets/cohort3/ja-chowdary.png"
                  alt="Dr. J A Chowdary"
                  className="w-12 h-12 rounded-full object-cover border-2 border-isf-orange"
                  onError={e => { e.currentTarget.src = `https://ui-avatars.com/api/?name=JA+Chowdary&background=f97316&color=fff&size=256`; }}
                />
                <div>
                  <p className="text-white font-bold text-sm">Dr. J A Chowdary</p>
                  <p className="text-white/50 text-xs">Founder & Chairman, ISF</p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* 3 Pillars — antigravity cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={0.1 + i * 0.12}>
                <motion.div
                  whileHover={{ y: -12, boxShadow: '0 24px 60px rgba(249,115,22,0.12)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' as const }}
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md cursor-default"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' as const, delay: i * 0.8 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${p.iconColor} ${p.bgColor} mb-4`}
                  >
                    {p.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Section 3: Innovation Arenas ════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, #166534 0%, transparent 40%), radial-gradient(circle at 70% 70%, #312e81 0%, transparent 40%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase block mb-2">10 Arenas</span>
              <h2 className="text-xl md:text-3xl font-black text-white! leading-tight">Choose Your Arena of Impact</h2>
              <p className="mt-3 text-white/60 text-sm max-w-2xl mx-auto">
                Not limited to these — but here's where we're looking hardest.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {arenas.map((arena, i) => (
              <FadeUp key={arena.title} delay={Math.min(0.04 * i, 0.3)}>
                <motion.div
                  whileHover={{ y: -12, scale: 1.03, boxShadow: '0 20px 40px rgba(255,255,255,0.15)' }}
                  transition={{ duration: 0.3, ease: 'easeOut' as const }}
                  onHoverStart={() => setHoveredArena(i)}
                  onHoverEnd={() => setHoveredArena(null)}
                  className={`relative rounded-2xl border ${arena.border} bg-white/5 group-hover:bg-white/10 backdrop-blur-sm p-6 cursor-default overflow-hidden group transition-all duration-300`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${arena.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: 'easeInOut' as const, delay: i * 0.25 }}
                    className={`w-12 h-12 rounded-xl ${arena.bg} flex items-center justify-center mb-4`}
                  >
                    <div className={arena.iconColor}>{arena.icon}</div>
                  </motion.div>
                  <h3 className="text-sm font-bold text-white! leading-snug mb-2">{arena.title}</h3>
                  <AnimatePresence>
                    {hoveredArena === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-white/80! text-xs leading-relaxed overflow-hidden"
                      >
                        {arena.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Section 4: Eligibility — Terminal Style ══════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-isf-orange tracking-widest uppercase block mb-2">Qualification Check</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">Are You a Junicorn?</h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/60">
              {/* Title bar */}
              <div className="bg-slate-900 px-6 py-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-4 text-white/40 text-xs font-mono">junicorn_eligibility_check.sh</span>
              </div>
              {/* Terminal body */}
              <div className="bg-slate-950 p-8 font-mono text-sm space-y-6">
                {[
                  { label: '→ AGE_BRACKET', value: '18–25 years', detail: 'Young innovators & changemakers', color: 'text-emerald-400' },
                  { label: '→ TARGET_PROFILE', value: 'Students, early-stage innovators, or teams', detail: 'With a prototype or lean MVP', color: 'text-cyan-400' },
                  { label: '→ BACKGROUND', value: 'Open to independent innovators', detail: 'Or those linked with college incubators from across 20 states', color: 'text-violet-400' }
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                     <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-white/30">{item.label}</span>
                      <span className={`font-bold ${item.color}`}>=</span>
                      <span className="text-white font-bold">"{item.value}"</span>
                    </div>
                    <p className="text-white/40 pl-4 text-xs"># {item.detail}</p>
                  </div>
                ))}
                <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-white/60">All checks passed — </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' as const }}
                    className="text-emerald-400 font-bold"
                  >
                    You qualify.
                  </motion.span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ Section 5: The Expedition — Timeline ════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50/50 to-orange-50/30 border-y border-amber-100/60">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-isf-orange tracking-widest uppercase block mb-2">The Journey</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">The Expedition</h2>
              <p className="mt-3 text-slate-600 text-sm">Four milestones. One transformational destination.</p>
            </div>
          </FadeUp>

          <div className="relative">
            {/* Connecting gradient line */}
            <div className="hidden md:block absolute top-[24px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald-400 via-blue-400 via-violet-400 to-orange-400" />

            <div className="grid md:grid-cols-4 gap-6">
              {phases.map((phase, i) => (
                <FadeUp key={phase.phase} delay={0.1 * i}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' as const }}
                    className="flex flex-col items-center text-center cursor-default"
                  >
                    {/* Animated node */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut' as const, delay: i * 0.6 }}
                      className={`w-12 h-12 rounded-full ${phase.dotColor} flex items-center justify-center text-white font-black text-base shadow-lg ${phase.shadow} mb-4 relative z-10`}
                    >
                      {i + 1}
                    </motion.div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{phase.phase}</span>
                    <span className="flex items-center gap-1 text-xs font-bold text-isf-orange mb-2">
                      <Calendar className="w-3 h-3" />{phase.date}
                    </span>
                    <h3 className="text-base font-black text-slate-900 mb-2">{phase.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{phase.desc}</p>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Section 6: Global Impact ════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #1d4ed8 0%, transparent 60%)' }}
        />
        {/* Animated rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' as const }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' as const }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase block mb-2">Global Impact</span>
              <h2 className="text-xl md:text-3xl font-black text-white!">From Villages to Ventures</h2>
              <p className="mt-3 text-white/60 text-sm">Real Junicorns. Real Ventures. Real Change.</p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {impactData.map((d, i) => (
              <FadeUp key={d.cohort} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: '0 30px 70px rgba(0,0,0,0.3)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' as const }}
                  className={`bg-gradient-to-br ${d.grad} p-px rounded-3xl cursor-default`}
                >
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 md:p-8 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className="text-3xl">{d.flag}</span>
                        <h3 className="text-lg font-black text-white mt-2">{d.cohort}</h3>
                        <p className="text-white/50 text-xs flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />{d.location} · {d.year}
                        </p>
                      </div>
                      <div className={`bg-gradient-to-br ${d.grad} text-white text-[10px] font-bold px-2.5 py-1 rounded-full`}>
                        COMPLETED
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Rural Junicorns', value: d.junicorns },
                        { label: 'Ideas Showcased', value: d.ideas },
                        { label: 'Incorporations', value: d.incorporations }
                      ].map(stat => (
                        <div key={stat.label} className="text-center">
                          <motion.span
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const, delay: i * 0.7 }}
                            className="text-xl font-bold text-white block"
                          >{stat.value}</motion.span>
                          <span className="text-white/40 text-[10px]">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          {/* Destination banner */}
          <FadeUp delay={0.25}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3, ease: 'easeOut' as const }}
              className="relative rounded-3xl overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-isf-orange to-amber-400" />
              <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest block mb-1">The Destination — Cohort 3</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Bengaluru, India</h3>
                  <p className="text-white/80 text-sm mt-1.5 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> December 2026 · Grand Finale
                  </p>
                </div>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25, ease: 'easeOut' as const }}>
                  <Link
                    to="/registration"
                    className="flex items-center gap-2 bg-white text-isf-orange font-black px-6 py-3.5 rounded-full shadow-xl whitespace-nowrap text-sm"
                  >
                    Secure Your Spot <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ Section 7: The Enablers ════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-isf-orange tracking-widest uppercase block mb-2">Partners & People</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">The Enablers</h2>
            </div>
          </FadeUp>

          {/* VISARA block */}
          <FadeUp delay={0.1}>
            <div className="bg-gradient-to-br from-indigo-950 to-slate-900 rounded-3xl p-8 md:p-10 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
                <div className="md:w-1/2">
                  <span className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold tracking-widest uppercase mb-4">VISARA Partnership</span>
                  <h3 className="text-lg md:text-xl font-bold text-white! mb-3">Deep-Tech Skilling Initiative</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    VISARA brings future-focused academies to empower Junicorns with cutting-edge skills and domain expertise across six critical verticals.
                  </p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-3">
                  {academies.map((a) => (
                    <motion.div
                      key={a}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25, ease: 'easeOut' as const }}
                      className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2.5 rounded-xl cursor-default"
                    >
                      <Star className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-white text-xs font-medium">{a}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Faces */}
          <FadeUp delay={0.2}>
            <div className="text-center mb-8">
              <h3 className="text-lg font-bold text-slate-900">Faces Behind the Movement</h3>
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {enablers.map((person, i) => (
              <FadeUp key={person.name} delay={0.05 * i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' as const }}
                  className="bg-white rounded-xl shadow-sm border border-[#e6e6e6] hover:shadow-md transition-shadow group flex flex-col items-center text-center p-4 cursor-default h-full"
                >
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-gray-100 shrink-0">
                    <img
                      src={person.img || ''}
                      alt={person.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={e => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=f97316&color=fff&size=256`; }}
                    />
                  </div>
                  <h3 className="font-bold text-sm text-[#111111] mb-1 leading-tight">{person.name}</h3>
                  <p className="text-xs text-[#666666] font-light leading-snug">{person.role}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Section 8: Footer CTA ══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #f97316 0%, transparent 40%)' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-3xl font-black text-white! mb-6">
                Ready to Change India's Story?
              </h2>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(249,115,22,0.45)' }}
                transition={{ duration: 0.3, ease: 'easeOut' as const }}
                className="inline-block"
              >
                <Link
                  to="/registration"
                  className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-black text-base px-8 py-3.5 rounded-full shadow-xl cursor-pointer"
                >
                  Register Now <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <p className="mt-6 text-white/40 text-xs font-medium uppercase tracking-widest">
                Search OR Scan to Register
              </p>
            </div>
          </FadeUp>

          {/* Alignment Badges */}
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10 opacity-70">
              {['🏭 Make in India', '🎓 Skill India', '🚀 Startup India', '💡 Atal Innovation Mission'].map(badge => (
                <div key={badge} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs font-semibold">
                  {badge}
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Address */}
          <FadeUp delay={0.2}>
            <div className="text-center text-white/30 text-xs">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                ISF Office, 310, Saideep Hulas, Old Madras Road Virgonagar, Bangalore, Karnataka — 560049
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
};

export default Cohort3;
