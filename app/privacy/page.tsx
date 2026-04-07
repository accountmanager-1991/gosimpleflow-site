import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Simple Flow",
  description: "Simple Flow privacy policy — how we collect, use, and protect your personal information.",
}

const EFFECTIVE = "April 7, 2026"

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#32373c] to-[#1f2226] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-slate-300">Effective {EFFECTIVE}</p>
        </div>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-4">
        <div className="prose prose-slate max-w-none text-slate-700 space-y-6">

          <p className="text-lg">
            Simple Flow (&quot;Simple Flow,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information when you visit <strong>gosimpleflow.com</strong> (the &quot;Site&quot;) or use our services.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">1. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact information</strong> you provide voluntarily via our quote form or other interactions: first name, last name, email address, phone number, and physical address (street, city, state, ZIP).</li>
            <li><strong>Property and qualification information</strong> such as your average monthly electric bill, homeowner status, roof age, and credit profile.</li>
            <li><strong>Usage information</strong> automatically collected when you visit the Site, including IP address, browser type, device information, pages viewed, and referral source. This is collected via cookies and similar technologies.</li>
            <li><strong>Communications</strong> you send us via phone, SMS, email, or web forms.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide you with a solar quote and consultation</li>
            <li>Schedule appointments and follow up on your inquiry</li>
            <li>Communicate with you via phone, SMS, and email about your quote, project, and account</li>
            <li>Verify your eligibility for solar incentives, rebates, and financing programs</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and protect the security of our Site</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">3. SMS / Text Messaging Program</h2>
          <p>
            By providing your phone number through our forms or by giving express consent, you agree to receive text messages from Simple Flow related to your solar quote, appointment scheduling, project updates, and customer service. Message frequency varies based on your interaction with us. <strong>Message and data rates may apply.</strong>
          </p>
          <p>
            You can opt out of SMS messages at any time by replying <strong>STOP</strong> to any message from us. For help, reply <strong>HELP</strong>. We will confirm your opt-out via a final message. After opting out, you will no longer receive SMS from us unless you opt in again.
          </p>
          <p>
            <strong>We will never share, sell, or transfer your phone number or SMS opt-in data to third parties or affiliates for marketing or promotional purposes.</strong> Your phone number and consent to receive SMS messages stays with Simple Flow.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">4. How We Share Your Information</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service providers</strong> who assist us in operating our business, such as our CRM, scheduling, financing partners, installation crews, and email/SMS providers. These providers are contractually obligated to protect your information.</li>
            <li><strong>Solar installation partners and lenders</strong> only when necessary to fulfill your service request (e.g., processing your loan application or scheduling your install).</li>
            <li><strong>Government and regulatory bodies</strong> as required to apply for permits, rebates, and incentives on your behalf.</li>
            <li><strong>Legal authorities</strong> when required by law, subpoena, or to protect our rights.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">5. Cookies and Tracking Technologies</h2>
          <p>
            Our Site uses cookies and similar tracking technologies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can control cookies through your browser settings. Disabling cookies may affect Site functionality.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">6. Your Privacy Rights</h2>
          <p>Depending on your state of residence, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Withdraw consent for SMS messages by replying STOP</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <a href="mailto:privacy@gosimpleflow.com" className="text-[#c9a700] hover:underline">privacy@gosimpleflow.com</a> or call <a href="tel:+18553757923" className="text-[#c9a700] hover:underline">(855) 375-7923</a>.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">7. Data Security</h2>
          <p>
            We take reasonable measures to protect your information from unauthorized access, use, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">8. Children&apos;s Privacy</h2>
          <p>
            Our Site is not directed to children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately and we will delete it.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">9. Third-Party Links</h2>
          <p>
            Our Site may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by a new &quot;Effective&quot; date at the top of this page. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">11. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none pl-0 space-y-1">
            <li><strong>Simple Flow</strong></li>
            <li>Email: <a href="mailto:privacy@gosimpleflow.com" className="text-[#c9a700] hover:underline">privacy@gosimpleflow.com</a></li>
            <li>Phone: <a href="tel:+18553757923" className="text-[#c9a700] hover:underline">(855) 375-7923</a></li>
            <li>Web: <Link href="/" className="text-[#c9a700] hover:underline">gosimpleflow.com</Link></li>
          </ul>

          <p className="text-sm text-slate-500 mt-12 pt-6 border-t border-slate-200">
            See also: <Link href="/terms" className="text-[#c9a700] hover:underline">Terms &amp; Conditions</Link>
          </p>
        </div>
      </section>
    </>
  )
}
