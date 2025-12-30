
// =========================
// 角色資料（全數字）
// =========================
const CHARACTERS = [
  {
    id:"kagami",
    name:"火神大我",
    stats:{ two:73, three:47, drive:92, defense:75, clutch:83, jump:95 },
    skill:{
      name:"急停灌籃",
      type:"DUNK",
      desc:"本回合若為突破進攻，將直接觸發扣籃；命中仍依突破機制計算，並獲得小幅基礎命中率加成。",
      canUseOn:["OFFENSE"]
    }
  },
  {
    id:"itsuki",
    name:"伊月俊",
    stats:{ two: 70, three: 61, drive: 67, defense: 72, clutch: 80, jump: 60 },
    skill:{
      name:"鷲之眼",
      type:"DEFENSE",
      desc:"使用技能時，有機率看穿對手的進攻；即使原本未守對，也會被視為守對，並正常進入干擾與火鍋判定流程。",
      canUseOn:["DEFENSE"]
    }
  },
  {
    id:"hyuga",
    name:"日向順平",
    stats:{ two: 66, three: 82, drive: 56, defense: 63, clutch: 86, jump: 62 },
    skill:{
      name:"關鍵射手",
      type:"BUFF",
      desc:"使用技能時，三分出手獲得中幅命中率加成；若比分接近或處於落後狀態，提升效果將進一步加強。",
      canUseOn:["OFFENSE"]
    }
  },
  {
    id:"mitobe",
    name:"水戶部凜之助",
    stats:{ two: 84, three: 37, drive: 63, defense: 84, clutch: 64, jump: 78 },
    skill:{
      name:"鉤射",
      type:"OFFENSE",
      desc:"使用技能進行鉤射進攻（突破或中投情境）；獲得中幅命中率加成，並大幅降低被火鍋影響的機率。",
      canUseOn:["OFFENSE"]
    }
  },
  {
    id:"kiyoshi",
    name:"木吉鐵平",
    stats:{ two:76, three:36, drive:76, defense:86, clutch:63, jump:73 },
    skill:{
      name:"鉗爪",
      type:"BUFF_DEFENSE",
      desc:"進攻：若本回合為突破或中投，最終命中率獲得中幅提升。防守：對手最終命中率中幅下降；若守對則額外下降；若進入火鍋判定，火鍋成功率獲得中幅提升。",
      canUseOn:["OFFENSE","DEFENSE"]
    }
  },
  {
    id:"aomine",
    name:"青峰大輝",
    stats:{ two:95, three:55, drive:89, defense:77, clutch:86, jump:88 },
    skill:{
      name:"無定式投籃",
      type:"BUFF",
      desc:"本回合大幅降低對手干擾效果；若對手守錯，干擾效果將被進一步削弱。若本回合選擇中投，最終命中率額外獲得小幅提升。",
      canUseOn:["OFFENSE"]
    }
  },
  {
    id:"murasakibara",
    name:"紫原敦",
    nameShort:"紫原",
    stats:{ two:81, three:39, drive:86, defense:95, clutch:84, jump:95 },
    skill:{
      name:"禁區支配",
      type:"DEFENSE",
      desc:"防守回合若守對，將依對手出手距離提升火鍋成功率：近距離提升幅度最大，中距離次之，遠距離提升最小。",
      canUseOn:["DEFENSE"]
    }
  },
  {
    id:"midorima",
    name:"綠間真太郎",
    nameShort:"綠間",
    stats:{ two:82, three:95, drive:63, defense:80, clutch:85, jump:75 },
    skill:{
      name:"高彈道三分",
      type:"FORCED_3PT",
      desc:"本回合三分必進；但仍可能被火鍋蓋掉。冷卻時間固定較長。",
      canUseOn:["OFFENSE"]
    }
  },
  {
    id:"akashi",
    name:"赤司征十郎",
    nameShort:"赤司",
    stats:{ two:87, three:70, drive:75, defense:75, clutch:95, jump:78 },
    skill:{
      name:"不敗帝王",
      type:"BUFF_DEFENSE",
      desc:"進攻：本回合所有出手的最終命中率獲得中幅提升。防守：本回合全面壓制對手最終命中率；若守對則額外壓制；若進入火鍋判定，火鍋成功率獲得小幅提升。",
      canUseOn:["OFFENSE","DEFENSE"]
    }
  },
  {
    id:"kise",
    name:"黃瀨涼太",
    nameShort:"黃瀨",
    stats:{ two:84, three:70, drive:80, defense:78, clutch:84, jump:84 },
    skill:{
      name:"動作模仿",
      type:"BUFF",
      desc:"若本回合出手類型與對手上一回合相同，基礎命中率獲得中幅提升；若為突破，扣籃觸發率額外小幅提升。若本回合得分成功，下一次進攻獲得小幅士氣加成（不可疊加）。",
      canUseOn:["OFFENSE"]
    }
  },
  {
    id:"kasamatsu",
    name:"笠松幸男",
    stats:{ two:70, three:78, drive:64, defense:70, clutch:83, jump:50 },
    skill:{
      name:"隊長的節奏",
      type:"BUFF",
      desc:"本回合最終命中率獲得中幅提升；若比分落後或分差接近，提升效果將進一步加強。",
      canUseOn:["OFFENSE"]
    }
  },
  {
    id:"moriyama",
    name:"森山由孝",
    nameShort:"森山",
    stats:{ two:72, three:80, drive:50, defense:65, clutch:78, jump:65 },
    skill:{
      name:"定點狙擊",
      type:"BUFF",
      desc:"本回合若選擇三分，基礎命中率獲得中幅提升；若處於關鍵時刻，提升效果將再度加強。",
      canUseOn:["OFFENSE"]
    }
  },
  {
    id:"hayakawa",
    name:"早川充洋",
    nameShort:"早川",
    stats:{ two:73, three:40, drive:65, defense:80, clutch:70, jump:82 },
    skill:{
      name:"拼搶壓迫",
      type:"DEFENSE",
      desc:"防守時若判斷正確，將大幅提升壓迫強度，並顯著提高火鍋威脅。",
      canUseOn:["DEFENSE"]
    }
  },
  {
    id:"kobori",
    name:"小堀浩志",
    nameShort:"小堀",
    stats:{ two:78, three:32, drive:66, defense:84, clutch:74, jump:76 },
    skill:{
      name:"禁區基礎",
      type:"BUFF_DEFENSE",
      desc:"進攻時若選擇突破或中投，提升得分穩定性並降低被火鍋影響。防守時若判斷正確，提升禁區威懾與火鍋成功率。",
      canUseOn:["OFFENSE","DEFENSE"]
    }
   }

  
];
window.CHARACTERS = CHARACTERS;
// =========================
// 基礎規則
// =========================
const TARGET_SCORE = 11;
const BASE_CHANCE = { DRIVE:60, MID:50, THREE:40 };
const PER_POINT = 0.4; // 能力差 -> 命中%
const RPS = { BIG_WIN:20, WIN:10, LOSE:-10, BIG_LOSE:-20 };
const CLAMP_MIN = 1, CLAMP_MAX = 99;
const HIT_VARIANCE = { low: 3, high: 7 }; // 命中率隨機浮動（百分比）

const SHOTS = ["DRIVE","MID","THREE"];
const SHOT_NAME = { DRIVE:"突破", MID:"中距", THREE:"三分" };

const SHOT_CLOCK = 24;

// =========================
// 狀態
// =========================
let playerChar = null;
let aiChar = null;

let pScore = 0, aScore = 0;
let possession = "P"; // P玩家進攻, A電腦進攻
let turnNo = 1;

let battleLog = [];
let turnCount = 0;

let lastPShot = null;
let lastAShot = null;

let pMomentum = false; // 下一次進攻 +5%
let aMomentum = false;

let pSkillCD = 0;
let aSkillCD = 0;

let timer = null;
let clockLeft = SHOT_CLOCK;
let awaitingChoice = false;

let pendingSkillUse = false;
let aiPendingSkillUse = false;

// =========================
// Match State（給回放/排位/引擎用）
// =========================
let matchState = null;

function createMatchState() {
  return {
    turnNo: 1,
    turnCount: 0,
    score: { P: 0, E: 0 },
    lastShot: { P: null, E: null },
    momentum: { P: false, E: false },
    pendingSkill: { P: false, E: false },
    events: [] // 回放事件流
  };
}

// 統一陣營代號：你對戰流程用 P/A，但賽後數據用 P/E
function normSide(x) {
  return x === "A" ? "E" : x; // A(電腦) -> E(enemy)
}

// 安全記錄事件（不存在也不會炸）
function recordEvent(state, type, payload) {
  if (!state) return;

  // 深拷貝避免後續物件被改到
  const data = JSON.parse(JSON.stringify(payload ?? {}));

  // 若事件內有 offense/defense，順便正規化成 P/E
  if (data.offense) data.offense = normSide(data.offense);
  if (data.defense) data.defense = normSide(data.defense);

  state.events.push({
    t: Date.now(),
    type,
    data
  });
}

// =========================
// DOM
// =========================
const $ = (id)=>document.getElementById(id);
const logEl = $("log");

function logLine(html){
  const div = document.createElement("div");
  div.innerHTML = html;
  logEl.appendChild(div);
  logEl.scrollTop = logEl.scrollHeight;
}

function setStatus(text){ $("status").textContent = text; }

// =========================
// 工具
// =========================
function clamp(x, lo, hi){ return Math.max(lo, Math.min(hi, x)); }
function randInt(n){ return Math.floor(Math.random()*n); }
function randChoice(arr){ return arr[randInt(arr.length)]; }
function pct1(x){ return `${x.toFixed(1)}%`; }
//關鍵
function clutchBonus(clutchStat){
  // 你的原始公式
  return (clutchStat - 60) * 0.4;
}

// 扣籃/火鍋觸發率
function dunkTriggerFromJump(j){
  if (j >= 90) return 42 + (j - 90) * 1.0;   
  if (j >= 70) return 28 + (j - 70) * 0.9;   
  return 12 + j * 0.25;                      
}

function blockTriggerFromJump(j){
  if (j >= 90) return 38 + (j - 90) * 0.9;   // 90→40%, 99→48.1%
  if (j >= 70) return 24 + (j - 70) * 0.8;   // 70→24%, 89→39.2%
  return 10 + j * 0.20;                      // 0→10%, 69→23.8%
}

// 火鍋成功率基礎：jump + defense
function blockSuccessBase(defJump, defDef){
  const v = 20 + (defJump*0.25 + defDef*0.25);
  return clamp(v, 1, 99);
}

// 一般干擾率（不含技能、火鍋失敗加重）
function baseInterference(defDef, guessedRight){
  const v = guessedRight ? defDef*0.18 : defDef*0.10;
  return clamp(v, 0, guessedRight ? 25 : 15);
}

