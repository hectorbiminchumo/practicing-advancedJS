let productNameInput = document.getElementById('product-name')
let remainingCharacters = document.getElementById('remaining-chars')

console.log(productNameInput);

let maxCharacter = productNameInput.maxLength

console.log(maxCharacter);
function remaining (e) {
productNameInput.textContent = e.target.value    
let charactersLeft = maxCharacter - productNameInput.textContent.length

remainingCharacters.textContent = charactersLeft
if (charactersLeft === 0) {
    // remainingCharacters.style.backgroundColor = 'red'
    remainingCharacters.classList.add('error')
    productNameInput.classList.add('error')
} else if (charactersLeft <= 10) {
    remainingCharacters.classList.add('warning')
    productNameInput.classList.add('warning')
    remainingCharacters.classList.remove('error')
    productNameInput.classList.remove('error')

} 
else {
    // remainingCharacters.style.backgroundColor = ''
    remainingCharacters.classList.remove('warning')
    productNameInput.classList.remove('warning')

}

}

productNameInput.addEventListener('input', remaining)