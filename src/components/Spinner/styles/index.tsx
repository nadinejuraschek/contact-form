// DEPENDENCIES
import styled from 'styled-components';

// CONSTANTS
import { colors, gradients, mq } from 'constants/theme';

export const Container = styled.div.attrs(() => ({
  className: 'loading-fullscreen-container',
}))`
  background-image: ${gradients.blue__1};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  height: 100vh;
  width: 100vw;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div.attrs(() => ({
  className: 'loading-spinner'
}))`
  height: 100%;
  width: 100%;

  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2s infinite ease-in-out both;

  &:before {
    content: '';
    display: block;
    height: 25%;
    width: 25%;
    background-color: ${colors.white};
    border-radius: 100%;
    animation: sk-chase-dot-before 2s infinite ease-in-out both;
  }

  @keyframes sk-chase-dot {
    80%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-chase-dot-before {
    50% {
      transform: scale(0.4);
    }
    100%,
    0% {
      transform: scale(1);
    }
  }
`;

export const Wrapper = styled.div.attrs(() => ({
  className: 'loading-spinner-dots',
}))`
  height: 4rem;
  width: 4rem;

  position: relative;
  animation: sk-chase 2.5s infinite linear both;

  & div:nth-child(1) {
    animation-delay: -1.1s;
  }
  & div:nth-child(2) {
    animation-delay: -1s;
  }
  & div:nth-child(3) {
    animation-delay: -0.9s;
  }
  & div:nth-child(4) {
    animation-delay: -0.8s;
  }
  & div:nth-child(5) {
    animation-delay: -0.7s;
  }
  & div:nth-child(6) {
    animation-delay: -0.6s;
  }
  & div:nth-child(1):before {
    animation-delay: -1.1s;
  }
  & div:nth-child(2):before {
    animation-delay: -1s;
  }
  & div:nth-child(3):before {
    animation-delay: -0.9s;
  }
  & div:nth-child(4):before {
    animation-delay: -0.8s;
  }
  & div:nth-child(5):before {
    animation-delay: -0.7s;
  }
  & div:nth-child(6):before {
    animation-delay: -0.6s;
  }

  @keyframes sk-chase {
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: ${mq.desktop}) {
    height: 6rem;
    width: 6rem;
  }
`;
