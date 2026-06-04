const presets = {
  banner: [
    ["Leaderboard", 728, 90],
    ["Billboard", 970, 250],
    ["Medium Rect", 300, 250],
    ["Half Page", 300, 600],
    ["Mobile Banner", 320, 50],
    ["Square Post", 1080, 1080],
    ["Story / Reel", 1080, 1920],
  ],
  social: [
    ["Square Post", 1080, 1080],
    ["Story / Reel", 1080, 1920],
    ["X Card", 1200, 675],
    ["LinkedIn", 1200, 627],
    ["Telegram", 1280, 720],
  ],
};

const copyByLanguage = {
  EN: ["Gold, Forex & Crypto in One App", "Trade global markets with fast execution", "Trade Now"],
  ZH: ["黄金、外汇与加密货币，一站交易", "一个 App 覆盖全球市场", "立即交易"],
  JA: ["金・FX・暗号資産をひとつのアプリで", "世界の市場へすばやくアクセス", "今すぐ取引"],
  KO: ["금, 외환, 크립토를 하나의 앱에서", "글로벌 시장을 빠르게 거래하세요", "거래하기"],
  DE: ["Gold, Forex & Krypto in einer App", "Globale Märkte schnell handeln", "Jetzt traden"],
  FR: ["Or, Forex et Crypto dans une seule app", "Accédez vite aux marchés mondiaux", "Trader"],
  ES: ["Oro, Forex y Cripto en una App", "Opera mercados globales al instante", "Opera ahora"],
  PT: ["Ouro, Forex e Cripto em um App", "Negocie mercados globais com rapidez", "Negociar"],
  RU: ["Золото, Форекс и крипто в одном приложении", "Торгуйте на мировых рынках быстрее", "Торговать"],
  AR: ["الذهب والفوركس والعملات الرقمية في تطبيق واحد", "تداول الأسواق العالمية بسرعة", "تداول الآن"],
  TH: ["ทองคำ ฟอเร็กซ์ และคริปโตในแอปเดียว", "เทรดตลาดโลกได้อย่างรวดเร็ว", "เทรดเลย"],
  VI: ["Vàng, Forex & Crypto trong một ứng dụng", "Giao dịch thị trường toàn cầu nhanh chóng", "Giao dịch"],
};

const languageLabels = {
  EN: "英语",
  ZH: "中文",
  JA: "日语",
  KO: "韩语",
  DE: "德语",
  FR: "法语",
  ES: "西语",
  PT: "葡语",
  RU: "俄语",
  AR: "阿语",
  TH: "泰语",
  VI: "越语",
};

const exactTranslations = {
  "Gold, Forex & Crypto in One App": {
    ZH: "黄金、外汇与加密货币，一站交易",
    JA: "金・FX・暗号資産をひとつのアプリで",
    KO: "금, 외환, 크립토를 하나의 앱에서",
    DE: "Gold, Forex & Krypto in einer App",
    FR: "Or, Forex et Crypto dans une seule app",
    ES: "Oro, Forex y Cripto en una App",
    PT: "Ouro, Forex e Cripto em um App",
    RU: "Золото, Форекс и крипто в одном приложении",
    AR: "الذهب والفوركس والعملات الرقمية في تطبيق واحد",
    TH: "ทองคำ ฟอเร็กซ์ และคริปโตในแอปเดียว",
    VI: "Vàng, Forex & Crypto trong một ứng dụng",
  },
  "Trade global markets with fast execution": {
    ZH: "一个 App 覆盖全球市场",
    JA: "世界の市場へすばやくアクセス",
    KO: "글로벌 시장을 빠르게 거래하세요",
    DE: "Globale Märkte schnell handeln",
    FR: "Accédez vite aux marchés mondiaux",
    ES: "Opera mercados globales al instante",
    PT: "Negocie mercados globais com rapidez",
    RU: "Торгуйте на мировых рынках быстрее",
    AR: "تداول الأسواق العالمية بسرعة",
    TH: "เทรดตลาดโลกได้อย่างรวดเร็ว",
    VI: "Giao dịch thị trường toàn cầu nhanh chóng",
  },
  "Trade Now": {
    ZH: "立即交易",
    JA: "今すぐ取引",
    KO: "거래하기",
    DE: "Jetzt traden",
    FR: "Trader",
    ES: "Opera ahora",
    PT: "Negociar",
    RU: "Торговать",
    AR: "تداول الآن",
    TH: "เทรดเลย",
    VI: "Giao dịch",
  },
};

const glossary = {
  ZH: { Gold: "黄金", Forex: "外汇", Crypto: "加密货币", App: "App", Trade: "交易", Now: "立即", global: "全球", markets: "市场", fast: "快速", execution: "执行" },
  JA: { Gold: "金", Forex: "FX", Crypto: "暗号資産", App: "アプリ", Trade: "取引", Now: "今すぐ", global: "世界", markets: "市場", fast: "すばやい", execution: "実行" },
  KO: { Gold: "금", Forex: "외환", Crypto: "크립토", App: "앱", Trade: "거래", Now: "지금", global: "글로벌", markets: "시장", fast: "빠른", execution: "실행" },
  DE: { Gold: "Gold", Forex: "Forex", Crypto: "Krypto", App: "App", Trade: "Traden", Now: "Jetzt", global: "globale", markets: "Märkte", fast: "schnelle", execution: "Ausführung" },
  FR: { Gold: "Or", Forex: "Forex", Crypto: "Crypto", App: "app", Trade: "Trader", Now: "maintenant", global: "mondiaux", markets: "marchés", fast: "rapide", execution: "exécution" },
  ES: { Gold: "Oro", Forex: "Forex", Crypto: "Cripto", App: "App", Trade: "Opera", Now: "ahora", global: "globales", markets: "mercados", fast: "rápida", execution: "ejecución" },
  PT: { Gold: "Ouro", Forex: "Forex", Crypto: "Cripto", App: "App", Trade: "Negociar", Now: "agora", global: "globais", markets: "mercados", fast: "rápida", execution: "execução" },
  RU: { Gold: "Золото", Forex: "Форекс", Crypto: "крипто", App: "приложение", Trade: "Торговать", Now: "сейчас", global: "мировые", markets: "рынки", fast: "быстрое", execution: "исполнение" },
  AR: { Gold: "الذهب", Forex: "الفوركس", Crypto: "العملات الرقمية", App: "تطبيق", Trade: "تداول", Now: "الآن", global: "العالمية", markets: "الأسواق", fast: "سريع", execution: "تنفيذ" },
  TH: { Gold: "ทองคำ", Forex: "ฟอเร็กซ์", Crypto: "คริปโต", App: "แอป", Trade: "เทรด", Now: "ตอนนี้", global: "ทั่วโลก", markets: "ตลาด", fast: "รวดเร็ว", execution: "การดำเนินการ" },
  VI: { Gold: "Vàng", Forex: "Forex", Crypto: "Crypto", App: "ứng dụng", Trade: "Giao dịch", Now: "ngay", global: "toàn cầu", markets: "thị trường", fast: "nhanh", execution: "khớp lệnh" },
};

