// DEPENDENCIES
import styled from 'styled-components';

// CONSTANTS
import { colors, gradients, mq } from 'constants/theme';

// BACKGROUNDS
import { ReactComponent as Shape } from 'assets/shapes/background.svg';

export const BgWhite = styled.div.attrs(() => ({
  className: 'layout-bg'
}))`
  background-color: ${colors.silver};
	background-image: ${gradients.silver__1};
  height: 50vh;
  position: fixed;
    top: 0;
    left: 0;
    right: 0;
  width: 100vw;
  z-index: -2;

  @media screen and (min-width: ${mq.tablet}) {
    background-image: ${gradients.silver__2};
    height: 40vh;
  }

  @media screen and (min-width: ${mq.large}) {
    background-image: ${gradients.silver__3};
  }
`;

export const BgShape = styled(Shape).attrs(() => ({
  className: 'layout-bg-shape'
}))`
  position: fixed;
    top: 50vh;
    left: 0;
    right: 0;
  width: 100vw;
  z-index: -1;

  @media screen and (min-width: ${mq.tablet}) {
    top: 40vh;
  }
`;

export const Wrapper = styled.div.attrs(() => ({
  className: 'layout-wrapper',
}))`
  position: relative;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 7rem minmax(calc(100vh - 18.5rem), max-content) 11.5rem;
`;

export const Main = styled.main.attrs(() => ({
  className: 'layout-main',
}))`
  padding: 0 2.4rem;

  @media screen and (min-width: ${mq.tablet}) {
    padding: 0 4rem;
  }

  @media screen and (min-width: ${mq.large}) {
    justify-self: center;
    width: 120rem;
  }
`;
