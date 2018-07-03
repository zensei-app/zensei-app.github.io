    Date.prototype.getWeek = function() {
      var onejan = new Date(this.getFullYear(),0,1);
      return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
    }

    function getSeason(date){
      week = date.getWeek()
      year = date.getFullYear()
      if(week >= 36){
        y1 = year  + 1
        return year + '-' + y1
      }else if(week < 36){
        y1 = year  - 1
        return y1 + '-' + year
      }
    }

    function getDateOfWeek(weekNumber,year){
      return new Date(year, 0, 1+((weekNumber-1)*7));
    }

    function getNum(val) {
       if (isNaN(val)) {
         return 0;
       }
       return val;
    }

    function weekFlu(week){
      if(week>=36){
        return week - 36
      }else{
        return week + 16
      }
    }

    function risk(value){
      if(value < 15){
        return 'Mínimo'
      }else if(value < 30){
        return 'Bajo'
      }else if(value < 80){
        return 'Medio'
      }else if(value < 120){
        return 'Alto'
      }else{
        return 'Muy alto'
      }
    }

    function colorKpi(value){
      if(value < 15){
        return '#4CAF50'
      }else if(value < 30){
        return '#2196F3'
      }else if(value < 80){
        return '#ff9800'
      }else if(value < 120){
        return '#f44336'
      }else{
        return '#f44336'
      }
    }

    function month_name (dt){
      mlist = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
        return mlist[dt.getMonth()];
    };

    function growth(value){
      if(value > 0){
        return "un ascenso"
      }else if(value < 0){
        return "un descenso"
      }else if(value == 0){
        return "un cambio"
      }
    }
    
    var dataset = []
    var dataset2 = []
    var dataset3 = []

    var color = d3.scale.linear().domain([0,8]).range(['#F5F5F5', '#333333']);
    var color3 = d3.scale.linear().domain([0,300]).range(['#efd56c', '#f58888']);
    var color2 = d3.scale.linear().domain([0,20]).range(['#F5F5F5', '#333333']);

    d3.csv("https://s3-eu-west-1.amazonaws.com/dev.refinery.eu-west-1.zenseiapp.com/consolidation/flu/flu-observatory.csv", function(data) {
      data = data.slice((data.length - 260), data.length)
      data = data.filter(d => d['year'] > 2010)
      data = data.filter(d => d['week'] < 52)
      
      format = d3.time.format("%Y-%m-%d")
      dataset = data.map(function(d, i) {
        return { x: format.parse(d['date_week']), y:Math.round(+d["rate"])}; 
      });

      max = Math.max.apply(Math,dataset.map(function(o){return o.y;}))

      datasetPred = data.map(function(d, i) { 
        return { x:d3.time.day.offset(format.parse(d['date_week']), 7*2) , y:Math.round(d['pred'] < 0 ? 0 : +d['pred'])}; 
      });

      google = data.map(function(d, i) { 
        return { x: format.parse(d['date_week']), y:Math.round(Math.round(+d["gripe"])/100*max)}; 
      });



      seasons = data.map(function(d, i) { 
        return { 
          y: Math.round(+d["rate"]),
          x: weekFlu(format.parse(d['date_week']).getWeek()),
          season: getSeason(format.parse(d['date_week']))
        }
      });

      seasons = seasons.filter(function(n){ return n != undefined });
      dataset = dataset.filter(function(n){ return n != undefined }); 
      datasetPred = datasetPred.filter(function(n){ return n != undefined }); 


      const grouped = _.groupBy(seasons,  car => car.season);

      for (var key in grouped) {
        index = Object.keys(grouped).indexOf(key)
        length = Object.keys(grouped).length
        if(index < length - 1){
          _color = color(index)
          strokeWidth = 1
          area=false
        }else{
          _color = "#f58888"
          strokeWidth = 3.5
          area=true
        }
        dataset2.push({
          values:grouped[key],
          key: key,
          color: _color,
          strokeWidth: strokeWidth,
          area:area
        });
      }

      latest = datasetPred.slice(-2)
      console.log(latest)
      kpis = {
        diff: latest[1].y - latest[0].y,
        pct: Math.round(getNum(((latest[1].y - latest[0].y)/latest[0].y)*100)),
        today: latest[0].y,
        tomorrow: latest[1].y,
        date: latest[1].x.getDate() + ' de ' + month_name(latest[1].x) + ' del ' + latest[1].x.getFullYear(),
        risk: risk(latest[1].y),
        color: colorKpi(latest[1].y)
      }

      d3.select('#risk')
        .append("text")
        .text(kpis.risk)
        .style("color", kpis.color)

      d3.select('#risk1')
        .append("text")
        .text(kpis.risk)

      d3.select('#tomorrow')
        .append("text")
        .text(kpis.tomorrow)

      d3.select('#tomorrow1')
        .append("text")
        .text(kpis.tomorrow)

      d3.select('#today1')
        .append("text")
        .text(kpis.today)

      d3.select('#today')
        .append("text")
        .text(kpis.today)

      d3.select('#pct')
        .append("text")
        .text(kpis.pct)

      d3.select('#date')
        .append("text")
        .text(kpis.date)

      d3.select('#growth')
        .append("text")
        .text(growth(kpis.pct))

        

      function sortByDateAscending(a, b) {
          // Dates will be cast to numbers automagically:
          return a.x - b.x;
      }

      function sortByValueAscending(a, b) {
          // Dates will be cast to numbers automagically:
          return b.value - a.value;
      }


      data1 = [
        {
          key: 'Gripe',
          values: dataset.sort(sortByDateAscending).slice((dataset.length - 52), dataset.length),
          color: "#1d86ff",
          strokeWidth: 3.5,
        },
        {
          key: 'Google',
          values: google.sort(sortByDateAscending).slice((google.length - 52), google.length),
          color: "#f58888",
          strokeWidth: 3.5,
        },
        {
          key: 'Predicción',
          values: datasetPred.sort(sortByDateAscending).slice((datasetPred.length - 4), datasetPred.length),
          color: "orange",
          strokeWidth: 3.5,
        }
      ];

      d3.csv("https://s3-eu-west-1.amazonaws.com/dev.refinery.eu-west-1.zenseiapp.com/consolidation/flu/fluRegionsSpain.csv", function(data) {
        format = d3.time.format("%Y-%m-%d %H:%M:%S")
        out = data.map(function(d, i) { 
          return { x:format.parse(d["date"]), y:Math.round(+d["rate"]), location: d['location']}; 
        });

        const groupedLocations = _.groupBy(out,  car => car.location);

        for (var key in groupedLocations) {
          index = Object.keys(groupedLocations).indexOf(key)
          length = Object.keys(groupedLocations).length
          if(groupedLocations[key].length > 200){
            if(index < length - 1){
              _color = color2(index)
              strokeWidth = 1
              area=false
              values= groupedLocations[key]
              type='line'
            }

            if(key == "Nacional") {
              _color = "#f58888"
              strokeWidth = 3.5
              area=false
              values = data1[0].values
              type = "line"
            }
            
            dataset3.push({
              values: values.sort(sortByDateAscending),
              key: key,
              color: _color,
              strokeWidth: strokeWidth,
              area:area,
              type: type,
              yAxis: 1
            });
            
          }
        }

      historicalBarChart = [
        {
          key: "Comunidades",
          values: []
        }
      ];

      for (var key in dataset3) {
        length = dataset3[key].values.length
        values = dataset3[key].values[length-1]
        color = color3(values.y)

        if(!values.location){
          values.location = 'Nacional'
          color = "#f58888"
        }

        historicalBarChart[0].values.push(
          {
            "label": values.location,
            "value": values.y,
            "color": color
          }
        )
      }

      historicalBarChart[0].values = historicalBarChart[0].values.sort(sortByValueAscending)

      function datum(){
        data = data1.sort(sortByDateAscending);
        return data
      }

      nv.addGraph(function() {

        $("#barchart").hide();
        var chart = nv.models.lineWithFocusChart();
        chart.xAxis.tickFormat(function(d) { return d3.time.format('%d %b %y')(new Date(d)) }).axisLabel("Semana del año");
        chart.x2Axis.tickFormat(function(d) { return d3.time.format('%b %y')(new Date(d)) });
        chart.yTickFormat(d3.format('s'));
        chart.yAxis.axisLabel("Casos por cada 100K habitantes");
        chart.duration(20)
        chart.showYAxis(true)
        chart.showXAxis(true)
        chart.useInteractiveGuideline(true)
        chart.yDomain([0, d3.max(dataset, function(d) { return d.y; })])

        var y = d3.scale.linear()
          .range([200, 0]);
        
        y.domain([0, d3.max(dataset, function(d) { return d.y; })]);

        scale = 20

        d3.select('#chart svg').append("line")
          .style("stroke", "lightgrey")
          .attr("x1", 60)
          .attr("y1", y(0))
          .attr("x2", "98%")
          .attr("y2", y(0));

        d3.select('#chart svg').append("line")
          .style("stroke", "lightgrey")
          .attr("x1", 60)
          .attr("y1", y(10 + scale))
          .attr("x2", "98%")
          .attr("y2", y(10 + scale));

        d3.select('#chart svg')
          .append("text")
          .text("Umbral epidémico")
          .attr("x", 62)
          .attr("y", y(14+ scale))
          .attr("font-family", "sans-serif")
          .attr("font-size", "8px")
          .attr("fill", "black");

        d3.select('#chart svg').append("line")
          .style("stroke", "lightgrey")
          .style("stroke-dasharray","5,5")
          .attr("x1", 60)
          .attr("y1", y(100+ scale))
          .attr("x2", "98%")
          .attr("y2", y(100+ scale));

        d3.select('#chart svg')
          .append("text")
          .text("Umbral Medio")
          .attr("x", 62)
          .attr("y", y(104+ scale))
          .attr("font-family", "sans-serif")
          .attr("font-size", "8px")
          .attr("fill", "black");

        d3.select('#chart svg').append("line")
          .style("stroke", "lightgrey")
          .style("stroke-dasharray","5,5")
          .attr("x1", 60)
          .attr("y1", y(160+ scale))
          .attr("x2", "98%")
          .attr("y2", y(160+ scale));

        d3.select('#chart svg')
          .append("text")
          .text("Umbral Alto")
          .attr("x", 62)
          .attr("y", y(164+ scale))
          .attr("font-family", "sans-serif")
          .attr("font-size", "8px")
          .attr("fill", "black");

        d3.select('#chart svg').append("line")
          .style("stroke", "lightgrey")
          .style("stroke-dasharray","5,5")
          .attr("x1", 60)
          .attr("y1", y(200+ scale))
          .attr("x2", "98%")
          .attr("y2", y(200+ scale));

        d3.select('#chart svg')
          .append("text")
          .text("Umbral muy alto")
          .attr("x", 62)
          .attr("y", y(204+ scale))
          .attr("font-family", "sans-serif")
          .attr("font-size", "8px")
          .attr("fill", "black");

        d3.select('#chart svg')
            .datum(datum())
            .call(chart);

        $("#timeserie").click(function(){
          $("#chart").show();
          $("#barchart").hide();
          chart.xAxis.tickFormat(function(d) { return d3.time.format('%d %b %y')(new Date(d)) }).axisLabel("Semana del año");
          chart.x2Axis.tickFormat(function(d) { return d3.time.format('%b %y')(new Date(d)) });
          chart.yTickFormat(d3.format('s'));
          chart.tooltip.enabled(true)
          chart.yDomain([0, d3.max(dataset, function(d) { return d.y; })])
          d3.select("#chart svg").selectAll("*").remove();

          d3.select('#chart svg').append("line")
            .style("stroke", "lightgrey")
            .attr("x1", 60)
            .attr("y1", y(0))
            .attr("x2", "98%")
            .attr("y2", y(0));

          d3.select('#chart svg').append("line")
            .style("stroke", "lightgrey")
            .attr("x1", 60)
            .attr("y1", y(10 + scale))
            .attr("x2", "98%")
            .attr("y2", y(10 + scale));

          d3.select('#chart svg')
            .append("text")
            .text("Umbral epidémico")
            .attr("x", 62)
            .attr("y", y(14+ scale))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          d3.select('#chart svg').append("line")
            .style("stroke", "lightgrey")
            .style("stroke-dasharray","5,5")
            .attr("x1", 60)
            .attr("y1", y(100+ scale))
            .attr("x2", "98%")
            .attr("y2", y(100+ scale));

          d3.select('#chart svg')
            .append("text")
            .text("Umbral Medio")
            .attr("x", 62)
            .attr("y", y(104+ scale))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          d3.select('#chart svg').append("line")
            .style("stroke", "lightgrey")
            .style("stroke-dasharray","5,5")
            .attr("x1", 60)
            .attr("y1", y(160+ scale))
            .attr("x2", "98%")
            .attr("y2", y(160+ scale));

          d3.select('#chart svg')
            .append("text")
            .text("Umbral Alto")
            .attr("x", 62)
            .attr("y", y(164+ scale))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          d3.select('#chart svg').append("line")
            .style("stroke", "lightgrey")
            .style("stroke-dasharray","5,5")
            .attr("x1", 60)
            .attr("y1", y(200+ scale))
            .attr("x2", "98%")
            .attr("y2", y(200+ scale));

          d3.select('#chart svg')
            .append("text")
            .text("Umbral muy alto")
            .attr("x", 62)
            .attr("y", y(204+ scale))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          
          d3.select('#chart svg')
            .datum(data1)
            .call(chart);
          
        });

        $("#seasons").click(function(){

          $("#chart").show();
          $("#barchart").hide();
          chart.xAxis.tickFormat(d3.format(',.0d')).axisLabel("Semana de la temporada de la gripe");
          chart.x2Axis.tickFormat(d3.format(',.0d')).axisLabel("Semana de la temporada de la gripe");
          chart.tooltip.enabled(true)
          chart.yDomain([0, d3.max(dataset, function(d) { return d.y; })])
          d3.select("#chart svg").selectAll("*").remove();
          d3.select('#chart svg').append("line")
            .style("stroke", "lightgrey")
            .attr("x1", 60)
            .attr("y1", y(0))
            .attr("x2", "98%")
            .attr("y2", y(0));

          d3.select('#chart svg').append("line")
            .style("stroke", "lightgrey")
            .attr("x1", 60)
            .attr("y1", y(10 + scale))
            .attr("x2", "98%")
            .attr("y2", y(10 + scale));

          d3.select('#chart svg')
            .append("text")
            .text("Umbral epidémico")
            .attr("x", 62)
            .attr("y", y(14+ scale))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          d3.select('#chart svg').append("line")
            .style("stroke", "lightgrey")
            .style("stroke-dasharray","5,5")
            .attr("x1", 60)
            .attr("y1", y(100+ scale))
            .attr("x2", "98%")
            .attr("y2", y(100+ scale));

          d3.select('#chart svg')
            .append("text")
            .text("Umbral Medio")
            .attr("x", 62)
            .attr("y", y(104+ scale))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          d3.select('#chart svg').append("line")
            .style("stroke", "lightgrey")
            .style("stroke-dasharray","5,5")
            .attr("x1", 60)
            .attr("y1", y(160+ scale))
            .attr("x2", "98%")
            .attr("y2", y(160+ scale));

          d3.select('#chart svg')
            .append("text")
            .text("Umbral Alto")
            .attr("x", 62)
            .attr("y", y(164+ scale))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          d3.select('#chart svg').append("line")
            .style("stroke", "lightgrey")
            .style("stroke-dasharray","5,5")
            .attr("x1", 60)
            .attr("y1", y(200+ scale))
            .attr("x2", "98%")
            .attr("y2", y(200+ scale));

          d3.select('#chart svg')
            .append("text")
            .text("Umbral muy alto")
            .attr("x", 62)
            .attr("y", y(204+ scale))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");


          d3.select('#chart svg')
            .datum(dataset2)
            .call(chart);
          
        });

        $("#locations").click(function(){

          $("#chart").hide();
          $("#barchart").show();
          var chart = nv.models.discreteBarChart()
              .x(function(d) { return d.label })
              .y(function(d) { return d.value })
              .margin({top: 30, right: 0, bottom: 120, left: 70})
              .showLegend(false)
              .showValues(false)
              .duration(250)

          chart.yAxis.tickFormat(d3.format(',f'));

          chart.yAxis.axisLabel("Casos por cada 100K habitantes");
          chart.xAxis.rotateLabels(-90)

          console.log(historicalBarChart)
          d3.select('#barchart svg')
              .datum(historicalBarChart)
              .call(chart);
          
        });

        nv.utils.windowResize(chart.update);
        return chart;

    });
    

  });

 })