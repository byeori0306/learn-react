import './Card.css';
import Info from './Info'
import Article from './Article'
import Footer from './Footer'

function Card() {
  return (
    <div className="Card">
		<Info />
		<Article />
		<Footer />
    </div>
  );
}

export default Card;
