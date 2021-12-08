import styled from 'styled-components';

interface FigureProps {
  img: string;
  width: number;
  height?: number;
}

export const Figure = styled.div`
  width: ${(props: FigureProps) => `${props.width}px`};
  min-width: ${(props: FigureProps) => `${props.width}px`};
  height: ${(props: FigureProps) => (props.height ? `${props.height}px` : '100%')};
  background: ${(props: FigureProps) => `
    url(${props.img})`};
  background-size: cover;
  pointer-events: none;
  border-radius: 5px;
`;
