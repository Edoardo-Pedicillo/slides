import "./chunk-YGAUDZUZ.js";

// node_modules/vue-starport/dist/index.mjs
import { isObject, isClient, unrefElement, useRafFn } from "@vueuse/core";
import { defineComponent, inject, computed, ref, onMounted, nextTick, onBeforeUnmount, watch, mergeProps, h, isVNode, markRaw, reactive, effectScope, Teleport, getCurrentInstance } from "vue";
var InjectionState = "vue-starport-injection";
var InjectionOptions = "vue-starport-options";
var defaultOptions = {
  duration: 800,
  easing: "cubic-bezier(0.45, 0, 0.55, 1)",
  keepAlive: false
};
var proxyProps = {
  port: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: false
  },
  easing: {
    type: String,
    required: false
  },
  keepAlive: {
    type: Boolean,
    required: false,
    default: void 0
  },
  mountedProps: {
    type: Object,
    required: false
  },
  initialProps: {
    type: Object,
    required: false
  }
};
var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var StarportProxy = defineComponent({
  name: "StarportProxy",
  props: __spreadValues$3({
    props: {
      type: Object,
      default: () => ({})
    },
    component: {
      type: Object,
      required: true
    }
  }, proxyProps),
  setup(props, ctx) {
    const state = inject(InjectionState);
    const sp = computed(() => state.getInstance(props.port, props.component));
    const el = ref();
    const id = sp.value.generateId();
    const isMounted = ref(false);
    if (!sp.value.isVisible) {
      sp.value.land();
      isMounted.value = true;
    }
    onMounted(async () => {
      if (sp.value.el) {
        if (true)
          console.error(`[Vue Starport] Multiple proxies of "${sp.value.componentName}" with port "${props.port}" detected. The later one will be ignored.`);
        return;
      }
      sp.value.el = el.value;
      await nextTick();
      isMounted.value = true;
      sp.value.rect.update();
      if (true) {
        if (sp.value.rect.width === 0 || sp.value.rect.height === 0) {
          const attr = sp.value.rect.width === 0 ? "width" : "height";
          console.warn(`[Vue Starport] The proxy of component "${sp.value.componentName}" (port "${props.port}") has no ${attr} on initial render, have you set the size for it?`);
          console.warn("element:", sp.value.el);
          console.warn("rect:", sp.value.rect);
        }
      }
    });
    onBeforeUnmount(async () => {
      sp.value.rect.update();
      sp.value.liftOff();
      sp.value.el = void 0;
      isMounted.value = false;
      if (sp.value.options.keepAlive)
        return;
      await nextTick();
      await nextTick();
      if (sp.value.el)
        return;
      state.dispose(sp.value.port);
    });
    watch(() => props, async () => {
      if (sp.value.props)
        await nextTick();
      const _a = props, { props: childProps } = _a, options = __objRest(_a, ["props"]);
      sp.value.props = childProps || {};
      sp.value.setLocalOptions(options);
    }, { deep: true, immediate: true });
    return () => {
      const _a = props, { initialProps, mountedProps } = _a, _attrs = __objRest(_a, ["initialProps", "mountedProps"]);
      const attrs = mergeProps(_attrs, (isMounted.value ? mountedProps : initialProps) || {});
      return h("div", mergeProps(attrs, {
        id,
        "ref": el,
        "data-starport-proxy": sp.value.componentId,
        "data-starport-landed": sp.value.isLanded ? "true" : void 0,
        "data-starport-floating": !sp.value.isLanded ? "true" : void 0
      }), ctx.slots.default ? h(ctx.slots.default) : void 0);
    };
  }
});
var __defProp$2 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var Starport = defineComponent({
  name: "Starport",
  inheritAttrs: true,
  props: proxyProps,
  setup(props, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
      if (true) {
        const state = inject(InjectionState);
        if (!state)
          throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");
      }
    });
    return () => {
      var _a, _b;
      const slots = (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
      if (!slots)
        throw new Error("[Vue Starport] Slot is required to use <Starport>");
      if (slots.length !== 1)
        throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${slots.length}`);
      const slot = slots[0];
      let component = slot.type;
      if (!isObject(component) || isVNode(component)) {
        component = {
          render() {
            return slots;
          }
        };
      }
      return h(StarportProxy, __spreadProps$1(__spreadValues$2({}, props), {
        key: props.port,
        component: markRaw(component),
        props: slot.props
      }));
    };
  }
});
function useElementBounding(target) {
  const rect = reactive({
    height: 0,
    width: 0,
    left: 0,
    top: 0,
    update,
    listen,
    pause,
    margin: "0px",
    padding: "0px"
  });
  const root = isClient ? document.documentElement || document.body : void 0;
  function update() {
    if (!isClient)
      return;
    const el = unrefElement(target);
    if (!el)
      return;
    const { height, width, left, top } = el.getBoundingClientRect();
    const domStyle = window.getComputedStyle(el);
    const margin = domStyle.margin;
    const padding = domStyle.padding;
    Object.assign(rect, { height, width, left, top: root.scrollTop + top, margin, padding });
  }
  const raf = useRafFn(update, { immediate: false });
  function listen() {
    if (!isClient)
      return;
    update();
    raf.resume();
  }
  function pause() {
    raf.pause();
  }
  return rect;
}
var customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = "";
    let i = size;
    while (i--) {
      id += alphabet[Math.random() * alphabet.length | 0];
    }
    return id;
  };
};
var nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz", 5);
function kebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^\w\d_-]/g, "");
}
function getComponentName(component) {
  var _a;
  return component.name || ((_a = component.__file) == null ? void 0 : _a.split(/[\/\\.]/).slice(-2)[0]) || "";
}
var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
function createStarportInstance(port, component, inlineOptions = {}) {
  const componentName = getComponentName(component);
  const componentId = kebabCase(componentName) || nanoid();
  const el = ref();
  const props = ref(null);
  const isLanded = ref(false);
  const isVisible = ref(false);
  const scope = effectScope(true);
  const localOptions = ref({});
  const options = computed(() => __spreadValues$1(__spreadValues$1(__spreadValues$1({}, defaultOptions), inlineOptions), localOptions.value));
  const liftOffTime = ref(0);
  let rect = void 0;
  scope.run(() => {
    rect = useElementBounding(el);
    watch(el, async (v) => {
      if (v)
        isVisible.value = true;
      await nextTick();
      if (!el.value)
        isVisible.value = false;
    });
  });
  const portId = kebabCase(port);
  function generateId() {
    return `starport-${componentId}-${portId}-${nanoid()}`;
  }
  const id = generateId();
  return reactive({
    el,
    id,
    port,
    props,
    rect,
    scope,
    isLanded,
    isVisible,
    options,
    liftOffTime,
    component,
    componentName,
    componentId,
    generateId,
    setLocalOptions(options2 = {}) {
      localOptions.value = JSON.parse(JSON.stringify(options2));
    },
    elRef() {
      return el;
    },
    liftOff() {
      if (!isLanded.value)
        return;
      isLanded.value = false;
      liftOffTime.value = Date.now();
      rect.listen();
    },
    land() {
      if (isLanded.value)
        return;
      isLanded.value = true;
      rect.pause();
    }
  });
}
function createInternalState(options) {
  const portMap = reactive(/* @__PURE__ */ new Map());
  function getInstance(port, component) {
    let context = portMap.get(port);
    if (!context) {
      context = createStarportInstance(port, component, options);
      portMap.set(port, context);
    }
    context.component = component;
    return context;
  }
  function dispose(port) {
    var _a;
    (_a = portMap.get(port)) == null ? void 0 : _a.scope.stop();
    portMap.delete(port);
  }
  return {
    portMap,
    dispose,
    getInstance
  };
}
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var StarportCraft = defineComponent({
  name: "StarportCraft",
  props: {
    port: {
      type: String,
      required: true
    },
    component: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = inject(InjectionState);
    if (!state)
      throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");
    const sp = computed(() => state.getInstance(props.port, props.component));
    const id = computed(() => {
      var _a;
      return ((_a = sp.value.el) == null ? void 0 : _a.id) || sp.value.id;
    });
    const style = computed(() => {
      const elapsed = Date.now() - sp.value.liftOffTime;
      const duration = Math.max(0, sp.value.options.duration - elapsed);
      const rect = sp.value.rect;
      const style2 = {
        position: "absolute",
        left: 0,
        top: 0,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        margin: rect.margin,
        padding: rect.padding,
        transform: `translate3d(${rect.left}px,${rect.top}px,0px)`
      };
      if (!sp.value.isVisible || !sp.value.el) {
        return __spreadProps(__spreadValues({}, style2), {
          zIndex: -1,
          display: "none"
        });
      }
      if (sp.value.isLanded) {
        style2.display = "none";
      } else {
        Object.assign(style2, {
          transitionProperty: "all",
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: sp.value.options.easing
        });
      }
      return style2;
    });
    const additionalProps = false ? {} : {
      onTransitionend(e) {
        if (sp.value.isLanded)
          return;
        console.warn(`[Vue Starport] Transition duration of component "${sp.value.componentName}" is too short (${e.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${sp.value.options.duration / 1e3}s).`);
      }
    };
    return () => {
      const teleport = !!(sp.value.isLanded && sp.value.el);
      return h("div", {
        "style": style.value,
        "data-starport-craft": sp.value.componentId,
        "data-starport-landed": sp.value.isLanded ? "true" : void 0,
        "data-starport-floating": !sp.value.isLanded ? "true" : void 0,
        "onTransitionend": sp.value.land
      }, h(Teleport, {
        to: teleport ? `#${id.value}` : "body",
        disabled: !teleport
      }, h(sp.value.component, mergeProps(additionalProps, sp.value.props))));
    };
  }
});
var StarportCarrier = defineComponent({
  name: "StarportCarrier",
  setup(_, { slots }) {
    const state = createInternalState(inject(InjectionOptions, {}));
    const app = getCurrentInstance().appContext.app;
    app.provide(InjectionState, state);
    return () => {
      var _a;
      return [
        (_a = slots.default) == null ? void 0 : _a.call(slots),
        Array.from(state.portMap.entries()).map(([port, { component }]) => h(StarportCraft, { key: port, port, component }))
      ];
    };
  }
});
function StarportPlugin(defaultOptions2 = {}) {
  return {
    install(app) {
      app.provide(InjectionOptions, defaultOptions2);
      app.component("Starport", Starport);
      app.component("StarportCarrier", StarportCarrier);
    }
  };
}
export {
  Starport,
  StarportCarrier,
  StarportPlugin as default
};
//# sourceMappingURL=vue-starport.js.map
