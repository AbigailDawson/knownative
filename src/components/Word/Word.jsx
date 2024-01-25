export default function Word({ text, traditional, simplified, pinyin, meaning, onClick }) {
  const prefixPunctuation = ['‘', '“', '《', '『', '【', '（']
  const suffixPunctuation = ['’', '”', '》', '』', '】', '）', '、', '，', '…', '。', '：', '；', '！', '？']

  return (
    <>
      &nbsp;
      <span onClick={onClick}>
        { text }
      </span>
      &nbsp;
    </>
    
  )
}