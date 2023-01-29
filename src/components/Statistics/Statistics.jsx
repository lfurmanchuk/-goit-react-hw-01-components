import PropTypes from 'prop-types';
import {
  Section,
  SectionWrap,
  SectionTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsValue,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <SectionWrap>
        {title && <SectionTitle>{title}</SectionTitle>}
        <StatisticsList>
          {stats.map(stat => (
            <StatisticsItem key={stat.id}>
              <StatisticsLabel>{stat.label}</StatisticsLabel>
              <StatisticsValue>{stat.percentage}%</StatisticsValue>
            </StatisticsItem>
          ))}
        </StatisticsList>
      </SectionWrap>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
