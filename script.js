const COLORS = [
  '#1e5bd4', '#e63946', '#2a9d8f', '#e9c46a', '#f4a261',
  '#6a4c93', '#457b9d', '#e76f51', '#00b4d8', '#90be6d',
  '#264653', '#f77f00', '#d62828', '#023e8a', '#40916c'
];

const EMOJIS = [
  '🦁', '🐯', '🦅', '🦊', '🐺', '🦋', '🐉',
  '🦈', '⚡', '🔥', '🌊', '🌟', '💥', '🦏', '🐬'
];

const POS = ['GK', 'DF', 'MF', 'FW'];


let teams = [
  {
    id: 1, name: 'Flamengo', color: '#e63946', emoji: '🦅',
    players: [
      { id: 1,  name: 'Santos',          pos: 'GK' },
      { id: 2,  name: 'Varela',          pos: 'DF' },
      { id: 3,  name: 'Léo Pereira',     pos: 'DF' },
      { id: 4,  name: 'David Luiz',      pos: 'DF' },
      { id: 5,  name: 'Ayrton',          pos: 'DF' },
      { id: 6,  name: 'Gerson',          pos: 'MF' },
      { id: 7,  name: 'De Arrascaeta',   pos: 'MF' },
      { id: 8,  name: 'Erick Pulgar',    pos: 'MF' },
      { id: 9,  name: 'Everton Ribeiro', pos: 'MF' },
      { id: 10, name: 'Pedro',           pos: 'FW' },
      { id: 11, name: 'Gabigol',         pos: 'FW' }
    ]
  },
  {
    id: 2, name: 'Palmeiras', color: '#40916c', emoji: '🐢',
    players: [
      { id: 1,  name: 'Weverton',      pos: 'GK' },
      { id: 2,  name: 'Marcos Rocha',  pos: 'DF' },
      { id: 3,  name: 'Gustavo Gómez', pos: 'DF' },
      { id: 4,  name: 'Murilo',        pos: 'DF' },
      { id: 5,  name: 'Piquerez',      pos: 'DF' },
      { id: 6,  name: 'Zé Rafael',     pos: 'MF' },
      { id: 7,  name: 'Raphael Veiga', pos: 'MF' },
      { id: 8,  name: 'Atuesta',       pos: 'MF' },
      { id: 9,  name: 'Dudu',          pos: 'FW' },
      { id: 10, name: 'Endrick',       pos: 'FW' },
      { id: 11, name: 'Rony',          pos: 'FW' }
    ]
  },
  {
    id: 3, name: 'Corinthians', color: '#888888', emoji: '⚫',
    players: [
      { id: 1,  name: 'Cássio',         pos: 'GK' },
      { id: 2,  name: 'Fagner',         pos: 'DF' },
      { id: 3,  name: 'Gil',            pos: 'DF' },
      { id: 4,  name: 'Bruno Méndez',   pos: 'DF' },
      { id: 5,  name: 'Fábio Santos',   pos: 'DF' },
      { id: 6,  name: 'Cantillo',       pos: 'MF' },
      { id: 7,  name: 'Renato Augusto', pos: 'MF' },
      { id: 8,  name: 'Giuliano',       pos: 'MF' },
      { id: 9,  name: 'Róger Guedes',   pos: 'FW' },
      { id: 10, name: 'Yuri Alberto',   pos: 'FW' },
      { id: 11, name: 'Wesley',         pos: 'FW' }
    ]
  },
  {
    id: 4, name: 'São Paulo', color: '#c62a2a', emoji: '🔴',
    players: [
      { id: 1,  name: 'Rafael',         pos: 'GK' },
      { id: 2,  name: 'Igor Vinicius',  pos: 'DF' },
      { id: 3,  name: 'Diego Costa',    pos: 'DF' },
      { id: 4,  name: 'Arboleda',       pos: 'DF' },
      { id: 5,  name: 'Welington',      pos: 'DF' },
      { id: 6,  name: 'Pablo Maia',     pos: 'MF' },
      { id: 7,  name: 'Alisson',        pos: 'MF' },
      { id: 8,  name: 'Rodrigo Nestor', pos: 'MF' },
      { id: 9,  name: 'Lucas',          pos: 'FW' },
      { id: 10, name: 'Calleri',        pos: 'FW' },
      { id: 11, name: 'Luciano',        pos: 'FW' }
    ]
  },
  {
    id: 5, name: 'Grêmio', color: '#00b4d8', emoji: '🔵',
    players: [
      { id: 1,  name: 'Marchesín',   pos: 'GK' },
      { id: 2,  name: 'João Pedro',  pos: 'DF' },
      { id: 3,  name: 'Kannemann',   pos: 'DF' },
      { id: 4,  name: 'Rodrigo Ely', pos: 'DF' },
      { id: 5,  name: 'Reinaldo',    pos: 'DF' },
      { id: 6,  name: 'Villasanti',  pos: 'MF' },
      { id: 7,  name: 'Pepê',        pos: 'MF' },
      { id: 8,  name: 'Bitello',     pos: 'MF' },
      { id: 9,  name: 'Ferreira',    pos: 'FW' },
      { id: 10, name: 'Luis Suárez', pos: 'FW' },
      { id: 11, name: 'Everton',     pos: 'FW' }
    ]
  },
  {
    id: 6, name: 'Internacional', color: '#c0392b', emoji: '⭐',
    players: [
      { id: 1,  name: 'Keiller',      pos: 'GK' },
      { id: 2,  name: 'Bustos',       pos: 'DF' },
      { id: 3,  name: 'Vitão',        pos: 'DF' },
      { id: 4,  name: 'Mercado',      pos: 'DF' },
      { id: 5,  name: 'Renê',         pos: 'DF' },
      { id: 6,  name: 'Johnny',       pos: 'MF' },
      { id: 7,  name: 'De Pena',      pos: 'MF' },
      { id: 8,  name: 'Wanderson',    pos: 'MF' },
      { id: 9,  name: 'Mauricio',     pos: 'FW' },
      { id: 10, name: 'Alan Patrick', pos: 'FW' },
      { id: 11, name: 'Alemão',       pos: 'FW' }
    ]
  }
];

