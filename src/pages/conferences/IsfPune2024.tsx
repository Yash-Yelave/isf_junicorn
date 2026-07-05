import { Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function IsfPune2024() {
  const agenda = {
    track1: [
      { time: "09:00 AM - 10:00 AM", title: "Registrations & Welcome Checks" },
      { time: "10:00 AM - 11:30 AM", title: "Inaugural Curtain Raiser & Press Addressing", speaker: "Shirish Kulkarni, Rahul Toshniwal" },
      { time: "11:30 AM - 12:00 PM", title: "Hi Tea & Snacks Networking" }
    ],
    track2: [
      { time: "12:00 PM - 02:00 PM", title: "Startup Pitch Sessions (Track 2 Panels)" },
      { time: "02:00 PM - 03:00 PM", title: "Lamp Lighting & Founder Keynote", speaker: "Dr. JA Chowdary (Founder, ISF)" },
      { time: "03:00 PM - 04:30 PM", title: "Panel Discussion: Startup as catalyst for development of India", speaker: "Dr. JA Chowdary, Shailendra Goswami, Arun Menon, Mohit Dubey" },
      { time: "04:30 PM - 05:00 PM", title: "Felicitation - Awards & Recognition by Pune Chapter" },
      { time: "07:00 PM Onwards", title: "Networking Dinner by Invite" }
    ]
  };

  const dignitaries = [
    { name: "Prof. Dr. Mangesh Karad", role: "Executive President & Vice Chancellor" },
    { name: "Prof. Dr. Sunita Karad", role: "Executive Director" },
    { name: "Prof. Swati More", role: "Director - Central Corporate Relations" },
    { name: "Dr. Mohit Dubey", role: "Pro Vice-Chancellor - RIE Cluster" },
    { name: "Shirish Kulkarni", role: "Founder & MD, Pune" },
    { name: "Rahul Toshniwal", role: "Director, Pune" },
    { name: "Gireendra Kasmalkar", role: "Managing Partner" },
    { name: "Prabhav Daga", role: "Managing Partner" },
    { name: "Parmi Doshi", role: "Vice President" },
    { name: "Shaillendra Goswami", role: "Chairman & Managing Director" },
    { name: "Arun Menon", role: "Chief Delivery Officer" },
    { name: "Rajendra Raut", role: "VP Talent Acquisition, Jade Global" },
    { name: "Manav Prasad", role: "CEO & Co-Founder" },
    { name: "Shaker Dixit", role: "Founder, Amealio" },
    { name: "Venu Madhav Gottupulla", role: "Group Deputy CEO" },
    { name: "Sreekanth Perepu", role: "Founding Partner, 108 Capital" },
    { name: "Pooja Bansal", role: "Global CHRO" },
    { name: "Ranjeet Shetye", role: "Partner" },
    { name: "Kiran Chandra Kalluri", role: "Venture Capitalist / Investor" },
    { name: "Pankaj Roy Gupta", role: "Founder & CEO" }
  ];

  return (
    <div className="font-inter pb-16 pt-24 bg-white">
      
      {/* 1. Header Banner */}
      <section className="bg-[#111111] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-isf-orange font-bold uppercase tracking-widest text-xs block">
            ISF 2024 CURTAIN RAISER
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-baskerville tracking-tight">
            ISF 2024 Pune
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto font-light">
            Pune Investor Connect & Curtain Raiser
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Calendar size={16} className="text-isf-orange" />
              April 15th, 2024
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin size={16} className="text-isf-orange" />
              MIT - ADT University, Pune
            </span>
          </div>
          <div className="pt-4">
            <Link
              to="/registration/delegate"
              className="bg-isf-orange hover:bg-isf-orange-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded shadow transition-all inline-block"
            >
              Register Now
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-slate-950/70 z-0"></div>
      </section>

      {/* 2. Intro Description */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-2xl font-bold font-baskerville text-slate-800">
          Investor Connect & Ecosystem Launch
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Join us for exciting networking sessions with CEOs, Top Investors, Mentors, and Brilliant Startups in the Pune ecosystem. This is your premier opportunity to showcase products, engage in structured roundtables, and accelerate business growth.
        </p>
      </section>

      {/* 3. Agenda */}
      <section className="py-16 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold font-baskerville">
              ISF 2024 Pune Agenda
            </h2>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Track 1 */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-gray-200 pb-3 font-baskerville">
                Track 1 Session Timeline
              </h3>
              <div className="space-y-4">
                {agenda.track1.map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 p-4 rounded shadow-xxs">
                    <span className="flex items-center gap-1.5 text-xxs font-bold text-isf-orange uppercase tracking-wider mb-2">
                      <Clock size={12} />
                      {item.time}
                    </span>
                    <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                    {item.speaker && (
                      <p className="text-xxs text-slate-500 mt-1 font-medium">Speakers: {item.speaker}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2 */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-gray-200 pb-3 font-baskerville">
                Track 2 Session Timeline
              </h3>
              <div className="space-y-4">
                {agenda.track2.map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 p-4 rounded shadow-xxs">
                    <span className="flex items-center gap-1.5 text-xxs font-bold text-isf-orange uppercase tracking-wider mb-2">
                      <Clock size={12} />
                      {item.time}
                    </span>
                    <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                    {item.speaker && (
                      <p className="text-xxs text-slate-500 mt-1 font-medium">Speakers: {item.speaker}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Dignitaries & Speakers */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold font-baskerville">
            Dignitaries & Speakers
          </h2>
          <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {dignitaries.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:border-isf-orange transition-colors flex flex-col justify-between"
            >
              <h4 className="text-xs font-bold text-slate-800 font-baskerville">
                {member.name}
              </h4>
              <p className="text-xxs text-slate-500 mt-2 font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
