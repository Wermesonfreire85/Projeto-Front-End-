import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/format';
import { onImageError } from '../../utils/images';
import './styles.css';

interface Props {
  id?: number;
  image: string;
  name: string;
  price: number;
  priceDiscount?: number;
  category?: string;
  badge?: string;
}

export default function ProductCard({ id, image, name, price, priceDiscount, category, badge }: Props) {
  // Só os tênis usam uma foto de tênis como reserva; os outros produtos mostram a imagem neutra.
  const fallback = category === 'Tênis' ? '/product-thumb-1.jpeg' : undefined;

  const content = (
    <>
      <div className="card__image">
        {badge && <span className="card__badge">{badge}</span>}
        <img src={image} alt={name} width={292} height={321} onError={(e) => onImageError(e, fallback)} />
      </div>
      {category && <p className="card__category">{category}</p>}
      <p className="card__name">{name}</p>
      <p className="card__prices">
        <span className={priceDiscount ? 'card__old' : 'card__price'}>{formatPrice(price)}</span>
        {priceDiscount && <span className="card__price">{formatPrice(priceDiscount)}</span>}
      </p>
    </>
  );
  return id ? <Link to={`/product/${id}`} className="card">{content}</Link> : <div className="card">{content}</div>;
}
