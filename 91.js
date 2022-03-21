function filterLongWords(sentence, n) {
return sentence.split(' ').filter(i=> i.length > n )
}
console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4))
