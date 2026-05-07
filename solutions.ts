// P-1

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num: number) => num % 2 === 0);
}




//  * P-2:

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}







// p-3
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): "String" | "Number" {
    if (typeof input === "string") {
        return "String";
    } else {
        return "Number";
    }
}

// p-4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}



// p-5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {
        ...book,
        isRead: true
    };
}




// p-6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}


// p-7

function getIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(item => arr2.includes(item));
}

