<script>
function showPaymentForm(method) {
    const paymentForms = document.getElementById('paymentForms');
    const forms = paymentForms.querySelectorAll('div');

    forms.forEach(form => {
        form.classList.add('hidden'); 
    });

    const selectedForm = document.getElementById(`${method}Form`);
    selectedForm.classList.remove('hidden'); 
}
</script>