// 火鍋失敗時的額外干擾（更大）
function interferenceOnBlockFail(defDef, defJump){
  const v = defDef*0.25 + defJump*0.10;
  return clamp(v, 0, 35);
}

// 猜拳幅度：用能力差決定大/小
function rpsAdjust(offStat, defStat, guessedRight){
  const diff = offStat - defStat;
  const big = Math.abs(diff) >= 15;
  if (guessedRight){
    return big && diff <= -15 ? RPS.BIG_LOSE : RPS.LOSE;
  } else {
    return big && diff >= 15 ? RPS.BIG_WIN : RPS.WIN;
  }
}
//隨機浮動值
function applyHitVariance(chance, context = {}) {
  const {
    isClutch = false,
    isSkillUsed = false,
    shotType = null
  } = context;

  let variance = HIT_VARIANCE.high;

  // 關鍵時刻 → 更穩
  if (isClutch) variance -= 2;

  // 開技能 → 更穩
  if (isSkillUsed) variance -= 1;

  // 三分本來更飄
  if (shotType === "THREE") variance += 1;

  variance = Math.max(1, variance);

  const delta = (Math.random() * 2 - 1) * variance; // -variance ~ +variance
  return chance + delta;
}

// =========================
// 技能冷卻規則（統一版）
// 優先順序：角色覆寫 > 技能type > default
// =========================
const COOLDOWN_DEFAULT = 3;

// 角色專屬覆寫：只要有定義，就優先採用
// pointsScored：本回合進攻得分（0/2/3）
// ctx 可擴充（例如 offenseShot、guessedRight、made 等）
const COOLDOWN_OVERRIDES = {
  // 綠間：固定 4（你也可以不用寫在這裡，交給 type = FORCED_3PT）
  // midorima: () => 4,

  // 青峰：固定 3
  aomine: () => 3,

  // 黃瀨：固定 4
  kise: () => 4,

  // 赤司：你原本想要依 3 分變 4，否則 3
  //（如果你之後改成 2/3 也只改這裡）
  akashi: (pointsScored) => (pointsScored === 3 ? 4 : 3),

  // 紫原：固定 3（若你之後想改 4，也只改這裡）
  murasakibara: () => 3,
};

// 技能 type 對應的基礎冷卻
const COOLDOWN_BY_TYPE = {
  FORCED_3PT: () => 4,            // 綠間
  DUNK: () => 3,                  // 灌籃類（火神等）
  DEFENSE: () => 3,               // 防守類（伊月、紫原等，若你統一）
  BUFF_DEFENSE: () => 3,          // 複合buff（木吉等）
  BUFF: (pointsScored) => (pointsScored === 3 ? 4 : 2), // 其他 BUFF：3分偏長
};

// 主函式：回傳本次使用技能後應該設定的冷卻
function calcCooldownAfterUse(char, pointsScored, ctx = {}) {
  if (!char || !char.skill) return COOLDOWN_DEFAULT;

  const id = char.id;
  const type = char.skill.type;

  // 1) 角色覆寫（最高優先）
  const overrideFn = COOLDOWN_OVERRIDES[id];
  if (overrideFn) return overrideFn(pointsScored, ctx);

  // 2) type 規則（次優先）
  const typeFn = COOLDOWN_BY_TYPE[type];
  if (typeFn) return typeFn(pointsScored, ctx);

  // 3) default
  return COOLDOWN_DEFAULT;
}


// =========================
// UI
// =========================
function updateHeader(){
  $("turnNo").textContent = turnNo;
  $("possession").textContent = (possession==="P") ? "玩家進攻" : "電腦進攻";
  $("clock").textContent = clockLeft;
}
function updateScoreUI(){
  $("pScore").textContent = pScore;
  $("aScore").textContent = aScore;
  $("playerName").textContent = playerChar ? playerChar.name : "未選角";
  $("aiName").textContent = aiChar ? aiChar.name : "未選角";
  $("pMomentum").textContent = pMomentum ? "有" : "無";
  $("aMomentum").textContent = aMomentum ? "有" : "無";
  $("pCD").textContent = pSkillCD;
  $("aCD").textContent = aSkillCD;
}
function enableActionButtons(enabled){
  $("btnDrive").disabled = !enabled;
  $("btnMid").disabled = !enabled;
  $("btnThree").disabled = !enabled;
}

function canPlayerUseSkill(){
  if (!playerChar || !playerChar.skill) return false;
  if (pSkillCD > 0) return false;
  if (!awaitingChoice) return false;

  if (possession==="P"){
    return playerChar.skill.canUseOn.includes("OFFENSE");
  } else {
    return playerChar.skill.canUseOn.includes("DEFENSE");
  }
}
function updateSkillButton(){
  const btn = $("btnSkill");
  if (!playerChar){
    btn.disabled = true;
    btn.textContent = "使用技能";
    return;
  }
  const ok = canPlayerUseSkill();
  btn.disabled = !ok;
  btn.textContent = `技能：${playerChar.skill.name}${(pSkillCD>0)?`（CD ${pSkillCD}）`:""}`;
}

// =========================
// 選角/開始
// =========================
function fillSelectors(){
  const pSel = $("playerSelect");
  const aSel = $("aiSelect");
  pSel.innerHTML = "";
  aSel.innerHTML = "";

  // ✅ 新增：隨機角色
  const rp = document.createElement("option");
  rp.value = "__RANDOM__";
  rp.textContent = "隨機角色";
  pSel.appendChild(rp);

  const ra = document.createElement("option");
  ra.value = "__RANDOM__";
  ra.textContent = "隨機角色";
  aSel.appendChild(ra);

  // 原本角色列表
  for (const c of CHARACTERS){
    const o1 = document.createElement("option");
    o1.value = c.id; o1.textContent = c.name;
    pSel.appendChild(o1);

    const o2 = document.createElement("option");
    o2.value = c.id; o2.textContent = c.name;
    aSel.appendChild(o2);
  }

  // 預設你要不要改都行：我這裡讓玩家預設火神、AI 預設青峰
  pSel.value = "__RANDOM__";
  aSel.value = "__RANDOM__";
}
function getCharById(id){ return CHARACTERS.find(c=>c.id===id); }

function resetForNewGame(){
  pScore = 0; aScore = 0;
  possession = "P";
  turnNo = 1;

  lastPShot = null; lastAShot = null;
  pMomentum = false; aMomentum = false;

  pSkillCD = 0; aSkillCD = 0;
  pendingSkillUse = false;
  aiPendingSkillUse = false;

  stopClock();
  clockLeft = SHOT_CLOCK;

  awaitingChoice = true;

  updateHeader();
  updateScoreUI();
  logEl.innerHTML = "";
}

function startGame() {
  resetPostStats();
  // ===== 以下保持你原本的 startGame 內容 =====
let pPick = $("playerSelect").value;
let aPick = $("aiSelect").value;

if (pPick === "__RANDOM__") pPick = randChoice(CHARACTERS).id;
if (aPick === "__RANDOM__") aPick = randChoice(CHARACTERS).id;

// ✅ 避免雙方抽到同一隻（更刺激也更像「不知道對誰」）
if (pPick === aPick) {
  const pool = CHARACTERS.filter(c => c.id !== pPick);
  aPick = randChoice(pool).id;
}

playerChar = getCharById(pPick);
aiChar = getCharById(aPick);
  // ✅ 賽後數據：存本場對戰角色名稱（給賽後畫面用）
postStats.P.name = playerChar?.name || "玩家";
postStats.E.name = aiChar?.name || "對手";
  battleLog = [];
  turnCount = 0;
  
  matchState = createMatchState();
  recordEvent(matchState, "match_start", {
  player: { id: playerChar.id, name: playerChar.name },
  enemy:  { id: aiChar.id, name: aiChar.name },
  targetScore: TARGET_SCORE
  });

  resetForNewGame();
  setStatus("比賽開始！玩家先攻。每回合 24 秒超時會自動隨機出招。");
  logLine(`<div><b>開局：</b>玩家【${playerChar.name}】 vs 電腦【${aiChar.name}】（11分制）</div>`);

  prepareTurn();
}

function restartToSelect(){
  stopClock();
  awaitingChoice=false;
  enableActionButtons(false);
  $("btnSkill").disabled=true;
  setStatus("已回到選角。選好後按「開始比賽」。");
}

// =========================
// 24秒計時
// =========================
function stopClock(){
  if (timer){ clearInterval(timer); timer=null; }
}

function startClock(){
  stopClock();
  clockLeft = SHOT_CLOCK;
  updateHeader();
  timer = setInterval(()=>{
    if (!awaitingChoice) return;
    clockLeft--;
    if (clockLeft <= 0){
      clockLeft = 0;
      updateHeader();
      autoTimeoutPick();
      return;
    }
    updateHeader();
  }, 1000);
}

function autoTimeoutPick(){
  stopClock();
  const pick = randChoice(SHOTS);
  logLine(`<div style="opacity:.75">⏱️ 超時，自動隨機：${SHOT_NAME[pick]}</div>`);
  onPlayerPick(pick, true);
}

// =========================
// AI（偏好＋隨機）
// =========================
function aiChooseDefenseAgainst(shot){
  const def = aiChar?.stats?.defense ?? 70;
  // 防守越高越容易守對：大概落在 0.45 ~ 0.70
  const pCorrect = clamp(0.45 + def / 200, 0.45, 0.70);

  if (Math.random() < pCorrect) return shot;
  return randChoice(SHOTS.filter(s=>s!==shot));
}

function aiChooseOffense(){
  const s = aiChar.stats;
  const driveVal = s.drive;
  const midVal = s.two;
  const threeVal = s.three;
  const sum = driveVal + midVal + threeVal;
  let r = Math.random()*sum;
  if ((r -= driveVal) < 0) return "DRIVE";
  if ((r -= midVal) < 0) return "MID";
  return "THREE";
}

function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

