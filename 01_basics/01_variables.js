//here we are decalring the constant variable we are not able to change this variable
const account_Id = 14435

let account_Email = "xyz@email.com"

//prefer not to use var because issue in the block scope and functional scope
var accountPassword = "1234"

//you are able to declare the variable in the javascript without declaring the let or const keyword 
accountCity = "Surat"
accountPassword= "212121"
account_Email="abc@.com"

//console.log(account_Id);

//we can use this thing for the output in the table formate
console.table([accountCity,accountPassword,account_Email]);