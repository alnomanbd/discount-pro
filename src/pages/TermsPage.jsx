import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage = () => {
  return (
    <div className="w-11/12 mx-auto flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full p-8 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Terms and Conditions</h2>
        
        <div className="prose prose-lg">
          <p className="text-gray-700 mb-4">
            Welcome to [Your Website Name]. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, you should not use this website.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h3>
          <p className="text-gray-700 mb-4">
            These Terms and Conditions govern your use of our website, [Your Website Name] ("the Service"), and the purchase of any products or services offered by us. Please read these Terms carefully before using our Service.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Use of the Service</h3>
          <p className="text-gray-700 mb-4">
            You agree to use the Service only for lawful purposes and in accordance with our guidelines. You may not use the Service in any way that could damage, disable, overburden, or impair the website, or interfere with any other party's use of the Service.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">3. User Account</h3>
          <p className="text-gray-700 mb-4">
            In order to access certain features of the Service, you may be required to create a user account. You agree to provide accurate, current, and complete information during the registration process and to update your information if necessary. You are responsible for maintaining the confidentiality of your account credentials.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Privacy Policy</h3>
          <p className="text-gray-700 mb-4">
            Your privacy is important to us. Please review our <Link to="/auth/privacy-policy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link> to understand how we collect, use, and protect your personal information.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h3>
          <p className="text-gray-700 mb-4">
            All content, including but not limited to text, images, logos, and software, available on the Service is the property of [Your Website Name] or its licensors and is protected by intellectual property laws.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Prohibited Activities</h3>
          <p className="text-gray-700 mb-4">
            You are prohibited from engaging in any of the following activities:
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Disrupting or interfering with the security or functionality of the Service.</li>
              <li>Using the Service to transmit malicious software, viruses, or other harmful code.</li>
              <li>Engaging in fraud or impersonating another user or entity.</li>
              <li>Using the Service to send unsolicited communications (spam).</li>
            </ul>
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Termination</h3>
          <p className="text-gray-700 mb-4">
            We may suspend or terminate your account or access to the Service at our sole discretion if you violate these Terms. Upon termination, your right to use the Service will immediately cease.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Disclaimer of Warranties</h3>
          <p className="text-gray-700 mb-4">
            The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Service will be error-free, secure, or available at all times.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">9. Limitation of Liability</h3>
          <p className="text-gray-700 mb-4">
            To the maximum extent permitted by law, we will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">10. Governing Law</h3>
          <p className="text-gray-700 mb-4">
            These Terms will be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles. Any disputes related to these Terms shall be subject to the exclusive jurisdiction of the courts in [Your Location].
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">11. Changes to Terms</h3>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify or replace these Terms at any time. Any changes will be posted on this page with an updated effective date. Your continued use of the Service after such changes constitutes your acceptance of the updated Terms.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">12. Contact Us</h3>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about these Terms, please contact us at:
            <br />
            <strong>Email:</strong> support@[YourWebsite].com
            <br />
            <strong>Address:</strong> [Your Company Address]
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link to="/auth/signup" className="text-blue-600 hover:text-blue-800">Back to Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
