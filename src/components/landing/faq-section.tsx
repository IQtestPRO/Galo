import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/site-content";

export function FaqSection() {
  return (
    <section className="px-4 py-20 md:px-8" id="faq">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes com tom claro, seguro e institucional."
          description="Respostas objetivas para apresentar a proposta da marca, reforçar responsabilidade e contextualizar a fase atual do projeto."
        />

        <div className="mt-10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
