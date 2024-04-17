export default function hasValuesFromArray(set, startString) {
  const newWord = [];
  if (set instanceof Set && (typeof (startString) === 'string')) {
    for (const val of set.values()) {
      if (typeof val === 'string' && val.startsWith(startString)) {
        const substring = val.substring(startString.length);
        if (substring && substring !== val) {
          newWord.push(substring);
        }
      }
    }
  }
  return newWord.join('-');
}
