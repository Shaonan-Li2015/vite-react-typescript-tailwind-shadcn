---

## 📦 Vite + React + TypeScript + Tailwind CSS + shadcn-ui Starter

This project is a fully automated front-end development environment built with:

- ⚡ [Vite](https://vitejs.dev/) – lightning-fast build tool
- ⚛️ [React](https://react.dev/) – component-based UI library
- 🧠 [TypeScript](https://www.typescriptlang.org/) – static typing for scalable code
- 🎨 [Tailwind CSS v4](https://tailwindcss.com/) – utility-first styling
- 🧩 [shadcn-ui](https://ui.shadcn.com/) – accessible, customizable UI components
- 🧰 GitHub Codespaces + Devcontainer – cloud-based development with zero setup

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Open in GitHub Codespaces

- Click the green **Code** button → **Codespaces** → **Create codespace on main**
- The devcontainer will automatically install dependencies and configure the environment

---

## 🛠️ Devcontainer Features

- Node.js 20 environment
- Preinstalled VS Code extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
- Auto-runs `npm install` and `npm run setup` on first launch
- Port 5173 forwarded for Vite dev server preview

---

## 📜 Setup Script (`setup.js`)

This script automates:
- Creating `tailwind.config.js` and `postcss.config.js` if missing
- Ensuring `src/index.css` includes Tailwind v4 import
- Initializing `shadcn-ui` if not already done

Run manually if needed:

```bash
npm run setup
```

---

## 🧪 Development

Start the dev server:

```bash
npm run dev
```

Preview will open automatically in Codespaces.

---

## 📁 Project Structure

```
src/
├── App.tsx
├── main.tsx
├── index.css
tailwind.config.js
postcss.config.js
vite.config.ts
setup.js
.devcontainer/
└── devcontainer.json
```

---

## ✅ Next Steps

- Add your first shadcn-ui component: `npx shadcn-ui add button`
- Customize Tailwind theme in `tailwind.config.js`
- Deploy to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)

---

https://auth.openai.com/oauth/authorize?response_type=code&client_id=app_EMoamEEZ73f0CkXaXp7hrann&redirect_uri=http%3A%2F%2Flocalhost%3
A1455%2Fauth%2Fcallback&scope=openid%20profile%20email%20offline_access&code_challenge=4eYSXlG2OdTdEwqTHnYBXdaN3dhgKjeAxShFxaqM-vo&code
_challenge_method=S256&id_token_add_organizations=true&codex_cli_simplified_flow=true&state=-VsT1gUU_aJikelSpcB1Eq2NnritaHhXy2dXFLajABs
&originator=codex_cli_rs

Let me know if you'd like to personalize this further or add badges, screenshots, or deployment instructions. You're building something seriously solid here.
