import PropTypes from 'prop-types';
import { Section, SectionTitle, StatisticsList, StatisticsItem, StatisticsLabel, StatisticsValue } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
    return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem
            key={stat.id}
        >
            <StatisticsLabel>{stat.label}</StatisticsLabel>
            <StatisticsValue>{stat.percentage}%</StatisticsValue>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </Section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
  ).isRequired
}