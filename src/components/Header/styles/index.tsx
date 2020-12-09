// DEPENDENCIES
import styled from 'styled-components';

// CONSTANTS
import { mq } from 'constants/theme';

export const Container = styled.header.attrs(() => ({
  className: 'header-container',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;

  margin: 2rem 0 3.5rem;

  @media screen and (min-width: ${mq.phone}) {
    margin: 4rem 0 6.5rem;
  }

  @media screen and (min-width: ${mq.tablet}) {
    margin: 3.5rem 0 6rem;
  }

  @media screen and (min-width: ${mq.large}) {
    margin: 4rem 0 7.5rem;
  }
`;

export const Title = styled.h1.attrs(() => ({
  className: 'header-title'
}))`
  font-size: 3.9rem;
  font-weight: bold;
  line-height: 1.4;

  @media screen and (min-width: ${mq.tablet}) {
    font-size: 4rem;
    text-align: center;
  }

  @media screen and (min-width: ${mq.desktop}) {
    font-size: 4.1rem;
  }
`;

export const Caption = styled.p.attrs(() => ({
  className: 'header-caption'
}))`
  font-size: 1.8rem;
  line-height: 1.4;

  @media screen and (min-width: ${mq.tablet}) {
    align-self: center;
    font-size: 1.9rem;
    max-width: 80%;
    text-align: center;
  }

  @media screen and (min-width: ${mq.desktop}) {
    font-size: 2rem;
  }
`;
