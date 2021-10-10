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
          "#000007",
          "#001421",
          "#002836",
          "#003E4D",
          "#035665",
          "#235F6E",
          "#448C9E",
          "#76C4DA",
          "#A7E7F8",
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
