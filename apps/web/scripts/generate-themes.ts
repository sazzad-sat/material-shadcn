import { generateRegistryTheme } from 'material-shadcn'
import { writeFileSync } from 'fs'
import { join } from 'path'

const PRESETS = [
  { name: 'purple', hex: '#6750A4' },
  { name: 'blue', hex: '#1B6EF3' },
  { name: 'teal', hex: '#006B5E' },
  { name: 'green', hex: '#386A20' },
  { name: 'red', hex: '#BA1A1A' },
  { name: 'orange', hex: '#8B5000' },
  { name: 'pink', hex: '#984061' },
  { name: 'indigo', hex: '#3F51B5' },
  { name: 'cyan', hex: '#006876' },
  { name: 'yellow', hex: '#6D5E00' },
  { name: 'lime', hex: '#4B6700' },
  { name: 'brown', hex: '#6B4F3A' },
  { name: 'grey', hex: '#5E5E5E' },
  { name: 'deep-purple', hex: '#512DA8' },
  { name: 'light-blue', hex: '#0288D1' },
]

const outDir = join(import.meta.dirname, '../public/registry')

for (const { name, hex } of PRESETS) {
  const colorCode = hex.replace('#', '')
  const theme = generateRegistryTheme({ seed: hex })
  const path = join(outDir, `${colorCode}.json`)
  writeFileSync(path, JSON.stringify(theme, null, 2))
  console.log(`Generated ${name} → ${colorCode}.json`)
}

console.log(`\nDone! Generated ${PRESETS.length} themes.`)
