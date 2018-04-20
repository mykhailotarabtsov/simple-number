function simpleNumber(min, max) {
	var min = +min,
			max = +max;
	if(min > max) {
		alert('Мінімальне значення повинне бути меншим за максимальне!');
		return;
	}
	for(var i = min; i <= max; i++) {
		if(i % 2 > 0 && i >= 2) {
			alert(i);
		} else {
			continue;
		}
	}
}

var min = prompt('З якого числа починаємо відлік?', '2');
var max = prompt('На якому числі закінчуємо відлік?', '10');

simpleNumber(min, max);