const elementNames = {
  logo: "品牌标识",
  headline: "标题文本框",
  subhead: "副标题文本框",
  cta: "按钮",
  product: "产品视觉",
  metric: "数据模块",
  card: "社媒背景卡片",
  image: "图片素材",
  customText: "自定义文本",
};

const state = {
  mode: "banner",
  presetIndex: 1,
  language: "EN",
  fit: true,
  headline: copyByLanguage.EN[0],
  subhead: copyByLanguage.EN[1],
  cta: copyByLanguage.EN[2],
  accent: "#30e7d0",
  background: "#101319",
  showMetrics: true,
  selectedId: null,
  elements: [],
  imageCache: {},
  assetLibrary: JSON.parse(localStorage.getItem("creativeOpsAssetLibrary") || "[]"),
  elementCounter: 0,
  drag: null,
  textEdit: null,
  lastTemplateMessage: "",
  sourceCopy: JSON.parse(localStorage.getItem("creativeOpsSourceCopy") || "null"),
  autoTranslate: JSON.parse(localStorage.getItem("creativeOpsAutoTranslate") || "true"),
  templateLibrary: JSON.parse(localStorage.getItem("creativeOpsTemplateLibrary") || "[]"),
  activeTemplateId: localStorage.getItem("creativeOpsActiveTemplateId") || "",
  savedTemplates: JSON.parse(localStorage.getItem("creativeOpsTemplates") || "{}"),
};

const els = {
  canvas: document.querySelector("#previewCanvas"),
  presetList: document.querySelector("#presetList"),
  languageGrid: document.querySelector("#languageGrid"),
  headline: document.querySelector("#headlineInput"),
  subhead: document.querySelector("#subheadInput"),
  cta: document.querySelector("#ctaInput"),
  modeTitle: document.querySelector("#modeTitle"),
  modeMeta: document.querySelector("#modeMeta"),
  assetCount: document.querySelector("#assetCount"),
  selectedSpec: document.querySelector("#selectedSpec"),
  activeLanguage: document.querySelector("#activeLanguage"),
  accent: document.querySelector("#accentInput"),
  background: document.querySelector("#backgroundInput"),
  showMetrics: document.querySelector("#showMetricsInput"),
  selectedElement: document.querySelector("#selectedElement"),
  templateStatus: document.querySelector("#templateStatus"),
  elementX: document.querySelector("#elementXInput"),
  elementY: document.querySelector("#elementYInput"),
  elementW: document.querySelector("#elementWInput"),
  elementH: document.querySelector("#elementHInput"),
  elementFont: document.querySelector("#elementFontInput"),
  selectedContent: document.querySelector("#selectedContentInput"),
  stageWrap: document.querySelector("#stageWrap"),
  textEditor: document.querySelector("#canvasTextEditor"),
  imageUpload: document.querySelector("#imageUploadInput"),
  assetLibrary: document.querySelector("#assetLibrary"),
  deleteElement: document.querySelector("#deleteElement"),
  templateName: document.querySelector("#templateNameInput"),
  templateSelect: document.querySelector("#templateSelect"),
  saveAsTemplate: document.querySelector("#saveAsTemplate"),
  updateTemplate: document.querySelector("#updateTemplate"),
  applyTemplate: document.querySelector("#applyTemplate"),
  lockCopy: document.querySelector("#lockCopy"),
  autoTranslate: document.querySelector("#autoTranslateInput"),
};

const ctx = els.canvas.getContext("2d");

