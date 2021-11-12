window.onload = function () { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  document.querySelector('.treat-button').addEventListener('click', clickedTreatButton);
  document.querySelector('.play-button').addEventListener('click', clickedPlayButton);
  document.querySelector('.exercise-button').addEventListener('click', clickedExerciseButton);




}

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "My Pet Name", weight: 0, happiness: 0 };
var audio = new Audio('assets/clicksound.mp3');


function clickedTreatButton() {
  // Increase pet happiness
  pet_info.happiness++;
  // Increase pet weight
  pet_info.weight++;
  checkAndUpdatePetInfoInHtml();
  audio.play();
}

function clickedPlayButton() {
  // Increase pet happiness
  pet_info.happiness++;
  // Decrease pet weight
  pet_info.weight--;
  checkAndUpdatePetInfoInHtml();
  audio.play();
}

function clickedExerciseButton() {
  // Decrease pet happiness
  pet_info.happiness--;
  // Decrease pet weight
  pet_info.weight--;
  checkAndUpdatePetInfoInHtml();
  audio.play();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero, set it back to zero
  pet_info.weight = pet_info.weight < 0 ? 0 : pet_info.weight;
  pet_info.happiness = pet_info.happiness < 0 ? 0 : pet_info.happiness;
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  document.querySelector('.name').textContent = pet_info['name'];
  document.querySelector('.weight').textContent = pet_info['weight'];
  document.querySelector('.happiness').textContent = pet_info['happiness'];
}