function aiDecideUseSkill(phase, planned){
  // 冷卻中就不用
  if (aSkillCD > 0) return false;

  // 沒技能就不用
  if (!aiChar || !aiChar.skill) return false;

  // 這個階段能不能用（依你角色資料 skill.canUseOn）
  const canUse = Array.isArray(aiChar.skill.canUseOn) ? aiChar.skill.canUseOn : [];
  if (!canUse.includes(phase)) return false;

  // === 比分情境（通用，不用你額外填資料）===
  const isClutch = (pScore >= TARGET_SCORE - 2) || (aScore >= TARGET_SCORE - 2);
  const isBehind = (aScore < pScore); // AI 是否落後

  // === 基礎使用率：防守稍高於進攻（符合你系統「守對/火鍋」很重要）===
  let p = (phase === "DEFENSE") ? 0.38 : 0.28;

  // === 技能類型微調（通用，不依賴角色 id）===
  const t = (aiChar.skill.type || "").toUpperCase();

  // 防守型技能更常在防守開
  if (t.includes("DEFENSE")) p += (phase === "DEFENSE" ? 0.14 : 0.04);

  // BUFF 類技能稍常用
  if (t.includes("BUFF")) p += 0.06;

  // DUNK 類只在突破時更常用，其他出手就少用（避免亂開）
  if (t.includes("DUNK")) {
    p += (phase === "OFFENSE" && planned === "DRIVE") ? 0.10 : -0.20;
  }

  // 綠間的 FORCED_3PT：只在三分時強烈想用
  if (t.includes("FORCED_3PT") || t.includes("FORCED")) {
    p += (phase === "OFFENSE" && planned === "THREE") ? 0.28 : -0.30;
  }

  // === 依能力值推導「這球適不適合開」===
  // planned 對應能力高 → 更想開；能力太低 → 少開
  const s = aiChar.stats || {};
  let shotStat = 60;
  if (planned === "DRIVE") shotStat = s.drive ?? 60;
  else if (planned === "MID") shotStat = s.two ?? 60;
  else if (planned === "THREE") shotStat = s.three ?? 60;

  if (phase === "OFFENSE") {
    if (shotStat >= 80) p += 0.10;
    else if (shotStat <= 55) p -= 0.06;
  }

  // 防守能力越高，越願意在防守回合開技能（尤其你有守對與火鍋收益）
  if (phase === "DEFENSE") {
    const defStat = s.defense ?? 60;
    if (defStat >= 85) p += 0.08;
    else if (defStat <= 60) p -= 0.05;
  }

  // === 情境加成：關鍵分/落後更想開 ===
  if (isClutch) p += 0.08;
  if (isBehind) p += 0.08;

  // 最終上限（避免每回合都開）
  p = clamp(p, 0.05, 0.75);
  return Math.random() < p;
}


// =========================
// 回合流程
// =========================
function prepareTurn(){
  if (!playerChar || !aiChar) return;

  pendingSkillUse = false;
  aiPendingSkillUse = false;

  awaitingChoice = true;
  enableActionButtons(true);
  updateSkillButton();

  const isPlayerOffense = (possession==="P");
  $("actionTitle").textContent = isPlayerOffense ? "玩家進攻：請選擇出手" : "玩家防守：請選擇防守類型";
  setStatus(isPlayerOffense
    ? "你是進攻方：選擇 突破/中距/三分（可選擇是否使用技能）。"
    : "你是防守方：選擇你要守的類型（可選擇是否使用技能）。"
  );

  startClock();
}

// 玩家按技能
const skillBtn = $("btnSkill");
if (skillBtn) {
  skillBtn.addEventListener("click", () => {
    if (!canPlayerUseSkill()) return;

    pendingSkillUse = true;
    logLine(`<div><b>🎯 玩家啟動技能：</b>${playerChar.skill.name}</div>`);
    updateSkillButton();

    // 綠間：按技能直接出三分
    if (awaitingChoice && possession === "P" && playerChar.id === "midorima") {
      stopClock();
      onPlayerPick("THREE", false);
    }
  });
}

// 玩家選擇出手/防守
// 玩家選擇出手/防守（要等 DOM 好了再綁定，且避免 null 爆炸）
function bindActionButtons(){
  $("btnDrive")?.addEventListener("click", ()=>onPlayerPick("DRIVE", false));
  $("btnMid")?.addEventListener("click", ()=>onPlayerPick("MID", false));
  $("btnThree")?.addEventListener("click", ()=>onPlayerPick("THREE", false));
}

// ✅ 建議：在 initApp() 裡呼叫一次（最穩）
// bindActionButtons();
function onPlayerPick(choice, isTimeout){
  if (!awaitingChoice) return;
  stopClock();
  awaitingChoice = false;

  enableActionButtons(false);
  $("btnSkill").disabled = true;

  const playerIsOffense = (possession==="P");

  if (playerIsOffense){
    const shot = choice;
    const aiGuard = aiChooseDefenseAgainst(shot);
    aiPendingSkillUse = aiDecideUseSkill("DEFENSE", aiGuard);

    resolvePossession({
      offense:"P",
      offenseShot:shot,
      defense:"A",
      defenseGuard:aiGuard
    });
  } else {
    const guard = choice;
    const aiShot = aiChooseOffense();
    aiPendingSkillUse = aiDecideUseSkill("OFFENSE", aiShot);

    resolvePossession({
      offense:"A",
      offenseShot:aiShot,
      defense:"P",
      defenseGuard:guard
    });
  }
}

function addSkillEvent(events, { side, charName, skillName, status, message }) {
  events.push({ side, charName, skillName, status, message });
}

function logSkillEvents(events) {
  for (const e of events) {
    const icon = (e.status === "success") ? "✅" : (e.status === "fail") ? "❌" : "ℹ️";
    const sideLabel = (e.side === "OFF") ? "🎯 進攻" : "🛡️ 防守";
    logLine(`<div style="opacity:.92">${sideLabel}｜${icon} <b>${e.charName}</b>「${e.skillName}」：${e.message}</div>`);
  }
}

/**
 * 統一：本回合技能效果 + 成功/失敗提示
 * 回傳：
 * - mods: 數值修正
 * - events: 提示事件（你要成功/失敗都顯示）
 * - guessedRightOverride: 伊月鷲之眼用來把沒守到翻成守到
 */
