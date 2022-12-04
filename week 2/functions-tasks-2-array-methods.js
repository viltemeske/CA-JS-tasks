// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
    function mulArrBy2(x) {
        return x * 2;
    }
    const multedBy2 = numbers.map(mulArrBy2);

    console.log({
        numbers,
        result: multedBy2
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
    function powerArrBy2(x) {
        return x * x;
    }
    const poweredBy2 = numbers.map(powerArrBy2);

    console.log({
        numbers,
        result: poweredBy2
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
    function mulArrElementsByIndex(x, i) {
        return x * i;
    }
    const multByIndex = numbers.map(mulArrElementsByIndex);

    console.log({
        numbers,
        result: multByIndex
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
    function filterPositives(x) {
        return x > 0;
    }
    const positiveNum = numbers.filter(filterPositives);

    console.log({
        numbers,
        result: positiveNum
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
    function filterNegatives(x) {
        return x < 0;
    }
    const negativeNum = numbers.filter(filterNegatives);

    console.log({
        numbers,
        result: negativeNum
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
    function filterEquals(x) {
        return x % 2 === 0;
    }
    const equalNum = numbers.filter(filterEquals);

    console.log({
        numbers,
        result: equalNum
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
    function filterOdds(x) {
        return x % 2 !== 0;
    }
    const oddNum = numbers.filter(filterOdds);

    console.log({
        numbers,
        result: oddNum
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
    function arrAbsoluteValues(x) {
        if (x < 0) {
            return -x;
        } else {
            return x
        }
    }
    const absolute = numbers.map(arrAbsoluteValues);

    console.log({
        numbers,
        result: absolute
    });
    console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
    function powArrElementsByIndex(x, i) {
        return x ** i;
    }
    const powerByIndex = numbers.map(powArrElementsByIndex);

    console.log({
        numbers,
        result: powerByIndex
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
    function filterNaturals(x) {
        return x > 0 && x % 1 === 0;
    }
    const naturals = numbers.filter(filterNaturals);

    console.log({
        numbers,
        result: naturals
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
    function absArrElements(x) {
        if (x % 1 === 0) {
            return x;
        } else {
            return Math.round(x);
        }
    }
    const abs = numbers.map(absArrElements);

    console.log({
        numbers,
        result: abs
    });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
    function filterEverySecond(arr) {
        const result = [];
        for (let i = 0; i < arr.length; i += 2) {
            result.push(arr[i]);
        }
        return result
    }

    console.log({
        numbers,
        result: filterEverySecond(numbers)
    });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
    function filterEveryFifth(arr) {
        const result = [];
        for (let i = 0; i < arr.length; i += 5) {
            result.push(arr[i]);
        }
        return result
    }

    console.log({
        numbers,
        result: filterEveryFifth(numbers)
    });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
    function printArr(x, i) {
        console.log(`[${i}] => ${x}`);
    }
    const print = numbers.forEach(printArr)
    console.log({
        numbers,
        result: print
    });
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
    function sumArr(arr) {
        const sum = arr.reduce((a, b) => {
            return a + b;
        }, 0);
        return sum
    }

    console.log({
        numbers,
        result: sumArr(numbers)
    });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
    function avgArr(arr) {
        const average = arr.reduce((a, b) => a + b, 0) / arr.length;
        return average;
    }
    console.log({
        numbers,
        result: avgArr(numbers)
    });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
    function arrMax(arr) {
        const result = arr.reduce(function (a, b) {
            return Math.max(a, b);
        });
        return result
    }

    console.log({
        numbers,
        result: arrMax(numbers)
    });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
    function arrMin(arr) {
        const result = arr.reduce(function (a, b) {
            return Math.min(a, b);
        });
        return result
    }

    console.log({
        numbers,
        result: arrMin(numbers)
    });
}
console.log('---');
console.groupEnd();