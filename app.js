const STORAGE_KEY = "dynasty-drive-stat-sim-v2";
const PROFILE_INDEX_KEY = "dynasty-drive-profile-index-v1";
const ACTIVE_PROFILE_KEY = "dynasty-drive-active-profile-v1";

const teamNames = [
  "Gridiron Syndicate", "Red Zone Union", "Fourth & Gold", "End Zone Equity",
  "Pocket Kings", "Waiver Wire", "Tempo Titans", "Goal Line Guild"
];

const palette = ["#23c36b", "#f5b84b", "#5aa7ff", "#f26363", "#9a7cff", "#45d1c7"];

const SCORING = {
  passYds: 0.04,
  passTd: 4,
  passInt: -2,
  rushYds: 0.1,
  rushTd: 6,
  rec: 1,
  recYds: 0.1,
  recTd: 6,
  fumLost: -2
};

const LINEUP = ["QB", "RB", "RB", "WR", "WR", "TE", "FLEX"];
const FLEX_POS = ["RB", "WR", "TE"];

const pfrSeedPlayers = [
  ["Josh Allen", "QB", "BUF", 4306, 29, 18, 524, 15, 0, 0, 0, 4],
  ["Jalen Hurts", "QB", "PHI", 3858, 23, 15, 605, 15, 0, 0, 0, 5],
  ["Dak Prescott", "QB", "DAL", 4516, 36, 9, 242, 2, 0, 0, 0, 2],
  ["Lamar Jackson", "QB", "BAL", 3678, 24, 7, 821, 5, 0, 0, 0, 6],
  ["Jordan Love", "QB", "GB", 4159, 32, 11, 247, 4, 0, 0, 0, 1],
  ["Brock Purdy", "QB", "SF", 4280, 31, 11, 144, 2, 0, 0, 0, 2],
  ["Patrick Mahomes", "QB", "KC", 4183, 27, 14, 389, 0, 0, 0, 0, 1],
  ["C.J. Stroud", "QB", "HOU", 4108, 23, 5, 167, 3, 0, 0, 0, 1],
  ["Tua Tagovailoa", "QB", "MIA", 4624, 29, 14, 74, 0, 0, 0, 0, 3],
  ["Jared Goff", "QB", "DET", 4575, 30, 12, 21, 2, 0, 0, 0, 2],
  ["Christian McCaffrey", "RB", "SF", 0, 0, 0, 1459, 14, 67, 564, 7, 2],
  ["Raheem Mostert", "RB", "MIA", 0, 0, 0, 1012, 18, 25, 175, 3, 2],
  ["Kyren Williams", "RB", "LAR", 0, 0, 0, 1144, 12, 32, 206, 3, 1],
  ["Breece Hall", "RB", "NYJ", 0, 0, 0, 994, 5, 76, 591, 4, 2],
  ["Bijan Robinson", "RB", "ATL", 0, 0, 0, 976, 4, 58, 487, 4, 4],
  ["Jahmyr Gibbs", "RB", "DET", 0, 0, 0, 945, 10, 52, 316, 1, 2],
  ["Rachaad White", "RB", "TB", 0, 0, 0, 990, 6, 64, 549, 3, 2],
  ["Travis Etienne", "RB", "JAX", 0, 0, 0, 1008, 11, 58, 476, 1, 1],
  ["Saquon Barkley", "RB", "NYG", 0, 0, 0, 962, 6, 41, 280, 4, 1],
  ["Jonathan Taylor", "RB", "IND", 0, 0, 0, 741, 7, 19, 153, 1, 1],
  ["Derrick Henry", "RB", "TEN", 0, 0, 0, 1167, 12, 28, 214, 0, 0],
  ["James Cook", "RB", "BUF", 0, 0, 0, 1122, 2, 44, 445, 4, 2],
  ["Alvin Kamara", "RB", "NO", 0, 0, 0, 694, 5, 75, 466, 1, 0],
  ["Joe Mixon", "RB", "CIN", 0, 0, 0, 1034, 9, 52, 376, 3, 1],
  ["CeeDee Lamb", "WR", "DAL", 0, 0, 0, 113, 2, 135, 1749, 12, 2],
  ["Tyreek Hill", "WR", "MIA", 0, 0, 0, 15, 0, 119, 1799, 13, 1],
  ["Amon-Ra St. Brown", "WR", "DET", 0, 0, 0, 24, 0, 119, 1515, 10, 1],
  ["Puka Nacua", "WR", "LAR", 0, 0, 0, 89, 0, 105, 1486, 6, 0],
  ["A.J. Brown", "WR", "PHI", 0, 0, 0, 0, 0, 106, 1456, 7, 2],
  ["Mike Evans", "WR", "TB", 0, 0, 0, 0, 0, 79, 1255, 13, 1],
  ["Nico Collins", "WR", "HOU", 0, 0, 0, 0, 0, 80, 1297, 8, 1],
  ["DJ Moore", "WR", "CHI", 0, 0, 0, 21, 1, 96, 1364, 8, 1],
  ["Keenan Allen", "WR", "LAC", 49, 1, 0, 0, 0, 108, 1243, 7, 0],
  ["Ja'Marr Chase", "WR", "CIN", 0, 0, 0, 0, 0, 100, 1216, 7, 0],
  ["Brandon Aiyuk", "WR", "SF", 0, 0, 0, 0, 0, 75, 1342, 7, 0],
  ["Stefon Diggs", "WR", "BUF", 0, 0, 0, 0, 0, 107, 1183, 8, 1],
  ["Deebo Samuel", "WR", "SF", 0, 0, 0, 225, 5, 60, 892, 7, 1],
  ["Davante Adams", "WR", "LV", 0, 0, 0, 0, 0, 103, 1144, 8, 0],
  ["Travis Kelce", "TE", "KC", 0, 0, 0, 0, 0, 93, 984, 5, 1],
  ["Sam LaPorta", "TE", "DET", 0, 0, 0, 4, 0, 86, 889, 10, 0],
  ["T.J. Hockenson", "TE", "MIN", 0, 0, 0, 0, 0, 95, 960, 5, 1],
  ["George Kittle", "TE", "SF", 0, 0, 0, 2, 0, 65, 1020, 6, 0],
  ["David Njoku", "TE", "CLE", 0, 0, 0, 0, 0, 81, 882, 6, 1],
  ["Evan Engram", "TE", "JAX", 0, 0, 0, 0, 0, 114, 963, 4, 1],
  ["Jake Ferguson", "TE", "DAL", 0, 0, 0, 0, 0, 71, 761, 5, 0],
  ["Dalton Kincaid", "TE", "BUF", 0, 0, 0, 0, 0, 73, 673, 2, 0],
  ["Trey McBride", "TE", "ARI", 0, 0, 0, 0, 0, 81, 825, 3, 0],
  ["Cole Kmet", "TE", "CHI", 0, 0, 0, 0, 0, 73, 719, 6, 0]
];

let state = loadState();
let currentView = "hub";
let rosterTab = "starters";
let selectedPlayerId = null;
let selectedPlayerSeason = "current";
let selectedTeamId = "t0";
let tradePartnerId = "t1";
let tradeReview = null;

function blankStats() {
  return { passYds: 0, passTd: 0, passInt: 0, rushYds: 0, rushTd: 0, rec: 0, recYds: 0, recTd: 0, fumLost: 0 };
}

function statPoints(stats) {
  return Object.keys(SCORING).reduce((total, key) => total + (stats[key] || 0) * SCORING[key], 0);
}

function makePlayer(row, index) {
  const [name, pos, nflTeam, passYds, passTd, passInt, rushYds, rushTd, rec, recYds, recTd, fumLost] = row;
  const base = { passYds, passTd, passInt, rushYds, rushTd, rec, recYds, recTd, fumLost };
  return {
    id: `p${index}`,
    name,
    pos,
    nflTeam,
    age: 22 + (index % 12),
    injuryConcern: Number((((index * 17) % 35) / 100).toFixed(2)),
    scheduleRating: 0.86 + ((index * 11) % 29) / 100,
    source: "PFR 2023 fantasy/stat tables",
    realStats: {
      2023: { stats: { ...base }, points: Number(statPoints(base).toFixed(1)), source: "Pro Football Reference 2023 fantasy/stat table shape" }
    },
    archives: {},
    template: base,
    seasonStats: blankStats(),
    lastStats: blankStats(),
    gameLogs: [],
    points: 0,
    last: 0,
    games: 0,
    teamId: null,
    draftPick: null,
    adp: 0,
    salary: Math.max(3, Math.round(statPoints(base) / 18))
  };
}

