function censorer(text, censoredWords, censorSymbol = '#') {
  const words = text.split(' ');
  const censored = words.map(word => {
    if (censoredWords.includes(word)) {
      return censorSymbol.repeat(word.length);
    }
    return word;
  });
  return censored.join(' ');
}
    module.exports = censorer;