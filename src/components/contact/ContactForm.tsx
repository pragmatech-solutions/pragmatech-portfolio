"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { siteConfig } from "@/lib/metadata";

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "Full-Stack Web Application",
  budget: "",
  message: "",
};

const projectTypes = [
  "Full-Stack Web Application",
  "Backend / API Development",
  "AI & LLM Integration",
  "SaaS Product",
  "Internal Business Application",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) nextErrors.message = "Please describe your project.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) return;

    setStatus("submitting");

    const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    try {
      if (formEndpoint) {
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!response.ok) throw new Error("Form submission failed");
      } else {
        const subject = encodeURIComponent(`New project inquiry: ${values.projectType}`);
        const body = encodeURIComponent(
          `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || "—"}\nProject type: ${values.projectType}\nEstimated budget: ${values.budget || "—"}\n\nMessage:\n${values.message}`,
        );
        window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
      }

      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-secondary" aria-hidden />
        <h2 className="text-xl font-semibold text-foreground">Thanks — check your email client.</h2>
        <p className="max-w-sm text-sm text-muted">
          We&apos;ve prepared an email with your project details. Send it over and we&apos;ll get
          back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="focus-ring mt-2 text-sm font-medium text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="focus-ring mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground"
          />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-xs text-red-500">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="focus-ring mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground"
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-xs text-red-500">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company <span className="text-muted">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="focus-ring mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="text-sm font-medium text-foreground">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            className="focus-ring mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground"
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="text-sm font-medium text-foreground">
          Estimated Budget <span className="text-muted">(optional)</span>
        </label>
        <input
          id="budget"
          name="budget"
          type="text"
          placeholder="e.g. $5,000 – $10,000"
          value={values.budget}
          onChange={(event) => updateField("budget", event.target.value)}
          className="focus-ring mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="focus-ring mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground"
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-xs text-red-500">
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p className="text-sm text-red-500">
          Something went wrong sending your message. Please try again or email us directly at{" "}
          {siteConfig.contactEmail}.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90 disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}
