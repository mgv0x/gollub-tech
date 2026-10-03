export interface BioLink {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: "app" | "project" | "social" | "website" | "other";
  icon?: string;
  image?: string;
  featured?: boolean;
  published: boolean;
  order: number;
  badge?: string;
  buttonText?: string;
  category?: "apps" | "projects" | "social" | "links";
}

/**
 * Sistema centralizado de links da Bio da Gollub.
 * Para adicionar um novo item no futuro, basta incluir o objeto abaixo com published: true.
 * A página é alimentada automaticamente a partir desta lista.
 */
export const bioLinks: BioLink[] = [
  {
    id: "auto-em-dia",
    title: "Auto em Dia",
    description: "Seu carro cuidado, sem esquecer de nada.",
    url: "https://play.google.com/store/apps/details?id=com.gollub.autoemdia&pli=1",
    type: "app",
    icon: "/assets/auto-em-dia-icon.png",
    image: "/assets/auto-em-dia-screen.png",
    featured: true,
    published: true,
    order: 1,
    badge: "Aplicativo Oficial",
    buttonText: "BAIXAR NA GOOGLE PLAY",
    category: "apps"
  },
  // --- Futuros Itens Preparados (Não serão exibidos até published: true) ---
  {
    id: "briqueando",
    title: "Briqueando!",
    description: "Compre, venda e troque com praticidade na sua região.",
    url: "",
    type: "app",
    published: false,
    order: 2,
    buttonText: "EM BREVE",
    category: "apps"
  },
  {
    id: "gollub-monitor",
    title: "Gollub Monitor",
    description: "Infraestrutura IoT contínua de monitoramento e telemetria térmica.",
    url: "",
    type: "project",
    published: false,
    order: 3,
    buttonText: "CONHECER PROJETO",
    category: "projects"
  },
  {
    id: "github",
    title: "GitHub",
    description: "Repositórios e projetos de tecnologia desenvolvidos pela Gollub.",
    url: "https://github.com/gollub",
    type: "social",
    published: false,
    order: 4,
    category: "social"
  }
];

/**
 * Função utilitária para obter os links ativos e ordenados
 */
export function getActiveBioLinks(): BioLink[] {
  return bioLinks
    .filter((link) => link.published && Boolean(link.url || link.title))
    .sort((a, b) => a.order - b.order);
}
