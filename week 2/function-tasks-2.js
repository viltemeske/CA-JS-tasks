// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
    function mulArrBy2(arr) {
        let newArr = [];
        let x = 0;
        for (let i = 0; i < arr.length; i++) {
            newArr[x] = arr[i] * 2;
            x++;
        }
        return newArr
    }

    const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
    console.log({
        numbers,
        result: mulArrBy2(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
    function powerArrBy2(arr) {
        let newArr = [];
        let x = 0;
        for (let i = 0; i < arr.length; i++) {
            newArr[x] = arr[i] * arr[i];
            x++;
        }
        return newArr
    }
    console.log({
        numbers,
        result: powerArrBy2(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
    function mulArrElementsByIndex(arr) {
        let newArr = [];
        let x = 0;
        for (let i = 0; i < arr.length; i++) {
            newArr[x] = i * arr[i];
            x++;
        }
        return newArr
    }
    console.log({
        numbers,
        result: mulArrElementsByIndex(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
    function filterPositives(arr) {
        let newArr = [];
        let x = 0;

        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            if (num > 0) {
                newArr[x] = num;
                x++;
            }
        }
        return newArr

    }
    console.log({
        numbers,
        result: filterPositives(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
    function filterNegatives(arr) {
        let newArr = [];
        let x = 0;
        for (let i = 0; i < arr.length; i++) {
            if ((arr[i]) < 0) {
                newArr[x] = arr[i];
                x++;
            }
        }
        return newArr
    }
    console.log({
        numbers,
        result: filterNegatives(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
    function filterEquals(arr) {
        let newArr = [];
        let x = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                newArr[x] = arr[i];
                x++;
            }
        }
        return newArr
    }
    console.log({
        numbers,
        result: filterEquals(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
    function filterOdds(arr) {
        let newArr = [];
        x = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                newArr[x] = arr[i];
                x++;
            }
        }
        return newArr
    }
    console.log({
        numbers,
        result: filterOdds(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
    function arrAbsoluteValues(arr) {
        let newArr = [];
        let x = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                newArr[x] = arr[i] * -1;
            } else {
                newArr[x] = arr[i];
            }
            x++;
        }
        return newArr
    }

    console.log('---');
    console.log({
        numbers,
        result: arrAbsoluteValues(numbers)
    });
    console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
    function powArrElementsByIndex(arr) {
        let newArr = [];
        let x = 0;
        for (let i = 0; i < arr.length; i++) {
            newArr[x] = arr[i] ** i;
            x++;
        }
        return newArr
    }
    console.log({
        numbers,
        result: powArrElementsByIndex(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
    function filterNaturals(arr) {
        let newArr = [];
        let x = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0 && arr[i] % 1 === 0) {
                newArr[x] = arr[i];
                x++;
            }
        }
        return newArr
    }
    console.log({
        numbers,
        result: filterNaturals(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
    function absArrElements(arr) {
        let newArr = [];
        let x = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 1 === 0) {
                newArr[x] = arr[i];
            } else {
                newArr[x] = Math.round(arr[i]);  
            }
            x++;
        }
        return newArr
    }
    console.log({
        numbers,
        result: absArrElements(numbers)
    });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
    function filterEverySecond(arr) {
        let newArr = [];
        let x = 0;
        for (let i = 0; i < arr.length; i += 2) {
            newArr[x] = arr[i];
            x++;
        }
        return newArr
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
        let newArr = [];
        let x = 0;
        for (let i = 0; i < arr.length; i += 5) {
            newArr[x] = arr[i];
            x++;
        }
        return newArr
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
    function printArr(arr) {
        let i = 0;
        while (i < arr.length) {
            console.log(`[${i}] => ${arr[i]}`);
            i++;
        }
    }
    printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
    function sumArr(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
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
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            avg = sum % arr.length;
        }
        return avg
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
        max = 0
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max
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
        min = 0
        for (i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min
    }

    console.log({
        numbers,
        result: arrMin(numbers)
    });
}
console.log('---');
console.groupEnd();