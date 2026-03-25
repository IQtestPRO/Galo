import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      <Badge className={align === "center" ? "mx-auto" : undefined}>{eyebrow}</Badge>
      <h2 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[#D0C8B7] md:text-lg">{description}</p>
    </div>
  );
}
