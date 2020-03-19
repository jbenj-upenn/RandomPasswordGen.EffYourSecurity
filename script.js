const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSpecialCharactersElement = document.getElementById('includeSpecialCharacters')
const includeUpperCaseElement = document.getElementById('includeUpperCase')
const form = document.getElementById('passwordgenerator')
const passwordCharacters = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(79, 122)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SPECIALCHARACTERS_CHAR_CODES = arrayFromLowToHigh(33, 47)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUpperCase = includeUpperCaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSpecialCharacters = includeSpecialCharactersElement.checked
    const password = (characterAmount, includeUpperCase, 
        includeNumbers, includeSpecialCharacters)
        passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUpperCase, includeNumbers,
    includeSpecialCharacters) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES) 
    if (includeSpecialCharacters) charCodes = charCodes.concat(SPECIALCHARACTERS_CHAR_CODES)
   
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const character = charCodes[Math.floor(Math.random() * characterAmount)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    }

function arrayFromLowToHigh (low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}


function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

