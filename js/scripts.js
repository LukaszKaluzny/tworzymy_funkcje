var triangle1Area = getTriangleArea(0, 15);
var triangle2Area = getTriangleArea(20, 11);
var triangle3Area = getTriangleArea(3, 6);

function getTriangleArea(a, h) {
	if ( (a <= 0) || (h <= 0) ) {
		return 'Nieprawidłowe dane!';
	}
	return a * h / 2;
}
console.log(getTriangleArea(10,6));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);