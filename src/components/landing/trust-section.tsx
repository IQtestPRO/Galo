import { ShieldCheck, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { responsibilityItems } from "@/data/site-content";

export function TrustSection() {
  return (
    <section className="px-4 py-20 md:px-8" id="confianca">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Responsabilidade e confiança"
            title="Uma presença institucional construída para credibilidade, clareza e equilíbrio."
            description="A BichoBet nasce com linguagem prudente, sinais de confiança e narrativa compatível com uma marca adulta, tecnológica e comprometida com comunicação responsável."
          />

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#C5963E]/20 bg-[#C5963E]/10">
                      <ShieldCheck className="h-5 w-5 text-[#F6D28E]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.26em] text-[#F6D28E]">Diretriz institucional</div>
                      <h3 className="mt-2 text-2xl font-semibold text-white">Conteúdo orientado por responsabilidade</h3>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {responsibilityItems.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm leading-7 text-[#D4CCBD]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#C5963E]/20 bg-[#C5963E]/10">
                      <Sparkles className="h-5 w-5 text-[#F6D28E]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.26em] text-[#F6D28E]">Ambiente digital</div>
                      <h3 className="mt-2 text-2xl font-semibold text-white">Premium, seguro e pensado para o Brasil</h3>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[26px] border border-white/8 bg-[#0E1A17] p-5">
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "18+ sinalizado",
                        "Copy transparente",
                        "Hierarquia legível",
                        "Pronto para compliance",
                        "Responsivo",
                        "Camada editorial",
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm text-[#E0D7C7]">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
