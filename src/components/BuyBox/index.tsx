import type { ReactNode } from 'react';
import './styles.css';

interface Props {
  name: string;
  brand: string;
  type: string;
  reference: string;
  stars: number;
  rating: number;
  price: number;
  priceDiscount?: number;
  description: string;
  children?: ReactNode;
}

const brl = (v: number) => v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function BuyBox({ name, brand, type, reference, stars, rating, price, priceDiscount, description, children }: Props) {
  const current = priceDiscount ?? price;
  const full = Math.round(stars);

  return (
    <div className="buybox">
      <h1>{name}</h1>
      <p className="buybox__meta">{type} | {brand} | REF:{reference}</p>

      <div className="buybox__rating">
        <span className="buybox__stars" aria-hidden="true">{'★'.repeat(full)}{'☆'.repeat(5 - full)}</span>
        <span className="buybox__score">{stars} ★</span>
        <span className="buybox__count">({rating} avaliações)</span>
      </div>

      <p className="buybox__prices">
        <span className="buybox__currency">R$</span>
        <span className="buybox__price">{brl(current)}</span>
        {priceDiscount !== undefined && <span className="buybox__old">R$ {brl(price)}</span>}
      </p>

      <div className="buybox__desc">
        <span>Descrição do produto</span>
        <p>{description}</p>
      </div>

      {children}
      <button type="button" className="buybox__cta">COMPRAR</button>
    </div>
  );
}
