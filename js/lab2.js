'use strict';
/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param  x Возводимое в степень число.
 * @param  n Степень, должна быть натуральным числом.
 * @return число возведённое в n-ную степень.
 */
function pow(x, n) {
let powx=x;
switch(n){
  case 0:
  x=1;
    break;
  case 1:
  break;
  case -1:
  x=1/x;
  break;
  default:
  if(n<0){
    for(let i=-2;i>=n;i--){
    powx=powx*x;
    }
    x=1/powx;
    break;
  }
    for(let i=2;i<=n;i++){
      powx=powx*x;
    }
    x=powx;
   break;
  
}
return x;
}

/**
 * Возвращает для данного натурального n сумму чисел от 1 до n. 
 *
 * @param  n Число до которого считаем сумму
 * @return sum, Сумма от 1 до n
 */
function sumTo(ler){
  let sum=0;
  for(let i = 1; i<=ler; i++){
    sum += i;
  }
  return sum;
}
/**
 * Возвращает факториал данного числа n 
 * используем правило n!=n*(n-1)! пока не дойдём до n=1
 * @param  n Число для которого считаем факториал
 * @return n!
 */
function factorial(n) {
  return (n != 0) ? n * factorial(n - 1) : 1;
}
/**
 * Возвращает n-ое число Фибоначи 
 * @param a = fib(1),
 * @param b = fib(2), эти значения по определению равны 1
 * @param c = a+b для 3;
 * для чисел больших, меняем значения a b на следущие знач фибоначи
 * @return b=n-ое число фибоначи
 */
function fib(n) {
  let a = 1n;
        let b = 1n;
        if (n==0) return 0;
        if (n==1) return 1;
        if (n==2) return 1;
        for (let i = 3; i <= n; i++) {
          let c = a + b;
          a = b;
          b = c;
        }
        return b;
}
/**
 * @param x = 1 число
 * @param y =  2 число
 * @return  function для сравнения y с x
 * 
 */
function compare(x) {
let resp = function (y){
  if(x>y){
    return true;
  }
  if(x==y){
   return null;
  }
    if(x<y){
      return false;
    }
}
  return resp;
}
/**
 * @param num = конечное число
 * @param cols =  число колонок
 * @return  undefined
 */
function printNumbers(num, cols){
      let rows = num / cols;
    for (let row = 0; row <= rows; ++row){ 
        let str = ''; 
        for (let col = 0; col < cols; ++col){ 
            str += (row + rows * col) + ' '; 
        }; 
        console.log(str); 
            }
      }