function computeSkillEffects(ctx) {
  const {
    offense, offenseShot,
    offChar, defChar,
    offUsesSkill, defUsesSkill,
    guessedRight,
    prevLastPShot, prevLastAShot,
    pScore, aScore
  } = ctx;

  const events = [];
  const mods = {
    baseChanceAdd: 0,
    finalBonusAdd: 0,
    finalPenaltyAdd: 0,
    reduceInterferenceAdd: 0,
    dunkTriggerAdd: 0,
    forceDunk: false,
    forceDunkBaseAdd: 0,
    forcedMake: false,
    blockTriggerAdd: 0,
    blockSuccessAdd: 0,
    postScoreGiveMomentum: false // 黃瀨得分給士氣
  };

  let guessedRightOverride = null;

  // -------------------------
  // DEF：防守方技能
  // -------------------------
  if (defUsesSkill && defChar?.skill?.name) {
    const dn = defChar.name;
    const sk = defChar.skill.name;

    // 伊月：鷲之眼（沒守到才有意義）
    if (defChar.id === "itsuki") {
      const chance = 0.48;

      if (!guessedRight) {
        const ok = Math.random() < chance;
        if (ok) {
          guessedRightOverride = true;
          addSkillEvent(events, { side:"DEF", charName: dn, skillName: sk, status:"success", message:"視為守到（鷲之眼）" });
        } else {
          addSkillEvent(events, { side:"DEF", charName: dn, skillName: sk, status:"fail", message:"未觸發（鷲之眼）" });
        }
      } else {
        addSkillEvent(events, { side:"DEF", charName: dn, skillName: sk, status:"fail", message:"未觸發（本回合已守到）" });
      }
    }

    // 赤司：防守壓制；守對再壓制；火鍋成功率提升
    if (defChar.id === "akashi") {
      const basePenalty = 10;
      const extraPenalty = guessedRight ? 8 : 0;
      const blockAdd = 5;

      mods.finalPenaltyAdd += basePenalty + extraPenalty;
      mods.blockSuccessAdd += blockAdd;

      addSkillEvent(events, {
        side:"DEF",
        charName: dn,
        skillName: sk,
        status:"success",
        message:
          `防守壓制 -${basePenalty}%` +
          `${extraPenalty ? `（守對再 -${extraPenalty}%）` : ""}` +
          `；火鍋成功率 +${blockAdd}%`
      });
    }

    // 木吉：鉗爪（防守壓制；守對再壓制；火鍋成功率提升）
    if (defChar.id === "kiyoshi") {
      const basePenalty = 10;
      const extraPenalty = guessedRight ? 8 : 0;
      const blockAdd = 8;

      mods.finalPenaltyAdd += basePenalty + extraPenalty;
      mods.blockSuccessAdd += blockAdd;

      addSkillEvent(events, {
        side:"DEF",
        charName: dn,
        skillName: sk,
        status:"success",
        message:
          `防守壓制 -${basePenalty}%` +
          `${extraPenalty ? `（守對再 -${extraPenalty}%）` : ""}` +
          `；火鍋成功率 +${blockAdd}%`
      });
    }

    // 紫原：火鍋成功率依距離（需守到才有效）
        // 紫原：禁區支配（A：禁區絕望感；守對才有效）
    if (defChar.id === "murasakibara") {
      if (guessedRight) {
        // 你只要改這裡的數值就能調平衡
        const penaltyBase = 10; // 對手最終命中率下降（基礎）
        const blockBase = 12;   // 火鍋成功率提升（基礎）
        // 依出手距離再加強（Drive > Mid > Three）
        const distPenalty =
          (offenseShot === "DRIVE") ? 8 :
          (offenseShot === "MID")   ? 5 :
          (offenseShot === "THREE") ? 2 : 0;
        const distBlock =
          (offenseShot === "DRIVE") ? 12 :
          (offenseShot === "MID")   ? 8 :
          (offenseShot === "THREE") ? 4 : 0;
        const totalPenalty = penaltyBase + distPenalty;
        const totalBlock = blockBase + distBlock;
        mods.finalPenaltyAdd += totalPenalty;
        mods.blockSuccessAdd += totalBlock;
        addSkillEvent(events, {
          side:"DEF",
          charName: dn,
          skillName: sk,
          status:"success",
          message: `最終命中率 -${totalPenalty}%；火鍋成功率 +${totalBlock}%（守對）`
        });
      } else {
        addSkillEvent(events, {
          side:"DEF",
          charName: dn,
          skillName: sk,
          status:"fail",
          message:"未觸發（未守到）"
        });
      }
    }

    
        // 早川：拼搶壓迫（守對才有效）
    if (defChar.id === "hayakawa") {
      if (guessedRight) {
        const penalty = 10;     // 對手最終命中率下降
        const trigUp = 12;      // 火鍋觸發率上升
        const succUp = 8;       // 火鍋成功率上升
        mods.finalPenaltyAdd += penalty;
        mods.blockTriggerAdd += trigUp;
        mods.blockSuccessAdd += succUp;
        addSkillEvent(events, {
          side:"DEF",
          charName: dn,
          skillName: sk,
          status:"success",
          message: `最終命中率 -${penalty}%；火鍋觸發率 +${trigUp}%；火鍋成功率 +${succUp}%（守對）`
        });
      } else {
        addSkillEvent(events, {
          side:"DEF",
          charName: dn,
          skillName: sk,
          status:"fail",
          message:"未觸發（未守到）"
        });
      }
    }

    // 小堀：禁區基礎（防守：守對才有效）
    if (defChar.id === "kobori") {
      if (guessedRight) {
        const penalty = 8;      // 對手最終命中率下降
        const succUp = 10;      // 火鍋成功率上升
        mods.finalPenaltyAdd += penalty;
        mods.blockSuccessAdd += succUp;
        addSkillEvent(events, {
          side:"DEF",
          charName: dn,
          skillName: sk,
          status:"success",
          message: `最終命中率 -${penalty}%；火鍋成功率 +${succUp}%（守對）`
        });
      } else {
        addSkillEvent(events, {
          side:"DEF",
          charName: dn,
          skillName: sk,
          status:"fail",
          message:"未觸發（未守到）"
        });
      }
    }

  }

  // -------------------------
  // OFF：進攻方技能
  // -------------------------
  if (offUsesSkill && offChar?.skill?.name) {
    const on = offChar.name;
    const sk = offChar.skill.name;

    // 火神：急停灌籃（突破才有效）
    if (offChar.id === "kagami") {
      if (offenseShot === "DRIVE") {
        const add = 8;
        mods.forceDunk = true;
        mods.forceDunkBaseAdd = add;
        addSkillEvent(events, {
          side:"OFF",
          charName: on,
          skillName: sk,
          status:"success",
          message: `命中率 +${add}%（直接扣籃）`
        });
      } else {
        addSkillEvent(events, { side:"OFF", charName: on, skillName: sk, status:"fail", message:"未觸發（本回合不是突破）" });
      }
    }

    // 綠間：強制三分（只能三分）
    if (offChar.id === "midorima") {
      if (offenseShot === "THREE") {
        mods.forcedMake = true;
        addSkillEvent(events, { side:"OFF", charName: on, skillName: sk, status:"success", message:"必中（三分）" });
      } else {
        addSkillEvent(events, { side:"OFF", charName: on, skillName: sk, status:"fail", message:"未觸發（本回合不是三分）" });
      }
    }

    // 赤司：進攻最終命中率提升
    if (offChar.id === "akashi") {
      const bonus = 15;
      mods.finalBonusAdd += bonus;

      addSkillEvent(events, {
        side:"OFF",
        charName: on,
        skillName: sk,
        status:"success",
        message: `最終命中率 +${bonus}%`
      });
    }

    // 青峰：降低干擾；對手守錯再降；中投最終加成
    if (offChar.id === "aomine") {
      const baseReduce = 15;
      const extraReduce = (!guessedRight) ? 8 : 0;
      const midBonus = (offenseShot === "MID") ? 8 : 0;
      mods.reduceInterferenceAdd += baseReduce + extraReduce;
      if (midBonus) mods.finalBonusAdd += midBonus;
      addSkillEvent(events, {
        side:"OFF",
        charName: on,
        skillName: sk,
        status:"success",
        message:
          `干擾 -${baseReduce}%` +
          `${extraReduce ? `（對手守錯再 -${extraReduce}%）` : ""}` +
          `${midBonus ? `；中投最終 +${midBonus}%` : ""}`
      });
    }

    // 黃瀨：動作模仿（只判定一次！）
    if (offChar.id === "kise") {
      const oppLast = (offense === "P") ? prevLastAShot : prevLastPShot;

      if (oppLast && oppLast === offenseShot) {
        const baseAdd = 15;
        const dunkAdd = (offenseShot === "DRIVE") ? 10 : 0;
        mods.baseChanceAdd += baseAdd;
        if (dunkAdd) mods.dunkTriggerAdd += dunkAdd;
        mods.postScoreGiveMomentum = true;
        addSkillEvent(events, {
          side:"OFF",
          charName: on,
          skillName: sk,
          status:"success",
          message:
            `基礎命中率 +${baseAdd}%` +
            `${dunkAdd ? `；扣籃觸發率 +${dunkAdd}%` : ""}` +
            `（模仿成立）`
        });
      } else {
        addSkillEvent(events, { side:"OFF", charName: on, skillName: sk, status:"fail", message:"未觸發（模仿失敗）" });
      }
    }

    // 日向：關鍵射手（三分才有效）
    if (offChar.id === "hyuga") {
      if (offenseShot === "THREE") {
        const base = 12;
        const clutchAdd = 6;
        const isClutch =
          Math.abs(pScore - aScore) <= 2 ||
          ((offense === "P") && pScore < aScore) ||
          ((offense !== "P") && aScore < pScore);
        const bonus = base + (isClutch ? clutchAdd : 0);
        mods.finalBonusAdd += bonus;
        addSkillEvent(events, {
          side:"OFF",
          charName: on,
          skillName: sk,
          status:"success",
          message: `三分最終 +${bonus}%${isClutch ? "（關鍵加成）" : ""}`
        });
      } else {
        addSkillEvent(events, { side:"OFF", charName: on, skillName: sk, status:"fail", message:"未觸發（本回合不是三分）" });
      }
    }

    // 水戶部：鉤射（DRIVE/MID 才有效）
    if (offChar.id === "mitobe") {
      if (offenseShot === "DRIVE" || offenseShot === "MID") {
        const finalAdd = 18;
        const trigMinus = 20;
        const succMinus = 25;
        mods.finalBonusAdd += finalAdd;
        mods.blockTriggerAdd -= trigMinus;
        mods.blockSuccessAdd -= succMinus;
        addSkillEvent(events, {
          side:"OFF",
          charName: on,
          skillName: sk,
          status:"success",
          message: `最終命中率 +${finalAdd}%；火鍋觸發率 -${trigMinus}%；火鍋成功率 -${succMinus}%`
        });
      } else {
        addSkillEvent(events, { side:"OFF", charName: on, skillName: sk, status:"fail", message:"未觸發（出手不符合）" });
      }
    }

    // 木吉：鉗爪（DRIVE/MID 才有效）
    if (offChar.id === "kiyoshi") {
      if (offenseShot === "DRIVE" || offenseShot === "MID") {
        const bonus = 15;
        mods.finalBonusAdd += bonus;
        addSkillEvent(events, {
          side:"OFF",
          charName: on,
          skillName: sk,
          status:"success",
          message: `最終命中率 +${bonus}%`
        });
      } else {
        addSkillEvent(events, { side:"OFF", charName: on, skillName: sk, status:"fail", message:"未觸發（出手不符合）" });
      }
    }

    // 笠松：隊長的節奏（最終 +12%；關鍵時刻再 +8%）
    if (offChar.id === "kasamatsu") {
      const base = 12;
      const clutchAdd = 8;
      const diff = Math.abs(pScore - aScore);
      const isBehind =
        (offense === "P" && pScore < aScore) ||
        (offense === "A" && aScore < pScore);
      const isClutch = isBehind || diff <= 2;
      const bonus = base + (isClutch ? clutchAdd : 0);
      mods.finalBonusAdd += bonus;
      addSkillEvent(events, {
        side:"OFF",
        charName: on,
        skillName: sk,
        status:"success",
        message: `最終命中率 +${bonus}%${isClutch ? "（關鍵時刻）" : ""}`
      });
    }

    // 森山：定點狙擊（三分才有效；基礎命中率 +15%；關鍵時刻再 +8%）
    if (offChar.id === "moriyama") {
      if (offenseShot === "THREE") {
        const base = 15;
        const clutchAdd = 8;
        const isClutch = (pScore >= 9 || aScore >= 9);
        const bonus = base + (isClutch ? clutchAdd : 0);
        mods.baseChanceAdd += bonus;
        addSkillEvent(events, {
          side:"OFF",
          charName: on,
          skillName: sk,
          status:"success",
          message: `三分基礎命中率 +${bonus}%${isClutch ? "（關鍵時刻）" : ""}`
        });
      } else {
        addSkillEvent(events, { side:"OFF", charName: on, skillName: sk, status:"fail", message:"未觸發（本回合不是三分）" });
      }
    }
    
        // 小堀：禁區基礎（進攻：突破/中投才有效）
    if (offChar.id === "kobori") {
      if (offenseShot === "DRIVE" || offenseShot === "MID") {
        const finalUp = 10;     // 最終命中率提升
        const trigDown = 12;    // 火鍋觸發率下降
        const succDown = 10;    // 火鍋成功率下降
        mods.finalBonusAdd += finalUp;
        mods.blockTriggerAdd -= trigDown;
        mods.blockSuccessAdd -= succDown;
        addSkillEvent(events, {
          side:"OFF",
          charName: on,
          skillName: sk,
          status:"success",
          message: `最終命中率 +${finalUp}%；火鍋觸發率 -${trigDown}%；火鍋成功率 -${succDown}%`
        });
      } else {
        addSkillEvent(events, {
          side:"OFF",
          charName: on,
          skillName: sk,
          status:"fail",
          message:"未觸發（出手不符合）"
        });
      }
    }

  }

  return { mods, events, guessedRightOverride };
}

