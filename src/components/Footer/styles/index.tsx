// DEPENDENCIES
import styled from 'styled-components';

// CONSTANTS
import { colors, mq } from 'constants/theme';

export const Container = styled.footer.attrs(() => ({
  className: 'footer'
}))`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  background-color: transparent;
  padding: 2.4rem;

  @media screen and (min-width: ${mq.tablet}) {
    padding: 2.4rem 4rem;
  }

  @media screen and (min-width: ${mq.large}) {
    justify-self: center;
    width: 120rem;
  }
`;

export const Links = styled.div.attrs(() => ({
  className: 'footer-links'
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

export const PlaceholderLink = styled.a.attrs(() => ({
  className: 'footer-link',
  href: '#',
}))`
  color: ${colors.darkgrey};
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    color: ${colors.white};
    cursor: pointer;
  }

  @media screen and (min-width: ${mq.large}) {
    font-size: 1.4rem;
  }
`;

export const Copyright = styled.p.attrs(() => ({
  className: 'footer-copyright',
}))`
  color: ${colors.darkgrey};
  font-size: 1.2rem;

  @media screen and (min-width: ${mq.large}) {
    font-size: 1.4rem;
  }
`;
