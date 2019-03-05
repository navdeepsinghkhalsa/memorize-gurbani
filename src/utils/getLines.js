const getLines = (bani) => {
  const lines = {};
  bani.gurbani.verses.filter(verse => verse.mangalPosition === 'current' || verse.mangalPosition === null).forEach((verse, index) => {
    lines[index] = verse.verse.verse.gurmukhi;
  });
  return lines;
};

export default getLines;