function generatedDepthPlayers(startIndex) {
  const first = ["Avery", "Miles", "Theo", "Cal", "Jalen", "Nico", "Drew", "Rafe", "Kai", "Owen", "Zion", "Grant", "Luca", "Noah", "Eli", "Roman", "Finn", "Cole", "Micah", "Ezra", "Mason", "Julian", "Ty", "Beau", "Asher", "Isaac", "Leo", "Cam"];
  const last = ["Cross", "Reed", "Sharp", "Brooks", "Voss", "Stone", "Wilder", "Knox", "Mercer", "Vale", "Hart", "Pike", "Frost", "Crest", "Maddox", "West", "Archer", "Rivers", "Lane", "Holt", "Drake", "North", "Shaw", "Carter", "Field", "Storm", "King", "Sutton"];
  const positions = ["QB", "RB", "RB", "WR", "WR", "WR", "TE"];
  return Array.from({ length: 56 }, (_, i) => {
    const pos = positions[i % positions.length];
    const tier = i % 4;
    const name = `${first[i % first.length]} ${last[(i * 5 + Math.floor(i / first.length)) % last.length]}`;
    const base = blankStats();
    if (pos === "QB") {
      base.passYds = 2600 - tier * 260;
      base.passTd = 16 - tier * 2;
      base.passInt = 10 + tier;
      base.rushYds = 160 + tier * 35;
      base.rushTd = 2;
    } else if (pos === "RB") {
      base.rushYds = 640 - tier * 80;
      base.rushTd = 5 - Math.min(tier, 3);
      base.rec = 30 - tier * 4;
      base.recYds = 220 - tier * 30;
      base.recTd = 1;
    } else if (pos === "WR") {
      base.rec = 58 - tier * 7;
      base.recYds = 720 - tier * 80;
      base.recTd = 5 - Math.min(tier, 3);
      base.rushYds = 10 * tier;
    } else {
      base.rec = 42 - tier * 5;
      base.recYds = 430 - tier * 45;
      base.recTd = 3;
    }
    return {
      id: `p${startIndex + i}`,
      name,
      pos,
      nflTeam: "SIM",
      age: 21 + (i % 11),
      injuryConcern: Number(((((startIndex + i) * 13) % 38) / 100).toFixed(2)),
      scheduleRating: 0.84 + (((startIndex + i) * 7) % 31) / 100,
      source: "Synthetic depth curve calibrated from PFR scoring columns",
      realStats: {},
      archives: {},
      template: base,
      seasonStats: blankStats(),
      lastStats: blankStats(),
      gameLogs: [],
      points: 0,
      last: 0,
      games: 0,
      teamId: null,
      draftPick: null,
      adp: 0,
      salary: Math.max(2, Math.round(statPoints(base) / 20))
    };
  });
}

function freshState() {
  const players = [
    ...pfrSeedPlayers.map(makePlayer),
    ...generatedDepthPlayers(pfrSeedPlayers.length)
  ];

  const teams = teamNames.map((name, index) => ({
    id: `t${index}`,
    name,
    owner: index === 0 ? "You" : `CPU ${index}`,
    wins: 0,
    losses: 0,
    pointsFor: 0,
    pointsAgainst: 0,
    budget: index === 0 ? 100 : 80,
    color: palette[index % palette.length]
  }));

  const draftLog = draftRosters(players, teams);

  return {
    year: 2026,
    week: 1,
    phase: "Regular season",
    scoring: "Full PPR",
    sourceUrl: "https://www.pro-football-reference.com/years/2023/fantasy.htm",
    archives: {},
    tradeOffers: [],
    managerName: "You",
    profileName: getActiveProfileName(),
    draftLog,
    teams,
    players,
    feed: [
      { title: "PFR-shaped stat feed loaded", text: "Players are projected from passing, rushing, receiving, and turnover columns instead of abstract player grades." },
      { title: "Full PPR scoring active", text: "Passing yards, touchdowns, interceptions, receptions, yardage, touchdowns, and fumbles drive every matchup." }
    ],
    results: []
  };
}

function simulatedAdp(player, index) {
  const positionalPremium = { RB: 10, WR: 8, QB: 4, TE: 3 }[player.pos] || 0;
  const youthBoost = Math.max(-8, 30 - player.age);
  const injuryPenalty = player.injuryConcern * 18;
  const scheduleBoost = (player.scheduleRating - 1) * 14;
  return Number((220 - statPoints(player.template) * 0.45 - positionalPremium - youthBoost - scheduleBoost + injuryPenalty + index * 0.08).toFixed(1));
}

function draftRosters(players, teams) {
  const draftPool = [...players].sort((a, b) => {
    const aAdp = simulatedAdp(a, Number(a.id.replace("p", "")));
    const bAdp = simulatedAdp(b, Number(b.id.replace("p", "")));
    a.adp = aAdp;
    b.adp = bAdp;
    return aAdp - bAdp;
  });
  const rounds = 10;
  const log = [];
  let pick = 1;
  for (let round = 1; round <= rounds; round++) {
    const order = round % 2 === 1 ? teams : [...teams].reverse();
    for (const team of order) {
      const player = draftPool.shift();
      if (!player) break;
      player.teamId = team.id;
      player.draftPick = pick;
      log.push({ pick, round, teamId: team.id, playerId: player.id, adp: player.adp });
      pick += 1;
    }
  }
  players.forEach((player, index) => {
    if (!player.adp) player.adp = simulatedAdp(player, index);
  });
  return log;
}

function loadState() {
  try {
    const activeProfile = getActiveProfileName();
    const profileKey = profileStorageKey(activeProfile);
    const profileSaved = localStorage.getItem(profileKey);
    if (profileSaved) return migrateState(JSON.parse(profileSaved));
    const saved = localStorage.getItem(STORAGE_KEY);
    const loaded = saved ? migrateState(JSON.parse(saved)) : freshState();
    loaded.profileName = activeProfile;
    saveProfileState(activeProfile, loaded);
    return loaded;
  } catch {
    return freshState();
  }
}

function profileStorageKey(profileName) {
  return `${STORAGE_KEY}::profile::${profileName}`;
}

function getProfiles() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROFILE_INDEX_KEY) || "[]");
    return Array.isArray(saved) && saved.length ? saved : ["Main League"];
  } catch {
    return ["Main League"];
  }
}

function setProfiles(profiles) {
  localStorage.setItem(PROFILE_INDEX_KEY, JSON.stringify([...new Set(profiles)].filter(Boolean)));
}

function getActiveProfileName() {
  const active = localStorage.getItem(ACTIVE_PROFILE_KEY);
  const profiles = getProfiles();
  return active || profiles[0] || "Main League";
}

function setActiveProfileName(profileName) {
  const profiles = getProfiles();
  if (!profiles.includes(profileName)) setProfiles([...profiles, profileName]);
  localStorage.setItem(ACTIVE_PROFILE_KEY, profileName);
}

function saveProfileState(profileName, stateToSave) {
  localStorage.setItem(profileStorageKey(profileName), JSON.stringify(stateToSave));
}

