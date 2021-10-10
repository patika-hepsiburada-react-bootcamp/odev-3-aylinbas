import Charts from "./Charts";
import Survey from "./Survey";
import { connectSocket, subscribeToNewSurvey } from "../socketApi";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function Container() {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    connectSocket();
    subscribeToNewSurvey((data) => {
      console.log(data);
      setLanguage([...data]);
    });
    connectSocket();
  }, [setLanguage]);
  return (
    <div>
      <Survey />
      <br />
      <br />
      <Charts />
    </div>
  );
}

export default Container;
