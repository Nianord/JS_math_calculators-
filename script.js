//считает данные по прямоугольнику
function doSquare() {
	let squareField = document.querySelector('.square');
	let btn = squareField.querySelector('.square__btn');
	btn.addEventListener('click', countSquare);
	function countSquare() {
		let firstNum = squareField.querySelector('#square__side1').value;
		let secNum = squareField.querySelector('#square__side2').value;
		let resultSquare = squareField.querySelector('.square__result-square span');
		let resultLenght = squareField.querySelector('.square__result-lenght span');
		let resultSquareNumber = (firstNum * secNum).toFixed(2);
		let resultLenghtNumber = (2 * firstNum + 2 * secNum).toFixed(2);
		resultSquare.innerHTML = resultSquareNumber;
		resultLenght.innerHTML = resultLenghtNumber;
		resultSquare.classList.add('counted');
		resultLenght.classList.add('counted');
	}
}
doSquare();

//считает данные по кругу
function doСircle() {
	let circleField = document.querySelector('.circle');
	let btn = circleField.querySelector('.circle__btn');
	btn.addEventListener('click', countСircle);
	function countСircle() {
		let radius = circleField.querySelector('#radius').value;
		let resultSquare = circleField.querySelector('.circle__result-square span');
		let resultLenght = circleField.querySelector('.circle__result-lenght span');
		let pNum = 3.1415926;
		let resultSquareNumber = (pNum * radius * radius).toFixed(2);
		let resultLenghtNumber = (2 * pNum * radius).toFixed(2);
		resultSquare.innerHTML = resultSquareNumber;
		resultLenght.innerHTML = resultLenghtNumber;
		resultSquare.classList.add('counted');
		resultLenght.classList.add('counted');
	}
}
doСircle();

//считает данные по треугольнику
function doTriangle() {
	let triangleField = document.querySelector('.triangle');
	let btn = triangleField.querySelector('.triangle__btn');
	btn.addEventListener('click', countTriangle);
	function countTriangle() {
		let firstNum = triangleField.querySelector('#triangle__side1').value;
		let secNum = triangleField.querySelector('#triangle__side2').value;
		let thirdNum = triangleField.querySelector('#triangle__side3').value;
		let resultSquare = triangleField.querySelector('.triangle__result-square span');
		let resultLenght = triangleField.querySelector('.triangle__result-lenght span');
		let resultLenghtNumber = (Number(firstNum) + Number(secNum) + Number(thirdNum)).toFixed(2);
		let halfLengthNumber = (resultLenghtNumber / 2).toFixed(2);
		let resultSquareNumber = (Math.sqrt(halfLengthNumber * (halfLengthNumber - firstNum) * (halfLengthNumber - secNum) * (halfLengthNumber - thirdNum))).toFixed(2);
		resultSquare.innerHTML = resultSquareNumber;
		resultLenght.innerHTML = resultLenghtNumber;
		resultSquare.classList.add('counted');
		resultLenght.classList.add('counted');
	}
}
doTriangle();

//угадай число
function guessNum() {
	let hiddenNumber = Math.round(Math.random() * 100);
	console.log(hiddenNumber);
	let guessNumField = document.querySelector('.guessNumber');
	let btn = guessNumField.querySelector('.guessNumber__btn');
	let result = guessNumField.querySelector('.guessNumber__result span');
	let againBtn = guessNumField.querySelector('.guessNumber__againbtn');
	if (againBtn) {
		againBtn.remove();
		result.innerHTML = '';
	}
	btn.addEventListener('click', checkNum);
	function checkNum() {
		let userNumber = guessNumField.querySelector('#guessNumber__number').value;
		if (userNumber !== '') {
			if (userNumber > hiddenNumber) {
				result.innerHTML = 'Ваше число больше загаданного, попробуйте еще раз';
			}
			else if (userNumber < hiddenNumber) {
				result.innerHTML = 'Ваше число меньше загаданного, попробуйте еще раз';
			}
			else if (userNumber == hiddenNumber) {
				result.innerHTML = 'Ура! Вы отгадали число!';
				result.outerHTML += '<br><button class="guessNumber__againbtn">Хочу еще!</button>';
				let againBtn = guessNumField.querySelector('.guessNumber__againbtn');
				againBtn.addEventListener('click', guessNum);
			}
		}
		else {
			result.innerHTML = 'Что-то пошло не так, попробуйте еще раз';
		}
	}
}
guessNum();