
console.log('------------------------------------ 1 Dalis ------------------------------------')
const peopleData = [{
    name: 'Petronėlė',
    surname: 'Petrauskienė',
    age: 88,
    height: 1.5,
    weight: 70,
    sex: 'female',
}, {
    name: 'Albas',
    surname: 'Dumbldoras',
    age: 133,
    height: 1.99,
    weight: 100,
    sex: 'male',
}, {
    name: 'Rio',
    surname: 'Kilimas',
    age: 5,
    height: 1.05,
    weight: 32,
    sex: 'male',
}, {
    name: 'Lekalija',
    surname: 'Bunitazova',
    age: 13,
    height: 1.58,
    weight: 86,
    sex: 'female',
}, {
    name: 'Labas',
    surname: 'Babūnas',
    age: 33,
    height: 1.76,
    weight: 50,
    sex: 'male',
}, {
    name: 'Musė',
    surname: 'Chameleona',
    age: 23,
    height: 1.63,
    weight: 51,
    sex: 'female',
}, {
    name: 'Pupa',
    surname: 'Kvaksėtoja',
    age: 41,
    height: 1.7,
    weight: 62,
    sex: 'female',
}, {
    name: 'Čiobrelis',
    surname: 'Drebulėlis',
    age: 95,
    height: 1.84,
    weight: 85,
    sex: 'male',
},]

class Person {
    name;
    surname;
    age;
    height;
    weight;
    sex;

    constructor({ name, surname, age, height, weight, sex }) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.sex = sex;
    }

    get BMI() {
        return (this.weight / (this.height ** 2)).toFixed(2);
    }

    toString() {
        return `${this.name} ${this.surname}, ${this.age} m., ${this.height} m, ${this.weight} kg, ${this.sex}.`;
    }

}
let people;
let person;

console.group('1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų: name, surname, age, height, weight, sex')
{
    console.table(peopleData)
}
console.groupEnd()

console.group('2. Panaudojant array.forEach: atspausdinti kiekvieną elementą, atspausdinti kiekvieno elemento pilną vardą, atspausdinti kiekvieno elemento kūno masės indeksą')
{
    peopleData.forEach((person) => {
        console.log(person);
    });

    peopleData.forEach((person) => {
        console.log(person.name, person.surname);
    });

    peopleData.forEach((person) => {
        console.log((person.weight / (person.height ** 2)).toFixed(2));
    });

}
console.groupEnd()

console.group('3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones: kurių vardas ilgesnis nei 6 simboliai, kurių svoris didesnis nei 80kg, kurie aukštesni nei 185cm')
{
    const longNames = peopleData.filter(({ name }) => name.length > 6);
    console.log('Vardai ilgesni nei 6:', longNames);

    const heavyPersons = peopleData.filter(({ weight }) => weight > 80);
    console.log('Sunkesni nei 80 kg:', heavyPersons);

    const tallPersons = peopleData.filter(({ height }) => height > 1.85);
    console.log('Aukštesni nei 185 cm:', tallPersons);
}
console.groupEnd()

console.group('4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti: ūgius; svorius; ūgius, svorius ir amžius : [{height, weight, age}, ...]; KMI indeksus; KMI indeksus ir amžius.')
{
    const peopleHeights = peopleData.map(({ height }) => ({ height }));
    console.log(peopleHeights);

    const peopleWeights = peopleData.map(({ weight }) => ({ weight }));
    console.log(peopleWeights);

    const peopleInfo = peopleData.map(({ height, weight, age }) => ({ height, weight, age }));
    console.log(peopleInfo);

    const peopleKMI = peopleData.map(({ weight, height }) => ({ kmi: Number((weight / (height ** 2)).toFixed(2)) }));
    console.log(peopleKMI);

    const peopleKMIAndAge = peopleData.map(({ age, weight, height }) => ({ age: age, kmi: Number((weight / (height ** 2)).toFixed(2)), }));
    console.log(peopleKMIAndAge);

}
console.groupEnd()

console.group('5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti: svorių vidurkį, ūgio vidurkį.')
{
    const peopleWeights = peopleData.map(({ weight }) => weight);
    const weightAvg = peopleWeights.reduce((prevSum, weight) => (prevSum + weight), 0) / peopleWeights.length;
    console.log(weightAvg.toFixed(2));

    const peopleHeights = peopleData.map(({ height }) => height);
    const heightAvg = peopleHeights.reduce((prevSum, height) => (prevSum + height), 0) / peopleHeights.length;
    console.log(heightAvg.toFixed(2));

}
console.groupEnd()

console.log('------------------------------------ 2 Dalis ------------------------------------')

console.group('0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:')
//Person klasėje:    
//- sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
//- sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
{
    people = peopleData.map(personData => new Person(personData));
    people.forEach(person => console.log(person.BMI));
    people.forEach(person => console.log(person.toString()));
}
console.groupEnd()

console.group('1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg')
{
    const womenUnder20Heavier70 = people.filter(person => person.age < 20 && person.weight > 70 && person.sex === 'female')
    console.log(womenUnder20Heavier70);
}
console.groupEnd()

console.group('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5')
{
    const menOver25KmiLessThan18 = people.filter(person => person.age > 25 && person.BMI < 18.5 && person.sex === 'male')
    console.log(menOver25KmiLessThan18);
}
console.groupEnd()

console.group('3. Atrinkti vaikus, su antsvoriu (KMI > 30)')
{
    const overweightKids = people.filter(person => person.age < 18 && person.BMI > 30)
    console.log(overweightKids);
}
console.groupEnd()

console.group('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)')
{
    const overweightPensioners = people.filter(person => person.age > 65 && person.BMI > 30)
    console.log(overweightPensioners);
}
console.groupEnd()

console.group('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]')
{
    const nonstandartKmi = people.filter(person => person.BMI > 25 || person.BMI < 18.5)
    console.log(nonstandartKmi);
}
console.groupEnd()

