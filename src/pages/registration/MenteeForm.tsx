import React, { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function MenteeForm() {
  const [formData, setFormData] = useState({
    FullName: "",
    Phone: "",
    Email: "",
    Location: "",
    College: "",
    CohortStatus: "",
    CompanyName: "",
    TeamSize: "",
    Teammates: "",
    VolunteerExp: "",
    ContributionRole: "",
    TimeCommitment: "",
    WhyVolunteer: "",
    Seeking: "",
    Source: "",
    Feedback: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({
      FullName: "",
      Phone: "",
      Email: "",
      Location: "",
      College: "",
      CohortStatus: "",
      CompanyName: "",
      TeamSize: "",
      Teammates: "",
      VolunteerExp: "",
      ContributionRole: "",
      TimeCommitment: "",
      WhyVolunteer: "",
      Seeking: "",
      Source: "",
      Feedback: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const scriptUrl = import.meta.env.VITE_MENTEE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("VITE_MENTEE_SCRIPT_URL environment variable is missing.");
      setStatus("error");
      toast.error("Endpoint configuration missing!");
      return;
    }

    try {
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      toast.success("Thank you! Your application has been submitted.");
      handleClear();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    }
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
              {/* Section 1: Personal Info */}
              <div className="bg-white rounded-lg shadow-sm border-t-4 border-t-[#0c3e2b] border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-6">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="FullName"
                      required
                      placeholder="Your full name"
                      value={formData.FullName}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="Phone"
                      required
                      placeholder="+91 XXXXXXXXXX"
                      value={formData.Phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      placeholder="email@example.com"
                      value={formData.Email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City, State & Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="Location"
                      required
                      placeholder="e.g. Hyderabad, TG, India"
                      value={formData.Location}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    College / Institute / University <span className="text-gray-400 font-normal text-xs ml-1">optional</span>
                  </label>
                  <input
                    type="text"
                    name="College"
                    placeholder="Your college or institute"
                    value={formData.College}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                  />
                </div>

                <hr className="my-8 border-gray-200" />

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Are you part of the Junicorn Cohort? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {["Yes, Cohort 1 (Austin, Texas, USA)", "Yes, Cohort 2 (Dubai, UAE)", "No, my first time"].map(opt => (
                      <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="CohortStatus"
                          value={opt}
                          required
                          checked={formData.CohortStatus === opt}
                          onChange={handleChange}
                          className="mt-0.5 w-4 h-4 text-[#0c3e2b] focus:ring-[#0c3e2b] border-gray-300"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 2: Team & Venture */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-2">Team & Venture</h2>
                <p className="text-[13px] text-gray-500 mb-6">If you are a Junicorn building a venture, tell us about your team. Skip this section if not applicable.</p>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Company Name <span className="text-gray-400 font-normal text-xs ml-1">optional</span>
                  </label>
                  <p className="text-xs text-gray-500 mb-2">If you are a Junicorn, please enter your company name.</p>
                  <input
                    type="text"
                    name="CompanyName"
                    placeholder="Your company / venture name"
                    value={formData.CompanyName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Team Size <span className="text-gray-400 font-normal text-xs ml-1">optional</span>
                  </label>
                  <div className="space-y-3">
                    {["1", "2", "3", "4", "Other"].map(opt => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="TeamSize"
                          value={opt}
                          checked={formData.TeamSize === opt}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#0c3e2b] focus:ring-[#0c3e2b] border-gray-300"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Teammate Name(s) <span className="text-gray-400 font-normal text-xs ml-1">optional</span>
                  </label>
                  <p className="text-xs text-gray-500 mb-2">Please enter your co-founder and other teammates' name(s). Ex: Kiran, Charan and Siddharth</p>
                  <input
                    type="text"
                    name="Teammates"
                    placeholder="Your answer"
                    value={formData.Teammates}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                  />
                </div>
              </div>

              {/* Section 3: Volunteer Experience */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-6">Volunteer Experience</h2>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 text-center sm:text-left">
                    Please indicate your level of experience with volunteer work <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl">
                    <span className="text-xs text-gray-500 hidden sm:block">First Time Volunteer</span>
                    <div className="flex items-center gap-4 sm:gap-6">
                      {["1", "2", "3", "4", "5"].map(num => (
                        <label key={num} className="flex flex-col items-center gap-2 cursor-pointer group">
                          <span className="text-sm font-medium text-gray-700">{num}</span>
                          <input
                            type="radio"
                            name="VolunteerExp"
                            value={num}
                            required
                            checked={formData.VolunteerExp === num}
                            onChange={handleChange}
                            className="w-4 h-4 text-[#0c3e2b] focus:ring-[#0c3e2b] border-gray-300"
                          />
                        </label>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 hidden sm:block">Highly Experienced</span>
                  </div>
                  <div className="flex justify-between w-full mt-2 sm:hidden px-4">
                    <span className="text-xs text-gray-500">First Time</span>
                    <span className="text-xs text-gray-500">Experienced</span>
                  </div>
                </div>

                <hr className="my-8 border-gray-200" />

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    How Would You Like to Contribute? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {[
                      "Community / Operations", "Content / Social Media", "Design / Creatives",
                      "Tech / No-Code", "Partnerships / Outreach", "I am here ONLY to share feedback"
                    ].map(opt => (
                      <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="ContributionRole"
                          value={opt}
                          required
                          checked={formData.ContributionRole === opt}
                          onChange={handleChange}
                          className="mt-0.5 w-4 h-4 text-[#0c3e2b] focus:ring-[#0c3e2b] border-gray-300"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <hr className="my-8 border-gray-200" />

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Time You Can Commit Per Week <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {["1-3 hours", "5-8 hours", "8+ hours", "0 hours (I am here ONLY to share feedback)"].map(opt => (
                      <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="TimeCommitment"
                          value={opt}
                          required
                          checked={formData.TimeCommitment === opt}
                          onChange={handleChange}
                          className="mt-0.5 w-4 h-4 text-[#0c3e2b] focus:ring-[#0c3e2b] border-gray-300"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <hr className="my-8 border-gray-200" />

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Why Do You Want to Volunteer with Junicorns? <span className="text-gray-400 font-normal text-xs ml-1">optional</span>
                  </label>
                  <input
                    type="text"
                    name="WhyVolunteer"
                    placeholder="Your answer"
                    value={formData.WhyVolunteer}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                  />
                </div>
              </div>

              {/* Section 4: Goals */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-6">What You're Seeking</h2>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    What Are You Seeking For? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {[
                      "Mentorship & Guidance", "Network & Ecosystem Access", "Product & Growth Support",
                      "Fundraising Readiness", "Market Access & Idea Validation", "I am here ONLY to share feedback",
                      "Other"
                    ].map(opt => (
                      <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="Seeking"
                          value={opt}
                          required
                          checked={formData.Seeking === opt}
                          onChange={handleChange}
                          className="mt-0.5 w-4 h-4 text-[#0c3e2b] focus:ring-[#0c3e2b] border-gray-300"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <hr className="my-8 border-gray-200" />

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    How Did You Hear About Junicorns? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {["Social Media", "Word of Mouth", "Event", "Other"].map(opt => (
                      <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="Source"
                          value={opt}
                          required
                          checked={formData.Source === opt}
                          onChange={handleChange}
                          className="mt-0.5 w-4 h-4 text-[#0c3e2b] focus:ring-[#0c3e2b] border-gray-300"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 5: Additional Info */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-6">Additional Information</h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Suggestions / Feedback <span className="text-gray-400 font-normal text-xs ml-1">optional</span>
                  </label>
                  <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">
                    Have you volunteered with Junicorns or the ISF Foundation before? If yes, share any <strong className="text-gray-700">suggestions, feedback, or scope for improvement</strong> from your experience.
                  </p>
                  <textarea
                    name="Feedback"
                    rows={4}
                    placeholder="Your answer here..."
                    value={formData.Feedback}
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
                    An error occurred during submission. Please verify environment configuration and try again.
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
