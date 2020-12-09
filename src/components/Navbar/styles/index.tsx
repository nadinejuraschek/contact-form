// DEPENDENCIES
import styled from 'styled-components';

// CONSTANTS
import { colors, mq } from 'constants/theme';

// ICONS
import { ReactComponent as Coffee } from 'assets/icons/coffee.svg';

export const Nav = styled.nav.attrs(() => ({
  className: 'navbar'
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2.4rem;

  @media screen and (min-width: ${mq.tablet}) {
    padding: 0 4rem;
  }

  @media screen and (min-width: ${mq.large}) {
    justify-self: center;
    width: 120rem;
  }
`;

export const Logo = styled(Coffee).attrs(() => ({
  className: 'logo'
}))`
  height: 3.5rem;
  width: 3.5rem;

  & #coffee {
    stroke: ${colors.darkgrey};
  }
`;

export const LangWrapper = styled.div.attrs(() => ({
  className: 'header-lang-wrapper',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  position: relative;
`;
