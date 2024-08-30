function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

let randomNumber = generateRandomNumber();
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');
const messageDiv = document.getElementById('message');

function handleGuess() {
    const guessInput = document.getElementById('guess');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageDiv.textContent = 'Por favor, insira um número entre 1 e 100.';
        return;
    }

    if (guess < randomNumber) {
        messageDiv.textContent = 'Muito baixo! Tente novamente.';
    } else if (guess > randomNumber) {
        messageDiv.textContent = 'Muito alto! Tente novamente.';
    } else {
        messageDiv.textContent = 'Parabéns! Você acertou!';
        restartButton.style.display = 'block'; 
        submitButton.style.display = 'none';   
    }
}

function restartGame() {
    randomNumber = generateRandomNumber(); 
    document.getElementById('guess').value = ''; 
    messageDiv.textContent = '';
    restartButton.style.display = 'none'; 
    submitButton.style.display = 'block';  
}

submitButton.addEventListener('click', handleGuess);
restartButton.addEventListener('click', restartGame);