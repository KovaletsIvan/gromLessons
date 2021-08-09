const ivanKovalets = {
  days: 7,
  name: 'KovaletsIvan',
  repos: 'gromLessons',
};

const startDate = (days) =>
  new Date(new Date().setDate(new Date().getDate() - days));

const getComitsByDays = (obj) => {
  const { days, name, repos } = obj;
  fetch(`https://api.github.com/repos/${name}/${repos}/commits?per_page=100`)
    .then((respons) => respons.json())
    .then((result) => {
      const commitObj = result[0].commit.author;
      const { name, email } = commitObj;
      const obj = {
        count: result.filter(
          (elem) => new Date(elem.commit.author.date) > startDate(days)
        ),
        name,
        email,
      };
      console.log(obj);
    });
};

getComitsByDays(ivanKovalets);

const getMostActiveDevs = (arrOfObj) => {};
