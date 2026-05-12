import { jsx as e, jsxs as i, Fragment as v } from "react/jsx-runtime";
import { useState as C, useRef as ue, useEffect as be } from "react";
import o from "styled-components";
import { ThemeProvider as fe } from "@zendeskgarden/react-theming";
import { Avatar as w } from "@zendeskgarden/react-avatars";
import { U as me, R as Ce, z as ve, O as ie, V as oe, K as we, W as ye, S as ke, Q as Ie, T as ze, J as Se, a4 as $e, i as K, M, X as H, v as y, E as Ae, y as Q, a as Pe, Y as Me, H as V, g as re, u as te, t as Te, $ as Ge, s as Fe, F as Ne, A as Be, c as je, d as De, p as Le, P as Ke, w as ae, G as P, B as N, N as He, f as le, a2 as Ee, D as ce, a1 as We, x as Re, r as se, L as de, m as qe, h as Oe, I as pe, q as Qe, n as Ve, C as Je, b as Ue, Z as Ze, _ as Xe, l as q, k as m, o as l, e as Ye } from "./GlobalNavIcons-D6JQQ4hD.js";
import { d as _e, K as en, A as nn, C as on, V as rn, b as tn, W as an, Q as ln, c as cn, S as sn, a as dn } from "./AdminCenterMainContent-B74M0PH-.js";
const pn = o.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 256px;
  background-color: white;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  box-shadow: 0px 16px 24px 0px rgba(10, 13, 14, 0.16);
  padding: 4px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 2px;
`, hn = o.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  width: 100%;
  border: none;
  background-color: ${(n) => n.$isActive ? "#293239" : "transparent"};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${(n) => n.$isActive ? "white" : "#293239"};
  text-align: left;

  &:hover {
    background-color: ${(n) => n.$isActive ? "#293239" : "rgba(0, 0, 0, 0.04)"};
  }

  &:active {
    background-color: ${(n) => n.$isActive ? "#293239" : "rgba(0, 0, 0, 0.08)"};
  }
`, gn = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`, O = [
  { id: "support", name: "Support", icon: me },
  { id: "knowledge", name: "Knowledge", icon: Ce },
  { id: "ai-agents", name: "AI agents", icon: ve },
  { id: "chat", name: "Chat", icon: ie },
  { id: "voice", name: "Voice", icon: oe },
  { id: "analytics", name: "Analytics", icon: we },
  { id: "workforce-management", name: "Workforce management", icon: ye },
  { id: "quality-assurance", name: "Quality assurance", icon: ke },
  { id: "community", name: "Community", icon: Ie },
  { id: "sales", name: "Sales", icon: ze },
  { id: "admin-center", name: "Admin center", icon: Se }
], xn = ({ currentProduct: n = "support", onSelectProduct: g, onClose: r }) => {
  const x = (t) => {
    g?.(t), r?.();
  };
  return /* @__PURE__ */ e(pn, { children: O.map((t) => {
    const b = t.icon, a = t.id === n;
    return /* @__PURE__ */ i(
      hn,
      {
        $isActive: a,
        onClick: () => x(t.id),
        children: [
          /* @__PURE__ */ e(gn, { children: /* @__PURE__ */ e(b, { size: 20, color: a ? "white" : "#5C6970" }) }),
          /* @__PURE__ */ e("span", { children: t.name })
        ]
      },
      t.id
    );
  }) });
}, un = o.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f8f9f9;
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 10;
`, bn = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, fn = o.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 4px;
`, k = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, mn = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 40px;
`, E = o.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`, Cn = o.span`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #293239;
`, J = o.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 6px 12px;
  border-radius: 8px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;
`, L = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 320px;
  min-width: 240px;
  padding: 6px 12px;
  background-color: white;
  border: 1px solid #b0b8be;
  border-radius: 8px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #5c6970;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: #87929d;
  }

  &:focus-within {
    border-color: #1f73b7;
    outline: none;
  }
`, T = o.div`
  width: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`, G = o.div`
  width: 1px;
  height: 24px;
  background-color: #d8dcde;
