import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Approach from './pages/Approach';
import Contact from './pages/Contact';

// Service Pages
import Services from './pages/Services';
import OpeningDoors from './pages/OpeningDoors';
import RestaurantTuneUp from './pages/RestaurantTuneUp';
import CPGBackstage from './pages/CPGBackstage';

// Learning & Innovation Pages
import Learning from './pages/Learning';
import CPGKitchen from './pages/CPGKitchen';
import HospitalityLab from './pages/HospitalityLab';
import FoodExcellence from './pages/FoodExcellence';
import HospitalityCreators from './pages/HospitalityCreators';

// Utilities & Legal
import StudentLogin from './pages/StudentLogin';
import Technology from './pages/Technology';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Legacy Domain Routes
import SystemsDesign from './pages/SystemsDesign';
import OperationsStrategy from './pages/OperationsStrategy';
import WorkforceDevelopment from './pages/WorkforceDevelopment';
import ImplementationSupport from './pages/ImplementationSupport';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Homepage — CPG Opening Doors Focus */}
          <Route path="/" element={<Home />} />

          {/* Primary Service Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/opening-doors" element={<OpeningDoors />} />
          <Route path="/services/restaurant-tune-up" element={<RestaurantTuneUp />} />
          <Route path="/services/cpg-backstage" element={<CPGBackstage />} />

          {/* Learn & Explore Routes */}
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/cpg-kitchen" element={<CPGKitchen />} />
          <Route path="/learning/cpg-hospitality-lab" element={<HospitalityLab />} />
          <Route path="/learning/food-excellence" element={<FoodExcellence />} />

          {/* Share Your Expertise */}
          <Route path="/hospitality-creators" element={<HospitalityCreators />} />

          {/* Institutional Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-login" element={<StudentLogin />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />

          {/* Legacy Backward-Compatibility Routes */}
          <Route path="/domains/systems-design" element={<SystemsDesign />} />
          <Route path="/domains/operations-strategy" element={<OperationsStrategy />} />
          <Route path="/domains/workforce-development" element={<WorkforceDevelopment />} />
          <Route path="/domains/implementation-support" element={<ImplementationSupport />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
