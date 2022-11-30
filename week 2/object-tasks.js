console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    function sortDrinkByPrice(drinks) {
        const sortedDrinks = drinks.sort((a, b) => a.price - b.price);
        return sortedDrinks;
    }

    const drinks = [
        { name: "lemonade", price: 50 },
        { name: "lime", price: 10 },
        { name: "tea", price: 15 }];

    console.table(sortDrinkByPrice(drinks));
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, name, value) {
        return {...obj, [name]: value};
    }
console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500 }, "Brutus", 400));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));    
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        return generations[x + ''][y]
    }
    const generations = {
        '-3': {
            m: 'great grandfather',
            f: 'great grandmother',
        },
        '-2': {
            m: 'grandfather',
            f: 'grandmother',
        },
        '-1': {
            m: 'father',
            f: 'mother',
        },
        '0': {
            m: 'none',
            f: 'me!',
        },
        '1': {
            m: 'son',
            f: 'daughter',
        },
        '2': {
            m: 'grandson',
            f: 'granddaughter',
        },
        '3': {
            m: 'great grandson',
            f: 'great granddaughter',
        }
    }
    console.log(generation(2, "f"));
    console.log(generation(-3, "m"));
    console.log(generation(1, "f"));
    console.log(generation(0, "f"));
    console.log(generation(0, "m"));
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    function maximumScore(tileHand) {
        let sum = 0;
        for (let i = 0; i < tileHand.length; i++) {
            sum += tileHand[i].score
        }
        return sum
    }
    const tileHand1 = [
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }
    ];
    const tileHand2 = [
        { tile: "B", score: 2 },
        { tile: "V", score: 4 },
        { tile: "F", score: 4 },
        { tile: "U", score: 1 },
        { tile: "D", score: 2 },
        { tile: "O", score: 1 },
        { tile: "U", score: 1 }
    ];

    console.log(maximumScore(tileHand1));
    console.log(maximumScore(tileHand2));

}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    function calculateDifference(obj, limit) {
        return Object.values(obj).reduce((a, b) => a + b) - limit

    }
    console.log(calculateDifference({ "baseball bat": 20 }, 5));
    console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
    console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    function toArray(obj) {
        return Object.entries(obj)
    }
    console.log(toArray({ a: 1, b: 2 }));
    console.log(toArray({ shrimp: 15, tots: 12 }));
    console.log(toArray({}));
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    function inkLevels(inks) {
        return Math.min(inks.cyan, inks.magenta, inks.yellow)
    }


    const Printer1 = {
        "cyan": 23,
        "magenta": 12,
        "yellow": 10
    };

    const Printer2 = {
        "cyan": 432,
        "magenta": 543,
        "yellow": 777
    };

    const Printer3 = {
        "cyan": 700,
        "magenta": 700,
        "yellow": 0
    };

    console.log(inkLevels(Printer1));
    console.log(inkLevels(Printer2));
    console.log(inkLevels(Printer3));
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    function calculateLosses(obj) {
        let stolenItemValue = Object.values(obj);
        if (stolenItemValue.length === 0) {
            return 'Lucky you!'
        } else {
            return stolenItemValue.reduce(function (a, b) {
                return a + b;
            })
        }
    }
    const stolenItems1 = {
        tv: 30,
        skate: 20,
        stereo: 50,
    }

    const stolenItems2 = {
        painting: 20000,
    };

    const stolenItems3 = {};

    console.log(calculateLosses(stolenItems1));
    console.log(calculateLosses(stolenItems2));
    console.log(calculateLosses(stolenItems3));
}
console.groupEnd();