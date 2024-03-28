//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

function areaTriangle(a, b, c) {
  const semip = (a + b + c) / 2;
  const area = Math.sqrt(semip * ((semip - a) * (semip - b) * (semip - c)));
  console.log(+area.toFixed(2));
}

areaTriangle(5, 6, 7);
