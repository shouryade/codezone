// src/pages/terms-of-service.js
import React from "react";
import Layout from "../components/Layout";

const TermsOfServicePage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

        <p className="mb-4">
          Welcome to Code Zone ("Code Zone," "we," or "us"). We are committed to
          protecting the privacy and security of the information we collect from
          our users. This Privacy Policy outlines our practices regarding the
          collection, use, and disclosure of information when you use our online
          developer training services.
        </p>

        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>
            Personal Information: We may collect personal information such as
            your name, email address, and contact details when you create an
            account or communicate with us.
          </li>
          <li>
            Academic Information: We may collect information about your academic
            background, including the university you attend or attended.
          </li>
          <li>
            Course Progress: We collect information about your progress in our
            courses, including assignments, quizzes, and completion status.
          </li>
          <li>
            Usage Data: We collect information about how you interact with our
            website, including the pages you visit, your IP address, device
            type, and browser type.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          We may use your information for the following purposes:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>
            Provide Services: To deliver our online developer training services,
            including courses, tutorials, and educational content.
          </li>
          <li>
            Communication: To communicate with you about your account, updates,
            changes to our services, and promotional materials.
          </li>
          <li>
            Personalization: To tailor our services to your preferences and
            provide a customized learning experience.
          </li>
          <li>
            Research and Analytics: To analyze usage patterns, conduct research,
            and improve our services.
          </li>
          <li>
            Legal Requirements: To comply with legal obligations and respond to
            lawful requests.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Information Sharing</h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except in the following
          circumstances:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>
            Service Providers: We may share information with trusted service
            providers who assist us in delivering our services.
          </li>
          <li>
            Legal Compliance: We may disclose information when required by law
            or to protect our rights, privacy, safety, or property.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Security</h2>
        <p className="mb-4">
          We take reasonable measures to protect your personal information.
          However, no data transmission over the internet or method of storage
          can be guaranteed to be 100% secure. Therefore, we cannot guarantee
          the absolute security of your information.
        </p>

        <h2 className="text-2xl font-bold mb-2">Your Choices</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal
          information. You can also opt out of receiving promotional emails. To
          exercise these rights, please contact us at codezone001@gmail.com.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          Changes to this Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with a revised effective date.
        </p>

        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have questions or concerns about this Privacy Policy, please
          contact us at codezone001@gmail.com.
        </p>

        <p className="mb-4">
          By using Code Zone's services, you agree to this Privacy Policy. Thank
          you for choosing Code Zone for your educational needs.
        </p>
      </div>
    </Layout>
  );
};

export default TermsOfServicePage;
