import PropTypes from 'prop-types';
import css from './Transaction.module.css';

{
  /*Task 4*/
}

function Transaction({ type, amount, currency }) {
  return (
    <tr>
      <td className={css.cell}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
