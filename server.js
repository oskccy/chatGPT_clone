// server
const PORT = 3000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "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";

app.listen(PORT, () => {
  console.log(`Server listening for requests on port ${PORT}`);
});

app.post("/completions", async (req, res) => {
  const config = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
      max_tokens: 100, // length of req message
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      config
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
