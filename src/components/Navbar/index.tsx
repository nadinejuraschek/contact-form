// @ts-nocheck
// REACT
import { useState } from 'react';

// TRANSLATION
import { useTranslation } from 'react-i18next';

// STYLED COMPONENTS
import { LangWrapper, Logo, Nav } from './styles';

// COMPONENTS
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [langDropdown, setLangDropdown] = useState(false);
  const { t } = useTranslation();

  return (
    <Nav>
      <Logo />
      <LangWrapper>
        <Button
          styleType='language'
          label={t('LANG.TITLE')}
          handleClick={() => setLangDropdown(!langDropdown)}
        />
        {langDropdown && <Dropdown handleClick={setLangDropdown} />}
      </LangWrapper>
    </Nav>
  );
};

export default Navbar;
