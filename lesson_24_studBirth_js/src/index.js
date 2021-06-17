const studentsBirthDays = (students) => {
  const sortedStudents = students.sort(
    (a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate()
  );
  const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });
  const arrOfBirth = sortedStudents.map((elem) => [
    monthFormatter.format(new Date(elem.birthDate)),
    [],
  ]);
  const objectOfresult = Object.fromEntries(arrOfBirth);
  const arrayOfnames = [];

  for (let i = 0; i < arrOfBirth.length; i += 1) {
    arrayOfnames.push(
      sortedStudents.filter((elem) => new Date(elem.birthDate).getMonth() === i)
    );
  }
  const sortedArrayOfnames = arrayOfnames.filter((elem) => elem.length > 0);
  const newSort = [];
  for (let i = 0; i < sortedArrayOfnames.length; i += 1) {
    newSort.push(sortedArrayOfnames[i].map((elem) => elem.name));
  }

  let i = 0;
  for (const key in objectOfresult) {
    objectOfresult[key] = newSort[i++];
  }
  console.log(objectOfresult, sortedStudents);
};

const arrOfStudents = [
  { name: "Tom", birthDate: "01/15/2010" },
  { name: "Ben", birthDate: "01/17/2008" },
  { name: "Sam", birthDate: "03/15/2010" },
  { name: "Ivan", birthDate: "02/06/1986" },
  { name: "Taras", birthDate: "02/05/2010" },
];

studentsBirthDays(arrOfStudents);
