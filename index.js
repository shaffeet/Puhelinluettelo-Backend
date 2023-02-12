const express = require("express");
const app = express();

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-53223532",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-4785738",
  },
];

app.get("/", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
  <html>
    <body>
      <p>Phonebook has info for ${persons.length} people</p>
      <p>${new Date().toString()}</p>
    </body>
  </html>
`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
