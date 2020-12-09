// STYLED COMPONENTS
import { BgWhite, BgShape, Main, Wrapper } from './styles';

// COMPONENTS
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <BgWhite>
        <BgShape />
      </BgWhite>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
