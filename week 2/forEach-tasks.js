const flats = [
    {
      address: 'Vilnakiemio g. 7',
      rooms: [
        { title: 'virtuvė', area: 12 },
        { title: 'svetainė', area: 20 },
        { title: 'tualetas', area: 8 },
        { title: 'miegamasis', area: 16 },
      ],
      city: 'Vilnius',
      price: 120000
    },
  
    {
      address: 'Ruginių pr. 17',
      rooms: [
        { title: 'virtuvė', area: 18 },
        { title: 'svetainė', area: 18 },
        { title: 'tualetas', area: 8 },
        { title: 'miegamasis', area: 12 },
        { title: 'miegamasis2', area: 16 },
      ],
      city: 'Kaunas',
      price: 120000
    },
  
    {
      address: 'Saulės g. 7',
      rooms: [
        { title: 'virtuvė', area: 12 },
        { title: 'svetainė', area: 20 },
        { title: 'tualetas', area: 8 },
      ],
      city: 'Klaipėda',
      price: 80000
    },
  ];
    
  console.group('1. Atspausdinkite kiekvieno buto adresą su miestu');
  {
    
    function printAddressCity(flats) {
        console.log(flats.address, flats.city);
         
      }
      flats.forEach(printAddressCity);
  }
  console.groupEnd();
  
  console.group('2. Atspausdinkite kiekvieno buto kambarių skaičių');
  {
    function printHowManyRooms(flats) {
        console.log(flats.rooms.length);
         
      }
      flats.forEach(printHowManyRooms);
  
  }
  console.groupEnd();
  
  console.group('3. Atspausdinkite kiekvieno buto bendrą plotą');
  {
    function printFlatSize(flats) {
        let totalArea = 0;
        for (let i = 0; i < flats.rooms.length; i++){
            totalArea += flats.rooms[i].area;
        }
        console.log(totalArea);
         
      }
      flats.forEach(printFlatSize);
 
}
  console.groupEnd();
  
  