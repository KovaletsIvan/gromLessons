export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const newArr = arr.slice();
  return newArr.reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  const result = balances[clients.lastIndexOf(client)] - amount;
  if (result < 0) return -1;
  return result;
};

export const getAdults = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
