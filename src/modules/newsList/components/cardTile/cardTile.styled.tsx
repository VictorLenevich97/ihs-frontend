import styled from 'styled-components';
import { themeVariables } from '../../../../effects/variables';

interface ContainerProps {
  img?: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  padding: 10px 10px 20px 10px;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  color: #fff;
  border-radius: ${themeVariables.borderRadius};
  background: ${({ img }) =>
    img
      ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
    url(${img}), ${themeVariables.primaryColor}`
      : `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(./logo_army.png), ${themeVariables.primaryColor}`};
  background-repeat: no-repeat;
  background-size: ${(props: ContainerProps) => (props.img ? 'cover' : 'auto')};
  background-position: ${(props: ContainerProps) => (props.img ? 'center' : 'center 30px')};

  #title {
    max-width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
    line-height: 1.2rem;
  }

  #content {
    transition: opacity 1s ease-out;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }

  #logo_army {
    margin-bottom: 20px;
  }

  &:hover {
    transition: all 1s;
    background: ${({ img }) =>
      img
        ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%),
    url(${img}), #4f7752`
        : `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(./logo_army.png), ${themeVariables.primaryColor}`};
    background-repeat: no-repeat;
    background-size: ${(props: ContainerProps) => (props.img ? 'cover' : 'auto')};
    background-position: ${(props: ContainerProps) => (props.img ? 'center' : 'center 30px')};

    #content {
      opacity: 1;
      height: auto;
    }
  }
`;
