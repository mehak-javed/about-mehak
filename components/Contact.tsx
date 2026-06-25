import { Mail, Github, Linkedin, Phone } from "lucide-react";
import Reveal from "./ui/Reveal";
import { profile } from "@/lib/data";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    Icon: Linkedin,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    Icon: Phone,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="section-index">06</span>
            <span className="h-px w-8 bg-border" />
            <span className="uppercase tracking-widest">Contact</span>
          </div>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-heading sm:text-5xl md:text-6xl">
            Let&apos;s build something great together.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m actively looking for a Front-End Developer role in Glasgow. Whether you&apos;re
            hiring or just want to chat, my inbox is always open.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ label, value, href, Icon }, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col gap-3 rounded-card border border-border bg-surface p-5 transition-colors hover:border-foreground/30 hover:bg-surface-elevated"
              >
                <Icon size={20} className="text-muted-foreground group-hover:text-foreground" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                  <div className="mt-1 break-words text-sm text-foreground">{value}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
