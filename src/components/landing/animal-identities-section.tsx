"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/shared/section-heading";
import { animalIdentities } from "@/data/site-content";

export function AnimalIdentitiesSection() {
  return (
    <section className="px-4 py-20 md:px-8" id="identidades">
      <div className="container">
        <SectionHeading
          eyebrow="Animais-ícone"
          title="Um sistema de identidade guiado por arquétipos brasileiros."
          description="Inspirados pela memória visual popular e pela fauna nacional, os ícones funcionam como selos editoriais de personalidade, leitura e posicionamento."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {animalIdentities.map((animal, index) => (
            <motion.article
              key={animal.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,30,26,0.95),rgba(8,17,14,0.9))] p-6 shadow-halo transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,150,62,0.18),transparent_30%)]" />
              </div>
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="rounded-full border border-[#C5963E]/25 bg-[#C5963E]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#F6D28E]">
                    Selo {animal.seal}
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-white/12 bg-white/5">
                    <animal.icon className="h-5 w-5 text-[#F6D28E]" />
                  </div>
                </div>
                <h3 className="mt-10 font-display text-3xl text-white">{animal.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#C59A4E]">{animal.subtitle}</p>
                <p className="mt-5 text-sm leading-7 text-[#CEC7B7]">{animal.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
