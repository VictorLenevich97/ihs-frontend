import styled from 'styled-components';

interface Props {
  center?: boolean;
  color?: string;
  size?: number; // px
  lineHeight?: number;
  lineClamp?: number;
  fontWeight?: number;
}

export const Paragraph = styled.p`
  color: ${(props: Props) => (props.color ? props.color : '#000')};
  font-size: ${(props: Props) => (props.size ? `${props.size}px` : '1rem')};
  font-weight: ${(props: Props) => (props.fontWeight ? props.fontWeight : '500')};
  text-align: ${(props: Props) => (props.center ? 'center' : 'left')};
  line-height: ${(props: Props) => (props.lineHeight ? `${props.lineHeight}px` : '2rem')};
  display: -webkit-box;
  -webkit-line-clamp: ${(props: Props) => (props.lineClamp ? props.lineClamp : 'auto')};
  -webkit-box-orient: vertical;
  overflow-y: hidden;
`;
