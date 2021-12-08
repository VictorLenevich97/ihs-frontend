import styled from 'styled-components';
import { Title } from 'effects/typography';

export const RemarksContainer = styled.div`
  position: relative;
`;

export const RemarksTitle = styled(Title)`
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RemarksText = styled.div`
  //disable text formatting because no design
  //white-space: pre-line;
  //text-indent: 10px;
  //line-height: 26px;
  //p {
  //  padding-bottom: 10px;
  //}
`;

export const SearchContainer = styled.div`
  position: absolute;
  right: 0;
  top: -14px;
  max-width: 230px;
  @media (max-width: 576px) {
    position: relative;
    max-width: 100%;
    margin-top: 10px;
  }
`;
