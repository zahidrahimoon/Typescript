<h1 align="center">
   TypeScript
  <img align="center" src="https://img.icons8.com/color/48/000000/typescript.png" alt="TypeScript icon">
</h1>

1. **What is TypeScript, and how does it differ from JavaScript?**
   - TypeScript is a statically typed superset of JavaScript that adds optional types to the language. This means you can define types for variables, function parameters, return values, and more in TypeScript, which helps catch errors early in the development process. JavaScript, on the other hand, is dynamically typed, meaning types are determined at runtime.

2. **How do you define a variable with a specific type in TypeScript?**
   - In TypeScript, you can define a variable with a specific type using the syntax `variableName: type`. For example, `let age: number = 25;` defines a variable `age` of type `number` with the value `25`.

3. **What is meant by Type annotations in TypeScript?**
   - Type annotations in TypeScript are a way to explicitly specify the type of a variable, function parameter, return value, or any other entity that requires a type. By using type annotations, you can define the expected types in your code, which helps TypeScript catch errors early and provides better documentation and understanding of the code.

```typescript
let name: string = "Zahid Rahimoon";
```
 - Type annotations are optional in TypeScript, as TypeScript can often infer the types based on the value assigned. However, using explicit type annotations is considered good practice, especially for code clarity and error prevention.

4. **List of Type annotation in Typescript**
    - Here are some type annotation in TypeScript:

     1. ***Basic Types:***
   ```typescript
   let age: number = 18;
   let name: string = "Zahid";
   let isValid: boolean = true;
   ```

     2. ***Arrays:***
   ```typescript
   let numbers: number[] = [1, 2, 3];
   let names: string[] = ["Zahid", "Zara", "Rahimoon"];
   let flags: boolean[] = [true, false, true];
   ```

      3. ***Objects:***
   ```typescript
   let user: { name: string, age: number } = { name: "Zara", age: 17 };
   ```

      4. ***Intersection Types:***

    ```typescript
     interface Person {
       name: string;
       age: number;
     }

     function greet(person: Person) {
       return `Hello, ${person.name}!`;
     }

     let user = { name: "Zahid", age: 18 };
     console.log(greet(user)); 
     ```

5. **What is a type alias in TypeScript?**
   - A type alias in TypeScript allows you to create a new name for a type. It's similar to defining a new type but can be more descriptive and reusable.

6. **How do you declare a type alias in TypeScript?**
   - To declare a type alias, you use the `type` keyword followed by the alias name and the type definition. For example:
     ```typescript
     type MyString = string;
     ```

7. **What are the benefits of using type aliases?**
   - Type aliases can improve code readability and maintainability by providing descriptive names for complex types. They also allow you to easily reuse types throughout your codebase.

8. **How do you create a type alias for an object type in TypeScript?**
   - To create a type alias for an object type, you define the alias name and specify the object's properties along with their types. For example:
     ```typescript
     type MyObject = { id: number; name: string };
     ```

9. **Can you use type aliases to define recursive types in TypeScript?**
   - Yes, you can use type aliases to define recursive types by using the alias name within the type definition. However, you need to be careful to avoid infinite recursion.

10. **What is the difference between type aliases and interfaces in TypeScript?**
   - Type aliases and interfaces are similar but have some differences. One key difference is that type aliases can represent any type, including primitive types, union types, and intersection types, while interfaces can only represent object types.

11. **When should you use a type alias instead of an interface in TypeScript?**
    - Use a type alias when you need to create a name for a complex type that can't be expressed easily with an interface, such as union types, intersection types, or tuple types. Use an interface when you're defining the shape of an object type.
