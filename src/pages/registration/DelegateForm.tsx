import React, { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Attendee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export function DelegateForm() {
  const [currency, setCurrency] = useState<string>("INR");
  const [passCount, setPassCount] = useState<number>(1);
  const [promoCode, setPromoCode] = useState<string>("");
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  
  // First attendee states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [org, setOrg] = useState("");
  const [designation, setDesignation] = useState("");
  const [txnId, setTxnId] = useState("");

  // Additional attendees list
  const [additionalAttendees, setAdditionalAttendees] = useState<Attendee[]>([]);

  // Compute pricing
  const basePrice = currency === "INR" ? 10000 : 125;
  const rawSubtotal = basePrice * passCount;
  const discountAmount = discountApplied ? rawSubtotal * 0.1 : 0;
  const subtotal = rawSubtotal - discountAmount;
  const gstAmount = currency === "INR" ? subtotal * 0.18 : 0;
  const totalPayable = subtotal + gstAmount;

  const handlePassCountChange = (count: number) => {
    setPassCount(count);
    const needed = count - 1; // first one is already main inputs
    if (needed > additionalAttendees.length) {
      const diff = needed - additionalAttendees.length;
      const newAttendees = [...additionalAttendees];
      for (let i = 0; i < diff; i++) {
        newAttendees.push({ firstName: "", lastName: "", email: "", phone: "" });
      }
      setAdditionalAttendees(newAttendees);
    } else if (needed < additionalAttendees.length) {
      setAdditionalAttendees(additionalAttendees.slice(0, needed));
    }
  };

  const handleAdditionalChange = (idx: number, field: keyof Attendee, val: string) => {
    const updated = [...additionalAttendees];
    updated[idx][field] = val;
    setAdditionalAttendees(updated);
  };

  const handlePromoCheck = (val: string) => {
    setPromoCode(val);
    if (val.trim().toUpperCase() === "ISF2025" || val.trim().toUpperCase() === "WELCOME10") {
      setDiscountApplied(true);
    } else {
      setDiscountApplied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=== STATIC DELEGATE REGISTRATION ===");
    console.log({
      mainAttendee: { firstName, lastName, email, phone, org, designation },
      additionalAttendees,
      currency,
      passCount,
      promoCode,
      txnId,
      pricing: { rawSubtotal, discountAmount, gstAmount, totalPayable }
    });

    toast.success("Registration registered successfully! Simulated details logged to console.", {
      duration: 5000
    });
  };

  return (
    <div className="bg-[#cccccc] min-h-screen pb-16 pt-24 font-inter">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="mb-4">
          <Link
            to="/registration"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-isf-orange bg-white px-3 py-1.5 rounded shadow-xxs transition-colors"
          >
            <ArrowLeft size={14} /> Back to Registration Hub
          </Link>
        </div>

        {/* Card containing the form */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          
          {/* Top Banner Card */}
          <div className="relative h-44 md:h-56 bg-slate-800 flex items-center justify-center">
            <img
              src="/assets/images/Conference_Delegate_Registration_banner_image_1.png"
              alt="Delegate Banner"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              onError={(e) => {
                e.currentTarget.src = "/assets/images/submenu-our-eco-system.jpg";
              }}
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <h1 className="relative text-2xl md:text-4xl font-extrabold text-white text-center px-4 font-baskerville">
              Get Your Delegate Pass Today!
            </h1>
          </div>

          <div className="p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Promo code & computation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 p-4 rounded border border-gray-150">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Enter Coupon Code if any?
                  </label>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => handlePromoCheck(e.target.value)}
                    className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                    placeholder="Enter Coupon Code..."
                  />
                  {discountApplied && (
                    <span className="text-[10px] text-green-600 font-bold mt-1 block">
                      10% discount applied!
                    </span>
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    GST (18% INR Only)
                  </span>
                  <span className="text-sm font-bold text-red-600">
                    {currency === "INR" ? `₹ ${gstAmount.toLocaleString()}` : "$ 0.00"}
                  </span>
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Total Payable
                  </span>
                  <span className="text-base font-bold text-green-600">
                    {currency === "INR" ? `₹ ${totalPayable.toLocaleString()}` : `$ ${totalPayable.toLocaleString()}`}
                  </span>
                </div>
              </div>

              {/* Row 2: Currency & Pass selector */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Currency Selection *
                  </label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                    required
                  >
                    <option value="INR">INR (₹ 10,000 per pass)</option>
                    <option value="USD">USD ($ 125 per pass)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Number of Passes *
                  </label>
                  <select
                    value={passCount}
                    onChange={(e) => handlePassCountChange(parseInt(e.target.value))}
                    className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Primary Passenger details */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-gray-150 pb-2">
                  Primary Delegate Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-slate-500 text-xs">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-xs border border-gray-300 rounded-r px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                        placeholder="Mobile number"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Organization *
                    </label>
                    <input
                      type="text"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Designation
                    </label>
                    <input
                      type="text"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic passenger lists */}
              {additionalAttendees.map((att, idx) => (
                <div key={idx} className="space-y-4 pt-4 border-t border-gray-150">
                  <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Delegate #{idx + 2} Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={att.firstName}
                        onChange={(e) => handleAdditionalChange(idx, "firstName", e.target.value)}
                        className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={att.lastName}
                        onChange={(e) => handleAdditionalChange(idx, "lastName", e.target.value)}
                        className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={att.email}
                        onChange={(e) => handleAdditionalChange(idx, "email", e.target.value)}
                        className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={att.phone}
                        onChange={(e) => handleAdditionalChange(idx, "phone", e.target.value)}
                        className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* QR Code and Transaction ID verification section */}
              <div className="pt-6 border-t border-gray-200 space-y-4 bg-slate-50 p-6 rounded border border-gray-150">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Payment Verification Instructions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="flex justify-center bg-white p-4 rounded border border-gray-200 shadow-xxs">
                    {/* Mock QR Code representation */}
                    <div className="w-32 h-32 bg-slate-100 flex flex-col items-center justify-center border border-dashed border-gray-400">
                      <span className="text-[10px] font-bold text-slate-400">ISF Payment QR</span>
                      <span className="text-[8px] text-slate-400 mt-1">Scan to Pay</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-2 text-xs text-slate-600 leading-relaxed">
                    <p className="font-bold text-slate-800">
                      Please scan the QR code given here and pay the total payable amount.
                    </p>
                    <p>
                      Please take a note of the transaction ID and type in the transaction ID in the proper field below to successfully submit the form. Without a valid transaction ID reference, the registration application will be null and void.
                    </p>
                    <div className="pt-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Enter Transaction ID / Reference Number *
                      </label>
                      <input
                        type="text"
                        value={txnId}
                        onChange={(e) => setTxnId(e.target.value)}
                        className="w-full md:w-80 text-xs border border-gray-300 rounded px-3 py-2 bg-white focus:border-isf-orange focus:outline-none"
                        placeholder="Txn ID (e.g. TXN123456789)..."
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-isf-orange hover:bg-isf-orange-hover text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded shadow-md transition-all cursor-pointer"
                >
                  Register and Pay
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
