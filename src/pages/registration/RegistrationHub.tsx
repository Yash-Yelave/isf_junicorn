import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Briefcase, Ticket, GraduationCap, Mic2, Star, Truck } from "lucide-react";

const REG_TRACKS = [
  {
    icon: <User className="w-8 h-8 text-purple-700" />,
    title: "Conference Delegate",
    description: "Access main stage sessions, masterclasses, networking arenas, and coffee lounge.",
    price: "INR 10,000 / USD 125",
    link: "/registration/delegate",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-700" />,
    title: "Exhibitor / Stall Booking",
    description: "Book custom 2x2m or 3x3m exhibition stalls inside the main showcase arena.",
    price: "INR 50,000 / USD 600",
    link: "/registration/exhibitor",
  },
  {
    icon: <Ticket className="w-8 h-8 text-purple-700" />,
    title: "Free Expo Visitor Pass",
    description: "Free access to general exhibition halls, startup startup pitches, and public display lanes.",
    price: "FREE",
    link: "/registration/expo",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-purple-700" />,
    title: "Student Delegate Pass",
    description: "Discounted delegate passes for active college students. Upload ID proof to activate.",
    price: "INR 1,000 / USD 15",
    link: "/registration/student",
  },
  {
    icon: <Mic2 className="w-8 h-8 text-purple-700" />,
    title: "Elevator Pitch Session",
    description: "Apply to pitch your startup directly to global accelerators and institutional investors.",
    price: "INR 5,000 / USD 60",
    link: "/registration/pitch",
  },
  {
    icon: <Star className="w-8 h-8 text-purple-700" />,
    title: "VIP / Dignitaries",
    description: "Exclusive invite-only channel for government delegates, key corporate sponsors, and speakers.",
    price: "INVITE ONLY",
    link: "/registration/dignitary",
  },
  {
    icon: <Truck className="w-8 h-8 text-purple-700" />,
    title: "Startup Bus Yatra",
    description: "Book tickets to participate in the roadshow yatra visiting regional innovation clusters.",
    price: "INR 3,000 / USD 35",
    link: "/registration/bus-yatra",
  },
];

export function RegistrationHub() {
  return (
    <div className="font-segoe pb-20 pt-28 bg-gradient-to-b from-blue-50/50 via-white to-white min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Deck */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight font-montserrat">
            Registration Hub
          </h1>
          <div className="h-1.5 w-16 bg-purple-700 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 leading-relaxed text-sm sm:text-base">
            Select the appropriate registration track below to secure your pass for the India Startup Festival 2025.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {REG_TRACKS.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 bg-purple-50 inline-block rounded-xl">
                  {track.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-montserrat">
                  {track.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Registration Fee
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    {track.price}
                  </span>
                </div>
                <Link
                  to={track.link}
                  className="px-5 py-2.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  Register
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
