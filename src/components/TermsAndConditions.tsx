import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <p className="text-gray-600 mb-8">Last updated April 12, 2023</p>

      <h2 className="text-3xl font-bold mb-6">AGREEMENT TO OUR LEGAL TERMS</h2>
      <p>We are REVATTITUDE LLC ("Company," "we," "us," "our"), a company registered in Arizona, United States at 4600 E Washington, Suite 300, Suite 300, Phoenix, AZ 85034.</p>
      <p>We operate the website https://www.revattitude.com (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</p>
      <p>Revattitude LLC ("The Company") is a marketing company that specializes in enhancing businesses' online presence through a proprietary software-as-a-service (SaaS) platform. Our comprehensive solution enables businesses to boost their online reviews by effectively engaging with customers via email, SMS, WhatsApp, and QR codes. By leveraging our white-labeled platform, clients benefit from a seamless experience that integrates with their brand, while simultaneously improving their online reputation and visibility.</p>
      <p>You can contact us by phone at (US)(602) 456-9602, email at support@revattitude.com, or by mail to 4600 E Washington, Suite 300, Suite 300, Phoenix, AZ 85034, United States.</p>

      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">TABLE OF CONTENTS</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li><a href="#services" className="text-blue-600 hover:text-blue-800">OUR SERVICES</a></li>
          <li><a href="#intellectual-property" className="text-blue-600 hover:text-blue-800">INTELLECTUAL PROPERTY RIGHTS</a></li>
          <li><a href="#user-representations" className="text-blue-600 hover:text-blue-800">USER REPRESENTATIONS</a></li>
          <li><a href="#user-registration" className="text-blue-600 hover:text-blue-800">USER REGISTRATION</a></li>
          <li><a href="#purchases" className="text-blue-600 hover:text-blue-800">PURCHASES AND PAYMENT</a></li>
          {/* Add remaining table of contents items */}
        </ol>
      </div>

      <section id="services" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. OUR SERVICES</h2>
        <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
        <p>The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>
      </section>

      <section id="intellectual-property" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>
        <h3 className="text-xl font-semibold mb-2">Our intellectual property</h3>
        <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</p>
        <p>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.</p>
        <p>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.</p>
      </section>

      <section id="user-representations" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. USER REPRESENTATIONS</h2>
        <p>By using the Services, you represent and warrant that:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>All registration information you submit will be true, accurate, current, and complete;</li>
          <li>You will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
          <li>You have the legal capacity and you agree to comply with these Legal Terms;</li>
          <li>You are not a minor in the jurisdiction in which you reside;</li>
          <li>You will not access the Services through automated or non-human means, whether through a bot, script or otherwise;</li>
          <li>You will not use the Services for any illegal or unauthorized purpose;</li>
          <li>Your use of the Services will not violate any applicable law or regulation.</li>
        </ol>
      </section>

      <section id="user-registration" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. USER REGISTRATION</h2>
        <p>You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>
      </section>

      <section id="purchases" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. PURCHASES AND PAYMENT</h2>
        <p>We accept the following forms of payment:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Visa</li>
          <li>Mastercard</li>
          <li>American Express</li>
          <li>Discover</li>
          <li>PayPal</li>
        </ul>
        <p>You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.</p>
      </section>

      {/* Rest of the existing content remains the same */}
    </div>
  );
};

export default TermsAndConditions;