# ⚡ Vite + React + TypeScript + TailwindCSS + shadcn/ui Setup Guide

This is guide on how to simply set up a new Vite + React + TypeScript project with Tailwind CSS and Shadcn/ui components from scratch, as of 22<sup>nd</sup>April, 2025.<br><br>

<p align="center">
  <span style="display: inline-block; background: white; border-radius: 12px; padding: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin-right: 20px;">
    <img src="./media/ShadCn.png" width="200" />
  </span>
  <span style="display: inline-block; background: white; border-radius: 12px; padding: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin-right: 20px;">
    <img src="./media/React.png" width="200" />
  </span>
  <span style="display: inline-block; background: white; border-radius: 12px; padding: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin-right: 20px;">
    <img src="./media/Tailwind.png" width="200" />
  </span>
  <span style="display: inline-block; background: white; border-radius: 12px; padding: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <img src="./media/TS.png" width="200" />
  </span>
</p>

---

<br><br>

## 🧱 Step 1: Create Project

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

---

<br><br>

## 🌀 Step 2: Install TailwindCSS

```bash
npm install -D tailwindcss@^3.4 postcss@^8 autoprefixer@^10
npx tailwindcss init -p
```

### 🧾 Update `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 🧵 Update `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

<br><br>

## 🛠️ Step 3: Configure Files

### 🔧 Update `tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "jsx": "react-jsx",
    "esModuleInterop": true
  }
}
```

---

<br><br>

### 🔧 Update `vite.config.json`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

---

<br><br>

## 🧩 Step 4: Install shadcn/ui

```bash
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-variants
npx shadcn@latest init
```

I usually use the following:

- **New York** (Reccomended)
- **Neutral**

---

<br><br>

## 🔘 Step 5: Test a Component

Install the button component:

```bash
npx shadcn@latest add button
```

_Note_: We use --force flag for now.

Update `src/App.tsx` to test the button:

```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">
        Vite + React + TypeScript project with Tailwind CSS and Shadcn/ui
        components
      </h1>
      <Button onClick={() => setCount(count + 1)}>Count is {count}</Button>

      <p className="mt-12 text-sm font-thin text-gray-700">
        If you liked this resource, give it a star on{" "}
        <a
          href="https://github.com/Lightxxo/vite-react-typescript-tailwind-shadcn-template"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          GitHub
        </a>
        !
      </p>
    </div>
  );
}

export default App;
```

Start the dev server:

```bash
npm run dev
```

✅ You should see the button styled with Tailwind and shadcn/ui.
<br><br>

<p align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWpnaXNudnMxNDZqajNrb3AwZWpmYmdiMWgyZmMxYXJvMzk4NWRrMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dnCNI8LEf7K4otcMqS/giphy.gif" />
</p>

---

<p align="center">
©️ For future reference only. All steps verified to work as of 22<sup>nd</sup>April, 2025.
</p>
