function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return "Erreur : Division par zéro";
    }
    return a / b;
}


function calculate(operation) {
    
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Veuillez entrer des valeurs numériques valides";
    } else {
        if (operation === 'subtract') {
            result = subtract(num1, num2);
        } else if (operation === 'divide') {
            if (num2 === 0) {
                result = "Erreur : Division par zéro";
            } else {
                result = divide(num1, num2);
            }
        } else {

            result = "Opération non valide";
        }
    }

    document.getElementById("result").innerText = "Résultat : " + result;
}

function add(a, b, c) {
    
    return a + b + (c ? c : 0); 
}

function multiply(a, b, c) {
    return a * b * (c ? c : 1); 
}

function calculer(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    let result;

    // Vérifier que les valeurs numériques sont valides
    if (isNaN(num1) || isNaN(num2)) {
        result = "Veuillez entrer des valeurs numériques valides";
    } else {
        // Effectuer les calculs uniquement si les valeurs sont valides
        if (operation === 'add') {
            result = add(num1, num2, num3);
        } else if (operation === 'multiply') {
            result = multiply(num1, num2, num3);
        } else {
            result = "Opération non valide";
        }
    }

    document.getElementById("result").innerText = "Résultat : " + result;
}
