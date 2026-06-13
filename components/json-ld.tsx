import { SITE_URL } from "@/lib/seo";
import { plans } from "@/lib/plans";
import { faqs } from "@/lib/faqs";
import type { Lang } from "@/lib/i18n";

function JsonLdScript({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const JsonLd = ({ lang }: { lang: Lang }) => {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Trainody",
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    sameAs: ["https://www.instagram.com/trainody.app"],
  };

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Trainody",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.priceValue,
      priceCurrency: "EUR",
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question[lang],
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.response[lang],
      },
    })),
  };

  return (
    <>
      <JsonLdScript data={organization} />
      <JsonLdScript data={softwareApplication} />
      <JsonLdScript data={faqPage} />
    </>
  );
};

export default JsonLd;