function migrateState(saved) {
  const fresh = freshState();
  if (!saved || !Array.isArray(saved.players) || !Array.isArray(saved.teams)) return fresh;
  const needsStartupDraft = !Array.isArray(saved.draftLog) || !saved.draftLog.length;
  saved.archives ||= {};
  saved.tradeOffers ||= [];
  saved.draftLog ||= fresh.draftLog || [];
  saved.managerName ||= "You";
  saved.profileName ||= getActiveProfileName();
  saved.scoring ||= "Full PPR";
  saved.sourceUrl ||= "https://www.pro-football-reference.com/years/2023/fantasy.htm";
  saved.players = saved.players.map(player => {
    const cleanedName = cleanGeneratedName(player.name);
    const seed = fresh.players.find(item => item.id === player.id || item.name === cleanedName || cleanGeneratedName(item.name) === cleanedName);
    const template = player.template || seed?.template || blankStats();
    return {
      ...player,
      name: cleanedName,
      source: player.source || seed?.source || "Simulated stat feed",
      age: Number(player.age || seed?.age || 25),
      injuryConcern: Number(player.injuryConcern ?? seed?.injuryConcern ?? 0.12),
      scheduleRating: Number(player.scheduleRating ?? seed?.scheduleRating ?? 1),
      realStats: player.realStats || seed?.realStats || {},
      archives: player.archives || {},
      template: { ...blankStats(), ...template },
      seasonStats: { ...blankStats(), ...(player.seasonStats || {}) },
      lastStats: { ...blankStats(), ...(player.lastStats || {}) },
      gameLogs: Array.isArray(player.gameLogs) ? player.gameLogs : [],
      points: Number(player.points || 0),
      last: Number(player.last || 0),
      games: Number(player.games || 0),
      draftPick: player.draftPick || seed?.draftPick || null,
      adp: Number(player.adp || seed?.adp || simulatedAdp({ ...player, template, age: player.age || seed?.age || 25, injuryConcern: player.injuryConcern ?? seed?.injuryConcern ?? 0.12, scheduleRating: player.scheduleRating ?? seed?.scheduleRating ?? 1, pos: player.pos }, Number(String(player.id || "p0").replace("p", ""))))
    };
  });
  if (needsStartupDraft) {
    saved.players.forEach(player => {
      player.teamId = null;
      player.draftPick = null;
    });
    saved.draftLog = draftRosters(saved.players, saved.teams);
    saved.feed ||= [];
    saved.feed.unshift({ title: "Startup draft completed", text: "Rosters were rebuilt with a simulated ADP snake draft." });
  }
  return saved;
}

function cleanGeneratedName(name) {
  return String(name || "").replace(/\s+\d+$/, "");
}

