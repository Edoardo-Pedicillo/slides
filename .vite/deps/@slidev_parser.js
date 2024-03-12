import {
  js_yaml_default
} from "./chunk-2JSDKGV2.js";
import {
  __publicField
} from "./chunk-YGAUDZUZ.js";

// node_modules/@slidev/parser/dist/chunk-UJGTNRWR.mjs
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
function toArray(array) {
  array = array ?? [];
  return Array.isArray(array) ? array : [array];
}
function uniq(array) {
  return Array.from(new Set(array));
}
function range(...args) {
  let start, stop, step;
  if (args.length === 1) {
    start = 0;
    step = 1;
    [stop] = args;
  } else {
    [start, stop, step = 1] = args;
  }
  const arr = [];
  let current = start;
  while (current < stop) {
    arr.push(current);
    current += step || 1;
  }
  return arr;
}
var toString = (v) => Object.prototype.toString.call(v);
function notNullish(v) {
  return v != null;
}
function isTruthy(v) {
  return Boolean(v);
}
var isNumber = (val) => typeof val === "number";
var isObject = (val) => toString(val) === "[object Object]";
function objectMap(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => fn(k, v)).filter(notNullish)
  );
}
var Node = class {
  constructor(value) {
    __publicField(this, "value");
    __publicField(this, "next");
    this.value = value;
  }
};
var _head;
var _tail;
var _size;
var Queue = class {
  constructor() {
    __privateAdd(this, _head, void 0);
    __privateAdd(this, _tail, void 0);
    __privateAdd(this, _size, void 0);
    this.clear();
  }
  enqueue(value) {
    const node = new Node(value);
    if (__privateGet(this, _head)) {
      __privateGet(this, _tail).next = node;
      __privateSet(this, _tail, node);
    } else {
      __privateSet(this, _head, node);
      __privateSet(this, _tail, node);
    }
    __privateWrapper(this, _size)._++;
  }
  dequeue() {
    const current = __privateGet(this, _head);
    if (!current) {
      return;
    }
    __privateSet(this, _head, __privateGet(this, _head).next);
    __privateWrapper(this, _size)._--;
    return current.value;
  }
  clear() {
    __privateSet(this, _head, void 0);
    __privateSet(this, _tail, void 0);
    __privateSet(this, _size, 0);
  }
  get size() {
    return __privateGet(this, _size);
  }
  *[Symbol.iterator]() {
    let current = __privateGet(this, _head);
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
};
_head = /* @__PURE__ */ new WeakMap();
_tail = /* @__PURE__ */ new WeakMap();
_size = /* @__PURE__ */ new WeakMap();
var VOID = Symbol("p-void");
function parseRangeString(total, rangeStr) {
  if (!rangeStr || rangeStr === "all" || rangeStr === "*")
    return range(1, total + 1);
  const pages = [];
  for (const part of rangeStr.split(/[,;]/g)) {
    if (!part.includes("-")) {
      pages.push(+part);
    } else {
      const [start, end] = part.split("-", 2);
      pages.push(
        ...range(+start, !end ? total + 1 : +end + 1)
      );
    }
  }
  return uniq(pages).filter((i) => i <= total).sort((a, b) => a - b);
}
function parseAspectRatio(str) {
  if (isNumber(str))
    return str;
  if (!isNaN(+str))
    return +str;
  const [wStr = "", hStr = ""] = str.split(/[:\/x\|]/);
  const w = parseFloat(wStr.trim());
  const h = parseFloat(hStr.trim());
  if (isNaN(w) || isNaN(h) || h === 0)
    throw new Error(`Invalid aspect ratio "${str}"`);
  return w / h;
}
function getDefaultConfig() {
  return {
    theme: "default",
    title: "Slidev",
    titleTemplate: "%s - Slidev",
    addons: [],
    remoteAssets: false,
    monaco: "dev",
    download: false,
    export: {},
    info: false,
    highlighter: "prism",
    lineNumbers: false,
    colorSchema: "auto",
    routerMode: "history",
    aspectRatio: 16 / 9,
    canvasWidth: 980,
    exportFilename: "",
    selectable: false,
    themeConfig: {},
    fonts: {},
    favicon: "https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",
    drawings: {},
    plantUmlServer: "https://www.plantuml.com/plantuml",
    codeCopy: true,
    record: "dev",
    css: "windicss",
    presenter: true,
    htmlAttrs: {},
    transition: void 0
  };
}
function resolveConfig(headmatter, themeMeta = {}, filepath, verify = false) {
  var _a, _b, _c, _d;
  const themeHightlighter = ["prism", "shiki"].includes(themeMeta.highlighter || "") ? themeMeta.highlighter : void 0;
  const themeColorSchema = ["light", "dark"].includes(themeMeta.colorSchema || "") ? themeMeta.colorSchema : void 0;
  const defaultConfig = getDefaultConfig();
  const config = {
    ...defaultConfig,
    highlighter: themeHightlighter || defaultConfig.highlighter,
    colorSchema: themeColorSchema || defaultConfig.colorSchema,
    ...themeMeta.defaults,
    ...headmatter.config,
    ...headmatter,
    fonts: resolveFonts({
      ...(_a = themeMeta.defaults) == null ? void 0 : _a.fonts,
      ...(_b = headmatter.config) == null ? void 0 : _b.fonts,
      ...headmatter == null ? void 0 : headmatter.fonts
    }),
    drawings: resolveDrawings(headmatter.drawings, filepath),
    htmlAttrs: {
      ...(_c = themeMeta.defaults) == null ? void 0 : _c.htmlAttrs,
      ...(_d = headmatter.config) == null ? void 0 : _d.htmlAttrs,
      ...headmatter == null ? void 0 : headmatter.htmlAttrs
    }
  };
  if (config.colorSchema !== "dark" && config.colorSchema !== "light")
    config.colorSchema = "auto";
  if (themeColorSchema && config.colorSchema === "auto")
    config.colorSchema = themeColorSchema;
  config.aspectRatio = parseAspectRatio(config.aspectRatio);
  if (verify)
    verifyConfig(config, themeMeta);
  return config;
}
function verifyConfig(config, themeMeta = {}, warn = (v) => console.warn(`[slidev] ${v}`)) {
  const themeHightlighter = ["prism", "shiki"].includes(themeMeta.highlighter || "") ? themeMeta.highlighter : void 0;
  const themeColorSchema = ["light", "dark"].includes(themeMeta.colorSchema || "") ? themeMeta.colorSchema : void 0;
  if (themeColorSchema && config.colorSchema !== themeColorSchema)
    warn(`Color schema "${config.colorSchema}" does not supported by the theme`);
  if (themeHightlighter && config.highlighter !== themeHightlighter)
    warn(`Syntax highlighter "${config.highlighter}" does not supported by the theme`);
  if (!["windicss", "unocss", void 0].includes(config.css)) {
    warn(`Unsupported Atomic CSS engine "${config.css}", fallback to Windi CSS`);
    config.css = "windicss";
  }
}
function resolveFonts(fonts = {}) {
  const {
    fallbacks = true,
    italic = false,
    provider = "google"
  } = fonts;
  let sans = toArray(fonts.sans).flatMap((i) => i.split(/,\s*/g)).map((i) => i.trim());
  let serif = toArray(fonts.serif).flatMap((i) => i.split(/,\s*/g)).map((i) => i.trim());
  let mono = toArray(fonts.mono).flatMap((i) => i.split(/,\s*/g)).map((i) => i.trim());
  const weights = toArray(fonts.weights || "200,400,600").flatMap((i) => i.toString().split(/,\s*/g)).map((i) => i.trim());
  const custom = toArray(fonts.custom).flatMap((i) => i.split(/,\s*/g)).map((i) => i.trim());
  const local = toArray(fonts.local).flatMap((i) => i.split(/,\s*/g)).map((i) => i.trim());
  const webfonts = fonts.webfonts ? fonts.webfonts : fallbacks ? uniq([...sans, ...serif, ...mono, ...custom]) : [];
  webfonts.filter((i) => local.includes(i));
  function toQuoted(font) {
    if (/^(['"]).*\1$/.test(font))
      return font;
    return `"${font}"`;
  }
  if (fallbacks) {
    sans = uniq([
      ...sans.map(toQuoted),
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"'
    ]);
    serif = uniq([
      ...serif.map(toQuoted),
      "ui-serif",
      "Georgia",
      "Cambria",
      '"Times New Roman"',
      "Times",
      "serif"
    ]);
    mono = uniq([
      ...mono.map(toQuoted),
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace"
    ]);
  }
  return {
    sans,
    serif,
    mono,
    webfonts,
    provider,
    local,
    italic,
    weights
  };
}
function resolveDrawings(options = {}, filepath) {
  var _a;
  const {
    enabled = true,
    persist = false,
    presenterOnly = false,
    syncAll = true
  } = options;
  const persistPath = typeof persist === "string" ? persist : persist ? `.slidev/drawings${filepath ? `/${(_a = filepath.match(/([^\\\/]+?)(\.\w+)?$/)) == null ? void 0 : _a[1]}` : ""}` : false;
  return {
    enabled,
    persist: persistPath,
    presenterOnly,
    syncAll
  };
}
function stringify(data) {
  return `${data.slides.filter((slide) => slide.source === void 0 || slide.inline !== void 0).map((slide, idx) => stringifySlide(slide.inline || slide, idx)).join("\n").trim()}
`;
}
function filterDisabled(data) {
  data.slides = data.slides.filter((i) => {
    var _a;
    return !((_a = i.frontmatter) == null ? void 0 : _a.disabled);
  });
  return data;
}
function stringifySlide(data, idx = 0) {
  if (data.raw == null)
    prettifySlide(data);
  return data.raw.startsWith("---") || idx === 0 ? data.raw : `---
${data.raw.startsWith("\n") ? data.raw : `
${data.raw}`}`;
}
function prettifySlide(data) {
  data.content = `
${data.content.trim()}
`;
  data.raw = Object.keys(data.frontmatter || {}).length ? `---
${js_yaml_default.dump(data.frontmatter).trim()}
---
${data.content}` : data.content;
  if (data.note)
    data.raw += `
<!--
${data.note.trim()}
-->
`;
  else
    data.raw += "\n";
  return data;
}
function prettify(data) {
  data.slides.forEach(prettifySlide);
  return data;
}
function matter(code) {
  let data = {};
  const content = code.replace(
    /^---.*\r?\n([\s\S]*?)---/,
    (_, d) => {
      data = js_yaml_default.load(d);
      if (!isObject(data))
        data = {};
      return "";
    }
  );
  return { data, content };
}
function detectFeatures(code) {
  return {
    katex: !!code.match(/\$.*?\$/) || !!code.match(/$\$\$/),
    monaco: !!code.match(/{monaco.*}/),
    tweet: !!code.match(/<Tweet\b/),
    mermaid: !!code.match(/^```mermaid/m)
  };
}
function parseSlide(raw) {
  var _a, _b;
  const result = matter(raw);
  let note;
  const frontmatter = result.data || {};
  let content = result.content.trim();
  const comments = Array.from(content.matchAll(/<!--([\s\S]*?)-->/g));
  if (comments.length) {
    const last = comments[comments.length - 1];
    if (last.index !== void 0 && last.index + last[0].length >= content.length) {
      note = last[1].trim();
      content = content.slice(0, last.index).trim();
    }
  }
  let title;
  let level;
  if (frontmatter.title || frontmatter.name) {
    title = frontmatter.title || frontmatter.name;
  } else {
    const match = content.match(/^(#+) (.*)$/m);
    title = (_a = match == null ? void 0 : match[2]) == null ? void 0 : _a.trim();
    level = (_b = match == null ? void 0 : match[1]) == null ? void 0 : _b.length;
  }
  if (frontmatter.level)
    level = frontmatter.level || 1;
  return {
    raw,
    title,
    level,
    content,
    frontmatter,
    note
  };
}
async function parse(markdown, filepath, themeMeta, extensions, onHeadmatter) {
  var _a, _b, _c;
  const lines = markdown.split(/\r?\n/g);
  const slides = [];
  let start = 0;
  async function slice(end) {
    if (start === end)
      return;
    const raw = lines.slice(start, end).join("\n");
    const slide = {
      ...parseSlide(raw),
      index: slides.length,
      start,
      end
    };
    if (extensions) {
      for (const e of extensions) {
        if (e.transformSlide) {
          const newContent = await e.transformSlide(slide.content, slide.frontmatter);
          if (newContent !== void 0)
            slide.content = newContent;
        }
      }
    }
    slides.push(slide);
    start = end + 1;
  }
  {
    let hm = "";
    if (lines[0].match(/^---([^-].*)?$/) && !((_a = lines[1]) == null ? void 0 : _a.match(/^\s*$/))) {
      let hEnd = 1;
      while (hEnd < lines.length && !lines[hEnd].trimEnd().match(/^---$/))
        hEnd++;
      hm = lines.slice(1, hEnd).join("\n");
    }
    if (onHeadmatter) {
      const o = js_yaml_default.load(hm) ?? {};
      extensions = await onHeadmatter(o, extensions ?? [], filepath);
    }
  }
  if (extensions) {
    for (const e of extensions) {
      if (e.transformRawLines)
        await e.transformRawLines(lines);
    }
  }
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimEnd();
    if (line.match(/^---+/)) {
      await slice(i);
      const next = lines[i + 1];
      if (line.match(/^---([^-].*)?$/) && !(next == null ? void 0 : next.match(/^\s*$/))) {
        start = i;
        for (i += 1; i < lines.length; i++) {
          if (lines[i].trimEnd().match(/^---$/))
            break;
        }
      }
    } else if (line.startsWith("```")) {
      for (i += 1; i < lines.length; i++) {
        if (lines[i].startsWith("```"))
          break;
      }
    }
  }
  if (start <= lines.length - 1)
    await slice(lines.length);
  const headmatter = ((_b = slides[0]) == null ? void 0 : _b.frontmatter) || {};
  headmatter.title = headmatter.title || ((_c = slides[0]) == null ? void 0 : _c.title);
  const config = resolveConfig(headmatter, themeMeta, filepath);
  const features = detectFeatures(markdown);
  return {
    raw: markdown,
    filepath,
    slides,
    config,
    features,
    headmatter,
    themeMeta
  };
}
function mergeFeatureFlags(a, b) {
  return objectMap(a, (k, v) => [k, v || b[k]]);
}
function scanMonacoModules(md) {
  const typeModules = /* @__PURE__ */ new Set();
  md.replace(/^```(\w+?)\s*{monaco([\w:,-]*)}[\s\n]*([\s\S]+?)^```/mg, (full, lang = "ts", options, code) => {
    options = options || "";
    lang = lang.trim();
    if (lang === "ts" || lang === "typescript") {
      Array.from(code.matchAll(/\s+from\s+(["'])([\/\w@-]+)\1/g)).map((i) => i[2]).filter(isTruthy).map((i) => typeModules.add(i));
    }
    return "";
  });
  return Array.from(typeModules);
}
export {
  detectFeatures,
  filterDisabled,
  getDefaultConfig,
  mergeFeatureFlags,
  parse,
  parseAspectRatio,
  parseRangeString,
  parseSlide,
  prettify,
  prettifySlide,
  resolveConfig,
  resolveFonts,
  scanMonacoModules,
  stringify,
  stringifySlide,
  verifyConfig
};
//# sourceMappingURL=@slidev_parser.js.map