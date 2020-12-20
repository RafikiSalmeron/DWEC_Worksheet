google.charts.load("current", {
  packages: ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Año", "Número de ventas", {
      role: "style"
    }],
    ["2017", 3452, "#b87333"],
    ["2018", 1360, "silver"],
    ["2019", 41021, "color:#b87333; opacity: 0.8"],
    ["2020", 13800, "rgb(250, 30, 30)"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"
    },
    2
  ]);

  var options = {
    title: "Titulo",
    width: 1000,
    height: 500,
    backgroundColor: 'grey',
    bar: {
      groupWidth: "95%"
    },
    legend: {
      position: "none"
    },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);
}
