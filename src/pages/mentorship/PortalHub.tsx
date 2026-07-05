import React, { useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { User, Key, Mail, Lock, ShieldCheck, Settings, Users, Calendar, LogOut, Edit3, ArrowRight } from "lucide-react";

export function PortalHub() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [role, setRole] = useState<"mentor" | "mentee">("mentor");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showOtpScreen, setShowOtpScreen] = useState<boolean>(false);
  const [otpCode, setOtpCode] = useState<string>("");
  const [showForgotPwd, setShowForgotPwd] = useState<boolean>(false);

  // Active dashboard tab
  const [activeTab, setActiveTab] = useState<"profile" | "sessions" | "matches">("profile");

  // Profile Form States
  const [profileData, setProfileData] = useState({
    name: "Dr. Sathyendra Kumar",
    title: "Senior AI Architect & Venture Advisor",
    company: "ISF Network & TechLabs",
    bio: "Passionate about helping seed-stage startups define their product roadmap and AI integration architecture. 15+ years scaling technology teams in global ecosystems.",
    expertise: "Artificial Intelligence, SaaS Architecture, Funding Strategy, Product Roadmap",
    skills: "TensorFlow, Product Management, Pitching, Go-to-Market"
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    // Simulate OTP generation and dispatch
    toast.success("Credentials validated! OTP code has been dispatched to your email address (simulated).");
    setShowOtpScreen(true);
  };

  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode.length < 4) {
      toast.error("Please enter a valid 6-digit OTP code.");
      return;
    }
    // Perform log in
    setIsLoggedIn(true);
    toast.success(`Welcome back, ${profileData.name}! Logged in as ${role === "mentor" ? "Mentor" : "Mentee"}.`);
  };

  const handleForgotPwdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Password recovery email dispatched! Check console logs for details.");
    setShowForgotPwd(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowOtpScreen(false);
    setOtpCode("");
    toast.info("Logged out successfully.");
  };

  // Mock mentorship matches
  const MATCHES = [
    { name: "ApexAI Systems", domain: "DeepTech / B2B SaaS", founder: "Rohit Sharma", status: "Matching 94%" },
    { name: "FinFlow Ledger", domain: "Fintech / Blockchain", founder: "Priya Patel", status: "Matching 88%" },
    { name: "EkoCare Labs", domain: "HealthTech / IoT", founder: "Vikram Sen", status: "Matching 85%" }
  ];

  // Mock sessions calendar
  const SESSIONS = [
    { date: "July 12, 2026", time: "10:00 AM", topic: "AI Product Architecture Review", client: "ApexAI Systems" },
    { date: "July 15, 2026", time: "03:30 PM", topic: "GTM Strategy & Micro-VC pitch review", client: "FinFlow Ledger" }
  ];

  return (
    <div className="font-segoe pb-20 pt-28 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/20 min-h-[90vh] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          /* LOGIN OR FORGOT PASSWORD VIEWS */
          <motion.div
            key="login-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-md px-4"
          >
            <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 space-y-6">
              {/* Logo / Header */}
              <div className="text-center space-y-2">
                <img
                  src="/assets/isf-logo.webp"
                  alt="ISF Logo"
                  className="h-10 w-auto mx-auto"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/images/isf-logo-festival-2024.png";
                  }}
                />
                <h1 className="text-xl font-bold font-montserrat text-slate-800">Mentorship Hub Portal</h1>
                <p className="text-xs text-gray-400">Replicated visual login and profile dashboard shell.</p>
              </div>

              {showForgotPwd ? (
                /* FORGOT PASSWORD FORM */
                <form onSubmit={handleForgotPwdSubmit} className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-600 font-montserrat text-center">Forgotten password?</h3>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Registered Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john.doe@example.com"
                        className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                  >
                    Reset Password
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForgotPwd(false)}
                    className="w-full text-center text-xs font-semibold text-gray-500 hover:text-purple-700 mt-2 block"
                  >
                    Cancel and Return
                  </button>
                </form>
              ) : showOtpScreen ? (
                /* OTP VERIFICATION CODE SCREEN */
                <form onSubmit={handleOtpVerify} className="space-y-4">
                  <div className="p-4 bg-purple-50 text-center rounded-xl border border-purple-100/60">
                    <span className="block text-xs font-semibold text-purple-700">Enter OTP Verification Code</span>
                    <span className="text-[10px] text-purple-500 mt-1 block">A 6-digit code was sent to your registered email (simulated).</span>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">One-Time Password (OTP)</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        maxLength={6}
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        placeholder="e.g. 123456"
                        className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 text-sm tracking-[0.4em] text-center font-bold focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                  >
                    Verify Code & Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowOtpScreen(false)}
                    className="w-full text-center text-xs font-semibold text-gray-500 hover:text-purple-700 mt-2 block"
                  >
                    Back to credentials
                  </button>
                </form>
              ) : (
                /* MAIN LOGIN FORM */
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  {/* Role toggle tabs */}
                  <div className="bg-slate-50 border border-slate-100 p-1.5 rounded-xl flex gap-2">
                    <button
                      type="button"
                      onClick={() => setRole("mentor")}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                        role === "mentor" ? "bg-purple-700 text-white" : "text-gray-600 hover:bg-gray-200/50"
                      }`}
                    >
                      Login as Mentor
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole("mentee")}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                        role === "mentee" ? "bg-purple-700 text-white" : "text-gray-600 hover:bg-gray-200/50"
                      }`}
                    >
                      Login as Mentee
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">User Email Name</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. sathyendra@isfnetwork.org"
                        className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Password</label>
                    <div className="relative">
                      <Key className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowForgotPwd(true)}
                    className="text-xs font-bold text-purple-700 hover:text-purple-800 transition-colors inline-block"
                  >
                    Forgot password?
                  </button>

                  <button
                    type="submit"
                    className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                  >
                    Log In
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        ) : (
          /* MENTOR/MENTEE PORTAL DASHBOARD SHELL */
          <motion.div
            key="dashboard-box"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-5xl px-4"
          >
            <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-4 min-h-[550px]">
              {/* Sidebar Panel */}
              <div className="bg-slate-900 text-slate-300 p-6 flex flex-col justify-between border-r border-slate-800">
                <div className="space-y-6">
                  {/* Logo / Profile */}
                  <div className="space-y-2 text-center md:text-left">
                    <span className="inline-block text-[10px] font-bold text-purple-400 bg-purple-900/40 border border-purple-800 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {role} Portal
                    </span>
                    <h2 className="text-base font-bold text-white font-montserrat truncate">{profileData.name}</h2>
                    <p className="text-xs text-slate-400 truncate">{profileData.company}</p>
                  </div>

                  {/* Nav links */}
                  <div className="space-y-1 pt-4">
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-semibold rounded-xl transition-colors ${
                        activeTab === "profile" ? "bg-purple-700 text-white" : "hover:bg-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      <Settings size={16} /> Profile Details
                    </button>
                    <button
                      onClick={() => setActiveTab("sessions")}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-semibold rounded-xl transition-colors ${
                        activeTab === "sessions" ? "bg-purple-700 text-white" : "hover:bg-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      <Calendar size={16} /> Active Sessions
                    </button>
                    <button
                      onClick={() => setActiveTab("matches")}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-semibold rounded-xl transition-colors ${
                        activeTab === "matches" ? "bg-purple-700 text-white" : "hover:bg-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      <Users size={16} /> Mentee Connect
                    </button>
                  </div>
                </div>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-3 text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-slate-800 rounded-xl transition-colors"
                >
                  <LogOut size={16} /> Log Out
                </button>
              </div>

              {/* Main Workspace Area */}
              <div className="col-span-1 md:col-span-3 p-8 flex flex-col">
                {activeTab === "profile" && (
                  /* PROFILE SETTINGS FORM */
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-3 font-montserrat flex items-center gap-2">
                        <Edit3 size={18} className="text-purple-700" /> Account Settings
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Full Name</label>
                          <input
                            type="text"
                            value={profileData.name}
                            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Company / Affiliation</label>
                          <input
                            type="text"
                            value={profileData.company}
                            onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Professional Title</label>
                        <input
                          type="text"
                          value={profileData.title}
                          onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Professional Bio Summary</label>
                        <textarea
                          rows={3}
                          value={profileData.bio}
                          onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Areas of Expertise</label>
                          <input
                            type="text"
                            value={profileData.expertise}
                            onChange={(e) => setProfileData({ ...profileData, expertise: e.target.value })}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Core Technical Skills</label>
                          <input
                            type="text"
                            value={profileData.skills}
                            onChange={(e) => setProfileData({ ...profileData, skills: e.target.value })}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex justify-end">
                      <button
                        onClick={() => toast.success("Profile saved successfully (simulated log update).")}
                        className="px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs transition-colors"
                      >
                        Save Configuration
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "sessions" && (
                  /* MOCK ACTIVE SESSIONS CALENDAR */
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-3 font-montserrat flex items-center gap-2">
                      <Calendar size={18} className="text-purple-700" /> Upcoming Mentorship Calls
                    </h2>

                    <div className="space-y-4">
                      {SESSIONS.map((session, idx) => (
                        <div key={idx} className="border border-gray-100 rounded-2xl p-6 bg-slate-50 flex justify-between items-center">
                          <div className="space-y-1">
                            <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block">
                              {session.date} • {session.time}
                            </span>
                            <h4 className="font-bold text-slate-900 font-montserrat">{session.topic}</h4>
                            <p className="text-xs text-gray-500">Scheduled Call with {session.client}</p>
                          </div>
                          <button
                            onClick={() => toast.success("Launching Video Call Meeting Room (mock).")}
                            className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold text-xs rounded-lg transition-colors"
                          >
                            Launch Room
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "matches" && (
                  /* MOCK MATCHMAKER ALGORITHM CARDS */
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-3 font-montserrat flex items-center gap-2">
                      <Users size={18} className="text-purple-700" /> AI-Driven Mentee Connections
                    </h2>

                    <div className="space-y-4">
                      {MATCHES.map((match, idx) => (
                        <div key={idx} className="border border-gray-150 rounded-2xl p-6 hover:border-purple-200 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div>
                            <span className="px-2 py-0.5 bg-green-50 text-[10px] font-bold text-green-700 rounded-full inline-block border border-green-200/60 mb-2">
                              {match.status} match
                            </span>
                            <h4 className="font-bold text-slate-950 font-montserrat">{match.name}</h4>
                            <p className="text-xs text-gray-500">{match.domain} • Founder: {match.founder}</p>
                          </div>
                          <button
                            onClick={() => toast.success(`Connection proposal sent to ${match.name} founder!`)}
                            className="flex items-center gap-1.5 px-4 py-2 border-2 border-purple-700 text-purple-700 font-semibold text-xs rounded-xl hover:bg-purple-50 transition-colors"
                          >
                            Connect Partner <ArrowRight size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
