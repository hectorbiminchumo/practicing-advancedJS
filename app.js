let paragraphElement = document.querySelector('.click')
console.log(paragraphElement);

function changeParagraphText() {
    if(paragraphElement.textContent === 'Click me!') {
        paragraphElement.textContent = 'Clicked!';
    } else {
        paragraphElement.textContent = 'Click me!';
    }
}

paragraphElement.addEventListener('click', changeParagraphText)

let inputText = document.querySelector('input')

function updateValue(e) {
    console.log(e);
}
inputText.addEventListener('input', updateValue)
