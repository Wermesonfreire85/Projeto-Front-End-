export interface HeroSlide {
  src: string;
  tag: string;
  title: string;
  text: string;
  cta: string;
}

// Troque `src` pela imagem de cada banner (exporte do Figma e coloque na pasta public).
const slide: HeroSlide = {
  src: '/hero-nike.png',
  tag: 'Melhores ofertas personalizadas',
  title: 'Queima de stoque Nike 🔥',
  text: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
  cta: 'Ver Ofertas',
};

export const heroSlides: HeroSlide[] = [slide, slide, slide, slide];

export const collections = [
  { src: '/collection-1.png', title: 'Novo drop Supreme' },
  { src: '/collection-2.png', title: 'Coleção Adidas' },
  { src: '/collection-3.png', title: 'Novo Beats Bass' },
];
