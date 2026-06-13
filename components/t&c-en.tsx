const TermsAndConditionsEN = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 ">
        <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:marker:text-primary prose-hr:border-border">
          <h1 className="text-3xl font-bold mb-8">Trainody Terms and Conditions</h1>

          <p className="text-sm text-muted-foreground mb-8">Last modified: 13/06/2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Subject Matter and Acceptance</h2>
            <p className="mb-4">
              These Terms and Conditions ("Terms") govern the use of Trainody ("the Service", "we", "our"), a software as a service (SaaS) platform that allows personal trainers to manage their clients and provide online training programs, accessible through the trainody.com website, the app.trainody.com web application and the mobile app for clients.
            </p>
            <p className="mb-4">
              The Service is provided by Trainody. By creating an account or using the Service, you declare that you have read and accepted these Terms. If you do not accept the Terms, you may not use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{"\"User\": any person who accesses or uses the Service"}</li>
              <li>{"\"Personal Trainer\" or \"Trainer\": the professional who uses the Service to manage their clients and provide training programs"}</li>
              <li>{"\"Client\": the person who receives training services through the platform from a Trainer"}</li>
              <li>{"\"Content\": texts, images, videos, workout plans and programs, medical histories, messages and any other material uploaded to the platform"}</li>
              <li>{"\"Plan\": the subscription plan purchased by the Trainer (Basic, Pro or Business)"}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Registration and Account</h2>

            <h3 className="text-xl font-medium mb-3">3.1 Registration Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Personal Trainers must be of legal age and hold any qualifications required by the regulations applicable to their professional activity</li>
              <li>Clients must be of legal age; minors under 18 may use the Service only with the consent of the person holding parental responsibility, to be obtained by the Trainer</li>
              <li>Information provided during registration must be truthful, accurate and complete, and kept up to date</li>
              <li>The Trainer declares that they use the Service in the course of their professional activity</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.2 Account Security</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>The user is responsible for the confidentiality of their login credentials and for all activities carried out through their account</li>
              <li>The user must immediately notify us of any unauthorized access or security breach at info@trainody.com</li>
              <li>Sharing login credentials with third parties or transferring the account is prohibited</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Description of the Service</h2>

            <h3 className="text-xl font-medium mb-3">4.1 Features</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Client management (profiles, medical histories, progress) for personal trainers</li>
              <li>Creation and sharing of workout plans and programs, with explanatory videos</li>
              <li>Real-time progress tracking</li>
              <li>Integrated trainer-client chat</li>
              <li>Calendar and appointment management</li>
              <li>Online payment management (in the Plans that include it)</li>
              <li>Free mobile app for Clients (iOS and Android)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">4.2 Nature of the Service — No Medical Advice</h3>
            <p className="mb-4">
              Trainody is a technological management and communication tool. <strong>Trainody does not provide medical, healthcare or nutritional advice</strong> and is not responsible for the content of training programs, which are prepared independently by the Trainer. Before starting any training program, Clients are advised to consult a physician. The Trainer is solely responsible for assessing the physical fitness of their Clients and the suitability of the programs assigned.
            </p>

            <h3 className="text-xl font-medium mb-3">4.3 Usage Limitations</h3>
            <p className="mb-2">It is prohibited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Service for illegal activities or in breach of these Terms</li>
              <li>Upload inappropriate, offensive, defamatory content or content that infringes third-party rights</li>
              <li>Attempt to access unauthorized parts of the system or circumvent security measures</li>
              <li>Interfere with the operation of the Service, including through unauthorized automated use (bots, scraping)</li>
              <li>Use the Service for spam or unauthorized promotional communications</li>
              <li>Resell, sublicense or make the Service available to third parties beyond what is provided for by your Plan</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Plans, Payments and Subscriptions</h2>

            <h3 className="text-xl font-medium mb-3">5.1 Plans and Pricing</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Basic</strong> — free, up to 2 clients</li>
              <li><strong>Pro</strong> — €19.90/month, up to 20 clients</li>
              <li><strong>Business</strong> — €49.90/month, up to 50 clients, including online payment management</li>
            </ul>
            <p className="mb-4">
              Up-to-date prices and the details of each Plan's features are published on trainody.com. Prices include VAT where applicable. We reserve the right to change prices with at least 30 days' notice; the change applies from the next renewal and you may withdraw before it takes effect.
            </p>

            <h3 className="text-xl font-medium mb-3">5.2 Billing and Renewal</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Payments are processed by our provider Stripe; Trainody does not store full card data</li>
              <li>Billing occurs in advance, according to the billing cycle of the chosen Plan</li>
              <li>The subscription renews automatically at the end of each period, unless cancelled</li>
              <li>In the event of non-payment, access to paid features may be suspended with prior notice</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">5.3 Cancellation and Withdrawal</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>The subscription can be cancelled at any time from the account settings or by writing to info@trainody.com</li>
              <li>Cancellation takes effect at the end of the current billing period; no pro-rata refunds are provided for periods already paid, except as required by mandatory rules</li>
              <li>If the user qualifies as a consumer, they have a right of withdrawal within 14 days of subscribing under the Italian Consumer Code, unless they have requested immediate performance of the service and it has been fully performed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Content and Intellectual Property</h2>

            <h3 className="text-xl font-medium mb-3">6.1 Content Ownership</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Personal Trainers retain all rights to the Content they create and upload</li>
              <li>By uploading Content, the Trainer grants Trainody a non-exclusive, royalty-free license, limited to the duration of the relationship, for the sole purpose of providing the Service (storage, display to authorized Clients, backups)</li>
              <li>Trainody and its licensors retain all rights to the software, interface, trademarks and other elements of the platform</li>
              <li>We grant the user a personal, non-exclusive, non-transferable and revocable license to use the Service in accordance with these Terms</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">6.2 Content Responsibility</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Users are solely responsible for the Content they upload</li>
              <li>Content must comply with the law, including copyright legislation</li>
              <li>Trainody may remove, with prior notice where possible, inappropriate or unlawful Content, and suspend the accounts involved</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Privacy and Data Protection</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The processing of personal data is governed by our <a href="/en/privacy-policy">Privacy Policy</a>, which forms an integral part of these Terms</li>
              <li>For Client data entered into the platform, the Trainer acts as an independent data controller and Trainody as a data processor pursuant to Art. 28 GDPR</li>
              <li>The Trainer warrants that they have an appropriate legal basis for their Clients' data, including explicit consent for health-related data (medical history, physical conditions)</li>
              <li>Data is managed in compliance with the GDPR</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Warranties and Liability</h2>

            <h3 className="text-xl font-medium mb-3">8.1 Service Availability</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>The Service is provided "as is" and "as available"</li>
              <li>We strive to keep the Service operational and secure, but we do not guarantee that it will always be available, timely or error-free; interruptions may occur due to maintenance, updates or force majeure</li>
              <li>We perform regular backups, but we recommend that users keep a copy of essential materials</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">8.2 Limitation of Liability</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>To the extent permitted by law, Trainody is not liable for indirect or consequential damages, loss of profits or opportunities arising from the use or inability to use the Service</li>
              <li>Trainody is not liable for injuries or health problems arising from the performance of training programs, whose preparation and supervision are the sole responsibility of the Trainer</li>
              <li>To the extent permitted by law, Trainody's aggregate liability is limited to the amount paid by the user in the 12 months preceding the event giving rise to the damage</li>
              <li>Nothing in these Terms excludes or limits liability for willful misconduct or gross negligence, or the mandatory rights granted to consumers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to the Service and to the Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We reserve the right to modify, suspend or discontinue the Service or parts of it</li>
              <li>Substantial changes to these Terms will be communicated by email or through a notice on the platform at least 30 days in advance</li>
              <li>Continued use of the Service after the changes take effect constitutes acceptance; in case of disagreement, the user may withdraw without penalty before that date</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Term, Suspension and Termination</h2>

            <h3 className="text-xl font-medium mb-3">10.1 Termination by the User</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Users can close their account at any time</li>
              <li>Upon closure, data will be deleted or returned as provided for in the Privacy Policy, without prejudice to statutory retention obligations</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">10.2 Suspension and Termination by Trainody</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We may suspend or close accounts that violate these Terms, after notice where the violation can be remedied</li>
              <li>In the event of serious violations (unlawful activities, security compromise, harm to other users), suspension or closure may take effect immediately</li>
              <li>Accrued rights and clauses intended by their nature to survive (intellectual property, limitations of liability, applicable law) remain unaffected</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Applicable Law and Jurisdiction</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>These Terms are governed by Italian law</li>
              <li>For users acting as professionals, the court of the place where Trainody has its registered office has exclusive jurisdiction</li>
              <li>For consumer users, the court of the consumer's place of residence or domicile has jurisdiction, pursuant to the Italian Consumer Code</li>
              <li>Consumers may also use the European Online Dispute Resolution (ODR) platform: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
            <p className="mb-4">For questions about these Terms:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:info@trainody.com">info@trainody.com</a></li>
              <li>Instagram: <a href="https://www.instagram.com/trainody.app" target="_blank" rel="noopener noreferrer">@trainody.app</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Final Provisions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>If any provision is deemed invalid, the remaining provisions remain in full force and effect</li>
              <li>These Terms, together with the Privacy Policy, constitute the entire agreement between the parties in relation to the Service</li>
              <li>Failure to enforce a right does not constitute a waiver of that right</li>
              <li>The user may not assign the rights and obligations arising from these Terms without our written consent</li>
            </ul>
          </section>
        </div>
      </div>
    );
  };

  export default TermsAndConditionsEN;