`, vn = o.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    color: #848f99;
    cursor: not-allowed;
  }
`, W = o.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    color: #848f99;
    cursor: not-allowed;
    background-color: transparent;
  }
`, f = o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  padding: 0;
  position: relative;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    cursor: not-allowed;
  }
`, wn = o.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  background-color: #d93f4c;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.12px;
  color: white;
`;
o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const yn = ({ currentProduct: n = "support", onProductChange: g }) => {
  const [r, x] = C(!1), t = ue(null), b = (z) => {
    g?.(z);
  };
  be(() => {
    const z = (xe) => {
      t.current && !t.current.contains(xe.target) && x(!1);
    };
    if (r)
      return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, [r]);
  const a = O.find((z) => z.id === n) || O[0], I = n === "admin-center", B = n === "knowledge", h = n === "ai-agents", j = n === "workforce-management", D = n === "quality-assurance", ge = n === "analytics";
  return /* @__PURE__ */ i(un, { children: [
    /* @__PURE__ */ i(bn, { children: [
      /* @__PURE__ */ e(mn, { children: /* @__PURE__ */ e($e, { size: 20 }) }),
      /* @__PURE__ */ i(
        E,
        {
          ref: t,
          onClick: () => x(!r),
          children: [
            /* @__PURE__ */ e(Cn, { children: a.name }),
            /* @__PURE__ */ e(K, { size: 12 }),
            r && /* @__PURE__ */ e(
              xn,
              {
                currentProduct: n,
                onSelectProduct: b,
                onClose: () => x(!1)
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(fn, { children: I ? (
      // Admin Center Header
      /* @__PURE__ */ i(v, { children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(G, {}) }),
          /* @__PURE__ */ e(J, { children: "Camera obscura" })
        ] }),
        /* @__PURE__ */ i(k, { children: [
          /* @__PURE__ */ i(L, { children: [
            /* @__PURE__ */ e(M, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search admin center" })
          ] }),
          /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(H, { size: 20 }) }),
          /* @__PURE__ */ e(w, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(y, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : B ? (
      // Knowledge Header
      /* @__PURE__ */ i(v, { children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(G, {}) }),
          /* @__PURE__ */ i(E, { children: [
            /* @__PURE__ */ e("span", { style: { fontSize: "12px", fontWeight: 600, lineHeight: "16px", letterSpacing: "-0.0004px", color: "#293239" }, children: "Joe's Coffee" }),
            /* @__PURE__ */ e(K, { size: 12 })
          ] })
        ] }),
        /* @__PURE__ */ i(k, { children: [
          /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ e(W, { size: "small", children: "Create content" }),
            /* @__PURE__ */ e(W, { size: "small", disabled: !0, children: "Help center" })
          ] }),
          /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(H, { size: 20 }) }),
          /* @__PURE__ */ e(w, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(y, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : h ? (
      // AI Agents Header
      /* @__PURE__ */ i(v, { children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(G, {}) }),
          /* @__PURE__ */ e(J, { children: "Camera obscura" })
        ] }),
        /* @__PURE__ */ i(k, { children: [
          /* @__PURE__ */ i(E, { children: [
            /* @__PURE__ */ e("span", { style: { fontSize: "12px", fontWeight: 600, lineHeight: "16px", letterSpacing: "-0.0004px", color: "#293239" }, children: "Test bot" }),
            /* @__PURE__ */ e(K, { size: 12 })
          ] }),
          /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(H, { size: 20 }) }),
          /* @__PURE__ */ e(w, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(y, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : j ? (
      // Workforce Management Header
      /* @__PURE__ */ i(v, { children: [
        /* @__PURE__ */ e("div", {}),
        /* @__PURE__ */ i(k, { children: [
          /* @__PURE__ */ i(L, { children: [
            /* @__PURE__ */ e(M, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search" })
          ] }),
          /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(Ae, { size: 20 }) }),
          /* @__PURE__ */ e(w, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(y, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : D ? (
      // Quality Assurance Header
      /* @__PURE__ */ i(v, { children: [
        /* @__PURE__ */ e("div", {}),
        /* @__PURE__ */ i(k, { children: [
          /* @__PURE__ */ i(L, { children: [
            /* @__PURE__ */ e(M, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search" })
          ] }),
          /* @__PURE__ */ e(w, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(y, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : ge ? (
      // Analytics Header
      /* @__PURE__ */ i(v, { children: [
        /* @__PURE__ */ e("div", {}),
        /* @__PURE__ */ i(k, { children: [
          /* @__PURE__ */ i(L, { children: [
            /* @__PURE__ */ e(M, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search" })
          ] }),
          /* @__PURE__ */ e(w, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(y, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : (
      // Default Header
      /* @__PURE__ */ i(v, { children: [
        /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(G, {}) }),
          /* @__PURE__ */ i(vn, { children: [
            /* @__PURE__ */ e(Q, { size: 12 }),
            /* @__PURE__ */ e("span", { children: "Add" })
          ] })
        ] }),
        /* @__PURE__ */ i(k, { children: [
          /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(M, { size: 20 }) }),
            /* @__PURE__ */ e(W, { size: "small", disabled: !0, children: "Conversations" }),
            /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(ie, { size: 20 }) }),
            /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(oe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(G, {}) }),
          /* @__PURE__ */ i(f, { children: [
            /* @__PURE__ */ e(Pe, { size: 20 }),
            /* @__PURE__ */ e(wn, { children: "1" })
          ] }),
          /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(Me, { size: 20 }) }),
          /* @__PURE__ */ e(w, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(y, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) })
  ] });
}, kn = o.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 56px;
  height: 100%;
  padding: 12px 0;
  background-color: #f8f9f9;
  position: relative;
`, In = o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 231px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(92, 105, 112, 0.08));
  pointer-events: none;
