import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json([]);
});

router.post("/", (req, res) => {
  const { title, description } = req.body;
  res.status(201).json({ id: Date.now(), title, description });
});

export default router;
