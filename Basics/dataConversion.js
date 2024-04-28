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

/********************     OPERATIONS     ****************************/

let value = 2
let negativeValue = -value
// console.log(negativeValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello"
let str2 = " john"
let str3 = str1 +  str2
// console.log(str3)

// console.log("1" + 2)
// //12
// console.log(1 + "2")
// //12
// console.log("1" + 2 + 2)
// //122 (string is first thus everything after that is treated as string)
// console.log(1 + 2 + "2")
//32 (number is first thus calculation then string is printed)
//whatever is first that is performed then the rest

// console.log((3 + 4) * 5 % 2)
//1

// console.log(+true) 
//1
// console.log(+"")
//0

//prefix(prepaid [first payment then use]) and postfix(postpaid [first use then payment])
//++x or x++ or --x or  x-- => valid ; ++5 or 5++ or --5 or 5-- => invalid
//as increment n decrement operator are used only with variables not any value

let x = 5
let y = 5
y = ++x
//x is assigned 5 then 1 is added = 6 then assigned to y = 6 (x: 6, y: 6)
y = x++
//x value assigned to y = 5 then 1 is added to x = 6 (x: 6, y: 5)
console.log(x, y)

