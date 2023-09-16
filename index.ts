//Getting Started Exercises with TypeScript and Node.js

//Q1. Install Node.js, TypeScript and VS Code on your computer.

//Ans: Since Installed

//Q2. Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

//Ans:
let friendName: string = "Eric";
console.log(`Hello ${friendName}, would you like to learn some Python today?`);

//Q3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

//Ans. 
let nameOfPerson: string = "Ayesha Arshad";
//Print name in UpperCase
console.log('Name in Uppercase is',nameOfPerson.toUpperCase());
//Print name in Lowercase
console.log('Name in Lowercase is',nameOfPerson.toLowerCase());
//Print name in TitleCase 
let titleCaseName = nameOfPerson.toLowerCase().replace(/(?:^|\s)\S/g,(match)=> match.toUpperCase());
console.log('Name in Titlecase is',titleCaseName);


//Q4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

//Ans:
let famousQuote: string = `Albert Einstein once said, "A person who never made a mistake never tried anything new.."`;

console.log(famousQuote);

//Q5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message. Print your message.

//Ans:
let famous_person: string = `Albert Einstein`
let message: string = `"A person who never made a mistake never tried anything new."`

console.log(`${(famous_person)} once said `+`"${message}"`)

//Q6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace 
//around the name is displayed. Then print the name after striping the white spaces.

//Ans:
let nameWithWhiteSapce: string = "\t\n  Ayesha Arshad  \n\t";

//print name with loading and trailing White Space 
console.log("Name with white Space is = ", nameWithWhiteSapce);

//Remove loading and trailing whitespace and print the stripped Name 
let strippedName: string = nameWithWhiteSapce.trim();
console.log("Stripped Name: ", strippedName);



//Q7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the 
//number 8. Be sure to enclose your operations in print statements to see the results.

//Ans:
//Addition
console.log('The addition of two numbers that makes 8 is 4 + 4 = ', 4 + 4);
//Subtraction
console.log('The subtraction of two numbers that makes 8 is 12 - 4 =',12 - 4);
//Multiplication
console.log('The mulitiplication of two numbers that makes 8 is 4 * 2 =', 4 * 2);
//Division
console.log('The division of two numbers that makes is 32/4 =', 32/4);



//Q8. You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
//Ans:

for (let index = 0; index < 4; index++) {
    console.log(5+3)
    console.log('--------------------------------------------------------------------------------------------------------------------------------') 
   }   

//Q9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message
// that reveals your favorite number. Print that message.
//Ans:
let favourite_Number:number = 786
let messageToShow:string =`${favourite_Number} is my  favourite number.`
console.log(messageToShow)

//Q10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point, just add
// your name and the current date at the top of each program file. Then write one sentence describing what 
//the program does.
//Ans:
console.log(`The addition of two numbers that makes 8 is 4 + 4 = `, 4 + 4); 

//Q11. Names: Store the names of a few of your friends in a array called names. Print each person’s 
//name by accessing each element in the list, one at a time.

//Ans:
let friendsNames: string[] = ["Sonia", "Beenish", "Gulnaz" , "Zainab"];
for (let i=0; i<friendsNames.length; i++){
    
    console.log(friendsNames[i]);
}

//Q12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s
//name, print a message to them. The text of each message should be the same, but each message should 
//be personalized with the person’s name.

//Ans:
let friendsList: string[] = ["Sonia", "Beenish", "Gulnaz", "Zainab"];
for (let i=0; i<friendsNames.length; i++){
    
    console.log(`Hi! ${friendsList[i]}, How are you doing today?`);
}

//Q13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples. Use your list to print a series of statements about 
//these items, such as “I would like to own a Honda motorcycle

//Ans:
let motorcycles: string[] = ["Honda", "Harley-Davidson", "Kawasaki", "Ducati", "Yamaha"];

// Iterate through the array and print statements
motorcycles.forEach((motorcycle: string) => {
    console.log(`I would like to own a ${motorcycle} motorcycle.`);
});

//Q14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make 
//a list that includes at least three people you’d like to invite to dinner. Then use your list to print 
//a message to each person, inviting them to dinner.

//Ans:
let invitedPersons: string[] = ['Mehwish','Rimsha','Shahzadi', 'Afia']
let message1:string = "You're invited to dinner tonight at my place. We'd love to have you for great food and conversation. "
console.log('!*Very first Invitation*!')
for (let i = 0; i < invitedPersons.length; i++) {
    let message:string = `Hey ${invitedPersons[i].toUpperCase()}!,${message1}`
    console.log(message) 
    message = ""
}


