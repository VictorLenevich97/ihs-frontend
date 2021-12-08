import styled, { css } from 'styled-components';
import { themeVariables } from '../../effects/variables';

const Time = styled.div`
  border: 2px solid ${themeVariables.primaryColor};
  border-radius: 5px;
  color: ${themeVariables.primaryColor};
  line-height: 20px;
  padding: 5px 10px;
  margin: 0 30px;
  width: 120px;
  text-align: center;
  flex-shrink: 0;
`;

const Title = styled.div`
  margin-right: 30px;
  word-break: break-word;
`;

export const Item = Object.assign(
  styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 5px 0;

    &:nth-child(odd) {
      background-color: rgba(79, 119, 82, 0.2);
    }
  `,
  {
    Time,
    Title,
  },
);

export const NoContent = styled.div`
  margin: 15px 30px;
`;

export const TableContainer = styled.div<{ smallIndents: boolean }>(props => {
  if (props.smallIndents) {
    return css`
      ${NoContent} {
        margin: 15px 0;
      }
      ${Item} {
        margin: 0 -15px;
      }
      ${Time} {
        margin: 5px 15px;
      }
    `;
  }
});
