import React, { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function MenteeForm() {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    LinkedIn: "",
    CompanyName: "",
    Website: "",
    FounderType: "",
    TeamSize: "",
    ElevatorPitch: "",
    Problem: "",
    Solution: "",
    Sector: "",
    Stage: "",
    Incorporated: "",
    TargetAudience: "",
    Competitors: "",
    USP: "",
    Traction: "",
    BusinessModel: "",
    RaisedFunding: "",
    FundingDetails: "",
    Revenue: "",
    LookingToRaise: "",
    CapitalSeeking: "",
    FundUtilization: "",
    PrimarySeeking: [] as string[],
    MentorshipAreas: [] as string[],
    PitchDeck: null as File | null,
    AdditionalInfo: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (name: "PrimarySeeking" | "MentorshipAreas", value: string, maxLimit?: number) => {
    setFormData((prev) => {
      const current = prev[name];
      if (current.includes(value)) {
        return { ...prev, [name]: current.filter((item) => item !== value) };
      } else {
        if (maxLimit && current.length >= maxLimit) {
          toast.error(`You can select up to ${maxLimit} options.`);
          return prev;
        }
        return { ...prev, [name]: [...current, value] };
      }
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, PitchDeck: e.target.files[0] });
    }
  };

  const handleClear = () => {
    setFormData({
      FullName: "",
      Email: "",
      Phone: "",
      LinkedIn: "",
      CompanyName: "",
      Website: "",
      FounderType: "",
      TeamSize: "",
      ElevatorPitch: "",
      Problem: "",
      Solution: "",
      Sector: "",
      Stage: "",
      Incorporated: "",
      TargetAudience: "",
      Competitors: "",
      USP: "",
      Traction: "",
      BusinessModel: "",
      RaisedFunding: "",
      FundingDetails: "",
      Revenue: "",
      LookingToRaise: "",
      CapitalSeeking: "",
      FundUtilization: "",
      PrimarySeeking: [],
      MentorshipAreas: [],
      PitchDeck: null,
      AdditionalInfo: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Client-side visual toast verification / mock console log action only
    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      setStatus("success");
      toast.success("Thank you! Your application has been submitted.");
      handleClear();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F5F8FA] pt-28 pb-20 font-inter">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-baskerville text-[#0c3e2b] mb-6">
          Junicorns – Mentee / Volunteer Onboarding
        </h1>
        <div className="text-sm text-gray-700 space-y-4 max-w-2xl mx-auto leading-relaxed">
          <p>
            Whether you're a <strong>Junicorn building your venture</strong> or someone looking to <strong>volunteer, contribute, or plug into the ecosystem</strong> — this form helps us understand you and get you started.
          </p>
          <p>
            Tell us a bit about yourself, your team, and how you'd like to be part of the <strong>Purpose Wave</strong>.
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {status === "success" ? (
          <div className="bg-white rounded-lg shadow-sm border-t-4 border-t-[#0c3e2b] p-12 text-center my-12 animate-fade-in">
            <div className="w-16 h-16 bg-[#0c3e2b] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-[#0c3e2b] mb-4">
              Application Submitted Successfully
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
              Thank you for your interest! We've received your application and our team will reach out to you soon.
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-red-500 font-medium mb-4">* Indicates required question</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Section 1: Founder & Team Details */}
              <div className="bg-white rounded-lg shadow-sm border-t-4 border-t-[#0c3e2b] border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-6">
                  Founder & Team Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name of Primary Applicant <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="FullName"
                      required
                      placeholder="Enter your full name"
                      value={formData.FullName}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      placeholder="name@example.com"
                      value={formData.Email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="Phone"
                      required
                      placeholder="Enter 10-digit number"
                      value={formData.Phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Applicant's LinkedIn Profile URL <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="LinkedIn"
                      required
                      placeholder="https://linkedin.com/in/..."
                      value={formData.LinkedIn}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Startup / Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="CompanyName"
                      required
                      placeholder="Enter company name"
                      value={formData.CompanyName}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Startup Website or App Link <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="Website"
                      required
                      placeholder="https://yourstartup.com"
                      value={formData.Website}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Are you a Solo Founder or do you have Co-founders? <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="FounderType"
                      required
                      value={formData.FounderType}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    >
                      <option value="" disabled>Select an option</option>
                      {["Solo Founder", "1 Co-founder", "2 Co-founders", "3 or more Co-founders"].map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total Current Team Size (including founders) <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="TeamSize"
                      required
                      value={formData.TeamSize}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    >
                      <option value="" disabled>Select an option</option>
                      {["1-5", "6-10", "11-20", "21-50", "50+"].map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Startup Overview & Legal Status */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-6">Startup Overview & Legal Status</h2>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Elevator Pitch (Describe your startup in one sentence) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="ElevatorPitch"
                    required
                    maxLength={150}
                    rows={2}
                    placeholder="What does your company do?"
                    value={formData.ElevatorPitch}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors resize-y"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What specific problem are you solving? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="Problem"
                    required
                    rows={3}
                    placeholder="Detail the pain point..."
                    value={formData.Problem}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors resize-y"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    How does your product/service solve this problem? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="Solution"
                    required
                    rows={3}
                    placeholder="Detail your solution..."
                    value={formData.Solution}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors resize-y"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Primary Sector / Industry Focus <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="Sector"
                      required
                      value={formData.Sector}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    >
                      <option value="" disabled>Select an option</option>
                      {["Agriculture & Food Security", "Healthcare & Well-being", "Manufacturing & MSME", "Deep-Tech & AI", "EdTech", "Clean Energy & Sustainability", "FinTech", "E-commerce/Retail", "Smart Cities", "Mobility/Logistics", "Other"].map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Stage of the Startup <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="Stage"
                      required
                      value={formData.Stage}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    >
                      <option value="" disabled>Select an option</option>
                      {["Ideation", "Prototype/MVP (Minimum Viable Product)", "Early Revenue/Traction", "Growth & Scaling"].map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Is your startup officially incorporated? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="Incorporated"
                    required
                    value={formData.Incorporated}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                  >
                    <option value="" disabled>Select an option</option>
                    {["Yes - Private Limited", "Yes - LLP", "Yes - Sole Proprietorship/Partnership", "No - Not incorporated yet"].map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Section 3: Market, Product & Traction */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-6">Market, Product & Traction</h2>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Who is your primary Target Audience / Ideal Customer? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="TargetAudience"
                    required
                    rows={2}
                    placeholder="Describe your target market demographics"
                    value={formData.TargetAudience}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors resize-y"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Who are your top 3 competitors? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="Competitors"
                    required
                    placeholder="Competitor A, Competitor B, Competitor C"
                    value={formData.Competitors}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What is your Unique Selling Proposition (USP) / Competitive Advantage? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="USP"
                    required
                    rows={2}
                    placeholder="What makes your product uncopyable?"
                    value={formData.USP}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors resize-y"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What is your current traction? <span className="text-red-500">*</span>
                  </label>
                  <p className="text-xs text-gray-500 mb-2">(Mention active users, pilots, B2B clients, or key milestones achieved)</p>
                  <textarea
                    name="Traction"
                    required
                    rows={3}
                    placeholder="Detail active metrics, client pilots, or revenue milestones"
                    value={formData.Traction}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors resize-y"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What is your current Business Model (How do you make money)? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="BusinessModel"
                    required
                    rows={2}
                    placeholder="e.g., B2B SaaS Subscription, Marketplace Commission, Transaction Fees"
                    value={formData.BusinessModel}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors resize-y"
                  />
                </div>
              </div>

              {/* Section 4: Financials & Funding Ask */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-6">Financials & Funding Ask</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Have you raised any external funding previously? <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-3">
                      {["Yes", "No"].map(opt => (
                        <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="RaisedFunding"
                            value={opt}
                            required
                            checked={formData.RaisedFunding === opt}
                            onChange={handleChange}
                            className="mt-0.5 w-4 h-4 text-[#0c3e2b] focus:ring-[#0c3e2b] border-gray-300"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {formData.RaisedFunding === "Yes" && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        If Yes, how much was raised and from what type of investors? <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="FundingDetails"
                        required={formData.RaisedFunding === "Yes"}
                        placeholder="e.g., $50k from Angel Investors / Pre-seed Grant"
                        value={formData.FundingDetails}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                      />
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What is your current Average Monthly Revenue? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="Revenue"
                    required
                    value={formData.Revenue}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                  >
                    <option value="" disabled>Select an option</option>
                    {["Pre-revenue", "Under ₹1 Lakh", "₹1 Lakh - ₹5 Lakhs", "₹5 Lakhs - ₹10 Lakhs", "₹10 Lakhs+"].map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Are you currently looking to raise funds? <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-3">
                      {["Yes", "No"].map(opt => (
                        <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="LookingToRaise"
                            value={opt}
                            required
                            checked={formData.LookingToRaise === opt}
                            onChange={handleChange}
                            className="mt-0.5 w-4 h-4 text-[#0c3e2b] focus:ring-[#0c3e2b] border-gray-300"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.LookingToRaise === "Yes" && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        If looking to raise, how much capital are you seeking? <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="CapitalSeeking"
                        required={formData.LookingToRaise === "Yes"}
                        placeholder="Specify currency and target amount"
                        value={formData.CapitalSeeking}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                      />
                    </div>
                  )}
                </div>

                {formData.LookingToRaise === "Yes" && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      How do you plan to utilize the requested funds? <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-gray-500 mb-2">(e.g., 40% Product, 40% Marketing, 20% Team)</p>
                    <textarea
                      name="FundUtilization"
                      required={formData.LookingToRaise === "Yes"}
                      rows={2}
                      placeholder="Provide breakdown percentage allocation"
                      value={formData.FundUtilization}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors resize-y"
                    />
                  </div>
                )}
              </div>

              {/* Section 5: Mentorship & Support Requirements */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-6">Mentorship & Support Requirements</h2>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    What are you primarily seeking from this program? (Select all that apply) <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {["Funding/Investment", "Expert Mentorship", "Market/Customer Access", "Technical/Product Support", "Legal/Compliance Guidance"].map(opt => (
                      <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.PrimarySeeking.includes(opt)}
                          onChange={() => handleCheckboxChange("PrimarySeeking", opt)}
                          className="mt-0.5 w-4 h-4 rounded text-[#0c3e2b] focus:ring-[#0c3e2b] border-gray-300"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.PrimarySeeking.includes("Expert Mentorship") && (
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      If seeking Mentorship, which specific areas do you need the most help with? (Select top 2) <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-3">
                      {["Go-to-Market (GTM) Strategy", "Pitch Deck Refinement & Fundraising", "Product Scaling & Tech Architecture", "Hiring & Culture", "Financial Modeling"].map(opt => (
                        <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={formData.MentorshipAreas.includes(opt)}
                            onChange={() => handleCheckboxChange("MentorshipAreas", opt, 2)}
                            className="mt-0.5 w-4 h-4 rounded text-[#0c3e2b] focus:ring-[#0c3e2b] border-gray-300"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload your latest Pitch Deck (PDF format) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    required
                    onChange={handleFileChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#0c3e2b] file:text-white hover:file:bg-[#125c40] cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Is there any additional information or a specific milestone you'd like to share with the evaluation committee? <span className="text-gray-400 font-normal text-xs ml-1">optional</span>
                  </label>
                  <textarea
                    name="AdditionalInfo"
                    rows={3}
                    placeholder="Any details not captured above..."
                    value={formData.AdditionalInfo}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors resize-y"
                  />
                </div>
              </div>

              {/* Status Message / Actions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="bg-[#0c3e2b] hover:bg-[#125c40] text-white px-8 py-2.5 rounded font-semibold text-sm transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
                      {status === "submitting" ? "Sending..." : "Submit"}
                    </button>
                    <button
                      type="button"
                      onClick={handleClear}
                      disabled={status === "submitting"}
                      className="text-gray-500 hover:bg-gray-100 px-6 py-2.5 rounded font-semibold text-sm transition-colors disabled:opacity-70"
                    >
                      Clear form
                    </button>
                  </div>
                </div>

                {/* Status-based UI Messages */}
                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded text-sm font-medium animate-fade-in text-center mt-2">
                    An error occurred during submission. Please try again.
                  </div>
                )}
              </div>

            </form>
          </>
        )}
      </div>
    </div>
  );
}
