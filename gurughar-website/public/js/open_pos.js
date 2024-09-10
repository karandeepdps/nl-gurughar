function openURL(amount) {
    console.log(`Button clicked for amount: ${amount}`);

    var dataParameter = {
        amount_money: {
            amount: amount * 100, // Convert to cents
            currency_code: "CAD" // Updated to CAD
        },
        callback_url: "https://main.dx0vj06xbsa0k.amplifyapp.com/payment",
        client_id: "sq0idp-9WmDgvLG8vsQWAYvy1C3uw",
        version: "1.3",
        notes: "Transaction Notes",
        options: {
            supported_tender_types: ["CREDIT_CARD", "CASH", "OTHER", "SQUARE_GIFT_CARD", "CARD_ON_FILE"]
        }
    };

    var posUrl = "square-commerce-v1://payment/create?data=" + encodeURIComponent(JSON.stringify(dataParameter));
    var onlinePaymentUrl = "https://my-business-707508.square.site/";

    // Create a hidden iframe to attempt to open the POS URL
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = posUrl;

    document.body.appendChild(iframe);

    // Set a timeout to check if the POS app opened
    var start = Date.now();
    var timeout = 2000; // Time in milliseconds to wait for POS app to open

    var timer = setTimeout(function () {
        // If the iframe hasn't been removed, the POS app didn't open
        if (Date.now() - start < timeout + 100) {
            // POS app is not available, redirect to online payment
            window.location.href = onlinePaymentUrl;
        }
        document.body.removeChild(iframe);
    }, timeout);

    // Add an event listener to detect if the POS app opens
    window.addEventListener('blur', function () {
        clearTimeout(timer);
        document.body.removeChild(iframe);
    });
}

// Attach the event listeners immediately when the script is loaded
const buttons = document.querySelectorAll('.donation-button');
buttons.forEach(button => {
    button.addEventListener("click", function () {
        openURL(button.dataset.amount);
    });
});
