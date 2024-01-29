export function splitSentences(text) {
  return text.split(/([。」.])/) // split according to specified punctuation marks (these typically end a sentence in Chinese)
             .filter(sentence => sentence.trim() !== '') // excludes any whitespace-only sentences from the array if they exist (after trimming, is the sentence an empty string?)
             .reduce((acc, current, index, array) => { // reduce to combine sentences with their punctuation
               if (index % 2 === 0) { // if the current idx is even (meaning it's a sentence, NOT a punctuation mark), do the following: 
                 acc.push((current + (array[index + 1] || '')).trim()) // combine each sentence with the item at the NEXT index (this will be the punctuation for that sentence) and trim any whitespace
                 // 'current' is the current sentence
                 // array[index+1] is the next item (a punctuation)
               }
               return acc // return the result as an array
             }, [])
}
