import Header from "@/components/layout/Header";
import PortfolioExperience from "@/components/PortfolioExperience";
import RevealProvider from "@/components/providers/RevealProvider";
import { siteConfig, skills } from "@/lib/data";
import { jsonLdScript, personId, websiteId } from "@/lib/seo";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        jobTitle: "Software Engineer",
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        image: `${siteConfig.url}${siteConfig.image}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
        sameAs: [siteConfig.linkedin, siteConfig.github],
        knowsAbout: [...new Set(skills.flatMap((skill) => skill.tags))],
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profile`,
        url: siteConfig.url,
        name: siteConfig.title,
        mainEntity: { "@id": personId },
        isPartOf: { "@id": websiteId },
      },
    ],
  };

  return (
    <RevealProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <Header />
      <main>
        <PortfolioExperience />
      </main>
    </RevealProvider>
  );
}
