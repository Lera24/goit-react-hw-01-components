import PropTypes from 'prop-types';
import css from './Statistical.module.css';
import StatisticsTitle from '../StatisticsTitle/StatisticsTitle';
import StatisticalItem from '../StatisticalItem/StatisticalItem';

{
  /*Task 2*/
}

function Statistical({ title, stats }) {
  return (
    <section className={css.statistics}>
      <StatisticsTitle title={title} />
      <ul className={css['stat-list']}>
        {stats.map(stat => {
          return (
            <StatisticalItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
}

Statistical.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistical;
