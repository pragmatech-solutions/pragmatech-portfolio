import { ArrowRight, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

const pipeline = ["Design", "Develop", "Test", "Deploy"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,var(--accent-soft),transparent_55%),radial-gradient(circle_at_90%_10%,var(--accent-soft),transparent_45%)]"
      />

      <Container className="grid gap-16 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            Full-Stack Product Delivery Team
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            From product idea to production-ready software.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Pragmatech designs, develops, tests, and deploys web applications, backend systems,
            APIs, and AI-powered products — as one accountable team, not a patchwork of
            freelancers.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects" variant="primary">
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary">
              Discuss a Project
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            {["4 years building production systems", "Full delivery lifecycle in-house", "Direct communication, no hand-offs"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 text-accent-secondary" aria-hidden />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-2xl shadow-accent/5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-accent-secondary/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
              <span className="ml-3 font-mono text-xs text-muted">delivery-pipeline.ts</span>
            </div>

            <div className="mt-6 space-y-3">
              {pipeline.map((stage, index) => (
                <div
                  key={stage}
                  className="flex items-center gap-4 rounded-xl border border-border bg-background/60 px-4 py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-sm font-semibold text-accent">
                    {index + 1}
                  </span>
                  <span className="font-medium text-foreground">{stage}</span>
                  <span className="ml-auto h-1.5 w-24 overflow-hidden rounded-full bg-border">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                      style={{ width: `${(index + 1) * 25}%` }}
                    />
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-border p-4 font-mono text-xs text-muted">
              <p>
                <span className="text-accent-secondary">status</span>: shipped_to_production
              </p>
              <p>
                <span className="text-accent-secondary">maintenance</span>: ongoing
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
