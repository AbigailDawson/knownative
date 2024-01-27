export default function Word({ text, isSaved, onClick }) {
  const prefixPunctuation = ['‘', '“', '《', '『', '【', '（']
  const suffixPunctuation = ['’', '”', '》', '』', '】', '）', '、', '，', '…', '。', '：', '；', '！', '？']

  return (
    <>
      &nbsp;
      <span onClick={onClick} style={{ color: isSaved ? 'green' : 'black' }}>
        { text }
      </span>
      &nbsp;
    </>
    
  )
}