import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { DeliveryProcess } from "@/components/home/DeliveryProcess";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services — PragmaTech",
  description:
    "Full-stack web development, backend and API engineering, AI integrations, database design, and cloud deployment services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section className="border-b border-border pb-0">
        <SectionHeading
          eyebrow="Services"
          title="Software delivery services built around your product, not around us."
          description="Each service below is available on its own or combined into a full end-to-end engagement — the same team supports you either way."
        />
      </Section>

      <Section className="border-b border-border">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="h-full">
                <Icon className="h-6 w-6 text-accent" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <DeliveryProcess />

      <Section className="text-center">
        <h2 className="text-2xl font-semibold text-foreground">
          Not sure which service fits your project?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          Tell us what you&apos;re building and we&apos;ll recommend the right scope.
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
