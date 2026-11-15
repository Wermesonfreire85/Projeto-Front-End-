import Logo from '../Logo';
import FooterInfo from '../FooterInfo';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import './styles.css';

const about = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/jobs' },
  { text: 'Meus Pedidos', link: '/pedidos' },
];
const categories = [
  { text: 'Camisetas', link: '/produtos' },
  { text: 'Calças', link: '/produtos' },
  { text: 'Bonés', link: '/produtos' },
  { text: 'Headphones', link: '/produtos' },
  { text: 'Tênis', link: '/produtos' },
];
const contact = [
  { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161', link: '/' },
  { text: '(85) 3051-3411', link: '/' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="footer" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="footer__social">
            <a href="https://facebook.com" aria-label="Facebook"><img src={facebook} alt="" /></a>
            <a href="https://instagram.com" aria-label="Instagram"><img src={instagram} alt="" /></a>
            <a href="https://twitter.com" aria-label="Twitter"><img src={twitter} alt="" /></a>
          </div>
        </div>
        <FooterInfo title="Informações" informations={about} />
        <FooterInfo title="Categorias" informations={categories} />
        <FooterInfo title="Contato" informations={contact} />
      </div>
      <div className="container">
        <hr />
        <p className="footer__copy">© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  );
}
