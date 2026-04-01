// api/generate.js

export default function handler(req, res) {

  // 🔒 Função para evitar quebra de SVG (SUPER IMPORTANTE)
  function escapeXML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // 📥 Parâmetros com padrão + proteção
  const noiva = escapeXML(req.query.noiva || "Nome da Noiva");
  const noivo = escapeXML(req.query.noivo || "Nome do Noivo");
  const data = escapeXML(req.query.data || "Data");
  const horario = escapeXML(req.query.horario || "Horário");
  const local = escapeXML(req.query.local || "Nome do Local");
  const tipolocal = escapeXML(req.query.tipolocal || "Castelo");
  const rsvplimite = escapeXML(req.query.rsvplimite || "Data Limite");

  // 🎨 SVG PROFISSIONAL (corrigido + alinhado)
  const svg = `
  <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">

    <!-- Fundo -->
    <rect width="1024" height="1024" fill="#1C1C1C"/>

    <!-- Moldura externa -->
    <path d="M50 50 L974 50 L974 974 L50 974 Z"
          fill="none" stroke="#673AB7" stroke-width="4"
          stroke-dasharray="10 5"/>

    <!-- Moldura interna -->
    <path d="M65 65 L959 65 L959 959 L65 959 Z"
          fill="none" stroke="#673AB7" stroke-width="2"/>

    <!-- Ornamentos -->
    <circle cx="100" cy="100" r="5" fill="#673AB7"/>
    <circle cx="924" cy="100" r="5" fill="#673AB7"/>
    <circle cx="924" cy="924" r="5" fill="#673AB7"/>
    <circle cx="100" cy="924" r="5" fill="#673AB7"/>

    <path d="M100 800 L200 900" stroke="#673AB7" stroke-width="3"/>
    <path d="M924 800 L824 900" stroke="#673AB7" stroke-width="3"/>

    <!-- Selo -->
    <circle cx="512" cy="150" r="80" fill="#673AB7" stroke="#D4AF37" stroke-width="5"/>
    <circle cx="512" cy="165" r="40" fill="none" stroke="#D4AF37" stroke-width="5"/>
    <path d="M472 165 L512 110 L552 165 Z" fill="none" stroke="#D4AF37" stroke-width="5"/>

    <!-- Estilos -->
    <style>
      .base {
        font-family: Georgia, serif;
        fill: #673AB7;
        text-anchor: middle;
        font-size: 36px;
      }

      .gold {
        fill: #D4AF37;
      }

      .names {
        font-family: 'Times New Roman', serif;
        font-weight: bold;
        font-size: 80px;
        text-anchor: middle;
        fill: #673AB7;
      }

      .accent {
        fill: #673AB7;
        font-size: 60px;
        text-anchor: middle;
      }
    </style>

    <!-- Texto -->
    <text x="512" y="300" class="base">
      Por ordem do destino e bênção das estrelas,
    </text>

    <text x="512" y="350" class="base">
      temos a honra de convidar-vos para testemunhar
    </text>

    <text x="512" y="400" class="base">
      a união de duas almas encantadas:
    </text>

    <!-- Nomes -->
    <text x="512" y="520" class="names">
      ${noiva}
    </text>

    <text x="512" y="600" class="accent">
      &amp;
    </text>

    <text x="512" y="700" class="names">
      ${noivo}
    </text>

    <!-- Evento -->
    <text x="512" y="820" class="base gold">
      Em ${data}, às ${horario}
    </text>

    <text x="512" y="870" class="base gold">
      no ${tipolocal}
    </text>

    <text x="512" y="910" class="base gold">
      ${local}
    </text>

    <!-- Rodapé -->
    <text x="512" y="960" class="base">
      Prepare sua capa e seu coração
    </text>

    <text x="512" y="1000" class="base">
      RSVP até ${rsvplimite}
    </text>

  </svg>
  `;

  // 📤 Resposta
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
