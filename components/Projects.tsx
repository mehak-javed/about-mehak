import { ArrowUpRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { clientProjects, aiProjects, type Project } from "@/lib/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const inner = (
    <div className="group flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-colors hover:border-foreground/30 hover:bg-surface-elevated">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-lg font-semibold text-foreground">{project.name}</h4>
        {project.url ? (
          <ArrowUpRight
            size={18}
            className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          />
        ) : null}
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <Reveal delay={(index % 3) * 0.05}>
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Selected work"
          description="A mix of client & production web applications and exploratory AI / ML projects."
        />

        <h3 className="mb-6 text-sm uppercase tracking-widest text-muted-foreground">
          Client &amp; Production Work
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clientProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <h3 className="mb-6 mt-16 text-sm uppercase tracking-widest text-muted-foreground">
          AI / ML &amp; IoT
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