//
function resolvePossession({ offense, offenseShot, defense, defenseGuard }) {

  // ✅ 回合數
  turnCount++;

  const offChar = (offense === "P") ? playerChar : aiChar;
  const defChar = (defense === "P") ? playerChar : aiChar;

  const offUsesSkill = (offense === "P") ? pendingSkillUse : aiPendingSkillUse;
  const defUsesSkill = (defense === "P") ? pendingSkillUse : aiPendingSkillUse;

  // ✅ 顯示「電腦使用技能」提示（純顯示，不影響邏輯）——安全判斷避免報錯
  if (offense === "A" && offUsesSkill && offChar?.skill?.name) {
    logLine(`<div><b>🎯 電腦啟動技能：</b>${offChar.skill.name}</div>`);
  }
  if (defense === "A" && defUsesSkill && defChar?.skill?.name) {
    logLine(`<div><b>🛡️ 電腦啟動技能：</b>${defChar.skill.name}</div>`);
  }

  // 先判斷是否守到
  let guessedRight = (offenseShot === defenseGuard);

  // ✅ 存「上一回合出手」（給黃瀨判定用）
  const prevLastPShot = lastPShot;
  const prevLastAShot = lastAShot;

  // ---- 士氣：本回合是否消耗（一次性）----
  const usedPMomentum = (offense === "P") ? pMomentum : false;
  const usedAMomentum = (offense === "A") ? aMomentum : false;

  // 本回合新獲得士氣（用旗標，回合結尾再結算）
  let gainedPMomentum = false;
  let gainedAMomentum = false;

  // =========================
  // 基礎命中率
  // =========================
  let baseChance = BASE_CHANCE[offenseShot];

  // 進攻能力
  const offStat =
    (offenseShot === "DRIVE") ? offChar.stats.drive :
    (offenseShot === "MID")   ? offChar.stats.two :
                                offChar.stats.three;

  const defStat = defChar.stats.defense;

  // 能力差加成
  baseChance += (offStat - defStat) * PER_POINT;

  // 猜拳修正
  baseChance += rpsAdjust(offStat, defStat, guessedRight);

  // =========================
  // ✅ 技能統一處理：效果 + 成功/失敗提示
  // =========================
  const { mods, events, guessedRightOverride } = computeSkillEffects({
    offense, offenseShot,
    offChar, defChar,
    offUsesSkill, defUsesSkill,
    guessedRight,
    prevLastPShot, prevLastAShot,
    pScore, aScore
  });

  // 伊月：把沒守到翻成守到
  if (guessedRightOverride === true) guessedRight = true;

  // 成功/失敗提示（你要求兩者都顯示）
  logSkillEvents(events);

  // 套用 baseChance 類加成（黃瀨模仿等）
  baseChance += (mods.baseChanceAdd || 0);

  // ✅ 現在才記錄「本回合出手」
  if (offense === "P") lastPShot = offenseShot;
  else lastAShot = offenseShot;

  // =========================
  // 扣籃事件（DRIVE 才會判定）
  // =========================
  let isDunkEvent = false;
  let dunkTriggerChance = 0;

  if (offenseShot === "DRIVE") {
    dunkTriggerChance = dunkTriggerFromJump(offChar.stats.jump);
    dunkTriggerChance += (mods.dunkTriggerAdd || 0);

    if (mods.forceDunk === true) {
      isDunkEvent = true;
      baseChance += (mods.forceDunkBaseAdd || 0);
    } else {
      if (Math.random() * 100 < dunkTriggerChance) {
        isDunkEvent = true;
      }
    }
  }

  // =========================
  // 強制必中（綠間）
  // =========================
  const forcedMake = (mods.forcedMake === true);

  // =========================
  // 最終加成 / 扣減 / 減干擾（由技能回傳 mods）
  // =========================
  let finalBonus = (mods.finalBonusAdd || 0);
  let finalPenalty = (mods.finalPenaltyAdd || 0);
  let reduceInterference = (mods.reduceInterferenceAdd || 0);

  // =========================
  // 干擾
  // =========================
  let interference = baseInterference(defStat, guessedRight);

  // =========================
  // 火鍋判定（守對才可能）
  // =========================
  let blockTriggered = false;
  let blockSuccess = false;
  let blockSuccessChance = 0;
  let blockTriggerChance = 0;

  if (guessedRight) {
    blockTriggerChance = blockTriggerFromJump(defChar.stats.jump);
    blockTriggerChance += (mods.blockTriggerAdd || 0);
    blockTriggerChance = Math.max(1, blockTriggerChance);

    if (Math.random() * 100 < blockTriggerChance) {
      blockTriggered = true;

      blockSuccessChance = blockSuccessBase(defChar.stats.jump, defChar.stats.defense);
      blockSuccessChance += (mods.blockSuccessAdd || 0);
      blockSuccessChance = clamp(blockSuccessChance, 1, 99);

      if (Math.random() * 100 < blockSuccessChance) {
        blockSuccess = true;
      } else {
        // 火鍋失敗：高干擾
        interference = interferenceOnBlockFail(defChar.stats.defense, defChar.stats.jump);
      }
    }
  }

  // 青峰削干擾等（mods.reduceInterferenceAdd）
  interference = Math.max(0, interference - reduceInterference);

  // 最終命中率：base - 干擾
  let finalChance = baseChance - interference;

  // 士氣（一次性）加在最後
  if (usedPMomentum) finalBonus += 5;
  if (usedAMomentum) finalBonus += 5;

  // =========================
  // 全局：關鍵時刻（任一方分數 >= 9）
  // 用角色 clutch 套用加成
  // 進攻：命中率 + (clutch-70)*0.4
  // 防守：干擾   + (clutch-70)*0.4
  // =========================
  const isClutchTime = (pScore >= 9) || (aScore >= 9);
  if (isClutchTime) {
    const offClutchAdd = clutchBonus(offChar.stats.clutch);
    const defClutchAdd = clutchBonus(defChar.stats.clutch);
    // 進攻提升命中
    baseChance += offClutchAdd;
    // 防守提升干擾（干擾越高 -> finalChance 越低）
    interference += defClutchAdd;
    // （可選）你想顯示再打開
    logLine(`<div style="opacity:.85">⏱️ 關鍵時刻：進攻+${offClutchAdd.toFixed(1)}% / 防守干擾+${defClutchAdd.toFixed(1)}%</div>`);
  }

// 最後加成/扣減
finalChance = finalChance + finalBonus - finalPenalty;
// 🎲 命中率隨機浮動（避免每球都固定）
finalChance = applyHitVariance(finalChance, {
  isClutch: Math.abs(pScore - aScore) <= 2,
  isSkillUsed: offUsesSkill,
  shotType: offenseShot
});
// 最終限制
finalChance = clamp(finalChance, CLAMP_MIN, CLAMP_MAX);


  // =========================
  // Log：回合摘要
  // =========================
  const offLabel = (offense === "P") ? "玩家" : "電腦";
  const defLabel = (defense === "P") ? "玩家" : "電腦";

  logLine(
    `<div><b>回合${turnCount}</b>｜${offLabel}【${offChar.name}】進攻：${SHOT_NAME[offenseShot]}${isDunkEvent ? "（扣籃）" : ""} ｜ ${defLabel}守：${SHOT_NAME[defenseGuard]}${guessedRight ? "（守到）" : "（沒守到）"}</div>`
  );

  if (blockTriggered) {
    logLine(
      `<div style="opacity:.85">🛡️ 火鍋觸發｜成功率 ${pct1(blockSuccessChance)} → ${blockSuccess ? "成功！" : "失敗（高干擾）"}</div>`
    );
  }

  // =========================
  // 得分判定
  // =========================
  let made = false;
  let points = 0;

  if (blockSuccess) {
    made = false;
    points = 0;

    // 扣籃被蓋：防守方獲得下一次進攻士氣
    if (isDunkEvent) {
      if (defense === "P") gainedPMomentum = true;
      else gainedAMomentum = true;
      logLine(`<div>⚡ 扣籃被蓋！${defLabel}獲得下一次進攻士氣(+5%)</div>`);
    }
  } else {
    // 未被蓋
    if (forcedMake) {
      made = true;
      points = 3;
    } else {
      const roll = Math.random() * 100;
      made = (roll < finalChance);
      points = made ? (offenseShot === "THREE" ? 3 : 2) : 0;
    }

    logLine(`<div style="opacity:.85">命中率：${pct1(finalChance)}</div>`);

    if (made) {
      logLine(`<div>✅ 進球！+${points}</div>`);

      // 扣籃成功：進攻方獲得下一次進攻士氣
      if (isDunkEvent) {
        if (offense === "P") gainedPMomentum = true;
        else gainedAMomentum = true;
        logLine(`<div>🔥 扣籃成功！${offLabel}獲得下一次進攻士氣(+5%)</div>`);
      }

      // 黃瀨：得分成功 → 下一次進攻士氣（集中到 mods.postScoreGiveMomentum）
      if (mods.postScoreGiveMomentum === true) {
        if (offense === "P") gainedPMomentum = true;
        else gainedAMomentum = true;
        logLine(`<div>🟡 黃瀨得分！獲得下一次進攻士氣(+5%)</div>`);
      }

    } else {
      logLine(`<div>❌ 沒進</div>`);
    }
  }

  // =========================
  // ✅ 賽後數據：記帳（出手/命中/火鍋）
  // =========================
  const offSide = (offense === "P") ? "P" : "E";
  const defSide = (defense === "P") ? "P" : "E";

  // 出手種類：扣籃事件算 dunk，否則依 shot 記 drive/mid/three
  let shotKey = "drive";
  if (offenseShot === "MID") shotKey = "mid";
  if (offenseShot === "THREE") shotKey = "three";
  if (isDunkEvent) shotKey = "dunk";

  // ✅ 狹義防守：守到才算一次防守機會；守到且沒進才算成功防守
  if (guessedRight) {
    const defSide2 = (defense === "P") ? "P" : "E";
    addMA(defSide2, "def", !made); // a++；若沒進則 m++
  }

  // 記錄本次出手（a++，命中則 m++）
  addMA(offSide, shotKey, made);

  // 火鍋統計：觸發視為一次 block 嘗試；成功則 m++
  if (blockTriggered) {
    addMA(defSide, "block", blockSuccess);
  }

  // 更新分數（points 沒進就是 0，所以可直接加）
  if (offense === "P") pScore += points;
  else aScore += points;

  // ✅ 士氣最終結算（正確版）
  // 規則：
  // - 只有「進攻方」在本回合使用士氣才會消失
  // - 防守方獲得的士氣，要保留到「下一次進攻」
  if (offense === "P") {
    // 玩家是進攻方：本回合用掉就歸零，回合內新獲得再補回
    pMomentum = false;
    if (gainedPMomentum) pMomentum = true;

    // 電腦是防守方：保留原本士氣，再加上本回合獲得
    if (gainedAMomentum) aMomentum = true;
  } else {
    // 電腦是進攻方
    aMomentum = false;
    if (gainedAMomentum) aMomentum = true;

    // 玩家是防守方
    if (gainedPMomentum) pMomentum = true;
  }

// =========================
// ✅ 技能冷卻（使用你原本的 calcCooldownAfterUse）
// 規則：只有「本回合真的選擇使用技能」才會進入冷卻
//       沒用技能才會倒數 -1
// =========================

// 玩家本回合是否用技能（不管進攻/防守）
const playerUsedSkill =
  (offense === "P" && offUsesSkill) ||
  (defense === "P" && defUsesSkill);

// 電腦本回合是否用技能
const aiUsedSkill =
  (offense === "A" && offUsesSkill) ||
  (defense === "A" && defUsesSkill);

// ✅ 找出「本回合實際用技能」的角色（誰用了就用誰）
const playerSkillChar =
  (offense === "P" && offUsesSkill) ? offChar :
  (defense === "P" && defUsesSkill) ? defChar :
  null;

const aiSkillChar =
  (offense === "A" && offUsesSkill) ? offChar :
  (defense === "A" && defUsesSkill) ? defChar :
  null;

// 玩家 CD
if (playerUsedSkill && playerSkillChar) {
  pSkillCD = calcCooldownAfterUse(playerSkillChar, points);
} else if (pSkillCD > 0) {
  pSkillCD--;
}

// 電腦 CD
if (aiUsedSkill && aiSkillChar) {
  aSkillCD = calcCooldownAfterUse(aiSkillChar, points);
} else if (aSkillCD > 0) {
  aSkillCD--;
}



  // ✅ 回合結果（給未來引擎/排位/戰報使用）
  const result = {
    turn: turnCount,
    offense,                 // "P" / "A"
    defense,                 // "P" / "A"
    shotType: offenseShot,   // "DRIVE" | "MID" | "THREE"
    guardType: defenseGuard, // "DRIVE" | "MID" | "THREE"
    guessedRight,
    finalChance,
    made,
    points,
    isDunkEvent,
    blockTriggered,
    blockSuccess,
    scoreAfter: { P: pScore, A: aScore }
  };

  // battleLog（如果你有用）
  if (typeof battleLog !== "undefined" && Array.isArray(battleLog)) {
    battleLog.push({
      turn: turnCount,
      offense: offense,
      shotType: offenseShot,
      guessedRight: guessedRight,
      finalChance: finalChance,
      made: made,
      points: points
    });
  }

// 勝負（✅ 先讓最後比分顯示，再結束）
if (pScore >= TARGET_SCORE || aScore >= TARGET_SCORE) {

  // ✅ 先把最後分數與表頭刷新出來（關鍵）
  updateScoreUI();
  updateHeader();

  const playerWin = (pScore > aScore);

  // matchState 記錄（有就記，沒有就跳過）
  if (typeof matchState !== "undefined" && matchState) {
    recordEvent(matchState, "match_end", {
      winner: playerWin ? "P" : "E",
      finalScore: { P: pScore, E: aScore }
    });
  }

  // ⭐ 排位結算：只在 Ranked Mode 才更新星星
  if (typeof currentMode !== "undefined" && currentMode === "ranked") {
    applyRankResult(playerWin);
    updateRankUI();
  }

  // ✅ 延後結束：先讓瀏覽器 paint 最後比分
  setTimeout(() => {
    endGame();
  }, 80);

  return result;   // ✅ 結束比賽後直接回傳
}


  // ✅ 沒結束才會走到這裡：換球權與下一回合
  possession = (possession === "P") ? "A" : "P";
  turnNo += 1;

  updateScoreUI();
  updateHeader();

  prepareTurn();
  return result;     // ✅ 也要回傳，避免外層流程拿不到 result
}



