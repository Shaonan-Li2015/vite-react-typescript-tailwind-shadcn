// setup.js
import { existsSync, writeFileSync, readFileSync } from 'fs'
import { execSync } from 'child_process'

console.log('🔧 Running setup.js...')

// 1. Create tailwind.config.js if missing
if (!existsSync('tailwind.config.js')) {
  console.log('📦 Creating tailwind.config.js...')
  writeFileSync(
    'tailwind.config.js',
    `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
`
  )
}

// 2. Create postcss.config.js if missing
if (!existsSync('postcss.config.js')) {
  console.log('📦 Creating postcss.config.js...')
  writeFileSync(
    'postcss.config.js',
    `export default {
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
  if (!cssContent.includes('@import "tailwindcss";')) {
    console.log('🎨 Updating src/index.css...')
    writeFileSync(cssPath, '@import "tailwindcss";\n')
  }
}

// 4. Initialize shadcn-ui if not already
if (!existsSync('components.json')) {
  console.log('🧩 Initializing shadcn-ui...')
  execSync('npx shadcn-ui@latest init', { stdio: 'inherit' })
}

console.log('✅ Setup complete!')
