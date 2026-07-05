import { Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function IsfHyderabad2024() {
  const roundtables = [
    {
      title: "FinTech Roundtable",
      members: [
        "Tarun Ghulati (Chairman, Board Member & Strategic Advisor)",
        "Anil Philip (GM, OSB)",
        "A Balasubramanian (MD & CEO, Aditya Birla Sun Life MF)",
        "Akhil Handa (Former Chief Digital Officer, Bank of Baroda)",
        "Prasanna Lohar (Chief Innovation Officer, Diamante Blockchain)",
        "Ramakanth Desai (Founder CEO, Tatva Innovation Labs)",
        "Sunali Rohra (Senior EVP, HDFC Bank)",
        "Vishnu Chundi (Founder & CEO, AssetVault)"
      ]
    },
    {
      title: "AgriTech Roundtable",
      members: [
        "Ashar Farhan (Founder & Partner, Daana Farmers Network)",
        "Dr Ashok Sangappa Alur (Vice Chancellor, Kodagu University)",
        "Dr Babu UV (Director R&D, Himalaya Wellness)",
        "Govinda Rajulu Chintala (Ex Chairman, NABARD)",
        "G Krishna Kumar (VP - Crop Operations, ITC Agri Division)",
        "Naresh Nekkanti (MD, Bhavani Bio Organics)",
        "Ram Kumar Varma (Founder & CEO, Native Araku Coffee)",
        "Vishala Reddy Vuyyala (Founder, Millet Bank)"
      ]
    },
    {
      title: "GCC Roundtable",
      members: [
        "Sri Atluri (MD, Global Head of Enterprise Quality, BNY) [Chair]",
        "Ravi Tangirala (Head of Mass Mutual India) [Co-Chair]",
        "Commander Divya Prakash Joshi (VP & Site Leader, Medtronic)",
        "Girish Raghavan (VP Engineering, GE Healthcare)",
        "Maneesh Sehagal (CEO, DBS Tech India)",
        "Manish Verma (VP Engineering, Warner Bros. Discovery)",
        "Nilesh Biniwale (VP Engineering, Pattern)",
        "Prakash Bodla (Global Software & Controls Leader, Carrier)",
        "Sundeep Bedi (GM, Shell Business Operations)",
        "Sidhu Sridhar (CVP-CyberSecurity, AT&T)"
      ]
    },
    {
      title: "HealthTech Roundtable",
      members: [
        "Dr K Hari Prasad (Group Chairman, Quality CARE India) [Chair]",
        "Dr Guna S Muppuri (Founder CEO, Indies Pharma)",
        "Dr Kurapati Krishnaiah (CEO, Basavatarakam Indo American Hospital)",
        "Ram Chilukuri (Former Founder & CEO, Semantic Bits)",
        "Dr Ramesh Kekunnayya (Director, The Child Sight Institute, LVPEI)",
        "Dr. Ravindranath Chowdhary (Owner, Global Hospitals)",
        "Dr Srinivas Chilukuri (Radiation Oncologist, Apollo Hospitals)",
        "Dr. Viswanadham Duppatla (VP, Biopharma Innovations, IKP)",
        "Dr S Prakash (Advisory Committee Member of NABH, Co-Founder Star Health)"
      ]
    },
    {
      title: "Rural Economic Roundtable",
      members: [
        "Dr. JA Chowdary (Founder, ISF) [Chair]",
        "Capt Bobby Ajmera (Advisor to CM of Tripura)",
        "Manisha Saboo (Head, Infosys Foundation)",
        "Priya Gazdar (COO, RBC Worldwide)",
        "Dr. Ravishankar Gundlapalli (Founder CEO, MentorCloud)",
        "Sandeep Paidi (Managing Partner, KPMG)",
        "Sidharth Shankar Tripathy (Director, SRM University AP)",
        "Srini Raju (Founder Chairman, iLabs Capital & Sri City)"
      ]
    },
    {
      title: "Global CXO Roundtable",
      members: [
        "Sanjeev Deshpande (EVP-APAC, MD-India NTT DATA)",
        "Adit Subedi (Chief Growth Officer, HackTech USA)",
        "Chaitanya Gorrepati (MD, DEShaw)",
        "Dennis Vermeulen (CEO of House of Companies)",
        "Edward Cole (CEO, Katlas Technology)",
        "Kiran Darisi (Co-Founder & CTO, Atomicwork)",
        "Manohar Reddy (Founder, Feuiji)",
        "Pradeep Rao (Director & Chief Architect, Kyndryl)",
        "Ravi Nimmagadda (CEO & CTO, Intelligent Design)"
      ]
    }
  ];

  return (
    <div className="font-inter pb-16 pt-24 bg-white">
      
      {/* 1. Top Banner */}
      <section className="bg-[#111111] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-isf-orange font-bold uppercase tracking-widest text-xs block">
            INTERNATIONAL STARTUP FESTIVAL 2024
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-baskerville tracking-tight">
            ISF 2024 Hyderabad
          </h1>
          <p className="text-base md:text-lg text-slate-300 font-light max-w-2xl mx-auto">
            Establish Connections. Get Spotlight. Deliver Pitches. Drive Innovation. Actively Engage.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Calendar size={16} className="text-isf-orange" />
              26 - 28 September, 2024
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin size={16} className="text-isf-orange" />
              Engineering Staff College of India (ESCI), Hyderabad
            </span>
          </div>
          <div className="pt-4">
            <Link
              to="/registration/delegate"
              className="bg-isf-orange hover:bg-isf-orange-hover text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded shadow-md transition-all inline-block"
            >
              Register as Delegate
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-slate-950/60 z-0"></div>
      </section>

      {/* 2. Slogan Intro */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-2xl font-bold font-baskerville text-slate-800">
          An Event to Celebrate Your Visions and Ventures
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Don't miss this opportunity to join the startup community! You'll get to network with the most brilliant and influential people in the industry, pitch your amazing ideas to top investors, and learn from the experts who have been there and done that. This is your chance to shine and grow!
        </p>
      </section>

      {/* 3. Roundtable Activities List */}
      <section className="py-16 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold font-baskerville">
              Round Tables & Other Activities
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Three Days of Innovation, Inspiration, and Structured Networking
            </p>
            <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roundtables.map((rt, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-4 hover:border-isf-orange transition-all"
              >
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-isf-orange" />
                  {rt.title}
                </h3>
                <ul className="space-y-2.5">
                  {rt.members.map((member, mIdx) => (
                    <li key={mIdx} className="text-xs text-slate-600 leading-relaxed pl-1 list-disc list-inside">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
