const studentsBirthDays = (students) => {
  const sortedStudents = students.sort(
    (a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate()
  );
  const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });
  const objectOfresult = Object.fromEntries(
    sortedStudents.map((elem) => [
      monthFormatter.format(new Date(elem.birthDate)),
      [],
    ])
  );
  const arrayOfnames = [];

  for (let i = 0; i < sortedStudents.length; i += 1) {
    arrayOfnames.push(
      sortedStudents.filter((elem) => new Date(elem.birthDate).getMonth() === i)
    );
  }

  const filtredNames = arrayOfnames.filter((elem) => elem.length > 0);
  const namesInMonth = [];
  for (let i = 0; i < filtredNames.length; i += 1) {
    namesInMonth.push(filtredNames[i].map((elem) => elem.name));
  }

  let i = 0;
  for (const key in objectOfresult) {
    objectOfresult[key] = namesInMonth[i++];
  }
  console.log(objectOfresult, namesInMonth);
};

const arrOfStudents = [
  { name: "Tom", birthDate: "01/15/2010" },
  { name: "Ben", birthDate: "01/17/2008" },
  { name: "Sam", birthDate: "03/15/2010" },
  { name: "Ivan", birthDate: "02/06/1986" },
  { name: "Taras", birthDate: "02/07/2010" },
];

studentsBirthDays(arrOfStudents);
