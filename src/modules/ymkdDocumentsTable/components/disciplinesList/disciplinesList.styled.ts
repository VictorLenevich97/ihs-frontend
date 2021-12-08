import styled from 'styled-components';
import { themeVariables } from 'effects/variables';

const { primaryColor, borderRadius } = themeVariables;

export const Container = styled.div``;

interface ItemProps {
  active?: boolean;
}

export const Item = Object.assign(
  styled.div<ItemProps>`
    margin: 10px 0;
    padding: 10px;
    background: ${({ active }) => (active ? primaryColor : '#fff')};
    border-radius: ${borderRadius};
    border: 2px solid ${primaryColor};

    &:hover {
      cursor: pointer;
      transition: all 0.5s;
    }
  `,
  {
    Content: styled.span<ItemProps>`
      color: ${({ active }) => (active ? 'white' : primaryColor)};
    `,
  },
);
