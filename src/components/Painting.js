import PropTypes from 'prop-types';
import defaultImg from '../img/default.jpg';

export default function Painting(props) {
  const { url = defaultImg, title, author, price, quantity } = props;
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Author: <a href={author.url}>{author.tag}</a>
      </p>
      <p>Price:{price} credit</p>
      <p>Доступность: {quantity < 10 ? 'Заканчивается' : 'есть в наличии'}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Painting.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
