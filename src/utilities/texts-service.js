export function splitSentences(text) {
  const sentences = text.split(/([。」.])/).filter(sentence => sentence.trim() !== '')
  return sentences
}