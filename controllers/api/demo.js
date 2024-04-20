module.exports = {
  getDemo,
  generateEasierText
}

async function getDemo(req, res) {
  
}

async function generateEasierText(req, res) {
  const { content } = req.body
  console.log('content: ', content)
  const API_KEY = process.env.OPENAI_KEY

  const options = {
    stream: false,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { 
          role: 'user', 
          content: `Using traditional Chinese characters, generate an easier version of the following Chinese text suitable for a 5th-grade reading level: \n '${content}'`
        }
      ],
      max_tokens: 500,
    })
  }

  try {
    const easierText = await fetch('https://api.openai.com/v1/chat/completions', options)
    const data = await easierText.json()
    console.log('data at controller: ', data)
    res.send(data)
  } catch(error) {
    console.error(error)
  }
}