"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  MyDropdown: () => MyDropdown
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    children: "Boop"
  });
};

// src/Menu.tsx
var import_react = require("@headlessui/react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function MyDropdown() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react.Menu, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react.Menu.Button, {
        children: "More"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react.Menu.Items, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react.Menu.Item, {
            children: ({ active }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
              className: `${active && "bg-blue-500"}`,
              href: "/account-settings",
              children: "Account settings"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react.Menu.Item, {
            children: ({ active }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
              className: `${active && "bg-blue-500"}`,
              href: "/account-settings",
              children: "Documentation"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react.Menu.Item, {
            disabled: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
              className: "opacity-75",
              children: "Invite a friend (coming soon!)"
            })
          })
        ]
      })
    ]
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  MyDropdown
});
