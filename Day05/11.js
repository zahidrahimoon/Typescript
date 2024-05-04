var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
if (color === Color.Red) {
    console.log("Color is Red");
}
else {
    console.log("Color is not Red");
}
