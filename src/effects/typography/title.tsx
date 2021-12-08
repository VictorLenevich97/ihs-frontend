import styled from 'styled-components';

interface Props {
  center?: boolean;
  color?: string;
  size?: number; // px
  mb?: number;
  fontWeight?: number;
  lineHeight?: number;
}

export const Title = styled.h1<Props>`
  margin: 0;
  margin-bottom: ${props => (props.mb ? `${props.mb}px` : 0)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => (props.color ? props.color : '#4F7752')};
  font-size: ${props => (props.size ? `${props.size}px` : '1.4rem')};
  text-align: ${props => (props.center ? 'center' : 'left')};
  font-weight: ${(props: Props) => props.fontWeight || 700};
  line-height: ${(props: Props) => (props.lineHeight ? `${props.lineHeight}px` : '24px')};
`;
