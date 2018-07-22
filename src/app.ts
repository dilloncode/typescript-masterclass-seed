interface Person {
    name: string;
    age?: number;
}

type MyRequired<T> = {
    [P in keyof T]-?: T[P]  // Minus removes the optional
    // can also use +/- readonly
};

function printAge(person: MyRequired<Person>) {
    return `${person.name} is ${person.age}`;
}

const person: Required<Person> = {
    name: 'Todd',
    age: 27
};

const age = printAge(person);