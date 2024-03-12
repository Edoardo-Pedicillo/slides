import "./chunk-YGAUDZUZ.js";

// node_modules/vite-plugin-vue-server-ref/dist/client.mjs
function klona(val) {
  var k, out, tmp;
  if (Array.isArray(val)) {
    out = Array(k = val.length);
    while (k--)
      out[k] = (tmp = val[k]) && typeof tmp === "object" ? klona(tmp) : tmp;
    return out;
  }
  if (Object.prototype.toString.call(val) === "[object Object]") {
    out = {};
    for (k in val) {
      if (k === "__proto__") {
        Object.defineProperty(out, k, {
          value: klona(val[k]),
          configurable: true,
          enumerable: true,
          writable: true
        });
      } else {
        out[k] = (tmp = val[k]) && typeof tmp === "object" ? klona(tmp) : tmp;
      }
    }
    return out;
  }
  return val;
}
function apply(obj, diff2) {
  if (typeof obj !== typeof diff2)
    return diff2;
  if (typeof diff2 === "object") {
    if (Array.isArray(diff2))
      return diff2;
    let out;
    if (Array.isArray(obj)) {
      out = obj;
      for (const i in diff2)
        out[i] = apply(obj[i], diff2[i]);
    } else {
      out = obj;
      for (const i in diff2)
        out[i] = apply(obj[i], diff2[i]);
    }
    return out;
  }
  return diff2;
}
function diff(obj, old) {
  if (typeof obj === "object") {
    const isArray = Array.isArray(obj);
    if (!old || typeof old !== "object" || isArray !== Array.isArray(old))
      return obj;
    if (isArray) {
      let out2;
      let i = 0;
      const max = Math.min(obj.length, old.length);
      for (; i < max; i++) {
        const differs = different(obj[i], old[i]);
        if (differs)
          break;
      }
      const useArray = old.length === 0;
      const offset = obj.length - old.length;
      for (let j = obj.length; j-- > i; ) {
        const oldJ = j - offset;
        if (oldJ >= 0) {
          const differs = different(obj[j], old[oldJ]);
          if (differs) {
            if (!out2)
              out2 = useArray ? [] : {};
            out2[j] = diff(obj[j], old[oldJ]);
          }
        } else {
          if (!out2)
            out2 = useArray ? [] : {};
          out2[j] = obj[j];
        }
      }
      return out2;
    }
    let out;
    for (const key in obj) {
      if (!(key in old) || obj[key] !== old[key]) {
        if (!out)
          out = {};
        const r = diff(obj[key], old[key]);
        if (r !== void 0)
          out[key] = r;
      }
    }
    for (const key in old) {
      if (obj == null || !(key in obj)) {
        if (!out)
          out = {};
        out[key] = void 0;
      }
    }
    return out;
  } else if (obj !== old) {
    return obj;
  }
}
function different(obj, old) {
  for (const key in obj) {
    if (old == null || !(key in old) || obj[key] !== old[key])
      return true;
  }
  for (const key in old) {
    if (obj == null || !(key in obj))
      return true;
  }
  return false;
}
var UNDEFINED = "__UNDEFINED___";
function stringify(data) {
  return JSON.stringify(data, (key, value) => value === void 0 ? UNDEFINED : value);
}
function parse(json) {
  return JSON.parse(json, (key, value) => value === UNDEFINED ? void 0 : value);
}
function randId() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10);
}
function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}
function reactiveSet(target, value) {
  for (const key of Object.keys(value)) {
    if (target[key] !== value[key])
      target[key] = value[key];
  }
  const originalKeys = new Set(Object.keys(target));
  Object.keys(value).forEach((i) => originalKeys.delete(i));
  for (const key of originalKeys)
    delete target[key];
}
function define(target, key, value) {
  Object.defineProperty(target, key, {
    value,
    writable: true,
    enumerable: false
  });
}
export {
  UNDEFINED,
  apply,
  klona as clone,
  define,
  diff,
  isObject,
  parse,
  randId,
  reactiveSet,
  stringify
};
//# sourceMappingURL=vite-plugin-vue-server-ref_client.js.map
