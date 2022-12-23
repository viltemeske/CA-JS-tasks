
console.group("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
{
    function strReverse(str) {
        return str.split("").reverse().join("");
    }
    console.log('---');
    console.log(strReverse('viens du trys'));
    console.log(strReverse('as tave myliu'));
    console.log(strReverse('Bairis seniuk'));
    console.log('---');
}
console.groupEnd();
console.log();

console.group("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");

//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false

{
    function isPalyndrome(str) {
        let leftFirstIndex = 0;
        let rightFirstIndex = str.length - 1;
        while (leftFirstIndex < rightFirstIndex) {
            if (str[leftFirstIndex] !== str[rightFirstIndex]) return false;
            leftFirstIndex++;
            rightFirstIndex--;
        }
        return true;
    }
    console.log('---');
    console.log({
        'mama': isPalyndrome('mama'),
        'mamam': isPalyndrome('mamam'),
        '123321': isPalyndrome('123321'),
        '123456': isPalyndrome('123456'),
    })
    console.log('---');
}
console.groupEnd();
console.log();



console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");

//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.

{
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
    const fixedParagraph = paragraph
        .trim()
        .replaceAll(/\s+/g, ' ')
        .replaceAll(/\s+([!?.,])/g, '$1')
        .replaceAll(/\s+([!?.])\s*(.)/g, (_, g1, g2) => `${g1}${g2}`);

    console.log('---');
    console.log(capitalizeFirstLetter(fixedParagraph));
    console.log('---');
}

console.groupEnd();
console.log();

console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
{
    function splitSentence(sentence) {
        return sentence.split(" ");
    }
    console.log('---');
    console.log({
        'Labas aš Jonas': splitSentence('Labas aš Jonas'),
        'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
    })
    console.log('---');
}
console.groupEnd();
console.log();


console.group("32. Sukurkite funkciją, kuri pirmu parametru priima <string>'ą, o antruoju skiriklį");

//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];  
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];  

{
    function explode(str, separator) {
        return str.split(separator);
    }
    console.log('---');
    console.log({
        "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
        "'home/about/13', '/'": explode('home/about/13', '/'),
    })
    console.log('---');
}
console.groupEnd();
console.log();