// STYLED COMPONENTS
import { BgShape, BgWhite, Main, Wrapper } from './styles';

import Footer from 'components/Footer';
// COMPONENTS
import Navbar from 'components/Navbar';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <Wrapper>
    <BgWhite>
      <BgShape />
    </BgWhite>
    <Navbar />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);

export default Layout;
