import React from "react";

import { sendSurvey } from "../socketApi";

function Choice({ item }) {
  const setPoint = (id) => {
    sendSurvey("new-survey", id);
  };

  return (
    <button className="choiceButton" onClick={() => setPoint(item.id)}>
      {item.name}
    </button>
  );
}

export default Choice;
