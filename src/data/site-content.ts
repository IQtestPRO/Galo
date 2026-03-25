import {
  BadgeCheck,
  Bird,
  Crown,
  Gem,
  Landmark,
  Layers3,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Trophy,
  Wallet,
  Waves,
} from "lucide-react";

export const navItems = [
  { href: "#plataforma", label: "Plataforma" },
  { href: "#identidades", label: "Identidades" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#confianca", label: "Confiança" },
  { href: "#faq", label: "FAQ" },
];

export const trustBadges = [
  "18+",
  "Jogo responsável",
  "Ambiente regulado",
  "Tecnologia e transparência",
];

export const metrics = [
  { value: "24h", label: "monitoramento institucional" },
  { value: "100%", label: "copy pensada para o público brasileiro" },
  { value: "6", label: "universos visuais proprietários" },
];

export const heroPanels = [
  {
    title: "Lobby curado",
    description: "Navegação editorial com jornadas pensadas para esportes, jogos, promoções e benefícios.",
    icon: Layers3,
    accent: "from-[#D7B16B]/50 to-transparent",
  },
  {
    title: "Wallet preview",
    description: "Visual de carteira e benefícios desenhado para clareza, governança e leitura rápida.",
    icon: Wallet,
    accent: "from-[#2D6B59]/40 to-transparent",
  },
  {
    title: "Camada institucional",
    description: "Selos, avisos e conteúdo responsável integrados à experiência desde o primeiro scroll.",
    icon: ShieldCheck,
    accent: "from-[#7A5B2C]/40 to-transparent",
  },
];

export const positioningPillars = [
  {
    title: "Brasil, sem caricatura",
    description:
      "A identidade nasce de símbolos nacionais reinterpretados com elegância editorial, contraste premium e precisão digital.",
  },
  {
    title: "Confiança de marca grande",
    description:
      "Cada bloco foi pensado para transmitir governança, estabilidade visual, linguagem clara e sensação real de plataforma séria.",
  },
  {
    title: "Entretenimento com responsabilidade",
    description:
      "A comunicação prioriza transparência, limites conscientes e experiências de pré-lançamento sem apelo abusivo.",
  },
];

export const animalIdentities = [
  {
    name: "Águia",
    subtitle: "Visão elevada",
    description: "Arquétipo para leitura rápida de oportunidades, contexto amplo e clareza de movimento.",
    icon: Bird,
    seal: "01",
  },
  {
    name: "Onça",
    subtitle: "Intensidade controlada",
    description: "Presença marcante, energia contida e estética de liderança silenciosa.",
    icon: Sparkles,
    seal: "02",
  },
  {
    name: "Lobo-guará",
    subtitle: "Estratégia singular",
    description: "Símbolo de inteligência calma, diferenciação e ritmo proprietário.",
    icon: Waves,
    seal: "03",
  },
  {
    name: "Touro",
    subtitle: "Impulso com leitura",
    description: "Combina força de marca, estabilidade visual e direção confiante.",
    icon: Trophy,
    seal: "04",
  },
  {
    name: "Serpente",
    subtitle: "Precisão tática",
    description: "Microdecisões refinadas, camadas invisíveis e sofisticação técnica.",
    icon: TimerReset,
    seal: "05",
  },
  {
    name: "Leão",
    subtitle: "Prestígio institucional",
    description: "Construção de autoridade, selo premium e memorabilidade duradoura.",
    icon: Crown,
    seal: "06",
  },
];

export const differentiators = [
  {
    title: "Experiência fluida",
    description: "Layouts com prioridade para foco, legibilidade e continuidade entre conteúdo, prova de confiança e CTA.",
    icon: Gem,
  },
  {
    title: "Navegação intuitiva",
    description: "Arquitetura enxuta, ancoragem objetiva e blocos que explicam a proposta sem ruído desnecessário.",
    icon: Layers3,
  },
  {
    title: "Identidade brasileira premium",
    description: "Fauna e memória gráfica brasileira reinterpretadas com sofisticação, textura e acabamento contemporâneo.",
    icon: Landmark,
  },
  {
    title: "Segurança e transparência",
    description: "Mensagens institucionais presentes desde o hero, reforçando maturidade e previsibilidade operacional.",
    icon: ShieldCheck,
  },
  {
    title: "Jogo responsável",
    description: "A experiência prioriza maioridade, equilíbrio e comunicação prudente sobre consumo de entretenimento.",
    icon: BadgeCheck,
  },
  {
    title: "Tecnologia confiável",
    description: "Componentização, performance, SEO básico e estrutura pronta para evoluir com governança de produto.",
    icon: Sparkles,
  },
  {
    title: "Suporte humanizado",
    description: "Tom de marca acessível, premium e brasileiro, sem linguagem agressiva ou promessas indevidas.",
    icon: Waves,
  },
  {
    title: "Clareza para retenção",
    description: "Design editorial orientado por contraste, blocos curtos e hierarquia que facilita retorno e leitura.",
    icon: Gem,
  },
];

export const productTabs = [
  {
    id: "lobby",
    label: "Lobby visual",
    eyebrow: "Curadoria dinâmica",
    title: "Uma recepção pensada como vitrine editorial",
    description:
      "Um lobby que organiza experiências, conteúdo institucional e rotas de descoberta com sensação de marca licenciada e tecnologia brasileira.",
    highlights: ["Destaques curados", "Feed de campanhas", "Leitura rápida em mobile"],
    stats: [
      { label: "Zonas de navegação", value: "04" },
      { label: "Sinais institucionais", value: "12" },
      { label: "Prioridade mobile", value: "Alta" },
    ],
  },
  {
    id: "areas",
    label: "Esportes e jogos",
    eyebrow: "Arquitetura clara",
    title: "Módulos preparados para múltiplas jornadas",
    description:
      "Estrutura visual para áreas temáticas, campanhas e experiências de entretenimento, sempre com contexto, separação limpa e transparência.",
    highlights: ["Seções modulares", "Cards responsivos", "Padrões escaláveis"],
    stats: [
      { label: "Coleções", value: "08" },
      { label: "Padrões de card", value: "06" },
      { label: "Tempo de leitura", value: "Baixo" },
    ],
  },
  {
    id: "wallet",
    label: "Carteira e benefícios",
    eyebrow: "Governança visual",
    title: "Clareza para histórico, saldo exibido e perks",
    description:
      "Um preview institucional de carteira com blocos organizados, linguagem de confiança e espaço para benefícios, histórico e relacionamento.",
    highlights: ["Resumo consolidado", "Perks em destaque", "Componentes reutilizáveis"],
    stats: [
      { label: "Blocos de status", value: "05" },
      { label: "Padrões de destaque", value: "03" },
      { label: "Sinal de confiança", value: "Forte" },
    ],
  },
  {
    id: "revshare",
    label: "Benefícios e revshare",
    eyebrow: "Relacionamento premium",
    title: "Uma camada de valor que conversa com comunidade",
    description:
      "Área dedicada a fidelização, convites e vantagens, com visual de alto padrão e explicações curtas para crescimento de marca.",
    highlights: ["Painel de vantagens", "Convites e convênios", "Comunicação editorial"],
    stats: [
      { label: "Camadas de benefício", value: "03" },
      { label: "Tom institucional", value: "Consistente" },
      { label: "Pronto para expansão", value: "Sim" },
    ],
  },
];

export const responsibilityItems = [
  "Comunicação destinada exclusivamente a maiores de 18 anos.",
  "Mensagens orientadas por equilíbrio, transparência e limites conscientes.",
  "Ambiente digital pensado para previsibilidade visual, linguagem clara e sinais institucionais permanentes.",
  "Estrutura pronta para evoluir com compliance, governança e boas práticas de mercado.",
];

export const faqItems = [
  {
    question: "O que é a BichoBet?",
    answer:
      "BichoBet é uma proposta de marca brasileira de entretenimento digital com posicionamento premium, linguagem institucional e foco em experiência responsável.",
  },
  {
    question: "A plataforma é voltada para maiores de idade?",
    answer:
      "Sim. Toda a comunicação da marca considera público adulto e reforça a importância de decisões conscientes e entretenimento responsável.",
  },
  {
    question: "O que significa jogo responsável na proposta da marca?",
    answer:
      "Significa priorizar limites, transparência, informação clara e uma relação equilibrada com o entretenimento digital, sem promessas exageradas.",
  },
  {
    question: "Como a marca trata segurança e transparência?",
    answer:
      "Por meio de copy institucional, arquitetura visual confiável, sinais permanentes de responsabilidade e uma proposta tecnológica orientada à clareza.",
  },
  {
    question: "A identidade é inspirada na cultura brasileira?",
    answer:
      "Sim. A marca reinterpreta fauna, memória gráfica e símbolos nacionais com acabamento elegante, sem caricatura e sem exageros visuais.",
  },
  {
    question: "Quando será o lançamento?",
    answer:
      "A fase atual é de posicionamento, refinamento de produto e formação da lista de espera. As próximas atualizações serão compartilhadas com a comunidade inscrita.",
  },
];
