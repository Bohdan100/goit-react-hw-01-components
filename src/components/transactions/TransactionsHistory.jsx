import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TransactionsTableTitle,
  TransactionsTableColumn,
  TransactionsTableCell,
} from './TransactionsHistory.styled';

export const TransactionsHistory = ({ transactions }) => {
  return (
    <TransactionsTable>
      <thead>
        <tr>
          <TransactionsTableTitle>Type</TransactionsTableTitle>
          <TransactionsTableTitle>Amount</TransactionsTableTitle>
          <TransactionsTableTitle>Currency</TransactionsTableTitle>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionsTableColumn key={id}>
            <TransactionsTableCell>{type}</TransactionsTableCell>
            <TransactionsTableCell>{amount}</TransactionsTableCell>
            <TransactionsTableCell>{currency}</TransactionsTableCell>
          </TransactionsTableColumn>
        ))}
      </tbody>
    </TransactionsTable>
  );
};

TransactionsHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
