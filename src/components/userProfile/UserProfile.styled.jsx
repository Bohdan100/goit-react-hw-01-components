import styled from '@emotion/styled';

export const Profile = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

// UserCardDescription
export const UserCardDescription = styled.div`
  width: 250px;
  padding: 20px 0;
  text-align: center;
  background-color: ${props => props.theme.colors.white};

  border: 1px solid ${props => props.theme.colors.secondaryText};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const UserCardAvatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  border-radius: 70px;

  background-color: ${props => props.theme.colors.antiquewhite};
`;

export const UserCardName = styled.p`
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 1.17;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
`;

export const UserCardTag = styled.p`
  margin-bottom: 5px;

  font-size: 16px;
  line-height: 1.17;
  color: ${props => props.theme.colors.secondaryText};
`;

export const UserCardLocation = styled.p`
  font-size: 16px;
  line-height: 1.17;
  ${props => props.theme.colors.secondaryText};
`;

// StatsList
export const StatsList = styled.ul`
  width: 250px;

  display: flex;
  list-style: none;

  background-color: ${props => props.theme.colors.aliceblue};
`;

// или border: 1px solid ${props => props.theme.colors.secondaryText};
export const StatsItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: ${props => `1px solid ${props.theme.colors.secondaryText}`};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const StatsLabel = styled.span`
  padding-top: 15px;

  font-size: 14px;
  line-height: 1.3;
  color: ${props => props.theme.colors.secondaryText};
`;

export const StatsQuantity = styled.span`
  padding-bottom: 15px;
  font-size: 14px;
  color: ${props => props.theme.colors.black};
  font-weight: 700;
`;
