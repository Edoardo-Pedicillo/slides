import {
  flowRendererV2,
  flowStyles
} from "./chunk-IDUWDGBX.js";
import {
  flowDb,
  parser$1
} from "./chunk-SZFXQCSP.js";
import "./chunk-HW3RUGG7.js";
import "./chunk-CJQV72L2.js";
import "./chunk-ZKNYDDJC.js";
import "./chunk-VS7NNFND.js";
import "./chunk-NTN2TGZN.js";
import "./chunk-45VWGRIO.js";
import "./chunk-NEY4QOFA.js";
import "./chunk-C63FVZPY.js";
import {
  setConfig
} from "./chunk-IO7BAUVL.js";
import "./chunk-YGAUDZUZ.js";

// node_modules/mermaid/dist/flowDiagram-v2-ba221793.js
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-ba221793-LKAMA3MY.js.map
