import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [languages, setLanguage] = useState([
    { id: 0, name: "Swift", point: "0" },
    { id: 1, name: "TypeScript", point: "0" },
    { id: 2, name: "Go", point: "0" },
    { id: 3, name: "C#", point: "0" },
    { id: 4, name: "JavaScript", point: "0" },
    { id: 5, name: "Java", point: "0" },
    { id: 6, name: "Python", point: "0" },
    { id: 7, name: "C", point: "0" },
    { id: 8, name: "C++", point: "0" },
  ]);
  const [selectedChoice, setSelectedChoice] = useState(0);

  const values = {
    languages,
    selectedChoice,
    setSelectedChoice,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
