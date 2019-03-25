import { supportedBanis } from '../app/config';

const getSections = (bani, length) => {
  const { sectionIDs } = supportedBanis.sectionOrder[bani.token];
  const iterateSectionIDs = [...sectionIDs];
  const sections = {};
  let sectionIndex;
  let [nextSectionID] = iterateSectionIDs.splice(0, 1);
  bani.gurbani.verses.filter(verse => (
    (
      verse.mangalPosition === 'current' || verse.mangalPosition === null
    ) && (
      verse[`exists${length}`] === 1
    )
  )).forEach((verse) => {
    while (verse.verse.verseId > nextSectionID) {
      ([nextSectionID] = iterateSectionIDs.splice(0, 1));
    }
    if (nextSectionID === verse.verse.verseId) {
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
