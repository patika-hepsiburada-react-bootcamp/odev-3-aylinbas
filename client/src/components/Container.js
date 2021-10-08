import React from "react";
import { useLanguage, useSurvey } from "../context/LanguageContext";
import Charts from "./Charts";
import Survey from "./Survey";

function Container() {
  const data = useLanguage();

  return <div>
    <Survey />
    <Charts />
  </div>;
}

export default Container;
