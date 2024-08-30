document.addEventListener('DOMContentLoaded', () => {
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const operationSelect = document.getElementById('operation');
    const calculateButton = document.getElementById('calculateButton');
    const resultDiv = document.getElementById('result');

    calculateButton.addEventListener('click', () => {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        const operation = operationSelect.value;

        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = 'Por favor, insira números válidos.';
            return;
        }

        let result;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    resultDiv.textContent = 'Não é possível dividir por zero.';
                    return;
                }
                result = num1 / num2;
                break;
            default:
                resultDiv.textContent = 'Operação não suportada.';
                return;
        }

        resultDiv.textContent = `Resultado: ${result}`;
    });
});