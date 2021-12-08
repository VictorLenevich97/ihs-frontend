import styled from 'styled-components';

interface Props {
  center?: boolean;
  color?: string;
  size?: number; // px
}

export const Text = styled.span`
  color: ${(props: Props) => (props.color ? props.color : '#fff')};
  font-size: ${(props: Props) => (props.size ? `${props.size}px` : '1rem')};
  line-height: 1.8rem;
  text-align: ${(props: Props) => (props.center ? 'center' : 'left')};
`;
