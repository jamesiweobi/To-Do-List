// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const submutBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('grocery-list');
const clearBtn = document.querySelector('.clear-btn');
const grocery = document.getElementById('grocery');

// edit option

let editElement;
let editFlag = false;
let editId = '';

// ****** EVENT LISTENERS **********
// Submit Form

form.addEventListener('submit', addItem);

// ****** FUNCTIONS **********

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    console.log('adding to the list');
  } else if (value && editFlag) {
    console.log('editting');
  } else {
    displayAlert('Please enter Value', 'danger');
  }
}
const displayAlert = (text, action) => {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 2000);
};
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
