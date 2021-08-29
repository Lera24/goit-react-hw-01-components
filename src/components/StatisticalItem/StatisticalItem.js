import PropTypes from 'prop-types';
import css from './StatisticalItem.module.css';

{
  /*Task 2*/
}

function StatisticalItem({ label, percentage }) {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage + '%'}</span>
    </li>
  );
}

StatisticalItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticalItem;
