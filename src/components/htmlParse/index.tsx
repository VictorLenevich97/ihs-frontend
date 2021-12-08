import parse from 'html-react-parser';
import './person.css';

import * as S from './htmlParse.styled';

/* It was decided to store styles for some elements locally, specifically for PERSONS. */

export const HtmlParse = ({ content }: any) => {
  return <S.Container>{parse(String(content))}</S.Container>;
};
