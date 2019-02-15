
function ta() {
var sidea = document.getElementById('dataA').value;
var sideb = document.getElementById('dataB').value;
var sidec = document.getElementById('dataC').value;
var sideA = parseInt(sidea);
var sideB = parseInt(sideb);
var sideC = parseInt(sidec);
console.log(sideA)
console.log(sideB)
console.log(sideC)
if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
alert("NOT A TRIANGLE! KINDLY RE-CHECK YOUR VALUES");
} else if (sideA === sideB && sideA === sideC && sideB === sideC) {
alert("YOUR TRIANGLE IS EQUILATERAL");
} else if (sideA === sideB || sideA === sideC || sideB === sideC) {
alert("THAT IS AN ISOSCELES TRIANGLE");
}  else if (sideA !== sideB && sideA !== sideC && sideB !== sideC && sideA + sideB > sideC || sideA + sideC > sideB || sideB + sideC > sideA)  {
alert("YOUR TRIANGLE IS SCALENE");
} else {
alert("NOT A TRIANGLE! KINDLY RE-CHECK YOUR VALUES");
}
}
