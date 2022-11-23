const obj = {
    y: ' ',
    a: {
      g: 'proga',
      p: 'Lietuva',
      l: ['Kėglis']
    },
    b: 'Labas',
    c: [
      'Ponas',
      'mėgstamiausia',
      {
        k: '.',
        t: '!'
      }
    ],
    e: {
      d: 'žalia',
      l: 'šalis',
      a: [
        {
          a: 'geras',
          v: 'galbūt',
          p: ['susitikti']
        }
      ]
    },
    f: [
      { a: ['šiandien', 'gera', 'mano', 'visai'] },
      {
        l: 'spalva',
        a: {
          s: 'kurioje',
          u: 'oras',
          o: ['?']
        },
        s: 'gyvenu'
      }
    ],
    l: 'yra'
  }
  
  console.group('Lietuva yra šalis kurioje gyvenu.');
  {
    const result = obj.a.p + obj.y + obj.l + obj.y + obj.e.l + obj.y + obj.f[1].a.s + obj.y + obj.f[1].s;
    console.log(result);
  }
  console.groupEnd();
  
  console.group('mano mėgstamiausia spalva yra žalia.');
  {
    const result = obj.f[0].a[2] + obj.y + obj.c[1] + obj.y + obj.f[1].l + obj.y + obj.l + obj.y + obj.e.d + obj.y;
    console.log(result);
  }
  console.groupEnd();
  
  console.group('šiandien visai geras oras!');
  {
    const result = '';
    console.log(result);
  }
  console.groupEnd();
  
  console.group('galbūt gera proga susitikti?');
  {
    const result = '';
    console.log(result);
  }
  console.groupEnd();