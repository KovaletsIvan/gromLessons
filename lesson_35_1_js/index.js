const fetchUser = async (userId) => {
  try {
    const respons = await fetch(`https://api.github.com/users/${userId}`);
    if (respons.status === 404) {
      return null;
    }
    const userData = await respons.json();
    return userData;
  } catch (e) {
    throw new Error('Failed to fetch user');
  }
};

fetchUser('KovaletsIvan')
  .then((userData) => console.log(userData))
  .catch((err) => alert(err.message));

//   response.status === 404 ||
