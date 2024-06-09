let lastResult = 0; // Variable global para guardar el último resultado
let clear = false; // Variable global para reiniciar el display cada vez que se le da al igual

function appendNumber(number) {
	const display = document.getElementById('display'); 
	
	if (display.innerText === '0' || clear === true) {
		display.innerText = number; 
	} else {
		display.innerText += number; 
	}
} 

function appendOperator(operator_str) {
	const display = document.getElementById('display'); 
	// Extraer el último carácter del display
	const display_last_char = display.innerText.slice(-1); 
	
	if (!isNaN(display_last_char) || display_last_char === '.') {
		display.innerText += operator_str; 
	}
}

function clearDisplay() {
	document.getElementById('display').innerText = '0'; 
}

function calculateResult() {
	const display = document.getElementById('display'); 

	try {
		const expression = display.innerText.replace(/\^/g, '**'); // Reemplaza ^ con **
		lastResult = eval(expression); 
		display.innerText = lastResult; 
	} catch {
		display.innerText = 'Err'; 
	}
	clear = true; 
}

function removeNumber() {
	const display = document.getElementById('display'); 
	display.innerText = display.innerText.substring(0, display.innerText.length - 1) || '0'; 
}

function getAns() {
	const display = document.getElementById('display'); 
	
	if (display.innerText === '0') {
		display.innertext = lastResult; 
	} else {
		display.innerText += lastResult; 
	}
}

function appendDot() {
	const display = document.getElementById('display'); 

	if (!display.innerText.includes('.')) {
		display.innerText += '.'; 
	}
}