function endGame(){
  stopClock();
  awaitingChoice=false;
  enableActionButtons(false);
  $("btnSkill").disabled=true;

  const winner = (pScore >= TARGET_SCORE) ? "玩家" : "電腦";
  setStatus(`比賽結束！${winner}獲勝（${pScore} : ${aScore}）。按「再來一局」可重新選角。`);
  logLine(`<div><b>🏁 結束：</b>${winner}獲勝（${pScore}:${aScore}）</div>`);
}

// =========================
// 畫面切換（首頁 / 對戰 / 圖鑑）— 統一版本（不使用 $）
// =========================

function hideAllScreens(){
  const home   = document.getElementById("screenHome");
  const battle = document.getElementById("screenBattle");
  const codex  = document.getElementById("screenCodex");

  if (home)   home.classList.add("hidden");
  if (battle) battle.classList.add("hidden");
  if (codex)  codex.classList.add("hidden");
}

function showHome(){
  hideAllScreens();

  const home = document.getElementById("screenHome");
  const top  = document.getElementById("topBar");

  if (home) home.classList.remove("hidden");
  if (top)  top.classList.add("hidden");
}

function showBattle(){
  hideAllScreens();

  const battle = document.getElementById("screenBattle");
  const top    = document.getElementById("topBar");

  if (battle) battle.classList.remove("hidden");
  if (top)    top.classList.remove("hidden");
}

function showCodex(){
  hideAllScreens();

  const codex = document.getElementById("screenCodex");
  const top   = document.getElementById("topBar");

  if (codex) codex.classList.remove("hidden");
  if (top)   top.classList.add("hidden"); // 圖鑑不顯示回合資訊
}
// ===============================
// 賽後數據（本場）- 新版唯一資料源
// ===============================
let postStats = null;

function resetPostStats() {
  postStats = {
    P: {
      name: "",                 // 玩家角色名（由 startGame() 設定）
      dunk:  { m:0, a:0 },
      drive: { m:0, a:0 },
      mid:   { m:0, a:0 },
      three: { m:0, a:0 },
      def:   { m:0, a:0 },      // 防守成功（例如成功干擾/抄截/迫使失誤）
      block: { m:0, a:0 }       // 火鍋：a=觸發火鍋次數, m=火鍋成功次數
    },
    E: {
      name: "",                 // 對手角色名（由 startGame() 設定）
      dunk:  { m:0, a:0 },
      drive: { m:0, a:0 },
      mid:   { m:0, a:0 },
      three: { m:0, a:0 },
      def:   { m:0, a:0 },
      block: { m:0, a:0 }
    }
  };
}

// 只負責「記帳」：a++ / m++（不要在這裡寫 UI）
function addMA(side, key, made) {
  if (!postStats) resetPostStats();
  const s = postStats[side];
  if (!s || !s[key]) return;
  s[key].a++;
  if (made) s[key].m++;
}

// 計算用工具（UI 需要時呼叫）
function pct(m, a) {
  if (!a) return "0%";
  return `${Math.round((m / a) * 100)}%`;
}
function fmtMA(m, a) {
  return `${m}-${a}`;
}
function sum2pt(S) {
  // 二分：灌籃+突破+中投
  const m = S.dunk.m + S.drive.m + S.mid.m;
  const a = S.dunk.a + S.drive.a + S.mid.a;
  return { m, a };
}
function renderPostStats() {
  const box = document.getElementById("postStatsContent");
  if (!box) return;
  if (!postStats) resetPostStats();

  const P = postStats.P;
  const E = postStats.E;

  const P2 = sum2pt(P);
  const E2 = sum2pt(E);

  const Pm = P.dunk.m + P.drive.m + P.mid.m + P.three.m;
  const Pa = P.dunk.a + P.drive.a + P.mid.a + P.three.a;

  const Em = E.dunk.m + E.drive.m + E.mid.m + E.three.m;
  const Ea = E.dunk.a + E.drive.a + E.mid.a + E.three.a;

  const pName = safeText(P.name, "玩家");
  const eName = safeText(E.name, "對手");

  const cell = (m, a) => `${fmtMA(m, a)} (${pct(m, a)})`;

  box.innerHTML = `
    <div class="postScore">
      本場比分：<b>${pName}</b> ${pScore} ： ${aScore} <b>${eName}</b>
    </div>

    <table class="postStatsTable">
      <thead>
        <tr>
          <th class="k"></th>
          <th class="v">${pName}</th>
          <th class="v">${eName}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="k">總命中</td>
          <td class="v">${cell(Pm, Pa)}</td>
          <td class="v">${cell(Em, Ea)}</td>
        </tr>

        <tr>
          <td class="k">灌籃</td>
          <td class="v">${cell(P.dunk.m, P.dunk.a)}</td>
          <td class="v">${cell(E.dunk.m, E.dunk.a)}</td>
        </tr>
        <tr>
          <td class="k">突破</td>
          <td class="v">${cell(P.drive.m, P.drive.a)}</td>
          <td class="v">${cell(E.drive.m, E.drive.a)}</td>
        </tr>
        <tr>
          <td class="k">中投</td>
          <td class="v">${cell(P.mid.m, P.mid.a)}</td>
          <td class="v">${cell(E.mid.m, E.mid.a)}</td>
        </tr>

        <tr class="sep"><td colspan="3"></td></tr>

        <tr>
          <td class="k">二分</td>
          <td class="v">${cell(P2.m, P2.a)}</td>
          <td class="v">${cell(E2.m, E2.a)}</td>
        </tr>
        <tr>
          <td class="k">三分</td>
          <td class="v">${cell(P.three.m, P.three.a)}</td>
          <td class="v">${cell(E.three.m, E.three.a)}</td>
        </tr>

        <tr class="sep"><td colspan="3"></td></tr>

        <tr>
          <td class="k">防守</td>
          <td class="v">${cell(P.def.m, P.def.a)}</td>
          <td class="v">${cell(E.def.m, E.def.a)}</td>
        </tr>

        <tr>
          <td class="k">火鍋</td>
          <td class="v">${cell(P.block.m, P.block.a)}</td>
          <td class="v">${cell(E.block.m, E.block.a)}</td>
        </tr>
      </tbody>
    </table>
  `;
}


function row(label, lMA, lPct, rMA, rPct) {
  return `
    <div class="postRow">
      <div class="postLabel">${label}</div>
      <div>${lMA} (${lPct})</div>
      <div>${rMA} (${rPct})</div>
    </div>
  `;
}

// =========================
// 圖鑑：資料取得/渲染
// =========================
function getCharacterList(){
  if (Array.isArray(window.CHARACTERS)) return window.CHARACTERS;
  if (Array.isArray(window.characters)) return window.characters;
  if (Array.isArray(window.PLAYERS)) return window.PLAYERS;
  return [];
}

function safeText(v, fallback="—"){
  if (v === 0) return "0";
  return (v === undefined || v === null || v === "") ? fallback : String(v);
}

function buildStats(ch){
  const drive   = ch.drive ?? ch.dribble ?? ch.breakthrough;
  const mid     = ch.mid ?? ch.midrange ?? ch.two ?? ch.twoPt;
  const three   = ch.three ?? ch.threep ?? ch.threePt;
  const defense = ch.defense ?? ch.def ?? ch.guard;
  const clutch  = ch.clutch ?? ch.critical ?? ch.key;
  const jump    = ch.jump ?? ch.vertical ?? ch.leap;

  return [
    ["突破", drive],
    ["中距", mid],
    ["三分", three],
    ["防守", defense],
    ["關鍵", clutch],
    ["彈跳", jump],
  ];
}

function getRarity(ch){
  return ch.rarity ?? ch.rank ?? ch.tier ?? "—";
}

function getRole(ch){
  return ch.role ?? ch.position ?? ch.type ?? "";
}

function getSkillName(ch){
  if (ch.skill && ch.skill.name) return ch.skill.name;
  return ch.skillName ?? "";
}

function getDesc(ch){
  return ch.desc ?? ch.description ?? ch.bio ?? "";
}

