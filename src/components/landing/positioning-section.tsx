import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { positioningPillars } from "@/data/site-content";

export function PositioningSection() {
  return (
    <section className="px-4 py-20 md:px-8" id="plataforma">
      <div className="container">
        <SectionHeading
          eyebrow="A nova era do entretenimento digital brasileiro"
          title="Uma marca pensada para presença, confiança e permanência."
          description="A proposta da BichoBet une leitura premium, narrativa brasileira contemporânea e rigor visual para apresentar uma plataforma que parece grande desde o primeiro contato."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {positioningPillars.map((pillar) => (
            <Card key={pillar.title}>
              <CardContent className="space-y-4 p-7">
                <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#C5963E] to-transparent" />
                <h3 className="text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="text-sm leading-7 text-[#CCC5B7]">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
