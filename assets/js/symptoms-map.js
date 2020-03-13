$(document).ready(function(){
            
  var map = L.map('map').setView([40.4168, -3.7038], 7);
  var timeElapsed = 0;
  var markers = [];
  var count = 0;
  var current = 0;

  function draw_map() {
      
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
          // attribution: '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
          maxZoom: 15,
      }).addTo(map);

      map.scrollWheelZoom.disable()

      dynamic_number('#count' ,current ,0)

  };

  function update_position() {
      
      var elapsedTime = new Date().getMilliseconds();
      var geojsonMarkerOptions = {
        radius: 2000,
        color: "rgba(255, 130, 178)",
        weight: 0,
        opacity: 0.15,
        fillOpacity: 0.15
      };

      $.getJSON('https://i2lverrng9.execute-api.eu-west-1.amazonaws.com/dev/symptoms', function(data) {
        console.log(data)
        var len = data.count
        dynamic_number('#count' ,current , len)
        for (i = 0; i < len; i++) {
          size = data.data[i].count
          coordinates = [data.data[i].latitude, data.data[i].longitude];
          marker = L.circle(coordinates, size * 1000,  geojsonMarkerOptions);
          marker.addTo(map);
          markers.push(marker)
          if(count > 20000){
              map.removeLayer(markers[0]);
              markers.splice(0, 1)   
          }
          count = count + 1;
        }
        current = len;

        // elapsedTime = new Date().getMilliseconds() - elapsedTime;
        // setTimeout(update_position, 2000 - elapsedTime);

      });
  };

  function check_time(i) {

      if (i < 10) {
          i = "0" + i;
      }
      return i;

  };

  function start_time() {

      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      
      m = check_time(m);
      s = check_time(s);

      document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
      t = setTimeout(function () {
          start_time()
      }, 500);

  };

  function dynamic_number(dom, start, finish){

      var separator = $.animateNumber.numberStepFactories.separator('.')

      $(dom)
        .prop('number', start)
        .animateNumber(
          {
            number: finish,
            numberStep: separator
          },
          1000
      );
        
  };

  start_time(); 
  draw_map();
  update_position();  

});