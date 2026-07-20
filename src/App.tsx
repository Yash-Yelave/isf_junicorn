import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { LandingPage } from "./pages/LandingPage";
import { RegistrationHub } from "./pages/registration/RegistrationHub";
import { DelegateForm } from "./pages/registration/DelegateForm";
import { ExhibitorForm } from "./pages/registration/ExhibitorForm";
import {
  ExpoPassForm,
  PitchForm,
  DignitaryForm,
  BusYatraForm
} from "./pages/registration/OtherForms";
import { MentorForm } from "./pages/registration/MentorForm";
import { MenteeForm } from "./pages/registration/MenteeForm";
import { PortalHub } from "./pages/mentorship/PortalHub";

// Info & Conference Pages
import { AboutUs } from "./pages/info/AboutUs";
import { OneHourAWeek } from "./pages/info/OneHourAWeek";
import { JunicornsHub } from "./pages/info/JunicornsHub";
import Cohort3 from "./pages/info/Cohort3";
import { DistinguishedGuests } from "./pages/info/DistinguishedGuests";
import { IsfHyderabad2024 } from "./pages/conferences/IsfHyderabad2024";
import { IsfPune2024 } from "./pages/conferences/IsfPune2024";
import { IsfJamaica2024 } from "./pages/conferences/IsfJamaica2024";
import { IsfNewJersey2024 } from "./pages/conferences/IsfNewJersey2024";
import { IsfAiSummit } from "./pages/conferences/IsfAiSummit";
import { IsfGlobalJunicornAiSummit } from "./pages/conferences/IsfGlobalJunicornAiSummit";
import { DubaiEvent } from "./pages/conferences/DubaiEvent";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white text-slate-800 antialiased font-inter">
        {/* Global Navbar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            
            {/* Info Pages */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/1hour-per-week" element={<OneHourAWeek />} />
            <Route path="/junicornshub" element={<JunicornsHub />} />
            <Route path="/cohort-3" element={<Cohort3 />} />
            <Route path="/distinguished-guests" element={<DistinguishedGuests />} />
            
            {/* Conferences Pages */}
            <Route path="/isf-ai-summit" element={<IsfAiSummit />} />
            <Route path="/isf-global-junicorn-ai-summit-2025" element={<IsfGlobalJunicornAiSummit />} />
            <Route path="/event" element={<DubaiEvent />} />
            <Route path="/isf-hyderabad-2024-main" element={<IsfHyderabad2024 />} />
            <Route path="/isf-2024-pune" element={<IsfPune2024 />} />
            <Route path="/isf-jamaica-isf-global-cxo-summit" element={<IsfJamaica2024 />} />
            <Route path="/conference-delegate-registration-isf-usa-2024" element={<IsfNewJersey2024 />} />

            {/* Registration routes */}
            <Route path="/registration" element={<RegistrationHub />} />
            <Route path="/registration/delegate" element={<DelegateForm />} />
            <Route path="/registration/exhibitor" element={<ExhibitorForm />} />
            <Route path="/registration/expo" element={<ExpoPassForm />} />
            <Route path="/registration/student" element={<MenteeForm />} />
            <Route path="/registration/pitch" element={<PitchForm />} />
            <Route path="/registration/dignitary" element={<DignitaryForm />} />
            <Route path="/registration/bus-yatra" element={<BusYatraForm />} />
            <Route path="/mentor-form" element={<MentorForm />} />

            {/* Mentorship portal */}
            <Route path="/investors" element={<PortalHub />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Sonner Toast Handler */}
        <Toaster position="top-right" richColors />
      </div>
    </BrowserRouter>
  );
}

export default App;
