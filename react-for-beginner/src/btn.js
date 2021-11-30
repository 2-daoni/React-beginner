import PropTypes from 'prop-types';
import style from './Btn.module.css';

function Btn({ text }) {
  return <button className={style.btn}>{text}</button>;
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Btn;
