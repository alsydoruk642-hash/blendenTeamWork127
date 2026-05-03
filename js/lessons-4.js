const numberContainer = document.querySelector('.number-container');

for (let i = 0; i < 100; i++) {
    const numberBlock = document.createElement('div');
    numberBlock.classList.add('number');
    const randomNum = Math.floor(Math.random() * 100) + 1;
    numberBlock.textContent = randomNum;

    if (randomNum % 2 === 0) {
        numberBlock.classList.add('even');
    } else {
        numberBlock.classList.add('odd');
    }
    numberContainer.appendChild(numberBlock); 
}  

