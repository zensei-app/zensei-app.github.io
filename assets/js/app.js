// $(document).ready(function () {
//   $("#closeTopBanner").click(function(){
//     alert("The paragraph was clicked.");
//     $(".top-banner").slideUp();
//   })
// });

$(document).ready(function () {
  // Begin social
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src =
      "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.9&appId=1853764804894431";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

  window.twttr = (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
      t._e.push(f);
    };

    return t;
  })(document, "script", "twitter-wjs");

  // End social

  var isMobile = false; //initiate as false
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  )
    isMobile = true;

  if (isMobile) {
    $("#whatsappButton").show();
  }
});

$(function () {
  count = 0;
  wordsArray = [
    "“Muy práctica. Toda la información para entender mi alergia.“",
    "“Me encanta y me es muy útil para cuidar mi rinitis :)“",
    "“Soy asmático, personalmente es de gran ayuda en mi diaria tarea de cuidarme.“",
    "“Gran aplicación que hace la vida más fácil. Además muy atentos y amables.“",
    "“Es absolutamente increíble y tiene todos los factores de riesgo. Sencillamente genial.“",
    "“Muy útil para controlar la frecuencia de los síntomas respiratorios“",
    "“Lo mejor que me pudo pasar en mi vida de Asmática 💕💕”",
  ];
  setInterval(function () {
    count++;
    $("#copy-social").fadeOut(400, function () {
      $(this)
        .text(wordsArray[count % wordsArray.length])
        .fadeIn(400);
    });
  }, 5000);
});

$("#asthma-selector").click(function () {
  console.log("Hola");
  $(".respiratory-care").hide();
  $(".allergy").hide();
  $(".mask").hide();
  $(".asthma").show();
  $(".purifier").show();
});
$("#allergy-selector").click(function () {
  console.log("Hola");
  $(".respiratory-care").hide();
  $(".asthma").hide();
  $(".allergy").show();
  $(".purifier").show();
  $(".mask").show();
});

$("#other").click(function () {
  console.log("Hola");
  $(".purifier").hide();
  $(".allergy").hide();
  $(".asthma").hide();
  $(".mask").hide();
  $(".respiratory-care").show();
});

$("#all").click(function () {
  console.log("Hola");
  $(".mask").show();
  $(".asthma").show();
  $(".purifier").show();
  $(".respiratory-care").show();
  $(".allergy").show();
});

// Begin Google Analytics Info
// ga(function(tracker) {
//   var clientId = tracker.get("clientId");
//   var campaignSource = getUrlParameter("utm_source") || "direct";

//   mixpanel.track("web", {
//     "gaid": clientId
//   });

//   $(function() {
//     $(".main-cta").attr("target="_blank" rel="noopener noreferrer" href", function() {
//       return this.target="_blank" rel="noopener noreferrer" href + "?ref=" + clientId + "|" + campaignSource;
//     })
//   })
// });
// End Google Analytics Info

//Smooth
// $("#cta-top").click(function() {
//   $('html, body').animate({
//     scrollTop: $("#install").offset().top
//   }, 150000);
// });

// Begin AB Testing

function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}

var test = getUrlParameter("test");

if (test) {
  var copies = ["/assets/img/app-cta.png"];
  $("img#image-bottom-cta").attr("src", "/assets/img/app-cta-purifier.png");
}

// End AB Testing

var name = getUrlParameter("name");

if (name != "undefined") {
  $("text#name").text(". " + name + " ya lo hace.");
}

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-823066871/povGCPuL7noQ94G8iAM",
    event_callback: callback,
  });
  return false;
}

// Conversion
$(document).ready(function () {
  $(".install-button").click(function () {
    gtag_report_conversion();
  });
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var moves = function () {
  var animations = ["shake", "hop", "spin", "grow", "hooray"];
  $(".box").on("click", function () {
    var animation = animations[randomInt(0, animations.length - 1)];
    var box = $(this);
    box.addClass(animation);
    setTimeout(function () {
      box.removeClass(animation);
    }, 1000);
  });
};

// var drag = function() {
//   $(".draggable").draggable();
// }

// $(document).ready(drag);
// $(document).ready(moves);

function post_to_url(path, params, method) {
  method = method || "POST";

  var form = document.createElement("form");

  // Move the submit function to another variable
  // so that it doesn't get overwritten.
  form._submit_function_ = form.submit;

  form.setAttribute("method", method);
  form.setAttribute("action", path);

  for (var key in params) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);

    form.appendChild(hiddenField);
  }

  document.body.appendChild(form);
  form._submit_function_(); // Call the renamed function.
}
