const Text = require("../../models/text");
const Card = require("../../models/card")

const getUserTexts = async (req, res) => {
    try {
      const userId = req.params.userId;
  
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
      // TODO: can't currently test, once card functionality is up, need to see if cards are actually deleted
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

  module.exports = {
    getUserTexts,
    deleteUserText
};