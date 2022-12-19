const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9]
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6]
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6]
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8]
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8]
      }
    ]
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8]
      }
    ]
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8]
      }
    ]
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9]
      }
    ]
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9]
      }
    ]
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
];

console.groupEnd();

console.groupCollapsed('1. Atspausdinti visus Informatikos fakulteto studentus');
{
  function ifStudentList(students) {
    const result = students.faculty === 'Informatikos fakultetas' ? [] : '';
    return result;
  }
  const ifStudents = students.filter(ifStudentList);
  console.table(ifStudents);
}

console.groupEnd();

console.groupCollapsed('2. Atspausdinti visus Chemijos fakulteto studentus');
{
  function chfStudentList(students) {
    const result = students.faculty === 'Chemijos fakultetas' ? [] : '';
    return result;
  }
  const chfStudents = students.filter(chfStudentList);
  console.table(chfStudents);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
{
  function eefStudentList(students) {
    const result = students.faculty === 'Elektros ir elektronikos fakultetas' ? [] : '';
    return result;
  }
  const eefStudents = students.filter(eefStudentList);
  console.table(eefStudents);
}
console.groupEnd();

console.groupCollapsed('4. Atspausdinti tik pirmo kurso studentus');
{
  function firstCourseStudentList(students) {
    const result = students.course === 1 ? [] : '';
    return result;
  }
  const firstCourseStudents = students.filter(firstCourseStudentList);
  console.table(firstCourseStudents);
}
console.groupEnd();

console.groupCollapsed('5. Atspausdinti tik antro kurso studentus');
{
  function secondCourseStudentList(students) {
    const result = students.course === 2 ? [] : '';
    return result;
  }
  const secondCourseStudents = students.filter(secondCourseStudentList);
  console.table(secondCourseStudents);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinti tik trečio kurso studentus');
{
  function thirdCourseStudentList(students) {
    const result = students.course === 3 ? [] : '';
    return result;
  }
  const thirdCourseStudents = students.filter(thirdCourseStudentList);
  console.table(thirdCourseStudents);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinti tik ketvirto kurso studentus');
{
  function fourthCourseStudentList(students) {
    const result = students.course === 4 ? [] : '';
    return result;
  }
  const fourthCourseStudents = students.filter(fourthCourseStudentList);
  console.table(fourthCourseStudents);
}
console.groupEnd();

console.groupCollapsed('8. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
{
  function calcModuleAvg(modules) {
    const average = modules.marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / modules.marks.length;
    return Math.round(average);
  }


  function countSemesterCredits(modules) {
    let sum = 0;
    modules.forEach(module => sum += module.credits);

    return sum;

  }
  function studentSemesterAverage(semester) {
    const semesterCredits = countSemesterCredits(semester.modules);
    let semesterAvgWeight = 0;
    semester.modules.forEach(module => {
      const semesterAvgWeightComponent = calcModuleAvg(module) * module.credits;
      semesterAvgWeight += semesterAvgWeightComponent;
    });
    return semesterAvgWeight / semesterCredits;

  }
  const studentsAveradges = students.map(student => {
    return studentSemesterAverage(student)
  });

  let fullList = [];
  for (let i = 0; i < students.length; i++) {
    fullList[i] = { name: students[i].name, surname: students[i].surname, Average: studentsAveradges[i] };
  }

  console.table(fullList);

}

console.groupCollapsed('9. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
{
  function ifStudentList(students) {
    const result = students.faculty === 'Informatikos fakultetas' ? [students.name, students.surname, students.modules] : '';
    return result;
  }
  const ifStudents = students.filter(ifStudentList);

  function calcModuleAvg(modules) {
    const average = modules.marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / modules.marks.length;
    return Math.round(average);
  }

  function countSemesterCredits(modules) {
    let sum = 0;
    modules.forEach(module => sum += module.credits);

    return sum;
  }
  function studentSemesterAverage(semester) {
    const semesterCredits = countSemesterCredits(semester.modules);
    let semesterAvgWeight = 0;
    semester.modules.forEach(module => {
      const semesterAvgWeightComponent = calcModuleAvg(module) * module.credits;
      semesterAvgWeight += semesterAvgWeightComponent;
    });
    return semesterAvgWeight / semesterCredits;
  }
  const studentsAveradges = ifStudents.map(student => {
    return studentSemesterAverage(student)
  });

  let fullList = [];
  for (let i = 0; i < ifStudents.length; i++) {
    fullList[i] = { name: ifStudents[i].name, surname: ifStudents[i].surname, Average: studentsAveradges[i] };
  }

  console.table(fullList);
}

console.groupEnd();

console.groupCollapsed('10. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
{
  function chfStudentList(students) {
    const result = students.faculty === 'Chemijos fakultetas' ? [] : '';
    return result;
  }
  const chfStudents = students.filter(chfStudentList);

  function calcModuleAvg(modules) {
    const average = modules.marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / modules.marks.length;
    return Math.round(average);
  }

  function countSemesterCredits(modules) {
    let sum = 0;
    modules.forEach(module => sum += module.credits);

    return sum;
  }
  function studentSemesterAverage(semester) {
    const semesterCredits = countSemesterCredits(semester.modules);
    let semesterAvgWeight = 0;
    semester.modules.forEach(module => {
      const semesterAvgWeightComponent = calcModuleAvg(module) * module.credits;
      semesterAvgWeight += semesterAvgWeightComponent;
    });
    return semesterAvgWeight / semesterCredits;
  }
  const studentsAveradges = chfStudents.map(student => {
    return studentSemesterAverage(student)
  });

  let fullList = [];
  for (let i = 0; i < chfStudents.length; i++) {
    fullList[i] = { name: chfStudents[i].name, surname: chfStudents[i].surname, Average: studentsAveradges[i] };
  }

  console.table(fullList);
}
console.groupEnd();

console.groupCollapsed('11. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
{
  function eefStudentList(students) {
    const result = students.faculty === 'Elektros ir elektronikos fakultetas' ? [] : '';
    return result;
  }
  const eefStudents = students.filter(eefStudentList);

  function calcModuleAvg(modules) {
    const average = modules.marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / modules.marks.length;
    return Math.round(average);
  }

  function countSemesterCredits(modules) {
    let sum = 0;
    modules.forEach(module => sum += module.credits);

    return sum;

  }
  function studentSemesterAverage(semester) {
    const semesterCredits = countSemesterCredits(semester.modules);
    let semesterAvgWeight = 0;
    semester.modules.forEach(module => {
      const semesterAvgWeightComponent = calcModuleAvg(module) * module.credits;
      semesterAvgWeight += semesterAvgWeightComponent;
    });
    return semesterAvgWeight / semesterCredits;
  }
  const studentsAveradges = eefStudents.map(student => {
    return studentSemesterAverage(student)

  });

  let fullList = [];
  for (let i = 0; i < eefStudents.length; i++) {
    fullList[i] = { name: eefStudents[i].name, surname: eefStudents[i].surname, Average: studentsAveradges[i] };
  }

  console.table(fullList);
}


console.groupEnd();