export interface SocialLink {
  id: string;
  title: string;
  url: string;
  icon: "instagram" | "tiktok" | "github" | "linkedin" | string;
  published: boolean;
}

/**
 * Configuração centralizada das redes sociais da Gollub.
 * Redes sem URL configurada ou com published: false NUNCA serão renderizadas.
 */
export const socials: SocialLink[] = [
  {
    id: "instagram",
    title: "Instagram",
    url: "",
    icon: "instagram",
    published: false
  },
  {
    id: "tiktok",
    title: "TikTok",
    url: "",
    icon: "tiktok",
    published: false
  },
  {
    id: "github",
    title: "GitHub",
    url: "",
    icon: "github",
    published: false
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "",
    icon: "linkedin",
    published: false
  }
];

/**
 * Retorna apenas redes sociais publicadas e com URL válida
 */
export function getActiveSocials(): SocialLink[] {
  return socials.filter(
    (social) => social.published && social.url && social.url.trim().length > 0
  );
}
