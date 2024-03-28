window.onload = function () {
  var chart1 = new CanvasJS.Chart("chartContainer", {
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    exportEnabled: false,
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
      text: "Ton mois en musique",
      fontFamily: "Poppins",
    },
    data: [
      {
        type: "pie",
        startAngle: 270,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: false,
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 51.08, label: "Pop" },
          { y: 27.34, label: "Rock" },
          { y: 10.62, label: "Variété Française" },
          { y: 5.02, label: "Rap" },
          { y: 4.73, label: "Jazz" },
        ],
      },
    ],
  });
  chart1.render();
  var chart2 = new CanvasJS.Chart("chartContainer2", {
    theme: "light2", // "light1", "light2", "dark1"
    animationEnabled: true,
    backgroundColor: "transparent",
    exportEnabled: false,
    title: {
      text: "Ton top 5",
      fontFamily: "Poppins",
    },
    axisX: {
      margin: 2,
      labelPlacement: "inside",
      labelFontColor: "White",
      tickPlacement: "inside",
    },
    axisY2: {
      title: "Temps d'écoute (en h)",
      titleFontSize: 12,
      includeZero: true,
      suffix: "h",
    },
    data: [
      {
        type: "bar",
        yValueFormatString: "#,###.##h",
        indexLabel: "{y}",
        axisYType: "secondary",
        dataPoints: [
          { label: "Learning Colors", y: 4.91},
          { label: "Uptown Funk", y: 4.96 },
          { label: "Wheels on the Bus", y: 5.36 },
          { label: "Phonics Song with Two Words", y: 5.36 },
          { label: "See You Again", y: 5.94 },
          //color: '#3d405b'
        ],
      },
    ],
  });
  chart2.render();
};
