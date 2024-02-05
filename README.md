# KnowNative

KnowNative is a web application for learners of traditional Chinese to improve their reading comprehension through studying native language texts.

[ - Live Site - ](https://knownative-730586de0f29.herokuapp.com/)

![KnowNative feature demo](/public/images/kn-runthru.gif)

## Description

KnowNative is inspired by two core philosophies of language learning: 

* Our learning is most sustainable when we are genuinely interested in the content we are using to study.
* The more we learn from content produced by real native speakers, the more easily we develop natural fluency in a target language.

KnowNative is designed to move learners away from dry textbook material into the world of real language by providing them a means to easily study from authentic texts and articles written by native speakers.

## User Research

KnowNative's design is in part guided by feedback from a user research survey conducted during project planning. The survey received 21 responses from language learners.

When asked about their preferences in a language learning app for reading comprehension, respondees expressed most interest in generating flashcards, adding inline annotations and seeing sentence translastions, so these features were prioritized in development.

Additionally, respondees expressed interest in feeling like they're playing a game while learning, and learning about culture alongside the language.

![User Research Survey](/public/images/chart1.png)
![User Research Survey](/public/images/chart2.png)
![User Research Survey](/public/images/chart3.png)

## Features

Key features that make KnowNative unique:
- Import any text or article you'd like to study from
- Automatically **generate flashcards** from your saved words
- Add **inline annotations** with a simple click
- Show/hide full **sentence translations**
- **Generate easier versions** of difficult texts

## Tech Stack
- MERN stack: MongoDB, Express.js, Node.js, React
- [chinese-tokenizer](https://github.com/yishn/chinese-tokenizer) - for tokenizing Chinese text
- Google Cloud Translate API
- OpenAI API
- MUI Components - for visually appealing user interfaces

## Challenges and Future Development

KnowNative currently only supports traditional Chinese due to its reliance on the chinese-tokenizer package to parse Chinese text into words based on the [CC-CEDICT](https://www.mdbg.net/chinese/dictionary?page=cc-cedict) (Chinese-English Dictionary). This algorithm makes it possible to create a clickable component from each word to look up definitions and add inline annotations. A different approach would be needed for handling other languages that handle whitespace and word separation differently.

The project currently leverages OpenAI technology to generate easier versions of texts graded for a 5th-grade reading level; however, currently the response length is limited and there are no options for customization. Future development will involve expanding the uses for the OpenAI API to include generating texts at different reading levels, extracting key words and other useful study tools.

Future development will also include improvements to the flashcard feature of the app. Studies have shown that [**spaced repetition**](https://www.babbel.com/en/magazine/spaced-repetition-language-learning) is crucial to reinforcing concepts for long-term sustainable learning. Incorporating spaced repetition into the flashcard algorithm will make this an even more powerful tool for language learning.