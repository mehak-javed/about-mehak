import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { glasgowReasons } from "@/lib/data";

export default function WhyGlasgow() {
  return (
    <section id="why-glasgow" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading
        index="05"
        eyebrow="Why Glasgow"
        title="Why I want to work in Glasgow"
        description="I'm not just open to relocating — Glasgow is exactly where I want to build the next chapter of my career."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {glasgowReasons.map((reason, i) => (
          <Reveal key={reason.title} delay={(i % 2) * 0.08}>
            <div className="h-full rounded-card border border-border bg-surface p-7">
              <div className="flex items-center gap-3">
                <span className="section-index text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {reason.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
