import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const TransactionsTableTitle = styled.th`
  width: 120px;
  height: 40px;

  text-align: center;
  border: ${props => `1px solid ${props.theme.colors.blue}`};
  color: ${props => props.theme.colors.aliceblue};
  background-color: ${props => props.theme.colors.blue};
`;

// &:nth-of-type(2n)  =  &:nth-child(2n)
export const TransactionsTableColumn = styled.tr`
  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.lightgray};
  }
`;

export const TransactionsTableCell = styled.td`
  width: 120px;
  height: 40px;

  text-align: center;
  border: 1px solid ${props => props.theme.colors.secondaryText};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.aliceblue};
    background-color: ${props => props.theme.colors.blue};
  }
`;
