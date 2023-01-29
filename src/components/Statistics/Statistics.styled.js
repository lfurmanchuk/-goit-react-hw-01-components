import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 0px auto;
  margin-bottom: 60px;
  max-width: 400px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px, rgb(0 0 0 / 20%) 0px 2px 1px;
  border-radius: 5px;
  padding: 60px;
  background-color: rgba(217, 213, 213, 0.5); 
`;

export const SectionWrap = styled.div`
   padding-top: 20px;
   background-color: white;
   box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px, rgb(0 0 0 / 20%) 0px 2px 1px;
   border-radius: 5px;
`;

export const SectionTitle = styled.h2`
  width: 100%;
  text-align: center;
  color: grey;
  margin-bottom: 20px; 
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  row-gap: 8px;
  padding: 10px;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`.padEnd(
      7,
      '0'
    );
  }};
`;

export const StatisticsLabel = styled.span`
  color: white;
  font-size: 18px;
`;
export const StatisticsValue = styled.span`
  color: white;
  font-size: 20px;
`;