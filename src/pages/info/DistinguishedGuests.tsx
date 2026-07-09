import { UserCheck, Star, Users } from "lucide-react";

export function DistinguishedGuests() {
  const chiefGuests = [
    {
      name: "Sadguru Sri Madhusudan Sai",
      role: "Founder, Sri Satya Sai University for Human Excellence, Karnataka"
    },
    {
      name: "Meenakshi Lekhi",
      role: "Minister of State for External Affairs and Culture, Government of India"
    },
    {
      name: "Sunil Gavaskar",
      role: "India's Cricket Legend | Chairman, Heart to Heart Foundation"
    }
  ];

  const dignitaries = [
    { name: "Minister of IT", role: "Government of Telangana" },
    { name: "Minister of Irrigation, Food & Civil Supplies", role: "Government of Telangana" },
    { name: "Sri Bharat Galla", role: "President, GITAM; Visakhapatnam TDP Lok Sabha MP" },
    { name: "Dr. K. N. Satyanarayana", role: "Director & Professor of Civil Engineering, I.I.T. Tirupati" },
    { name: "Dr. Ajit Rangnekar", role: "Director-General, Research and Innovation Circle of Hyderabad (RICH)" },
    { name: "Murali Bukkapatnam", role: "Chairman, Global Board of Trustees, TiE" },
    { name: "Sanjeev Deshpande", role: "EVP-APAC, MD-India NTT DATA Business Solutions" },
    { name: "BVR Mohan Reddy", role: "Founder Chairman & Board Member, CYIENT" },
    { name: "Dr. G.P.S. Prasad", role: "Padma Shri Awardee, Vice Chancellor - NFSU" },
    { name: "Sangita Reddy", role: "Joint Managing Director, Apollo Hospitals Group; Chair - G20 Empower India" },
    { name: "Srini Raju", role: "Founder, Chairman of iLabs Capital, Sri City" },
    { name: "Dr. Gangadhar Reddy", role: "Founder CEO, MedPlus Health Services" },
    { name: "Dr. M. Nageswara Rao", role: "MP, Bapatla, Andhra Pradesh" },
    { name: "Dr. K. V. P. Ramachandra Rao", role: "Member of Parliament for Zahirabad" },
    { name: "Dr. K. Subramanian", role: "Executive Director, IMF (earlier Chief Economic Advisor, GoI)" }
  ];

  return (
    <div className="font-inter pb-16 pt-24 bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20 min-h-screen">
      
      {/* 1. Header Banner */}
      <section className="bg-transparent border-b border-gray-100 py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-isf-orange font-bold uppercase tracking-widest text-xs block">
            Dignitaries Profile
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-baskerville">
            Distinguished Guests at ISF
          </h1>
          <p className="text-xs text-slate-500 font-medium max-w-lg mx-auto">
            Connecting industry leaders, cabinet ministers, researchers, and global advisors to accelerate startups.
          </p>
        </div>
      </section>

      {/* 2. Chief Guests */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold font-baskerville flex items-center justify-center gap-2">
            <Star className="text-isf-orange fill-isf-orange w-6 h-6" />
            Honourable Chief Guests
          </h2>
          <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chiefGuests.map((guest, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-gray-200 rounded-lg p-8 space-y-4 hover:border-isf-orange transition-colors text-center"
            >
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto text-isf-orange">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold font-baskerville text-slate-900">
                {guest.name}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {guest.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Dignitaries and CXOs */}
      <section className="py-16 bg-white/40 backdrop-blur-xs border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold font-baskerville flex items-center justify-center gap-2">
              <Users className="text-isf-orange w-6 h-6" />
              Dignitaries & Key Presenters
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dignitaries.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-xxs hover:shadow-sm hover:border-isf-orange transition-all"
              >
                <h4 className="text-sm font-bold text-slate-900 font-baskerville mb-2">
                  {member.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
