export interface GalleryImage { src: string; bg?: string }

export interface Product {
  id: number;
  name: string;
  price: number;
  priceDiscount?: number;
  badge?: string;
  category: string;
  brand: string;
  type: string;
  image: string;
  reference: string;
  stars: number;
  rating: number;
  description: string;
  sizes: string[];
  colors: string[];
  images: GalleryImage[];
}

// Fotos dos tênis. Quando exportar do Figma, troque pelos arquivos '/product-shoe.png' (card) e '/product-view.png' (galeria).
const SHOE_IMAGE = '/product-thumb-1.jpeg';
const SHOE_VIEW = '/produc-image-1.jpeg';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';

// ---------- Tênis (iguais ao Figma) ----------
const shoeSizes = ['39', '40', '41', '42', '43'];
const shoeColors = ['#6FEEFF', '#FF6B6B', '#5E5E5E', '#6D70B7'];
const backgrounds = ['#E2E3FF', '#FFE8BC', '#FFC0BE', '#DEC699', '#E8DFCF'];
// Foto do tênis sobre 5 fundos coloridos (como no Figma).
const shoeImages: GalleryImage[] = backgrounds.map((bg) => ({ src: SHOE_VIEW, bg }));

const shoe = (id: number, name: string, price: number, priceDiscount: number | undefined, brand: string, badge?: string): Product => ({
  id, name, price, priceDiscount, badge,
  category: 'Tênis', brand, type: 'Casual',
  image: SHOE_IMAGE,
  reference: '38416711', stars: 4.7, rating: 90,
  description: lorem,
  sizes: shoeSizes, colors: shoeColors, images: shoeImages,
});

// ---------- Outros produtos (fotos direto na pasta public) ----------
interface Item {
  id: number; name: string; price: number; priceDiscount?: number; badge?: string;
  category: string; type: string; slug: string; bg: string;
  sizes: string[]; colors: string[]; reference: string; stars: number; rating: number; description: string;
}

const item = (e: Item): Product => ({
  id: e.id, name: e.name, price: e.price, priceDiscount: e.priceDiscount, badge: e.badge,
  category: e.category, brand: 'Drip Store', type: e.type,
  image: `/${e.slug}-card.jpg`,
  reference: e.reference, stars: e.stars, rating: e.rating, description: e.description,
  sizes: e.sizes, colors: e.colors,
  images: [{ src: `/${e.slug}.jpg`, bg: e.bg }],
});

const jeansSizes = ['38', '40', '42', '44', '46'];

export const products: Product[] = [
  ...Array.from({ length: 8 }, (_, i) => shoe(i + 1, 'K-Swiss V8 - Masculino', 200, 100, 'K-Swiss', i < 2 ? '30% OFF' : undefined)),
  shoe(9, 'Tênis Nike Revolution 6 Next Nature Masculino', 219, undefined, 'Nike'),
  item({ id: 10, name: 'Headphone Over-Ear Bluetooth Prata', price: 349.9, priceDiscount: 279.9, badge: '20% OFF', category: 'Headphones', type: 'Bluetooth',
    slug: 'headphone-max', bg: '#FFFFFF', sizes: [], colors: ['#CCCCCC', '#1F1F1F'], reference: '40010', stars: 4.8, rating: 214,
    description: 'Headphone over-ear com almofadas macias e acabamento metálico. Texto de exemplo: troque pela descrição real do produto.' }),
  item({ id: 11, name: 'Boné Trucker Preto com Bandeira', price: 89.9, category: 'Bonés', type: 'Trucker',
    slug: 'bone-trucker', bg: '#FFFFFF', sizes: ['Único'], colors: ['#1F1F1F'], reference: '40011', stars: 4.6, rating: 128,
    description: 'Boné trucker com frente estruturada e tela na parte de trás. Texto de exemplo: troque pela descrição real do produto.' }),
  item({ id: 12, name: 'Calça Jeans Skinny Azul Masculina', price: 169.9, category: 'Calças', type: 'Jeans',
    slug: 'calca-skinny', bg: '#9F9A9F', sizes: jeansSizes, colors: ['#2F5D9B'], reference: '40012', stars: 4.5, rating: 96,
    description: 'Calça jeans de corte skinny com lavagem azul média. Texto de exemplo: troque pela descrição real do produto.' }),
  item({ id: 13, name: 'Calça Jeans Baggy Azul Claro Masculina', price: 219.9, priceDiscount: 189.9, badge: '14% OFF', category: 'Calças', type: 'Jeans',
    slug: 'calca-baggy', bg: '#BDC0C6', sizes: jeansSizes, colors: ['#6D8FC7'], reference: '40013', stars: 4.7, rating: 72,
    description: 'Calça jeans de corte baggy com lavagem clara. Texto de exemplo: troque pela descrição real do produto.' }),
  item({ id: 14, name: 'Camisa de Linho Manga Curta Off-White', price: 129.9, category: 'Camisetas', type: 'Casual',
    slug: 'camisa-linho', bg: '#C6C1BD', sizes: ['P', 'M', 'G', 'GG'], colors: ['#E8DFCF', '#1F1F1F'], reference: '40014', stars: 4.6, rating: 58,
    description: 'Camisa de manga curta em tecido leve, com botões. Texto de exemplo: troque pela descrição real do produto.' }),
];

// Produtos que aparecem na Home, em "Produtos em alta" (4 colunas x 2 linhas).
const featuredIds = [1, 2, 10, 11, 12, 13, 14, 9];
export const featuredProducts: Product[] = featuredIds.flatMap((id) => products.find((p) => p.id === id) ?? []);

export const homeSlides: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({ src: `/home-slide-${i + 1}.jpeg` }));
