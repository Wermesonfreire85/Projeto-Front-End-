import { Link } from 'react-router-dom';

export default function FooterInfo({ title, informations = [] }: { title: string; informations?: { text: string; link: string }[] }) {
  return (
    <div className="footer-info">
      <h4>{title}</h4>
      <ul>
        {informations.map((info) => (
          <li key={info.text}><Link to={info.link}>{info.text}</Link></li>
        ))}
      </ul>
    </div>
  );
}
