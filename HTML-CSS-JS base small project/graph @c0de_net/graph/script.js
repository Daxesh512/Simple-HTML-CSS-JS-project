const xValues = [100, 200, 300, 400, 500, 600];

new Chart("myChart", {
   type: "line",
   data: {
      labels: xValues,
      datasets: [{
         data: [10, 15, 10, 12, 15, 16],
         borderColor: "red",
         fill: false
      }, {
         data: [10, 11, 12, 11, 12, 10],
         borderColor: "blue",
         fill: false
      }]
   },
   options: {
      legend: { display: false }
   }
});
