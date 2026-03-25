"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { productTabs } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function ProductExperienceSection() {
  const [activeTab, setActiveTab] = useState(productTabs[0]?.id ?? "lobby");
  const currentTab = productTabs.find((tab) => tab.id === activeTab) ?? productTabs[0];

  return (
    <section className="px-4 py-20 md:px-8" id="produto">
      <div className="container">
        <SectionHeading
          eyebrow="Experiência de produto"
          title="Mockups funcionais para demonstrar lobby, áreas, carteira e benefícios."
          description="A landing apresenta uma prévia navegável da proposta, com transições leves e painéis institucionais que simulam uma futura plataforma em escala."
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {productTabs.map((tab) => (
            <Button
              key={tab.id}
              variant={tab.id === activeTab ? "default" : "secondary"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <motion.div
          key={currentTab.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="border-b border-white/10 px-6 py-5">
                <p className="text-xs uppercase tracking-[0.26em] text-[#F6D28E]">{currentTab.eyebrow}</p>
                <h3 className="mt-3 font-display text-3xl text-white">{currentTab.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#CEC7B7]">{currentTab.description}</p>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[26px] border border-white/10 bg-[#0D1B17] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-[#F6D28E]">BichoBet preview</div>
                      <div className="mt-2 text-2xl font-semibold text-white">{currentTab.label}</div>
                    </div>
                    <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#D8D1C2]">UI Mock</div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {currentTab.highlights.map((highlight, index) => (
                      <div
                        key={highlight}
                        className={cn(
                          "rounded-2xl border border-white/8 px-4 py-4 text-sm",
                          index === 0 ? "bg-[#173229] text-white" : "bg-white/5 text-[#D7D0C2]"
                        )}
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 h-56 rounded-[24px] border border-white/8 bg-[linear-gradient(135deg,rgba(197,150,62,0.14),rgba(7,17,14,0.25),rgba(31,79,67,0.18))] p-5">
                    <div className="grid h-full grid-cols-3 gap-3">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="rounded-2xl border border-white/8 bg-white/5" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {currentTab.stats.map((stat) => (
                    <div key={stat.label} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                      <div className="text-xs uppercase tracking-[0.24em] text-[#F6D28E]">{stat.label}</div>
                      <div className="mt-2 font-display text-4xl text-white">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Card>
              <CardContent className="p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[#F6D28E]">Observação</div>
                <p className="mt-4 text-sm leading-7 text-[#D1CABA]">
                  Esta seção demonstra interface, narrativa e clareza visual. Não representa fluxos transacionais reais,
                  cadastro, autenticação, pagamentos ou operações de jogo.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[#F6D28E]">Pronto para evoluir</div>
                <p className="mt-4 text-sm leading-7 text-[#D1CABA]">
                  A estrutura componentizada permite adicionar integrações futuras com backend, CRM, analytics e fluxos
                  institucionais sem refazer a experiência visual.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
