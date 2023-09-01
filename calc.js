const inputElement = document.getElementById("input");

// Function to replace HTML entities with JavaScript operators
function replaceEntitiesWithOperators(expression) {
    return expression
        .replace(/&times;/g, '*')
        .replace(/&divide;/g, '/');
}

document.querySelector(".buttons").addEventListener("click", (event) => {
    const target = event.target;
    const buttonText = target.textContent.trim();

    if (buttonText === "=") {
        try {
            // Get the expression from the input and replace entities with operators
            const expression = inputElement.textContent;
            const evaluatedExpression = eval(replaceEntitiesWithOperators(expression));
            inputElement.textContent = evaluatedExpression;
        } catch (error) {
            inputElement.textContent = "Error";
        }
    } else if (buttonText === "C") {
        inputElement.textContent = "";
    } else {
        // Append the clicked button's text to the input
        inputElement.textContent += buttonText;
    }
});


