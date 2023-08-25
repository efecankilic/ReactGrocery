import { useContext } from 'react';
import LanguageContext, {
  LanguageContextType,
} from '../context/LanguageContext';

type HeaderProps = {
  title: string;
  totalItems: number;
};

// interface Props {
//   title: string;
//   totalItems: number;
// }

const Header = ({ title, totalItems }: HeaderProps) => {
  const { language } = useContext(LanguageContext) as LanguageContextType;
  return (
    <header>
      <h1>Language : {language}</h1>
      <h1>{title}</h1>
      <span>{totalItems}</span>
    </header>
  );
};

export default Header;