//Q15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
//send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating 
//the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person
// you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

//Ans:
let ab: string | undefined = invitedPersons.pop()
invitedPersons.push('Ghost')
console.log(`Hey ${ab?.toUpperCase()}!, We are sorry about your situation.Let's have dinner some other times`)
console.log(`Hey ${invitedPersons[invitedPersons.length - 1]}!,`+ message1) 
console.log('!*After removing a person*!')
for (let i = 0; i < invitedPersons.length; i++) {
    let message:string = `Hey ${invitedPersons[i].toUpperCase()}!,`
    console.log(message+message1) 
    message = ""
}

//Q16. More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of
// your list. • Print a new set of invitation messages, one for each person in your list.

//Ans:
console.log("!*Found a bigger dinner*!")

// unshift to add at very first index While shift is used to remove from very first
invitedPersons.unshift('Sana')
// splice to add at index(starting here is 2) middle to delete and last to add 
invitedPersons.splice(2,0,'Rida')
// push and pop for adding and removing from last 
invitedPersons.push('Queen')
for (let i = 0; i < invitedPersons.length; i++) {
    let message:string = `Hey ${invitedPersons[i].toUpperCase()}!,`
    console.log(message+message1) 
    message = ""
}




//Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only 
//two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
//from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
//actually have an empty list at the end of your program.

//Ans:
console.log("I'm very sorry that our dinner is re-scheduled.And for today their are only two persons invited.Thank you")
console.log('!*Removed persons*!')
for (let i = invitedPersons.length-1; i>1; i--) {
    let message:string = `Hey ${invitedPersons.pop()?.toUpperCase()}! `
    console.log(message+"We are sorry that you are not invited.But we'll arrange a dinner soon.Thank you for your cooperation") 
    message = ""
}
console.log('!*After removing persons*!')
for (let i = 0; i < invitedPersons.length; i++) {
    let message:string = `Hey ${invitedPersons[i].toUpperCase()}! `
    console.log(message+message1) 
    message = ""
}
console.log('!*Removed persons*!')
for (let i = invitedPersons.length; i>0; i--) {
    let message:string = `${invitedPersons.pop()?.toUpperCase()} is removed`
    console.log(message) 
    message = ""
}
console.log('!*Final list*!')
for (let i = 0; i < invitedPersons.length; i++) {
       console.log('Your list contains '+ invitedPersons[i])
}

//Q18. Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has 
//changed.

//Ans:
let locations:string[] = ['Hunza Valley','Attabad Lake','Naran Kaghan','Badshahi Mosque','Swat Valley']
//. print array in its original format*/
console.log('Locations in their original format')
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
//. without modification print in alphabetical order*/
console.log('Locations in alphabetically order without modification in array')
const arrayAlpha:string[] = locations.slice().sort()
for (let i = 0; i < arrayAlpha.length; i++) {
    console.log(arrayAlpha[i].toUpperCase());
}
//. show that your array is in its original format*/
console.log('Locations in their original format')
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
//. print array in reverse alphabetically order without modification of original array*/
console.log('Print array in reverse alphabetically order without modification of original array')
arrayAlpha.reverse()
for (let i = 0; i < arrayAlpha.length; i++) {
    console.log(arrayAlpha[i].toUpperCase());
}
//. show that your array is in its original format*/
console.log('Locations in real order')
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
//. reverse order again but this time changing array order*/
console.log('Locations reversed within order')
locations.reverse()
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
//. reverse order again and print that array is in its original order*/
console.log('Locations reversed to its original  order')
locations.reverse()
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
//. store it alphabetically order and print to make sure its order has been changed*/
console.log('Locations in alphbetically order with changing original order')
locations.sort()
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}
//. Now store it reverse alphabetically order and print to make sure its order has been changed*/
console.log('Locations in reverse alphbetically order with changing original order')
locations.reverse()
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].toUpperCase());
}


//Q19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating 
//the number of people you are inviting to dinner.

//Ans:
console.log('The count of remaining guests are '+invitedPersons.length)


//Q20. Think of something you could store in a array. For example, you could make a list of mountains, 
//rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
//containing these items.

