  const mobileInput = document.getElementById('Unumber');
  mobileInput.addEventListener('input', function(e) {
    // Remove any character that's not a digit
    this.value = this.value.replace(/\D/g, '');
  });