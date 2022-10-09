//(2)

let name1 = "ALI iS HerE"  // initialing variable one
let message = " hello, How are you!?" // initialing variable two
completemessage =name1 + message  // joinning two variables in third variable
console.log(completemessage) //joinning two strings

//(3)
completemessage=completemessage.toLowerCase()
console.log(completemessage)  //converting message into lower case

completemessage=completemessage.toLocaleUpperCase()
console.log(completemessage)  //converting message into upper case



function toTitlecase(completemessage) {  //creating a function named title case
  return completemessage.toLowerCase().split(' ').map(function (word) { // converting meesage into lower case then split them with space
    return (word.charAt(0).toUpperCase()+ word.slice(1)) // after appling map function rhat convert them into list, using indexing
    //converting first letters into upper case and appling slice will omit first lower case of each word.
  }).join(' '); //joining these two function will results into title case.
}// not joinning will results into only showing only first upper case letters into interpertator

console.log(toTitlecase(completemessage))  //creating function of title case



function togglecase(completemessage) {
  return completemessage.toUpperCase().split(' ').map(function (word) {//created toggle case just by swaping upper case and lower case
    return (word.charAt(0).toLowerCase()+ word.slice(1))
  }).join(' ');
}

console.log(togglecase(completemessage))  //creating toggle case just by tweeking title case

//(4)
famous_qoute = "“I came, I saw, I conquered.” – Julius Caesar"

console.log (famous_qoute) // printing fav qoute


//(5)
qoute = "“I came, I saw, I conquered.”"
seprator = " - "
famous_person = "Julius Caesar"
message = qoute + seprator + famous_person //initializing fav qoute through variables

console.log (message)

//(6)
first_name= "  Shoaib"
Second_name = "Ahmed  "
console.log(first_name + Second_name)

console.log("||",  "\t", first_name, "\n" , Second_name,"\t", "||")  //using of /n and /t in console.log
console.log(first_name, "\t", Second_name)

//(7) 
operation1 = 4+4
operation2 = 12-4
operation3 = 8*1
operation4 = 64/8
console.log (operation1,"\t", operation2,"\t", operation3,"\t", operation4) ////printing digit 8 with diff operations 


//(8)

console.log(1+7)
console.log(16-8)
console.log(4*2)
console.log(8/1)  //printing digit 8 with diff operations(diff technique)

//(9)

fav_num = 1
fav_num_msg = "My favorite  number is: " // initializing variables@
revealing_fav_num = fav_num_msg + fav_num 
console.log(revealing_fav_num)

console.log("\n")

//(10)
// adding comments completed

//(11)

var friends_list = ["shoaib", "akhtar", "khalil", "saad"]  ///intialaizing variable list
for (let i=0; i<friends_list.length; i++){   ///loop for list to run one by one
  console.log(friends_list[i])  ///printing list [i] variable initialize in loop
}

//(12)


var message_greetings= "How are you!! " ///initalizing message 
for (let i=0; i<friends_list.length; i++){   // loop for running for specific time defined by .length
  console.log(message_greetings + friends_list[i])
}

//(13)

var fav_transportation = ["car: ", "bike: ", "electric bike: "]  ///initalizing variables
var statement_fav_trans  = ["i own a suzuki alto, best economical car", "although its risky i own one and have many advantages", "new era"] 
for (let i=0; i<fav_transportation.length; i++){  //initializing loop for fav transport to print one by one in console
  var statement_fav_trans  = ["i own a suzuki alto, best economical car", //statements for favourite transportation
  "although its risky i own one and have many advantages", "new era"] 
  
    console.log(fav_transportation[i], statement_fav_trans[i])  //printing using console.log,[i] variable is used with both statement
    // and fav transport list to print them side by side
   
}


//(14)

var guest_list = ["ali", "khan", "Mr. X", "Mr.Y"]  ///initializing guest list
var message_g_list = "welcome, Enjoy dinner!! Dear "////finitalizing messages for guests invited for dinner
for (var i=0 ; i< guest_list.length; i++){ ///by using loop
  console.log(message_g_list, guest_list[i])
}

//(15)
console.log(guest_list[1], " not available")  ///using index method for a specific guest to show message for him

guest_list[1]= "guest2"  //replacing guest at index at [1]
var update_g_list = guest_list // updating list
for (var i=0; i< update_g_list.length; i++){ // initialing loop
  console.log(message_g_list, update_g_list[i])  //printing updated list with greetings
  
    
}

var new_message_g_list= "welcome again"  //printing new message to guests
for (var i=0; i< update_g_list.length; i++){ 
  console.log(new_message_g_list, update_g_list[i]) 
}

update_g_list.push("new guest")
console.log(update_g_list)


