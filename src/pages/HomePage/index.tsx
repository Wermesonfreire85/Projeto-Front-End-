import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import CategoryList from '../../components/CategoryList';
import OfferBanner from '../../components/OfferBanner';
import { featuredProducts } from '../../data/products';
import { heroSlides, collections } from '../../data/home';
import './styles.css';

export default function HomePage() {
  return (
    <Layout>
      <div className="home__hero-bg">
        <Gallery
          className="home__hero"
          images={heroSlides}
          width="1440"
          height="681"
          showArrows={false}
          showDots
          renderSlide={(slide) => (
            <div className="hero">
              <div className="hero__text">
                <span>{slide.tag}</span>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <Link to="/produtos" className="hero__button">{slide.cta}</Link>
              </div>
              <div className="hero__image">
                <img src={slide.src} alt="" onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }} />
              </div>
            </div>
          )}
        />
      </div>

      <div className="container">
        <Section title="Coleções em destaque" titleAlign="left">
          <div className="home__collections">
            {collections.map((c) => (
              <div key={c.src} className="collection">
                <img src={c.src} alt={c.title} />
                <span className="collection__badge">30% OFF</span>
                <Link to="/produtos" className="collection__button">Comprar</Link>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Coleções em destaque" titleAlign="center">
          <CategoryList />
        </Section>

        <Section title="Produtos em alta" titleAlign="left" link={{ text: 'Ver todos →', href: '/produtos' }}>
          <ProductListing products={featuredProducts} />
        </Section>
      </div>

      <OfferBanner />
    </Layout>
  );
}