let matches = [
  { id: 1, round: 1, homeId: 1, awayId: 2, homeScore: 2, awayScore: 1 },
  { id: 2, round: 1, homeId: 3, awayId: 4, homeScore: 0, awayScore: 0 },
  { id: 3, round: 1, homeId: 5, awayId: 6, homeScore: 3, awayScore: 1 },
  { id: 4, round: 2, homeId: 2, awayId: 3, homeScore: 1, awayScore: 2 },
  { id: 5, round: 2, homeId: 4, awayId: 1, homeScore: 1, awayScore: 3 },
  { id: 6, round: 2, homeId: 6, awayId: 5, homeScore: 0, awayScore: 1 }
];


let scorers = [
  { teamId: 1, playerId: 10, name: 'Pedro',        goals: 5, assists: 2 },
  { teamId: 1, playerId: 11, name: 'Gabigol',      goals: 4, assists: 1 },
  { teamId: 2, playerId: 10, name: 'Endrick',      goals: 4, assists: 3 },
  { teamId: 3, playerId: 10, name: 'Yuri Alberto', goals: 3, assists: 0 },
  { teamId: 4, playerId: 10, name: 'Calleri',      goals: 3, assists: 2 },
  { teamId: 5, playerId: 10, name: 'Luis Suárez',  goals: 2, assists: 1 },
  { teamId: 5, playerId: 11, name: 'Everton',      goals: 2, assists: 4 },
  { teamId: 6, playerId: 10, name: 'Alan Patrick', goals: 1, assists: 3 }
];


let cards = [
  { teamId: 2, playerId: 7, name: 'Raphael Veiga', yellow: 3, red: 0 },
  { teamId: 3, playerId: 3, name: 'Gil',            yellow: 2, red: 1 },
  { teamId: 1, playerId: 6, name: 'Gerson',         yellow: 2, red: 0 },
  { teamId: 4, playerId: 6, name: 'Pablo Maia',     yellow: 2, red: 0 },
  { teamId: 5, playerId: 6, name: 'Villasanti',     yellow: 1, red: 1 }
];

let nextMatchId = 10;



function getTeam(id) {
  return teams.find(t => t.id === id) || null;
}

