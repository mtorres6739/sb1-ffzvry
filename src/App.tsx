import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import Statistics from './components/Statistics';
import HowItWorks from './components/HowItWorks';
import DoneForYouTimeline from './components/DoneForYouTimeline';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookieDeclaration from './components/CookieDeclaration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ValueProposition />
                <Statistics />
                <Services />
                <DoneForYouTimeline />
                <HowItWorks />
                <Testimonials />
                <FAQ />
                <Contact />
              </>
            } />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookieDeclaration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;