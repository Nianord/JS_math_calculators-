function doSquare() {
	let squareField = document.querySelector('.square');
	let btn = squareField.querySelector('.square__btn');
	btn.addEventListener('click', countSquare);
	function countSquare() {
		let firstNum = squareField.querySelector('#square__side1').value;
		let secNum = squareField.querySelector('#square__side2').value;
		let resultSquare = squareField.querySelector('.square__result-square span');
		let resultLenght = squareField.querySelector('.square__result-lenght span');
		let resultSquareNumber = firstNum * secNum;
		let resultLenghtNumber = 2 * firstNum + 2 * secNum;
		resultSquare.innerHTML = resultSquareNumber;
		resultLenght.innerHTML = resultLenghtNumber;
		resultSquare.classList.add('counted');
		resultLenght.classList.add('counted');
	}
}
doSquare();
