module.exports = (arrayOfLinks) => {
  if (arrayOfLinks === undefined) { return false; } else if (!(arrayOfLinks.length === 3)) {
    return false;
  }
  for (let i = 0; i < 3; i += 1) {
    const split = arrayOfLinks[i].split('//');
    if (!(split[0] === 'http:')) { return false; }
  }
  return true;
};
