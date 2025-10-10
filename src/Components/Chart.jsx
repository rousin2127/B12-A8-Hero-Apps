import React from "react";
import Chart from "react-apexcharts";

const Charts = () => {

      const categories = app.ratings.map(r => r.name);
      console.log(categories)
  const counts = app.ratings.map(r => r.count);

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    title: {
      text: "Basic Bar Chart",
      align: "center"
    },
    xaxis: {
            categories: categories,
      title: { text: "Rating" },
    },
        yaxis: {
      title: { text: "Count" },
    },
    colors: ["#00E396"], // optional
  };

  const series = [
    {
      name: "Fruits Sold",
      data: [44, 55, 41, 67, 22]
    }
  ];

  return (
    <div className="p-6">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default Charts;