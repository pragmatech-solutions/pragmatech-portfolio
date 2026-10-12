import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { TeamSection } from "@/components/home/TeamSection";
import { WhyUs } from "@/components/home/WhyUs";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About — PragmaTech",
  description:
    "PragmaTech is a coordinated software-delivery team combining frontend, backend, and delivery experience across real production engagements.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-border pb-0">
        <SectionHeading
          eyebrow="About PragmaTech"
          title="A coordinated team, built for full-stack product delivery."
          description="We combine product thinking, frontend engineering, backend architecture, and deployment experience so every engagement is handled end-to-end — not split across disconnected freelancers."
        />
      </Section>

      <TeamSection />
      <WhyUs />

      <Section className="text-center">
        <h2 className="text-2xl font-semibold text-foreground">Want to work together?</h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          Tell us about your project and we&apos;ll help define the next steps.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="/contact" variant="primary">
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}
