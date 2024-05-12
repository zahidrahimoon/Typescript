function cities(city, county) {
    if (city === void 0) { city = "Karachi"; }
    if (county === void 0) { county = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(county));
}
cities();
cities("Lahore");
cities("Dehli", "India");
cities("London", "UK");
