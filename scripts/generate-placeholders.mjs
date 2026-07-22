import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const projects = [
  { slug: "cheezious-platform-backend", variant: "commerce", galleries: 2 },
  { slug: "memeworld-social-apis", variant: "chat", galleries: 2 },
  { slug: "copitch-ai-meeting-automation", variant: "dashboard", galleries: 2 },
  { slug: "ai-recruiter", variant: "chat", galleries: 1 },
  { slug: "global-returns", variant: "ops", galleries: 1 },
  { slug: "designer-trellis", variant: "dashboard", galleries: 1 },
];

const palettes = {
  dashboard: ["#3457e8", "#17998a"],
  api: ["#6f8cff", "#3457e8"],
  chat: ["#17998a", "#3457e8"],
  commerce: ["#3457e8", "#e8a134"],
  ops: ["#17998a", "#6f8cff"],
};

function bars(seed, count, width, x0) {
  let out = "";
  let h = seed;
  for (let i = 0; i < count; i++) {
    h = (h * 9301 + 49297) % 233280;
    const height = 18 + (h % 70);
    out += `<rect x="${x0 + i * (width + 8)}" y="${180 - height}" width="${width}" height="${height}" rx="3" fill="rgba(255,255,255,0.75)" />`;
  }
  return out;
}

function buildSvg({ variant, seed, label }) {
  const [c1, c2] = palettes[variant] ?? palettes.dashboard;
  const gradientId = `g-${variant}-${seed}`;
  let content = "";

  if (variant === "dashboard") {
    content = `
      <rect x="32" y="32" width="200" height="24" rx="6" fill="rgba(255,255,255,0.85)" />
      <rect x="32" y="70" width="140" height="14" rx="4" fill="rgba(255,255,255,0.55)" />
      ${bars(seed, 8, 22, 32)}
      <rect x="440" y="32" width="128" height="192" rx="12" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.5)" />
      <circle cx="504" cy="90" r="34" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="10" stroke-dasharray="160 60" />
    `;
  } else if (variant === "chat") {
    content = `
      <rect x="32" y="40" width="260" height="34" rx="17" fill="rgba(255,255,255,0.85)" />
      <rect x="32" y="86" width="200" height="34" rx="17" fill="rgba(255,255,255,0.45)" />
      <rect x="140" y="132" width="260" height="34" rx="17" fill="rgba(255,255,255,0.85)" />
      <rect x="200" y="178" width="180" height="34" rx="17" fill="rgba(255,255,255,0.45)" />
    `;
  } else if (variant === "commerce") {
    content = `
      <rect x="32" y="32" width="150" height="150" rx="10" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.6)" />
      <rect x="200" y="32" width="150" height="150" rx="10" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.6)" />
      <rect x="368" y="32" width="150" height="150" rx="10" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.6)" />
      <rect x="32" y="200" width="486" height="16" rx="8" fill="rgba(255,255,255,0.55)" />
    `;
  } else if (variant === "ops") {
    content = `
      <rect x="32" y="32" width="486" height="30" rx="6" fill="rgba(255,255,255,0.85)" />
      ${[0, 1, 2, 3].map((row) => `<rect x="32" y="${80 + row * 34}" width="486" height="22" rx="5" fill="rgba(255,255,255,${row % 2 ? 0.3 : 0.5})" />`).join("")}
    `;
  } else {
    content = `${bars(seed, 12, 28, 32)}`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 240" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="${gradientId}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}" />
      <stop offset="100%" stop-color="${c2}" />
    </linearGradient>
  </defs>
  <rect width="550" height="240" rx="16" fill="url(#${gradientId})" />
  ${content}
</svg>`;
}

const root = path.join(process.cwd(), "public", "images", "projects");

for (const project of projects) {
  const dir = path.join(root, project.slug);
  mkdirSync(dir, { recursive: true });

  writeFileSync(
    path.join(dir, "thumbnail.svg"),
    buildSvg({ variant: project.variant, seed: project.slug.length * 17, label: `${project.slug} thumbnail` }),
  );

  for (let i = 1; i <= project.galleries; i++) {
    writeFileSync(
      path.join(dir, `gallery-${i}.svg`),
      buildSvg({ variant: project.variant, seed: project.slug.length * 31 + i * 7, label: `${project.slug} screenshot ${i}` }),
    );
  }
}

console.log("Generated placeholder SVGs for", projects.length, "projects");
