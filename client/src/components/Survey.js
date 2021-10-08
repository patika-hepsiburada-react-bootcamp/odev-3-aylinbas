import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import Choice from './Choice';

function Survey() {

    const { languages } = useLanguage();

    return (
        <div className="center">
            <h1>
                What is your favorite programming language?
            </h1>
            <ul>
                {languages.map((item, i) => (
                    <Choice key={i} item={item} />
                ))}
            </ul>
        </div>
    )
}

export default Survey
