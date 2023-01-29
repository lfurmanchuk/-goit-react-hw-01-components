import PropTypes from 'prop-types';
import {
  Section,
  SectionTitle,
  TransactionList,
  TransactionListHeader,
  TransactionListHeaderRow,
  TransactionListRows,
  TransactionListItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Section>
      <SectionTitle>Transaction History</SectionTitle>
      <TransactionList>
        <TransactionListHeader>
          <tr>
            <TransactionListHeaderRow>Type</TransactionListHeaderRow>
            <TransactionListHeaderRow>Amount</TransactionListHeaderRow>
            <TransactionListHeaderRow>Currency</TransactionListHeaderRow>
          </tr>
        </TransactionListHeader>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TransactionListRows>
              <tr key={id}>
                <TransactionListItem>{type}</TransactionListItem>
                <TransactionListItem>{amount}</TransactionListItem>
                <TransactionListItem>{currency}</TransactionListItem>
              </tr>
            </TransactionListRows>
          );
        })}
      </TransactionList>
    </Section>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
