import React, { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, Ticket, GraduationCap, Mic2, Star, Truck, UploadCloud } from "lucide-react";
import { Link } from "react-router-dom";

// Form Helper Wrapper
function FormWrapper({
  title,
  subtitle,
  icon,
  price,
  onSubmit,
  children
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  price: string;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="font-segoe pb-20 pt-28 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/20 min-h-[90vh]">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/registration" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-700 transition-colors mb-6">
          <ArrowLeft size={16} /> Back to Registration Hub
        </Link>

        <div className="bg-white border border-gray-200/60 rounded-3xl shadow-xl overflow-hidden">
          <div className="relative bg-purple-950 text-white py-8 px-8 flex items-center justify-between gap-4">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl" />
            <div className="space-y-1 relative z-10">
              <h1 className="text-2xl font-bold font-montserrat">{title}</h1>
              <p className="text-purple-200 text-xs">{subtitle}</p>
            </div>
            <div className="p-3 bg-white/10 rounded-xl relative z-10">
              {icon}
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-8 space-y-6">
            {children}

            <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Registration Price</span>
                <span className="text-base font-bold text-slate-800">{price}</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3.5 bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm rounded-full shadow-lg shadow-purple-200 transition-colors"
              >
                Register Pass
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// 1. Expo Pass Form
export function ExpoPassForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "", company: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=== EXPO PASS SUBMISSION ===", formData);
    toast.success("Visitor pass issued! Download card details shown in console logs.");
  };

  return (
    <FormWrapper
      title="Free Expo Visitor Pass"
      subtitle="Obtain access to the main expo halls and startup showcases."
      icon={<Ticket className="w-8 h-8 text-white" />}
      price="FREE"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Company / College Name *</label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Mobile Number *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">City / Address *</label>
        <textarea
          required
          rows={2}
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
        />
      </div>
    </FormWrapper>
  );
}

// 3. Elevator Pitch Form
export function PitchForm() {
  const [formData, setFormData] = useState({ startupName: "", sector: "", stage: "Idea", email: "", phone: "", deckName: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=== PITCH CONTEST SUBMISSION ===", formData);
    toast.success("Pitch Application Submitted! Deck file name logged to console.");
  };

  return (
    <FormWrapper
      title="Elevator Pitch Session"
      subtitle="Secure a session slot to pitch your startup concepts directly to investors."
      icon={<Mic2 className="w-8 h-8 text-white" />}
      price="INR 5,000 (Incl. Taxes)"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Startup Name *</label>
          <input
            type="text"
            required
            value={formData.startupName}
            onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Tech Sector / Domain *</label>
          <input
            type="text"
            required
            value={formData.sector}
            onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
            placeholder="e.g. HealthTech, EdTech"
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Contact Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Funding Stage *</label>
          <select
            value={formData.stage}
            onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-600 font-medium"
          >
            <option value="Idea">Idea / MVP</option>
            <option value="Seed">Pre-Seed / Seed</option>
            <option value="Growth">Growth / Series-A</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Upload Pitch Deck *</label>
        <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 bg-white text-center hover:border-purple-500 transition-colors flex flex-col items-center justify-center gap-2 cursor-pointer">
          <input
            type="file"
            accept=".pdf,.ppt,.pptx"
            required
            onChange={(e) => setFormData({ ...formData, deckName: e.target.files?.[0]?.name || "" })}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <UploadCloud size={30} className="text-gray-400" />
          <span className="text-xs font-bold text-gray-600">
            {formData.deckName || "Upload PPT / PDF Pitch Deck..."}
          </span>
        </div>
      </div>
    </FormWrapper>
  );
}

// 4. Dignitary Form
export function DignitaryForm() {
  const [formData, setFormData] = useState({ name: "", email: "", org: "", designation: "", linkedin: "", bio: "", photoName: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=== VIP / DIGNITARY REQUEST ===", formData);
    toast.success("Request Submitted! The organizing committee will review details and confirm via email.");
  };

  return (
    <FormWrapper
      title="VIP & Dignitaries Registration"
      subtitle="Exclusive invite-only registration portal for guest speakers and public representatives."
      icon={<Star className="w-8 h-8 text-white" />}
      price="INVITE ONLY (Requires Verification)"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Official Designation *</label>
          <input
            type="text"
            required
            value={formData.designation}
            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Organization / Department *</label>
          <input
            type="text"
            required
            value={formData.org}
            onChange={(e) => setFormData({ ...formData, org: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">LinkedIn Profile Link</label>
          <input
            type="url"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            placeholder="https://linkedin.com/in/username"
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Official Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Upload Profile Photo</label>
          <div className="relative border border-gray-200 rounded-xl p-2.5 bg-white text-center hover:border-purple-500 transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFormData({ ...formData, photoName: e.target.files?.[0]?.name || "" })}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <UploadCloud size={20} className="text-gray-400" />
            <span className="text-xs font-bold text-gray-600 truncate max-w-[200px]">
              {formData.photoName || "Choose Portrait..."}
            </span>
          </div>
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Professional Bio / Profile Summary *</label>
        <textarea
          required
          rows={3}
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          placeholder="Brief biographical details for schedule display..."
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
        />
      </div>
    </FormWrapper>
  );
}

// 5. Bus Yatra Form
export function BusYatraForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "", contestType: "Visitor" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=== BUS YATRA SUBMISSION ===", formData);
    toast.success("Bus Yatra Pass Reserved! Details printed in console log.");
  };

  return (
    <FormWrapper
      title="Startup Bus Yatra"
      subtitle="Join the regional startup cohort visiting industrial tech hubs."
      icon={<Truck className="w-8 h-8 text-white" />}
      price="INR 3,000 (Incl. Taxes)"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Home City / District *</label>
          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Mobile Number *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Yatra Participation Role *</label>
        <select
          value={formData.contestType}
          onChange={(e) => setFormData({ ...formData, contestType: e.target.value })}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-600 font-medium"
        >
          <option value="Visitor">General Attendee / Observer</option>
          <option value="Startup Pitcher">Startup Participant (Pitching during Yatra)</option>
          <option value="Co-Host">Regional Incubator Partner / Host</option>
        </select>
      </div>
    </FormWrapper>
  );
}
