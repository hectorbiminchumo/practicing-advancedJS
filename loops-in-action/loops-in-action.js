// First Example: Sum numbers

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number')
    // const sumOfNumbers = +userNumberInputElement.value * (+userNumberInputElement.value + 1) / 2;
    let sumOfNumbers = 0;
    for ( let i = 0; i <= userNumberInputElement.value; i++) {
        sumOfNumbers += i
    }
    const outputNumber = document.getElementById('calculated-sum');
    outputNumber.textContent = sumOfNumbers;
    outputNumber.style.display = 'block'
}

calculateSumButtonElement.addEventListener('click', calculateSum)

// Highlight links

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');
    for (const anchorElement of anchorElements) {
            if(anchorElement.classList[0] !== 'highlight'){
            anchorElement.classList.add('highlight')
            console.log(anchorElement.classList[0]);
        } else {

            anchorElement.classList.remove('highlight')
        }
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks)

// Display user Data

const dummyUserData = {
    firstName: 'Max',
    lastName: 'Schwarzmuler',
    age: 32,
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement =document.getElementById('output-user-data');
    for( const key in dummyUserData ) {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);

// Statistics / Roll the Dice

const rollDiceButtonElement = document.querySelector('#statistics button');
function rollDice() {
    return Math.floor(Math.random() * 7); // Math.floor(): 5.64 => 5
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement =document.getElementById('dice-rolls');
    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML= '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        // if (rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        // }
        numberOfRolls++;
        const newRollListItemElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListItemElement.textContent =outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement =document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

 rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls)