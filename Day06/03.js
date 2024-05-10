var userNames = ["Admin", "Shafique", "Zayan", "Hamdan", "Talha"];
userNames.forEach(function (userNames) {
    if (userNames === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userNames, ", thank you for logging in again."));
    }
});
