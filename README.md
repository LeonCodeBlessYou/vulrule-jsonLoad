# How to modify the data and publish new Github Page
1. Modify the `$VULRULE-JSONLOAD/src/data/data.json`.
2. Run `npm run dev` to start local testing.
3. Run `npm run build` to build resource for generating the Github Page. `$VULRULE-JSONLOAD/dist/index.html` and `$VULRULE-JSONLOAD/dist/rule/` are the flags of a successful build.
4. Run `npm run deploy` to publish the Github page.
5. Wait several minutes for update and visit `https://leoncodeblessyou.github.io/vulrule-jsonLoad`

#### When rebuild the Github Page, Run:
```
rm -rf dist         
npm run build
npm run deploy
```

# Public JSON API
We provide a public JSON API for researchers and developers.

## Get All Rules

You can fetch all the rules in JSON format via the following endpoint:

```
GET https://leoncodeblessyou.github.io/vulrule-jsonLoad/api/rules.json
```

This endpoint returns the entire rule dataset as a JSON array.

---

## Sample Response (truncated)

```json
[
  {
    "tool_name": "CodeQL",
    "lib_name": "libdbus",
    "api_name": "_dbus_connection_new_for_transport",
    "title": "Use-after-free in dbus",
    "rule": {
      "Description": "Checks if ...",
      "Label": ["security", "memory"],
      "Parameter-index": [0],
      "cweType-and-QLCode": [
        {
          "cweType": ["CWE-416"],
          "QLCode": "..."
        }
      ]
    }
  },
  ...
]
```

---

## How to Use the API

### Python Example

```python
import requests

url = "https://leoncodeblessyou.github.io/vulrule-jsonLoad/api/rules.json"
response = requests.get(url)

if response.ok:
    rules = response.json()
    print("Total rules:", len(rules))
    print("First rule:", rules[0]["api_name"])
else:
    print("Failed to fetch rules:", response.status_code)
```

### Command-line (curl)

```bash
curl https://leoncodeblessyou.github.io/vulrule-jsonLoad/api/rules.json -o rules.json
```

---

### 📎 Notes

- This is a **static API** hosted on GitHub Pages.
- The data is auto-generated from [`./src/data/data.json`](./src/data/data.json).
- If you want to contribute or request additional endpoints (e.g. per-rule query), feel free to open an issue.
---
---


# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
