console.group("1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis");
{
    function printCapital(str) {
        console.log(str.toUpperCase());
    }
    console.log('---');
    console.log("abcd");
    printCapital("abcd");
    console.log("AAAA");
    printCapital("AAAA");
    console.log("aBcD");
    printCapital("aBcD");
    console.log('---');
}
console.groupEnd();
console.log();

console.group("2. Sukurkite funkciją, kuri atspausdina tekstą mažosiomis raidėmis");
{
    function printLower(str) {
        console.log(str.toLowerCase());
    }
    console.log('---');
    console.log("ABCD");
    printLower("abcd");
    console.log("AAAA");
    printLower("AAAA");
    console.log("aBcD");
    printLower("aBcD");
    console.log('---');
}
console.groupEnd();
console.log();

console.group("3. Sukurkite funkciją, kuri atspausdina pirmojo parametro pirmają raidę");
{
    function printFirstLetter(str) {
        console.log(str[0]); // arba dar galima console.log(str.substring(0, 1));
    }
    console.log('---');
    console.log("ABCD");
    printFirstLetter("abcd");
    console.log("AAAA");
    printFirstLetter("AAAA");
    console.log("aBcD");
    printFirstLetter("aBcD");
    console.log('---');
}
console.groupEnd();
console.log();

console.group("4. Sukurkite funkciją, kuri atspausdina pirmojo parametro paskutinę raidę");
{
    function printLastLetter(str) {
        console.log(str[str.length - 1]);
    }
    console.log('---');
    printLastLetter('Labas');
    printLastLetter('Ate');
    printLastLetter('Brieda');
    console.log('---');
}
console.groupEnd();
console.log();

console.group("5. Sukurkite funkciją, kuri atspausdina pirmojo parametro viduriniają raidę");
{
    function printMiddleLetter(str) {
        const middleIndex = str.length / 2;
        if (str.length % 2 == 0) {
            console.log(str[middleIndex - 1] + str[middleIndex]);
        } else {
            console.log(str[Math.floor(middleIndex)]);
        }
    }
    console.log('---');
    printMiddleLetter('Labas');
    printMiddleLetter('Ate');
    printMiddleLetter('Brieda');
    console.log('---');
}
console.groupEnd();
console.log();

