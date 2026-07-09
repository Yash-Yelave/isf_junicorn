import { distinguishedGuestsData, cxosData } from "./distinguishedGuestsData";

export function DistinguishedGuests() {
  return (
    <div 
      className="font-inter pb-16 pt-24 min-h-screen"
      style={{
        backgroundImage: "url('/assets/images/blurry-white-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      
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

      {/* 2. Distinguished Guests Section */}
      <section className="py-16 bg-white/40 backdrop-blur-xs border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center space-y-3 mb-10">
            <span className="text-isf-orange font-bold uppercase tracking-widest text-xs">
              INTERNATIONAL STARTUP FESTIVAL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-[#111111]">
              Distinguished Guests at ISF Conference
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {distinguishedGuestsData.map((person, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-[#e6e6e6] overflow-hidden hover:shadow-md hover:border-isf-orange transition-all duration-300 group flex flex-col items-center text-center p-4">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-orange-100 shadow-sm">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-sm text-[#111111] mb-1 leading-tight">{person.name}</h3>
                <p className="text-xs text-[#666666] font-medium leading-snug">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CXOs Section */}
      <section className="py-16 bg-white/60 backdrop-blur-sm border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center space-y-3 mb-10">
            <span className="text-isf-orange font-bold uppercase tracking-widest text-xs">
              INTERNATIONAL STARTUP FESTIVAL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-baskerville text-[#111111]">
              CXOs (Investors, Mentors & Leaders) at ISF Conference
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {cxosData.map((person, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-[#e6e6e6] overflow-hidden hover:shadow-md hover:border-isf-orange transition-all duration-300 group flex flex-col items-center text-center p-6">
                <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-orange-50 shadow-sm">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-base text-[#111111] mb-2 leading-tight">{person.name}</h3>
                <p className="text-xs text-[#666666] font-medium leading-snug">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
