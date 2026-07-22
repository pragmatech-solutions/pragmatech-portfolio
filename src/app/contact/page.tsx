import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig, buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Pragmatech",
  description:
    "Have a project in mind? Send us the requirements and we'll help define the next steps.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Have a project in mind?"
            description="Send us the requirements and we'll help define the next steps — from scope to a working production release."
          />

          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="focus-ring mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {siteConfig.contactEmail}
          </a>

          <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted">
            Prefer to reach out directly on Upwork? Include a link to this site in your message
            and we&apos;ll follow up with next steps.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
