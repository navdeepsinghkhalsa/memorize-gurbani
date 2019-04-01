const shuffle = a => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};

const splitCorrect = (sections, correct, avoid = {}) => {
  const sectionIDs = Object.keys(sections);
  const remaining = sectionIDs.filter(sectionID => sectionID > correct);
  let nextID;
  const nextOptions = [];
  if (remaining.length > 0) {
    [nextID] = remaining.splice(0, 1);
    nextID = parseInt(nextID, 10);
    nextOptions.push(nextID);
  }
  if (avoid[nextID]) {
    avoid[nextID].forEach(index => delete remaining[remaining.indexOf(index.toString())]);
  }
  if (remaining.length > 0) {
    const nextTwoIndex = Math.floor(Math.random() * remaining.length);
    const [nextTwoID] = remaining.splice(nextTwoIndex, 1);
    nextOptions.push(parseInt(nextTwoID, 10));
  }
  if (remaining.length > 0) {
    const nextThreeIndex = Math.floor(Math.random() * remaining.length);
    const [nextThreeID] = remaining.splice(nextThreeIndex, 1);
    nextOptions.push(parseInt(nextThreeID, 10));
  }
  const shuffledNextOptions = shuffle(nextOptions);
  return {
    correctArray: sectionIDs.filter(sectionID => sectionID <= correct),
    nextID,
    nextOptions: shuffledNextOptions,
  };
};

export default splitCorrect;
