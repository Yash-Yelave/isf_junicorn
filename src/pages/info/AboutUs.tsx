import { Heart, Sparkles, Users, Award, Shield, Target } from "lucide-react";

export function AboutUs() {
  const stats = [
    { value: "100+", label: "Speakers" },
    { value: "100+", label: "CEO's & CXOs" },
    { value: "200+", label: "Investors & Mentors" },
    { value: "10000+", label: "Startup Registrations" }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8 text-isf-orange" />,
      title: "Enduring Connections",
      desc: "Nurturing lasting relationships between industry experts, leaders, and upcoming innovators."
    },
    {
      icon: <Users className="w-8 h-8 text-isf-orange" />,
      title: "Extensive Network",
      desc: "Reaching across borders to assemble robust ecosystems of startups, corporates, and venture partners."
    },
    {
      icon: <Shield className="w-8 h-8 text-isf-orange" />,
      title: "Mentorship & Guidance",
      desc: "Enlisting trusted advisory frameworks for custom startup validation, audits, and pitching preparations."
    },
    {
      icon: <Target className="w-8 h-8 text-isf-orange" />,
      title: "Rural Enhancement",
      desc: "Empowering rural ecosystems and grassroot level innovators with tools, resources, and connections."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-isf-orange" />,
      title: "Youth Empowerment",
      desc: "Igniting the entrepreneurial spark in students and next-generation builders."
    }
  ];

  const awards = [
    { name: "Dr. D Nageshwar Reddy", role: "Chairman & Chief of Gastroenterology, AIG Hospitals" },
    { name: "Dr. Galla Ramachandra Naidu", role: "Founder Chairman, Amara Raja Group" },
    { name: "Dr. Kazuhiro Chiba", role: "President, Tokyo University of Agriculture and Technology" },
    { name: "Sri Atluri", role: "MD - Global Head of Enterprise Quality Engineering, BNY Mellon" },
    { name: "Dr. P Raja Mohan Rao", role: "Chairman, United Telecoms Group" },
    { name: "Vineet Rai", role: "Founder & Chairman, Aavishkaar Group" },
    { name: "Sivakumar Surampudi", role: "Group Head, Agri & IT Businesses of ITC Limited" }
  ];

  return (
    <div className="font-inter pb-16 pt-24 bg-white">
      
      {/* 1. Header Banner */}
      <section className="bg-slate-50 border-b border-gray-100 py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-isf-orange font-bold uppercase tracking-widest text-xs block">
            About Us
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-baskerville">
            Unveiling the International Startup Foundation
          </h1>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
            ISF India — connect. collaborate. celebrate.
          </p>
        </div>
      </section>

      {/* 2. Main Narrative Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-baskerville text-slate-800">
            What is International Startup Foundation
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Dedicated to enhancing India's entrepreneurial landscape, the International Startup Foundation (ISF) fosters vital connections between entrepreneurs, resources, investors, and mentors. Our commitment extends beyond conventional boundaries, embracing nature, nurturing enduring relationships, and championing youth and rural empowerment.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Aligned with GOI's pivotal initiatives like Startup India, Digital India, and Make-in-India, ISF aims to collaborate with over 50,000 startups, fostering their growth and bolstering the vision of an Atmanirbhar Bharat.
          </p>
        </div>
        <div className="bg-slate-50 p-8 rounded-xl border border-gray-100 space-y-6">
          <h3 className="text-lg font-bold text-slate-900 font-baskerville">
            ISF’s Mission
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed italic">
            "Building a Brighter Future to Empower, Connect and Thrive: Evolving Triumph from Seed to Sky, establishing pathways for rural development and global technical capabilities."
          </p>
          <div className="w-12 h-1 bg-isf-orange rounded"></div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-baskerville">
              Our ISF Ecosystem Numbers
            </h2>
            <p className="text-xs text-slate-400">
              Evolving Triumph from Seed to Sky
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-3xl md:text-5xl font-extrabold text-isf-orange">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Signature Features */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold font-baskerville">
            Signature Features of ISF India’s Support Ecosystem
          </h2>
          <div className="w-12 h-1 bg-isf-orange mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-gray-100 p-6 rounded-lg space-y-4 hover:shadow-sm transition-all"
            >
              {feat.icon}
              <h3 className="text-base font-bold font-baskerville text-slate-800">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Awardees */}
      <section className="py-16 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold font-baskerville">
              ISF Lifetime Achievement Awardees
            </h2>
            <p className="text-xs text-slate-500">
              Honoring Excellence: Meet the Stalwarts of ISF
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-xxs hover:border-isf-orange transition-colors"
              >
                <h4 className="text-sm font-bold text-slate-900 font-baskerville mb-1">
                  {award.name}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {award.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
