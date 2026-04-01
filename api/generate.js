// api/generate.js
// Backend para gerar convite dinâmico em SVG

export default async function handler(req, res) {
  // Extrai todos os 7 parâmetros da URL
  // Adiciona valores padrão se algum parâmetro estiver faltando
  const { 
    noiva = "Nome da Noiva", 
    noivo = "Nome do Noivo", 
    data = "Data", 
    horario = "Horário", 
    local = "Nome do Local", 
    tipolocal = "castelo/templo/salão", 
    rsvplimite = "Data Limite" 
  } = req.query;

  // Design SVG baseado na imagem de referência
  // Fundo cinza escuro, bordas ornamentadas, selo de cera e texto roxo
  const svg = `
  <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
    <rect width="1024" height="1024" fill="#1C1C1C" />

    <path d="M50 50 L974 50 L974 974 L50 974 Z" fill="none" stroke="#673AB7" stroke-width="4" stroke-dasharray="10 5" />
    <path d="M65 65 L959 65 L959 959 L65 959 Z" fill="none" stroke="#673AB7" stroke-width="2" />
    
    <circle cx="100" cy="100" r="5" fill="#673AB7" />
    <circle cx="924" cy="100" r="5" fill="#673AB7" />
    <circle cx="924" cy="924" r="5" fill="#673AB7" />
    <circle cx="100" cy="924" r="5" fill="#673AB7" />
    <path d="M100 800 L200 900" stroke="#673AB7" stroke-width="3" />
    <path d="M924 800 L824 900" stroke="#673AB7" stroke-width="3" />

    <circle cx="512" cy="150" r="80" fill="#673AB7" stroke="#D4AF37" stroke-width="5" />
    <path d="M512 80 L512 220" stroke="#D4AF37" stroke-width="5" fill="none" />
    <circle cx="512" cy="165" r="40" fill="none" stroke="#D4AF37" stroke-width="5" />
    <path d="M472 165 L512 110 L552 165 L472 165 Z" fill="none" stroke="#D4AF37" stroke-width="5" />

    <style>
      .text-base { font-family: 'Georgia', serif; fill: #673AB7; text-anchor: middle; font-size: 40px; }
      .text-gold { fill: #D4AF37; }
      .names { font-family: 'Times New Roman', serif; font-weight: bold; font-size: 80px; text-anchor: middle; fill: #673AB7; }
      .accent { fill: #673AB7; font-size: 60px; text-anchor: middle; }
    </style>

    <text x="512" y="320" class="text-base">Por ordem do destino e bênção das estrelas,</text>
    <text x="512" y="380" class="text-base">temos a honra de convidar-vos para testemunhar</text>
    <text x="512" y="440" class="text-base">a união de duas almas encantadas:</text>

    <text x="512" y="550" class="names">${noiva}</text>
    <text x="512" y="630" class="accent">&amp;</text>
    <text x="512" y="730" class="names">${noivo}</text>

    <text x="512" y="850" class="text-base text-gold">Em um ritual de amor e magia que acontecerá</text>
    <text x="512" y="900" class="text-base text-gold">em ${data}, as ${horario}, no ${tipolocal}</text>
    <text x="512" y="940" class="text-base text-gold">[${local}]</text>
    
    <text x="512" y="1000" class="text-base">Prepare sua varinha, sua capa e seu coração.</text>
    <text x="512" y="1060" class="text-base">RSVP até ${rsvplimite}</text>

  </svg>
  `;

  // Define o tipo de resposta como imagem SVG e envia o código
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
