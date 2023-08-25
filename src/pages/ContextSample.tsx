import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
const ContextSample = () => {
  const lang = useContext(LanguageContext) as string;
  return <div>{lang}</div>;
};

export default ContextSample;
