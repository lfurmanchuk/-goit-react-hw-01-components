import styled from '@emotion/styled';

export const Section = styled.section`
  margin: auto;
  margin-bottom: 60px;
  padding: 60px;
  width: 400px;
  background-color: rgba(217, 213, 213, 0.5);
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  border-radius: 5px;
`;

export const FriendListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const FriendTitle = styled.h2`
  text-align: center;
  color: grey;
  margin-bottom: 20px;
`;
