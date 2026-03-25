import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { differentiators } from "@/data/site-content";

export function DifferentialsSection() {
  return (
    <section className="px-4 py-20 md:px-8" id="diferenciais">
      <div className="container">
        <SectionHeading
          eyebrow="Por que a marca se destaca"
          title="Uma experiência com acabamento premium, clareza e profundidade."
          description="Cada camada da landing foi desenhada para transmitir segurança, retenção visual e um sentimento de produto sofisticado pronto para ganhar escala."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {differentiators.map((item) => (
            <Card key={item.title} className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#C5963E]/25 bg-[#C5963E]/10">
                  <item.icon className="h-5 w-5 text-[#F6D28E]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#CEC7B7]">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
