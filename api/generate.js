export default async function handler(req, res) {
  const { nome = "Nome", data = "Data", local = "Local" } = req.query;

  const text = `
  <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
    <style>
      .title { fill: black; font-size: 40px; font-family: Arial; }
    </style>
    <text x="50" y="200" class="title">Casamento</text>
    <text x="50" y="300" class="title">${nome}</text>
    <text x="50" y="400" class="title">${data}</text>
    <text x="50" y="500" class="title">${local}</text>
  </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(text);
}
