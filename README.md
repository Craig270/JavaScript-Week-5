# JavaScript-Week-5

Craig270-JavaScript-Week-5

Week two questions:

Week two W.i.L. :
Inheritance with extends to take in other classes properties and methods

Things to Google:

Abstraction: Hides certain details and shows only the essential features of the object. Means to hide away the smaller details inside something, such as hiding it in your object. Lets us talk about ideas or problems in our code at a higher level. An example of abstraction in the real world could be your car. You can know how to drive without needing to know exactly how the engine is combusting and giving you car the ability to move. Hide details and show only essentials.

Polymorphisem - Poly, many. morphisem, form. -- Overrides a method inside the child class. .speak in the parent maybe console.logs something, 'this is a generic animal sound.' where .speak in the child object maybe more defined based on what that object is like a dog, .speak would be "woof! woof" A strength of polymorphism is sharing behaviours, and allowing custom overrides.

Encapliation: The needed variables together with the functions that used them all stored together in an object together.

Class: Classes are a template for creating objects. That can contain the bar bones needed to populate the object with data, such as, propertiers (this.animal = aniaml) or methods in the form of functions inside and object.

Inharitence: allows us to share properties and methods more broadly around in our program. Some classes or objects may contain the same properties and instead of writing all that out many times over, we can have them inharit those properties and methods from other objects. Helping eleminate the need to repeat out code.

Week 5 research:

What are the four pillars of Object-Oriented Programming? Explain each pillar.

Abstraction: Hides certain details and shows only the essential features of the object. Means to hide away the smaller details inside something, such as hiding it in your object. Lets us talk about ideas or problems in our code at a higher level. An example of abstraction in the real world could be your car. You can know how to drive without needing to know exactly how the engine is combusting and giving you car the ability to move. Hide details and show only essentials.

Polymorphisem - Poly, many. morphisem, form. -- Overrides a method inside the child class. .speak in the parent maybe console.logs something, 'this is a generic animal sound.' where .speak in the child object maybe more defined based on what that object is like a dog, .speak would be "woof! woof" A strength of polymorphism is sharing behaviours, and allowing custom overrides.

Encapliation: The needed variables together with the functions that used them all stored together in an object together. Having relativ data stored together with it's methods (functions).

Inharitence: allows us to share properties and methods more broadly around in our program. Some classes or objects may contain the same properties and instead of writing all that out many times over, we can have them inharit those properties and methods from other objects. Helping eleminate the need to repeat out our code. This is also where parent and child concept shows up. Child inhariting the parents methods and properties.

What is the relationship between a Class and an Object?
Classes are a template for creating objects. That can contain the bar bones needed to populate the object with data, such as, propertiers (this.animal = aniaml) or methods in the form of functions inside and object.
What is an exception and what are best practices for handling them?

basically the ability to handle errors in your code either from user input or data coming in from another source to your code. The try statement should be wrapped around the code you expect the potential error to occure on this allows you to define a block of code to be tested for errors while the contained code is being execuited. Then use the catch method to define a block of code to be executed if an error happens in the try block. To handle the expected error you could get, catch(err) would grab the error you got then console.log "Hey you got an error when running this got, the error was" + err. err being what the javascip error would be. Throw staatment allows you to create a custom error. The combination of the 3 together allows you to have more control over the control of your program as well as implement custome error messages.

try{} -- Lets you test a block of code for errors.

catch{} -- Handle the error.

throw{} --create custom errors

finally{} --exicuite code trying catch regaurdless of the result.

What is your favorite thing you learned this week?

Learning about all the loops in JS was a very cool thing to stumble across. Although I need more practice with them because I tried to use a 'for of' loop in my code this week and messed it up pretty badly!

Here are all types of for loops in JS:

// for
for (let i = 0; i < arr.length; i++) {
// i is index, arr[i] is element
}

// for
..in
for (let i in arr) {
// i is index, arr[i] is element
}

// for
..of
for (let elt of arr) {
// index not available, elt is element
}

// forEach
arr.forEach((elt, i) => {
// i is index, elt is element
});

1.skittles
2.m&m
3.snikers
4.twix
5.kit-kat
6.starburst
7.reeses
8.life savers
9.milky way
10.gummy bear
