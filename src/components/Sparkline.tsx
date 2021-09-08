import React from "react";
import { Line } from "react-chartjs-2";
import "../App.css";

interface ISPARKLINEPROPS {
  sparklineD: number[][];
  timeLabels: string[];
  asset: string;
}

const Sparkline = (props: ISPARKLINEPROPS) => {
  const { sparklineD, timeLabels, asset } = props;
  const data = {
    labels: timeLabels,
    datasets: [
      {
        label: ` $${asset}`,
        fill: false,
        lineTension: 0.4,
        backgroundColor: "white",
        borderColor: "white",
        borderWidth: 5,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.1,
        borderJoinStyle: "miter",
        pointBackgroundColor: "black",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "black",
        pointHoverBorderColor: "black",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 2,
        data: sparklineD,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    animation: {
      duration: 3000,
      easing: "easeOutQuart",
    },
    scales: {
      x: {
        offset: true,
        title: {
          display: true,
          text: "Date",
        },
        display: false,

        grid: {
          display: false,
        },
      },
      y: {
        position: "right",
        title: {
          display: true,
          text: "value",
        },
        display: false,

        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    tooltips: {
      mode: "point",
      intersect: false,
      displayColors: false,
      cornerRadius: 5,
      titleFontColor: "white",
      titleFontSize: 16,
      titleFontStyle: "600",
      bodyFontColor: "white",
      bodyFontSize: 12,
      xPadding: 10,
      yPadding: 8,
    },
  };
  return (
    <div className="sparklineContainer">
      <Line data={data} options={options} />
    </div>
  );
};

export default Sparkline;
