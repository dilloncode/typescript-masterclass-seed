// interface Person {
//     name: string;
//     age: number;
// }

// type MyPartial<T> = {
//     [P in keyof T]?: T[P]
// }

// function updatePerson(person: Person, prop: Partial<Person>) {
//     return { ...person, ...prop };
// }

// let person: Person = {
//     name: 'Todd',
//     age: 27
// };

// console.log(person);
// person = updatePerson(person, {name: 'ABC'});
// console.log(person);