let currentSequence = [];
let currentAnswer = '';
let selectedCode = null;
let isDoubleTransform = false;
let currentFirstCode = '';
let currentSecondCode = '';
let selectedFirstCode = null;
let selectedSecondCode = null;

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

function toggleGameMode() {
    isDoubleTransform = !isDoubleTransform;
    const button = document.querySelector('.mode-toggle');
    button.textContent = isDoubleTransform ? 
        'Switch to Single Transform Mode' : 
        'Switch to Double Transform Mode';
    document.querySelector('.game-area').classList.toggle('double-transform');
    document.querySelector('.codes').classList.toggle('double-transform');
    startNewGame();
}

function generateDoubleTransformCodes() {
    const firstCodes = generateDistinctCodes();
    const secondCodes = generateDistinctCodes();
    return { firstCodes, secondCodes };
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
    
    // Display input shapes
    currentSequence.forEach(shape => {
        const div = document.createElement('div');
        div.className = 'shape';
        div.innerHTML = shape.html;
        inputShapes.appendChild(div);
    });

    if (isDoubleTransform) {
        // Generate first code (shown at top, not selectable)
        currentFirstCode = generateRandomCode();
        
        // Generate three options for second code
        const secondCodes = generateDistinctCodes();
        currentSecondCode = secondCodes[Math.floor(Math.random() * secondCodes.length)];
        
        // Display first code (single, shown at top, not interactive)
        const firstCodeDisplay = document.createElement('div');
        firstCodeDisplay.className = 'first-code-display';
        firstCodeDisplay.textContent = currentFirstCode;
        codesContainer.appendChild(firstCodeDisplay);
        
        // Calculate intermediate result (but don't display it)
        const intermediateSequence = applyCode(currentSequence, currentFirstCode);
        
        // Display second code options (these are selectable)
        const secondCodeGroup = document.createElement('div');
        secondCodeGroup.className = 'second-code-options';
        
        shuffleArray(secondCodes).forEach(code => {
            const button = document.createElement('button');
            button.className = 'code-button';
            button.textContent = code;
            button.onclick = () => selectCode(code, button);
            secondCodeGroup.appendChild(button);
        });
        
        codesContainer.appendChild(secondCodeGroup);
        
        // Show final result
        const finalSequence = applyCode(intermediateSequence, currentSecondCode);
        finalSequence.forEach(shape => {
            const div = document.createElement('div');
            div.className = 'shape';
            div.innerHTML = shape.html;
            outputShapes.appendChild(div);
        });
    } else {
        // Original single transform logic
        const codes = generateDistinctCodes();
        currentAnswer = codes[Math.floor(Math.random() * codes.length)];
        
        shuffleArray(codes).forEach(code => {
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
    
    const correctCode = isDoubleTransform ? currentSecondCode : currentAnswer;
    
    if (selectedCode === correctCode) {
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
    document.querySelector('.mode-toggle').addEventListener('click', toggleGameMode);
    startNewGame();
}); 