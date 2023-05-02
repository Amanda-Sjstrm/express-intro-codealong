import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import data from "./data.json"

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(bodyParser.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

app.get('/quotes', (req, res) => {
  res.json(data)
})

app.get('/character/:name', (req, res) => {
  const name = req.params.name
  const quotesFromCharacter  = data.filter((item) => item.character.house.slug === name)
  res.json(quotesFromCharacter)
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
