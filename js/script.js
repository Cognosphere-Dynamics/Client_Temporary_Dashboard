document.addEventListener('DOMContentLoaded', function() {
    const creditCardRadio = document.getElementById('credit-card');
    const mobileMoneyRadio = document.getElementById('pay-on-delivery');
    const paypalRadio = document.getElementById('paypal-2');
    
    const creditCardForm = document.getElementById('credit-card-form');
    const mobileMoneyForm = document.getElementById('mobile-money-form');
    const paypalForm = document.getElementById('paypal-form');
    
    function showForm(formToShow) {
        // Hide all forms
        creditCardForm.classList.add('hidden');
        mobileMoneyForm.classList.add('hidden');
        paypalForm.classList.add('hidden');
        
        // Show selected form
        formToShow.classList.remove('hidden');
    }
    
    creditCardRadio.addEventListener('change', () => showForm(creditCardForm));
    mobileMoneyRadio.addEventListener('change', () => showForm(mobileMoneyForm));
    paypalRadio.addEventListener('change', () => showForm(paypalForm));
});
