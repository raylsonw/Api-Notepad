const router = require("express").Router();
const Notinhas = require("./models/notinhas.js");

router.post("/", async (req, res) => {
  const { content } = req.body;

  const aconteudo = { content };

  if (!aconteudo) {
    res.status(422).json({ error: "Invalid conteudo" });
    return;
  }

  try {
    await Notinhas.create(aconteudo);
    res.status(201).json({ message: "Salvo" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/:rota", async (req, res) => {
  const { content, rota } = req.body;

  const aconteudo = { content, rota };

  if (!aconteudo) {
    res.status(422).json({ error: "Invalid conteudo" });
    return;
  }

  try {
    await Notinhas.create(aconteudo);
    res.status(201).json({ message: "Salvo" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await Notinhas.findOne();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/:rota", async (req, res) => {
  const rota = req.params.rota;

  try {
    const result = await Notinhas.findOne({ rota: rota });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.patch("/:rota", async (req, res) => {
  const rotaUrl = req.params.rota;
  const { content, rota } = req.body;
  const aconteudo = { content, rota };

  try {
    const updatedNotas = await Notinhas.updateOne({ rota: rotaUrl }, aconteudo);

    if (updatedNotas.matchedCount === 0) {
      res.status(422).json({ error: "Invalid conteudo" });
      return;
    }

    res.status(200).json(aconteudo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
