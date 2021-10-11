/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useLanguage } from "../context/LanguageContext";
import { subscribeToNewSurvey } from "../socketApi";

function Charts() {
    var labels = [];
    var data = [];
    const { languages, setLanguage } = useLanguage();
    {
        languages.map((item) => (labels.push(item.name), data.push(item.point)));
    }

    useEffect(() => {
        subscribeToNewSurvey((languages) => {
            setLanguage(languages);
        });
    }, [setLanguage]);

    var state = {
        labels: labels,
        datasets: [
            {
                label: "Point",

                backgroundColor: [
                    "#053547",
                    "#0C4B63",
                    "#1B6B88",
                    "#228199",
                    "#389DB6",
                    "#48B1C4",
                    "#61BDD4",
                    "#7ED7F0",
                    "#BEF1FF",
                ],
                borderWidth: 3,
                borderRadius: 15,
                data: data,
            },
        ],
    };

    return (
        <div className="chartContainer">
            <Bar
                data={state}
                options={{
                    title: {
                        display: true,
                        text: "Voting rate",
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: "right",
                    },
                }}
            />
        </div>
    );
}

export default Charts;