`, zn = o.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 1;
`, Sn = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`, $n = o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: ${(n) => n.$isActive ? "#293239" : "transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 0;

  &:hover {
    background-color: ${(n) => n.$isActive ? "#293239" : "rgba(0, 0, 0, 0.08)"};
  }
`, An = o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`, Pn = o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 56px;
  height: 48px;
  padding: 0 16px;
`, Mn = o.div`
  width: 23px;
  height: 1px;
  background-color: #d8dcde;
`, Tn = o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: white;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.15s;
  padding: 0;
  box-shadow: 0px 4px 8px 0px rgba(10, 13, 14, 0.16);

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`, Gn = [
  { id: 0, icon: V, label: "Home" },
  { id: 1, icon: pe, label: "Inbox" },
  { id: 2, icon: Ue, label: "Contacts" },
  { id: 3, icon: re, label: "Organization" },
  { id: 4, icon: Ze, label: "Custom Objects" },
  { id: 5, icon: N, label: "Analytics" },
  { id: 6, icon: P, label: "Settings" }
], Fn = [
  { id: 0, icon: V, label: "Home" },
  { id: 1, icon: re, label: "Account" },
  { id: 2, icon: te, label: "People" },
  { id: 3, icon: Te, label: "Channels" },
  { id: 4, icon: Ge, label: "AI" },
  { id: 5, icon: Fe, label: "Workspaces" },
  { id: 6, icon: Ne, label: "Objects & rules" },
  { id: 7, icon: Be, label: "Apps and integrations" }
], Nn = [
  { id: 0, icon: V, label: "Home" },
  { id: 1, icon: je, label: "Knowledge" },
  { id: 2, icon: De, label: "Moderate content" },
  { id: 3, icon: Le, label: "Arrange content" },
  { id: 4, icon: Ke, label: "Customize design" },
  { id: 5, icon: ae, label: "User permissions" },
  { id: 6, icon: P, label: "Settings" }
], Bn = [
  { id: 0, icon: N, label: "Analytics" },
  { id: 1, icon: He, label: "Content" },
  { id: 2, icon: le, label: "Conversations" },
  { id: 3, icon: P, label: "Settings" },
  { id: 4, icon: null, label: "separator" },
  { id: 5, icon: Ee, label: "AI agent management" },
  { id: 6, icon: ae, label: "Permissions" },
  { id: 7, icon: ce, label: "Database" },
  { id: 8, icon: We, label: "Apps" },
  { id: 9, icon: Re, label: "Integrations" }
], jn = [
  { id: 0, icon: se, label: "Real-time monitoring" },
  { id: 1, icon: de, label: "Dashboard" },
  { id: 2, icon: N, label: "Reports" },
  { id: 3, icon: ce, label: "Data" },
  { id: 4, icon: qe, label: "Export" },
  { id: 5, icon: P, label: "Settings" }
], Dn = [
  { id: 0, icon: de, label: "Dashboard" },
  { id: 1, icon: le, label: "Conversations" },
  { id: 2, icon: Oe, label: "Reviews" },
  { id: 3, icon: pe, label: "Inbox" },
  { id: 4, icon: Qe, label: "Training" }
], Ln = [
  { id: 0, icon: se, label: "Real-time monitoring" },
  { id: 1, icon: N, label: "Analytics" },
  { id: 2, icon: Ve, label: "Forecasting" },
  { id: 3, icon: Je, label: "Scheduling" },
  { id: 4, icon: te, label: "Team" },
  { id: 5, icon: P, label: "Settings" }
], Kn = ({
  currentProduct: n,
  activeNavItem: g,
  setActiveNavItem: r,
  isSubnavExpanded: x,
  setIsSubnavExpanded: t
}) => {
  const b = n === "admin-center" ? Fn : n === "knowledge" ? Nn : n === "ai-agents" ? Bn : n === "analytics" ? jn : n === "quality-assurance" ? Dn : n === "workforce-management" ? Ln : Gn, B = n === "knowledge" || n === "ai-agents";
  return /* @__PURE__ */ i(kn, { children: [
    /* @__PURE__ */ e(In, {}),
    /* @__PURE__ */ e(zn, { children: b.map((h) => {
      if (h.label === "separator")
        return /* @__PURE__ */ e(Pn, { children: /* @__PURE__ */ e(Mn, {}) }, h.id);
      const j = g === h.id, D = typeof h.icon == "function" ? h.icon : null;
      return /* @__PURE__ */ e(Sn, { children: /* @__PURE__ */ e(
        $n,
        {
          $isActive: j,
          onClick: () => r(h.id),
          "aria-label": h.label,
          children: D ? /* @__PURE__ */ e(D, { size: 20, color: j ? "white" : "#5C6970" }) : h.icon
        }
      ) }, h.id);
    }) }),
    /* @__PURE__ */ e(An, { children: B && /* @__PURE__ */ e(
      Tn,
      {
        onClick: () => t(!x),
        "aria-label": x ? "Collapse" : "Expand",
        children: /* @__PURE__ */ e(Xe, { size: 20, color: "#5C6970" })
      }
    ) })
  ] });
}, Hn = o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
`, En = o.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 12px 12px 12px;
  width: 100%;
