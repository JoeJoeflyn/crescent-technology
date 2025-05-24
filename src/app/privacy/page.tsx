import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
      <div className="flex flex-col gap-6 mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary font-semibold">
          Privacy Policy
        </h1>
        <p className="text-xl text-primary max-w-5xl">
          At Crescent Technology, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy applies specifically to your use of our website (crescentglob.com) and outlines how we collect, use, and safeguard your data.
        </p>
      </div>
      <div className="space-y-8">
        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-4">
            1. Information We Collect
          </h3>
          <p className="text-primary">
            When you visit our website, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-primary mt-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, and phone number if you contact us through forms or email.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, and pages visited, collected via cookies and analytics tools.
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-4">
            2. How We Use Your Information
          </h3>
          <p className="text-primary">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-primary mt-2">
            <li>Respond to your inquiries or messages.</li>
            <li>Analyze and improve our website’s performance and user experience.</li>
            <li>Maintain the security and integrity of our website.</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-4">
            3. Data Sharing and Disclosure
          </h3>
          <p className="text-primary">
            We do not sell or share your personal data with third parties.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-4">
            4. Data Security
          </h3>
          <p className="text-primary">
            We implement security measures to protect your information from unauthorized access, disclosure, or misuse.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-4">
            5. Your Rights
          </h3>
          <p className="text-primary">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 text-primary mt-2">
            <li>Access, correct, or delete your personal information.</li>
            <li>Opt out of communications.</li>
            <li>Request data portability or restrict processing.</li>
          </ul>
          <p className="text-primary mt-2">
            To exercise these rights, contact us at sales@crescentglob.com.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-4">
            6. Cookies and Tracking
          </h3>
          <p className="text-primary">
            Our website uses cookies to enhance your experience and analyze traffic. You can manage cookie preferences through your browser settings.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-4">
            7. Third-Party Links
          </h3>
          <p className="text-primary">
            Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-4">
            8. Updates to This Policy
          </h3>
          <p className="text-primary">
            We may update this Privacy Policy periodically. The latest version will be available on crescentglob.com with the effective date.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-4">9. Contact Us</h3>
          <p className="text-primary">
            For questions or concerns about this Privacy Policy, contact us at:
          </p>
          <ul className="list-disc pl-6 text-primary mt-2">
            <li>
              Email:{" "}
              <a href="mailto:sales@crescentglob.com" className="underline">
                sales@crescentglob.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
