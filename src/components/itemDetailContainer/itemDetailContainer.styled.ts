import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  #row {
    width: 100%;
  }

  #back-link {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    padding-top: 2px;
  }
`;

export const Body = styled.div`
  margin-top: 20px;
`;
