import { Section, SectionHeading } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function ProcessSteps() {
  return (
    <Section className="border-b border-border bg-surface/40">
      <SectionHeading
        eyebrow="How We Work"
        title="A transparent path from first conversation to production."
        description="Clear milestones and communication at every stage, so you always know what's happening and why."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.title} delay={(index % 4) * 80}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft font-mono text-sm font-semibold text-accent">
                    {step.step}
                  </span>
                  <Icon className="h-5 w-5 text-accent-secondary" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
