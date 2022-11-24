console.log('Hello World!');
console.error('This is error!');
console.warn('This is warning!');
//let, const

let age = 30;
age=31
console.log(age);

// String, Numbers, Boolean, null, undefined

const name = 'John';
const myAge = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);

//Concatenation
console.log('My name is ' + name + ' and I am ' + myAge);
// Template String
const hello = `My name is ${name} and I am ${myAge}`
console.log(hello);

const s = 'Hello World';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split(''));

const t = 'technology. computers, it, code';

console.log(t.split(', '));

//Arrays - variables, that hold multiple values
const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray('hello'));

console.log(fruits);

console.log(fruits[1]);

console.log(fruits.indexOf('oranges'));

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
person.email = 'john@gmail.com';

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address: { city }} = person;
console.log(firstName);
console.log(city);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Dentist appt',
        isCompleted: false
    },
];
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
for(let todo of todos) {
    console.log(todo);
}
for(let todo of todos) {
    console.log(todo.text);
}
for(let todo of todos) {
    console.log(todo.id);
}

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For
for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}
//While
let i = 0; 
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

//forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);

const x1 = 20;
const y1 = 10;

if(x1 === 4) {
    console.log('x1 is 10');
} else if(x > 10) {
    console.log('x is greater than 10')
}  else {
    console.log('x1 is less than 10');
}

if(x1 > 5 || y1 > 10) {
    console.log('x1 is more than 5 or y1 is more than 10');
} 

const x2 = 9;

const color = x > 10 ? 'red' : 'blue';

console.log(color); 

const color1 = 'green'

switch(color1) {
 case 'red':
    console.log('color is red');
    break;
case 'blue':
    console.log('color is blue');
    break;
    default:
        console.log('color is NOT red or blue');
        break;
}
function addNums(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
}

addNums(5, 5);

function addNums1(num11 = 1, num12 = 1) {
    return num11 + num12;
}

console.log(addNums1(5, 5));

const addNums2 = (num21 = 1, num22 = 1) => {
    console.log(num21 + num22);
}

addNums2(5, 5);

const addNums3 = (num31 = 1, num32 = 1) => num31 + num32;

console.log(addNums3(5, 5));

const addNums4 = num41 => num41 + 5;

console.log(addNums4(5));

todos.forEach((todo) => console.log(todo));

//Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Marry', 'Smith', '3-3-1970');

console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

//Constructor function 2 
function Person1(firstName1, lastName1, dob1) {
    this.firstName1 = firstName1;
    this.lastName1 = lastName1;
    this.dob1 = new Date1(dob1);
    }

    Person1.prototype.getBirthYear = function() {
        return this.dob.getFullYear();
    }
        Person1.prototype.getFullName1 = function() {
        return `${this.firstName1} ${this.lastName1}`;
    }
//Class
class Person31 {
    constructor(firstName31, lastName31, dob31) {
        this.firstName31 = firstName31;
        this.lastName31 = lastName31;
        this.dob31 = new Date1(dob31);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName31} ${this.lastName31}`;
    }
}

// Instantiate object 2 
const person11 = new Person('John', 'Doe', '4-3-1980');
const person12 = new Person('Marry', 'Smith', '3-3-1970');

console.log(person12.getFullName());
console.log(person11);

//Single element
/*const form = document.getElementById('my-form');
console.log(form);*/

//console.log(document.getElementById('my-form'));
//console.log(document.guerySelector('h1'));

//Multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

/*const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';

btn.addEventListener('mouseot', e => { //'click', 'mouseover', 'mouseout'
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });*/

//Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        //alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        //console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    
        userList.appendChild(li);
    
        // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    }
}
 