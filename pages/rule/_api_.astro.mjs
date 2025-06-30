import { c as createAstro, a as createComponent, r as renderHead, b as renderTemplate } from '../../chunks/astro/server_BDjZtyWT.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { d as data } from '../../chunks/data_CyPVoMY0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://leoncodeblessyou.github.io/vulrule-jsonLoad/");
async function getStaticPaths() {
  const paths = data.map((rule) => ({
    params: { api: rule.api_name }
    // 这是动态路由中的参数
  }));
  return paths;
}
const $$api = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$api;
  const { api } = Astro2.params;
  const rule = data.find((r) => r.api_name === api);
  if (!rule) {
    throw new Error(`Rule Not Found\uFF1A${api}`);
  }
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${rule.tool_name} - ${rule.lib_name} - ${rule.api_name}</title>${renderHead()}</head> <body> <header> <h1>${rule.tool_name} - ${rule.lib_name} - ${rule.api_name}</h1> <nav> <a href="/">Return to Homepage</a> </nav> </header> <main> <h2>Rule Profile</h2> <p><strong>Description: </strong>${rule.rule.Description}</p> <!-- 检查并显示 Label --> <p><strong>Label: </strong>${Array.isArray(rule.rule.Label) ? rule.rule.Label.join(", ") : "N/A"}</p> <!-- 检查并显示 Parameter-index --> <p><strong>Parameter Index: </strong>${Array.isArray(rule.rule["Parameter-index"]) ? rule.rule["Parameter-index"].join(", ") : "N/A"}</p> ${rule.rule["cweType-and-QLCode"].map((cwe) => renderTemplate`<div> <h4>CWE Type：${Array.isArray(cwe.cweType) ? cwe.cweType.join(", ") : "N/A"}</h4> <h4>QLCode:</h4> <pre>${cwe.QLCode}</pre> </div>`)} </main> </body></html>`;
}, "/Users/luyang/Desktop/\u79D1\u7814/vulrule/vulrule-jsonLoad/src/pages/rule/[api].astro", void 0);

const $$file = "/Users/luyang/Desktop/科研/vulrule/vulrule-jsonLoad/src/pages/rule/[api].astro";
const $$url = "/vulrule-jsonLoad/rule/[api]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$api,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
