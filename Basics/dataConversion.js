let score = 33
// console.log(typeof score) 
//number
// console.log(typeof (score)) 
//number

let score2 = "33"
let strToNum = Number(score2)
// console.log(typeof score2) 
//string
// console.log(typeof strToNum) 
//number

/**
 * STRING TO NUMBER
 * "33" => 33
 * "33abc" => NaN
 * true => 1 ; false => 0
 */

let isLoggedIn = 1;
let booleanValue = Boolean(isLoggedIn)
// console.log(typeof isLoggedIn)
//number
// console.log(typeof booleanValue)
//boolean

/**
 * NUMBER TO BOOLEAN
 * 1 => true; 0 => false
 * "" => false
 * "anystring" => true
 */

let num = 10
let numToStr = String(num)
console.log(typeof num)
//number
console.log(typeof numToStr)
//string