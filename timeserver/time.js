module.exports = () => {
  const date = new Date();
  let month = date.getMonth();
  if (month <= 9) {
    month = `0${month + 1}`;
  }
  let minutes = date.getMinutes();
  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }
  const data = `${date.getFullYear()}-${month}-${date.getDate()} ${date.getHours()}:${minutes}\n`;
  return data;
};
