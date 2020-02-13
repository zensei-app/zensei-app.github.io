var stripe = Stripe('pk_test_SajYpTJpTfwAef74coi1p9kK');

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue){
  var urlparameter = defaultvalue;
  if(window.location.href.indexOf(parameter) > -1){
      urlparameter = getUrlVars()[parameter];
      }
  console.log(urlparameter);
  return urlparameter;
}

function buy(){
  stripe.redirectToCheckout({
    sessionId: getUrlParam("session_id", null)
  }).then(function (result) {
  });
}
