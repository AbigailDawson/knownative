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

async function deleteCard(req, res) {
  try {
    const { cardId } = req.params;
    const userId = req.user._id;

    // Find the card and remove it
    const card = await Card.findOneAndDelete({
      _id: cardId,
      user: userId,
    });

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    const text = await Text.findById(card.text);
    text.cards.pull(card._id);
    await text.save();

    res.status(200).json({ message: 'Card deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  getAllCards,
  getCardsByTextId,
  deleteCard,
};
