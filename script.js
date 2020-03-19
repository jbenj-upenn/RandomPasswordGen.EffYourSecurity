/*I borrowed many ideas in terms of the technicalities here from a few tutorials; several of them 
had a good amount of overlap; I just can't get the code to work, as I feel way out of my depth in terms
of the order in which to write code, what affects what here in the script, and things like call-back
functions or iterating and how they apply to the end result in the browswer*/

const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSpecialCharactersElement = document.getElementById('includeSpecialCharacters')
const includeUpperCaseElement = document.getElementById('includeUpperCase')
const form = document.getElementById('passwordgenerator')
const passwordCharacters = document.getElementById('passwordDisplay')

/*found this is a tutorial because I had no idea how to implement it; still not working*/
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SPECIALCHARACTERS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUpperCase = includeUpperCaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSpecialCharacters = includeSpecialCharactersElement.checked
    const password = generatePassworda(characterAmount, includeUpperCase, 
        includeNumbers, includeSpecialCharacters)
        passwordDisplay.innerText = password
})

/*I was attempting to default the password to lower case*/
function generatePassword(characterAmount, includeUpperCase, includeNumbers,
    includeSpecialCharacters) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES) 
    if (includeSpecialCharacters) charCodes = charCodes.concat(SPECIALCHARACTERS_CHAR_CODES)
    }

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')

function arrayFromLowToHigh (low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}
