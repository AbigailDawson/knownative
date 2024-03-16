export function splitSentences(text) {
  return text.split(/([。.])/) 
             .filter(sentence => sentence.trim() !== '') 
             .reduce((acc, current, index, array) => { 
               if (index % 2 === 0) { 
                 acc.push((current + (array[index + 1] || '')).trim())
               }
               return acc
             }, [])
}

export function getWordInfo(word, savedWords) {
  let pinyin = ''
  let meaning = ''

  if (word.matches && word.matches[0]) {
    pinyin = word.matches[0].pinyinPretty
    meaning = word.matches[0].english
    meaning = meaning.includes('/') ? meaning.split('/')[0].trim() : meaning

  } else {
    pinyin = ''
    meaning = ''
  }

  const savedWord = savedWords.find(savedWord => savedWord.traditional === word.traditional)
  if (savedWord) {
    pinyin = savedWord.pinyin || pinyin
    meaning = savedWord.meaning || meaning
  }

  const specialChars = ['‘', '“', '《', '『', '【', '（', '’', '”', '》', '』', '】', '）', '、', '，', '…', '。', '：', '；', '！', '？', '「', '」', '.', '・']
    const isSpecialChar = specialChars.includes(word.text) || /\d/.test(word.text) || /[^\u4e00-\u9fa5]/.test(word.text)

  return { pinyin, meaning, isSpecialChar }
}