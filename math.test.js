const { addition, subtraction, division, multiplication } = require( './math' );
// test the addiiton funktion 
test ("addition 1 + 2 to equals 3 ", () => {
    expect ( addition ( 1 , 2 ) ).toBe ( 3 );
} );
// test the  substraction function 
test ("subtraction 5 - 3 to equal 2", () =>{
    expect ( subtraction ( 5 , 3) ).toBe ( 2);
});

// test the division function with positive numbers.
test("division 6 / 3 toEqual 2",()=>{
   expect(division(6,3)).toBe(2);
})

// Testing the muliplication of two numbers
test("multiply 4 * 7 to be 28 ",()=>{
expect(multiplication(4,7)) .toBe(28);
})

// test if it throws an error when dividing by zero
test("division by zero throws error", () => {
    expect(() => division(1,0)).toThrow("Error! Division by zero is not allowed.");
});
