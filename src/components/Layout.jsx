import Navbar from './Navbar';
import Footer from './Footer';
import AIChat from './AIChat';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-espresso selection:bg-rose/15 selection:text-burgundy">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Layout;
