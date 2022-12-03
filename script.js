const pass = document.querySelector(".pass");
const copy = document.querySelector("#copy");
const length = document.querySelector("#length");
const upper = document.querySelector("#upper");
const lower = document.querySelector("#lower");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");
const generate = document.querySelector(".generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=<>?|~";

function getupperLetters(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)]
}

function getlowerLetters(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)]
}

function getnumbers(){
    return numbers[Math.floor(Math.random()*numbers.length)]
}

function getsymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)]
}

function generatePassword(){
    const len = length.value;
    let password = '';
    if(upper.checked){
        password+= getupperLetters();
    }
    if(lower.checked){
        password+=getlowerLetters();
    }
    if(number.checked){
        password+=getnumbers();
    }
    if(symbol.checked){
        password+=getsymbols();
    }
    for(let i = password.length;i<len;i++){
        const x = generateX();
        password += x;
    }

    pass.innerHTML = password;
}

function generateX(){
    xs = [];
    if(upper.checked){
        xs.push(getupperLetters());
    }
    if(lower.checked){
        xs.push(getlowerLetters());
    }
    if(number.checked){
        xs.push(getnumbers());
    }
    if(symbol.checked){
        xs.push(getsymbols());
    }
    if(xs.length===0){
        return ''
    }
    return xs[Math.floor(Math.random()* xs.length)]
}

generate.addEventListener('click',generatePassword);

copy.addEventListener('click',()=>{
    const textArea = document.createElement("textarea");
    const password = pass.innerHTML;
    if(!password){
        return;
    }
    textArea.value = password;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert("Passsword is copied to clipboard");
})