"use strict";

let calculation = "";
let calculationDisplay = "";

let result = 0;
let currentNum = "";

const printNum = (id) => {
    if (currentNum.slice(-1) == ")") {
        currentNum = currentNum.slice(0, -1);
        currentNum += id.innerHTML + ")";
        calculation = calculation.slice(0, -1);
        calculation += id.innerHTML + ")";
        calculationDisplay = calculationDisplay.slice(0, -1);
        calculationDisplay += id.innerHTML + ")";
    } else if (currentNum == "0") {
        currentNum == id.innerHTML
        calculation = calculation.slice(0, -1);
        calculation += id.innerHTML;
        calculationDisplay = calculationDisplay.slice(0, -1);
        calculationDisplay += id.innerHTML
    } else {
        currentNum += id.innerHTML;
        calculation += id.innerHTML;
        calculationDisplay += id.innerHTML;
    }


    document.getElementById("calc_display").value = calculationDisplay;

    console.log(calculation);
    console.log(calculationDisplay);
}

const printDec = () => {
    let prev = calculation.slice(-1);
    if (currentNum.indexOf(".") == -1 && prev != "+" && prev != "-" && prev != "/" && prev != "*") {
        currentNum += ".";
        calculation += ".";
        calculationDisplay += ".";

        document.getElementById("calc_display").value = calculationDisplay;

        console.log(calculation);
        console.log(calculationDisplay);
    }
    
}

const printOp = (id) => {
    let end = calculation.slice(-1);
    if (end == "+" || end == "-" || end == "*" || end == "/") {
        calculation = calculation.slice(0, -1);
        calculationDisplay = calculationDisplay.slice(0, -1);
    } else {
        if (currentNum == "") {
            currentNum == "0";
            calculation += "0";
            calculationDisplay += "0";
        } else {
            currentNum = "";
        }
    }

    calculation += id.value;
    calculationDisplay += id.innerHTML;
    document.getElementById("calc_display").value = calculationDisplay;

    console.log(calculation);
    console.log(calculationDisplay);
}

const negateOp = () => {
    if (currentNum == "") {
        document.getElementById("calc_display").value = "0";
    } else {
        calculation = calculation.slice(0, -currentNum.length);
        calculationDisplay = calculationDisplay.slice(0, -currentNum.length);
        currentNum += "*-1";
        currentNum = eval(currentNum);
        currentNum = "(" + `${currentNum}` + ")";

        calculation += currentNum;
        calculationDisplay += currentNum;
        document.getElementById("calc_display").value = calculationDisplay;

        console.log(calculation);
        console.log(calculationDisplay);
    }

    
}

const percentageOp = () => {
    if (currentNum == "") {
        document.getElementById("calc_display").value = "0";
    } else {
        calculation = calculation.slice(0, -currentNum.length);
        calculationDisplay = calculationDisplay.slice(0, -currentNum.length);

        currentNum += "/100";
        currentNum = eval(currentNum);
        currentNum = currentNum.toString();
    
        calculation += currentNum;
        calculationDisplay += currentNum;
        document.getElementById("calc_display").value = calculationDisplay;
    
        console.log(calculation);
        console.log(calculationDisplay);
    }


}

const printResult = () => {
    let end = calculation.slice(-1);
    if (end == "+" || end == "-" || end == "*" || end == "/") {
        document.getElementById("calc_display").value = calculationDisplay;
    } else {
        result = eval(calculation);
        calculation = result.toString();
        calculationDisplay = result.toString();
        document.getElementById("calc_display").value = result;

        currentNum = result.toString();
        console.log(calculation);
        console.log(calculationDisplay);
        console.log(result);
    }

}

const clearCalc = () => {
    calculation = "";
    calculationDisplay = "";
    currentNum = "";
    document.getElementById("calc_display").value = "0";

    console.log(calculation);
    console.log(calculationDisplay);
}