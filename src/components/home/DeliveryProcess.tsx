import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { deliveryStages } from "@/data/process";

export function DeliveryProcess() {
  return (
    <Section className="border-b border-border bg-surface/40">
      <SectionHeading
        eyebrow="One Connected Process"
        title="Design, Develop, Test, and Deploy — under one roof."
        description="Every engagement moves through the same four connected stages, handled by the same team from the first sketch to the production release."
      />

      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
        />
        <ol className="grid gap-8 lg:grid-cols-4">
          {deliveryStages.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 100}>
              <li className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-background font-mono text-sm font-semibold text-accent">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{stage.summary}</p>
                <ul className="mt-4 space-y-2">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-secondary" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
