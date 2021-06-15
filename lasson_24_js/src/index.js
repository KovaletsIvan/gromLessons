const getDiff = (starDate, endDate) => {
  const diff =
    endDate.getTime() - starDate.getTime() < 0
      ? starDate.getTime() - endDate.getTime()
      : endDate.getTime() - starDate.getTime();

  const dayInCecond = 24 * 60 * 60 * 1000;
  const day = Math.floor(diff / dayInCecond);
  const hour = Math.floor((diff - dayInCecond * day) / 1000 / 60 / 60);
  const minute = Math.floor(
    (diff - (dayInCecond * day + hour * 60 * 60 * 1000)) / 1000 / 60
  );
  const second = Math.floor(
    (diff - (dayInCecond * day + hour * 60 * 60 * 1000 + minute * 60 * 1000)) /
      1000
  );

  return `${day}d ${hour}h ${minute}m ${second}s`;
};

const result = getDiff(new Date(), new Date(2021, 5, 16));

console.log(result);
