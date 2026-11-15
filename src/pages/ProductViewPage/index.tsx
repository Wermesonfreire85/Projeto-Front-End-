import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import Breadcrumb from '../../components/Breadcrumb';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import ProductDetails from '../../components/ProductDetails';
import { products } from '../../data/products';

export default function ProductViewPage() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  // Relacionados: primeiro os da mesma categoria, depois os demais.
  const others = products.filter((p) => p.id !== product?.id);
  const related = [...others.filter((p) => p.category === product?.category), ...others.filter((p) => p.category !== product?.category)].slice(0, 4);

  return (
    <Layout>
      <div className="container">
        {product ? (
          <>
            <Breadcrumb
              items={[
                { label: 'Home', to: '/' },
                { label: 'Produtos', to: '/produtos' },
                { label: product.category, to: `/produtos?filter=${encodeURIComponent(product.category.toLowerCase())}` },
                { label: product.brand, to: `/produtos?filter=${encodeURIComponent(product.brand.toLowerCase())}` },
                { label: product.name },
              ]}
            />
            {/* key: ao trocar de produto, a galeria e as opções começam do zero */}
            <ProductDetails key={product.id} product={product} />
            <Section title="Produtos Relacionados" titleAlign="left" link={{ text: 'Ver todos →', href: '/produtos' }}>
              <ProductListing products={related} />
            </Section>
          </>
        ) : (
          <p style={{ marginTop: 48 }}>Produto não encontrado.</p>
        )}
      </div>
    </Layout>
  );
}
