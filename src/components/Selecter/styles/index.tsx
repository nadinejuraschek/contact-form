// DEPENDENCIES
import styled from 'styled-components';

// CONSTANTS
import { colors, mq } from 'constants/theme';

export const Wrapper = styled.label.attrs(() => ({
  className: 'select-wrapper',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  position: relative;

  @media screen and (min-width: ${mq.tablet}) {
    gap: 2.25rem;
    width: 50rem;
  }
`;

export const Label = styled.span.attrs(() => ({
  className: 'select-label'
}))`
  font-size: 1.4rem;
  font-weight: bold;

  @media screen and (min-width: ${mq.desktop}) {
    font-size: 1.6rem;
  }
`;

export const Select = styled.select.attrs(() => ({
  className: 'select'
}))`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${colors.lightgrey};
  font-size: 1.6rem;
  padding-bottom: 5px;
  width: 100%;

  &::placeholder {
    color: ${colors.grey};
  }

  &:focus {
    border: none;
    border-bottom: 2px solid ${colors.lightblue};
    outline: none;
  }

  @media screen and (min-width: ${mq.desktop}) {
    font-size: 1.8rem;
  }
`;

export const Option = styled.option.attrs(() => ({
  className: 'select-option',
}))``;
