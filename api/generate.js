export default async function handler(req, res) {
  const {
    noiva = "Nome da Noiva",
    noivo = "Nome do Noivo",
    data = "31/10/2026",
    horario = "20:00",
    tipolocal = "Castelo",
    local = "Salão Principal",
    rsvplimite = "15/10/2026"
  } = req.query;

  const svg = `
  <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display&display=swap');

      .titulo {
        font-family: 'Playfair Display', serif;
        font-size: 36px;
        fill: #8B6B4A;
        letter-spacing: 3px;
      }

      .nomes {
        font-family: 'Great Vibes', cursive;
        font-size: 80px;
        fill: #000;
      }

      .detalhe {
        font-family: 'Playfair Display', serif;
        font-size: 28px;
        fill: #444;
      }

      .rodape {
        font-size: 20px;
        fill: #666;
      }
    </style>

    <!-- Fundo -->
    <rect width="100%" height="100%" fill="#f7f3ef"/>

    <!-- Moldura -->
    <rect x="40" y="40" width="944" height="944" fill="none" stroke="#c9b8a6" stroke-width="3"/>

    <!-- Título -->
    <text x="50%" y="150" text-anchor="middle" class="titulo">
      Você está convidado para o casamento de
    </text>

    <text x="50%" y="350" text-anchor="middle" class="nomes">
  ${noiva} &amp; ${noivo}
</text>
    </text>

    <!-- Data -->
    <text x="50%" y="500" text-anchor="middle" class="detalhe">
      ${data} às ${horario}
    </text>

    <!-- Local -->
    <text x="50%" y="580" text-anchor="middle" class="detalhe">
      ${tipolocal} - ${local}
    </text>

    <!-- RSVP -->
    <text x="50%" y="750" text-anchor="middle" class="rodape">
      Confirme presença até ${rsvplimite}
    </text>

    <!-- Linha decorativa -->
    <line x1="300" y1="420" x2="724" y2="420" stroke="#c9b8a6" stroke-width="2"/>
    <line x1="300" y1="460" x2="724" y2="460" stroke="#c9b8a6" stroke-width="2"/>

  </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
}