console.group("6. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių");
{
    function getDoubleLetterCount(str) {
        return str.length;
    }
    console.log('---');
    console.log({
        'labas': getDoubleLetterCount('labas'),
        'kranas': getDoubleLetterCount('kranas'),
        'kebabas': getDoubleLetterCount('kebabas'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("7. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių padaugintą iš dviejų"); //ar simbolių ar raidžių užtenka?
{
    function getDoubleLetterCount(str) {
        return str.length * 2
    }
    console.log('---');
    console.log({
        'labas': getDoubleLetterCount('labas'),
        'kranas': getDoubleLetterCount('kranas'),
        'kebabas': getDoubleLetterCount('kebabas'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("8. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių");
{
    function getArgsLetterSum(a, b) {
        return a.length + b.length;
    }
    console.log('---');
    console.log({
        'labas, abc': getArgsLetterSum('labas', 'abc'),
        'kranas, jonas': getArgsLetterSum('kranas', 'jonas'),
        'kebabas, kefyras': getArgsLetterSum('kebabas', 'kefyras'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("9. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 'a' raidė, priešingu atveju <false>");
{
    function containsLetterA(str) {
        if (str.indexOf('a') >= 0) {
            return 'true';
        } else {
            return 'false';
        }
    }
    console.log('---');
    console.log({
        'labas': containsLetterA('labas'),
        'kempė': containsLetterA('kempė'),
        'Finakolė': containsLetterA('Finakolė'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("10. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false");
{
    function containsLetter(str, letter) {
        if (str.indexOf(letter) >= 0) {
            return 'true';
        } else {
            return 'false';
        }
    }
    console.log('---');
    console.log({
        'labas, a': containsLetter('labas', 'a'),
        'kempė, a': containsLetter('kempė', 'a'),
        'Finakolė, u': containsLetter('Finakolė', 'u'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
    function isEvenNumberOfLetters(str) {
        if (str.length % 2 === 0) {
            return 'true';
        } else {
            return 'false';
        }
    }
    console.log('---');
    console.log({
        'labas': isEvenNumberOfLetters('labas'),
        'kempės': isEvenNumberOfLetters('kempės'),
        '123123': isEvenNumberOfLetters('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
    const getNumberOfVowels = (str) => count = str.match(/[aąeęėiįyouųū]/gi).length;

    console.log('---');
    console.log({
        'aaaaa': getNumberOfVowels('aaaaa'),
        'sasasasa': getNumberOfVowels('sasasasa'),
        'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
    const getNumberOfConsonants = (str) => count = str.length - (str.match(/[aąeęėiįyouųū]/gi).length);

    console.log('---');
    console.log({
        'aaaaa': getNumberOfConsonants('aaaaa'),
        'sasasasa': getNumberOfConsonants('sasasasa'),
        'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaičių");
{
    function isOnlyLetters(str) {
        let totalNumbers = 0;
        for (let i = 0; i < str.length; i++) {
            const element = str[i];
            if (isFinite(element)) {
                totalNumbers++;
            }
        }
        if (totalNumbers <= 0) {
            return 'true'
        } else {
            return 'false'
        }
    }

    console.log('---');
    console.log({
        'labas': isOnlyLetters('labas'),
        'kempės': isOnlyLetters('kempės'),
        '123123': isOnlyLetters('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
     function letterACount(str) {
         const aCount = str.match(/a/g);
         if (aCount !== null) {
         return aCount.length;
        } else {
            return 0;
        }
     }
     console.log('---');
     console.log({
         'labas': letterACount('labas'),
         'kempės': letterACount('kempės'),
         '123123': letterACount('123123'),
     })
     console.log('---');
}
console.groupEnd();
console.log();

console.group("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje"); //blogai
{
    function letterCount(str, searchLetter) {
         const CountLetter = str.match(/searchLetter/g);
         if (CountLetter !== null) {
         return CountLetter.length;
        } else {
            return 0;
        }
     }
      console.log('---');
      console.log({
        'labas, a': letterCount('labas', 'a'),
        'kempės, k': letterCount('kempės', 'k'),
        '123123, z': letterCount('123123', 'z'),
      })
      console.log('---');
}
console.groupEnd();
console.log();

console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
    const lastIndexOfLetterA = (str) => str.indexOf('a');

    console.log('---');
    console.log({
        'labas': lastIndexOfLetterA('labas'),
        'kempės': lastIndexOfLetterA('kempės'),
        '123123': lastIndexOfLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
    const lastIndexOfLetter = (str, searchLetter) => str.indexOf(searchLetter);


    console.log('---');
    console.log({
        'labas, a': lastIndexOfLetter('labas', 'a'),
        'kempės, k': lastIndexOfLetter('kempės', 'k'),
        '123123, z': lastIndexOfLetter('123123', 'z'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
    const indexesOfLetterA = (str) => {
        const newArray = [];

        let indexOfA = str.length;
        while (indexOfA !== -1) {
            indexOfA = str.lastIndexOf('a', indexOfA - 1);
            if (indexOfA === -1) break;
            newArray.push(indexOfA);
        }

        return newArray.sort();

    }
    console.log('---');
    console.log({
        'labas': indexesOfLetterA('labas'),
        'kempės': indexesOfLetterA('kempės'),
        '123123': indexesOfLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{
    const indexesOfLetter = (str, searchLetter) => {
        const newArray = [];

        let indexOfSearchLetter = str.length;
        while (indexOfSearchLetter !== -1) {
            indexOfSearchLetter = str.lastIndexOf(searchLetter, indexOfSearchLetter - 1);
            if (indexOfSearchLetter === -1) break;
            newArray.push(indexOfSearchLetter);
        }

        return newArray.sort();
    }
    console.log('---');
    console.log({
        'labas, a': indexesOfLetter('labas', 'a'),
        'kempės, m': indexesOfLetter('kempės', 'm'),
        '123123, 2': indexesOfLetter('123123', '2'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
    const removeFirstLetterA = (str) => str.replace('a', '');

    console.log('---');
    console.log({
        'labas': removeFirstLetterA('labas'),
        'kempiniukas': removeFirstLetterA('kempiniukas'),
        '123123': removeFirstLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
    function removeLastLetterA(str) {
        const arr = [...str];
        const lastA = arr.lastIndexOf('a');
        if (lastA >= 0) {
        return newArr = ((arr.slice(0, lastA)).concat(arr.slice(lastA+1, arr.length))).join("");
    } else {
        return str
    }
}
    console.log('---');
    console.log({
        'labas': removeLastLetterA('labas'),
        'kempiniukas': removeLastLetterA('kempiniukas'),
        '123123': removeLastLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje"); //blogai
{
    const removeAllOccurencesOfLetterA = (str) => str.replace(/a/g, '');

    console.log('---');
    console.log({
        'labas': removeAllOccurencesOfLetterA('labas'),
        'kempiniukas': removeAllOccurencesOfLetterA('kempiniukas'),
        '123123': removeAllOccurencesOfLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{
    const removeAllOccurencesOfLetter = (str, letter) => (str.split(letter)).join("");

    console.log('---');
    console.log({
        'labas, a': removeAllOccurencesOfLetter('labas', 'a'),
        'kempiniukas, i': removeAllOccurencesOfLetter('kempiniukas', 'i'),
        '123123, 3': removeAllOccurencesOfLetter('123123', '3'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis."); //blogai
{
        const filterLetters = (str, lettersToRemove) => (str.split(lettersToRemove)).join("");   


    console.log('---');
    const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
    console.log(str);
    console.log('---');
}
console.groupEnd();
console.log();

console.group("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
    const replaceSpaceWithDash = (str) => (str.split(" ")).join("-");

    console.log('---');
    console.log({
        'viens du trys': replaceSpaceWithDash('viens du trys'),
        'as tave myliu': replaceSpaceWithDash('as tave myliu'),
        'Bairis seniuk': replaceSpaceWithDash('Bairis seniuk'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
    function capitalize(str) {
        const arr = str.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return str2 = arr.join(" ");
    }
    console.log('---');
    console.log({
        'viens du trys': capitalize('viens du trys'),
        'as tave myliu': capitalize('as tave myliu'),
        'Bairis seniuk': capitalize('Bairis seniuk'),
    })
    console.log('---');
}
console.groupEnd();
