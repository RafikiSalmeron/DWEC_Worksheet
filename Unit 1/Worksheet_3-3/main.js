function calculateSupply(age, amountPerDay){
	var maxAge = 99;
	var total = Math.round((maxAge - age) * amountPerDay);

	return 'You will need ' + total + ' to last you until the ripe old age of ' + maxAge;
}

document.write('<br/>' + calculateSupply(20, 1.5));
document.write('<br/>' + calculateSupply(40, 2));
document.write('<br/>' + calculateSupply(50, 3.6));