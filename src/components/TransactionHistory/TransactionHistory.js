import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import Transaction from '../Transaction/Transaction';

{
  /*Task 4*/
}

function TransactionHistory({ items }) {
  return (
    <div>
      <table className={css['transaction-history']}>
        <thead className={css.headline}>
          <tr>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <Transaction
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.exact({
      key: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
