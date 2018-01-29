module.exports = (iso) => {
  const date = new Date(iso).toISO;
  const returnDate = { hour: null, minute: null, second: null };
  returnDate.hour = date.getHours();
  returnDate.minute = date.getMinutes();
  returnDate.second = date.getSeconds();
  return returnDate;
};
