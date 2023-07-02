  //Câu 1
// setTimeout(function B(){
//   var x = 'Hello';
//   console.log('B');
//   console.log(x);
//   return x;
// },3000)

// function A(x){
//   console.log('A');
//   console.log(x);
// }
// A()

  //Câu 2
// setTimeout(function B(){
//   // var x = document.getElementById("inputValue").value;
//   var x = 10;
//   console.log('B');
//   try { 
//     console.log(x + y)
//   }
//   catch (error) {
//     console.log("Đã xảy ra lỗi: " + error.message);
//   } finally {
//     console.log("Đã thực thi code finally");
//   }
//   return x;
// },3000)

// function A(x){
//   console.log('A');
//   console.log(x);
// }
// A()

  //Câu 3

function A(input, callback) {
    setTimeout(function() {
      const resultA = input * 2;
      document.write(`Function A: ${input} x 2 = ${resultA}<br>`);
      callback(resultA);
    }, 5000);
  }

  function B(input, callback) {
    const resultB = input * 2;
    document.write(`Function B: ${input} x 2 = ${resultB}<br>`);
    callback(resultB);
  }

  function C(input, callback) {
    const resultC = input * 2;
    document.write(`Function C: ${input} x 2 = ${resultC}<br>`);
    callback(resultC);
  }

  function D(input, callback) {
    const resultD = input * 2;
    document.write(`Function D: ${input} x 2 = ${resultD}<br>`);
    callback(resultD);
  }

  function E(input) {
    const resultE = input * 2;
    document.write(`Function E (cuối cùng): ${input} x 2 = ${resultE}<br>`);
  }

  function runProgram() {
    const inputValue = document.getElementById("inputValue").value;
    
    A(parseInt(inputValue), function(resultA) {
      B(resultA, function(resultB) {
        C(resultB, function(resultC) {
          D(resultC, function(resultD) {
            E(resultD);
          });
        });
      });
    });
  }