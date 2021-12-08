import styled from 'styled-components';

export const ListItem = styled.li`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  margin: 0 4px;
  border: 2px solid #4f7752;
  outline: 0;
`;

export const SelectedListItem = styled(ListItem)`
  border: 10px solid #4f7752;
  width: 40px;
  border-radius: 50px;
`;
