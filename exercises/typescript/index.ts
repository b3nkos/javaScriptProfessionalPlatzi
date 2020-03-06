console.log("hello typescript");

enum Color {
  Red = "Red",
  Gree = "Gree",
  Blue = "Blue",
  Yellow = "Yellow"
}

const favoriteColor: Color = Color.Blue;
console.log(`My favorite color is: ${favoriteColor}`);

//Functions
function add(a: number, b: number): number {
  return a + b;
}

console.log(`the sum is: ${add(3, 4)}`);

function fullName(firstName: string, lastName: string = 'Smith'): string {
  return `${firstName} ${lastName}`;
}

const chris = fullName('Chris', 'Mark');
console.log(chris);

//Interfaces
interface Rectangle {
  with: number,
  height: number,
  color?: Color
}

const rectangle: Rectangle = {
  with: 4,
  height: 9,
  color: Color.Blue
}

function area(rectangle: Rectangle) {
  return rectangle.height * rectangle.with;
}

console.log(area(rectangle));

rectangle.toString = function() {
  return this.color ? `A rectangle with color \"${this.color}\"` : `A rectangle`;
}

console.log(rectangle.toString());