//Ans:
let pak_places: string[] = ['Data Darbar','Badshahi Mosque','Shrine of Lal Shahbaz Qalandar','Faisal Mosque','Blue Mosque Replica']
   console.log('The list of Pak famous places is ')
    for (let i = 0; i < pak_places.length; i++) {
       console.log(i+1 + '.'+'  '+pak_places[i]);  
    }

//Q21: They think of something you could store in a TypeScript Object. Write a program that creates
//Objects containing these items.

//Ans:
const objects = {
    Data_Darbar : 'lahore',
    Badshahi_Mosque : 'lahore',
    Shrine_of_Lal_Shahbaz_Qalandar : 'Sehwan Sharif Sindh',
    Faisal_Mosque : 'Islamabad',
    Blue_Mosque_Replica : 'Islamabad'
}
console.log(objects)

//Q22: Intentional Error: If you haven’t received an array index error in one of your programs yet, 
//try to make one happen. Change an index in one of your programs to produce an index error. Make 
//sure you correct the error before closing the program.

//Ans:
let numbers: number[] = [15, 25, 35, 45, 55];

let errorNumber = numbers[7]; // This will cause an error

console.log(errorNumber); // We won't see this message


//Q23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your
//prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

const places = {
    Data_Darbar : 'lahore',
    Badshahi_Mosque : 'lahore',
    Shrine_of_Lal_Shahbaz_Qalandar : 'Sehwan Sharif Sindh',
    Faisal_Mosque : 'Islamabad',
    Blue_Mosque_Replica : 'Islamabad'
}
//1
console.log("Is Data_Darbar == lahore? MY prediction is that TRUE")
console.log(places.Data_Darbar === 'lahore')
//2
console.log("Is Data_Darbar == Faisalabad? MY prediction is that false")
console.log(places.Data_Darbar ===  'Faisalabad')
//3
console.log("Is Shrine_of_Lal_Shahbaz_Qalandar == Sehwan Sharif Sindh? MY prediction is that True")
console.log(places.Shrine_of_Lal_Shahbaz_Qalandar === 'Sehwan Sharif Sindh')
//4
console.log("Is Shrine_of_Lal_Shahbaz_Qalandar == Faisalabad? MY prediction is that False")
console.log(places.Shrine_of_Lal_Shahbaz_Qalandar === 'Faisalabad')
//5
console.log("Is Badshahi_Mosque == lahore? MY prediction is that TRUE")
console.log(places.Badshahi_Mosque === 'lahore')
//6
console.log("Is Badshahi_Mosque == Islamabad? MY prediction is that false")
console.log(places.Badshahi_Mosque === 'Islamabad')
//7
console.log("Is Faisal_Mosque  == Islamabad? MY prediction is that TRUE")
console.log(places.Faisal_Mosque  === 'Islamabad')
//8
console.log("Is Faisal_Mosque  == lahore? MY prediction is that false")
console.log(places.Faisal_Mosque  === 'lahore')
//9
console.log("Blue_Mosque_Replica == Islamabad? MY prediction is that TRUE")
console.log(places.Blue_Mosque_Replica === 'Islamabad')
//10
console.log("Is Blue_Mosque_Replica == lahore? MY prediction is that false")
console.log(places.Blue_Mosque_Replica === 'lahore')


//Q24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
//try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
//and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

// • Tests for equality and inequality with strings

let string1 = "Mango";
let string2 = "Grapes";

console.log("Are string1 and string2 equal? I predict False.");
console.log(string1 == string2);

console.log("Are string1 and string2 not equal? I predict True.");
console.log(string1 != string2);

let name1 = "Ayesha";
let name2 = "Arshad";

console.log("Are name1 and name2 equal ignoring case? I predict True.");
console.log(name1.toLowerCase() == name2.toLowerCase());

// • Tests using the lower case function

