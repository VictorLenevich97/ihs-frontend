import styled from 'styled-components';

import { themeVariables } from '../../../../effects/variables';

export const Container = styled.div`
  display: flex;
  max-height: 190px;
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: ${themeVariables.borderRadius};
  color: #fff;
  background: ${({ theme }) =>
    `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%), ${theme.primaryColor}`};

  &:hover {
    transition: all 1s;
    background: ${({ theme }) =>
      `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), ${theme.primaryColor}`};
  }
`;

export const DefaultLogoWrapper = styled.div`
  min-width: 330px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  margin-left: 25px;
  padding-right: 20px;
  width: calc(100% - 330px);

  #card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
