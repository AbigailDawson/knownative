const Card = require("../../models/card");

async function getCards(req, res) {
  try {
    const userId = req.user._id; 
    const cards = await Card.find({ user: userId })
    .populate('text', 'title')
    .sort({ createdAt: -1 });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cards", error: error.message });
  }
}

module.exports = {
  getCards
};