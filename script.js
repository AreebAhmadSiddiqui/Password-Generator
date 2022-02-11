let rangeCount = document.getElementById("numberOfCharactersRange");
let numberCount = document.getElementById("numberOfCharacters");
let includeUpperCaseElement = document.getElementById("includeUpperCase");
let includeNumberElement = document.getElementById("includeNumber");
let includeSymbolsElement = document.getElementById("includeSymbols");

let arrayofnumbers=arraycreator(48,57);
let arrayofuppercase=arraycreator(65,90);
let arrayoflowercase=arraycreator(97,122);
let arrayofsymbols=arraycreator(33,47).concat(arraycreator(58,64)).concat(arraycreator(91,96)).concat(arraycreator(123,126));

rangeCount.addEventListener("input", sync);
numberCount.addEventListener("input", sync);

function sync(e) {
    let x = e.target.value;
    rangeCount.value = x;
    numberCount.value = x;
}

document.querySelector(".btn").addEventListener("click", function () {
    numberC=numberCount.value
    includeUpperCase = includeUpperCaseElement.checked;
    includeNumber = includeNumberElement.checked;
    includeSymbols =includeSymbolsElement.checked;
    let password = passwordGenerator(numberCount, includeUpperCase, includeNumber, includeSymbols);
    document.querySelector(".show_password").innerHTML = password;
})

function passwordGenerator(numberCount, includeUpperCase, includeNumber, includeSymbols) {
    let password=[];
    let codes=arrayoflowercase;
    if(includeUpperCase)codes=codes.concat(arrayofuppercase);
    if(includeNumber)codes=codes.concat(arrayofnumbers)
    if(includeSymbols)codes=codes.concat(arrayofsymbols);
   for(let i=1;i<=numberC;i++){
       let char=codes[Math.floor(Math.random()*codes.length)];
       password.push(String.fromCharCode(char));
   }
   return password.join('');
}

function arraycreator(low,high) {
    let a=[];
    for(let i=low;i<=high;i++){
        a.push(i);
    }
    return a;
}

/* document.querySelector(".btn").addEventListener("click",sync);
// function sync(e) {
//    e.target.style.backgroundColor="red";
// // (.btn).style.backgroundColor="red";
// }

/* e.target se ham jahan se event listen hua use target kar paenge
matlab ki agar man lo maine click pe event laga diya to jab main button pe click karunga to e.target mera .btn pe point karega  */