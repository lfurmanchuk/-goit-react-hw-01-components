import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 0px auto;
  max-width: 600px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px, rgb(0 0 0 / 20%) 0px 2px 1px;
  border-radius: 5px;
  padding: 60px;
  background-color: rgba(217, 213, 213, 0.5);   
`;

export const SectionTitle = styled.h2`
  width: 100%;
  text-align: center;
  color: grey;
  margin-bottom: 20px; 
  text-transform: uppercase;
`;

export const TransactionList = styled.table`
  text-align: center;
  width: 600px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px, rgb(0 0 0 / 20%) 0px 2px 1px;
`;

export const TransactionListHeader = styled.thead`
  background-color: rgb(86 192 222);
  outline: 1px solid rgba(173, 204, 204, 0.281);
  color: white;
  text-transform: uppercase;
`;

export const TransactionListHeaderRow = styled.th`
  padding: 20px;
  width: calc(100% / 3);
`;
export const TransactionListRows = styled.tbody`
  :nth-of-type(odd){
    background-color: white;
  }
`;

export const TransactionListItem = styled.td`
  padding: 8px;
  outline: 1px solid white;
  color: gray;
`;

