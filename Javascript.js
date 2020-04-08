//for the DOM
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperCaseEl = document.getElementById('upperCase');
const lowerCaseEl = document.getElementById('lowerCase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('specialChars');
const generateEl = document.getElementById('generatePassword');
const clipboardEl = document.getElementById('clipboard');

const randomChar = {
    upper: getUpperCaseLetter,
    lower: getLowerCaseLetter,
    number: getNumber,
    symbol: getSpecialChar
};

//Password button click triggers listen event
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const includeUpper = upperCaseEl.checked;
    const includeLower = lowerCaseEl.checked;
    const includeNumber = numbersEl.checked;
    const includeSpecialChars = symbolsEl.checked;

    //Create password
    resultEl.innerText = generatePassword(
        length,
        includeUpper,
        includeLower,
        includeNumber,
        includeSpecialChars
    );
});

//copy pw to clipboard; code mostly from hackernoon.com
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
});


function generatePassword(length, upper, lower, number, specialChars) {

    let generatedPassword = '';

    const typesCount = upper + lower + number + specialChars;

    // console.log('typesCount: ', typesCount);

    const typesArr = [{ upper }, { lower }, { number }, { specialChars }].filter(item => Object.values(item)[0]);

    // console.log('typesArr: ', typesArr);
    //nothing retrned if no categories are selected
    if (typesCount === 0) {
        return '';
    }

    //upper, lower, number, or specialChar
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log('funcName ', funcName);
            generatedPassword += randomChar[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;


}


// Five Randomizing Functions

function getUpperCaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// console.log(getUpperCaseLetter());

function getLowerCaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
// console.log(getLowerCaseLetter());

function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// console.log(getNumber());

function getSpecialChar() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};

function getSpecialChar() {
    return String.fromCharCode(Math.floor(Math.random() * 7) + 58);
};

// console.log(getSpecialChar());
