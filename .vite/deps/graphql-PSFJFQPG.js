import "./chunk-YGAUDZUZ.js";

// node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js
var conf = {
  comments: {
    lineComment: "#"
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"""', close: '"""', notIn: ["string", "comment"] },
    { open: '"', close: '"', notIn: ["string", "comment"] }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"""', close: '"""' },
    { open: '"', close: '"' }
  ],
  folding: {
    offSide: true
  }
};
var language = {
  defaultToken: "invalid",
  tokenPostfix: ".gql",
  keywords: [
    "null",
    "true",
    "false",
    "query",
    "mutation",
    "subscription",
    "extend",
    "schema",
    "directive",
    "scalar",
    "type",
    "interface",
    "union",
    "enum",
    "input",
    "implements",
    "fragment",
    "on"
  ],
  typeKeywords: ["Int", "Float", "String", "Boolean", "ID"],
  directiveLocations: [
    "SCHEMA",
    "SCALAR",
    "OBJECT",
    "FIELD_DEFINITION",
    "ARGUMENT_DEFINITION",
    "INTERFACE",
    "UNION",
    "ENUM",
    "ENUM_VALUE",
    "INPUT_OBJECT",
    "INPUT_FIELD_DEFINITION",
    "QUERY",
    "MUTATION",
    "SUBSCRIPTION",
    "FIELD",
    "FRAGMENT_DEFINITION",
    "FRAGMENT_SPREAD",
    "INLINE_FRAGMENT",
    "VARIABLE_DEFINITION"
  ],
  operators: ["=", "!", "?", ":", "&", "|"],
  symbols: /[=!?:&|]+/,
  escapes: /\\(?:["\\\/bfnrt]|u[0-9A-Fa-f]{4})/,
  tokenizer: {
    root: [
      [
        /[a-z_][\w$]*/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "key.identifier"
          }
        }
      ],
      [
        /[$][\w$]*/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "argument.identifier"
          }
        }
      ],
      [
        /[A-Z][\w\$]*/,
        {
          cases: {
            "@typeKeywords": "keyword",
            "@default": "type.identifier"
          }
        }
      ],
      { include: "@whitespace" },
      [/[{}()\[\]]/, "@brackets"],
      [/@symbols/, { cases: { "@operators": "operator", "@default": "" } }],
      [/@\s*[a-zA-Z_\$][\w\$]*/, { token: "annotation", log: "annotation token: $0" }],
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/0[xX][0-9a-fA-F]+/, "number.hex"],
      [/\d+/, "number"],
      [/[;,.]/, "delimiter"],
      [/"""/, { token: "string", next: "@mlstring", nextEmbedded: "markdown" }],
      [/"([^"\\]|\\.)*$/, "string.invalid"],
      [/"/, { token: "string.quote", bracket: "@open", next: "@string" }]
    ],
    mlstring: [
      [/[^"]+/, "string"],
      ['"""', { token: "string", next: "@pop", nextEmbedded: "@pop" }]
    ],
    string: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
    ],
    whitespace: [
      [/[ \t\r\n]+/, ""],
      [/#.*$/, "comment"]
    ]
  }
};
export {
  conf,
  language
};
/*! Bundled license information:

monaco-editor/esm/vs/basic-languages/graphql/graphql.js:
  (*!-----------------------------------------------------------------------------
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Version: 0.37.1(20a8d5a651d057aaed7875ad1c1f2ecf13c4e773)
   * Released under the MIT license
   * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
   *-----------------------------------------------------------------------------*)
*/
//# sourceMappingURL=graphql-PSFJFQPG.js.map
