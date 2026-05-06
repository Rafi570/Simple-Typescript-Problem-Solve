# Mastering Complexity with the Four Pillars of OOP in TypeScript

### Introduction
As applications grow in scale, managing code complexity becomes a significant challenge for developers. Object-Oriented Programming (OOP) provides a structured paradigm to organize code into reusable and manageable units called "objects." In TypeScript, these principles are enhanced by a robust type system, making it easier to build large-scale enterprise applications that are both scalable and maintainable.

### The Four Pillars of OOP
To manage logic effectively, TypeScript developers rely on four core principles: Inheritance, Polymorphism, Abstraction, and Encapsulation.

#### 1. Inheritance: Promoting Reusability
Inheritance allows a class (subclass) to derive properties and methods from another class (base class). This reduces redundancy by allowing developers to write common logic once and reuse it across multiple entities.

**Example:**
```typescript
class Person {
    constructor(public name: string, public age: number) {}
}

class Student extends Person {
    constructor(name: string, age: number, public grade: string) {
        super(name, age);
    }
}