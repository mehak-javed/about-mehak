import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string; // e.g. "01"
  eyebrow: string; // small label
  title: string; // large heading
  description?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="section-index">{index}</span>
        <span className="h-px w-8 bg-border" />
        <span className="uppercase tracking-widest">{eyebrow}</span>
      </div>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-heading sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
