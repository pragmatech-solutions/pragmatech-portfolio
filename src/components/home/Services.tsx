import { Section, SectionHeading } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section className="border-b border-border">
      <SectionHeading
        eyebrow="Services"
        title="Everything a software product needs to reach real users."
        description="From the first interface to the production database, our services cover the full stack a modern product requires."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={(index % 3) * 80}>
              <Card className="h-full">
                <Icon className="h-6 w-6 text-accent" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