console.log("Are name1 and name2 not equal ignoring case? I predict False.");
console.log(name1.toLowerCase() != name2.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let valueNumber1: number = 40;
let valueNumber2: number = 20;

console.log("Are valueNumber1 and valueNumber2 equal ? I predict False.");
console.log(valueNumber1 == valueNumber2);

console.log("Are valueNumber1 and valueNumber2 not equal ? I predict True.");
console.log("This is - ", valueNumber1 != valueNumber2,  "- that valueNumber1 and valueNumber2 are not equal",);

console.log("Are valueNumber1 is less than valueNumber2  ? I predict False.");
console.log("This is - ", valueNumber1 < valueNumber2,  "- that valueNumber1 is less than valueNumber2",);

console.log("Are valueNumber1 is greater than valueNumber2  ? I predict True.");
console.log("This is - ", valueNumber1 > valueNumber2,  "- that valueNumber1 is  greater than  valueNumber2",);

console.log("Are valueNumber1 is greater than or equal to valueNumber2  ? I predict True.");
console.log("This is - ", valueNumber1 >= valueNumber2,  "- that valueNumber1 is  greater than or equal to valueNumber2",);

console.log("Are valueNumber1 is less than  or equal to valueNumber2  ? I predict False.");
console.log("This is - ", valueNumber1 <= valueNumber2,  "- that valueNumber1 is  less than  or equal to valueNumber2",);

// • Tests using "and" and "or" operators

let personAge: number = 45;
let personCity: string = "Chiniot";
let personCity2: string = "Karachi";

if (personAge > 18 && personCity == "Chiniot"){
    console.log(`You are a gentle person`);
}
else{
    console.log(`You should be kept under observation`);
};

if (personCity == "Chiniot" || personCity2 == "Karachi"){
    console.log("It is equally GOOD")
}
else{
    console.log("Try to choose a better place of li")
}
// • Test whether an item is in a array
// • Test whether an item is not in a array

let citiesOfPakistan: string[] = ["Karachi", "Islamabad", "Faisalabad", "Chiniot"]
let theCity: string = "Faisalabad"
if (citiesOfPakistan.includes(theCity)){
    console.log(`Your city ${theCity} includes in Pakistan`)
}   
let theCity2: string = "Tokyo"
if (citiesOfPakistan.includes(theCity2)){
    console.log(`Your city ${theCity} includes in Pakistan`)
}
else{
    console.log(`Your city ${theCity2} does not includes in Pakistan`)
}   


//Q25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and 
//assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player 
//just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails 
//will have no output.)

//Ans:
let player1: string = "Ayesha Arshad"
let alienColor: string = 'green';

if (alienColor === 'green') {
  console.log(`Ms. ${player1} just earned 5 points.`);
}

let alienColor2: string = 'red';

//  Version 2

if (alienColor2 === 'green') {
  console.log(`Ms. ${player1} just earned 5 points.`);
}

//Q26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.

//Ans:
let alienColor3 = 'yellow'
if (alienColor3 === 'green') {
    console.log(`Ms. ${player1} just earned 5 points.`);
  }
  else {
    console.log(`Ms. ${player1} just earned 10 points.`);
  }

  //Q27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

//Ans:
// let player1: string = "Ayesha Arshad"
// let alienColor: string = 'green';
// let alienColor2: string = 'red';
// let alienColor3: string = 'yellow';

// Version 1
if (alienColor === 'green') {
  console.log(`Ms. ${player1} has earned 5 points for shooting the green alien.`);
} 
else if (alienColor === 'yellow') {
  console.log(`Ms. ${player1} has  earned 10 points for shooting the yellow alien.`);
} 
else if (alienColor === 'red') {
  console.log(`Ms. ${player1} has earned 15 points for shooting the red alien.`);
}
// Version 2
if (alienColor2 === 'green') {
    console.log(`Ms. ${player1} has earned 5 points for shooting the green alien.`);
  } 
  else if (alienColor2 === 'yellow') {
    console.log(`Ms. ${player1} has  earned 10 points for shooting the yellow alien.`);
  } 
  else if (alienColor2 === 'red') {
    console.log(`Ms. ${player1} has earned 15 points for shooting the red alien.`);
  }
  // Version 3
if (alienColor3 === 'green') {
    console.log(`Ms. ${player1} has earned 5 points for shooting the green alien.`);
  } 
  else if (alienColor3 === 'yellow') {
    console.log(`Ms. ${player1} has  earned 10 points for shooting the yellow alien.`);
  } 
  else if (alienColor3 === 'red') {
    console.log(`Ms. ${player1} has earned 15 points for shooting the red alien.`);
  }

//Q28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for 
//the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//•If the person is age 65 or older, print a message that the person is an elder.

//Ans:
let ageOfPerson: number = 55;

if (ageOfPerson < 2 ){
    console.log(`The person is a baby`)
}
if (ageOfPerson >= 2 && ageOfPerson < 4 ){
    console.log(`The person is a toddler`)
}
if (ageOfPerson >= 4 && ageOfPerson < 13 ){
    console.log(`The person is a kid`)
}
if (ageOfPerson >= 13 && ageOfPerson < 20 ){
    console.log(`The person is a teenager`)
}
if (ageOfPerson >= 20 && ageOfPerson < 65 ){
    console.log(`The person is an adult`)
}
if (ageOfPerson > 65 ){
    console.log(`The person is elder`)
}


//Q29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
//if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!

//Ans:
let favorite_fruits: string[] = ["Banana", "Apple", "Grapes"]
if (favorite_fruits.includes("Banana")){
    console.log(`Hi Dear! You Really Like Bananas`)
}
if (favorite_fruits.includes("Apple")){
    console.log(`Hi Dear! You Really Like Apples`)
}
if (favorite_fruits.includes("Grapes")){
    console.log(`Hi Dear! You Really Like Grapes`)
}
if (favorite_fruits.includes("Orange")){
    console.log(`Hi Dear! You Really Like Orange`)
}
else {
    console.log(`Hi Dear! Orange is not one of your favorite fruits`)
}
if (favorite_fruits.includes("Strawberry")){
    console.log(`Hi Dear! You Really Like Strawberry`)
}
else {
    console.log(`Hi Dear! Strawberry is not one of your favorite fruits`)
}

//Q30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are 
//writing code that will print a greeting to each user after they log in to a website. Loop through the 
//array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userNames: string[] = ["Humna", "Zoni", "Faiza"];
for (let i=0; i<userNames.length; i++ ){
    if (userNames[i] === "Humna"){
        console.log(`Hello Humna, would you like to see a status report`);
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}

//Q31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

//Ans:
userNames.splice(0, 3);
console.log(userNames);
if (userNames = []){
    console.log(`We need to find some users`)
}

//Q32. Checking Usernames: Do the following to create a program that simulates how websites ensure that 
//everyone has a unique username.
// Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
//also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a 
//message that the person will need to enter a new username. If a username has not been used, print a message 
//saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

//Ans:
let current_users: string[] = ["Sonia", "Sana", "Zainab", "Sania", "Zahra"];
let new_users: string[] = ["Zoya", "Jaweria", "Muskan", "Noor", "Anumtah"];

for (let i=0; i<new_users.length; i++){
    let isNameTaken = current_users.some(
        (current_users) => current_users.toLowerCase() === new_users[i].toLowerCase()
        );
        if (isNameTaken){
            console.log(`The Name "${new_users[i]}" has already been used. You will need to enter a new username.`);
        }
        else {
            console.log(`The Name "${new_users[i]}" is available.`);
        }
}


//Q33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal 
//numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should 
//read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

//Ans:
let ordinalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i=0; i<ordinalNumbers.length; i++){
    if (ordinalNumbers[i] = 1){
        console.log(`"1st"`);
    }
    if (ordinalNumbers[i] = 2){
        console.log(`"2nd"`);
    }
    if (ordinalNumbers[i] = 3){
        console.log(`"3rd"`);
    }
    if (ordinalNumbers[i] = 4){
        console.log(`"4th"`);
    }
    if (ordinalNumbers[i] = 5){
        console.log(`"5th"`);
    }
    if (ordinalNumbers[i] = 6){
        console.log(`"6th"`);
    }
    if (ordinalNumbers[i] = 7){
        console.log(`"7th"`);
    }
    if (ordinalNumbers[i] = 8){
        console.log(`"8th"`);
    }
    if (ordinalNumbers[i] = 9){
        console.log(`"9th"`);
    }
    }

//Q34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
//and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the 
//name of the pizza. For each pizza you should have one line of output containing a simple statement 
//like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional 
//sentence, such as I really love pizza!

//Ans:
let pizza:string[] = ['Pepproni','Chicken Fajita','Chicken Milai Boti', 'Margherita',]
for (let i = 0; i <pizza.length; i++) {
    console.log(pizza[i])
}
pizza.forEach(element => {
      console.log(`I like ${ element.toUpperCase() } Pizza`);
      
});
console.log("I really love pizza's")

//Q35. Animals: Think of at least three different animals that have a common characteristic. Store the names of 
//these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program 
//to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your 
//program stating what these animals have in common. You could print a sentence such as Any of these animals would 
//make a great pet!

//Ans:
const pets:string[] = ['Rabit','Cat','Parrot']
for (let i = 0; i <pets.length; i++) {
    console.log(pets[i])
}
for (let i = 0; i < pets.length; i++) {
    console.log(`I like ${pets[i].toUpperCase()}s`)
}
console.log("I really like these kinds of pets's")

//Q36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that 
//should be printed on the shirt. The function should print a sentence summarizing the size of the shirt 
//and the message printed on it. Call the function.

//Ans:
function make_shirt(size: string, message:string ){
    console.log(`We are making "${size}" size shirts with the  message "${message}"`)
}
make_shirt("medium", "Pakistan Zindabad");


//Q37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
//I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a 
//different message.

//Ans:
make_shirt("Small", "I love TypeScript.");
make_shirt("Medium", "The Programmers.");
make_shirt("Large", "Ayesha Developer.");

//Q38. Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
//country a default value. Call your function for three different cities, at least one of which is not in the 
//default country.

//Ans:
function describe_city(city: string, country: string){
    console.log(`${city} is in ${country = "Pakistan"}`)
    }
    describe_city("Karachi", "Pakistan" )
    describe_city("Faisalabad", "Pakistan" )
    describe_city("Chiniot", "Pakistan" )

//Q39. City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

//Ans:
function city_country(city:string, country: string) {
    console.log(`"${city}, ${country}"`);
}
city_country("Chiniot", "Pakistan")
city_country("New Delhi", "India")
city_country("California", "United States")

//Q40. Album: Write a function called make_album() that builds a Object describing a music album. The function 
//should take in an artist name and an album title, and it should return a Object containing these two pieces of 
//information. Use the function to make three dictionaries representing different albums. Print each return value 
//to show that Objects are storing the album information correctly. Add an optional parameter to make_album() 
//that allows you to store the number of tracks on an album. If the calling line includes a value for the number 
//of tracks, add that value to the album’s Object. Make at least one new function call that includes the number 
//of tracks on an album.

//Ans:
interface album {
    artist: string;
    title : string
    track?: number
} 
function make_album(album: album) {
      album.track = 6;
      console.log(album);    
}
make_album({artist:'Ayesha',title: 'Lifeline'})

//Q41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.

//Ans:
function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }  
  let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  show_magicians(magicianNames);
  console.log(show_magicians);

