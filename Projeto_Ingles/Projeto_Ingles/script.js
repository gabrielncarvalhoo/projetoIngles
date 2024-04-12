document.getElementById('complaint-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your complaint has been successfully submitted.');
    this.reset();
});
