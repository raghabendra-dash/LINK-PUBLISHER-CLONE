import SeoTool from "../models/SeoTool.js";

// Get all SEO tools
export const getSeoTools = async (req, res) => {
  try {
    const seoTools = await SeoTool.find({ user: req.user.id });
    res.json(seoTools);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch SEO tools" });
  }
};

// Get a single SEO tool by ID
export const getSeoTool = async (req, res) => {
  try {
    const seoTool = await SeoTool.findById(req.params.id);
    if (!seoTool) {
      return res.status(404).json({ message: "SEO tool not found" });
    }
    res.json(seoTool);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch SEO tool" });
  }
};

// Create a new SEO tool entry
export const createSeoTool = async (req, res) => {
  const { domain, keywords, backlinks, rank, status } = req.body;

  try {
    const seoTool = await SeoTool.create({
      user: req.user.id,
      domain,
      keywords,
      backlinks,
      rank,
      status
    });

    res.status(201).json(seoTool);
  } catch (error) {
    res.status(500).json({ message: "Failed to create SEO tool" });
  }
};

// Update an SEO tool
export const updateSeoTool = async (req, res) => {
  try {
    const seoTool = await SeoTool.findById(req.params.id);

    if (!seoTool) {
      return res.status(404).json({ message: "SEO tool not found" });
    }

    const updatedSeoTool = await SeoTool.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.json(updatedSeoTool);
  } catch (error) {
    res.status(500).json({ message: "Failed to update SEO tool" });
  }
};

// Delete an SEO tool
export const deleteSeoTool = async (req, res) => {
  try {
    const seoTool = await SeoTool.findById(req.params.id);

    if (!seoTool) {
      return res.status(404).json({ message: "SEO tool not found" });
    }

    await seoTool.deleteOne();
    res.json({ message: "SEO tool deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete SEO tool" });
  }
};
