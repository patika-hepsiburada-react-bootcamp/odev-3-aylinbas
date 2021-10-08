import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [languages, setLanguage] = useState([
    { id: 0, name: "Swift", point: "2", }, { id: 1, name: "TypeScript", point: "5", }, { id: 2, name: "Go", point: "4", }, { id: 3, name: "C#", point: "5", }, { id: 4, name: "JavaScript", point: "0", }, { id: 5, name: "Java", point: "0", }, { id: 6, name: "Python", point: "0", }, { id: 7, name: "C", point: "0", }, { id: 8, name: "C++", point: "0", }

  ]);


  const setLanguagePoint = (id) => {
    const data = languages;
    const index = data.findIndex((language) => language.id === id);

    data[index].point = parseInt(data[index].point) + 1;

    setLanguage([...data]);
  };

  const values = {
    languages,
    setLanguagePoint,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
