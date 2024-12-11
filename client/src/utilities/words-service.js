export function getWordInfo(word, savedWords) {
  let pinyin = ''
  let meaning = ''
  let charGroup = ''

  if (word.matches && word.matches[0]) {
    pinyin = word.matches[0].pinyinPretty
    meaning = word.matches[0].english
    meaning = meaning.includes('/') ? meaning.split('/')[0].trim() : meaning
    charGroup = word.text

  } else {
    pinyin = ''
    meaning = ''
    charGroup = ''
  }

  return { pinyin, meaning, charGroup }
}

export function checkSpecialChar(word) {

  const specialChars = ['‘', '“', '《', '『', '【', '（', '’', '”', '》', '』', '】', '）', '、', '，', '…', '。', '：', '；', '！', '？', '「', '」', '.', '・']
    const isSpecialChar = specialChars.includes(word.text) || /\d/.test(word.text) || /[^\u4e00-\u9fa5]/.test(word.text)

  return isSpecialChar
}
