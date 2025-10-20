const z = require('zod');
// Define the detected language schema format as an array of strings.
// This schema assumes that the most used language will be the first one in the list.
const languageSchema = z.array(z.string());

// Define the word output schema format.
const wordSchema = z.object({
    word: z.string(),
    pronunciation: z.string(),
    definition: z.string(),
});

// Define the response object output schema.
const textDetails = z.object({
    detectedLanguage: z.array(languageSchema),
    tokenizedText: z.array(wordSchema)
})

module.exports = textDetails;