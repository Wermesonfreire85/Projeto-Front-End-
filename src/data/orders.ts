export type OrderStatus = 'Processando' | 'Em transporte' | 'Entregue' | 'Cancelado';

export interface OrderItem {
  productId: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  items: OrderItem[];
}

// Pedidos de exemplo (sem back-end ainda).
export const orders: Order[] = [
  { id: '10234', date: '01/11/2026', status: 'Processando', items: [
    { productId: 9, name: 'Tênis Nike Revolution 6 Next Nature Masculino', size: '41', quantity: 1, price: 219, image: '/product-shoe.png' },
  ] },
  { id: '10198', date: '28/10/2026', status: 'Em transporte', items: [
    { productId: 1, name: 'K-Swiss V8 - Masculino', size: '42', quantity: 2, price: 100, image: '/product-shoe.png' },
  ] },
  { id: '10076', date: '15/10/2026', status: 'Entregue', items: [
    { productId: 2, name: 'K-Swiss V8 - Masculino', size: '40', quantity: 1, price: 100, image: '/product-shoe.png' },
    { productId: 9, name: 'Tênis Nike Revolution 6 Next Nature Masculino', size: '41', quantity: 1, price: 219, image: '/product-shoe.png' },
  ] },
  { id: '09911', date: '02/09/2026', status: 'Entregue', items: [
    { productId: 3, name: 'K-Swiss V8 - Masculino', size: '43', quantity: 1, price: 100, image: '/product-shoe.png' },
  ] },
];
