1. **What is TypeScript, and how does it differ from JavaScript?**
   - TypeScript is a statically typed superset of JavaScript that adds optional types to the language. This means you can define types for variables, function parameters, return values, and more in TypeScript, which helps catch errors early in the development process. JavaScript, on the other hand, is dynamically typed, meaning types are determined at runtime.

2. **How do you define a variable with a specific type in TypeScript?**
   - In TypeScript, you can define a variable with a specific type using the syntax `variableName: type`. For example, `let age: number = 25;` defines a variable `age` of type `number` with the value `25`.

3. **What are interfaces in TypeScript?**
   - Interfaces in TypeScript are used to define the structure of an object. They specify the properties and their types that an object must have. Interfaces are helpful for defining contracts within your code and ensuring that objects conform to a specific shape. For example:
     ```typescript
     interface Person {
       name: string;
       age: number;
     }

     function greet(person: Person) {
       return `Hello, ${person.name}!`;
     }

     let user = { name: "John", age: 30 };
     console.log(greet(user)); // Output: Hello, John!
     ```
