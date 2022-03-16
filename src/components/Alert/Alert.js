import PropTypes from 'prop-types';
import style from './Alert.module.css';

function Alert({ text, type = 'alert' }) {
  return (
    <p role="alert" className={style[type]}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['succes', 'warning', 'error']).isRequired,
};

export default Alert;
