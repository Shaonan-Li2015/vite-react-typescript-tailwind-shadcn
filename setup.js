// setup.js
import { existsSync, writeFileSync, readFileSync } from 'fs'
import { execSync } from 'child_process'

console.log('🔧 Running setup.js...')

// 1. Create tailwind.config.cjs if missing (CommonJS for projects with "type": "module")
if (!existsSync('tailwind.config.cjs')) {
  console.log('📦 Creating tailwind.config.cjs...')
  writeFileSync(
    'tailwind.config.cjs',
    `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
`
  )
}

// 2. Create postcss.config.cjs if missing (CommonJS)
if (!existsSync('postcss.config.cjs')) {
  console.log('📦 Creating postcss.config.cjs...')
  writeFileSync(
    'postcss.config.cjs',
    `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`
  )
}

// 3. Ensure src/index.css has Tailwind import
const cssPath = 'src/index.css'
if (existsSync(cssPath)) {
  const cssContent = readFileSync(cssPath, 'utf-8')
  if (!cssContent.includes('@import "tailwindcss/preflight"')) {
    console.log('🎨 Updating src/index.css for Tailwind v4...')
    writeFileSync(cssPath, '@import "tailwindcss/preflight";\n@import "tailwindcss/utilities";\n')
  }
}

// 4. Initialize shadcn-ui if not already
if (!existsSync('components.json')) {
  console.log('🧩 Initializing shadcn-ui...')
  execSync('npx shadcn-ui@latest init', { stdio: 'inherit' })
}

console.log('✅ Setup complete!')
