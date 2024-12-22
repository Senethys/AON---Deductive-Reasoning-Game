let currentSequence = [];
let currentAnswer = '';
let selectedCode = null;

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function generateRandomCode() {
    const nums = [1, 2, 3, 4];
    return shuffleArray(nums).join('');
}

function generateDistinctCodes() {
    const codes = new Set();
    while (codes.size < 3) {
        codes.add(generateRandomCode());
    }
    return Array.from(codes);
}

function displayShapes() {
    const inputShapes = document.querySelector('.input-shapes');
    const outputShapes = document.querySelector('.output-shapes');
    const codesContainer = document.querySelector('.codes');
    const submitButton = document.querySelector('.submit-button');
    
    inputShapes.innerHTML = '';
    outputShapes.innerHTML = '';
    codesContainer.innerHTML = '';
    submitButton.disabled = true;

    currentSequence = shuffleArray(shapes);

    currentSequence.forEach(shape => {
        const div = document.createElement('div');
        div.className = 'shape';
        div.innerHTML = shape.html;
        inputShapes.appendChild(div);
    });

    const codes = generateDistinctCodes();
    currentAnswer = codes[Math.floor(Math.random() * codes.length)];
    const shuffledCodes = shuffleArray(codes);
    
    shuffledCodes.forEach(code => {
        const button = document.createElement('button');
        button.className = 'code-button';
        button.textContent = code;
        button.onclick = () => selectCode(code, button);
        codesContainer.appendChild(button);
    });

    const outputSequence = applyCode(currentSequence, currentAnswer);
    outputSequence.forEach(shape => {
        const div = document.createElement('div');
        div.className = 'shape';
        div.innerHTML = shape.html;
        outputShapes.appendChild(div);
    });
}

function selectCode(code, button) {
    document.querySelectorAll('.code-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
    selectedCode = code;
    document.querySelector('.submit-button').disabled = false;
}

function applyCode(sequence, code) {
    const result = new Array(4);
    for (let i = 0; i < 4; i++) {
        result[i] = sequence[parseInt(code[i]) - 1];
    }
    return result;
}

function checkAnswer() {
    const feedback = document.querySelector('.feedback');
    if (!selectedCode) {
        feedback.textContent = 'Please select a code first!';
        feedback.className = 'feedback error';
        return;
    }
    
    if (selectedCode === currentAnswer) {
        feedback.textContent = 'Correct! Generating new puzzle...';
        feedback.className = 'feedback success';
        document.querySelector('.submit-button').disabled = true;
        setTimeout(() => {
            startNewGame();
            feedback.textContent = '';
            feedback.className = 'feedback';
        }, 1500);
    } else {
        feedback.textContent = 'Incorrect. Try again!';
        feedback.className = 'feedback error';
    }
}

function startNewGame() {
    selectedCode = null;
    displayShapes();
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && selectedCode) {
        checkAnswer();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.submit-button').addEventListener('click', checkAnswer);
    startNewGame();
}); 