function calcCircumfrence(radius){ // meters
	var circumference = Math.PI * (radius * 2);

	return 'The circumference is: ' + circumference + 'm.';
}

function calcArea(radius){ // meters
	var area = Math.PI * (radius * radius);

	return 'The area is: ' + area + 'm2.';
}
document.write('The radius is 4m');

document.write('<br/>' + calcCircumfrence(4));
document.write('<br/>' + calcArea(4));

