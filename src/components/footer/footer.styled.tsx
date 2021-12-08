import styled from 'styled-components';

export const Container = styled.footer`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  background: ${({ theme }) => theme.primaryColor};
  margin-top: 60px;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.8rem;
`;
