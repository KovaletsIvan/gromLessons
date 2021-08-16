export const fetchFunc = (userId) => {
  return fetch(`https://api.github.com/users/${userId}`)
    .then((response) => response.json())
    .then((result) => result.blog);
};

export const getUsersBlogs = async (arr) => {
  const result = await Promise.all(arr.map((elem) => fetchFunc(elem)));

  return result;
};

getUsersBlogs(['google', 'facebook', 'github', 'twitter']);
