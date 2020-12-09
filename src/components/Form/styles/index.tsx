// DEPENDENCIES
import styled from 'styled-components';

// CONSTANTS
import { colors, mq } from 'constants/theme';

export const Container = styled.form.attrs(() => ({
  className: 'form-container',
}))`
  background-color: ${colors.white};
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px ${colors.shadow};
  margin-bottom: 2.5rem;
  padding: 3rem 2rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 3rem;

  @media screen and (min-width: ${mq.phone}) {
    padding: 4rem;
  }

  @media screen and (min-width: ${mq.tablet}) {
    justify-items: center;
    gap: 4rem;

    margin: auto;
    margin-bottom: 4rem;
    padding: 5rem;
    width: 54rem;
  }
`;

export const Text = styled.p.attrs(() => ({
  className: 'form-text',
}))`
  color: ${colors.darkgrey};
  font-size: 1.4rem;

  @media screen and (min-width: ${mq.desktop}) {
    font-size: 1.6rem;
    width: 50rem;
  }
`;
