var links = document.querySelectorAll('.change');
    var changeColor = null;

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
        // Restore original color of previous modified button
        if (changeColor) {
          changeColor.classList.remove('selected');
        }

        // Modify the color of the clicked button
        this.classList.add('selected');

        // Store reference to currently modified button
        changeColor = this;
      });
    }

function redirect() {
    window.location.href = 'https://www.google.com';
}