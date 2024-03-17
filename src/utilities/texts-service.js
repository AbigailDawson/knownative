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