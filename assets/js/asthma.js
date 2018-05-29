var es_ES = {
  "decimal": ",",
  "thousands": ".",
  "grouping": [3],
  "currency": ["€", ""],
  "dateTime": "%a %b %e %X %Y",
  "date": "%d/%m/%Y",
  "time": "%H:%M:%S",
  "periods": ["AM", "PM"],
  "days": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
  "shortDays": ["Dom", "Lun", "Mar", "Mi", "Jue", "Vie", "Sab"],
  "months": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  "shortMonths": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
};

function defaultChartConfig(containerId, data) {
  nv.addGraph(function() {
    var chart = nv.models.sparklinePlus();
    chart.x(function(d,i) { return i })
      .xTickFormat(function(d) {
          return d3.time.format('%Y-%m-%d')(new Date(data[d].x))
      })
      .showCurrentPoint(false)
      .showLastValue(false)
      .color(["#1D86FF","#333333"]);
        
    d3.select(containerId)
      .datum(data)
      .call(chart);
    return chart;
  });
}


d3.csv("https://s3-eu-west-1.amazonaws.com/dev.refinery.eu-west-1.zenseiapp.com/consolidation/asthma/asthma.csv", function(data) {

  format = d3.time.format("%Y-%m-%d")
  dataset = data.map(function(d, i) {
    return { x: format.parse(d['date_week']), y:Math.round(+d["asma"])}; 
  });

  defaultChartConfig("#chart2", dataset.slice(Math.max(dataset.length - 104, 1)));

  var kpi = dataset.slice(-1)[0].y * 4650;

  d3.select('#asthma')
    .text(d3.locale(es_ES).numberFormat(",.")(kpi))

  setInterval(function(){
    kpi = Math.random() > 0.5 ? kpi + 1 : kpi - 1 
    d3.select('#asthma')
      .text(d3.locale(es_ES).numberFormat(",.")(kpi + 1))
  }, 3000)

  

})


