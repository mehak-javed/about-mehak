import Reveal from "./ui/Reveal";
import Chip from "./ui/Chip";
import SectionHeading from "./ui/SectionHeading";
import { HeroParallax } from "./ui/hero-parallax";
import { skillGroups, parallaxItems } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 md:pt-32">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="The tools I build with"
          description="A modern front-end stack spanning frameworks, styling, data, testing and delivery."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div className="h-full rounded-card border border-border bg-surface p-6">
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Chip key={skill}>{skill}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Parallax gallery animation, full-bleed */}
      <HeroParallax products={parallaxItems} />
    </section>
  );
}
