import type { Product } from '../../data/products';
import Gallery from '../Gallery';
import BuyBox from '../BuyBox';
import ProductOptions from '../ProductOptions';
import './styles.css';

export default function ProductDetails({ product }: { product: Product }) {
  const defaultSize = product.sizes[2] ?? product.sizes[0];
  const defaultColor = product.colors[1] ?? product.colors[0];
  // Só os tênis usam uma foto de tênis como reserva.
  const fallback = product.category === 'Tênis' ? '/produc-image-1.jpeg' : undefined;

  return (
    <div className="details">
      <Gallery images={product.images} showThumbs width="700px" height="570px" radius="4px" fallbackSrc={fallback} />
      <BuyBox {...product}>
        {product.sizes.length > 0 && (
          <div>
            <p className="details__label">Tamanho</p>
            <ProductOptions options={product.sizes} shape="square" radius="4px" type="text" defaultSelected={defaultSize} />
          </div>
        )}
        {product.colors.length > 0 && (
          <div>
            <p className="details__label">Cor</p>
            <ProductOptions options={product.colors} shape="circle" type="color" defaultSelected={defaultColor} />
          </div>
        )}
      </BuyBox>
    </div>
  );
}
