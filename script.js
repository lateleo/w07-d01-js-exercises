function shoutyHello() {
  var name = prompt("What is your name?");
  console.log("HELLO, " + name.toUpperCase() + "!!!");
}

function evenOrOdd() {
  var num = prompt("Enter a number:");
  if (num % 2 == 0) {
    console.log("Your number is even.");
  } else if (num % 2 == 1) {
    console.log("Your number is odd.");
  } else {
    console.log("That's not a number.");
  }
}

function numberPrompter() {
  var i = 0
  while (i > 11 || i < 3 || i % 2 != 0) {
    i = prompt("Enter an even number between 3 and 11:")
  }
  alert("Good job!")
}

function bottlesOfBeer() {
  var num = 0
  while (!(num >= 1)) {
    num = prompt("How many bottles to start with?");
  }
  for (i = num; i > 1; i--) {
    console.log(i + " bottles of beer on the wall! " + i + " bottles of beer! Take one down, pass it around, " + (i-1) + " bottles of beer on the wall!");
  }
  console.log(num + " bottles of beer on the wall! " + num + " bottles of beer! Take one down, pass it around, no more bottles of beer on the wall!");
}

function fizzBuzz() {
  var num = 0;
  while (!(num >= 1)) {
    num = prompt("Enter a positive number:");
  }
  for (i = 1; i <= num; i++) {
    var output = i;
    if (i % 15 == 0) {
      output = "FizzBuzz";
    } else if (i % 3 == 0) {
      output = "Fizz";
    } else if (i % 5 == 0) {
      output = "Buzz";
    }
    console.log(output)
  }
}

function wordReverser() {
  var word = prompt("Please enter a word:")
  alert(word.split("").reverse().join(""))
}

function driversLicense() {
  var num = 0;
  while (!(num >= 1)) {
    num = prompt("Enter your age:");
  }
  var message = "You have full adult privileges.";
  if (num < 15) {
    message = "You're not eligible for a license yet.";
  } else if (num == 15) {
    message = "You can get a learner's permit.";
  } else if (num >= 16 && num <= 17) {
    message = "You can get a license, but you can't vote yet.";
  } else if (num >= 18 && num < 21) {
    message = "You can vote, but you can't drink yet.";
  } else if (num >= 21 && num < 25) {
    message = "You can drink, but you can't rent cars yet.";
  }
  alert(message)
}

function wordSorter() {
  var words = [];
  for (i = 1; i <= 5; i++){
    words.push(prompt("Please enter a word:").toLowerCase());
  }
  console.log(words.sort())
}
