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
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
    function personsListInRows(people) {
        console.log(people.name, people.surname, people.sex, people.age);

    }
    people.forEach(personsListInRows);
}

console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
    function namesAndSurnames(people) {
        console.log(people.name, '-', people.surname);

    }
    people.forEach(namesAndSurnames);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
    function namesSurnamesMarridgeStatus(people) {
        console.log(people.name, people.surname, 'married:', people.married);

    }
    people.forEach(namesSurnamesMarridgeStatus);
    console.groupEnd();
}
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    function printIncomeAndSex(el) {
        console.log(el.sex, el.income);
    }
    people.forEach(printIncomeAndSex);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    function nameSurnameSexArray(people) {
        return [people.name, people.surname, people.sex]
    }
    const newArray = people.map(nameSurnameSexArray);
    console.log(newArray);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    function printAllMales(people) {
        return people.sex === 'male';
    }
    const malePersons = people.filter(printAllMales);
    console.table(malePersons);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    function printAllFemales(people) {
        return people.sex === 'female';
    }
    const femalePersons = people.filter(printAllFemales);
    console.table(femalePersons);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    function ownCars(people) {
        const result = people.hasCar === true ? [people.name, people.surname] : '';
        return result
    }
    const hasCars = people.filter(ownCars)
    console.table(hasCars)
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    function isMarried(people) {
        return people.married === true
    }
    const marriedPeople = people.filter(isMarried)
    console.table(marriedPeople)
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    
        let maleCount = 0
        let femaleCount = 0

        function countDrivers(person) {
        if (person.sex === 'female' && person.hasCar === true) femaleCount++;
        else if (person.sex === 'male' && person.hasCar === true) maleCount++;
    }

    people.forEach(countDrivers);
    console.log('Moterys vairuotojos - ', femaleCount, 'Vyrai vairuotojai - ', maleCount);

}
    console.groupEnd();

    console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
    {
        function formIncomeToSallary(person) {
            return {
                name: person.name,
                surname: person.surname,
                sex: person.sex,
                age: person.age,
                salary: person.income,
                married: person.married,
                hasCar: person.hasCar
            };
        }
        const peopleNew = people.map(formIncomeToSallary);
        console.table(peopleNew)
    }
    console.groupEnd();

    console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
    {
        function formAnonymousPerson(people) {
            return {
                sex: people.sex,
                age: people.age,
                income: people.income,
                married: people.married,
                hasCar: people.hasCar
            };
        }
        const people2 = people.map(formAnonymousPerson);
        console.table(people2)
    }
    console.groupEnd();

    console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
    {
        function formFullName(people) {
            return {
                fullName: (people.name + ' ' + people.surname),
                sex: people.sex,
                age: people.age,
                income: people.income,
                married: people.married,
                hasCar: people.hasCar
            };
        }
        const peopleFullname = people.map(formFullName);
        console.table(peopleFullname)
    }
    console.groupEnd();
