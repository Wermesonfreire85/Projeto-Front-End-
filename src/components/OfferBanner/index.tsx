import { Link } from 'react-router-dom';
import './styles.css';

export default function OfferBanner() {
  return (
    <section className="offer">
      <div className="container offer__grid">
        <div className="offer__image">
          <img src="/air-jordan.png" alt="Air Jordan edição de colecionador" onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }} />
        </div>
        <div className="offer__text">
          <span>Oferta especial</span>
          <h2>Air Jordan edição de colecionador</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <Link to="/produtos" className="offer__button">Ver Oferta</Link>
        </div>
      </div>
    </section>
  );
}
