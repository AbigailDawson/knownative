const Text = require("../../models/text");
const Card = require("../../models/card")

const getUserTexts = async (req, res) => {
    try {
      const userId = req.user._id;
  
      // texts for the specific user
      const texts = await Text.find({ user: userId })
        // .populate("cards") // TODO: controller for cards not set up yet
        // .populate("tags") // TODO: controller for tags not set up yet
        .sort({ createdAt: -1 }); // Newest texts first
  
      res.status(200).json(texts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching texts", error: error.message });
    }
  };

  const deleteUserText = async (req, res) => {
    const { userId, textId } = req.params;

    try {
      await Card.deleteMany({ text: textId });
  
      // This works
      const text = await Text.findOneAndDelete({
        _id: textId,
        user: userId,
      });
  
      if (!text) {
        return res.status(404).json({ message: "Text not found" });
      }
  
      return res.status(200).json({ message: "Text and associated cards deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  // Save a word to a user's text (POST /api/texts/saveWord)
async function saveWord(req, res) {
  try {
    const { textId, traditional, pinyin, meaning } = req.body;
    const userId = req.user._id;

    if (!textId || !traditional) {
      return res.status(400).json({ message: "textId and traditional are required" });
    }

    // stop duplicates for the same user + text + characters
    const exists = await Card.findOne({
      user: userId,
      text: textId,
      "frontProperties.traditional": traditional,
    });
    if (exists) return res.status(409).json({ message: "Word already saved" });

    const card = await Card.create({
      user: userId,
      text: textId,
      frontProperties: { traditional, easier: traditional, pinyin },
      backProperties: { meaning },
    });

    // Mongoose style load text add card and save
    const text = await Text.findById(textId);
    text.cards.push(card._id);
    await text.save();
    res.status(201).json(card);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

  module.exports = {
    getUserTexts,
    deleteUserText,
    saveWord,
};