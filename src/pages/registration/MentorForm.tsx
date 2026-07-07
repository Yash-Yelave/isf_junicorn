import React, { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function MentorForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    linkedin: "",
    industry: "",
    expertise: "",
    experience: "",
    contribute: "",
    timeCommit: "",
    hearAbout: "",
    feedback: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({
      fullName: "",
      contact: "",
      linkedin: "",
      industry: "",
      expertise: "",
      experience: "",
      contribute: "",
      timeCommit: "",
      hearAbout: "",
      feedback: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      FullName: formData.fullName,
      ContactInfo: formData.contact,
      ProfileURL: formData.linkedin,
      Industry: formData.industry,
      Expertise: formData.expertise,
      Experience: formData.experience,
      ContributionType: formData.contribute,
      TimeCommitment: formData.timeCommit,
      Source: formData.hearAbout,
      Feedback: formData.feedback
    };

    fetch(import.meta.env.VITE_MENTOR_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
    .then(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      handleClear();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    .catch((error) => {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      toast.error("An error occurred during submission. Please try again.");
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F8FA] pt-28 pb-20 font-inter">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-baskerville text-[#0c3e2b] mb-6">
          Junicorns – Mentor Onboarding
        </h1>
        <div className="text-sm text-gray-700 space-y-4 max-w-2xl mx-auto leading-relaxed">
          <p>
            If you are passionate about <strong>mentoring budding entrepreneurs and aspiring seekers</strong> — guiding them in discovering their purpose and building with intention — this form is for you.
          </p>
          <p>
            Through this journey, mentors gradually evolve into <strong>ecosystem builders</strong>, contributing to the orchestration of the Purpose Wave at scale.
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {isSuccess ? (
          <div className="bg-white rounded-lg shadow-sm border-t-4 border-t-[#0c3e2b] p-12 text-center my-12 animate-fade-in">
            <div className="w-16 h-16 bg-[#0c3e2b] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-baskerville text-[#0c3e2b] mb-4">Application Submitted Successfully</h2>
            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
              Thank you for your interest! We've received your application and are thrilled to welcome you to the Junicorns mentor community. We will be in touch with you shortly.
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
                  name="fullName"
                  required
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email / Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contact"
                  required
                  placeholder="email@example.com or +91 XXXXXXXXXX"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                LinkedIn Profile / Company Website URL
              </label>
              <input
                type="text"
                name="linkedin"
                placeholder="https://linkedin.com/in/yourprofile"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors"
              />
            </div>
          </div>

          {/* Section 2: Professional Background */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-6">
              Professional Background
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry / Sector <span className="text-red-500">*</span>
                </label>
                <select
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors appearance-none"
                >
                  <option value="">Please Select</option>
                  <option value="IT">IT</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Healthtech / Biotech">Healthtech / Biotech</option>
                  <option value="Agritech">Agritech</option>
                  <option value="Edtech">Edtech</option>
                  <option value="Consumer / D2C">Consumer / D2C</option>
                  <option value="Manufacturing / Deeptech">Manufacturing / Deeptech</option>
                  <option value="Social Impact / Sustainability">Social Impact / Sustainability</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Primary Expertise <span className="text-red-500">*</span>
                </label>
                <select
                  name="expertise"
                  required
                  value={formData.expertise}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors appearance-none"
                >
                  <option value="">Please Select</option>
                  <option value="Tech / AI / SaaS">Tech / AI / SaaS</option>
                  <option value="Product / UX">Product / UX</option>
                  <option value="Marketing / Growth">Marketing / Growth</option>
                  <option value="Business / Strategy">Business / Strategy</option>
                  <option value="Fundraising / Finance">Fundraising / Finance</option>
                  <option value="Legal / Compliance">Legal / Compliance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <select
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors appearance-none"
                >
                  <option value="">Please Select</option>
                  <option value="3–5 years">3–5 years</option>
                  <option value="5–10 years">5–10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Contribution */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-6">
              Your Contribution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How Would You Like to Contribute? <span className="text-red-500">*</span>
                </label>
                <select
                  name="contribute"
                  required
                  value={formData.contribute}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors appearance-none"
                >
                  <option value="">Please Select</option>
                  <option value="Handholding (Active Partner)">Handholding (Active Partner)</option>
                  <option value="Mentoring">Mentoring</option>
                  <option value="Co-founder">Co-founder</option>
                  <option value="Looking for an operating partner in my idea">Looking for an operating partner in my idea</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Time You Can Contribute Per Week <span className="text-red-500">*</span>
                </label>
                <select
                  name="timeCommit"
                  required
                  value={formData.timeCommit}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors appearance-none"
                >
                  <option value="">Please Select</option>
                  <option value="1–3 hours">1–3 hours</option>
                  <option value="3–5 hours">3–5 hours</option>
                  <option value="5–8 hours">5–8 hours</option>
                  <option value="8+ hours">8+ hours</option>
                </select>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How Did You Hear About Junicorns? <span className="text-red-500">*</span>
                </label>
                <select
                  name="hearAbout"
                  required
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors appearance-none"
                >
                  <option value="">Please Select</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Word of Mouth">Word of Mouth</option>
                  <option value="Event">Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 4: Feedback */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-xl font-bold font-baskerville text-gray-900 mb-6">
              Additional Information
            </h2>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Suggestions / Feedback
              </label>
              <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">
                Have you volunteered with Junicorns or the ISF Foundation before? If yes, share any <strong className="text-gray-700">suggestions, feedback, or scope for improvement</strong> from your experience.
              </p>
              <textarea
                name="feedback"
                rows={4}
                placeholder="Your answer here..."
                value={formData.feedback}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0c3e2b] focus:ring-1 focus:ring-[#0c3e2b] transition-colors resize-y"
              />
            </div>
          </div>

          {/* Submit Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0c3e2b] hover:bg-[#125c40] text-white px-8 py-2.5 rounded font-semibold text-sm transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting && <Loader2 size={16} className="animate-spin" />}
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <button
                type="button"
                onClick={handleClear}
                disabled={isSubmitting}
                className="text-gray-500 hover:bg-gray-100 px-6 py-2.5 rounded font-semibold text-sm transition-colors disabled:opacity-70"
              >
                Clear form
              </button>
            </div>
          </div>

        </form>
          </>
        )}
      </div>
    </div>
  );
}
