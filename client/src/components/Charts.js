import React from 'react'
import { Bar } from "react-chartjs-2"
import { useLanguage } from '../context/LanguageContext';

function Charts() {
    const { languages } = useLanguage();
    {
        languages.map((item, i) => (
            console.log("item" + item.name)

        ))
    }
    return (
        <div>
            <Bar>
                data={{
                    labels: {}
                }};
            </Bar>
        </div>
    )
}

export default Charts
