// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const submutBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
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
    // create element ad add article class
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    // create attribute and add it to the created element
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = ` <p class="title">${value}</p>
           <div class="btn-container">
             <button type="button" class="edit-btn">
               <i class="fas fa-edit"></i>
             </button>
             <button type="button" class="delete-btn">
               <i class="fas fa-trash"></i>
             </button>
           </div>`;
    //  appendChild
    list.appendChild(element);
    displayAlert('item added to the list', 'success');
    // show container
    container.classList.add('show-container');
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
