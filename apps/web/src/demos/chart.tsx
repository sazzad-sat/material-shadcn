import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'

export function ChartDemo() {
  return (
    <div className="w-full max-w-md">
      <ChartContainer className="aspect-auto h-48 w-full" config={{
        value: { label: "Value", theme: { light: "oklch(0.491 0.092 295.5)", dark: "oklch(0.836 0.092 297.1)" } },
      }}>
        <BarChart data={[
          { name: "Jan", value: 186 },
          { name: "Feb", value: 305 },
          { name: "Mar", value: 237 },
          { name: "Apr", value: 173 },
          { name: "May", value: 209 },
        ]}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
          <ChartTooltip content={<ChartTooltipContent />} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
