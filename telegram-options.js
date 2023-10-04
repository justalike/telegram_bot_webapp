import { allPairs } from './pairs.js'
import {autocomplete} from './autocomplete.js'

let telegram = window.Telegram.WebApp;
telegram.expand()
let submitButton = document.getElementById('sendButton');
let addPairButton = document.getElementById('add-pair-button');
let pairContainer = document.getElementById('pair-container');

// Function to add new pair input field
let pairCounter = 2;  // Initialize a counter to create unique IDs

const addPairInput = () => {

  const newInputDiv = document.createElement('div');
  newInputDiv.className = 'autocomplete';
  
  const newInputLabel = document.createElement('label');
  newInputLabel.innerHTML = 'Торговая пара ' + pairCounter;
  
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'pair';
  newInput.id = 'pair' + pairCounter;  // Create a unique ID
  newInput.placeholder = 'ETHUSDT';
  newInput.required = true;
  
  const removeButton = document.createElement('button');
  removeButton.innerHTML = '-';
  removeButton.type = 'button';
  removeButton.className = 'mini-button'
  removeButton.addEventListener('click', function() {
    newInputDiv.remove();
  });


  newInputDiv.appendChild(newInputLabel);
  newInputDiv.appendChild(newInput);
  newInputDiv.appendChild(removeButton);
  pairContainer.appendChild(newInputDiv);

// Get all elements with the name 'pair'
  autocomplete(newInput, allPairs);

  pairCounter++;  // Increment the counter for the next input
};



// Add new pair input when [+] button is clicked
addPairButton.addEventListener('click', addPairInput);

submitButton.addEventListener("click", () => {
  
  let timeframe = document.getElementById('timeframe');
  let longMA = document.getElementById('longMA-value');
  let shortMA = document.getElementById('shortMA-value');
  let longX = document.getElementById('longX-value');
  let shortX = document.getElementById('shortX-value');

  const pairs = Array.from(pairContainer.querySelectorAll('input[name="pair"]'))
    .map(input => input.value.toUpperCase())
    .filter(pair => allPairs.includes(pair));

  if (pairs.length === 0) {
    alert('Вы не выбрали пару или она указана некорректно');
    return;
  }

  let data = {
          pair: pairs,
          timeframe: timeframe.value,
          longMA: +longMA.value,
          shortMA: +shortMA.value,
          longThreshold: +longX.value,
          shortThreshold: +shortX.value,

        }
       
        if (!timeframe.value || !longMA.value || !shortMA.value || !longX.value || !shortX.value) {
          alert('Заполните все поля')
          return
        }

        if (!pair.value || !allPairs.includes(pair.value.toUpperCase())) {
          alert('Вы не выбрали пару или она указана некорректно');
          return;
        }
        telegram.sendData(JSON.stringify(data))

        telegram.close()
      })

