// DEPENDENCIES
import styled from 'styled-components';

// CONSTANTS
import { colors, mq } from 'constants/theme';

export const Wrapper = styled.label.attrs(() => ({ className: 'textarea-wrapper' }))`
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

export const Label = styled.span.attrs(() => ({ className: 'textarea-label' }))`
  font-size: 1.4rem;
  font-weight: bold;

  @media screen and (min-width: ${mq.desktop}) {
    font-size: 1.6rem;
  }
`;

export const CharCount = styled.span.attrs(() => ({ className: 'textarea-label' }))`
  color: ${colors.darkgrey};
  font-size: 1.4rem;
  position: absolute;
  right: 0;
  top: 2px;
`;

export const Textfield = styled.textarea.attrs(() => ({ className: 'textarea', minLength: '2' }))`
  border: none;
  border-bottom: 1px solid ${colors.lightgrey};
  font-size: 1.6rem;
  padding: 5px;
  resize: none;
  word-wrap: break-word;

  &::placeholder {
    color: ${colors.grey};
  }

  &:focus {
    outline: none !important;
    border-bottom: 2px solid ${colors.lightblue};
  }

  @media screen and (min-width: ${mq.desktop}) {
    font-size: 1.8rem;
  }
`;
