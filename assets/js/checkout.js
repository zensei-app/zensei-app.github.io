// Replace with your own publishable key: https://dashboard.stripe.com/test/apikeys
// DEV key = pk_test_SajYpTJpTfwAef74coi1p9kK
var PUBLISHABLE_KEY = 'pk_live_OHp9EY8wTbGlS0kYoeEOOXAp';
// Replace with the domain you want your users to be redirected back to after payment
var DOMAIN = location.href.replace(/[^/]*$/, '');

var stripe = Stripe(PUBLISHABLE_KEY);

// Handle any errors from Checkout
var handleResult = function (result) {
    if (result.error) {
    var displayError = document.getElementById('error-message');
    displayError.textContent = result.error.message;
    }
};

document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click', function (e) {
    console.log(e.target)
    var mode = e.target.dataset.checkoutMode;
    var priceId = e.target.dataset.priceId;
    var items = [{ price: priceId, quantity: 1 }];

    // Make the call to Stripe.js to redirect to the checkout page
    // with the sku or plan ID.
    stripe
        .redirectToCheckout({
        mode: mode,
        lineItems: items,
        successUrl:
            DOMAIN + 'payment-success?session_id={CHECKOUT_SESSION_ID}',
        cancelUrl:
            DOMAIN + 'payment-cancel?session_id={CHECKOUT_SESSION_ID}',
        })
        .then(handleResult);
    });
});