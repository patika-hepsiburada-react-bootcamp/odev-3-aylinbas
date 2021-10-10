import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Choice from "./Choice";
import { subscribeToNewSurvey } from "../socketApi";

function Survey() {
  const { languages, setLanguage } = useLanguage();

  //   useEffect(() => {
  //     subscribeToNewSurvey((languages) => {
  //       debugger;
  //       setLanguage([...languages]);
  //     });
  //   }, []);

  return (
    <div className="center">
      <h1>What is your favorite programming language?</h1>
      <ul>
        {languages.map((item, i) => (
          <Choice key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Survey;
