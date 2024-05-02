const {Translate} = require('@google-cloud/translate').v2
const translate = new Translate({ key: process.env.GOOGLE_TRANSLATE_API_KEY });

module.exports = {
  getDemo,
  translateSentence,
}

async function getDemo(req, res) {
  
}

async function translateSentence(req, res) {
  const { sentence } = req.body
  const target = 'en'

  try {
    let [translations] = await translate.translate(sentence, target)
    translations = Array.isArray(translations) ? translations : [translations]
    res.json(translations[0])
  } catch(error) {
    res.status(400).json(error)
  }
}