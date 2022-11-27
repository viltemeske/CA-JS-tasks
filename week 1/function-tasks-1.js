console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    function returnFirstArrayElement(array) {
        return array[0];
    }

    const res1 = returnFirstArrayElement(['pirmas', 'antras', 'trečias']);
    const res2 = returnFirstArrayElement([1, 2, 3]);

    console.log({ res1, res2 });
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
    function deleteFirstArrayElement(array) {
        const firstElement = array[0];
        delete array[0];
        for (let i = 1; i < array.length; i++) {
            array[i - 1] - array[i];
        }
        array.length - array.length - 1;

        return firstElement;
    }

    const numbers = [1, 2, 3, 4, 5];
    console.log('numbers before remuval', numbers);
    const firstElement = deleteFirstArrayElement(numbers);
    console.log('numbers after removal', numbers);
    console.log('removed element', firstElement)
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    function returnLastArrayElement(array) {
        return array[array.length - 1];
    }
    const res1 = returnLastArrayElement(['pirmas', 'antras', 'trečias']);
    const res2 = returnLastArrayElement([1, 2, 3]);

    console.log({ res1, res2 });
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
    function deleteLastArrayElement(array) {
        const lastElement = array[array.length - 1];
        delete array[array.length - 1];
        return lastElement;
    }

    const numbers = [1, 2, 3, 4, 5];
    console.log('numbers before remuval', numbers);
    const lastElement = deleteLastArrayElement(numbers);
    console.log('numbers after removal', numbers);
    console.log('removed element', lastElement)
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
    function countArrayElements(array) {
        const arrayLength = array.length;
        return arrayLength;
    }
    const numbers = [1, 2, 3, 4, 9, 'penki'];
    const arrayLength = countArrayElements(numbers);
    console.log('Masyvo elmentų kiekis: ', arrayLength);
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    function indexLastArrayElement(array) {
        const lastIndex = array.length - 1;
        return lastIndex;
    }
    const numbers = [1, 2, 3, 4, 9, 'penki'];
    const lastIndex = indexLastArrayElement(numbers);
    console.log('paskutinio elemento indeksas: ', lastIndex);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    function printArryIndexesInRows() {
        const array = ['keturi', 'trys', 'šeši'];
        let i = 0;
        while (i < array.length) {
            console.log(i);
            i++;
        }
    }
    printArryIndexesInRows();
}

console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');

{
    function printArryElementsInRows() {
        const array = ['keturi', 'trys', 'šeši']
        let i = 0;
        while (i < array.length) {
            console.log(array[i]);
            i++;
        }
    }
    printArryElementsInRows();
}

console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
    function printArryElementsAndIndeexesInRows() {
        const array = [9, 15, 33, 77, -120, 'x', 'namas', 55];
        let indexElement = '';
        let i = -1;
        while (i < array.length - 1) {
            i++;
            indexElement = i;
            indexElement += ' =>';

            console.log(indexElement, array[i]);
        }
    }
    printArryElementsAndIndeexesInRows();
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    function printArryElementsInRowsReverse() {
        const array = ['keturi', -15, 'trys', 'šeši', 99, 'a']
        let i = array.length - 1;
        while (i >= 0) {
            console.log(array[i]);
            i--;
        }
    }
    printArryElementsInRowsReverse();
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    function printIndexesRow(arr) {
        let resultRow = '';
        for (let i = 0; i < arr.length; i++) {
            const isNotLastElement = i < arr.length - 1;
            resultRow += i;

            if (isNotLastElement) {
                resultRow += ' ';
            }
        }
        console.log(resultRow);
    }

    const test1 = [1, 2, 3, 7];
    const test2 = ['keturi', 'trys', 'šeši', 'b'];

    printIndexesRow(test1);
    printIndexesRow(test2);

}

console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
    function printIndexesRow(arr) {
        let resultRow = '';
        for (let i = 0; i < arr.length; i++) {
            const isNotLastElement = i < arr.length - 1;
            resultRow += arr[i];

            if (isNotLastElement) {
                resultRow += ' ';
            }
        }
        console.log(resultRow);
    }
    const arr = [-111, 2, -9, 48];

    printIndexesRow(arr);

    console.groupEnd();
}
console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
    function printIndexesRow(arr) {
        let resultRow = '';
        for (let i = 0; i < arr.length; i++) {
            const isNotLastElement = i < arr.length - 1;
            resultRow += i;
            resultRow += '=>';
            resultRow += arr[i];

            if (isNotLastElement) {
                resultRow += ' ';
            }
        }
        console.log(resultRow);
    }
    const arr = [17, 8, 88];
    printIndexesRow(arr)
    console.groupEnd();
}