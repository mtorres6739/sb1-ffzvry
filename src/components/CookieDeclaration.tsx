import React from 'react';

const CookieDeclaration: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cookie Declaration</h1>
      <div className="space-y-4">
        <p>This website uses cookies to enhance your browsing experience and provide personalized service. This Cookie Declaration explains how we use cookies and similar technologies.</p>
        
        <h2 className="text-2xl font-semibold mt-6">1. What are Cookies?</h2>
        <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
        
        <h2 className="text-2xl font-semibold mt-6">2. How We Use Cookies</h2>
        <p>We use cookies for various purposes, including:</p>
        <ul className="list-disc list-inside">
          <li>Essential cookies: These are necessary for the website to function properly.</li>
          <li>Analytical/performance cookies: These allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
          <li>Functionality cookies: These are used to recognize you when you return to our website.</li>
          <li>Targeting cookies: These record your visit to our website, the pages you have visited, and the links you have followed.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6">3. Third-Party Cookies</h2>
        <p>We may also use third-party cookies, such as Google Analytics, to help analyze how users use the site.</p>
        
        <h2 className="text-2xl font-semibold mt-6">4. Managing Cookies</h2>
        <p>Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may affect your experience of the site.</p>
        
        <h2 className="text-2xl font-semibold mt-6">5. Changes to This Declaration</h2>
        <p>We may update this Cookie Declaration from time to time. We will notify you of any changes by posting the new Cookie Declaration on this page.</p>
        
        <h2 className="text-2xl font-semibold mt-6">6. Contact Us</h2>
        <p>If you have any questions about this Cookie Declaration, please contact us at info@revattitude.com.</p>
      </div>
    </div>
  );
};

export default CookieDeclaration;