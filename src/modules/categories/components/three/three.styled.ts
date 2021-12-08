import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'static/icons/arrow.svg';
import { themeVariables } from '../../../../effects/variables';

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;

  #title {
    cursor: pointer;

    &:hover {
      color: #4f7752;
      transition: 0.3ms;
    }
  }
`;

export const SubTitle = styled.p`
  color: #000;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  line-height: 30px;
  &:hover {
    color: #4f7752;
    transition: 0.3ms;
  }
`;

interface ArrowProps {
  active: number;
}

export const Arrow = styled(ArrowIcon)<ArrowProps>`
  width: 10px;
  transition: ${themeVariables.transition};
  transform: rotate(${({ active }) => !active && '-90deg'});
`;
