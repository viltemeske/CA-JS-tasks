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

}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{

}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{

}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{

}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{

}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{

}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    function calculateLosses(obj) {
        let stolenItemValue = Object.values(obj);
         if (stolenItemValue.length === 0) {
             return 'Lucky you!'
         } else {
             return stolenItemValue.reduce(function(a, b){
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