function renderCodex(){
  const grid = document.getElementById("codexGrid");
  if (!grid) return;

  const qEl = document.getElementById("codexSearch");
  const sortEl = document.getElementById("codexSort");

  const q = (qEl ? qEl.value : "").trim().toLowerCase();
  const sortKey = sortEl ? sortEl.value : "name";

  let list = getCharacterList().slice();

  // filter
  if (q){
    list = list.filter(ch => {
      const name = (ch.name || "").toLowerCase();
      const role = (getRole(ch) || "").toLowerCase();
      const rarity = (getRarity(ch) || "").toLowerCase();
      return name.includes(q) || role.includes(q) || rarity.includes(q);
    });
  }

  // sort
  list.sort((a,b)=>{
    if (sortKey === "rarity"){
      return String(getRarity(a)).localeCompare(String(getRarity(b)));
    }
    if (sortKey === "role"){
      return String(getRole(a)).localeCompare(String(getRole(b)));
    }
    return String(a.name||"").localeCompare(String(b.name||""));
  });

  // render
  grid.innerHTML = list.map(ch=>{
    const name = safeText(ch.name);
    const rarity = safeText(getRarity(ch));
    const role = safeText(getRole(ch), "");
    const skill = safeText(getSkillName(ch), "");
    const line = [role, skill].filter(Boolean).join(" · ");

    return `
      <div class="card" data-id="${safeText(ch.id, name)}">
        <div class="cardTop">
          <div class="cardName">${name}</div>
          <div class="badge">${rarity}</div>
        </div>
        <div class="cardSub">${line || "（點開查看能力值）"}</div>
      </div>
    `;
  }).join("");

  // click handlers
  const cards = grid.querySelectorAll(".card");
  cards.forEach(card=>{
    card.addEventListener("click", ()=>{
      const id = card.getAttribute("data-id");
      const target = list.find(ch => String(ch.id ?? ch.name) === String(id)) || null;
      if (target) openCodexModal(target);
    });
  });
}

function openCodexModal(ch){
  const modal = document.getElementById("codexModal");
  const title = document.getElementById("codexModalTitle");
  const tags = document.getElementById("codexTags");
  const stats = document.getElementById("codexStats");
  const desc = document.getElementById("codexDesc");

  if (!modal || !title || !tags || !stats || !desc) return;

  title.textContent = safeText(ch.name);

  const tagItems = [];
  const role = getRole(ch); if (role) tagItems.push(role);
  const rarity = getRarity(ch); if (rarity) tagItems.push(rarity);
  const skill = getSkillName(ch); if (skill) tagItems.push("技能：" + skill);

  tags.innerHTML = tagItems.map(t=>`<div class="pill">${t}</div>`).join("");

  const s = buildStats(ch);
  stats.innerHTML = s.map(([k,v])=>`
    <div class="stat">
      <div class="k">${k}</div>
      <div class="v">${safeText(v)}</div>
    </div>
  `).join("");

  desc.textContent = getDesc(ch) || "（暫無描述）";

  modal.classList.remove("hidden");
}

function closeCodexModal(){
  const modal = document.getElementById("codexModal");
  if (modal) modal.classList.add("hidden");
}

function bindCodexUI(){
  const qEl = document.getElementById("codexSearch");
  const sortEl = document.getElementById("codexSort");
  const closeBtn = document.getElementById("codexModalClose");
  const modal = document.getElementById("codexModal");

  if (qEl) qEl.addEventListener("input", renderCodex);
  if (sortEl) sortEl.addEventListener("change", renderCodex);
  if (closeBtn) closeBtn.addEventListener("click", closeCodexModal);
  if (modal){
    modal.addEventListener("click", (e)=>{
      if (e.target === modal) closeCodexModal();
    });
  }
}

// =========================
// 集中綁定：對戰操作按鈕
// =========================
function bindActionButtons() {

  const actionMap = {
    btnDrive: "DRIVE",
    btnMid: "MID",
    btnThree: "THREE"
  };

  // 投籃 / 突破
  for (const id in actionMap) {
    const el = $(id);
    if (!el) continue;

    el.addEventListener("click", () => {
      onPlayerPick(actionMap[id], false);
    });
  }

  // 技能
  const skillBtn = $("btnSkill");
  if (skillBtn) {
    skillBtn.addEventListener("click", () => {
      if (!canPlayerUseSkill()) return;

      pendingSkillUse = true;
      logLine(`<div><b>🔥 玩家啟動技能：</b>${playerChar.skill.name}</div>`);
      updateSkillButton();

      // 綠間特例
      if (
        awaitingChoice &&
        possession === "P" &&
        playerChar.id === "midorima"
      ) {
        stopClock();
        onPlayerPick("THREE", false);
      }
    });
  }
}
function initApp() {
// ✅ 首頁：開始單挑
$("btnGoBattle")?.addEventListener("click", () => {
  if (typeof showBattle === "function") showBattle();

  // 進到對戰畫面後，停在「選角狀態」
  if (typeof restartToSelect === "function") restartToSelect();
  else if (typeof setStatus === "function") setStatus("請先選角，按「開始比賽」。");
});

// ✅ 首頁：球員圖鑑
$("btnGoCodex")?.addEventListener("click", () => {
  if (typeof showCodex === "function") showCodex();
  // 先不管渲染角色，至少畫面要切得過去
});

// ✅ 圖鑑：回首頁
$("codexBack")?.addEventListener("click", () => {
  if (typeof showHome === "function") showHome();
});

// ✅ 對戰：開始比賽
$("startBtn")?.addEventListener("click", () => {
  if (typeof startGame === "function") startGame();
});
// ✅ 對戰：再來一局（回到選角）
$("restartBtn")?.addEventListener("click", () => {
  if (typeof restartToSelect === "function") restartToSelect();
});
// ✅ 對戰：賽後數據
$("statsBtn")?.addEventListener("click", () => {
  if (typeof showStatsScreen === "function") showStatsScreen();
  if (typeof renderPostStats === "function") renderPostStats();
});
  // ✅ 賽後數據：回對戰
$("statsBack")?.addEventListener("click", () => {
  const stats  = $("screenStats");
  const battle = $("screenBattle");

  // 可能的上方資訊列 id（你有哪個就會被打開）
  const tops = [
    $("topBar"),
    $("top"),
    $("hudTop"),
    $("hud"),
    $("headerBar"),
  ].filter(Boolean);

  if (stats) stats.classList.add("hidden");
  if (battle) battle.classList.remove("hidden");

  // ✅ 確保上面那條回來
 tops.forEach(el => {
  el.classList.remove("hidden");
  el.style.display = "";
});
  });
// ✅ 對戰：回首頁
$("homeBtn")?.addEventListener("click", () => {
  if (typeof stopClock === "function") stopClock();
  if (typeof showHome === "function") showHome();
});

// ✅ 可選：清 Log（如果你有 clearLog 這顆按鈕）
$("clearLog")?.addEventListener("click", () => {
  const log = $("log");
  if (log) log.innerHTML = "";
});

  // ✅ 回首頁（注意：HTML 是 homeBtn）
  $("homeBtn")?.addEventListener("click", () => {
    if (typeof stopClock === "function") stopClock();
    showHome();
  });

  // ✅ 可選：清 Log
  $("clearLog")?.addEventListener("click", () => {
    const log = $("log");
    if (log) log.innerHTML = "";
  });

  // ✅ 初始化 UI（有就做，沒有也不會炸）
  if (typeof fillSelectors === "function") fillSelectors();
  if (typeof enableActionButtons === "function") enableActionButtons(false);
  if ($("btnSkill")) $("btnSkill").disabled = true;
  // ✅ 綁定對戰操作按鈕（突破 / 中距 / 三分 / 技能）
  bindActionButtons();
  if (typeof updateHeader === "function") updateHeader();
  if (typeof updateScoreUI === "function") updateScoreUI();
  if (typeof setStatus === "function") setStatus("按首頁的「開始單挑」。");

  // ✅ 一開始停在首頁
  showHome();
  
  setupCodexUI();
  renderCodex();
}

  
// =========================
// CODEX（球員圖鑑）Render + 搜尋 + 排序 + Modal
// 不用 $，全部用 document.getElementById
// =========================

// 盡可能自動抓到你的角色陣列
function getCodexCharacters(){
  const candidates = [
    window.CHARACTERS,
    window.characters,
    window.PLAYERS,
    window.players
  ];
  for (const arr of candidates){
    if (Array.isArray(arr) && arr.length) return arr;
  }
  // 真的都沒有：回空陣列（畫面就會是空的）
  return [];
}

// 取能力值（欄位名稱不一致也能吃）
function getStat(ch, key){
  const map = {
    name: ["name", "title", "displayName"],
    drive: ["drive", "dribble", "breakthrough"],
    two: ["two", "mid", "midrange", "twoPt"],
    three: ["three", "threePt", "threep"],
    defense: ["defense", "def", "guard"],
    jump: ["jump", "vertical", "leap"],
    clutch: ["clutch", "critical", "key"],
    desc: ["desc", "description", "bio", "story"],
    tags: ["tags", "tag", "roles", "role"]
  };

  const keys = map[key] || [key];

  // 先找 ch[key]
  for (const k of keys){
    if (ch && ch[k] !== undefined && ch[k] !== null) return ch[k];
  }

  // 再找 ch.stats[key]（你現在的資料就是放這裡）
  if (ch && ch.stats){
    for (const k of keys){
      if (ch.stats[k] !== undefined && ch.stats[k] !== null) return ch.stats[k];
    }
  }

  return undefined;
}

