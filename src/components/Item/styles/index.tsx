// DEPENDENCIES
import styled from 'styled-components';

// CONSTANTS
import { colors, mq } from 'constants/theme';

export const Wrapper = styled.div.attrs(() => ({
  className: 'preview-item',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;

  @media screen and (min-width: ${mq.tablet}) {
    gap: 1.5rem;
    width: 50rem;
  }
`;

export const Label = styled.div.attrs(() => ({
  className: 'preview-label',
}))`
  font-size: 1.4rem;
  font-weight: bold;

  @media screen and (min-width: ${mq.desktop}) {
    font-size: 1.6rem;
  }
`;

export const Result = styled.p.attrs(() => ({
  className: 'preview-item-result',
}))`
  color: ${colors.darkgrey};
  font-size: 1.4rem;
  line-height: 1.5;
  word-wrap: break-word;

  @media screen and (min-width: ${mq.desktop}) {
    font-size: 1.6rem;
  }
`;
