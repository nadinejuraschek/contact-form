// DEPENDENCIES
import styled, { css } from 'styled-components';

// CONSTANTS
import { colors, mq } from 'constants/theme';

// ICONS
import { ReactComponent as Globe } from 'assets/icons/globe.svg';

export const Primary = styled.button.attrs(() => ({
  className: 'primary-btn',
}))`
  background-color: ${colors.darkblue};
  border: 2px solid ${colors.darkblue};
  border-radius: 4px;
  box-shadow: 0 2px 4px ${colors.shadow};
  color: ${colors.white};
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.5rem 1rem;

  height: 4rem;
  width: 100%;

  ${props =>
    props.disabled &&
    css`
      background-color: ${colors.grey};
      border: 2px solid ${colors.grey};
    `};

  &:hover {
    box-shadow: 0 3px 6px ${colors.hoverShadow};
    cursor: pointer;

    ${props =>
      props.disabled &&
      css`
        cursor: not-allowed;
      `};
  }

  @media screen and (min-width: ${mq.phone}) {
    justify-self: center;
    width: 15rem;
  }
`;

export const Secondary = styled.button.attrs(() => ({
  className: 'secondary-btn',
}))`
  background-color: ${colors.white};
  border: 2px solid ${colors.darkblue};
  border-radius: 4px;
  box-shadow: 0 2px 4px ${colors.shadow};
  color: ${colors.darkblue};
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.5rem 1rem;

  height: 4rem;
  width: 100%;

  ${props =>
    props.disabled &&
    css`
      background-color: ${colors.grey};
      border: 2px solid ${colors.grey};
    `};

  &:hover {
    box-shadow: 0 3px 6px ${colors.hoverShadow};
    cursor: pointer;

    ${props =>
      props.disabled &&
      css`
        cursor: not-allowed;
      `};
  }

  @media screen and (min-width: ${mq.phone}) {
    justify-self: center;
    width: 15rem;
  }
`;

export const Language = styled.button.attrs(() => ({
  className: 'lang-btn',
}))`
  background-color: ${colors.blue_transparent};
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px ${colors.shadow};
  font-size: 1.4rem;
  padding: 0.7rem 1rem;

  height: 4rem;
  width: 13rem;

  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled(Globe).attrs(() => ({
  className: 'btn-icon'
}))`
  height: 2.5rem;
  width: 2.5rem;

  & #globe {
    stroke: ${colors.darkgrey};
  }
`;

export const Label = styled.span.attrs(() => ({
  className: 'btn-label'
}))`
  margin-left: 1.25rem;
`;