function activePreset() {
  return presets[state.mode][state.presetIndex] || presets[state.mode][0];
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function selectedElement() {
  return state.elements.find((item) => item.id === state.selectedId) || null;
}

function nextElementId(prefix) {
  state.elementCounter += 1;
  return `${prefix}-${Date.now().toString(36)}-${state.elementCounter}`;
}

function sourceCopyValues() {
  return {
    language: state.language,
    headline: state.headline,
    subhead: state.subhead,
    cta: state.cta,
  };
}

function persistCurrentCopyToLanguage() {
  copyByLanguage[state.language] = [state.headline, state.subhead, state.cta];
}

function editableTextValue(el) {
  if (!el) return "";
  if (el.type === "text" && el.role === "headline") return state.headline;
  if (el.type === "text" && el.role === "subhead") return state.subhead;
  if (el.type === "text") return el.text || "";
  if (el.type === "cta") return el.label || state.cta;
  return "";
}

function setEditableTextValue(el, value) {
  if (!el) return;
  if (el.type === "text" && el.role === "headline") state.headline = value;
  else if (el.type === "text" && el.role === "subhead") state.subhead = value;
  else if (el.type === "text") el.text = value;
  else if (el.type === "cta" && el.label) el.label = value;
  else if (el.type === "cta") state.cta = value;
  persistCurrentCopyToLanguage();
  syncInputs();
}

function isTextEditable(el) {
  return el?.type === "text" || el?.type === "cta";
}

function persistAssetLibrary() {
  localStorage.setItem("creativeOpsAssetLibrary", JSON.stringify(state.assetLibrary));
}

function autoTranslateText(text, targetLang) {
  if (!text) return text;
  const reverseMatch = Object.entries(exactTranslations).find(([, translations]) => (
    Object.values(translations).includes(text)
  ));
  if (reverseMatch) {
    const [english, translations] = reverseMatch;
    return targetLang === "EN" ? english : translations[targetLang] || english;
  }
  if (targetLang === "EN") return text;
  const exact = exactTranslations[text]?.[targetLang];
  if (exact) return exact;
  const terms = glossary[targetLang] || {};
  let translated = text;
  Object.entries(terms).forEach(([from, to]) => {
    translated = translated.replace(new RegExp(`\\b${from}\\b`, "gi"), to);
  });
  if (translated !== text) return translated;
  return `${text} · ${languageLabels[targetLang] || targetLang}`;
}

function translatedCopyFor(targetLang) {
  const source = state.sourceCopy || sourceCopyValues();
  if (targetLang === source.language) return [source.headline, source.subhead, source.cta];
  return [
    autoTranslateText(source.headline, targetLang),
    autoTranslateText(source.subhead, targetLang),
    autoTranslateText(source.cta, targetLang),
  ];
}

function lockCurrentCopy() {
  persistCurrentCopyToLanguage();
  state.sourceCopy = sourceCopyValues();
  localStorage.setItem("creativeOpsSourceCopy", JSON.stringify(state.sourceCopy));
  Object.keys(copyByLanguage).forEach((lang) => {
    copyByLanguage[lang] = translatedCopyFor(lang);
  });
  state.lastTemplateMessage = `已固定 ${state.language} 文案为翻译源`;
  syncInputs();
  renderCanvas();
}

function applyCopyForLanguage(lang) {
  if (state.autoTranslate && state.sourceCopy) {
    copyByLanguage[lang] = translatedCopyFor(lang);
  }
  const [headline, subhead, cta] = copyByLanguage[lang] || translatedCopyFor(lang);
  Object.assign(state, { headline, subhead, cta });
}

function persistTemplateLibrary() {
  localStorage.setItem("creativeOpsTemplateLibrary", JSON.stringify(state.templateLibrary));
  localStorage.setItem("creativeOpsActiveTemplateId", state.activeTemplateId || "");
}

function activeLibraryTemplate() {
  return state.templateLibrary.find((template) => (
    template.id === state.activeTemplateId && template.mode === state.mode
  )) || null;
}

function buildTemplatePayload(name, id = nextElementId("template")) {
  const [, width, height] = activePreset();
  return {
    id,
    name: name || "Untitled template",
    mode: state.mode,
    width,
    height,
    language: state.language,
    sourceCopy: clone(state.sourceCopy || sourceCopyValues()),
    copyByLanguage: clone(copyByLanguage),
    elements: clone(state.elements),
    assets: clone(state.assetLibrary),
    style: {
      accent: state.accent,
      background: state.background,
      showMetrics: state.showMetrics,
    },
    updatedAt: new Date().toISOString(),
  };
}

function renderTemplateSelect() {
  els.templateSelect.innerHTML = "";
  const empty = document.createElement("option");
  empty.value = "";
  empty.textContent = "选择已保存模板";
  els.templateSelect.append(empty);
  state.templateLibrary
    .filter((template) => template.mode === state.mode)
    .forEach((template) => {
      const option = document.createElement("option");
      option.value = template.id;
      option.textContent = `${template.name} · ${Math.round(template.width)}x${Math.round(template.height)}`;
      els.templateSelect.append(option);
    });
  els.templateSelect.value = state.activeTemplateId || "";
}

function saveTemplateToLibrary(asNew = false) {
  persistCurrentCopyToLanguage();
  const name = els.templateName.value.trim() || "Untitled template";
  const activeTemplate = state.templateLibrary.find((template) => template.id === state.activeTemplateId);
  const existingId = !asNew && activeTemplate?.mode === state.mode ? activeTemplate.id : "";
  const id = existingId || nextElementId("template");
  const payload = buildTemplatePayload(name, id);
  const index = state.templateLibrary.findIndex((template) => template.id === id);
  if (index >= 0) state.templateLibrary[index] = payload;
  else state.templateLibrary.unshift(payload);
  state.activeTemplateId = id;
  state.savedTemplates[state.mode] = {
    width: payload.width,
    height: payload.height,
    elements: clone(payload.elements),
    style: clone(payload.style),
  };
  localStorage.setItem("creativeOpsTemplates", JSON.stringify(state.savedTemplates));
  persistTemplateLibrary();
  renderTemplateSelect();
  state.lastTemplateMessage = `已保存模板：${payload.name}`;
  updateSelectedLabel();
}

function applyTemplateById(id) {
  const template = state.templateLibrary.find((item) => item.id === id);
  if (!template) return;
  state.mode = template.mode;
  state.activeTemplateId = template.id;
  state.sourceCopy = clone(template.sourceCopy || null);
  localStorage.setItem("creativeOpsSourceCopy", JSON.stringify(state.sourceCopy));
  Object.assign(copyByLanguage, clone(template.copyByLanguage || {}));
  if (template.assets) {
    state.assetLibrary = clone(template.assets);
    persistAssetLibrary();
  }
  Object.assign(state, {
    accent: template.style?.accent || state.accent,
    background: template.style?.background || state.background,
    showMetrics: template.style?.showMetrics ?? state.showMetrics,
  });
  const [, width, height] = activePreset();
  state.elements = adaptTemplate(template, width, height);
  state.savedTemplates[state.mode] = {
    width: template.width,
    height: template.height,
    elements: clone(template.elements),
    style: clone(template.style),
  };
  localStorage.setItem("creativeOpsTemplates", JSON.stringify(state.savedTemplates));
  state.selectedId = null;
  applyCopyForLanguage(state.language);
  els.templateName.value = template.name;
  document.documentElement.style.setProperty("--accent", state.accent);
  persistTemplateLibrary();
  syncModeTabs();
  syncInputs();
  render();
  state.lastTemplateMessage = `已调用模板：${template.name}`;
  updateSelectedLabel();
}

function syncModeTabs() {
  document.querySelectorAll(".mode-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
}

function defaultElements(mode, width, height) {
  if (mode === "social") {
    const pad = width * 0.07;
    return [
      { id: "card", type: "card", x: pad, y: pad, w: width - pad * 2, h: height - pad * 2 },
      { id: "headline", type: "text", role: "headline", x: pad * 1.55, y: pad * 1.45, w: width * 0.45, h: height * 0.2, font: width * 0.075, weight: 900, color: "#ffffff" },
      { id: "subhead", type: "text", role: "subhead", x: pad * 1.55, y: pad * 1.45 + width * 0.17, w: width * 0.42, h: height * 0.14, font: width * 0.026, weight: 500, color: "#b9c2d2" },
      { id: "metric", type: "metric", x: pad * 1.55, y: height - pad * 2.75, w: width * 0.26, h: height * 0.13, font: width * 0.095 },
      { id: "product", type: "product", x: width * 0.52, y: height * 0.25, w: width * 0.34, h: height * 0.5 },
      { id: "logo", type: "logo", x: width - pad * 2.7, y: pad * 1.25, w: pad * 1.55, h: 38 },
    ];
  }

  const pad = Math.max(18, width * 0.055);
  const isHorizontal = width / height > 2.2;
  const titleSize = Math.max(18, Math.min(width * 0.042, height * (isHorizontal ? 0.15 : 0.12)));
  return [
    { id: "logo", type: "logo", x: pad, y: pad, w: Math.max(112, width * 0.16), h: Math.max(24, height * 0.16) },
    { id: "headline", type: "text", role: "headline", x: pad, y: height < 130 ? pad + 34 : pad + height * 0.24, w: width * 0.44, h: height * 0.27, font: titleSize, weight: 800, color: "#ffffff" },
    { id: "subhead", type: "text", role: "subhead", x: pad, y: height * 0.56, w: width * 0.44, h: height * 0.16, font: Math.max(12, titleSize * 0.38), weight: 500, color: "#bac4d4" },
    { id: "cta", type: "cta", x: pad, y: height - pad - Math.max(34, height * 0.16), w: Math.max(96, Math.min(width * 0.22, 170)), h: Math.max(34, height * 0.16), font: Math.max(12, titleSize * 0.42) },
    { id: "product", type: "product", x: width * 0.67, y: height * 0.18, w: width * 0.2, h: height * 0.62 },
  ];
}

function fitElement(el, width, height) {
  const minW = el.type === "text" ? 44 : 22;
  const minH = el.type === "text" ? 24 : 20;
  el.w = clamp(el.w, minW, width);
  el.h = clamp(el.h, minH, height);
  el.x = clamp(el.x, 0, Math.max(0, width - el.w));
  el.y = clamp(el.y, 0, Math.max(0, height - el.h));
  if (el.type === "text" || el.type === "metric" || el.type === "cta") {
    el.font = clamp(el.font || 18, 8, Math.max(10, Math.min(width, height) * 0.45));
  }
}

function adaptTemplate(template, width, height) {
  const sx = width / template.width;
  const sy = height / template.height;
  const fontScale = Math.min(sx, sy);
  const elements = template.elements.map((el) => {
    const next = clone(el);
    next.x *= sx;
    next.y *= sy;
    next.w *= sx;
    next.h *= sy;
    if (next.font) next.font *= fontScale;
    fitElement(next, width, height);
    return next;
  });
  hydrateImages(elements);
  return elements;
}

function hydrateImages(elements = state.elements) {
  elements
    .filter((el) => (el.type === "image" || el.type === "logo") && el.src && !state.imageCache[el.id])
    .forEach((el) => {
      const img = new Image();
      img.onload = () => renderCanvas();
      img.src = el.src;
      state.imageCache[el.id] = img;
    });
}

function templateDescription(template) {
  const active = activeLibraryTemplate();
  if (active) return `当前模板：${active.name} · 基准 ${Math.round(active.width)} x ${Math.round(active.height)}`;
  return template ? `模板基准 ${Math.round(template.width)} x ${Math.round(template.height)}` : "未保存模板";
}

function ensureLayout() {
  const [, width, height] = activePreset();
  els.canvas.width = width;
  els.canvas.height = height;
  if (!state.elements.length) {
    const saved = state.savedTemplates[state.mode];
    state.elements = saved ? adaptTemplate(saved, width, height) : defaultElements(state.mode, width, height);
  }
  state.elements.forEach((el) => fitElement(el, width, height));
  hydrateImages();
}

function applyTemplateForCurrentSize() {
  const [, width, height] = activePreset();
  const saved = activeLibraryTemplate() || state.savedTemplates[state.mode];
  state.elements = saved ? adaptTemplate(saved, width, height) : defaultElements(state.mode, width, height);
  state.selectedId = null;
  state.lastTemplateMessage = saved
    ? `已按 ${Math.round(saved.width)} x ${Math.round(saved.height)} 模板适配到 ${width} x ${height}`
    : "当前模式还没有保存模板，已使用默认版式";
}

function saveTemplate() {
  const [, width, height] = activePreset();
  state.savedTemplates[state.mode] = {
    width,
    height,
    elements: clone(state.elements),
    style: {
      accent: state.accent,
      background: state.background,
      showMetrics: state.showMetrics,
    },
  };
  localStorage.setItem("creativeOpsTemplates", JSON.stringify(state.savedTemplates));
  state.lastTemplateMessage = `已保存 ${width} x ${height} 为${state.mode === "banner" ? "多语言 Banner" : "社媒"}模板`;
  updateSelectedLabel();
}

function addElement(kind, imageData = null) {
  const [, width, height] = activePreset();
  const base = Math.min(width, height);
  let element;
  if (kind === "text") {
    element = {
      id: nextElementId("text"),
      type: "text",
      role: "custom",
      text: "New text",
      x: width * 0.18,
      y: height * 0.18,
      w: width * 0.34,
      h: Math.max(42, height * 0.14),
      font: Math.max(16, base * 0.07),
      weight: 800,
      color: "#ffffff",
    };
  }
  if (kind === "cta") {
    element = {
      id: nextElementId("cta"),
      type: "cta",
      label: "Button",
      x: width * 0.18,
      y: height * 0.7,
      w: Math.max(96, width * 0.18),
      h: Math.max(34, height * 0.12),
      font: Math.max(12, base * 0.045),
    };
  }
  if (kind === "metric") {
    element = {
      id: nextElementId("metric"),
      type: "metric",
      x: width * 0.16,
      y: height * 0.62,
      w: width * 0.24,
      h: height * 0.16,
      font: Math.max(24, base * 0.11),
    };
  }
  if (kind === "product") {
    element = {
      id: nextElementId("product"),
      type: "product",
      x: width * 0.62,
      y: height * 0.24,
      w: width * 0.2,
      h: height * 0.46,
    };
  }
  if (kind === "image") {
    element = {
      id: nextElementId("image"),
      type: "image",
      x: width * 0.58,
      y: height * 0.2,
      w: width * 0.28,
      h: height * 0.48,
      src: imageData.src,
      fileName: imageData.name,
    };
  }
  if (!element) return;
  fitElement(element, width, height);
  state.elements.push(element);
  state.selectedId = element.id;
  if (element.type === "image") hydrateImages([element]);
  renderCanvas();
  return element;
}

function insertAssetAsImage(asset, point = null) {
  const element = addElement("image", { src: asset.src, name: asset.name });
  if (element && point) {
    element.x = point.x - element.w / 2;
    element.y = point.y - element.h / 2;
    const [, width, height] = activePreset();
    fitElement(element, width, height);
    renderCanvas();
  }
  state.lastTemplateMessage = `已插入素材：${asset.name}`;
  updateSelectedLabel();
}

function setLogoAsset(asset) {
  const [, width, height] = activePreset();
  let logo = state.elements.find((el) => el.type === "logo");
  if (!logo) {
    logo = {
      id: "logo",
      type: "logo",
      x: width * 0.05,
      y: height * 0.08,
      w: Math.max(110, width * 0.16),
      h: Math.max(34, height * 0.16),
    };
    state.elements.push(logo);
  }
  Object.assign(logo, {
    src: asset.src,
    fileName: asset.name,
    assetId: asset.id,
  });
  delete state.imageCache[logo.id];
  fitElement(logo, width, height);
  hydrateImages([logo]);
  state.selectedId = logo.id;
  state.lastTemplateMessage = `已设置 Logo：${asset.name}`;
  renderCanvas();
}

function renderAssetLibrary() {
  els.assetLibrary.innerHTML = "";
  if (!state.assetLibrary.length) {
    const empty = document.createElement("div");
    empty.className = "asset-empty";
    empty.textContent = "上传 Logo、产品图或其他素材后，可从这里插入画布或设为 Logo。";
    els.assetLibrary.append(empty);
    return;
  }
  state.assetLibrary.forEach((asset) => {
    const item = document.createElement("div");
    item.className = "asset-item";
    item.draggable = true;
    item.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", asset.id);
      event.dataTransfer.effectAllowed = "copy";
    });

    const img = document.createElement("img");
    img.className = "asset-thumb";
    img.src = asset.src;
    img.alt = asset.name;

    const meta = document.createElement("div");
    meta.className = "asset-meta";
    const name = document.createElement("div");
    name.className = "asset-name";
    name.textContent = asset.name;

    const actions = document.createElement("div");
    actions.className = "asset-actions";
    const insert = document.createElement("button");
    insert.type = "button";
    insert.textContent = "插入";
    insert.addEventListener("click", () => insertAssetAsImage(asset));
    const logo = document.createElement("button");
    logo.type = "button";
    logo.textContent = "设为 Logo";
    logo.addEventListener("click", () => setLogoAsset(asset));
    actions.append(insert, logo);
    meta.append(name, actions);
    item.append(img, meta);
    els.assetLibrary.append(item);
  });
}

