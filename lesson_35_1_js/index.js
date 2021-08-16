const fetchFunc = (userId) => {
  return fetch(`https://api.github.com/users/${userId}`)
    .then((response) => response.json())
    .then((result) => result.blog);
};

const getUsersBlogs = async (arr) => {
  await Promise.all(arr.map((elem) => fetchFunc(elem))).then((result) =>
    console.log(result)
  );
};

getUsersBlogs(['google', 'facebook','github','twitter']);
