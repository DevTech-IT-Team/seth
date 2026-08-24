import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Approach from './pages/Approach';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SystemsDesign from './pages/SystemsDesign';
import OperationsStrategy from './pages/OperationsStrategy';
import WorkforceDevelopment from './pages/WorkforceDevelopment';
import ImplementationSupport from './pages/ImplementationSupport';
import Learning from './pages/Learning';
import FoodExcellence from './pages/FoodExcellence';
import StudentLogin from './pages/StudentLogin';
import Technology from './pages/Technology';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/food-excellence" element={<FoodExcellence />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/domains/systems-design" element={<SystemsDesign />} />
          <Route path="/domains/operations-strategy" element={<OperationsStrategy />} />
          <Route path="/domains/workforce-development" element={<WorkforceDevelopment />} />
          <Route path="/domains/implementation-support" element={<ImplementationSupport />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
