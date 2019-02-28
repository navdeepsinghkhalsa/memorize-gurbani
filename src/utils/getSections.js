import { supportedBanis } from '../app/config';

const getSections = (bani) => {
  const { sectionIDs } = supportedBanis[bani.token];
  const iterateSectionIDs = [...sectionIDs];
  const sections = {};
  let sectionIndex;
  let [nextSectionID] = iterateSectionIDs.splice(0, 1);
  bani.gurbani.verses.filter(verse => verse.mangalPosition === 'current' || verse.mangalPosition === null).forEach((verse, index) => {
    if (nextSectionID === index) {
      if (sectionIndex === undefined) {
        sectionIndex = 0;
      } else {
        sectionIndex += 1;
      }
      ([nextSectionID] = iterateSectionIDs.splice(0, 1));
    }
    if (!sections[sectionIndex]) {
      sections[sectionIndex] = [];
    }
    sections[sectionIndex].push(verse.verse.verse.gurmukhi);
  });
  return sections;
};

export default getSections;
