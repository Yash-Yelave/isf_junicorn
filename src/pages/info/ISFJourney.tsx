import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Compass, Rocket, Globe, Calendar, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { toast } from "sonner";
import { getImageUrl } from "../../utils/imageUtils";

export function ISFJourney() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubscribed(true);
    toast.success("Thank you! You'll be the first to know when ISF Journey launches.");
  };

  const previewMilestones = [
    {
      year: "2022",
      title: "The Genesis",
      desc: "ISF was founded to bridge the gap between Indian startups, global mentors, and capital.",
      icon: Compass
    },
    {
      year: "2023",
      title: "Global Expansion",
      desc: "Hosted major summits in Hyderabad and overseas, connecting over 10,000+ startups.",
      icon: Globe
    },
    {
      year: "2024",
      title: "Junicorns Initiative",
      desc: "Empowering under-16 and college innovators with world-class mentorship & bootcamps.",
      icon: Rocket
    },
    {
      year: "2025 & Beyond",
      title: "50,000+ Startups Network",
      desc: "Building a global ecosystem for sustainable growth, AI innovation, and rural empowerment.",
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A261A] text-white font-inter relative overflow-hidden pt-20">
      
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#D24D7F]/20 via-[#F59E0B]/20 to-[#0C3E2B]/40 rounded-full blur-[120px] pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#458B79]/20 rounded-full blur-[100px] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        
        {/* Main Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-amber-300 shadow-inner">
            <Clock size={16} className="text-amber-300 animate-pulse" />
            <span>COMING SOON</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-white/80 font-normal">Interactive Experience</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold font-baskerville tracking-tight leading-tight">
            The <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-[#D24D7F] bg-clip-text text-transparent">ISF Journey</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            We are crafting an immersive digital chronicle mapping the evolution, global summits, ecosystem milestones, and visionary leaders behind the International Startup Foundation.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/junicornshub"
              className="bg-[#D24D7F] hover:bg-[#C73E6E] text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg hover:shadow-pink-500/20 transition-all flex items-center gap-2"
            >
              Explore Junicorns <ArrowRight size={16} />
            </Link>
            <Link
              to="/"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-sm backdrop-blur-md transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Sneak Peek Milestones Grid */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-bold font-baskerville text-slate-200">
              What's Coming in the ISF Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">A sneak peek of the chapters we are preparing for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewMilestones.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full border border-amber-400/30">
                        {item.year}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                        <IconComp size={20} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-amber-400/80 font-medium">
                    <Sparkles size={12} />
                    <span>In development</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Get Notified Section */}
        <div className="mt-20 max-w-3xl mx-auto bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/15 p-8 sm:p-10 rounded-3xl text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-2">
            <Sparkles size={28} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-baskerville text-white">
            Be the First to Experience the Journey
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto font-light">
            Subscribe to get an exclusive early-access notification as soon as the ISF Journey goes live.
          </p>

          {subscribed ? (
            <div className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 p-4 rounded-2xl flex items-center justify-center gap-2 max-w-md mx-auto">
              <CheckCircle2 size={20} className="text-emerald-400" />
              <span className="text-sm font-semibold">You're on the early access list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black/30 border border-white/20 text-white placeholder-slate-400 px-5 py-3.5 rounded-full text-sm focus:outline-none focus:border-amber-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-full transition-colors shrink-0 shadow-md"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
