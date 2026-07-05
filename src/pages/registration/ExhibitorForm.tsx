import React, { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, Briefcase, Plus, Sparkles, Building2, UploadCloud } from "lucide-react";
import { Link } from "react-router-dom";

export function ExhibitorForm() {
  const [bookingType, setBookingType] = useState<"stall" | "slot">("stall");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [stallSize, setStallSize] = useState<string>("2x2m");
  const [stallCategory, setStallCategory] = useState<string>("Standard");
  const [customStall, setCustomStall] = useState<boolean>(false);
  const [sector, setSector] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [brandName, setBrandName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  // Contact Person
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [logoName, setLogoName] = useState<string>("");

  // Pricing Logic (Mocked from legacy calculations)
  const getBasePrice = () => {
    if (bookingType === "slot") {
      return currency === "INR" ? 30000 : 350;
    }
    // Stall Pricing based on dimensions
    let price = 50000;
    if (stallSize === "3x3m") price = 80000;
    if (stallSize === "4x4m") price = 120000;

    if (stallCategory === "Premium") price += 15000;
    if (customStall) price += 10000;

    return currency === "INR" ? price : Math.round(price / 80);
  };

  const basePrice = getBasePrice();
  const gstRate = currency === "INR" ? 0.18 : 0;
  const gstAmount = basePrice * gstRate;
  const totalPayable = basePrice + gstAmount;

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoName(e.target.files[0].name);
      toast.success(`File "${e.target.files[0].name}" uploaded (simulated).`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("=== STATIC EXHIBITOR SUBMISSION REGISTERED ===");
    console.log({
      bookingType,
      currency,
      stallDetails: bookingType === "stall" ? { stallSize, stallCategory, customStall } : null,
      company: { companyName, brandName, sector, address, logoName },
      contact: { firstName, lastName, email, phone },
      pricing: { basePrice, gstAmount, totalPayable }
    });

    toast.success("Exhibitor Registration Successful! Details simulated in the console logs.", {
      duration: 6000,
    });
  };

  return (
    <div className="font-segoe pb-20 pt-28 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/20 min-h-[90vh]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <Link to="/registration" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-700 transition-colors mb-6">
          <ArrowLeft size={16} /> Back to Registration Hub
        </Link>

        <div className="bg-white border border-gray-200/60 rounded-3xl shadow-xl overflow-hidden">
          {/* Header Banner */}
          <div className="relative bg-purple-950 text-white py-10 px-8 text-center sm:text-left">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl" />
            <h1 className="text-3xl font-bold font-montserrat">Exhibitor & Stall Booking</h1>
            <p className="text-purple-200 text-sm mt-2 max-w-xl">
              Register your startup/brand to showcase inside the exhibition domes at the festival.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Booking Type Toggle */}
            <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-2xl flex gap-3">
              <button
                type="button"
                onClick={() => setBookingType("stall")}
                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
                  bookingType === "stall" ? "bg-purple-700 text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Book Exhibition Stall
              </button>
              <button
                type="button"
                onClick={() => setBookingType("slot")}
                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
                  bookingType === "slot" ? "bg-purple-700 text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Book Presentation Slot (10 Mins)
              </button>
            </div>

            {/* Core Configs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Currency Mode
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as "INR" | "USD")}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-600 font-medium"
                >
                  <option value="INR">INR (₹)</option>
                  <option value="USD">USD ($)</option>
                </select>
              </div>

              {bookingType === "stall" ? (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Stall Dimensions
                    </label>
                    <select
                      value={stallSize}
                      onChange={(e) => setStallSize(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-600 font-medium"
                    >
                      <option value="2x2m">2x2 Meters (Standard Startup Pod)</option>
                      <option value="3x3m">3x3 Meters (Executive Shell)</option>
                      <option value="4x4m">4x4 Meters (Premium Pavillion)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Stall Category
                    </label>
                    <select
                      value={stallCategory}
                      onChange={(e) => setStallCategory(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-600 font-medium"
                    >
                      <option value="Standard">Standard Area Row</option>
                      <option value="Premium">Premium Corner / Front Facing (+15k)</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-3 pt-6 pl-2">
                    <input
                      type="checkbox"
                      id="customStall"
                      checked={customStall}
                      onChange={(e) => setCustomStall(e.target.checked)}
                      className="w-5 h-5 accent-purple-700 cursor-pointer rounded"
                    />
                    <label htmlFor="customStall" className="text-sm font-semibold text-gray-600 cursor-pointer select-none">
                      Request custom fabrication layout (+10k)
                    </label>
                  </div>
                </>
              ) : (
                <div className="md:col-span-1 flex items-center pt-2">
                  <div className="p-4 bg-purple-50 border border-purple-100 rounded-2xl text-xs text-purple-700 flex gap-2">
                    <Sparkles className="flex-shrink-0 text-purple-700 w-5 h-5" />
                    <span>Presentation slot grants a 10-minute presentation slot on the tech stage to demonstrate your product live to attending venture capitalists.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Billing calculations */}
            <div className="border border-gray-100 rounded-2xl p-6 bg-slate-50/20 shadow-inner flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Estimated Quotation</span>
                <span className="text-xs text-gray-500">
                  Base Price: {currency === "INR" ? `₹${basePrice.toLocaleString()}` : `$${basePrice}`} 
                  {currency === "INR" && ` + 18% GST (₹${gstAmount.toLocaleString()})`}
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-purple-700 font-montserrat">
                  {currency === "INR" ? `₹${totalPayable.toLocaleString()}` : `$${totalPayable}`}
                </span>
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-3 font-montserrat flex items-center gap-2">
                <Building2 size={20} className="text-purple-700" /> Company Profile
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Registered Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Acme Technologies Pvt Ltd"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Brand / Showcase Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="Acme Tech"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Industry Sector <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    placeholder="e.g. SaaS, Fintech, AI"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Upload Company Logo
                  </label>
                  <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-2.5 bg-white text-center hover:border-purple-500 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <UploadCloud size={20} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-600 truncate max-w-[200px]">
                      {logoName || "Choose Logo file..."}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Office / Billing Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter full physical address..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                />
              </div>
            </div>

            {/* Contact Person Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-3 font-montserrat">
                Primary Contact Person
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Alice"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Smith"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Direct Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alice@acme.com"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Direct Mobile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 99999 88888"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white font-bold text-base rounded-full shadow-lg shadow-purple-200 transition-all focus:outline-none"
              >
                Submit Exhibitor Request ({currency === "INR" ? `₹${totalPayable.toLocaleString()}` : `$${totalPayable}`})
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
