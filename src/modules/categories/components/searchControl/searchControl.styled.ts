import styled from 'styled-components';

import { components } from 'react-select';
import { themeVariables } from '../../../../effects/variables';

export const Container = styled(components.Control)`
  height: 50px;
  border-radius: ${themeVariables.borderRadius} !important;
  border: 2px solid #4f7752 !important;
  box-shadow: none !important;
`;
