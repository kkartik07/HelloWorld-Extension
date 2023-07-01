function updateGreeting() {
    const nameInput = document.getElementById('name');
    const greetHeading = document.getElementById('greet');
    
    nameInput.addEventListener('input', function() {
      greetHeading.innerHTML = 'Hellodd, ' + nameInput.value + '!';
    });
  }

  window.addEventListener('DOMContentLoaded', function() {
    updateGreeting();
  });
  