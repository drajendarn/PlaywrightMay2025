//11_JavascriptFunctions.js

// Task 1: Function Declaration

function userProfile(names) {
  console.log("Hello," + names + "!");
}
userProfile("Divya");

//Task 2: Arrow Function
let double = (number) => {
  return number * number;
};
console.log(double(5));

//Task 3: Anonymous Function
setTimeout(function () {
  console.log("This message is delayed by 2 seconds");
}, 2000);

//Task 4: Callback Function

function getUserData(callback) {
  setTimeout(function () {
    const user = {
      name: "Divya",
      age: 25,
    };
    callback(user); // Pass the user object to the callback
  }, 3000); // 3 seconds delay
}

// Call getUserData and provide a callback to handle the result
getUserData(function (user) {
  console.log("User's Name:", user.name);
  console.log("User's Age:", user.age);
});

//with only username
function getUserData1(callback) {
  setTimeout(function () {
    const user1 = "Divya";
    callback(user1); // Pass the user object to the callback
  }, 3000); // 3 seconds delay
}

// Call getUserData and provide a callback to handle the result
getUserData1(function (user1) {
  console.log(user1);
});