//Q42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
//that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() 
//to see that the list has actually been modified.

//Ans:
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
  
    for (let magician of magicians) {
      greatMagicians.push(`${magician} the Great`);
    }  
    return greatMagicians;
  }
    let magicianNames2: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  let greatMagicians = make_great(magicianNames2);
    show_magicians(greatMagicians);
    console.log(show_magicians);

//Q43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the 
//array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a 
//separate array. Call show_magicians() with each array to show that you have one array of the original names and one 
//array with the Great added to each magician’s name.


//Ans:
let originalMagicianNames: string[] = [...magicianNames];
  
  // Call make_great with the copy and store the result in a new array
  let greatMagicians2 = make_great(originalMagicianNames);
  
  console.log("Original Magicians:");
  show_magicians(originalMagicianNames);
  
  console.log("\nGreat Magicians:");
  show_magicians(greatMagicians);

//Q44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should 
//have one parameter that collects as many items as the function call provides, and it should print a summary of the 
//sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

//Ans:
function yourSandwich(...items: string[]) {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
      console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
  }
  
  // Call the function three times with different numbers of arguments
  yourSandwich("Ham", "Cheese", "Lettuce");
  yourSandwich("Turkey", "Tomato");
  yourSandwich("Peanut Butter", "Jelly", "Banana", "Honey");


//Q45: Cars: Write a function that stores information about a car in a Object. The function should always receive a 
//manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function 
//with the required information and two other name-value pairs, such as a color or an optional feature. Print the 
//Object that’s returned to make sure all the information was stored correctly.

//Ans:
function cars_info(manufacturer: string, model: number){
    let cars = {
        manufacturer,
        model,
    }
return cars
}
let car1 = cars_info("Mitsubishi Lancer", 1912);
console.log(car1)

function carsInfo(manufacturer: string, model: number) {
    let car = {
      manufacturer,
      model,
    };
    return car;
  }
  
  const carData = cars_info("Titanic", 1914);
  console.log(carData);

//***********************************************Complete Assignments **************************************************//