document.addEventListener("DOMContentLoaded", function() {
  fetch('footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text();
    })
    .then(html => {
      document.body.insertAdjacentHTML('beforeend', html);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
});