import React from 'react'
import { Bar } from "react-chartjs-2"
import { useLanguage } from '../context/LanguageContext';

function Charts() {
    var labels = [];
    var data = [];
    const { languages } = useLanguage();
    {
        languages.map((item, i) => (
            console.log("item" + item.name),
            labels.push(item.name),
            data.push(item.point)

        ))
    }
    debugger;
    var state = {
        labels: labels,
        datasets: [
            {
                label: 'Point',
                backgroundColor: '#0B4C64',
                borderColor: '#062632',
                borderWidth: 3,
                data: data
            }
        ]
    }

    return (
        <div>
            <Bar
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Voting rate',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    );
}

export default Charts
