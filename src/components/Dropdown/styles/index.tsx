// DEPENDENCIES
import styled from 'styled-components';

// CONSTANTS
import { colors } from 'constants/theme';

// ICONS
import { ReactComponent as DE } from 'assets/icons/de.svg';
import { ReactComponent as EN } from 'assets/icons/en.svg';

export const Blur = styled.div.attrs(() => ({
  className: 'dropdown-blur',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${colors.white};
  border-radius: 4px;
  opacity: 95%;
  position: absolute;
  top: 4.5rem;
  height: 8rem;
  width: 13rem;
`;

export const Container = styled.div.attrs(() => ({
  className: 'dropdown-container',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 4px;
  box-shadow: 0 2px 4px ${colors.shadow};
  overflow: hidden;
  position: absolute;
  top: 4.5rem;
  width: 13rem;
`;

export const Item = styled.div.attrs(() => ({
  className: 'dropdown-item',
}))`
  font-size: 1.4rem;
  height: 4rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;

  &:hover {
    background-color: ${colors.blue_transparent_light};
    cursor: pointer;
  }
`;

export const German = styled(DE).attrs(() => ({
  className: 'dropdown-icon-de',
}))`
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
`;

export const English = styled(EN).attrs(() => ({
  className: 'dropdown-icon-en',
}))`
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
`;

export const Label = styled.span.attrs(() => ({
  className: 'dropdown-label',
}))`
  margin-left: 1.25rem;
`;
