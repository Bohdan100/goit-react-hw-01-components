import styled from '@emotion/styled';

export const FriendCatalog = styled.ul`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FriendCatalogItem = styled.li`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  border: ${props => `1px solid ${props.theme.colors.secondaryText}`};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

/* круг - border-radius: 16px; */
/* или border-radius: 50%; */
export const Status = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 16px;
  background-color: ${props => {
    return props.isOnline ? props.theme.colors.green : props.theme.colors.red;
  }};
`;

// ИЛИ switch ПРИ <Status type={isOnline} /> в FriendListItem
// background-color: ${props => {
//   switch (props.type) {
//     case true:
//       return props.theme.colors.green;
//     case false:
//       return props.theme.colors.red;
//     default:
//       return;
//   }
// }};

export const FriendImage = styled.img`
  width: 60px;
  height: 60px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  line-height: 1.17;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
`;
