let result = document.querySelector("#result");
let calc = document.querySelector("#calc");

function calculate(value) {
    let cleanValue = value.split(" ").join("");

    for (let i = 0; i < cleanValue.length; i++) {
        if (cleanValue[i] === "/" && cleanValue[i + 1] === "0" && (i + 2 >= cleanValue.length || isNaN(cleanValue[i + 2]))) {
            result.value = "0-a bolunme yoxdur";
            setTimeout(() => {
                result.value = "";
            }, 1300);
            return;
        }
    }

    let calculatedValue = eval(value || null);

    if (isNaN(calculatedValue)) {
        result.value = "error";
        setTimeout(() => {
            result.value = "";
        }, 1300);
        return;
    } else {
        result.value = calculatedValue;
    }
}



function showNum(enteredValue) {
  if (!result.value) {
    result.value = "";
  }
  result.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
    e.preventDefault();

    if (e.key === "0") {
        result.value += "0";
    }else if (e.key === "1") {
        result.value += "1";
    }else if (e.key === "2") {
        result.value += "2";
    }else if (e.key === "3") {
        result.value += "3";
    }else if (e.key === "4") {
        result.value += "4";
    }else if (e.key === "5") {
        result.value += "5";
    }else if (e.key === "6") {
        result.value += "6";
    }else if (e.key === "7") {
        result.value += "7";
    }else if (e.key === "7") {
        result.value += "7";
    }else if (e.key === "8") {
        result.value += "8";
    }else if (e.key === "9") {
        result.value += "9";
    }


    if (e.key === "+") {
        result.value += "+";
    }else if (e.key === "-") {
        result.value += "-";
    }else if (e.key === "*") {
        result.value += "*";
    }else if (e.key === "/") {
        result.value += "/";
    }

    if (e.key === ".") {
        result.value += ".";
    }

    if (e.key === "Enter") {
        calculate(result.value);
    }

    if (e.key === "Backspace") {
        let resultultInput = result.value;
        result.value = resultultInput.substring(0, result.value.length - 1);
    }
}