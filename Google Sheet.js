const scriptURL = 'https://script.google.com/macros/s/AKfycbxy1Y5OSCNEhq4vDdsXCsUCMQ1i2qPlblBtwf7eKYGCMGQMDW0QDz0NjleUOgr5g4pd/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})
