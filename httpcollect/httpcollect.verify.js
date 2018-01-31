const verify = (parameter) => {
  if (parameter === undefined) { return false; } else if (!(typeof (parameter) === 'string')) {
    return false;
  } else if (parameter.length === 0) {
    return false;
  }
  const split = parameter.split('//');
  if (split[0] === 'http:') { return true; }

  return false;
};
module.exports = verify;
