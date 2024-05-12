function large_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Size should be \"".concat(size, "\", and the message is ").concat(message, "!"));
}
large_shirt();
large_shirt("medium");
large_shirt("small", "I love Coding");
