import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="px-4 pb-20 pt-8 md:px-8">
      <div className="container">
        <div className="rounded-[36px] border border-[#C5963E]/20 bg-[linear-gradient(135deg,rgba(197,150,62,0.16),rgba(7,17,14,0.92),rgba(23,62,53,0.72))] px-6 py-12 shadow-velvet md:px-10 md:py-14">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#F6D28E]">BichoBet</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-white md:text-6xl">
              A próxima assinatura premium do entretenimento digital brasileiro.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#E2DACB] md:text-lg">
              Entre na lista de espera para acompanhar a evolução da identidade, da plataforma e da estreia pública da
              marca com acesso antecipado a novidades e bastidores selecionados.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#waitlist">
                <Button size="lg">
                  Entrar na lista de espera
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#plataforma">
                <Button size="lg" variant="secondary">
                  Revisitar a plataforma
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
