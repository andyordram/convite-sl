export default async function handler(req, res) {
  const { nome = "Nome", data = "Data", local = "Local" } = req.query;

  const text = `
  <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
    <rect width="1024" height="1024" fill="#1a1a1a" />
    
    <rect x="40" y="40" width="944" height="944" fill="none" stroke="#d4af37" stroke-width="4"/>
    <rect x="55" y="55" width="914" height="914" fill="none" stroke="#8b0000" stroke-width="2"/>

    <style>
      .title { fill: #d4af37; font-size: 50px; font-family: 'Georgia', serif; font-style: italic; text-anchor: middle; }
      .names { fill: #ffffff; font-size: 80px; font-family: 'Georgia', serif; font-weight: bold; text-anchor: middle; }
      .details { fill: #cccccc; font-size: 40px; font-family: 'Arial', sans-serif; text-anchor: middle; }
      .accent { fill: #8b0000; font-size: 60px; text-anchor: middle; }
    </style>

    <text x="512" y="250" class="title">Convidamos para o Casamento de</text>
    
    <text x="512" y="450" class="names">${nome}</text>
    
    <text x="512" y="580" class="accent">🦇</text>

    <text x="512" y="720" class="details">Data: ${data}</text>
    <text x="512" y="800" class="details">Local: ${local}</text>
  </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(text);
}