`, Wn = o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #2f3941;
  margin: 0;
  padding: 4px 0;
`, Rn = o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  padding: 0;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`, U = o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`, A = o.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 8px 0 12px;
  border-radius: 8px;
  background-color: ${(n) => n.$isCurrent ? "#293239" : "transparent"};
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${(n) => n.$isCurrent ? "#293239" : "rgba(92, 105, 112, 0.08)"};
  }

  &:active {
    background-color: ${(n) => n.$isCurrent ? "#293239" : "rgba(92, 105, 112, 0.16)"};
  }
`, u = o.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${(n) => n.$isCurrent ? "white" : "#2f3941"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`, S = o.div`
  display: flex;
  align-items: center;
  justify-center: center;
  min-width: 20px;
  height: 20px;
  padding: 2px 8px;
  background-color: rgba(92, 105, 112, 0.16);
  border-radius: 16px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #49545c;
  text-align: center;
`, qn = o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, On = o.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`, Qn = o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 8px 12px 8px;
`, Vn = o.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #68737d;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`, Jn = o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
`, Un = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
`, $ = o(A)`
  padding-left: ${(n) => n.$depth * 24 + 12}px;
`, Zn = () => {
  const [n, g] = C(!0);
  return /* @__PURE__ */ i(Hn, { children: [
    /* @__PURE__ */ i(En, { children: [
      /* @__PURE__ */ e(Wn, { children: "Knowledge" }),
      /* @__PURE__ */ e(Rn, { children: /* @__PURE__ */ e(Q, { size: 20, color: "#5C6970" }) })
    ] }),
    /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e(A, { $isCurrent: !0, children: /* @__PURE__ */ e(u, { $isCurrent: !0, children: "Sources" }) }) }),
    /* @__PURE__ */ i(qn, { children: [
      /* @__PURE__ */ i(On, { onClick: () => g(!n), children: [
        /* @__PURE__ */ i(Qn, { children: [
          /* @__PURE__ */ e(Vn, { children: "Content" }),
          /* @__PURE__ */ e(Jn, {})
        ] }),
        /* @__PURE__ */ e(Un, { children: n ? /* @__PURE__ */ e(q, { size: 16, color: "#5C6970" }) : /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }) })
      ] }),
      n && /* @__PURE__ */ i(U, { children: [
        /* @__PURE__ */ i(A, { children: [
          /* @__PURE__ */ e(u, { children: "All content" }),
          /* @__PURE__ */ e(S, { children: "24" })
        ] }),
        /* @__PURE__ */ i($, { $depth: 0, children: [
          /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(u, { style: { marginLeft: "8px" }, children: "Joe's Coffee" }),
          /* @__PURE__ */ e(S, { children: "24" })
        ] }),
        /* @__PURE__ */ i($, { $depth: 1, children: [
          /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(u, { style: { marginLeft: "8px" }, children: "Getting Started" })
        ] }),
        /* @__PURE__ */ i($, { $depth: 1, children: [
          /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(u, { style: { marginLeft: "8px" }, children: "Troubleshooting Guides" })
        ] }),
        /* @__PURE__ */ i($, { $depth: 1, children: [
          /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(u, { style: { marginLeft: "8px" }, children: "Product FAQs" })
        ] }),
        /* @__PURE__ */ i($, { $depth: 1, children: [
          /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(u, { style: { marginLeft: "8px" }, children: "Policies and Procedures" })
        ] }),
        /* @__PURE__ */ i($, { $depth: 0, children: [
          /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(u, { style: { marginLeft: "8px" }, children: "Confluence" }),
          /* @__PURE__ */ e(S, { children: "124" })
        ] }),
        /* @__PURE__ */ i(A, { children: [
          /* @__PURE__ */ e(u, { children: "Content blocks" }),
          /* @__PURE__ */ e(S, { children: "0" })
        ] }),
        /* @__PURE__ */ i(A, { children: [
          /* @__PURE__ */ e(u, { children: "Procedures" }),
          /* @__PURE__ */ e(S, { children: "12" })
        ] }),
        /* @__PURE__ */ i(A, { children: [
          /* @__PURE__ */ e(u, { children: "Media" }),
          /* @__PURE__ */ e(S, { children: "0" })
        ] })
      ] })
    ] })
  ] });
}, Xn = o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
  overflow-y: auto;
  overflow-x: hidden;
