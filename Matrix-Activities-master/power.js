const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

function power(mtrx,p){
    //mtrx is the matrix you input
  //p is the power of the matrix you want
let storedmatrix = mtrx;
for(let x = 0;x<p-1;x++){
  storedmatrix = Matrix(storedvalue.prod(mtrx));
  }
}
return storedmatrix;


//testing code
console.log(power(A,10));
