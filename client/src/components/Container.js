import React from "react";
import { useSurvey } from "../context/SurveyContext";

function Container() {
  const data = useSurvey();
  console.log(data);
  return <div>Container</div>;
}

export default Container;
