import PropTypes from 'prop-types';
import Painting from './Painting';

export default function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting {...item} />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// url={item.url}
// title={item.title}
// author={item.author}
// price={item.price}
// quantity={item.quantity}
