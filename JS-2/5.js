'use strict';
/**
 * Сложение
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function sloj(a, b) {
    return a + b;
}

/**
 * Вычитание
 * @param {number} a 
 * @param {number} b  
 * @returns {number}
 */
function vich(a, b) {
    return a - b;
}

/**
 * Деление
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function del(a, b) {
    return a / b;
}

/**
 * Умножение
 * @param {number} a  
 * @param {number} b  
 * @returns {number}
 */
function umnoj(a, b){
    return a * b;
}


function matthh(ar1, ar2,operation) {



    switch(operation) {
        case "+":
            return sloj(ar1, ar2);
        case "-":
            return vich(ar1, ar2);
        case "*":
            return umnoj(ar1, ar2);
        case "/":
            return del(ar1, ar2);
        default:
            throw new Error("error" + operation);
}
}

console.log (matthh (2, 3, "+"));
console.log (matthh (5, 4, "-"));
console.log (matthh (14, 2, "/"));
console.log (matthh (5, 5, "*"));