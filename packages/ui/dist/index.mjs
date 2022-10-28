// src/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("button", {
    children: "Boop"
  });
};

// src/Menu.tsx
import { Menu } from "@headlessui/react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function MyDropdown() {
  return /* @__PURE__ */ jsxs(Menu, {
    children: [
      /* @__PURE__ */ jsx2(Menu.Button, {
        children: "More"
      }),
      /* @__PURE__ */ jsxs(Menu.Items, {
        children: [
          /* @__PURE__ */ jsx2(Menu.Item, {
            children: ({ active }) => /* @__PURE__ */ jsx2("a", {
              className: `${active && "bg-blue-500"}`,
              href: "/account-settings",
              children: "Account settings"
            })
          }),
          /* @__PURE__ */ jsx2(Menu.Item, {
            children: ({ active }) => /* @__PURE__ */ jsx2("a", {
              className: `${active && "bg-blue-500"}`,
              href: "/account-settings",
              children: "Documentation"
            })
          }),
          /* @__PURE__ */ jsx2(Menu.Item, {
            disabled: true,
            children: /* @__PURE__ */ jsx2("span", {
              className: "opacity-75",
              children: "Invite a friend (coming soon!)"
            })
          })
        ]
      })
    ]
  });
}
export {
  Button,
  MyDropdown
};
