const PrivacyPolicyEN = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:marker:text-primary prose-hr:border-border">
          <h1 className="text-3xl font-bold mb-8">Trainody Privacy Policy</h1>

          <p className="text-sm text-muted-foreground mb-8">Last modified: 13/06/2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              This Privacy Policy describes how Trainody collects, uses, stores and protects the personal data of users of our software as a service (SaaS) platform dedicated to personal trainers and their clients, accessible through the trainody.com website, the app.trainody.com web application and the mobile app for clients.
            </p>
            <p className="mb-4">
              Personal data is processed in compliance with Regulation (EU) 2016/679 ("GDPR") and Italian Legislative Decree 196/2003 as amended by Legislative Decree 101/2018 ("Italian Privacy Code").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Data Controller</h2>
            <p className="mb-4">
              The data controller is Trainody. For any privacy-related matter you can contact us at: <a href="mailto:info@trainody.com">info@trainody.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Processing Roles: Trainody and Personal Trainers</h2>
            <p className="mb-4">
              The platform is used by personal trainers to manage their clients. It is therefore important to distinguish two roles:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Trainody as controller:</strong> for account data (registration, billing, technical logs, platform usage data), Trainody acts as data controller.
              </li>
              <li>
                <strong>Trainody as processor:</strong> for end-client data entered by personal trainers (personal details, medical histories, measurements, workout plans, progress, messages), the personal trainer acts as an independent data controller and Trainody as a data processor pursuant to Art. 28 GDPR, processing such data exclusively to provide the service and according to the trainer's instructions.
              </li>
            </ul>
            <p className="mt-4">
              The personal trainer is responsible for having an appropriate legal basis (e.g. explicit consent for health-related data) for the data of their clients uploaded to the platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data We Collect</h2>

            <h3 className="text-xl font-medium mb-3">4.1 Data Provided by the User</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Registration data: first name, last name, email address, password (stored in encrypted form)</li>
              <li>Professional information of the personal trainer (e.g. business name, gym/studio)</li>
              <li>Contact and personal details of clients entered by the trainer</li>
              <li>Workout plans and programs, notes, videos and uploaded materials</li>
              <li>Physical measurements, progress and fitness goals</li>
              <li>Medical history information and documentation relevant to physical activity, which may include <strong>health-related data</strong> (special category of data under Art. 9 GDPR), processed only with an appropriate legal basis</li>
              <li>Contents of trainer-client chat communications</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">4.2 Payment Data</h3>
            <p className="mb-4">
              Subscription payments are handled by our provider Stripe. Trainody does not store full payment card data: it only receives from Stripe the information needed to manage the subscription (payment outcome, last digits of the card, subscription status).
            </p>

            <h3 className="text-xl font-medium mb-3">4.3 Automatically Collected Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and system logs</li>
              <li>IP address and country of origin (also used to suggest the website language)</li>
              <li>Device and browser information</li>
              <li>Technical cookies necessary for the operation of the platform (see section 11)</li>
              <li>Aggregated website usage and performance data (cookieless analytics, see section 11)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Purposes and Legal Bases of Processing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Provision of the service</strong> (account creation and management, platform features, trainer-client communication, mobile app) — legal basis: performance of the contract (Art. 6(1)(b) GDPR)
              </li>
              <li>
                <strong>Payment and billing management</strong> — legal basis: performance of the contract and compliance with legal obligations (Art. 6(1)(b) and 6(1)(c) GDPR)
              </li>
              <li>
                <strong>Processing of health-related data</strong> (medical history, conditions relevant to training) — legal basis: explicit consent of the data subject (Art. 9(2)(a) GDPR), collected by the personal trainer as controller
              </li>
              <li>
                <strong>Platform security</strong> (prevention of unauthorized access, abuse and fraud) — legal basis: legitimate interest (Art. 6(1)(f) GDPR)
              </li>
              <li>
                <strong>Service improvement</strong> through aggregated usage statistics — legal basis: legitimate interest (Art. 6(1)(f) GDPR)
              </li>
              <li>
                <strong>Service communications</strong> (technical notices, changes to the terms, security alerts) — legal basis: performance of the contract and legitimate interest
              </li>
              <li>
                <strong>Compliance with legal obligations</strong> (tax, accounting, requests from authorities) — legal basis: legal obligation (Art. 6(1)(c) GDPR)
              </li>
            </ul>
            <p className="mt-4">
              Providing the data necessary for the provision of the service is a requirement for using the platform: without it, the service cannot be provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Recipients of the Data</h2>
            <p className="mb-2">
              Data may be disclosed to the following categories of recipients, appointed where necessary as data processors pursuant to Art. 28 GDPR:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Supabase</strong> — database, authentication and storage of platform data</li>
              <li><strong>Vercel</strong> — hosting of the website and web application, aggregated usage and performance statistics</li>
              <li><strong>Stripe</strong> — payment processing and subscription management</li>
              <li><strong>Resend</strong> — sending of transactional and service emails</li>
              <li>Personal trainers and their respective clients, within the limits of their professional relationship</li>
              <li>Consultants and suppliers (e.g. tax, legal) within the limits of the purposes indicated above</li>
              <li>Competent authorities, where required by law</li>
            </ul>
            <p className="mt-4">Personal data is never sold or transferred to third parties for marketing purposes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Transfers Outside the EU</h2>
            <p className="mb-4">
              Data is stored primarily on servers located in the European Union. Some of the providers listed above are based in the United States or may process data outside the EU: in such cases the transfer takes place on the basis of an adequacy decision of the European Commission (including the EU-U.S. Data Privacy Framework, where applicable) or the Standard Contractual Clauses (SCC), with supplementary safeguards where necessary.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
            <p className="mb-2">Personal data is retained for the following periods:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account data and platform content: for the duration of the contractual relationship</li>
              <li>Billing data and tax documents: 10 years, in compliance with legal obligations</li>
              <li>Technical and security logs: up to 12 months, unless needed to investigate unlawful activity</li>
              <li>Residual non-essential data: a maximum of 24 months after termination of the service</li>
            </ul>
            <p className="mt-4">
              Once these periods expire, data is deleted or anonymized. Upon account closure, client data entered by the trainer is deleted or returned according to the trainer's instructions, without prejudice to statutory retention obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Data Subject Rights</h2>
            <p className="mb-2">Pursuant to Arts. 15-22 GDPR, data subjects have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access their data and obtain a copy of it</li>
              <li>Rectify inaccurate or incomplete data</li>
              <li>Obtain the erasure of their data ("right to be forgotten")</li>
              <li>Restrict processing</li>
              <li>Receive their data in a structured, commonly used format (portability)</li>
              <li>Object to processing based on legitimate interest</li>
              <li>Withdraw consent at any time, without affecting the lawfulness of prior processing</li>
              <li>Lodge a complaint with the Italian Data Protection Authority (www.garanteprivacy.it) or their local supervisory authority</li>
            </ul>
            <p className="mt-4">
              Requests can be sent to <a href="mailto:info@trainody.com">info@trainody.com</a>. We will respond within 30 days. For data entered by their personal trainer, clients may also contact the trainer directly, in their capacity as data controller.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Data Security</h2>
            <p className="mb-2">We adopt technical and organizational security measures appropriate to the risk, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit (TLS/HTTPS) and at rest</li>
              <li>Password storage in encrypted form (hashing)</li>
              <li>Access control and data minimization</li>
              <li>Regular backups</li>
              <li>Monitoring and data breach management procedures, with notification to the supervisory authority and to data subjects in the cases provided for by Arts. 33-34 GDPR</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Cookies and Similar Technologies</h2>
            <p className="mb-2">The website only uses technical cookies, for which consent is not required:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>NEXT_LOCALE</strong> — stores the language chosen by the user (duration: 12 months)
              </li>
              <li>Session cookies necessary for authentication in the reserved area (app.trainody.com)</li>
            </ul>
            <p className="mt-4">
              Website usage and performance statistics are collected through Vercel Analytics and Speed Insights, tools that do not use cookies and do not track users across different sites: the data collected is aggregated and anonymous. We do not use profiling cookies or third-party marketing tools.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Minors</h2>
            <p className="mb-4">
              The service is not intended for users under 16 years of age. We do not knowingly collect data from minors without the consent of their parents or legal guardian. A personal trainer who intends to train a minor client must obtain the consent of the person holding parental responsibility.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Changes to this Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy to reflect regulatory or service changes. Substantial changes will be communicated by email or through a notice on the platform with reasonable advance notice. The date of the last modification is shown at the top of this document.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
            <p className="mb-4">
              To exercise your rights or for any questions about this Privacy Policy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:info@trainody.com">info@trainody.com</a></li>
              <li>Instagram: <a href="https://www.instagram.com/trainody.app" target="_blank" rel="noopener noreferrer">@trainody.app</a></li>
            </ul>
          </section>
        </div>
      </div>
    );
  };

  export default PrivacyPolicyEN;
