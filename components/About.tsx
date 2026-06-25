import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { about, images } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading index="01" eyebrow="About" title="Designing & building thoughtful interfaces" />
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="relative mb-8 aspect-[4/3] w-full overflow-hidden rounded-card border border-border">
            <Image
              src={images.about}
              alt="Mehak Javed at work"
              fill
              sizes="(max-width: 768px) 100vw, 640px"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-2">
          <dl className="divide-y divide-border rounded-card border border-border bg-surface">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 p-5">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
