import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./chart.css"

const Chart = ({ historicPrices, chosenSpeed }) => {
  const timeStamps = [];
  const ecoData = [];
  const fastData = [];
  const instantData = [];
  const speedData = []


  historicPrices.forEach((hour) => {
    const date = new Date(hour.timestamp * 1000);
    const hours = date.getHours();
    timeStamps.unshift(`${hours}:00`);
    ecoData.unshift(Math.round(hour.estimates.eco.feeCap));
    fastData.unshift(Math.round(hour.estimates.fast.feeCap));
    instantData.unshift(Math.round(hour.estimates.instant.feeCap));
    speedData.unshift(Math.round(hour.estimates[chosenSpeed].feeCap));
  });

  const data = {
    labels: timeStamps,
    datasets: [
      {
        label: `Gas Price`,
        data: speedData,
        pointStyle: 'none',
        fill: false,
        borderColor: "rgb(23, 23, 23)",
        borderWidth: 2,
        pointerBorderColor: "rgb(23,23,23)",
        tension: 0.1,
      }
    ],
  };

  const options = {
    
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
        legend:{
            labels:{
                pointStyle: 'none'
            }
        }
    },
    elements: {
      point: {
        backgroundColor: 'rgba(23, 23, 23)' 
      },
      rectangle: {
        backgroundColor: 'rgba(0, 123, 255, 0.5)'
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
