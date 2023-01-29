import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 40px;
  margin: 0;
  width: 340px;
  gap: 30px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px;
  rgb(0 0 0 / 20%) 0px 2px 1px;
  border-radius: 5px;
`;

export const Stats = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'grey';
    }
  }};
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const Name = styled.p`
  font-size: 20px;
`;
