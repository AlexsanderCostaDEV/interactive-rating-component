const mainContainer = document.querySelector(".card");
const thanksContainer = document.querySelector(".card2");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".change");
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

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  })
})