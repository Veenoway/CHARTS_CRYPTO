import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js/auto";
import { historyOptions } from "../chartConfigs/chartConfig";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("7d");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "7d":
        return day;
      case "30d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      console.log("yeah");
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4",
              pointRadius: 0,
            },
          ],
        },
        options: {
            ...historyOptions,
            },
        });

        // SI JE COMMENT CI DESSOUS ALORS ON PEUX VOIR LE PRXI
      if(week) {
          chartInstance.destroy()
          
      }
    }    
    
  },[]);
console.log(week)
  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="my-0">${detail.current_price.toFixed(2)}</p>
          <p className={detail.price_change_24h < 0 ? "text-danger my-0" : "text-success my-0"}>
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };
  return (
    <div className="bg-white border mt-2 rounded p-3">
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={550} height={250}></canvas>
      </div>

      <div className="chart-button mt-1">
        <button onClick={() => setTimeFormat("7d")}className="btn btn-outline-secondary btn-sm">7d</button>
        <button onClick={() => setTimeFormat("30d")} className="btn btn-outline-secondary btn-sm mx-1">30d</button>
        <button onClick={() => setTimeFormat("1y")} className="btn btn-outline-secondary btn-sm">1y</button>
      </div>
    </div>
  );
};

export default HistoryChart;