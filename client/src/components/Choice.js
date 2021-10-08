import React from 'react'
import { useLanguage } from '../context/LanguageContext';

function Choice({ item }) {
    const { setLanguagePoint } = useLanguage();
    const setPoint = (id) => {
        debugger;
        setLanguagePoint(id);
    };

    return <button className="choiceButton" onClick={() => setPoint(item.id)}>{item.name}</button>;
}

export default Choice
