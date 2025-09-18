const Card = require('../../models/card');
const Text = require('../../models/text');

// Fetch all cards for a user:
async function getAllCards(req, res) {
  try {
    const userId = req.user._id;
    const cards = await Card.find({ user: userId })
      .populate('text', 'title')
      .sort({ createdAt: -1 });
    res.status(200).json(cards);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching cards', error: error.message });
  }
}

// Fetch cards that correspond to a specific text and user.
async function getCardsByTextId(req, res) {
  const userId = req.user._id;
  const { id } = req.params;

  try {
    const cards = await Card.find({ user: userId, text: id })
      .populate('text', 'title')
      .sort({ createdAt: -1 });

    if (!cards.length) {
      return res.status(404).json({ message: 'No cards saved for this text.' });
    }

    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching cards by textId',
      error: error.message,
    });
  }
}

// Update a card by its ID
async function updateCard(req, res) {
  try {
    const { id } = req.params;
    const { reading, meaning } = req.body;
    const userId = req.user._id;

    if (!reading && !meaning) {
      return res.status(400).json({
        message: 'At least one field (reading or meaning) must be provided.',
      });
    }

    const updatedCard = await Card.findOneAndUpdate(
      { _id: id, user: userId },
      {
        'frontProperties.pinyin': reading,
        'backProperties.meaning': meaning,
      },
      { new: true }
    ).populate('text', 'title');

    if (!updatedCard) {
      return res.status(404).json({ message: 'Card not found' });
    }

    res.json(updatedCard);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error updating card', error: error.message });
  }
}

async function deleteCard(req, res) {
  try {
    const { wordId } = req.params;
    const userId = req.user._id;
    const card = await Card.findOneAndDelete({ _id: wordId, user: userId });
    if (!card) {
      return res.status(404).json({ message: 'Word not found' });
    }
    const text = await Text.findById(card.text);
    if (text) {
      text.cards.pull(card._id);
      await text.save();
      return res.status(200).json({ message: 'Card deleted.' });
    } else {
      return res
        .status(200)
        .json({ message: 'Card deleted. No Text associated.' });
    }
  } catch (err) {
    console.error('[deleteWord] error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  getAllCards,
  getCardsByTextId,
  updateCard,
  deleteCard,
};
