import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { DeliveryProcess } from "@/components/home/DeliveryProcess";
import { processSteps } from "@/data/process";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Process — Pragmatech",
  description:
    "Our seven-step development process — from discovery and planning through design, development, testing, deployment, and ongoing support.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <Section className="border-b border-border pb-0">
        <SectionHeading
          eyebrow="Our Process"
          title="A transparent workflow, from first conversation to production."
          description="We keep communication clear and milestones visible at every stage — so you always know what's shipped and what's coming next."
        />
      </Section>

      <Section className="border-b border-border">
        <ol className="space-y-10">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-soft font-mono text-sm font-semibold text-accent">
                    {step.step}
                  </span>
                  {step.step !== processSteps.length ? (
                    <span className="mt-2 w-px flex-1 bg-border" aria-hidden />
                  ) : null}
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-accent-secondary" aria-hidden />
                    <h2 className="text-lg font-semibold text-foreground">{step.title}</h2>
                  </div>
                  <p className="mt-2 max-w-2xl leading-relaxed text-muted">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      <DeliveryProcess />

      <Section className="text-center">
        <h2 className="text-2xl font-semibold text-foreground">Ready to start scoping your project?</h2>
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
