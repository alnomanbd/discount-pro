import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Privacy Policy</h1>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="space-y-6">
          <p className="text-lg">
            At <strong>Your Company Name</strong> ("we", "us", "our"), we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services. By using our services, you agree to the practices described in this policy.
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
          <p>
            We collect the following types of information to provide and improve our services:
          </p>
          <ul className="list-disc list-inside pl-6">
            <li><strong>Personal Information:</strong> Includes name, email address, phone number, and billing information.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, such as IP address, browser type, and pages visited.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance user experience and track usage.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc list-inside pl-6">
            <li>To provide and maintain our services.</li>
            <li>To personalize your experience and improve our services.</li>
            <li>To process transactions and send related updates.</li>
            <li>To communicate with you regarding updates, offers, and promotions.</li>
            <li>To comply with legal obligations and resolve disputes.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">3. How We Share Your Information</h2>
          <p>We may share your information in the following ways:</p>
          <ul className="list-disc list-inside pl-6">
            <li><strong>Service Providers:</strong> With third-party providers who assist us in performing functions like payment processing and data hosting.</li>
            <li><strong>Legal Compliance:</strong> When required by law, such as in response to subpoenas or legal processes.</li>
            <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale, your information may be transferred as part of the transaction.</li>
            <li><strong>With Your Consent:</strong> We may share your data with others when we have your explicit consent to do so.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">4. Data Security</h2>
          <p>
            We implement reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. However, please note that no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc list-inside pl-6">
            <li><strong>Access:</strong> You have the right to request a copy of your personal data.</li>
            <li><strong>Correction:</strong> You can correct any inaccurate or incomplete data we have.</li>
            <li><strong>Deletion:</strong> You may request the deletion of your personal information.</li>
            <li><strong>Opt-Out:</strong> You can opt-out of marketing communications at any time.</li>
            <li><strong>Data Portability:</strong> You may request your data in a structured format for transfer to another service provider.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third-party sites, and we encourage you to review their privacy policies before providing any personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-6">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this policy periodically to stay informed about how we are protecting your data.
          </p>

          <h2 className="text-2xl font-semibold mt-6">8. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, or if you wish to exercise any of your rights regarding your personal data, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> <a href="mailto:privacy@yourdomain.com" className="text-blue-600">privacy@yourdomain.com</a>
          </p>
          <p>
            <strong>Phone:</strong> 123-456-7890
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
