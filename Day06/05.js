var current_user = ["user1", "admin", "user3", "user4", "user5"];
var new_user = ["User1", "User6", "User7", "admin", "User9"];
new_user.forEach(function (newUser) {
    if (current_user.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " we need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
