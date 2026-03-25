"use client";

import { motion } from "framer-motion";
import { ChevronRight, Shield, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { heroPanels, metrics, trustBadges } from "@/data/site-content";
import { WaitlistForm } from "@/components/landing/waitlist-form";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,150,62,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(32,76,66,0.22),transparent_28%)]" />
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge>Entretenimento digital com assinatura brasileira</Badge>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] text-white md:text-7xl"
            >
              Prestígio nacional.
              <span className="block bg-gradient-to-r from-[#F6D28E] via-[#EAD7AE] to-[#C5963E] bg-clip-text text-transparent">
                Tecnologia pronta para estreia.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-[#D3CCBE] md:text-xl"
            >
              BichoBet reimagina raízes cariocas com elegância contemporânea, atmosfera licenciada e uma linguagem
              visual feita para confiança, responsabilidade e presença de marca.
            </motion.p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#waitlist">
                <Button size="lg">Entrar na lista de espera</Button>
              </a>
              <a href="#plataforma">
                <Button size="lg" variant="secondary">
                  Conhecer a plataforma
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#E8E0CF]"
                >
                  <Shield className="h-4 w-4 text-[#F6D28E]" />
                  {badge}
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-[22px] border border-white/8 bg-white/5 p-4">
                  <div className="font-display text-3xl text-white">{metric.value}</div>
                  <div className="mt-2 text-sm text-[#C7C0B1]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <Card className="overflow-hidden border-[#C5963E]/15 bg-[linear-gradient(180deg,rgba(14,28,24,0.95),rgba(7,17,14,0.92))]">
              <CardContent className="p-0">
                <div className="border-b border-white/8 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#F6D28E]">Preview institucional</p>
                      <h3 className="mt-2 font-display text-3xl text-white">BichoBet Platform Deck</h3>
                    </div>
                    <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#D6CEBE]">
                      Experience Preview
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 p-6 md:grid-cols-3">
                  {heroPanels.map((panel, index) => (
                    <motion.div
                      key={panel.title}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.18 + index * 0.1 }}
                      className="rounded-[22px] border border-white/10 bg-white/5 p-4"
                    >
                      <div className={`h-28 rounded-[18px] bg-gradient-to-br ${panel.accent} to-transparent`} />
                      <panel.icon className="mt-4 h-5 w-5 text-[#F6D28E]" />
                      <h4 className="mt-3 text-base font-semibold text-white">{panel.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-[#C9C2B4]">{panel.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="grid gap-4 border-t border-white/8 px-6 py-5 md:grid-cols-[1fr_0.92fr]">
                  <div className="rounded-[22px] border border-white/8 bg-[#0E1B18] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.24em] text-[#F6D28E]">Linha editorial</span>
                      <Sparkles className="h-4 w-4 text-[#C5963E]" />
                    </div>
                    <div className="mt-4 grid gap-3">
                      {["Esportes em destaque", "Jogos selecionados", "Campanhas e benefícios", "Segurança e responsabilidade"].map(
                        (item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-[#DED6C7]"
                          >
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <WaitlistForm />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
