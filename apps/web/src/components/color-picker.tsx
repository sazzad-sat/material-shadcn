import { useState } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'

interface ColorPickerProps {
  seed: string
  presets: Array<{ name: string; hex: string }>
  onChange: (hex: string) => void
}

export function ColorPicker({ seed, presets, onChange }: ColorPickerProps) {
  const [inputValue, setInputValue] = useState(seed)

  const handleInputChange = (value: string) => {
    setInputValue(value)
    if (/^#[0-9a-fA-F]{6}$/.test(value)) {
      onChange(value)
    }
  }

  const handlePresetClick = (hex: string) => {
    setInputValue(hex)
    onChange(hex)
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <Label className="mb-3 block text-sm font-medium">Seed Color</Label>
      <div className="flex items-center gap-3 mb-4">
        <input
          type="color"
          value={seed}
          onChange={(e) => {
            setInputValue(e.target.value.toUpperCase())
            onChange(e.target.value)
          }}
          className="h-10 w-14 cursor-pointer rounded-lg border border-border bg-transparent"
        />
        <Input
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="#6750A4"
          className="max-w-[140px] font-mono"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.hex}
            onClick={() => handlePresetClick(preset.hex)}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors ${
              seed.toUpperCase() === preset.hex.toUpperCase()
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border text-muted-foreground hover:bg-muted'
            }`}
          >
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: preset.hex }}
            />
            {preset.name}
          </button>
        ))}
      </div>
    </div>
  )
}