`, Yn = o.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 12px;
  width: 100%;
`, _n = o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #293239;
  margin: 0;
  padding: 4px 0;
`, he = o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  padding: 0;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`, c = o(he)`
  width: 24px;
  height: 24px;
  border-radius: 4px;
`, R = o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`, s = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 8px 0 12px;
  border-radius: 8px;
  background-color: ${(n) => n.$isCurrent ? "#293239" : "transparent"};
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${(n) => n.$isCurrent ? "#293239" : "rgba(92, 105, 112, 0.08)"};
  }

  &:active {
    background-color: ${(n) => n.$isCurrent ? "#293239" : "rgba(92, 105, 112, 0.16)"};
  }
`, d = o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  min-width: 0;
`, p = o.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${(n) => n.$isCurrent ? "white" : "#293239"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`, F = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 16px;
  padding: 2px 8px;
  background-color: rgba(92, 105, 112, 0.16);
  border-radius: 16px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #2f3941;
  text-align: center;
  flex-shrink: 0;
`, Z = o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, X = o.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`, Y = o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 4px 12px 8px;
`, _ = o.p`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #5c6970;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  flex-shrink: 0;
`, ee = o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
  min-width: 0;
`, ne = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
  flex-shrink: 0;
`, ei = () => {
  const [n, g] = C("agents"), [r, x] = C(!0), [t, b] = C(!0), a = (I) => {
    g(I);
  };
  return /* @__PURE__ */ i(Xn, { children: [
    /* @__PURE__ */ i(Yn, { children: [
      /* @__PURE__ */ e(_n, { children: "AI agents" }),
      /* @__PURE__ */ e(he, { "aria-label": "Add new", children: /* @__PURE__ */ e(Q, { size: 20, color: "#5C6970" }) })
    ] }),
    /* @__PURE__ */ i(R, { children: [
      /* @__PURE__ */ i(
        s,
        {
          $isCurrent: n === "agents",
          onClick: () => a("agents"),
          children: [
            /* @__PURE__ */ i(d, { children: [
              /* @__PURE__ */ e(N, { size: 20, color: n === "agents" ? "white" : "#5C6970" }),
              /* @__PURE__ */ e(p, { $isCurrent: n === "agents", children: "Agents" })
            ] }),
            /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: n === "agents" ? "white" : "#5C6970" }) })
          ]
        }
      ),
      /* @__PURE__ */ i(
        s,
        {
          $isCurrent: n === "conversations",
          onClick: () => a("conversations"),
          children: [
            /* @__PURE__ */ i(d, { children: [
              /* @__PURE__ */ e(Ye, { size: 20, color: "#5C6970" }),
              /* @__PURE__ */ e(p, { $isCurrent: n === "conversations", children: "Conversations" })
            ] }),
            /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
          ]
        }
      ),
      /* @__PURE__ */ i(
        s,
        {
          $isCurrent: n === "settings",
          onClick: () => a("settings"),
          children: [
            /* @__PURE__ */ i(d, { children: [
              /* @__PURE__ */ e(P, { size: 20, color: "#5C6970" }),
              /* @__PURE__ */ e(p, { $isCurrent: n === "settings", children: "Settings" })
            ] }),
            /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i(Z, { children: [
      /* @__PURE__ */ i(X, { onClick: () => x(!r), children: [
        /* @__PURE__ */ i(Y, { children: [
          /* @__PURE__ */ e(_, { children: "Agent Management" }),
          /* @__PURE__ */ e(ee, {})
        ] }),
        /* @__PURE__ */ e(ne, { children: r ? /* @__PURE__ */ e(q, { size: 16, color: "#5C6970" }) : /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }) })
      ] }),
      r && /* @__PURE__ */ i(R, { children: [
        /* @__PURE__ */ i(
          s,
          {
            $isCurrent: n === "agent-builder",
            onClick: () => a("agent-builder"),
            children: [
              /* @__PURE__ */ i(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: n === "agent-builder", children: "Agent builder" }),
                /* @__PURE__ */ e(F, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ i(
          s,
          {
            $isCurrent: n === "templates",
            onClick: () => a("templates"),
            children: [
              /* @__PURE__ */ i(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: n === "templates", children: "Templates" }),
                /* @__PURE__ */ e(F, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ i(
          s,
          {
            $isCurrent: n === "workflows",
            onClick: () => a("workflows"),
            children: [
              /* @__PURE__ */ i(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: n === "workflows", children: "Workflows" }),
                /* @__PURE__ */ e(F, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ i(
          s,
          {
            $isCurrent: n === "monitoring",
            onClick: () => a("monitoring"),
            children: [
              /* @__PURE__ */ i(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: n === "monitoring", children: "Monitoring" }),
                /* @__PURE__ */ e(F, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ i(
          s,
          {
            $isCurrent: n === "permissions",
            onClick: () => a("permissions"),
            children: [
              /* @__PURE__ */ i(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: n === "permissions", children: "Permissions" }),
                /* @__PURE__ */ e(F, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i(Z, { children: [
      /* @__PURE__ */ i(X, { onClick: () => b(!t), children: [
        /* @__PURE__ */ i(Y, { children: [
          /* @__PURE__ */ e(_, { children: "Data & Integration" }),
          /* @__PURE__ */ e(ee, {})
        ] }),
        /* @__PURE__ */ e(ne, { children: t ? /* @__PURE__ */ e(q, { size: 16, color: "#5C6970" }) : /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }) })
      ] }),
      t && /* @__PURE__ */ i(R, { children: [
        /* @__PURE__ */ i(
          s,
          {
            $isCurrent: n === "data-sources",
            onClick: () => a("data-sources"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: n === "data-sources", children: "Data sources" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ i(
          s,
          {
            $isCurrent: n === "knowledge-base",
            onClick: () => a("knowledge-base"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: n === "knowledge-base", children: "Knowledge base" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ i(
          s,
          {
            $isCurrent: n === "integrations",
            onClick: () => a("integrations"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: n === "integrations", children: "Integrations" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ i(
          s,
          {
            $isCurrent: n === "api-connections",
            onClick: () => a("api-connections"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: n === "api-connections", children: "API connections" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ i(
          s,
          {
            $isCurrent: n === "webhooks",
            onClick: () => a("webhooks"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: n === "webhooks", children: "Webhooks" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ i(
          s,
          {
            $isCurrent: n === "logs",
            onClick: () => a("logs"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: n === "logs", children: "Logs" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        )
      ] })
    ] })
  ] });
}, ni = o.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  position: relative;
  isolation: isolate;
`, ii = o.div`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`, oi = o.div`
  display: flex;
`, ri = o.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-top: 4px;
  isolation: isolate;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(10, 13, 14, 0.16);
  border-radius: 8px 0px 0px 0px;
  flex: 1;
  align-self: stretch;
