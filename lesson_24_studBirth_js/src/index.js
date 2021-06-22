const studentsBirthDays = (students) => {
  const sortStudents = students.sort(
    (a, b) =>
      new Date(a.birthDate).getMonth() - new Date(b.birthDate).getMonth()
  );
  const formater = Intl.DateTimeFormat("en", { month: "short" });
  const arrMonth = [
    ...new Set(
      sortStudents.map(({ birthDate }) => formater.format(new Date(birthDate)))
    ),
  ];

  const result = arrMonth.reduce((obj, elem) => {
    obj[elem] = sortStudents
      .reduce((arrStudents, elemStudent) => {
        if (
          new Date(elemStudent.birthDate).getMonth() === arrMonth.indexOf(elem)
        ) {
          arrStudents.push(elemStudent);
        }
        return arrStudents.sort(
          (a, b) =>
            new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate()
        );
      }, [])
      .map((elem) => elem.name);
    return obj;
  }, {});

  console.log(result);
};

const arrOfStudents = [
  { name: "Tom", birthDate: "01,15,2010" },
  { name: "Ben", birthDate: "01,17,2008" },
  { name: "Sam", birthDate: "03,15,2010" },
  { name: "John", birthDate: "02,06,1986" },
];

studentsBirthDays(arrOfStudents);
