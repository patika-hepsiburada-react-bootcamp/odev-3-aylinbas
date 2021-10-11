import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Choice from "./Choice";
import { sendSurvey } from "../socketApi";
import questionImg from '../asset/img1.jpg';

function Survey() {
  const { languages } = useLanguage();
  const { selectedChoice } = useLanguage();
  const [disable, setDisable] = React.useState(false);

  const setPoint = (id) => {
    id = parseInt(id);
    setDisable(true);
    sendSurvey("new-survey", id);
  };
  console.log(selectedChoice);
  return (
    <div className="center">
      <h1>What is your favorite programming language?</h1>
      <br />
      <div className="talk-bubble tri-right border btm-right-in">
        <ul>
          {languages.map((item, i) => (
            <Choice key={i} item={item} />
          ))}
        </ul>
      </div>
      <div>     <img className='thinkinImg' src={questionImg} /></div>
      <button
        disabled={disable}
        className={"saveButton"}
        onClick={() => setPoint(selectedChoice)}
      >
        {" "}
        Save{" "}
      </button>
    </div>
  );
}

export default Survey;
