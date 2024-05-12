function large_shirt(size: string = "large", message:string = "I love Typescript") {
    console.log(`Size should be "${size}", and the message is ${message}!`);
}
large_shirt()
large_shirt("medium")
large_shirt("small", "I love Coding")