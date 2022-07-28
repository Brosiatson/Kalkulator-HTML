let buttons = document.querySelectorAll("button");
let number = ["", ""];
let resultContainer = document.querySelector(".result-container span");
let typeOfOperation = -1;
let indexOfNumber = 0;

const NUMBERS = (index, sign) => {

    buttons[index].addEventListener("click", () => {

        number[indexOfNumber] += sign;
        resultContainer.innerHTML = number[indexOfNumber]
    })
}

const OPERATIONS = (index) => {

    buttons[index].addEventListener("click", () => {

        resultContainer.innerHTML = ""

        if(indexOfNumber === 1){

            indexOfNumber += 0;

            if(index === 8){
                number[0] = parseFloat(number[0]) + parseFloat(number[1])
            }
            else if(index === 9){
                number[0] = parseFloat(number[0]) - parseFloat(number[1])
            }
            else if(index === 13){
                number[0] = parseFloat(number[0]) * parseFloat(number[1])
            }
            else if(index === 14){
                number[0] = parseFloat(number[0]) / parseFloat(number[1])
            }
            else if(index === 18){
                number[0] = parseFloat(number[0]) ** parseFloat(number[1])
            }
            
            number[1] = ""
            resultContainer.innerHTML = number[0]
        }
        else{

            if(index === 19){
                indexOfNumber += 0
            }
            else{
                indexOfNumber++
            }
        }

        if(index === 19){

            number[0] = Math.sqrt(parseFloat(number[0]))
            resultContainer.innerHTML = number[0]
        }

        if(index === 8){
            typeOfOperation = 0
        }
        else if(index === 9){
            typeOfOperation = 1
        }
        else if(index === 13){
            typeOfOperation = 2
        }
        else if(index === 14){
            typeOfOperation = 3
        }
        else if(index === 18){
            typeOfOperation = 4
        }
    })
}

const CLEAR = (index) => {
    buttons[index].addEventListener("click", () => {
        number = ["", ""]
        resultContainer.innerHTML = ""
        typeOfOperation = -1;
        indexOfNumber = 0;
    })
}

const RESET = (index) => {
    buttons[index].addEventListener("click", () => {
        number[indexOfNumber] = number[indexOfNumber].slice(0, -1)
        resultContainer.innerHTML = number[indexOfNumber]
    })
}

const RESULTS = (index) => {

    buttons[index].addEventListener("click", () => {

        console.log(number)

        if(indexOfNumber === 1){

            indexOfNumber = 0

            if(typeOfOperation === 0){
                resultContainer.innerHTML = parseFloat(number[0]) + parseFloat(number[1])
                number[0] = parseFloat(number[0]) + parseFloat(number[1])
                typeOfOperation = -1
            }
            else if(typeOfOperation === 1){
                resultContainer.innerHTML = number[0] - number[1]
                number[0] = parseFloat(number[0]) - parseFloat(number[1])
                typeOfOperation = -1
            }
            else if(typeOfOperation === 2){
                resultContainer.innerHTML = number[0] * number[1]
                number[0] = parseFloat(number[0]) * parseFloat(number[1])
                typeOfOperation = -1
            }
            else if(typeOfOperation === 3){
                resultContainer.innerHTML = number[0] / number[1]
                number[0] = parseFloat(number[0]) / parseFloat(number[1])
                typeOfOperation = -1
            }
            else if(typeOfOperation === 4){
                resultContainer.innerHTML = number[0] ** number[1]
                number[0] = parseFloat(number[0]) ** parseFloat(number[1])
                typeOfOperation = -1
            }

            number = [number[0], ""]
        }
    })
}

NUMBERS(0, "1");
NUMBERS(1, "2");
NUMBERS(2, "3");
NUMBERS(5, "4");
NUMBERS(6, "5");
NUMBERS(7, "6");
NUMBERS(10, "7");
NUMBERS(11, "8");
NUMBERS(12, "9");
NUMBERS(15, ".");
NUMBERS(16, "0");

OPERATIONS(8)
OPERATIONS(9)
OPERATIONS(13)
OPERATIONS(14)
OPERATIONS(18)
OPERATIONS(19)

CLEAR(3)

RESET(4)

RESULTS(17)
