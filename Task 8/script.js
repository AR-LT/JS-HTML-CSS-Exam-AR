/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(x, y){
    this.x = x;
    this.y = y;
}
Calculator.prototype.sum = function (){
    console.log(this.x + this.y);
}
Calculator.prototype.subtraction = function (){
    console.log(this.x - this.y);
}
Calculator.prototype.multiplication = function (){
    console.log(this.x * this.y);
}
Calculator.prototype.division = function (){
    console.log(this.x / this.y);
}

let calc = new Calculator(10,2);
calc.sum(); 
calc.subtraction();
calc.multiplication();
calc.division();
