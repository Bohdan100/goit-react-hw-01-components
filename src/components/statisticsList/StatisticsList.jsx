import PropTypes from 'prop-types';
import {
  Statistics,
  StatisticsListTitle,
  StatisticsCardList,
  StatisticsCard,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styled';

export const StatisticsList = ({ stats, title }) => {
  return (
    <Statistics>
      {title && <StatisticsListTitle>{title}</StatisticsListTitle>}

      <StatisticsCardList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsCard key={id}>
            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsPercentage>{percentage}</StatisticsPercentage>
          </StatisticsCard>
        ))}
      </StatisticsCardList>
    </Statistics>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
