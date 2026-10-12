import type { Metadata } from "next";

export const siteConfig = {
  name: "PragmaTech",
  tagline: "From product idea to production-ready software.",
  description:
    "PragmaTech is a full-stack software delivery team designing, building, testing, and deploying web applications, backend systems, APIs, and AI-powered products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pragmatech-solutions.com",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "admin@pragmatech-solutions.com",
  ogImage: "/og-image.svg",
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    areaServed: "Worldwide",
    knowsAbout: [
      "Full-Stack Web Development",
      "Backend & API Development",
      "SaaS Product Development",
      "AI & LLM Integrations",
      "Cloud Deployment & DevOps",
    ],
  };
}