// Converte hex #rrggbb + opacidade em rgba — evita o bug do color+'20'
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}



function calcStandings() {
  const stats = {};

  teams.forEach(t => {
    stats[t.id] = { id: t.id, pj: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, pts: 0, form: [] };
  });

  matches.forEach(m => {
    const h = stats[m.homeId];
    const a = stats[m.awayId];
    if (!h || !a) return;

    h.pj++; a.pj++;
    h.gp += m.homeScore; h.gc += m.awayScore;
    a.gp += m.awayScore; a.gc += m.homeScore;

    if (m.homeScore > m.awayScore) {
      h.v++; h.pts += 3; a.d++;
      h.form.push('V'); a.form.push('D');
    } else if (m.homeScore < m.awayScore) {
      a.v++; a.pts += 3; h.d++;
      a.form.push('V'); h.form.push('D');
    } else {
      h.e++; a.e++; h.pts++; a.pts++;
      h.form.push('E'); a.form.push('E');
    }
  });

  return Object.values(stats).sort((a, b) =>
    b.pts - a.pts ||
    b.v - a.v ||
    (b.gp - b.gc) - (a.gp - a.gc) ||
    b.gp - a.gp
  );
}

function renderStandings() {
  const standings = calcStandings();
  const tbody = document.getElementById('standingsBody');
  tbody.innerHTML = '';

  standings.forEach((row, i) => {
    const team = getTeam(row.id);
    if (!team) return;

    const sg       = row.gp - row.gc;
    const sgClass  = sg >= 0 ? 'sg-pos' : 'sg-neg';
    const sgText   = (sg > 0 ? '+' : '') + sg;
    const posClass = i < 3 ? 'pos-top3' : '';
    const form     = row.form.slice(-5);

    const formHtml = form
      .map(f => `<span class="form-dot form-${f.toLowerCase()}">${f}</span>`)
      .join('');

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="pos ${posClass}">${i + 1}</span></td>
      <td>
        <div class="team-name-cell">
          <div class="team-badge"
               style="background:${hexToRgba(team.color, 0.18)};color:${team.color}">
            ${team.emoji}
          </div>
          ${team.name}
        </div>
      </td>
      <td>${row.pj}</td>
      <td>${row.v}</td>
      <td>${row.e}</td>
      <td>${row.d}</td>
      <td>${row.gp}</td>
      <td>${row.gc}</td>
      <td class="${sgClass}">${sgText}</td>
      <td><span class="pts">${row.pts}</span></td>
      <td>${formHtml}</td>`;
    tbody.appendChild(tr);
  });

  // Stats bar
  const totalGoals = matches.reduce((acc, m) => acc + m.homeScore + m.awayScore, 0);
  const media = matches.length > 0 ? (totalGoals / matches.length).toFixed(1) : '0.0';

  document.getElementById('statsBar').innerHTML = `
    <div class="stat-box">
      <div class="stat-box-val">${teams.length}</div>
      <div class="stat-box-label">Times</div>
    </div>
    <div class="stat-box">
      <div class="stat-box-val">${matches.length}</div>
      <div class="stat-box-label">Jogos</div>
    </div>
    <div class="stat-box">
      <div class="stat-box-val">${totalGoals}</div>
      <div class="stat-box-label">Gols</div>
    </div>
    <div class="stat-box">
      <div class="stat-box-val">${media}</div>
      <div class="stat-box-label">Média de Gols</div>
    </div>`;
}



function populateTeamSelects() {
  const opts = teams.map(t => `<option value="${t.id}">${t.emoji} ${t.name}</option>`).join('');
  ['matchHome', 'matchAway'].forEach(id => {
    const sel = document.getElementById(id);
    const cur = sel.value;
    sel.innerHTML = opts;
    if (cur) sel.value = cur;
  });
}

function renderMatches() {
  populateTeamSelects();

  const grid = document.getElementById('matchesGrid');

  if (!matches.length) {
    grid.innerHTML = '<p style="color:var(--white-60);grid-column:1/-1">Nenhum jogo registrado.</p>';
    return;
  }

  // Agrupa por rodada
  const rounds = {};
  matches.forEach(m => {
    if (!rounds[m.round]) rounds[m.round] = [];
    rounds[m.round].push(m);
  });

  let html = '';
  Object.keys(rounds)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach(r => {
      html += `<div class="round-label">⚽ Rodada ${r}</div>`;
      rounds[r].forEach(m => {
        const ht = getTeam(m.homeId);
        const at = getTeam(m.awayId);
        if (!ht || !at) return;

        html += `
          <div class="match-card">
            <div class="match-round-label">Rodada ${m.round}</div>
            <div class="match-teams">
              <div class="match-team" style="color:${ht.color}">${ht.emoji} ${ht.name}</div>
              <div class="match-score">
                <input type="number" value="${m.homeScore}" min="0"
                  onchange="updateScore(${m.id}, 'home', this.value)">
                <span class="score-sep">–</span>
                <input type="number" value="${m.awayScore}" min="0"
                  onchange="updateScore(${m.id}, 'away', this.value)">
              </div>
              <div class="match-team" style="color:${at.color}">${at.emoji} ${at.name}</div>
            </div>
            <div class="match-actions">
              <button class="btn-sm danger" onclick="deleteMatch(${m.id})">✕ Remover</button>
            </div>
          </div>`;
      });
    });

  grid.innerHTML = html;
}

function updateScore(id, side, val) {
  const match = matches.find(m => m.id === id);
  if (!match) return;
  const num = parseInt(val);
  if (isNaN(num) || num < 0) return;
  if (side === 'home') match.homeScore = num;
  else                 match.awayScore = num;
  renderStandings();
  toast('Placar atualizado!');
}

function deleteMatch(id) {
  matches = matches.filter(m => m.id !== id);
  renderMatches();
  renderStandings();
  toast('Jogo removido!');
}

function addMatch() {
  const homeId    = parseInt(document.getElementById('matchHome').value);
  const awayId    = parseInt(document.getElementById('matchAway').value);
  const homeScore = parseInt(document.getElementById('scoreHome').value) || 0;
  const awayScore = parseInt(document.getElementById('scoreAway').value) || 0;
  const round     = parseInt(document.getElementById('roundInput').value) || 1;

  if (homeId === awayId) {
    toast('⚠️ Escolha times diferentes!');
    return;
  }

  matches.push({ id: nextMatchId++, round, homeId, awayId, homeScore, awayScore });
  renderMatches();
  renderStandings();
  toast('✅ Jogo adicionado!');
}



function populatePlayerSelects() {
  // Select de artilheiros: exclui goleiros
  const scorerSel = document.getElementById('scorerSelect');
  if (scorerSel) {
    scorerSel.innerHTML = teams.flatMap(t =>
      t.players
        .filter(p => p.pos !== 'GK')
        .map(p => `<option value="${t.id}|${p.id}|${p.name}">${p.name} (${t.name})</option>`)
    ).join('');
  }

  // Select de cartões: todos os jogadores
  const cardSel = document.getElementById('cardPlayerSelect');
  if (cardSel) {
    cardSel.innerHTML = teams.flatMap(t =>
      t.players.map(p => `<option value="${t.id}|${p.id}|${p.name}">${p.name} (${t.name})</option>`)
    ).join('');
  }
}

function renderScorers() {
  populatePlayerSelects();

  // BUG FIX: ordenar uma cópia e guardar os índices originais para deletar corretamente
  const indexed = scorers.map((s, i) => ({ ...s, _originalIndex: i }));
  indexed.sort((a, b) => b.goals - a.goals || b.assists - a.assists);

  const grid = document.getElementById('scorersGrid');
  grid.innerHTML = indexed.map((s, rank) => {
    const team = getTeam(s.teamId);
    const bg   = team ? hexToRgba(team.color, 0.18) : 'rgba(30,91,212,0.18)';
    const fg   = team ? team.color : '#1e5bd4';
    return `
      <div class="scorer-card">
        <div class="scorer-rank ${rank < 3 ? 'top' : ''}">${rank + 1}</div>
        <div class="team-badge" style="background:${bg};color:${fg};font-size:18px">
          ${team ? team.emoji : '⚽'}
        </div>
        <div class="scorer-info">
          <div class="scorer-name">${s.name}</div>
          <div class="scorer-team">${team ? team.name : '—'}</div>
          <div class="scorer-assists">🎯 ${s.assists} assist.</div>
        </div>
        <div class="scorer-goals">
          <span class="goals-num">⚽ ${s.goals}</span>
          <span class="goals-label">gols</span>
        </div>
        <button class="btn-delete" onclick="deleteScorer(${s._originalIndex})">✕</button>
      </div>`;
  }).join('');
}

function addScorer() {
  const val = document.getElementById('scorerSelect').value;
  if (!val) return;

  const parts  = val.split('|');
  const tid    = parseInt(parts[0]);
  const pid    = parseInt(parts[1]);
  const name   = parts[2];
  const goals  = parseInt(document.getElementById('goalsAdd').value) || 1;
  const assists = parseInt(document.getElementById('assistsAdd').value) || 0;

  const existing = scorers.find(s => s.teamId === tid && s.playerId === pid);
  if (existing) {
    existing.goals   += goals;
    existing.assists += assists;
  } else {
    scorers.push({ teamId: tid, playerId: pid, name, goals, assists });
  }

  renderScorers();
  toast('⚽ ' + goals + ' gol(s) registrado(s) para ' + name + '!');
}

function deleteScorer(originalIndex) {
  scorers.splice(originalIndex, 1);
  renderScorers();
  toast('Artilheiro removido!');
}



function renderCards() {
  const sorted = [...cards].sort(
    (a, b) => (b.yellow + b.red * 2) - (a.yellow + a.red * 2)
  );

  const tbody = document.getElementById('cardsBody');
  tbody.innerHTML = sorted.map((c, i) => {
    const team = getTeam(c.teamId);
    const teamText = team ? team.emoji + ' ' + team.name : '—';
    const teamColor = team ? team.color : '#ffffff';
    return `
      <tr>
        <td><span class="pos">${i + 1}</span></td>
        <td><div class="team-name-cell">${c.name}</div></td>
        <td style="color:${teamColor}">${teamText}</td>
        <td><span class="card-yellow"></span>${c.yellow}</td>
        <td><span class="card-red"></span>${c.red}</td>
        <td><strong>${c.yellow + c.red}</strong></td>
      </tr>`;
  }).join('');
}

function addCard() {
  const val = document.getElementById('cardPlayerSelect').value;
  if (!val) return;

  const parts = val.split('|');
  const tid   = parseInt(parts[0]);
  const pid   = parseInt(parts[1]);
  const name  = parts[2];
  const type  = document.getElementById('cardType').value;

  const existing = cards.find(c => c.teamId === tid && c.playerId === pid);
  if (existing) {
    if (type === 'yellow') existing.yellow++;
    else                   existing.red++;
  } else {
    cards.push({
      teamId:   tid,
      playerId: pid,
      name,
      yellow: type === 'yellow' ? 1 : 0,
      red:    type === 'red'    ? 1 : 0
    });
  }

  renderCards();
  toast((type === 'yellow' ? '🟨' : '🟥') + ' Cartão registrado para ' + name + '!');
}



function renderManage() {
  const grid = document.getElementById('manageGrid');

  grid.innerHTML = teams.map(t => {
    const bg = hexToRgba(t.color, 0.2);
    const playersHtml = t.players.map(p => `
      <div class="player-row">
        <span class="player-number">#${p.id}</span>
        <input
          class="player-name-input"
          value="${escapeAttr(p.name)}"
          onchange="renamePlayer(${t.id}, ${p.id}, this.value)"
        >
        <span class="player-pos-badge pos-${p.pos.toLowerCase()}">${p.pos}</span>
        <button class="btn-delete" onclick="deletePlayer(${t.id}, ${p.id})">✕</button>
      </div>`).join('');

    const posOpts = POS.map(p => `<option value="${p}">${p}</option>`).join('');

    return `
      <div class="team-manage-card">
        <div class="team-header">
          <div class="team-header-left">
            <div class="team-manage-badge" style="background:${bg};color:${t.color}">
              ${t.emoji}
            </div>
            <div>
              <input
                class="team-name-edit"
                value="${escapeAttr(t.name)}"
                title="Clique para editar"
                onchange="renameTeam(${t.id}, this.value)"
              >
              <div class="team-name-hint">Clique no nome para editar</div>
            </div>
          </div>
          <div class="team-header-actions">
            <input
              type="color"
              class="color-picker"
              value="${t.color}"
              title="Cor do time"
              onchange="recolorTeam(${t.id}, this.value)"
            >
            <button class="btn-sm danger" onclick="deleteTeam(${t.id})">✕</button>
          </div>
        </div>
        <div class="players-list">
          ${playersHtml}
        </div>
        <div class="add-player-row">
          <input type="text" placeholder="Nome do jogador" id="np-name-${t.id}">
          <select id="np-pos-${t.id}">${posOpts}</select>
          <button onclick="addPlayer(${t.id})">+</button>
        </div>
      </div>`;
  }).join('');
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
}

function renameTeam(id, val) {
  const team = getTeam(id);
  if (team && val.trim()) team.name = val.trim();
  refreshAllSelects();
}

function recolorTeam(id, color) {
  const team = getTeam(id);
  if (!team) return;
  team.color = color;
  renderStandings();
  renderMatches();
  renderScorers();
  renderCards();
}

function deleteTeam(id) {
  if (!confirm('Remover este time?\nOs resultados com este time serão ignorados na tabela.')) return;
  teams = teams.filter(t => t.id !== id);
  renderManage();
  renderStandings();
  renderMatches();
  renderScorers();
  renderCards();
  toast('Time removido!');
}

function renamePlayer(teamId, playerId, val) {
  const team = getTeam(teamId);
  if (!team) return;
  const player = team.players.find(p => p.id === playerId);
  if (player && val.trim()) player.name = val.trim();
  refreshAllSelects();
}

function deletePlayer(teamId, playerId) {
  const team = getTeam(teamId);
  if (!team) return;
  team.players = team.players.filter(p => p.id !== playerId);
  renderManage();
  toast('Jogador removido!');
}

function addPlayer(teamId) {
  const team   = getTeam(teamId);
  if (!team) return;
  const nameEl = document.getElementById('np-name-' + teamId);
  const posEl  = document.getElementById('np-pos-'  + teamId);
  const name   = nameEl.value.trim();

  if (!name) {
    toast('⚠️ Insira o nome do jogador!');
    return;
  }

  const newId = team.players.length
    ? Math.max(...team.players.map(p => p.id)) + 1
    : 1;

  team.players.push({ id: newId, name, pos: posEl.value });
  nameEl.value = '';

  renderManage();
  refreshAllSelects();
  toast('✅ ' + name + ' adicionado!');
}

function addTeam() {
  const id    = teams.length ? Math.max(...teams.map(t => t.id)) + 1 : 1;
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

  teams.push({
    id,
    name: 'Novo Time ' + id,
    color,
    emoji,
    players: [
      { id: 1, name: 'Goleiro',   pos: 'GK' },
      { id: 2, name: 'Jogador 2', pos: 'DF' },
      { id: 3, name: 'Jogador 3', pos: 'MF' },
      { id: 4, name: 'Jogador 4', pos: 'FW' }
    ]
  });

  renderManage();
  renderStandings();
  populateTeamSelects();
  toast('✅ Novo time criado!');
}

function saveAll() {
  renderManage();
  renderStandings();
  renderMatches();
  renderScorers();
  renderCards();
  toast('💾 Tudo salvo e atualizado!');
}

function resetLeague() {
  if (!confirm('Resetar todos os resultados, artilheiros e cartões?\n(Times e jogadores serão mantidos)')) return;
  matches = [];
  scorers = [];
  cards   = [];
  renderStandings();
  renderMatches();
  renderScorers();
  renderCards();
  toast('🗑️ Liga resetada!');
}

function refreshAllSelects() {
  populateTeamSelects();
  populatePlayerSelects();
}



function showSection(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (btn) btn.classList.add('active');

  const renders = {
    classificacao: renderStandings,
    resultados:    renderMatches,
    artilheiros:   renderScorers,
    cartoes:       renderCards,
    gerenciar:     renderManage
  };

  if (renders[id]) renders[id]();
}

/
renderStandings();
populateTeamSelects();
populatePlayerSelects();
