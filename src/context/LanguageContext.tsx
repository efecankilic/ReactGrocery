import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

export enum Language {
  English = 'English',
  French = 'French',
}

export type LanguageContextType = {
  language: Language | null;
  setLanguage: Dispatch<SetStateAction<Language | null>>;
};

type LanguageContextProviderProps = {
  children: ReactNode;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState<Language | null>(Language.English);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageContext;

// import { ReactNode, createContext } from 'react';

// const LanguageContext = createContext<string | null>('English');

// export const LanguageContextProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   return (
//     <LanguageContext.Provider value={'French'}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };
// export default LanguageContext;
