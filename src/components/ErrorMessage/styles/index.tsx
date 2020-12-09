// DEPENDENCIES
import styled from 'styled-components';

// CONSTANTS
import { colors } from 'constants/theme';

// ICONS
import { ReactComponent as Alert } from 'assets/icons/alert-circle.svg';

export const Error = styled.div.attrs(() => ({
  className: 'input-error'
}))`
  color: ${colors.red};
  font-size: 1.2rem;
  position: absolute;
  bottom: -2rem;
  left: 0;

  display: flex;
  align-items: center;
`;

export const ErrorIcon = styled(Alert).attrs(() => ({
  className: 'input-error-icon',
}))`
  height: 1.5rem;
  width: 1.5rem;

  margin-right: 0.5rem;

  & #alert {
    stroke: ${colors.red};
  }
`;