`, hi = () => {
  const [n, g] = C(0), [r, x] = C("support"), [t, b] = C(!1);
  return /* @__PURE__ */ e(fe, { children: /* @__PURE__ */ i(ni, { children: [
    /* @__PURE__ */ e(
      yn,
      {
        currentProduct: r,
        onProductChange: (h) => {
          x(h), g(0), b(!1);
        }
      }
    ),
    /* @__PURE__ */ i(ii, { children: [
      /* @__PURE__ */ i(oi, { children: [
        /* @__PURE__ */ e(
          Kn,
          {
            currentProduct: r,
            activeNavItem: n,
            setActiveNavItem: g,
            isSubnavExpanded: t,
            setIsSubnavExpanded: b
          }
        ),
        r === "knowledge" && t && /* @__PURE__ */ e(Zn, {}),
        r === "ai-agents" && t && /* @__PURE__ */ e(ei, {})
      ] }),
      /* @__PURE__ */ i(ri, { children: [
        r === "support" && /* @__PURE__ */ e(_e, {}),
        r === "knowledge" && /* @__PURE__ */ e(en, {}),
        r === "ai-agents" && /* @__PURE__ */ e(nn, {}),
        r === "chat" && /* @__PURE__ */ e(on, {}),
        r === "voice" && /* @__PURE__ */ e(rn, {}),
        r === "analytics" && /* @__PURE__ */ e(tn, {}),
        r === "workforce-management" && /* @__PURE__ */ e(an, {}),
        r === "quality-assurance" && /* @__PURE__ */ e(ln, {}),
        r === "community" && /* @__PURE__ */ e(cn, {}),
        r === "sales" && /* @__PURE__ */ e(sn, {}),
        r === "admin-center" && /* @__PURE__ */ e(dn, {})
      ] })
    ] })
  ] }) });
};
export {
  ei as A,
  hi as G,
  Zn as K,
  Kn as M,
  xn as P,
  yn as T,
  O as p
};
//# sourceMappingURL=GlobalNavPageTemplate-xW80uU_V.js.map
