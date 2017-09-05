Date.prototype.getWeek = function() {
      var onejan = new Date(this.getFullYear(),0,1);
      return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
    }

    function getSeason(d){
      date = format.parse(d["date"])
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

    function weekFlu(week){
      if(week>=36){
        return week - 36
      }else{
        return week + 16
      }
    }

    function risk(value){
      if(value < 15){
        return 'Nulo'
      }else if(value < 30){
        return 'Bajo'
      }else if(value < 80){
        return 'Medio'
      }else if(value < 120){
        return 'Alto'
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
      }
    }

    function month_name (dt){
      mlist = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
        return mlist[dt.getMonth()];
    };

    function growth(value){
      if(value > 0){
        return "ascenso"
      }else if(value < 0){
        return "descenso"
      }else if(value == 0){
        return "una estabilización"
      }
    }
    
    var dataset = []
    var dataset2 = []
    var dataset3 = []

    var color = d3.scale.linear().domain([0,8]).range(['#F5F5F5', '#333333']);
    var color3 = d3.scale.linear().domain([0,300]).range(['#efd56c', '#f58888']);
    var color2 = d3.scale.linear().domain([0,20]).range(['#F5F5F5', '#333333']);

    
    d3.csv("https://s3-eu-west-1.amazonaws.com/dev.refinery.eu-west-1.zenseiapp.com/consolidation/flu/flu.csv", function(data) {
      
      format = d3.time.format("%Y-%m-%d %H:%M:%S")
      dataset = data.map(function(d, i) { 
        return { x:format.parse(d["date"]), y:Math.round(+d["rate"])}; 
      });


      seasons = data.map(function(d, i) { 
        return { 
          y: Math.round(+d["rate"]),
          x: weekFlu(format.parse(d["date"]).getWeek()),
          season: getSeason(d)}
      });

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

      latest = dataset.slice(-2)
      kpis = {
        diff: latest[0].y - latest[1].y,
        pct: ((latest[1].y - latest[0].y)/latest[0].y)*100,
        today: latest[1].y,
        yesterday: latest[0].y,
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

      d3.select('#yesterday')
        .append("text")
        .text(kpis.yesterday)

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


      data1 = [{
        key: 'Gripe España',
        values: dataset.sort(sortByDateAscending),
        color: "#f58888",
        strokeWidth: 3.5,
        area: true
      }
      // ,
      // {
      //   key: 'Modelo',
      //   values: dataset.sort(sortByDateAscending),
      //   color: "orange",
      //   strokeWidth: 3.5,
      // }
      ];

      d3.csv("https://s3-eu-west-1.amazonaws.com/dev.refinery.eu-west-1.zenseiapp.com/consolidation/flu/fluRegionsSpain.csv", function(data) {
        format = d3.time.format("%Y-%m-%d %H:%M:%S")
        out = data.map(function(d, i) { 
          return { x:format.parse(d["date"]), y:Math.round(+d["rate"]), location:d["location"]}; 
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

            if(key == "Nacional"){
              _color = "#f58888"
              strokeWidth = 3.5
              area=true
              values = data1[0].values
              type = "bar"
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
        historicalBarChart[0].values.push(
          {
            "label": values.location,
            "value": values.y,
            "color": color3(values.y)
          }
        )
      }

      historicalBarChart[0].values = historicalBarChart[0].values.sort(sortByValueAscending)

      function datum(){
        data = data1.sort(sortByDateAscending);
        return data
      }

      nv.addGraph(function() {

        var chart = nv.models.lineWithFocusChart();
        chart.xAxis.tickFormat(function(d) { return d3.time.format('%d %b %y')(new Date(d)) }).axisLabel("Semana del año");
        chart.x2Axis.tickFormat(function(d) { return d3.time.format('%b %y')(new Date(d)) });
        chart.yTickFormat(d3.format('s'));
        chart.yAxis.axisLabel("Casos por cada 100K habitantes");
        chart.duration(20)
        chart.showYAxis(true)
        chart.showXAxis(true)

        var y = d3.scale.linear()
          .range([200, 0]);
        
        y.domain([0, d3.max(dataset, function(d) { return d.y; })]);

        d3.select('#chart svg').append("line")
          .style("stroke", "orange")
          .attr("x1", 60)
          .attr("y1", y(10))
          .attr("x2", "98%")
          .attr("y2", y(10));

        d3.select('#chart svg')
          .append("text")
          .text("Límite epidémico")
          .attr("x", 62)
          .attr("y", y(14))
          .attr("font-family", "sans-serif")
          .attr("font-size", "8px")
          .attr("fill", "black");

        d3.select('#chart svg').append("line")
          .style("stroke", "orange")
          .style("stroke-dasharray","5,5")
          .attr("x1", 60)
          .attr("y1", y(30))
          .attr("x2", "98%")
          .attr("y2", y(30));

        d3.select('#chart svg')
          .append("text")
          .text("Bajo")
          .attr("x", 62)
          .attr("y", y(34))
          .attr("font-family", "sans-serif")
          .attr("font-size", "8px")
          .attr("fill", "black");

        d3.select('#chart svg').append("line")
          .style("stroke", "orange")
          .style("stroke-dasharray","5,5")
          .attr("x1", 60)
          .attr("y1", y(60))
          .attr("x2", "98%")
          .attr("y2", y(60));

        d3.select('#chart svg')
          .append("text")
          .text("Medio")
          .attr("x", 62)
          .attr("y", y(64))
          .attr("font-family", "sans-serif")
          .attr("font-size", "8px")
          .attr("fill", "black");

        d3.select('#chart svg').append("line")
          .style("stroke", "orange")
          .style("stroke-dasharray","5,5")
          .attr("x1", 60)
          .attr("y1", y(100))
          .attr("x2", "98%")
          .attr("y2", y(100));

        d3.select('#chart svg')
          .append("text")
          .text("Alto")
          .attr("x", 62)
          .attr("y", y(104))
          .attr("font-family", "sans-serif")
          .attr("font-size", "8px")
          .attr("fill", "black");

        d3.select('#chart svg')
            .datum(datum())
            .call(chart);

        $("#timeserie").click(function(){

          chart.xAxis.tickFormat(function(d) { return d3.time.format('%b %y')(new Date(d)) }).axisLabel("Semana del año");
          chart.x2Axis.tickFormat(function(d) { return d3.time.format('%b %y')(new Date(d)) });
          d3.select("#chart svg").selectAll("*").remove();
          d3.select('#chart svg').append("line")
            .style("stroke", "orange")
            .attr("x1", 60)
            .attr("y1", y(10))
            .attr("x2", "98%")
            .attr("y2", y(10));

          d3.select('#chart svg')
            .append("text")
            .text("Límite epidémico")
            .attr("x", 62)
            .attr("y", y(14))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          d3.select('#chart svg').append("line")
            .style("stroke", "orange")
            .style("stroke-dasharray","5,5")
            .attr("x1", 60)
            .attr("y1", y(30))
            .attr("x2", "98%")
            .attr("y2", y(30));

          d3.select('#chart svg')
            .append("text")
            .text("Bajo")
            .attr("x", 62)
            .attr("y", y(34))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          d3.select('#chart svg').append("line")
            .style("stroke", "orange")
            .style("stroke-dasharray","5,5")
            .attr("x1", 60)
            .attr("y1", y(60))
            .attr("x2", "98%")
            .attr("y2", y(60));

          d3.select('#chart svg')
            .append("text")
            .text("Medio")
            .attr("x", 62)
            .attr("y", y(64))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          d3.select('#chart svg').append("line")
            .style("stroke", "orange")
            .style("stroke-dasharray","5,5")
            .attr("x1", 60)
            .attr("y1", y(100))
            .attr("x2", "98%")
            .attr("y2", y(100));

          d3.select('#chart svg')
            .append("text")
            .text("Alto")
            .attr("x", 62)
            .attr("y", y(104))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          
          d3.select('#chart svg')
            .datum(data1)
            .call(chart);
          
        });

        $("#seasons").click(function(){
          chart.xAxis.tickFormat(d3.format(',.0d')).axisLabel("Semana de la temporada de la gripe");
          chart.x2Axis.tickFormat(d3.format(',.0d')).axisLabel("Semana de la temporada de la gripe");
          d3.select("#chart svg").selectAll("*").remove();
          d3.select('#chart svg').append("line")
            .style("stroke", "orange")
            .attr("x1", 60)
            .attr("y1", y(10))
            .attr("x2", "98%")
            .attr("y2", y(10));

          d3.select('#chart svg')
            .append("text")
            .text("Límite epidémico")
            .attr("x", 62)
            .attr("y", y(14))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          d3.select('#chart svg').append("line")
            .style("stroke", "orange")
            .style("stroke-dasharray","5,5")
            .attr("x1", 60)
            .attr("y1", y(30))
            .attr("x2", "98%")
            .attr("y2", y(30));

          d3.select('#chart svg')
            .append("text")
            .text("Bajo")
            .attr("x", 62)
            .attr("y", y(34))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          d3.select('#chart svg').append("line")
            .style("stroke", "orange")
            .style("stroke-dasharray","5,5")
            .attr("x1", 60)
            .attr("y1", y(60))
            .attr("x2", "98%")
            .attr("y2", y(60));

          d3.select('#chart svg')
            .append("text")
            .text("Medio")
            .attr("x", 62)
            .attr("y", y(64))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");

          d3.select('#chart svg').append("line")
            .style("stroke", "orange")
            .style("stroke-dasharray","5,5")
            .attr("x1", 60)
            .attr("y1", y(100))
            .attr("x2", "98%")
            .attr("y2", y(100));

          d3.select('#chart svg')
            .append("text")
            .text("Alto")
            .attr("x", 62)
            .attr("y", y(104))
            .attr("font-family", "sans-serif")
            .attr("font-size", "8px")
            .attr("fill", "black");


          d3.select('#chart svg')
            .datum(dataset2)
            .call(chart);
         
         
        });

        $("#locations").click(function(){

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

          d3.select("#chart svg").selectAll("*").remove();

          d3.select('#chart svg')
              .datum(historicalBarChart)
              .call(chart);
       
         
        });
 
        nv.utils.windowResize(chart.update);
        return chart;
    });
    

  });

 })