function num(v, fallback = 0){
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function safeText(v, fallback="—"){
  if (v === 0) return "0";
  if (v === undefined || v === null || v === "") return fallback;
  return String(v);
}

// 計算角色能力總和（原始數值）
function calcTotalStats(ch){
  return (
    num(getStat(ch, "drive")) +
    num(getStat(ch, "two")) +
    num(getStat(ch, "three")) +
    num(getStat(ch, "defense")) +
    num(getStat(ch, "jump")) +
    num(getStat(ch, "clutch"))
  );
}

// 建卡片 DOM
function createCodexCard(ch){
  const card = document.createElement("button");
  card.type = "button";
  card.className = "codexCard"; // 你可在 CSS 美化這個 class
  const name = safeText(getStat(ch, "name"), "未命名");

  const drive = num(getStat(ch, "drive"));
  const two = num(getStat(ch, "two"));
  const three = num(getStat(ch, "three"));
  const defense = num(getStat(ch, "defense"));
  const total = calcTotalStats(ch);
  
  card.innerHTML = `
  <div class="codexCardName">${name}</div>

  <div class="codexMiniStats">
    <span>突 ${drive}</span>
    <span>中 ${two}</span>
    <span>三 ${three}</span>
    <span>防 ${defense}</span>
   </div>

   <div class="codexTotal">
    總能力：${total}
   </div>
  `;

  card.addEventListener("click", () => openCodexModal(ch));
  return card;
}

function renderCodex(){
  const grid = document.getElementById("codexGrid");
  if (!grid) return;

  const list = getCodexCharacters().slice(); // copy
  const q = (document.getElementById("codexSearch")?.value || "").trim().toLowerCase();
  const sortKey = document.getElementById("codexSort")?.value || "name";

  // 搜尋（用 name）
  const filtered = list.filter(ch => {
    const name = safeText(getStat(ch, "name"), "").toLowerCase();
    return !q || name.includes(q);
  });

  // 排序
  filtered.sort((a, b) => {
    if (sortKey === "name"){
      const an = safeText(getStat(a, "name"), "");
      const bn = safeText(getStat(b, "name"), "");
      return an.localeCompare(bn, "zh-Hant");
    }
    // 其他都走數值排序（大到小）
    return num(getStat(b, sortKey)) - num(getStat(a, sortKey));
  });

  // 清空 + 塞卡片
  grid.innerHTML = "";

  if (filtered.length === 0){
    grid.innerHTML = `<div style="opacity:.7; padding:12px;">找不到角色（或角色資料尚未載入）</div>`;
    return;
  }

  for (const ch of filtered){
    grid.appendChild(createCodexCard(ch));
  }
}

// Modal（詳細）
function openCodexModal(ch){
  const modal = document.getElementById("codexModal");
  if (!modal) return;

  document.getElementById("codexModalTitle").textContent =
    safeText(getStat(ch, "name"), "角色");

  // tags
  const tagsEl = document.getElementById("codexTags");
  if (tagsEl){
    const tags = getStat(ch, "tags");
    const arr = Array.isArray(tags) ? tags : (tags ? [tags] : []);
    tagsEl.innerHTML = arr.map(t => `<span class="pill">${safeText(t)}</span>`).join("");
  }

  // stats
  const statsEl = document.getElementById("codexStats");
  if (statsEl){
    const rows = [
      ["突破", num(getStat(ch, "drive"))],
      ["中距", num(getStat(ch, "two"))],
      ["三分", num(getStat(ch, "three"))],
      ["防守", num(getStat(ch, "defense"))],
      ["彈跳", num(getStat(ch, "jump"))],
      ["關鍵", num(getStat(ch, "clutch"))],
    ];
    statsEl.innerHTML = rows.map(([k,v]) => `
      <div class="statItem">
        <div class="statK">${k}</div>
        <div class="statV">${v}</div>
      </div>
    `).join("");
  }

// desc + skill
const descEl = document.getElementById("codexDesc");
if (descEl){
  let text = "";

  // 角色描述（如果你之後有）
  const baseDesc = getStat(ch, "desc");
  if (baseDesc){
    text += baseDesc + "\n\n";
  }

  // 技能描述（你現在要的）
  if (ch.skill){
    text += `技能：${safeText(ch.skill.name)}\n`;
    text += safeText(ch.skill.desc);
  }

  if (!text) text = "(尚無描述)";
  descEl.textContent = text;
}

  modal.classList.remove("hidden");
}

function closeCodexModal(){
  const modal = document.getElementById("codexModal");
  if (modal) modal.classList.add("hidden");
}

// 綁定圖鑑 UI（只要跑一次）
function setupCodexUI(){
  document.getElementById("codexSearch")?.addEventListener("input", renderCodex);
  document.getElementById("codexSort")?.addEventListener("change", renderCodex);

  document.getElementById("codexModalClose")?.addEventListener("click", closeCodexModal);

  // 點背景關閉（可選）
  document.getElementById("codexModal")?.addEventListener("click", (e) => {
    if (e.target && e.target.id === "codexModal") closeCodexModal();
  });
}

function showStatsScreen(){
  const home = document.getElementById("screenHome");
  const battle = document.getElementById("screenBattle");
  const codex = document.getElementById("screenCodex");
  const stats = document.getElementById("screenStats");
  const top = document.getElementById("topBar");

  if (home) home.classList.add("hidden");
  if (battle) battle.classList.add("hidden");
  if (codex) codex.classList.add("hidden");
  if (stats) stats.classList.remove("hidden");
  if (top) top.classList.add("hidden"); // 賽後不用回合條
}

function showPostGameStats(){
  showStatsScreen();
  renderPostStats(); // 之後我們會寫這個
}

// ✅ 入口：保證 initApp 只會跑一次（手機 CodePen 也穩）
(function boot(){
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp, { once: true });
  } else {
    initApp();
  }
})();

// ================================
// ⭐ Ranked System（純邏輯，獨立模式）
// ================================

// 段位定義
const TIERS = [
  // 青銅維持：Ⅲ → Ⅱ → Ⅰ（3階），3星滿
  { name: "青銅", levels: ["Ⅲ", "Ⅱ", "Ⅰ"], stars: 3, protect: true },
  // 從白銀開始：Ⅴ → Ⅳ → Ⅲ → Ⅱ → Ⅰ（5階）
  { name: "白銀", levels: ["Ⅳ", "Ⅲ", "Ⅱ", "Ⅰ"], stars: 4 },
  { name: "黃金", levels: ["Ⅳ", "Ⅲ", "Ⅱ", "Ⅰ"], stars: 5 },
  { name: "鉑金", levels: ["Ⅴ", "Ⅳ", "Ⅲ", "Ⅱ", "Ⅰ"], stars: 5 },
  { name: "鑽石", levels: ["Ⅴ", "Ⅳ", "Ⅲ", "Ⅱ", "Ⅰ"], stars: 5 },
  { name: "奇蹟", levels: ["Ⅴ", "Ⅳ", "Ⅲ", "Ⅱ", "Ⅰ"], stars: 5 },
  // 王者
  { name: "王者", levels: [], stars: Infinity }
];

// 排位狀態（初始）
let rankState = {
  tier: 0,   // 0 = 青銅
  level: 0,  // 青銅Ⅲ
  stars: 1
};
let masterStars = 0; // 王者星（不封頂，顯示用）

// 取得目前段位
function currentTier() {
  return TIERS[rankState.tier];
}

// 是否王者
function isMaster() {
  return currentTier().name === "王者";
}

// 滿星數
function maxStars() {
  return currentTier().stars;
}

// 顯示文字
function rankLabel() {
  if (isMaster()) return `王者 ⭐${masterStars}`;
  return `${currentTier().name} ${currentTier().levels[rankState.level]} ⭐${rankState.stars}`;
}

// ⭐ 核心：套用一場勝負
function applyRankResult(win) {

  // ===== 勝利 =====
  if (win) {
    if (isMaster()) {
       masterStars++; // ✅ 王者勝利加星（不封頂）
       return logResult("王者勝利");
     }

    rankState.stars++;

    // 滿星後再贏 → 升階/升段（升上去後起始星=1）
    if (rankState.stars > maxStars()) {

      // 先升「同段位」的階級：往更高階走（levels 陣列尾端是最高：Ⅰ）
      if (rankState.level < currentTier().levels.length - 1) {
        rankState.level += 1;  // 升一階
        rankState.stars = 1;   // ✅ 你要的：升階後初始星=1
        return logResult("升階");
      }

      // 已經在該段位最高階（Ⅰ），再升就升段
      rankState.tier += 1;

      // 進王者
      if (rankState.tier >= TIERS.length - 1) {
        rankState = { tier: TIERS.length - 1, level: 0, stars: 0 };
             masterStars = Math.max(masterStars, 1); // ✅ 王者起始顯示 1 星
             return logResult("晉升【王者】");
      }

      // 升段後到下一段位最低階（Ⅴ 或 青銅Ⅲ）
      rankState.level = 0;
      rankState.stars = 1;     // ✅ 你要的：升段後初始星=1
      return logResult("升段");
    }

    return logResult("勝利");
  }

  // ===== 失敗 =====

  // 王者輸 → 掉回奇蹟Ⅰ 4 星
   if (isMaster()) {
  masterStars = Math.max(0, masterStars - 1); // ✅ 輸了先扣1顆（你要顯示就要有變化）

  const miracle = TIERS.findIndex(t => t.name === "奇蹟");
  rankState = {
    tier: miracle,
    level: TIERS[miracle].levels.length - 1, // 奇蹟Ⅰ
    stars: TIERS[miracle].stars - 1          // 4星
  };

  // 你也可以選擇：掉回奇蹟後把 masterStars 清零（看你要不要）
  // masterStars = 0;

  return logResult("王者掉回奇蹟");
}



  // 有星先扣星
   if (rankState.stars > 0) {
     rankState.stars--;
     return logResult("失敗");
   }

  // 青銅Ⅲ 新手保護（最低保底）
   if (rankState.tier === 0 && currentTier().protect && rankState.level === 0) {
   return logResult("失敗（新手保護）");
  }

  // 0 星再輸 → 掉階（往更低階走）
   rankState.level--;
   rankState.stars = maxStars() - 1;

  // 掉段：如果已經在該段位最低階，再掉就掉到上一段位
   if (rankState.level < 0) {
   rankState.tier--;

  // 再保護一次：不可能低於青銅Ⅲ
  if (rankState.tier < 0) {
    rankState.tier = 0;
    rankState.level = 0;
    rankState.stars = 0;
    return logResult("失敗（新手保護）");
  }

  // 掉到上一段位的最高階（例如 黃金Ⅰ）
  rankState.level = TIERS[rankState.tier].levels.length - 1;
  rankState.stars = TIERS[rankState.tier].stars - 1;
 }

 return logResult("掉階");

 }

// ===== Console 輔助用 =====
function win() {
  applyRankResult(true);
}
function lose() {
  applyRankResult(false);
}
function show() {
  console.log(rankLabel(), rankState);
}

// 顯示結果
function logResult(msg) {
  console.log(`【${msg}】→ ${rankLabel()}`);
}

// ================================
// ⭐ Ranked UI Binding（畫面顯示）
// ================================

function updateRankUI() {
  const el = document.getElementById("rank-display");
  if (!el) return;
  el.textContent = rankLabel();
}

// 初始化顯示
updateRankUI();

let currentMode = "casual"; // 預設一般模式（你也可以改成 "ranked"）
function setModeRanked() {
  currentMode = "ranked";
  refreshModeUI();
}

function setModeCasual() {
  currentMode = "casual";
  refreshModeUI();
}

// 更新左上角按鈕狀態 + 右上角排位面板文字
function refreshModeUI() {
  const btnCasual = document.getElementById("btn-casual");
  const btnRanked = document.getElementById("btn-ranked");
  if (btnCasual && btnRanked) {
    btnCasual.classList.toggle("active", currentMode === "casual");
    btnRanked.classList.toggle("active", currentMode === "ranked");
  }

  // 右上角排位面板：一般模式不計分，但仍顯示目前段位
  const title = document.getElementById("rank-title");
  if (title) {
    title.textContent = currentMode === "ranked" ? "排位賽（計分）" : "一般（不計分）";
  }

  // 刷新段位顯示（你已經有 updateRankUI）
  if (typeof updateRankUI === "function") updateRankUI();
}

// 初始化 UI
refreshModeUI();

window.setModeCasual = setModeCasual;
window.setModeRanked = setModeRanked;
