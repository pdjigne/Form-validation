document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Perform validation logic here
    
    // If validation is successful
    this.reset();
    alert('Success!');
  
    // If "Keep me logged in" is checked
    if (document.querySelector('#keep-logged-in').checked) {
      alert('Success! You will be kept logged in.');
    }
  });