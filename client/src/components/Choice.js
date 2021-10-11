import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function Choice({ item }) {
  const { setSelectedChoice } = useLanguage();

  const handleChange = ({ target }) => setSelectedChoice(target.value);

  return (
    <div className="choiceButton" >
      <input
        type="radio"
        value={item.id}
        name="choice"
        onChange={handleChange}
      />
      <span>{item.name}</span>
    </div>

    // <button className="choiceButton"  onClick={() => setPoint(item.id)}>
    //   {item.name}
    // </button>
  );
}

export default Choice;
