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

const elementNames = {
  logo: "品牌标识",
  headline: "标题文本框",
  subhead: "副标题文本框",
  cta: "按钮",
  product: "产品视觉",
  metric: "数据模块",
  card: "社媒背景卡片",
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
  drag: null,
  lastTemplateMessage: "",
  savedTemplates: JSON.parse(localStorage.getItem("creativeOpsTemplates") || "{}"),
};

const els = {
  canvas: document.querySelector("#previewCanvas"),
  presetList: document.querySelector("#presetList"),
  languageGrid: document.querySelector("#languageGrid"),
  headline: document.querySelector("#headlineInput"),
  subhead: document.querySelector("#subheadInput"),
  cta: document.querySelector("#ctaInput"),
  csv: document.querySelector("#csvInput"),
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
    { id: "cta", type: "cta", x: pad, y: height - pad - Math.max(34, height * 0.16), w: Math.max(96, Math.min(width * 0.22, 170)), h: Math.max(34, height * 0.16) },
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
  if (el.type === "text" || el.type === "metric") {
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
  return elements;
}

function templateDescription(template) {
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
}

function applyTemplateForCurrentSize() {
  const [, width, height] = activePreset();
  const saved = state.savedTemplates[state.mode];
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
    button.textContent = code;
    button.addEventListener("click", () => {
      state.language = code;
      const [headline, subhead, cta] = copyByLanguage[code];
      Object.assign(state, { headline, subhead, cta });
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
  els.csv.value = Object.entries(copyByLanguage)
    .map(([lang, row]) => [lang, ...row].join(","))
    .join("\n");
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
  const text = el.role === "headline" ? state.headline : state.subhead;
  let fontSize = el.font;
  const lineHeightRatio = el.role === "headline" ? 1.06 : 1.32;
  const minFont = 8;
  ctx.textBaseline = "top";
  ctx.fillStyle = el.color || "#ffffff";
  while (fontSize > minFont) {
    ctx.font = `${el.weight || 700} ${fontSize}px Arial`;
    const lines = Math.ceil(ctx.measureText(text).width / Math.max(1, el.w));
    if (lines * fontSize * lineHeightRatio <= el.h * 1.12) break;
    fontSize -= 1;
  }
  wrapText(text, el.x, el.y, el.w, fontSize * lineHeightRatio, `${el.weight || 700} ${fontSize}px Arial`, el.h);
}

function drawLogo(el) {
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
  ctx.font = `800 ${Math.max(10, Math.min(el.h * 0.36, el.w * 0.14))}px Arial`;
  ctx.textBaseline = "middle";
  ctx.fillText(state.cta, el.x + el.h * 0.45, el.y + el.h / 2);
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

function drawElement(el) {
  if (el.type === "card") drawCard(el);
  if (el.type === "logo") drawLogo(el);
  if (el.type === "text") drawTextElement(el);
  if (el.type === "cta") drawCta(el);
  if (el.type === "product") drawProduct(el);
  if (el.type === "metric") drawMetric(el);
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
    ? `${elementNames[el.id] || el.id} · ${Math.round(el.x)}, ${Math.round(el.y)} · ${Math.round(el.w)} x ${Math.round(el.h)}`
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
    return;
  }
  els.elementX.value = Math.round(el.x);
  els.elementY.value = Math.round(el.y);
  els.elementW.value = Math.round(el.w);
  els.elementH.value = Math.round(el.h);
  els.elementFont.disabled = !(el.type === "text" || el.type === "metric");
  els.elementFont.value = el.font ? Math.round(el.font) : "";
}

function render() {
  renderPresetList();
  renderLanguages();
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
    if (el.font) {
      const scale = Math.min(el.w / state.drag.original.w, el.h / state.drag.original.h);
      el.font = state.drag.original.font * scale;
    }
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
  if (field === "font" && (el.type === "text" || el.type === "metric")) el.font = value;
  fitElement(el, width, height);
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
      [state.headline, state.subhead, state.cta] = copyByLanguage[lang];
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

function loadCsv() {
  els.csv.value
    .split(/\n+/)
    .map((row) => row.trim())
    .filter(Boolean)
    .forEach((row) => {
      const [lang, headline, subhead, cta] = row.split(",").map((item) => item.trim());
      if (lang && headline) copyByLanguage[lang.toUpperCase()] = [headline, subhead || "", cta || state.cta];
    });
  if (copyByLanguage[state.language]) [state.headline, state.subhead, state.cta] = copyByLanguage[state.language];
  syncInputs();
  render();
}

document.querySelectorAll(".mode-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mode-tab").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.mode = button.dataset.mode;
    state.presetIndex = 0;
    applyTemplateForCurrentSize();
    render();
  });
});

els.headline.addEventListener("input", () => {
  state.headline = els.headline.value;
  renderCanvas();
});
els.subhead.addEventListener("input", () => {
  state.subhead = els.subhead.value;
  renderCanvas();
});
els.cta.addEventListener("input", () => {
  state.cta = els.cta.value;
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
els.canvas.addEventListener("keydown", nudgeSelected);
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
document.querySelector("#loadCsv").addEventListener("click", loadCsv);
document.querySelector("#exportCurrent").addEventListener("click", exportCurrent);
document.querySelector("#exportBatch").addEventListener("click", exportBatch);
document.querySelector("#saveTemplate").addEventListener("click", saveTemplate);
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

syncInputs();
applyTemplateForCurrentSize();
render();
