function sortAsc(a, b) {
  return a - b;
}

function transformStringToArray(rawData, splitter = '\r\n') {
  return rawData.split(splitter);
}

function trimEmptyLinesFromArray(rawData) {
  return rawData.filter((line) => line.length > 0);
}

export { sortAsc, transformStringToArray, trimEmptyLinesFromArray };