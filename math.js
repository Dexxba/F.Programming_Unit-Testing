// Addition funktion 
const addition  = (a,b) => a +b; 

//Substraction funktion
const  subtraction = (a, b) => a - b ;

// Division function
const division = (a, b) => {
    if(b === 0){
        throw new Error("Error! Division by zero is not allowed.");
    } else {
        return a / b;
    }
};

//Multiplication funktion
const multiplication = (a, b)=> a * b;

module.exports = { addition, subtraction, division, multiplication };