import { createContext, useContext, useState } from "react";

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [survey, setSurvey] = useState([]);

  const values = {
    survey,
    setSurvey,
  };

  return (
    <SurveyContext.Provider value={values}>{children}</SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);
