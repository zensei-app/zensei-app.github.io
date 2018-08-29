// Begin Cookie Consent plugin by Silktide - http://silktide.com/cookieconsent
window.cookieconsent_options = {"message":"Esta web utiliza cookies. ","dismiss":"Vale","learnMore":"Más info","link":"/politica-cookies.html","theme":"dark-bottom","target":"_blank"};

(function(d, s, id) {
  var js, cjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.10/cookieconsent.min.js";
  cjs.parentNode.insertBefore(js, cjs);
}(document, 'script', 'cookie-consent'));
// End Cookie Consent plugin

// Begin social
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.9&appId=1853764804894431";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

$(function(){

  var isMobile = false; //initiate as false
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

  if(isMobile){
    $('#whatsappButton').show();
  }

});
// End social

// Begin Mixpanel
(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments, 0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);

mixpanel.init("ae42fa9b56806bc29fe4fdfeb37f0882");
// End Mixpanel

// Begin Google Analytics Info
function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=')
    if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}

ga(function(tracker) {
  var clientId = tracker.get("clientId");
  var campaignSource = getUrlParameter("utm_source") || "direct";

  mixpanel.track("web", {
    "gaid": clientId
  });

  $(function() {
    $(".main-cta").attr("href", function() {
      return this.href + "?ref=" + clientId + "|" + campaignSource;
    })
  })
});
// End Google Analytics Info

//Smooth
// $("#cta-top").click(function() {
//   $('html, body').animate({
//     scrollTop: $("#install").offset().top
//   }, 150000);
// });

// Begin AB Testing

var test = getUrlParameter('test');

if(test){

  var copies = [
    "Todo lo que tienes que saber antes de salir de casa para cuidar de tu salud",
    "Prevén los riesgos medioambientales sobre tu salud",
    "Protégete a tí y a tus seres queridos de los riesgos de salud de entorno",
    "Consejos y alertas personalizados para que cuides de tu salud",
    "Minimiza los riesgos ambientales de tu ciudad sobre tu salud",
    "Evita los riesgos ambientales de tu ciudad con alertas y consejos en tu móvil",
    "¿Conoces los riesgos de salud a los que estás expuesto? Zensei te ayuda a prevenirlos",
    // "Conócete a ti mismo y ayuda a tu yo futuro",
    // "Protégete a tí y a tus seres queridos de los riesgos de salud de entorno",
    // "Conoce y prevén tus riesgos de salud",
  ]
  
  $( "h1.value-propostition" ).text( copies[test] );


}

// End AB Testing

var name = getUrlParameter('name');

if(name != 'undefined'){  
  $( "text#name" ).text(". " + name + " ya lo hace.");
}

function gtag_report_conversion(url) { 
  var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; 
  gtag('event', 'conversion', { 'send_to': 'AW-823066871/povGCPuL7noQ94G8iAM', 'event_callback': callback }); 
  return false;
}

// Conversion
$( document ).ready(function() { 
  $(".install-button").click(function() {gtag_report_conversion()});
});

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var moves = function(){
  var animations = [ 'shake', 'hop', 'spin','grow', 'hooray' ];
  $('.box').on('click', function () {
        var animation = animations[randomInt(0, animations.length - 1)];
        var box = $(this);
        box.addClass(animation);
        setTimeout(function () {
            box.removeClass(animation);
        }, 1000);
    });
}

var drag = function() {
    $(".draggable").draggable();
}

$(document).ready(drag);
$(document).ready(moves);

var tier = getUrlParameter('tier') || 'a';

tiers = {
  a: 5795,
  b: 2635,
  c: 1450
}

var price = tiers[tier];
$( "text#price" ).text(price/100);

if(tier == 'b' || tier == 'c'){
  $("div#pricing").append("<h1 style='font-size:24px; color: red;'><strike>Antes 57.95€<strike></h2>")
  $("div#pricing").append("<h1 style='font-size:32px; color: green;'>Ahora "+price/100+"€</h2>")
} else {
  $("div#pricing").append("<h1 style='font-size:32px; color: #363E40;'>Total 57.95€</h2>")
}


var handler = StripeCheckout.configure({
  key: 'pk_live_OHp9EY8wTbGlS0kYoeEOOXAp',
  image: '/assets/icon.png',
  locale: 'auto',
  token: function(token) {
    console.log(token)
    post_to_url(
      'https://ar8citwnof.execute-api.eu-west-1.amazonaws.com/dev/stripe/charges',
      {
        token: token.id,
        amount: price,
        currency: 'eur',
      }
    )
    location.href = 'https://zenseiapp.com/es/digital-detox-program/thankyou';
  }
});

document.getElementById('customButton').addEventListener('click', function(e) {
  // Open Checkout with further options:
  handler.open({
    name: 'Zensei Health',
    description: 'Digital Detox Program',
    currency: 'eur',
    amount: price
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});

function post_to_url(path, params, method) {
  method = method || 'POST';

  var form = document.createElement('form');

  // Move the submit function to another variable
  // so that it doesn't get overwritten.
  form._submit_function_ = form.submit;

  form.setAttribute('method', method);
  form.setAttribute('action', path);
  form.setAttribute('target', '_blank');

  for(var key in params) {
      var hiddenField = document.createElement('input');
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.setAttribute('name', key);
      hiddenField.setAttribute('value', params[key]);

      form.appendChild(hiddenField);
  }

  document.body.appendChild(form);
  form._submit_function_(); // Call the renamed function.

}

