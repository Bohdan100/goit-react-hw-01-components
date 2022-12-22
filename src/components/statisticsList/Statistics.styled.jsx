import styled from '@emotion/styled';

export const Statistics = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const StatisticsListTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 30px;
  line-height: 1.17;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
`;

export const StatisticsCardList = styled.ul`
  display: flex;
  list-style: none;
`;

// или ${props => `background-color: ${getRangomColor()}`}
export const StatisticsCard = styled.li`
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid ${props => props.theme.colors.secondaryText};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;

  background-color: ${props => `${getRangomColor()}`};
`;
export const StatisticsLabel = styled.span`
  font-size: 16px;
  line-height: 1.17;
  color: ${props => props.theme.colors.white};
`;

export const StatisticsPercentage = styled.span`
  font-size: 20px;
  line-height: 1.17;
  color: ${props => props.theme.colors.white};
`;

// Функция случайного цвета
function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}
function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
