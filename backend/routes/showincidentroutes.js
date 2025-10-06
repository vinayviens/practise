import { Router } from "express";

const router = Router();
const incidents = [];

// Show all incidents
router.get("/", (req, res) => {
  res.json(incidents);
});

// Add a new incident
router.post("/", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Title and description required" });
  }
  const newIncident = {
    id: Date.now(),
    title,
    description
  };
  incidents.push(newIncident);
  res.status(201).json(newIncident);
});

export default router;