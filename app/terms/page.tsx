import Link from "next/link"

export const metadata = {
  title: "Terms of Service | Simple Flow",
  description: "Simple Flow terms of service for using our website and SMS messaging program.",
}

const LAST_UPDATED = "April 7, 2026"

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#32373c] to-[#1f2226] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-sm text-slate-300">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-4">
        <div className="max-w-none text-slate-700 space-y-6">

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Simple Flow website at gosimpleflow.com (the &quot;Site&quot;) and any services provided by Simple Flow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Site or our services.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">2. Description of Services</h2>
          <p>
            Simple Flow is a residential solar installation company serving New York, Pennsylvania, Maryland, New Jersey, Connecticut, Massachusetts, and California. We provide solar quotes and consultations, system design and engineering, permit handling, equipment installation, financing assistance, and ongoing customer support. Our Site provides information about these services and allows you to request a quote, schedule a consultation, and contact us.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">3. Age Restriction</h2>
          <p>
            You must be at least <strong>18 years of age</strong> to use this Site, submit any forms, or opt in to receive SMS/text messages from Simple Flow. By using the Site or providing your phone number, you represent and warrant that you are 18 years of age or older. If you are under 18, you are not permitted to use this Site or any of our services. Simple Flow does not knowingly collect personal information from individuals under the age of 18.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">4. Use of the Site</h2>
          <p>You agree to use the Site only for lawful purposes and in a way that does not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any applicable law or regulation.</li>
            <li>Infringe on the rights of others.</li>
            <li>Attempt to gain unauthorized access to any part of the Site or its systems.</li>
            <li>Interfere with or disrupt the Site or servers.</li>
            <li>Submit false, misleading, or spam content through any forms.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">5. Quotes and Estimates</h2>
          <p>
            Quotes, savings estimates, payback periods, and incentive amounts displayed on our Site or provided through our forms are for informational purposes only. Actual savings depend on many factors including your location, electricity usage, utility rates, system size, financing terms, and applicable incentives. Final pricing and savings are determined after a detailed site evaluation and a signed installation agreement.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">6. SMS/Text Messaging Terms</h2>
          <p>By providing your phone number and opting in to receive text messages from Simple Flow, you agree to the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Program name:</strong> Simple Flow Solar Installation.</li>
            <li><strong>Message types:</strong> You may receive service-related messages including quote confirmations, consultation reminders, project updates, install scheduling, inspection notifications, and customer service messages.</li>
            <li><strong>Message frequency:</strong> Message frequency varies based on your interactions and stage of the install process.</li>
            <li><strong>Opt-out:</strong> You can opt out at any time by replying <strong>STOP</strong> to any message. After opting out, you will receive one final confirmation message and no further texts.</li>
            <li><strong>Rejoin:</strong> After opting out, you may opt back in by replying <strong>START</strong> or by submitting a new inquiry through our website.</li>
            <li><strong>Help:</strong> For assistance, reply <strong>HELP</strong> to any message or contact us at <a href="tel:+18553757923" className="text-[#c9a700] hover:underline">(855) 375-7923</a>.</li>
            <li><strong>Message &amp; data rates:</strong> Message and data rates may apply depending on your mobile carrier and plan. Simple Flow is not responsible for any charges from your carrier.</li>
            <li><strong>Carrier liability:</strong> Carriers (T-Mobile, AT&amp;T, Verizon, etc.) are not liable for delayed or undelivered messages.</li>
            <li><strong>Privacy:</strong> Your opt-in consent and mobile information will not be shared, sold, or transferred to third parties or affiliates for marketing or promotional purposes. See our <Link href="/privacy" className="text-[#c9a700] hover:underline">Privacy Policy</Link> for full details.</li>
          </ul>
          <p>
            We comply with all applicable regulations and industry standards for application-to-person (A2P) messaging, including TCPA, CTIA, and carrier guidelines.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">7. Phone Calls</h2>
          <p>
            By providing your phone number, you also consent to receive phone calls from Simple Flow and our authorized representatives, including auto-dialed and pre-recorded calls, related to your solar quote, consultation, install scheduling, and customer service. Consent to receive marketing calls is not a condition of purchase. You may opt out of phone calls at any time by informing the caller or contacting us at <a href="tel:+18553757923" className="text-[#c9a700] hover:underline">(855) 375-7923</a>.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">8. Consultations &amp; Service Agreements</h2>
          <p>
            Requesting a free quote or scheduling a consultation through the Site does not create a binding agreement or obligation to purchase. Formal installation agreements will be established through separate contracts that outline scope, pricing, equipment, financing terms, warranty, install timeline, and other terms specific to your project.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">9. Intellectual Property</h2>
          <p>
            All content on this Site — including text, graphics, logos, images, photos, and software — is the property of Simple Flow or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Site without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">10. Disclaimer of Warranties</h2>
          <p>
            The Site and informational services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees regarding specific savings amounts, payback periods, or system production from informational tools on the Site. Specific equipment and workmanship warranties are provided in your separate installation agreement.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">11. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Simple Flow shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or services, even if we have been advised of the possibility of such damages. Our total liability for any claim arising from these Terms or your use of the Site shall not exceed the amount you paid us, if any, in the 12 months preceding the claim.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">12. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Simple Flow, its owners, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of the Site or violation of these Terms.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">13. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites or services (such as financing partners, government incentive portals, or scheduling tools). We are not responsible for the content, privacy practices, or terms of any third-party sites. Accessing third-party links is at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">14. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Your continued use of the Site after changes constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">15. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States and the State of New York. Any disputes arising under these Terms shall be resolved through good-faith negotiation or, if necessary, binding arbitration.
          </p>

          <h2 className="text-2xl font-bold text-[#32373c] mt-10 mb-3">16. Contact Us</h2>
          <p>If you have questions about these Terms, contact us at:</p>
          <ul className="list-none pl-0 space-y-1">
            <li><strong>Simple Flow</strong></li>
            <li>Email: <a href="mailto:legal@gosimpleflow.com" className="text-[#c9a700] hover:underline">legal@gosimpleflow.com</a></li>
            <li>Phone: <a href="tel:+18553757923" className="text-[#c9a700] hover:underline">(855) 375-7923</a></li>
            <li>Website: <Link href="/" className="text-[#c9a700] hover:underline">gosimpleflow.com</Link></li>
          </ul>

          <p className="text-sm text-slate-500 mt-12 pt-6 border-t border-slate-200">
            See also: <Link href="/privacy" className="text-[#c9a700] hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </section>
    </>
  )
}
