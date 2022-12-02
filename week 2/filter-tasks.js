const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false
    }
];
const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];


// Kiekvienai užduočiai padeklaruokite funkciją, kurią panaudosite kviesdami metodą Array.prototype.filter
console.group('1. Atrinkti neigiamus skaičius');
{
    function isNegative(num) {
        return num < 0;
    }
    const negativeNum = numbers.filter(isNegative);
    console.log(negativeNum);
}
console.groupEnd();

console.group('2. Atrinkti nelyginius skaičius');
{
    function isOdd(num) {
        return num % 2 === 1;
    }
    const numbersOdd = numbers.filter(isOdd);
    console.log(numbersOdd);

}
console.groupEnd();

console.group('3. Atrinkti žmones kurių vardas ilgesnis nei 6 raidės');
{
    function namesLongerThan6(person) {
        return person.name.length > 6;
    }
    const longnames = people.filter(namesLongerThan6);
    console.table(longnames);

}
console.groupEnd();

console.group('4. Atrinkti žmones kurie turi mašiną');
{
    function ownCars(person) {
        return person.hasCar
    }
    const hasCars = people.filter(ownCars)
    console.table(hasCars)
}
console.groupEnd();
