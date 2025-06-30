import { c as createAstro, a as createComponent, r as renderHead, d as addAttribute, b as renderTemplate } from '../chunks/astro/server_BDjZtyWT.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { d as data } from '../chunks/data_CyPVoMY0.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://leoncodeblessyou.github.io/vulrule-jsonLoad/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const rules = data;
  const categorizedRules = rules.reduce((acc, rule) => {
    if (!acc[rule.lib_name]) {
      acc[rule.lib_name] = {};
    }
    if (!acc[rule.lib_name][rule.tool_name]) {
      acc[rule.lib_name][rule.tool_name] = [];
    }
    acc[rule.lib_name][rule.tool_name].push(rule);
    return acc;
  }, {});
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>漏洞规则库 Homepage: All Rules</title>${renderHead()}</head> <body data-astro-cid-j7pv25f6> <header data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>漏洞规则库 Homepage: All Rules</h1> </header> <main data-astro-cid-j7pv25f6> ${Object.keys(categorizedRules).map((libName) => renderTemplate`<section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>${libName}</h2> ${Object.keys(categorizedRules[libName]).map((toolName) => renderTemplate`<div data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${toolName}</h3> <ul data-astro-cid-j7pv25f6> ${categorizedRules[libName][toolName].map((rule) => renderTemplate`<li data-astro-cid-j7pv25f6> <a${addAttribute(Astro2.resolve(`/rule/${rule.api}`), "href")} data-astro-cid-j7pv25f6>${rule.title}</a> </li>`)} </ul> </div>`)} </section>`)} </main> </body></html>`;
}, "/Users/luyang/Desktop/\u79D1\u7814/vulrule/vulrule-jsonLoad/src/pages/index.astro", void 0);

const $$file = "/Users/luyang/Desktop/科研/vulrule/vulrule-jsonLoad/src/pages/index.astro";
const $$url = "/vulrule-jsonLoad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