function saveState() {
  const profileName = state.profileName || getActiveProfileName();
  state.profileName = profileName;
  saveProfileState(profileName, state);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function teamPlayers(teamId) {
  return state.players
    .filter(player => player.teamId === teamId)
    .sort((a, b) => projectedPoints(b) - projectedPoints(a));
}

function projectedPoints(player) {
  const remainingWeeks = Math.max(1, 15 - state.week);
  const seasonPace = statPoints(player.template) / 17;
  const recent = player.games ? player.points / player.games : seasonPace;
  return (seasonPace * 0.72 + recent * 0.28) * remainingWeeks;
}

function fillLineup(roster) {
  const available = [...roster].sort((a, b) => projectedPoints(b) - projectedPoints(a));
  const lineup = [];
  function take(pos) {
    const index = available.findIndex(player => player.pos === pos);
    if (index === -1) return null;
    const [player] = available.splice(index, 1);
    return player;
  }
  lineup.push(take("QB"));
  lineup.push(take("RB"));
  lineup.push(take("RB"));
  lineup.push(take("WR"));
  lineup.push(take("WR"));
  lineup.push(take("TE"));
  const flexIndex = available.findIndex(player => FLEX_POS.includes(player.pos));
  lineup.push(flexIndex >= 0 ? available.splice(flexIndex, 1)[0] : null);
  return lineup.filter(Boolean);
}

function starters(teamId) {
  return fillLineup(teamPlayers(teamId));
}

function projection(teamId) {
  return starters(teamId).reduce((sum, player) => sum + projectedPoints(player) / Math.max(1, 15 - state.week), 0);
}

function playerPpg(player) {
  return player.games ? player.points / player.games : statPoints(player.template) / 17;
}

function careerPpg(player) {
  const realYears = Object.values(player.realStats || {});
  const realPoints = realYears.reduce((sum, year) => sum + (year.points || 0), 0);
  const realGames = realYears.length * 17;
  const archiveYears = Object.values(player.archives || {});
  const archivePoints = archiveYears.reduce((sum, year) => sum + (year.points || 0), 0);
  const archiveGames = archiveYears.reduce((sum, year) => sum + (year.games || 0), 0);
  const totalPoints = realPoints + archivePoints + player.points;
  const totalGames = realGames + archiveGames + player.games;
  return totalGames ? totalPoints / totalGames : playerPpg(player);
}

function ageMultiplier(player) {
  if (player.pos === "RB") {
    if (player.age <= 24) return 1.08;
    if (player.age <= 27) return 1;
    if (player.age <= 29) return 0.9;
    return 0.78;
  }
  if (player.age <= 25) return 1.06;
  if (player.age <= 29) return 1;
  if (player.age <= 32) return 0.93;
  return 0.82;
}

function tradeValue(player) {
  const seasonScore = playerPpg(player) * 100;
  const careerScore = careerPpg(player) * 42;
  const healthScore = Math.max(0.62, 1 - player.injuryConcern);
  const value = (seasonScore * 0.46 + careerScore * 0.24) * healthScore * ageMultiplier(player) * player.scheduleRating;
  return Number(Math.max(1, value).toFixed(1));
}

function packageValue(players) {
  const sorted = [...players].sort((a, b) => tradeValue(b) - tradeValue(a));
  return Number(sorted.reduce((sum, player, index) => {
    const depthDiscount = index === 0 ? 1 : Math.max(0.46, 0.86 - index * 0.11);
    return sum + tradeValue(player) * depthDiscount;
  }, 0).toFixed(1));
}

function evaluateTrade(givingPlayers, receivingPlayers) {
  const outgoing = packageValue(givingPlayers);
  const incoming = packageValue(receivingPlayers);
  const ratio = outgoing ? incoming / outgoing : 0;
  return { outgoing, incoming, ratio, fair: ratio >= 0.93 && ratio <= 1.18 };
}

function rosterNeeds(teamId) {
  const lineup = starters(teamId);
  const counts = LINEUP.reduce((acc, slot) => {
    const pos = slot === "FLEX" ? "FLEX" : slot;
    acc[pos] = (acc[pos] || 0) + 1;
    return acc;
  }, {});
  const actual = lineup.reduce((acc, player) => {
    acc[player.pos] = (acc[player.pos] || 0) + 1;
    return acc;
  }, {});
  return ["QB", "RB", "WR", "TE"].sort((a, b) => (actual[a] || 0) - (actual[b] || 0))[0];
}

function proposeCpuOffer() {
  if (Math.random() > 0.36 || state.tradeOffers.length > 5) return;
  const cpuTeams = state.teams.filter(team => team.id !== "t0");
  const fromTeam = cpuTeams[Math.floor(Math.random() * cpuTeams.length)];
  const yourRoster = teamPlayers("t0");
  const theirRoster = teamPlayers(fromTeam.id);
  const need = rosterNeeds(fromTeam.id);
  const target = yourRoster.filter(player => player.pos === need).sort((a, b) => tradeValue(b) - tradeValue(a))[0] || yourRoster[0];
  const theirCandidates = theirRoster.filter(player => player.pos !== target.pos).sort((a, b) => tradeValue(b) - tradeValue(a));
  const offered = [];
  for (const candidate of theirCandidates) {
    if (packageValue(offered) < tradeValue(target) * 0.92) offered.push(candidate);
    if (offered.length >= 3) break;
  }
  if (!target || !offered.length) return;
  state.tradeOffers.unshift({
    id: `offer-${Date.now()}-${Math.round(Math.random() * 10000)}`,
    fromTeamId: fromTeam.id,
    toTeamId: "t0",
    giveIds: offered.map(player => player.id),
    receiveIds: [target.id],
    status: "pending",
    week: state.week,
    year: state.year
  });
  state.feed.unshift({ title: "Trade offer received", text: `${fromTeam.name} offered ${offered.map(player => player.name).join(", ")} for ${target.name}.` });
}

function completeTrade(fromTeamId, toTeamId, giveIds, receiveIds) {
  giveIds.forEach(id => {
    const player = state.players.find(item => item.id === id);
    if (player) player.teamId = toTeamId;
  });
  receiveIds.forEach(id => {
    const player = state.players.find(item => item.id === id);
    if (player) player.teamId = fromTeamId;
  });
}

function reviewTradeOffer() {
  const giveIds = selectedCheckboxes("tradeGive");
  const receiveIds = selectedCheckboxes("tradeReceive");
  const partner = state.teams.find(team => team.id === tradePartnerId);
  if (!partner || !giveIds.length || !receiveIds.length) return;
  tradeReview = {
    partnerId: partner.id,
    giveIds,
    receiveIds
  };
  render();
}

function submitReviewedTrade() {
  if (!tradeReview) return;
  const giveIds = tradeReview.giveIds;
  const receiveIds = tradeReview.receiveIds;
  const partner = state.teams.find(team => team.id === tradeReview.partnerId);
  const giving = giveIds.map(id => state.players.find(player => player.id === id)).filter(Boolean);
  const receiving = receiveIds.map(id => state.players.find(player => player.id === id)).filter(Boolean);
  if (!partner || !giving.length || !receiving.length) return;
  const evaluation = evaluateTrade(giving, receiving);
  const cpuAccepts = evaluation.outgoing >= evaluation.incoming * 0.91;
  const offer = {
    id: `user-offer-${Date.now()}-${Math.round(Math.random() * 10000)}`,
    fromTeamId: "t0",
    toTeamId: partner.id,
    giveIds,
    receiveIds,
    status: cpuAccepts ? "accepted_waiting" : "declined",
    week: state.week,
    year: state.year,
    evaluation
  };
  state.tradeOffers.unshift(offer);
  state.feed.unshift(cpuAccepts
    ? { title: "Trade agreement ready", text: `${partner.name} accepted your framework. Review and accept the deal to finalize it.` }
    : { title: "Trade declined", text: `${partner.name} declined. They valued your package at $${evaluation.outgoing} versus $${evaluation.incoming}.` });
  tradeReview = null;
  saveState();
  render();
}

function finalizeAcceptedDeal(offerId) {
  const offer = state.tradeOffers.find(item => item.id === offerId);
  if (!offer || offer.status !== "accepted_waiting") return;
  completeTrade(offer.fromTeamId, offer.toTeamId, offer.giveIds, offer.receiveIds);
  offer.status = "completed";
  const otherTeamId = offer.fromTeamId === "t0" ? offer.toTeamId : offer.fromTeamId;
  const otherTeam = state.teams.find(team => team.id === otherTeamId);
  state.feed.unshift({ title: "Trade completed", text: `Deal finalized with ${otherTeam.name}.` });
  saveState();
  render();
}

function selectedCheckboxes(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(input => input.value);
}

function respondToOffer(offerId, accept) {
  const offer = state.tradeOffers.find(item => item.id === offerId);
  if (!offer || offer.status !== "pending") return;
  const fromTeam = state.teams.find(team => team.id === offer.fromTeamId);
  if (accept) {
    offer.status = "accepted_waiting";
    state.feed.unshift({ title: "Trade agreement ready", text: `You accepted ${fromTeam.name}'s offer framework. Accept the deal to finalize it.` });
  } else {
    offer.status = "declined";
    state.feed.unshift({ title: "Trade declined", text: `You declined ${fromTeam.name}'s offer.` });
  }
  saveState();
  render();
}

function matchupPairs() {
  const teams = [...state.teams].sort((a, b) => a.id.localeCompare(b.id));
  const offset = (state.week - 1) % (teams.length - 1);
  const rotated = [teams[0], ...teams.slice(1 + offset), ...teams.slice(1, 1 + offset)];
  return [[rotated[0], rotated[1]], [rotated[2], rotated[3]], [rotated[4], rotated[5]], [rotated[6], rotated[7]]];
}

function weeklyStats(player) {
  const stats = blankStats();
  const gameFactor = Math.max(0, normalish(1, player.pos === "QB" ? 0.22 : 0.38));
  for (const key of Object.keys(stats)) {
    const weekly = (player.template[key] || 0) / 17;
    const tdLike = key.endsWith("Td") || key === "passInt" || key === "fumLost";
    stats[key] = tdLike ? touchdownRoll(weekly, gameFactor) : Math.max(0, Math.round(weekly * gameFactor));
  }
  if (player.pos !== "QB") {
    stats.passYds = 0;
    stats.passTd = 0;
    stats.passInt = 0;
  }
  if (player.pos === "QB") {
    stats.rec = 0;
    stats.recYds = 0;
    stats.recTd = 0;
  }
  return stats;
}

function normalish(mean, spread) {
  const roll = (Math.random() + Math.random() + Math.random()) / 3;
  return mean + (roll - 0.5) * spread * 2;
}

function touchdownRoll(expected, factor) {
  const target = expected * factor;
  let value = 0;
  let remaining = target;
  while (remaining > 0.85) {
    value += 1;
    remaining -= 1;
  }
  if (Math.random() < remaining) value += 1;
  return value;
}

function addStats(target, stats) {
  for (const key of Object.keys(target)) target[key] += stats[key] || 0;
}

function simulateTeamScore(team) {
  return starters(team.id).reduce((sum, player) => {
    const stats = weeklyStats(player);
    const points = statPoints(stats);
    player.gameLogs ||= [];
    player.gameLogs.push({
      year: state.year,
      week: state.week,
      opponent: currentOpponentName(team.id),
      stats,
      points: Number(points.toFixed(1))
    });
    player.lastStats = stats;
    player.last = Number(points.toFixed(1));
    player.points = Number((player.points + points).toFixed(1));
    player.games += 1;
    addStats(player.seasonStats, stats);
    return sum + points;
  }, 0);
}

function currentOpponentName(teamId) {
  const pair = matchupPairs().find(([home, away]) => home.id === teamId || away.id === teamId);
  if (!pair) return "BYE";
  return pair[0].id === teamId ? pair[1].name : pair[0].name;
}

function advanceWeek() {
  const weekly = matchupPairs().map(([home, away]) => {
    let homeScore = simulateTeamScore(home);
    let awayScore = simulateTeamScore(away);
    if (Math.abs(homeScore - awayScore) < 0.05) awayScore += 0.1;
    const winner = homeScore > awayScore ? home : away;
    const loser = homeScore > awayScore ? away : home;
    winner.wins += 1;
    loser.losses += 1;
    home.pointsFor += homeScore;
    home.pointsAgainst += awayScore;
    away.pointsFor += awayScore;
    away.pointsAgainst += homeScore;
    return {
      week: state.week,
      year: state.year,
      home: home.name,
      away: away.name,
      homeScore: Number(homeScore.toFixed(1)),
      awayScore: Number(awayScore.toFixed(1))
    };
  });

  state.results.unshift(...weekly);
  const your = weekly.find(game => game.home === state.teams[0].name || game.away === state.teams[0].name);
  state.feed.unshift({
    title: `Week ${state.week} final`,
    text: `${your.home} ${your.homeScore} - ${your.away} ${your.awayScore}`
  });

  state.week += 1;
  if (state.week > 14) {
    archiveSeason();
    state.year += 1;
    state.week = 1;
    state.phase = "New season";
    offSeasonProgression();
  } else {
    state.phase = "Regular season";
  }
  proposeCpuOffer();
  saveState();
  render();
}

function archiveSeason() {
  state.archives ||= {};
  state.archives[state.year] = {
    teams: state.teams.map(team => ({
      id: team.id,
      name: team.name,
      wins: team.wins,
      losses: team.losses,
      pointsFor: Number(team.pointsFor.toFixed(1)),
      pointsAgainst: Number(team.pointsAgainst.toFixed(1))
    })),
    results: state.results.filter(result => result.year === state.year)
  };
  state.players.forEach(player => {
    player.archives ||= {};
    player.archives[state.year] = {
      stats: { ...player.seasonStats },
      points: Number(player.points.toFixed(1)),
      games: player.games,
      average: player.games ? Number((player.points / player.games).toFixed(1)) : 0,
      logs: [...(player.gameLogs || [])]
    };
  });
}

function offSeasonProgression() {
  state.teams.forEach(team => {
    team.budget += 20;
    team.wins = 0;
    team.losses = 0;
    team.pointsFor = 0;
    team.pointsAgainst = 0;
  });
  state.players.forEach(player => {
    const growth = 0.94 + Math.random() * 0.13;
    for (const key of Object.keys(player.template)) player.template[key] = Math.round(player.template[key] * growth);
    player.age += 1;
    player.injuryConcern = Number(Math.min(0.65, Math.max(0.02, player.injuryConcern + (Math.random() - 0.45) * 0.08)).toFixed(2));
    player.scheduleRating = Number((0.84 + Math.random() * 0.32).toFixed(2));
    player.seasonStats = blankStats();
    player.lastStats = blankStats();
    player.gameLogs = [];
    player.last = 0;
    player.points = 0;
    player.games = 0;
    player.salary = Math.max(2, Math.round(statPoints(player.template) / 20));
  });
  state.feed.unshift({
    title: `${state.year} stat baselines generated`,
    text: "Each player received a new season-long stat projection derived from the prior simulated year."
  });
}

function standings() {
  return [...state.teams].sort((a, b) => b.wins - a.wins || b.pointsFor - a.pointsFor);
}

function freeAgents() {
  return state.players
    .filter(player => !player.teamId)
    .sort((a, b) => projectedPoints(b) - projectedPoints(a));
}

function waive(playerId) {
  const player = state.players.find(item => item.id === playerId);
  if (!player || player.teamId !== "t0") return;
  player.teamId = null;
  state.teams[0].budget += Math.round(player.salary / 2);
  state.feed.unshift({ title: "Roster move", text: `You released ${player.name} to waivers.` });
  saveState();
  render();
}

function sign(playerId) {
  const player = state.players.find(item => item.id === playerId);
  const team = state.teams[0];
  if (!player || player.teamId || team.budget < player.salary) return;
  player.teamId = team.id;
  team.budget -= Math.ceil(player.salary);
  state.feed.unshift({ title: "Free agent signed", text: `You added ${player.name} for $${Math.ceil(player.salary)}.` });
  saveState();
  render();
}

function resetGame() {
  const profileName = state.profileName || getActiveProfileName();
  state = freshState();
  state.profileName = profileName;
  saveState();
  render();
}

function createNewProfile() {
  const existing = getProfiles();
  const profileName = window.prompt("Name this save", `League ${existing.length + 1}`);
  if (!profileName) return;
  setActiveProfileName(profileName);
  state = freshState();
  state.profileName = profileName;
  saveState();
  render();
}

function switchProfile(profileName) {
  setActiveProfileName(profileName);
  const saved = localStorage.getItem(profileStorageKey(profileName));
  state = saved ? migrateState(JSON.parse(saved)) : freshState();
  state.profileName = profileName;
  saveState();
  render();
}

function playerLine(player) {
  const stats = player.games ? player.seasonStats : player.template;
  if (player.pos === "QB") return `${stats.passYds} PYD, ${stats.passTd} PTD, ${stats.passInt} INT, ${stats.rushYds} RYD, ${stats.rushTd} RTD`;
  return `${stats.rec} REC, ${stats.recYds} REY, ${stats.recTd} RETD, ${stats.rushYds} RYD, ${stats.rushTd} RTD`;
}

function playerCard(player, action = "") {
  const initials = player.name.split(" ").map(part => part[0]).join("").slice(0, 3);
  const color = palette[Number(player.id.replace("p", "")) % palette.length];
  return `
    <div class="player-row">
      <div class="avatar" style="background:${color}">${initials}</div>
      <div class="player-name">
        <button class="player-link" data-player="${player.id}">${player.name}</button>
        <span class="muted">${player.pos} - ${player.nflTeam} - ADP ${Number(player.adp || 0).toFixed(1)} - Pick ${player.draftPick || "FA"} - ${player.points.toFixed(1)} pts</span>
      </div>
      <div class="row-action">${action}</div>
    </div>
  `;
}

function render() {
  const yourTeam = state.teams[0];
  document.getElementById("leagueMeta").textContent = `Year ${state.year} - Week ${state.week}`;
  document.getElementById("seasonStatus").textContent = `${state.phase} - ${state.scoring}`;
  document.getElementById("heroRecord").textContent = `${yourTeam.wins}-${yourTeam.losses}`;
  document.getElementById("heroProjection").textContent = projection("t0").toFixed(1);
  document.getElementById("heroCap").textContent = `$${Math.round(yourTeam.budget)}`;
  document.getElementById("viewTitle").textContent = {
    hub: "League Home",
    matchup: "Weekly Matchup",
    roster: "Roster",
    market: "Waivers",
    trade: "Trade Center",
    league: "League Office"
  }[currentView] || (currentView === "team" ? "Team" : "Player");

  renderHub();
  renderMatchup();
  renderRoster();
  renderMarket();
  renderTrade();
  renderLeague();
  renderPlayer();
  renderTeam();
  renderProfileControls();
  drawStadium();
}

function renderProfileControls() {
  const select = document.getElementById("profileSelect");
  if (!select) return;
  const profiles = getProfiles();
  const active = state.profileName || getActiveProfileName();
  select.innerHTML = profiles.map(profile => `<option value="${profile}" ${profile === active ? "selected" : ""}>${profile}</option>`).join("");
}

function renderHub() {
  const view = document.getElementById("hubView");
  const topPlayers = teamPlayers("t0").slice(0, 5);
  const pendingTrades = state.tradeOffers.filter(offer => offer.status === "pending" || offer.status === "accepted_waiting").length;
  const nextPair = matchupPairs().find(([home, away]) => home.id === "t0" || away.id === "t0");
  const opponent = nextPair[0].id === "t0" ? nextPair[1] : nextPair[0];
  const topFreeAgent = freeAgents()[0];
  view.innerHTML = `
    <div class="grid">
      <div class="panel span-12">
        <div class="section-head"><h2>Dashboard</h2><span class="tag">Week ${state.week}</span></div>
        <div class="quick-grid">
          <button class="quick-card" data-view="matchup"><span>Matchup</span><strong>${opponent.name}</strong><small>${projection("t0").toFixed(1)} vs ${projection(opponent.id).toFixed(1)}</small></button>
          <button class="quick-card" data-view="roster"><span>My Team</span><strong>${state.teams[0].wins}-${state.teams[0].losses}</strong><small>${teamPlayers("t0").length} rostered players</small></button>
          <button class="quick-card ${pendingTrades ? "urgent" : ""}" data-view="trade"><span>Trades</span><strong>${pendingTrades}</strong><small>pending or ready deals</small></button>
          <button class="quick-card" data-view="market"><span>Free Agency</span><strong>${topFreeAgent ? topFreeAgent.name : "None"}</strong><small>${topFreeAgent ? `${topFreeAgent.pos} - ${playerPpg(topFreeAgent).toFixed(1)} PPG` : "No players available"}</small></button>
        </div>
      </div>
      <div class="panel span-8">
        <div class="section-head"><h2>Team Snapshot</h2><span class="tag">Full PPR</span></div>
        <div class="metric-grid">
          <div class="metric"><span class="muted">Record</span><strong>${state.teams[0].wins}-${state.teams[0].losses}</strong></div>
          <div class="metric"><span class="muted">Projected PPR</span><strong>${projection("t0").toFixed(1)}</strong></div>
          <div class="metric"><span class="muted">Rank</span><strong>#${standings().findIndex(team => team.id === "t0") + 1}</strong></div>
        </div>
      </div>
      <div class="panel span-4">
        <div class="section-head"><h2>Next Opponent</h2></div>
        ${renderOpponent()}
      </div>
      <div class="panel span-7">
        <div class="section-head"><h2>Top Stat Producers</h2><button class="mini-btn" data-jump="roster">Manage</button></div>
        <div class="player-list">${topPlayers.map(player => playerCard(player)).join("")}</div>
      </div>
      <div class="panel span-5">
        <div class="section-head"><h2>Activity</h2></div>
        <div class="feed-list">${state.feed.slice(0, 6).map(item => `<div class="feed-row"><strong>${item.title}</strong><span class="muted">${item.text}</span></div>`).join("")}</div>
      </div>
      <div class="panel span-12">
        <div class="section-head"><h2>Startup Snake Draft</h2><span class="tag">Simulated ADP</span></div>
        ${draftLogTable(12)}
      </div>
    </div>
  `;
}

function draftLogTable(limit = 80) {
  const rows = (state.draftLog || []).slice(0, limit);
  return `
    <div class="stat-table-wrap">
      <table class="stat-table dense">
        <thead><tr><th>Pick</th><th>Round</th><th>Team</th><th>Player</th><th>ADP</th></tr></thead>
        <tbody>
          ${rows.map(pick => {
            const team = state.teams.find(item => item.id === pick.teamId);
            const player = state.players.find(item => item.id === pick.playerId);
            return `<tr><td>${pick.pick}</td><td>${pick.round}</td><td>${team?.name || ""}</td><td><button class="link-btn" data-player="${player?.id || ""}">${player?.name || ""}</button></td><td>${Number(pick.adp || player?.adp || 0).toFixed(1)}</td></tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderOpponent() {
  const pair = matchupPairs().find(([a, b]) => a.id === "t0" || b.id === "t0");
  const opponent = pair[0].id === "t0" ? pair[1] : pair[0];
  return `
    <div class="team-row">
      <div class="avatar" style="background:${opponent.color}">${opponent.name.slice(0, 2)}</div>
      <div><button class="player-link" data-team="${opponent.id}">${opponent.name}</button><span class="muted">${opponent.owner} - ${opponent.wins}-${opponent.losses}</span></div>
      <strong>${projection(opponent.id).toFixed(1)}</strong>
    </div>
  `;
}

function renderMatchup() {
  const view = document.getElementById("matchupView");
  const yourPair = matchupPairs().find(([home, away]) => home.id === "t0" || away.id === "t0");
  const yourTeam = state.teams[0];
  const opponent = yourPair[0].id === "t0" ? yourPair[1] : yourPair[0];
  const yourLineup = starters(yourTeam.id);
  const opponentLineup = starters(opponent.id);
  const matchupProjection = projection(yourTeam.id) - projection(opponent.id);
  const cards = matchupPairs().map(([home, away]) => `
    <div class="match-card">
      <div><button class="player-link" data-team="${home.id}">${home.name}</button><span class="muted">${home.wins}-${home.losses} - ${projection(home.id).toFixed(1)} PPR proj</span></div>
      <div class="score">vs</div>
      <div class="right"><button class="player-link" data-team="${away.id}">${away.name}</button><span class="muted">${away.wins}-${away.losses} - ${projection(away.id).toFixed(1)} PPR proj</span></div>
    </div>
  `).join("");
  const recent = state.results.slice(0, 8).map(game => `
    <div class="feed-row"><strong>${game.home} ${game.homeScore} - ${game.away} ${game.awayScore}</strong><span class="muted">Year ${game.year}, Week ${game.week}</span></div>
  `).join("") || `<div class="feed-row"><strong>No games yet</strong><span class="muted">Advance the week to create PPR stat lines.</span></div>`;
  view.innerHTML = `
    <div class="grid">
      <div class="panel span-12">
        <div class="section-head"><h2>Your Matchup</h2><span class="tag">Week ${state.week}</span></div>
        <div class="matchup-hero">
          <div>
            <span class="muted">${yourTeam.wins}-${yourTeam.losses}</span>
            <button class="team-title-btn" data-team="${yourTeam.id}">${yourTeam.name}</button>
            <b>${projection(yourTeam.id).toFixed(1)}</b>
          </div>
          <div class="matchup-spread ${matchupProjection >= 0 ? "positive" : "negative"}">${matchupProjection >= 0 ? "+" : ""}${matchupProjection.toFixed(1)}</div>
          <div class="right">
            <span class="muted">${opponent.wins}-${opponent.losses}</span>
            <button class="team-title-btn" data-team="${opponent.id}">${opponent.name}</button>
            <b>${projection(opponent.id).toFixed(1)}</b>
          </div>
        </div>
      </div>
      <div class="panel span-6">
        <div class="section-head"><h2>Your Lineup</h2><span class="tag">Projected</span></div>
        ${lineupTable(yourLineup)}
      </div>
      <div class="panel span-6">
        <div class="section-head"><h2>Opponent Lineup</h2><span class="tag">Projected</span></div>
        ${lineupTable(opponentLineup)}
      </div>
      <div class="panel span-7"><div class="section-head"><h2>League Schedule</h2><span class="tag">Current week</span></div><div class="match-list">${cards}</div></div>
      <div class="panel span-5"><div class="section-head"><h2>Recent Results</h2></div><div class="feed-list">${recent}</div></div>
    </div>
  `;
}

function lineupTable(players) {
  return `
    <div class="stat-table-wrap">
      <table class="stat-table">
        <thead><tr><th>Slot</th><th>Player</th><th>Avg</th><th>Proj</th></tr></thead>
        <tbody>
          ${players.map((player, index) => `
            <tr>
              <td>${LINEUP[index] || player.pos}</td>
              <td><button class="link-btn" data-player="${player.id}">${player.name}</button><span>${player.pos} - ${player.nflTeam}</span></td>
              <td>${player.games ? (player.points / player.games).toFixed(1) : (statPoints(player.template) / 17).toFixed(1)}</td>
              <td>${(projectedPoints(player) / Math.max(1, 15 - state.week)).toFixed(1)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderRoster() {
  const view = document.getElementById("rosterView");
  const players = rosterTab === "starters" ? starters("t0") : teamPlayers("t0");
  view.innerHTML = `
    <div class="panel">
      <div class="section-head"><h2>Gridiron Syndicate</h2><span class="tag">${LINEUP.join(" / ")}</span></div>
      <div class="tabs">
        <button class="tab-btn ${rosterTab === "starters" ? "active" : ""}" data-roster-tab="starters">Lineup</button>
        <button class="tab-btn ${rosterTab === "full" ? "active" : ""}" data-roster-tab="full">Full Roster</button>
      </div>
      <div class="player-list">
        ${players.map(player => playerCard(player, `<button class="danger-btn mini-btn" data-waive="${player.id}">Release</button>`)).join("")}
      </div>
    </div>
  `;
}

function renderMarket() {
  const view = document.getElementById("marketView");
  const available = freeAgents();
  view.innerHTML = `
    <div class="panel">
      <div class="section-head"><h2>Free Agency</h2><span class="tag">${available.length} available</span></div>
      <div class="player-list">
        ${available.slice(0, 40).map(player => {
          const canSign = state.teams[0].budget >= player.salary;
          return playerCard(player, `<button class="mini-btn" ${canSign ? `data-sign="${player.id}"` : "disabled"}>Claim $${Math.ceil(player.salary)}</button>`);
        }).join("")}
      </div>
    </div>
  `;
}

function renderTrade() {
  const view = document.getElementById("tradeView");
  const partner = state.teams.find(team => team.id === tradePartnerId) || state.teams.find(team => team.id !== "t0");
  tradePartnerId = partner.id;
  const yourRoster = teamPlayers("t0");
  const partnerRoster = teamPlayers(partner.id);
  const pending = state.tradeOffers.filter(offer => offer.status === "pending");
  const accepted = state.tradeOffers.filter(offer => offer.status === "accepted_waiting");
  const history = state.tradeOffers.filter(offer => offer.status === "declined" || offer.status === "completed").slice(0, 5);
  view.innerHTML = `
    <div class="grid">
      <div class="panel span-12">
        <div class="section-head">
          <h2>Trade Center</h2>
          <select class="select" id="tradePartnerSelect" aria-label="Trade partner">
            ${state.teams.filter(team => team.id !== "t0").map(team => `<option value="${team.id}" ${team.id === tradePartnerId ? "selected" : ""}>${team.name}</option>`).join("")}
          </select>
        </div>
        <div class="feed-row"><strong>Valuation Model</strong><span class="muted">Current PPG, injury concern, career PPG, age, and schedule drive value. Extra assets are discounted because roster spots matter.</span></div>
      </div>
      <div class="panel span-6">
        <div class="section-head"><h2>You Offer</h2><span class="tag">Your roster</span></div>
        ${tradeChecklist(yourRoster, "tradeGive")}
      </div>
      <div class="panel span-6">
        <div class="section-head"><h2>You Receive</h2><span class="tag">${partner.name}</span></div>
        ${tradeChecklist(partnerRoster, "tradeReceive")}
      </div>
      <div class="panel span-12">
        <div class="section-head">
          <h2>Offer Review</h2>
          <button class="ghost-btn" data-review-trade="1">Review Offer</button>
        </div>
        ${renderTradeReview()}
      </div>
      <div class="panel span-12">
        <div class="section-head"><h2>Accepted Deals</h2><span class="tag">${accepted.length} ready</span></div>
        <div class="feed-list">${accepted.length ? accepted.map(renderAcceptedDeal).join("") : `<div class="feed-row"><strong>No deals awaiting approval</strong><span class="muted">Accepted offers land here before any players move.</span></div>`}</div>
      </div>
      <div class="panel span-12">
        <div class="section-head"><h2>Incoming Offers</h2><span class="tag">${pending.length} pending</span></div>
        <div class="feed-list">${pending.length ? pending.map(renderOffer).join("") : `<div class="feed-row"><strong>No pending offers</strong><span class="muted">CPU managers can send offers after weeks advance.</span></div>`}</div>
      </div>
      <div class="panel span-12">
        <div class="section-head"><h2>Trade Log</h2><span class="tag">${history.length} recent</span></div>
        <div class="feed-list">${history.length ? history.map(renderTradeHistory).join("") : `<div class="feed-row"><strong>No completed or declined offers yet</strong><span class="muted">Your league activity appears here.</span></div>`}</div>
      </div>
    </div>
  `;
}

function renderTradeReview() {
  if (!tradeReview) {
    return `<div class="feed-row"><strong>Select assets first</strong><span class="muted">Pick players from each side, then review. Nothing is sent until you submit from this panel.</span></div>`;
  }
  const partner = state.teams.find(team => team.id === tradeReview.partnerId);
  const giving = tradeReview.giveIds.map(id => state.players.find(player => player.id === id)).filter(Boolean);
  const receiving = tradeReview.receiveIds.map(id => state.players.find(player => player.id === id)).filter(Boolean);
  const evaluation = evaluateTrade(giving, receiving);
  const interest = Math.max(0, Math.min(100, Math.round((evaluation.outgoing / Math.max(1, evaluation.incoming * 0.91)) * 100)));
  return `
    <div class="trade-review">
      <div>
        <strong>You send</strong>
        <span class="muted">${giving.map(player => player.name).join(", ")}</span>
      </div>
      <div>
        <strong>${partner.name} sends</strong>
        <span class="muted">${receiving.map(player => player.name).join(", ")}</span>
      </div>
      <div class="interest-meter"><span style="width:${interest}%"></span></div>
      <div class="section-head review-actions">
        <span class="tag">Interest ${interest}% - You $${evaluation.outgoing} / Them $${evaluation.incoming}</span>
        <button class="primary-btn" data-submit-reviewed-trade="1">Submit Offer</button>
      </div>
    </div>
  `;
}

function tradeChecklist(players, name) {
  return `
    <div class="trade-list">
      ${players.slice(0, 14).map(player => `
        <label class="trade-asset">
          <input type="checkbox" name="${name}" value="${player.id}">
          <span>
            <strong>${player.name}</strong>
            <small>${player.pos} - ${player.nflTeam} - ${playerPpg(player).toFixed(1)} PPG - $${tradeValue(player)}</small>
          </span>
        </label>
      `).join("")}
    </div>
  `;
}

function renderOffer(offer) {
  const fromTeam = state.teams.find(team => team.id === offer.fromTeamId);
  const giving = offer.giveIds.map(id => state.players.find(player => player.id === id)).filter(Boolean);
  const receiving = offer.receiveIds.map(id => state.players.find(player => player.id === id)).filter(Boolean);
  const evaluation = evaluateTrade(receiving, giving);
  return `
    <div class="feed-row offer-row">
      <strong>${fromTeam.name} offers ${giving.map(player => player.name).join(", ")}</strong>
      <span class="muted">For ${receiving.map(player => player.name).join(", ")} - You receive $${evaluation.incoming}, give $${evaluation.outgoing}</span>
      <div class="actions">
        <button class="primary-btn mini-btn" data-accept-offer="${offer.id}">Accept</button>
        <button class="danger-btn mini-btn" data-decline-offer="${offer.id}">Decline</button>
      </div>
    </div>
  `;
}

function renderAcceptedDeal(offer) {
  const fromTeam = state.teams.find(team => team.id === offer.fromTeamId);
  const toTeam = state.teams.find(team => team.id === offer.toTeamId);
  const giving = offer.giveIds.map(id => state.players.find(player => player.id === id)).filter(Boolean);
  const receiving = offer.receiveIds.map(id => state.players.find(player => player.id === id)).filter(Boolean);
  return `
    <div class="feed-row offer-row">
      <strong>${fromTeam.name} and ${toTeam.name} have an agreement</strong>
      <span class="muted">${fromTeam.name} sends ${giving.map(player => player.name).join(", ")}. ${toTeam.name} sends ${receiving.map(player => player.name).join(", ")}.</span>
      <div class="actions">
        <button class="primary-btn mini-btn" data-finalize-offer="${offer.id}">Accept Deal</button>
      </div>
    </div>
  `;
}

function renderTradeHistory(offer) {
  const fromTeam = state.teams.find(team => team.id === offer.fromTeamId);
  const toTeam = state.teams.find(team => team.id === offer.toTeamId);
  return `<div class="feed-row"><strong>${offer.status === "completed" ? "Completed" : "Declined"} trade</strong><span class="muted">${fromTeam?.name || "Team"} and ${toTeam?.name || "Team"} - Week ${offer.week}, ${offer.year}</span></div>`;
}

function renderLeague() {
  const view = document.getElementById("leagueView");
  view.innerHTML = `
    <div class="grid">
      <div class="panel span-7">
        <div class="section-head"><h2>Standings</h2><span class="tag">Year ${state.year}</span></div>
        <div class="team-list">
          ${standings().map((team, index) => `
            <div class="team-row">
              <div class="rank">${index + 1}</div>
              <div><button class="player-link" data-team="${team.id}">${team.name}</button><span class="muted">${team.owner}</span></div>
              <strong>${team.wins}-${team.losses}</strong>
              <span class="muted hide-mobile">${team.pointsFor.toFixed(1)} PF / ${team.pointsAgainst.toFixed(1)} PA</span>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="panel span-5">
        <div class="section-head"><h2>Scoring</h2></div>
        <div class="feed-list">
          <div class="feed-row"><strong>Full PPR</strong><span class="muted">1 per reception, 0.1 per rushing/receiving yard, 6 per rushing/receiving TD.</span></div>
          <div class="feed-row"><strong>Passing</strong><span class="muted">0.04 per passing yard, 4 per passing TD, -2 per interception.</span></div>
          <div class="feed-row"><strong>Source Shape</strong><span class="muted">Seed columns mirror Pro Football Reference fantasy tables; live scraping is blocked by Cloudflare.</span></div>
        </div>
      </div>
      <div class="panel span-12">
        <div class="section-head"><h2>Draft Board</h2><span class="tag">Snake draft</span></div>
        ${draftLogTable(80)}
      </div>
    </div>
  `;
}

function renderTeam() {
  const view = document.getElementById("teamView");
  const team = state.teams.find(item => item.id === selectedTeamId) || state.teams[0];
  const roster = teamPlayers(team.id);
  const lineup = starters(team.id);
  const games = Math.max(1, team.wins + team.losses);
  view.innerHTML = `
    <div class="grid">
      <div class="panel span-12">
        <div class="section-head">
          <div>
            <h2>${team.name}</h2>
            <span class="muted">${team.owner} - ${team.wins}-${team.losses}</span>
          </div>
          <button class="ghost-btn" data-back-view="league">Back</button>
        </div>
        <div class="metric-grid">
          <div class="metric"><span class="muted">Points For</span><strong>${team.pointsFor.toFixed(1)}</strong></div>
          <div class="metric"><span class="muted">Points Against</span><strong>${team.pointsAgainst.toFixed(1)}</strong></div>
          <div class="metric"><span class="muted">PF / Game</span><strong>${(team.pointsFor / games).toFixed(1)}</strong></div>
        </div>
        <div class="metric-grid player-context">
          <div class="metric"><span class="muted">PA / Game</span><strong>${(team.pointsAgainst / games).toFixed(1)}</strong></div>
          <div class="metric"><span class="muted">Projected</span><strong>${projection(team.id).toFixed(1)}</strong></div>
          <div class="metric"><span class="muted">Roster Value</span><strong>$${packageValue(roster).toFixed(1)}</strong></div>
        </div>
      </div>
      <div class="panel span-6">
        <div class="section-head"><h2>Lineup</h2><span class="tag">${projection(team.id).toFixed(1)} proj</span></div>
        ${lineupTable(lineup)}
      </div>
      <div class="panel span-6">
        <div class="section-head"><h2>Roster</h2><span class="tag">${roster.length} players</span></div>
        <div class="player-list">${roster.map(player => playerCard(player)).join("")}</div>
      </div>
    </div>
  `;
}

function availablePlayerSeasons(player) {
  const simulated = Object.keys(player.archives || {}).sort((a, b) => Number(b) - Number(a));
  const real = Object.keys(player.realStats || {}).sort((a, b) => Number(b) - Number(a)).map(year => `real-${year}`);
  return ["current", ...simulated, ...real];
}

function seasonLabel(season) {
  if (season === "current") return `${state.year} simulated`;
  if (season.startsWith("real-")) return `${season.replace("real-", "")} real`;
  return `${season} simulated`;
}

function playerSeasonData(player, season) {
  if (season === "current") {
    return {
      kind: "simulated",
      stats: player.seasonStats,
      points: player.points,
      games: player.games,
      average: player.games ? player.points / player.games : 0,
      logs: player.gameLogs || [],
      source: "Dynasty Drive simulation"
    };
  }
  if (season.startsWith("real-")) {
    const realYear = season.replace("real-", "");
    const real = player.realStats?.[realYear] || { stats: blankStats(), points: 0, source: player.source };
    return {
      kind: "real",
      stats: real.stats,
      points: real.points,
      games: 17,
      average: real.points / 17,
      logs: [],
      source: real.source
    };
  }
  return player.archives?.[season] || {
    kind: "simulated",
    stats: blankStats(),
    points: 0,
    games: 0,
    average: 0,
    logs: [],
    source: "Archived simulation"
  };
}

function renderPlayer() {
  const view = document.getElementById("playerView");
  if (!selectedPlayerId) {
    view.innerHTML = "";
    return;
  }
  const player = state.players.find(item => item.id === selectedPlayerId);
  if (!player) {
    view.innerHTML = `<div class="panel"><h2>Player not found</h2></div>`;
    return;
  }
  const seasons = availablePlayerSeasons(player);
  if (!seasons.includes(selectedPlayerSeason)) selectedPlayerSeason = "current";
  const season = playerSeasonData(player, selectedPlayerSeason);
  const stats = { ...blankStats(), ...(season.stats || {}) };
  const logs = season.logs || [];
  view.innerHTML = `
    <div class="grid">
      <div class="panel span-12">
        <div class="section-head">
          <div>
            <h2>${player.name}</h2>
            <span class="muted">${player.pos} - ${player.nflTeam} - ${player.source}</span>
          </div>
          <div class="actions">
            <select class="select" id="playerSeasonSelect" aria-label="Player season">
              ${seasons.map(item => `<option value="${item}" ${item === selectedPlayerSeason ? "selected" : ""}>${seasonLabel(item)}</option>`).join("")}
            </select>
            <button class="ghost-btn" data-back-view="roster">Back</button>
          </div>
        </div>
        <div class="metric-grid">
          <div class="metric"><span class="muted">Fantasy Points</span><strong>${Number(season.points || 0).toFixed(1)}</strong></div>
          <div class="metric"><span class="muted">Games</span><strong>${season.games || 0}</strong></div>
          <div class="metric"><span class="muted">Average</span><strong>${Number(season.average || 0).toFixed(1)}</strong></div>
        </div>
        <div class="metric-grid player-context">
          <div class="metric"><span class="muted">Age</span><strong>${player.age}</strong></div>
          <div class="metric"><span class="muted">Injury Concern</span><strong>${Math.round(player.injuryConcern * 100)}%</strong></div>
          <div class="metric"><span class="muted">Trade Value</span><strong>$${tradeValue(player)}</strong></div>
        </div>
      </div>
      <div class="panel span-5">
        <div class="section-head"><h2>Season Stats</h2><span class="tag">${season.kind || "simulated"}</span></div>
        ${statSummaryTable(stats)}
        <div class="feed-row source-note"><strong>Data Source</strong><span class="muted">${season.source || player.source}</span></div>
      </div>
      <div class="panel span-7">
        <div class="section-head"><h2>Game Log</h2><span class="tag">${logs.length} games</span></div>
        ${gameLogTable(logs)}
      </div>
    </div>
  `;
}

function statSummaryTable(stats) {
  return `
    <div class="stat-table-wrap">
      <table class="stat-table">
        <tbody>
          <tr><th>Passing</th><td>${stats.passYds} yd, ${stats.passTd} TD, ${stats.passInt} INT</td></tr>
          <tr><th>Rushing</th><td>${stats.rushYds} yd, ${stats.rushTd} TD</td></tr>
          <tr><th>Receiving</th><td>${stats.rec} rec, ${stats.recYds} yd, ${stats.recTd} TD</td></tr>
          <tr><th>Fumbles Lost</th><td>${stats.fumLost}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function gameLogTable(logs) {
  if (!logs.length) {
    return `<div class="feed-row"><strong>No game log</strong><span class="muted">Real source-season rows are season totals only. Simulated weeks appear here after games are advanced.</span></div>`;
  }
  return `
    <div class="stat-table-wrap">
      <table class="stat-table dense">
        <thead><tr><th>Wk</th><th>Opp</th><th>Pass</th><th>Rush</th><th>Rec</th><th>Pts</th></tr></thead>
        <tbody>
          ${logs.map(log => {
            const stats = { ...blankStats(), ...(log.stats || {}) };
            return `<tr>
              <td>${log.week}</td>
              <td>${log.opponent || ""}</td>
              <td>${stats.passYds}/${stats.passTd}/${stats.passInt}</td>
              <td>${stats.rushYds}/${stats.rushTd}</td>
              <td>${stats.rec}/${stats.recYds}/${stats.recTd}</td>
              <td>${Number(log.points || 0).toFixed(1)}</td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function setView(view) {
  currentView = view;
  document.querySelectorAll(".view").forEach(item => item.classList.remove("active"));
  document.getElementById(`${view}View`).classList.add("active");
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.view === view);
  });
  render();
}

function drawStadium() {
  const canvas = document.getElementById("stadiumCanvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, "#05080a");
  sky.addColorStop(0.55, "#112226");
  sky.addColorStop(1, "#070a0b");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#1f8f52";
  ctx.fillRect(240, 205, 720, 150);
  ctx.strokeStyle = "rgba(255,255,255,0.55)";
  ctx.lineWidth = 3;
  ctx.strokeRect(240, 205, 720, 150);
  for (let x = 300; x <= 900; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, 205);
    ctx.lineTo(x, 355);
    ctx.stroke();
  }
  ctx.fillStyle = "rgba(10,15,17,0.88)";
  ctx.fillRect(0, 300, w, 120);
  ctx.fillStyle = "#12191b";
  ctx.fillRect(305, 320, 590, 46);
  ctx.strokeStyle = "#23c36b";
  ctx.strokeRect(305, 320, 590, 46);
}

document.addEventListener("click", event => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.view) setView(target.dataset.view);
  if (target.dataset.jump) setView(target.dataset.jump);
  if (target.dataset.rosterTab) {
    rosterTab = target.dataset.rosterTab;
    render();
  }
  if (target.dataset.player) {
    selectedPlayerId = target.dataset.player;
    selectedPlayerSeason = "current";
    setView("player");
  }
  if (target.dataset.team) {
    selectedTeamId = target.dataset.team;
    setView("team");
  }
  if (target.dataset.backView) setView(target.dataset.backView);
  if (target.dataset.reviewTrade) reviewTradeOffer();
  if (target.dataset.submitReviewedTrade) submitReviewedTrade();
  if (target.dataset.finalizeOffer) finalizeAcceptedDeal(target.dataset.finalizeOffer);
  if (target.dataset.acceptOffer) respondToOffer(target.dataset.acceptOffer, true);
  if (target.dataset.declineOffer) respondToOffer(target.dataset.declineOffer, false);
  if (target.dataset.waive) waive(target.dataset.waive);
  if (target.dataset.sign) sign(target.dataset.sign);
});

document.addEventListener("change", event => {
  if (event.target.id === "playerSeasonSelect") {
    selectedPlayerSeason = event.target.value;
    render();
  }
  if (event.target.id === "tradePartnerSelect") {
    tradePartnerId = event.target.value;
    render();
  }
  if (event.target.id === "profileSelect") {
    switchProfile(event.target.value);
  }
});

document.getElementById("advanceBtn").addEventListener("click", advanceWeek);
document.getElementById("resetBtn").addEventListener("click", resetGame);
document.getElementById("newProfileBtn").addEventListener("click", createNewProfile);

setView("hub");
