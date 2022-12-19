console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
    class Player {
        constructor(name, age, height, weight) {
            this.name = name;
            this.age = age;
            this.height = height;
            this.weight = weight;
        }
        getAge() {
            return `${this.name} is age ${this.age}`;
        }
        getHeight() {
            return `${this.name} is ${this.height}cm`;
        }
        getWeight() {
            return `${this.name} weighs ${this.weight}kg`;
        }
    }
    const Player1 = new Player('John Doe', 33, 190, 100);

    console.log(Player1.getAge());
    console.log(Player1.getHeight());
    console.log(Player1.getWeight());
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
    class Calculator {

        add(num1, num2) {
            return num1 + num2;
        }
        subtract(num1, num2) {
            return num1 - num2;
        }
        multiply(num1, num2) {
            return num1 * num2;
        }
        divide(num1, num2) {
            return num1 / num2;
        }
    }
    const calculator = new Calculator()
    console.log(calculator.add(10, 5));
    console.log(calculator.subtract(10, 5));
    console.log(calculator.multiply(10, 5));
    console.log(calculator.divide(10, 5));

}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
    class Employee {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get fullname() {
            return `${this.firstname} ${this.lastname}`;
        }
        get email() {
            return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
        }
    }
    const emp1 = new Employee("John", "Smith");
    const emp2 = new Employee("Mary", "Sue");
    const emp3 = new Employee("Antony", "Walker");

    console.log(emp1.fullname, emp1.email);
    console.log(emp2.fullname, emp2.email);
    console.log(emp3.fullname, emp3.email);
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        compareAge(other) {
            if (this.age < other.age) {
                return `${other.name} is older than me.`
            } else if (this.age > other.age) {
                return `${other.name} is younger than me.`
            } else {
                return `${other.name} is the same age as me.`
            }
        }
    }
    const p1 = new Person("Samuel", 24);
    const p2 = new Person("Joel", 36);
    const p3 = new Person("Lily", 24);

    console.log(p1.compareAge(p2));
    console.log(p2.compareAge(p1));
    console.log(p3.compareAge(p3));
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
        getArea() {
            return Math.PI * Math.pow(this.radius, 2);
        }
        getPerimeter() {
            return 2 * Math.PI * this.radius;
        }
    }
    const circy1 = new Circle(11);
    const circy2 = new Circle(4.44);

    console.log(circy1.getArea())
    console.log(circy1.getPerimeter())
    console.log(circy2.getArea())
    console.log(circy2.getPerimeter())
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
    class Name {
        constructor(fname, lname) {
            this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
            this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
            this.fullname = this.fname + ' ' + this.lname;
            this.initials = this.fname[0] + '.' + this.lname[0];
        }
    }
    const a1 = new Name("john", "SMITH");

    console.log(a1.fname);
    console.log(a1.lname);
    console.log(a1.fullname);
    console.log(a1.initials);
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
    function sweetestIcecream(arr) {
        let value = 0;
        let maxSweet = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].flavor == "Vanilla" || arr[i].flavor == "ChocolateChip") {
                value = arr[i].numSprinkles + 5;
            }
            else if (arr[i].flavor == "Strawberry" || arr[i].flavor == "Chocolate") {
                value = arr[i].numSprinkles + 10;
            }
            else {
                value = arr[i].numSprinkles;
            }
            if (value > maxSweet) {
                maxSweet = value;
            }
        }
        return maxSweet;
    }
    class IceCream {
        constructor(flavor, numSprinkles) {
            this.flavor = flavor;
            this.numSprinkles = numSprinkles;
        }
    }
    const ice1 = new IceCream("Chocolate", 13);
    const ice2 = new IceCream("Vanilla", 0);
    const ice3 = new IceCream("Strawberry", 7);
    const ice4 = new IceCream("Plain", 18);
    const ice5 = new IceCream("ChocolateChip", 3);

    console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
    console.log(sweetestIcecream([ice3, ice1]));
    console.log(sweetestIcecream([ice3, ice5]));
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
    class OnesThreesNines {
        constructor(n) {
            this.nines = Math.floor(n / 9)
            this.ones = Math.floor(n / 1)
            this.threes = Math.floor(n / 3)
        }
    }
    const n1 = new OnesThreesNines(5);
    const n2 = new OnesThreesNines(8);

    console.log(n1.nines);
    console.log(n1.ones);
    console.log(n1.threes);

    console.log(n2.nines);
    console.log(n2.ones);
    console.log(n2.threes);
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
    class User {
        static userCount = 0;

        constructor(username) {
            this.username = username;
            User.userCount++;
        }
    }
    const u1 = new User("johnsmith10");
    const u2 = new User("marysue1989");
    const u3 = new User("milan_rodrick");

    console.log(u1.username);
    console.log(u2.username);
    console.log(u3.username);

}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
    class Book {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }
        getTitle() {
            return `Title: ${this.title}`;
        }
        getAuthor() {
            return `Author: ${this.author}`;
        }
    }

    const PP = new Book('Pride and Prejudice', 'Jane Austen');
    const H = new Book('Hamlet', 'William Shakespeare');
    const WP = new Book('War and Peace', 'Leo Tolstoy');

    console.log(H.title);
    console.log(H.author);
    console.log(H.getTitle());
    console.log(H.getAuthor());
    console.log('---');
    console.log(PP.title);
    console.log(PP.author);
    console.log(PP.getTitle());
    console.log(PP.getAuthor());
    console.log('---');
    console.log(WP.title);
    console.log(WP.author);
    console.log(WP.getTitle());
    console.log(WP.getAuthor());
}
console.groupEnd();