function renderPresetList() {
  els.presetList.innerHTML = "";
  presets[state.mode].forEach(([name, width, height], index) => {
    const button = document.createElement("button");
    button.className = `preset${index === state.presetIndex ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `<span>${name}</span><small>${width} x ${height}</small>`;
    button.addEventListener("click", () => {
      state.presetIndex = index;
      applyTemplateForCurrentSize();
      render();
    });
    els.presetList.append(button);
  });
}

function renderLanguages() {
  els.languageGrid.innerHTML = "";
  Object.keys(copyByLanguage).forEach((code) => {
    const button = document.createElement("button");
    button.className = `language${code === state.language ? " is-active" : ""}`;
    button.type = "button";
    button.textContent = languageLabels[code] || code;
    button.addEventListener("click", () => {
      persistCurrentCopyToLanguage();
      state.language = code;
      applyCopyForLanguage(code);
      syncInputs();
      renderCanvas();
    });
    els.languageGrid.append(button);
  });
}

function syncInputs() {
  els.headline.value = state.headline;
  els.subhead.value = state.subhead;
  els.cta.value = state.cta;
  els.accent.value = state.accent;
  els.background.value = state.background;
  els.showMetrics.checked = state.showMetrics;
  els.autoTranslate.checked = state.autoTranslate;
}

function roundRect(x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(text, x, y, maxWidth, lineHeight, font, maxHeight = Infinity) {
  ctx.font = font;
  const chars = Array.from(text);
  let line = "";
  const lines = [];
  chars.forEach((char) => {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = test;
    }
  });
  lines.push(line);
  const maxLines = Math.max(1, Math.floor(maxHeight / lineHeight));
  lines.slice(0, maxLines).forEach((item, index) => ctx.fillText(item, x, y + index * lineHeight));
  return Math.min(lines.length, maxLines) * lineHeight;
}

function drawTextElement(el) {
  const text = el.role === "headline" ? state.headline : el.role === "subhead" ? state.subhead : el.text || "New text";
  const fontSize = el.font;
  const lineHeightRatio = el.role === "headline" ? 1.06 : 1.32;
  ctx.save();
  ctx.beginPath();
  ctx.rect(el.x, el.y, el.w, el.h);
  ctx.clip();
  ctx.textBaseline = "top";
  ctx.fillStyle = el.color || "#ffffff";
  wrapText(text, el.x, el.y, el.w, fontSize * lineHeightRatio, `${el.weight || 700} ${fontSize}px Arial`, el.h);
  ctx.restore();
}

function drawLogo(el) {
  if (el.src) {
    drawImageElement(el, "contain");
    return;
  }
  const mark = Math.min(el.h, el.w * 0.32);
  ctx.fillStyle = state.accent;
  roundRect(el.x, el.y + (el.h - mark) / 2, mark, mark, 5);
  ctx.fill();
  ctx.fillStyle = "#071012";
  ctx.font = `800 ${mark * 0.55}px Arial`;
  ctx.textBaseline = "middle";
  ctx.fillText("A", el.x + mark * 0.3, el.y + el.h / 2);
  ctx.fillStyle = "#f8fbff";
  ctx.font = `800 ${Math.max(13, mark * 0.48)}px Arial`;
  ctx.fillText("Aster", el.x + mark + mark * 0.34, el.y + el.h / 2);
}

function drawCta(el) {
  ctx.fillStyle = state.accent;
  roundRect(el.x, el.y, el.w, el.h, Math.min(18, el.h / 2));
  ctx.fill();
  ctx.fillStyle = "#071012";
  ctx.font = `800 ${Math.max(10, el.font || Math.min(el.h * 0.36, el.w * 0.14))}px Arial`;
  ctx.textBaseline = "middle";
  ctx.fillText(el.label || state.cta, el.x + el.h * 0.45, el.y + el.h / 2);
}

function drawProduct(el) {
  const size = Math.min(el.w, el.h);
  const cx = el.x + el.w / 2;
  const cy = el.y + el.h / 2;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(-0.18);
  ctx.fillStyle = "#d8c289";
  roundRect(-size * 0.22, -size * 0.52, size * 0.34, size, 8);
  ctx.fill();
  ctx.fillStyle = "#f5e2a4";
  roundRect(size * 0.03, -size * 0.48, size * 0.26, size * 0.94, 8);
  ctx.fill();
  ctx.strokeStyle = state.accent;
  ctx.lineWidth = Math.max(4, size * 0.035);
  ctx.beginPath();
  ctx.ellipse(0, 0, size * 0.52, size * 0.14, 0.55, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawMetric(el) {
  if (!state.showMetrics) return;
  ctx.fillStyle = state.accent;
  ctx.font = `900 ${Math.max(16, el.font)}px Arial`;
  ctx.textBaseline = "top";
  ctx.fillText("169%", el.x, el.y);
  ctx.fillStyle = "#dce4ef";
  ctx.font = `700 ${Math.max(10, el.font * 0.25)}px Arial`;
  ctx.fillText("Proof of Reserves", el.x, el.y + el.font * 0.82);
}

function drawCard(el) {
  ctx.fillStyle = state.background;
  roundRect(el.x, el.y, el.w, el.h, 8);
  ctx.fill();
}

function drawImageElement(el, fit = "cover") {
  const img = state.imageCache[el.id];
  if (img?.complete && img.naturalWidth > 0) {
    const scale = fit === "contain"
      ? Math.min(el.w / img.naturalWidth, el.h / img.naturalHeight)
      : Math.max(el.w / img.naturalWidth, el.h / img.naturalHeight);
    const sw = el.w / scale;
    const sh = el.h / scale;
    const sx = (img.naturalWidth - sw) / 2;
    const sy = (img.naturalHeight - sh) / 2;
    if (fit === "contain") {
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx.drawImage(img, el.x + (el.w - dw) / 2, el.y + (el.h - dh) / 2, dw, dh);
    } else {
      ctx.drawImage(img, sx, sy, sw, sh, el.x, el.y, el.w, el.h);
    }
    return;
  }
  ctx.fillStyle = "#2b303b";
  roundRect(el.x, el.y, el.w, el.h, 6);
  ctx.fill();
  ctx.fillStyle = "#9aa3b4";
  ctx.font = `700 ${Math.max(12, Math.min(el.w, el.h) * 0.12)}px Arial`;
  ctx.textBaseline = "middle";
  ctx.fillText("Image", el.x + el.w * 0.14, el.y + el.h / 2);
}

function drawElement(el) {
  if (el.type === "card") drawCard(el);
  if (el.type === "logo") drawLogo(el);
  if (el.type === "text") drawTextElement(el);
  if (el.type === "cta") drawCta(el);
  if (el.type === "product") drawProduct(el);
  if (el.type === "metric") drawMetric(el);
  if (el.type === "image") drawImageElement(el);
}

function drawSelection(el) {
  if (!el) return;
  ctx.save();
  ctx.strokeStyle = state.accent;
  ctx.lineWidth = 2;
  ctx.setLineDash([7, 5]);
  ctx.strokeRect(el.x, el.y, el.w, el.h);
  ctx.setLineDash([]);
  ctx.fillStyle = state.accent;
  handleRects(el).forEach((handle) => {
    ctx.fillStyle = handle.key === "se" ? state.accent : "#101319";
    ctx.fillRect(handle.x, handle.y, handle.size, handle.size);
    ctx.strokeStyle = state.accent;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(handle.x, handle.y, handle.size, handle.size);
  });
  ctx.restore();
}

function renderCanvas(options = { guides: true }) {
  ensureLayout();
  const [, width, height] = activePreset();
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = state.mode === "social" ? "#f4f7fb" : state.background;
  ctx.fillRect(0, 0, width, height);
  state.elements.forEach(drawElement);
  if (options.guides) drawSelection(state.elements.find((el) => el.id === state.selectedId));
  updateSelectedLabel();
}

function renderMeta() {
  const [, width, height] = activePreset();
  const assetTotal = presets[state.mode].length * Object.keys(copyByLanguage).length;
  els.assetCount.textContent = assetTotal;
  els.selectedSpec.textContent = `${width} x ${height}`;
  els.activeLanguage.textContent = state.language;
  els.modeTitle.textContent = state.mode === "banner" ? "多语言 Banner 生成器" : "社媒模板工具";
  els.modeMeta.textContent =
    state.mode === "banner"
      ? "拖拽修版、存为模板、跨尺寸智能适配、PNG 导出"
      : "固定模板、人工校对、平台尺寸适配、PNG 导出";
}

function updateSelectedLabel() {
  const el = selectedElement();
  els.selectedElement.textContent = el
    ? `${elementNames[el.id] || elementNames[el.type] || el.fileName || el.id} · ${Math.round(el.x)}, ${Math.round(el.y)} · ${Math.round(el.w)} x ${Math.round(el.h)}`
    : "未选中元素";
  els.templateStatus.textContent = state.lastTemplateMessage || templateDescription(state.savedTemplates[state.mode]);
  syncGeometryInputs(el);
}

function syncGeometryInputs(el) {
  const controls = [els.elementX, els.elementY, els.elementW, els.elementH, els.elementFont];
  controls.forEach((input) => {
    input.disabled = !el;
  });
  if (!el) {
    controls.forEach((input) => {
      input.value = "";
    });
    els.selectedContent.value = "";
    els.selectedContent.disabled = true;
    els.deleteElement.disabled = true;
    return;
  }
  els.elementX.value = Math.round(el.x);
  els.elementY.value = Math.round(el.y);
  els.elementW.value = Math.round(el.w);
  els.elementH.value = Math.round(el.h);
  els.elementFont.disabled = !(el.type === "text" || el.type === "metric" || el.type === "cta");
  els.elementFont.value = el.font ? Math.round(el.font) : "";
  els.selectedContent.disabled = !isTextEditable(el);
  els.selectedContent.value = editableTextValue(el);
  els.deleteElement.disabled = !el || el.id === "card";
}

function render() {
  renderPresetList();
  renderLanguages();
  renderTemplateSelect();
  renderAssetLibrary();
  renderCanvas();
  renderMeta();
}

function canvasPoint(event) {
  const rect = els.canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * els.canvas.width,
    y: ((event.clientY - rect.top) / rect.height) * els.canvas.height,
  };
}

function beginCanvasTextEdit(el) {
  if (!isTextEditable(el)) return;
  const canvasRect = els.canvas.getBoundingClientRect();
  const wrapRect = els.stageWrap.getBoundingClientRect();
  const sx = canvasRect.width / els.canvas.width;
  const sy = canvasRect.height / els.canvas.height;
  const editor = els.textEditor;
  state.textEdit = { id: el.id, original: editableTextValue(el) };
  editor.value = editableTextValue(el);
  editor.style.display = "block";
  editor.style.left = `${canvasRect.left - wrapRect.left + els.stageWrap.scrollLeft + el.x * sx}px`;
  editor.style.top = `${canvasRect.top - wrapRect.top + els.stageWrap.scrollTop + el.y * sy}px`;
  editor.style.width = `${Math.max(40, el.w * sx)}px`;
  editor.style.height = `${Math.max(28, el.h * sy)}px`;
  editor.style.font = `${el.weight || 800} ${Math.max(11, (el.font || 16) * sx)}px Arial`;
  editor.style.lineHeight = el.type === "cta" ? "1.2" : (el.role === "headline" ? "1.06" : "1.32");
  editor.focus();
  editor.select();
}

function finishCanvasTextEdit(commit = true) {
  if (!state.textEdit) return;
  const el = state.elements.find((item) => item.id === state.textEdit.id);
  if (commit && el) {
    setEditableTextValue(el, els.textEditor.value);
  }
  state.textEdit = null;
  els.textEditor.style.display = "none";
  renderCanvas();
}

function onCanvasDoubleClick(event) {
  const hit = hitTest(canvasPoint(event));
  if (!hit || !isTextEditable(hit.el)) return;
  event.preventDefault();
  state.selectedId = hit.el.id;
  renderCanvas();
  beginCanvasTextEdit(hit.el);
}

function onCanvasAssetDrop(event) {
  event.preventDefault();
  const assetId = event.dataTransfer.getData("text/plain");
  const asset = state.assetLibrary.find((item) => item.id === assetId);
  if (!asset) return;
  insertAssetAsImage(asset, canvasPoint(event));
}

function handleRects(el) {
  const size = Math.max(8, Math.min(14, Math.min(els.canvas.width, els.canvas.height) * 0.025));
  const half = size / 2;
  const cx = el.x + el.w / 2;
  const cy = el.y + el.h / 2;
  return [
    { key: "nw", x: el.x - half, y: el.y - half, size },
    { key: "n", x: cx - half, y: el.y - half, size },
    { key: "ne", x: el.x + el.w - half, y: el.y - half, size },
    { key: "e", x: el.x + el.w - half, y: cy - half, size },
    { key: "se", x: el.x + el.w - half, y: el.y + el.h - half, size },
    { key: "s", x: cx - half, y: el.y + el.h - half, size },
    { key: "sw", x: el.x - half, y: el.y + el.h - half, size },
    { key: "w", x: el.x - half, y: cy - half, size },
  ];
}

function handleAt(point, el) {
  if (!el) return null;
  return handleRects(el).find((handle) => (
    point.x >= handle.x &&
    point.x <= handle.x + handle.size &&
    point.y >= handle.y &&
    point.y <= handle.y + handle.size
  )) || null;
}

function cursorForHandle(handle) {
  const cursors = {
    n: "ns-resize",
    s: "ns-resize",
    e: "ew-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    se: "nwse-resize",
    ne: "nesw-resize",
    sw: "nesw-resize",
  };
  return cursors[handle] || "default";
}

function hitTest(point) {
  const selected = selectedElement();
  const handle = handleAt(point, selected);
  if (handle) return { el: selected, action: "resize", handle: handle.key };
  for (let i = state.elements.length - 1; i >= 0; i -= 1) {
    const el = state.elements[i];
    if (el.type === "metric" && !state.showMetrics) continue;
    if (point.x >= el.x && point.x <= el.x + el.w && point.y >= el.y && point.y <= el.y + el.h) {
      return { el, action: "move", handle: null };
    }
  }
  return null;
}

function onPointerDown(event) {
  if (state.textEdit) finishCanvasTextEdit(true);
  const point = canvasPoint(event);
  const hit = hitTest(point);
  if (!hit) {
    state.selectedId = null;
    renderCanvas();
    return;
  }
  state.selectedId = hit.el.id;
  state.drag = {
    mode: hit.action,
    handle: hit.handle,
    startX: point.x,
    startY: point.y,
    original: clone(hit.el),
  };
  els.canvas.setPointerCapture(event.pointerId);
  renderCanvas();
}

function onPointerMove(event) {
  const point = canvasPoint(event);
  if (!state.drag) {
    const hit = hitTest(point);
    els.canvas.style.cursor = hit ? (hit.action === "resize" ? cursorForHandle(hit.handle) : "move") : "default";
    return;
  }

  const [, width, height] = activePreset();
  const el = selectedElement();
  if (!el) return;
  const dx = point.x - state.drag.startX;
  const dy = point.y - state.drag.startY;
  if (state.drag.mode === "move") {
    el.x = state.drag.original.x + dx;
    el.y = state.drag.original.y + dy;
  } else {
    resizeElementFromHandle(el, state.drag.original, dx, dy, state.drag.handle);
  }
  fitElement(el, width, height);
  renderCanvas();
}

function resizeElementFromHandle(el, original, dx, dy, handle) {
  const minW = el.type === "text" ? 44 : 22;
  const minH = el.type === "text" ? 24 : 20;
  let x = original.x;
  let y = original.y;
  let w = original.w;
  let h = original.h;

  if (handle.includes("e")) w = original.w + dx;
  if (handle.includes("s")) h = original.h + dy;
  if (handle.includes("w")) {
    x = original.x + dx;
    w = original.w - dx;
  }
  if (handle.includes("n")) {
    y = original.y + dy;
    h = original.h - dy;
  }

  if (w < minW) {
    if (handle.includes("w")) x = original.x + original.w - minW;
    w = minW;
  }
  if (h < minH) {
    if (handle.includes("n")) y = original.y + original.h - minH;
    h = minH;
  }

  Object.assign(el, { x, y, w, h });
}

function onPointerUp(event) {
  if (!state.drag) return;
  state.drag = null;
  try {
    els.canvas.releasePointerCapture(event.pointerId);
  } catch (error) {
    // Pointer capture may already be released by the browser.
  }
}

function updateSelectedGeometry(field, value) {
  const el = selectedElement();
  if (!el || Number.isNaN(value)) return;
  const [, width, height] = activePreset();
  if (field === "x") el.x = value;
  if (field === "y") el.y = value;
  if (field === "w") el.w = value;
  if (field === "h") el.h = value;
  if (field === "font" && (el.type === "text" || el.type === "metric" || el.type === "cta")) el.font = value;
  fitElement(el, width, height);
  renderCanvas();
}

function updateSelectedContent(value) {
  const el = selectedElement();
  if (!el) return;
  setEditableTextValue(el, value);
  renderCanvas();
}

function handleImageUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    state.lastTemplateMessage = "只支持上传图片素材";
    updateSelectedLabel();
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const asset = {
      id: nextElementId("asset"),
      name: file.name,
      src: String(reader.result),
      type: file.type,
      createdAt: new Date().toISOString(),
    };
    state.assetLibrary.unshift(asset);
    persistAssetLibrary();
    insertAssetAsImage(asset);
    renderAssetLibrary();
    state.lastTemplateMessage = `已上传并插入素材：${file.name}`;
    updateSelectedLabel();
    event.target.value = "";
  };
  reader.readAsDataURL(file);
}

function deleteSelectedElement() {
  const el = selectedElement();
  if (!el || el.id === "card") return;
  state.elements = state.elements.filter((item) => item.id !== el.id);
  delete state.imageCache[el.id];
  state.selectedId = null;
  state.lastTemplateMessage = `已删除 ${elementNames[el.id] || elementNames[el.type] || "元素"}`;
  renderCanvas();
}

function nudgeSelected(event) {
  const el = selectedElement();
  if (!el) return;
  const deltas = {
    ArrowLeft: [-1, 0],
    ArrowRight: [1, 0],
    ArrowUp: [0, -1],
    ArrowDown: [0, 1],
  };
  if (!deltas[event.key]) return;
  event.preventDefault();
  const amount = event.shiftKey ? 10 : 1;
  const [, width, height] = activePreset();
  el.x += deltas[event.key][0] * amount;
  el.y += deltas[event.key][1] * amount;
  fitElement(el, width, height);
  renderCanvas();
}

function downloadCanvas(name) {
  renderCanvas({ guides: false });
  const link = document.createElement("a");
  link.download = name;
  link.href = els.canvas.toDataURL("image/png");
  link.click();
  renderCanvas();
}

function exportCurrent() {
  const [name, width, height] = activePreset();
  downloadCanvas(`${state.mode}_${state.language}_${name}_${width}x${height}.png`.replaceAll(" ", "-"));
}

function exportBatch() {
  const originalPreset = state.presetIndex;
  const originalLanguage = state.language;
  const originalCopy = [state.headline, state.subhead, state.cta];
  const originalElements = clone(state.elements);
  const originalSelected = state.selectedId;
  Object.keys(copyByLanguage).forEach((lang) => {
    presets[state.mode].forEach(([, ,], index) => {
      state.language = lang;
      state.presetIndex = index;
      applyCopyForLanguage(lang);
      applyTemplateForCurrentSize();
      renderCanvas({ guides: false });
      exportCurrent();
    });
  });
  state.presetIndex = originalPreset;
  state.language = originalLanguage;
  [state.headline, state.subhead, state.cta] = originalCopy;
  state.elements = originalElements;
  state.selectedId = originalSelected;
  syncInputs();
  render();
}

document.querySelectorAll(".mode-tab").forEach((button) => {
  button.addEventListener("click", () => {
    persistCurrentCopyToLanguage();
    state.mode = button.dataset.mode;
    state.presetIndex = 0;
    state.activeTemplateId = "";
    syncModeTabs();
    persistTemplateLibrary();
    applyTemplateForCurrentSize();
    render();
  });
});

els.headline.addEventListener("input", () => {
  state.headline = els.headline.value;
  persistCurrentCopyToLanguage();
  renderCanvas();
});
els.subhead.addEventListener("input", () => {
  state.subhead = els.subhead.value;
  persistCurrentCopyToLanguage();
  renderCanvas();
});
els.cta.addEventListener("input", () => {
  state.cta = els.cta.value;
  persistCurrentCopyToLanguage();
  renderCanvas();
});
els.accent.addEventListener("input", () => {
  state.accent = els.accent.value;
  document.documentElement.style.setProperty("--accent", state.accent);
  renderCanvas();
});
els.background.addEventListener("input", () => {
  state.background = els.background.value;
  renderCanvas();
});
els.showMetrics.addEventListener("change", () => {
  state.showMetrics = els.showMetrics.checked;
  renderCanvas();
});

els.canvas.addEventListener("pointerdown", onPointerDown);
els.canvas.addEventListener("pointermove", onPointerMove);
els.canvas.addEventListener("pointerup", onPointerUp);
els.canvas.addEventListener("pointerleave", onPointerUp);
els.canvas.addEventListener("dblclick", onCanvasDoubleClick);
els.canvas.addEventListener("keydown", nudgeSelected);
els.canvas.addEventListener("dragover", (event) => event.preventDefault());
els.canvas.addEventListener("drop", onCanvasAssetDrop);
els.textEditor.addEventListener("blur", () => finishCanvasTextEdit(true));
els.textEditor.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    finishCanvasTextEdit(false);
  }
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();
    finishCanvasTextEdit(true);
  }
});
els.imageUpload.addEventListener("change", handleImageUpload);
els.deleteElement.addEventListener("click", deleteSelectedElement);
els.selectedContent.addEventListener("input", () => updateSelectedContent(els.selectedContent.value));
els.lockCopy.addEventListener("click", lockCurrentCopy);
els.autoTranslate.addEventListener("change", () => {
  state.autoTranslate = els.autoTranslate.checked;
  localStorage.setItem("creativeOpsAutoTranslate", JSON.stringify(state.autoTranslate));
  if (state.autoTranslate && !state.sourceCopy) {
    lockCurrentCopy();
    return;
  }
  if (state.autoTranslate) {
    applyCopyForLanguage(state.language);
    syncInputs();
    renderCanvas();
  }
});
els.saveAsTemplate.addEventListener("click", () => saveTemplateToLibrary(true));
els.updateTemplate.addEventListener("click", () => saveTemplateToLibrary(false));
els.applyTemplate.addEventListener("click", () => applyTemplateById(els.templateSelect.value));
els.templateSelect.addEventListener("change", () => {
  const template = state.templateLibrary.find((item) => item.id === els.templateSelect.value);
  if (!template) return;
  state.activeTemplateId = template.id;
  els.templateName.value = template.name;
  persistTemplateLibrary();
  state.lastTemplateMessage = `已选择模板：${template.name}`;
  updateSelectedLabel();
});
document.querySelectorAll("[data-add-element]").forEach((button) => {
  button.addEventListener("click", () => addElement(button.dataset.addElement));
});
[
  [els.elementX, "x"],
  [els.elementY, "y"],
  [els.elementW, "w"],
  [els.elementH, "h"],
  [els.elementFont, "font"],
].forEach(([input, field]) => {
  input.addEventListener("change", () => updateSelectedGeometry(field, Number(input.value)));
  input.addEventListener("input", () => updateSelectedGeometry(field, Number(input.value)));
});
document.querySelector("#exportCurrent").addEventListener("click", exportCurrent);
document.querySelector("#exportBatch").addEventListener("click", exportBatch);
document.querySelector("#saveTemplate").addEventListener("click", () => saveTemplateToLibrary(false));
document.querySelector("#resetLayout").addEventListener("click", () => {
  const [, width, height] = activePreset();
  state.elements = defaultElements(state.mode, width, height);
  state.selectedId = null;
  renderCanvas();
});
document.querySelector("#fitButton").addEventListener("click", () => {
  state.fit = !state.fit;
  els.canvas.style.maxWidth = state.fit ? "100%" : "none";
  els.canvas.style.maxHeight = state.fit ? "calc(100vh - 188px)" : "none";
});

els.templateName.value = state.activeTemplateId
  ? state.templateLibrary.find((template) => template.id === state.activeTemplateId)?.name || "Untitled template"
  : "Untitled template";
syncModeTabs();
syncInputs();
applyTemplateForCurrentSize();
render();
