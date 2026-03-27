import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useCallback } from 'react'
import { useTheme } from '../../registry/theme'
import {
  Bar, BarChart, Line, LineChart, Area, AreaChart, Pie, PieChart,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  RadialBarChart, RadialBar,
  CartesianGrid, XAxis, YAxis, Cell,
} from 'recharts'
import {
  ChartContainer, ChartTooltip, ChartTooltipContent,
  ChartLegend, ChartLegendContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/charts')({
  component: Charts,
})

// --- Data ---

const monthlyData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'Jun', desktop: 214, mobile: 140 },
]

const revenueData = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5800 },
  { month: 'Mar', revenue: 3900 },
  { month: 'Apr', revenue: 6100 },
  { month: 'May', revenue: 5200 },
  { month: 'Jun', revenue: 7400 },
]

const browserData = [
  { browser: 'Chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'Safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'Firefox', visitors: 187, fill: 'var(--color-firefox)' },
  { browser: 'Edge', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'Other', visitors: 90, fill: 'var(--color-other)' },
]

const radarData = [
  { skill: 'Design', a: 120, b: 80 },
  { skill: 'Frontend', a: 98, b: 130 },
  { skill: 'Backend', a: 86, b: 110 },
  { skill: 'DevOps', a: 99, b: 95 },
  { skill: 'Testing', a: 85, b: 90 },
  { skill: 'Mobile', a: 65, b: 85 },
]

const radialData = [
  { name: 'Progress', value: 72, fill: 'var(--color-progress)' },
]

const stackedData = [
  { month: 'Jan', organic: 120, paid: 80, referral: 40 },
  { month: 'Feb', organic: 150, paid: 95, referral: 55 },
  { month: 'Mar', organic: 180, paid: 70, referral: 60 },
  { month: 'Apr', organic: 130, paid: 110, referral: 45 },
  { month: 'May', organic: 170, paid: 90, referral: 70 },
  { month: 'Jun', organic: 200, paid: 100, referral: 80 },
]

const multiLineData = [
  { month: 'Jan', users: 2400, sessions: 4000, pageviews: 8000 },
  { month: 'Feb', users: 1398, sessions: 3000, pageviews: 6800 },
  { month: 'Mar', users: 3800, sessions: 5000, pageviews: 9200 },
  { month: 'Apr', users: 3908, sessions: 4780, pageviews: 8600 },
  { month: 'May', users: 4800, sessions: 5890, pageviews: 10200 },
  { month: 'Jun', users: 3800, sessions: 4390, pageviews: 8800 },
]

// --- Configs ---

const barConfig: ChartConfig = {
  desktop: { label: 'Desktop', color: 'var(--chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--chart-2)' },
}

const lineConfig: ChartConfig = {
  revenue: { label: 'Revenue', color: 'var(--chart-1)' },
}

const areaConfig: ChartConfig = {
  desktop: { label: 'Desktop', color: 'var(--chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--chart-2)' },
}

const pieConfig: ChartConfig = {
  visitors: { label: 'Visitors' },
  chrome: { label: 'Chrome', color: 'var(--chart-1)' },
  safari: { label: 'Safari', color: 'var(--chart-2)' },
  firefox: { label: 'Firefox', color: 'var(--chart-3)' },
  edge: { label: 'Edge', color: 'var(--chart-4)' },
  other: { label: 'Other', color: 'var(--chart-5)' },
}

const radarConfig: ChartConfig = {
  a: { label: 'Team A', color: 'var(--chart-1)' },
  b: { label: 'Team B', color: 'var(--chart-2)' },
}

const radialConfig: ChartConfig = {
  progress: { label: 'Progress', color: 'var(--chart-1)' },
}

const stackedConfig: ChartConfig = {
  organic: { label: 'Organic', color: 'var(--chart-1)' },
  paid: { label: 'Paid', color: 'var(--chart-2)' },
  referral: { label: 'Referral', color: 'var(--chart-3)' },
}

const multiLineConfig: ChartConfig = {
  users: { label: 'Users', color: 'var(--chart-1)' },
  sessions: { label: 'Sessions', color: 'var(--chart-2)' },
  pageviews: { label: 'Pageviews', color: 'var(--chart-3)' },
}

const SECTIONS = [
  { id: 'bar', label: 'Bar Chart' },
  { id: 'line', label: 'Line Chart' },
  { id: 'area', label: 'Area Chart' },
  { id: 'pie', label: 'Pie Chart' },
  { id: 'radar', label: 'Radar Chart' },
  { id: 'radial', label: 'Radial Chart' },
  { id: 'stacked-bar', label: 'Stacked Bar' },
  { id: 'multi-line', label: 'Multi Line' },
]

function Charts() {
  const { colorMode, cycleColorMode } = useTheme()
  const [search, setSearch] = useState('')
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-10% 0px -80% 0px' }
    )
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  const filteredSections = SECTIONS.filter((s) =>
    s.label.toLowerCase().includes(search.toLowerCase())
  )

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-14">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
              material-shadcn
            </Link>
            <nav className="hidden items-center gap-1 sm:flex">
              <Link to="/docs" className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">Docs</Link>
              <Link to="/components" className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">Components</Link>
              <Link to="/charts" className="rounded-md px-3 py-1.5 text-sm font-medium text-foreground">Charts</Link>
            </nav>
          </div>
          <div className="flex items-center gap-1">
            <span className="hidden text-xs text-muted-foreground sm:inline mr-2">
              {SECTIONS.length} charts
            </span>
            <a
              href="https://github.com/sazzad/material-shadcn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              title="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <button
              onClick={cycleColorMode}
              className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              title={colorMode === 'system' ? 'System theme' : colorMode === 'light' ? 'Light theme' : 'Dark theme'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {colorMode === 'dark' ? (
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                ) : colorMode === 'light' ? (
                  <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></>
                ) : (
                  <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto border-r border-border p-4 lg:block">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-3 w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
          <nav className="flex flex-col gap-0.5">
            {filteredSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`rounded-md px-2 py-1 text-left text-xs transition-colors ${
                  activeId === s.id
                    ? 'bg-primary/10 font-medium text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 space-y-8 p-6 lg:p-8">
          <div className="mb-2">
            <h1 className="text-2xl font-bold tracking-tight">Charts</h1>
            <p className="text-sm text-muted-foreground">
              Recharts powered by shadcn/ui chart components with Material 3 color tokens.
            </p>
          </div>

          {/* Bar Chart */}
          <section id="bar" className="scroll-mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Bar Chart</CardTitle>
                <CardDescription>Desktop vs Mobile visitors by month.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={barConfig} className="h-72 w-full">
                  <BarChart data={monthlyData} accessibilityLayer>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </section>

          {/* Line Chart */}
          <section id="line" className="scroll-mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Line Chart</CardTitle>
                <CardDescription>Monthly revenue trend.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={lineConfig} className="h-72 w-full">
                  <LineChart data={revenueData} accessibilityLayer>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </section>

          {/* Area Chart */}
          <section id="area" className="scroll-mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Area Chart</CardTitle>
                <CardDescription>Stacked area showing desktop and mobile traffic.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={areaConfig} className="h-72 w-full">
                  <AreaChart data={monthlyData} accessibilityLayer>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <defs>
                      <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="mobile" stroke="var(--color-mobile)" fill="url(#fillMobile)" stackId="1" />
                    <Area type="monotone" dataKey="desktop" stroke="var(--color-desktop)" fill="url(#fillDesktop)" stackId="1" />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </section>

          {/* Pie Chart */}
          <section id="pie" className="scroll-mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Pie Chart</CardTitle>
                <CardDescription>Browser market share breakdown.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={pieConfig} className="mx-auto h-72 w-full max-w-sm">
                  <PieChart accessibilityLayer>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie data={browserData} dataKey="visitors" nameKey="browser" innerRadius={60} strokeWidth={5}>
                      <Cell key="chrome" fill="var(--color-chrome)" />
                      <Cell key="safari" fill="var(--color-safari)" />
                      <Cell key="firefox" fill="var(--color-firefox)" />
                      <Cell key="edge" fill="var(--color-edge)" />
                      <Cell key="other" fill="var(--color-other)" />
                    </Pie>
                    <ChartLegend content={<ChartLegendContent nameKey="browser" />} />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </section>

          {/* Radar Chart */}
          <section id="radar" className="scroll-mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Radar Chart</CardTitle>
                <CardDescription>Team skill comparison across categories.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={radarConfig} className="mx-auto h-72 w-full max-w-sm">
                  <RadarChart data={radarData} accessibilityLayer>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="a" dataKey="a" stroke="var(--color-a)" fill="var(--color-a)" fillOpacity={0.3} />
                    <Radar name="b" dataKey="b" stroke="var(--color-b)" fill="var(--color-b)" fillOpacity={0.3} />
                    <ChartLegend content={<ChartLegendContent />} />
                  </RadarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </section>

          {/* Radial Chart */}
          <section id="radial" className="scroll-mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Radial Chart</CardTitle>
                <CardDescription>Goal completion progress.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={radialConfig} className="mx-auto h-72 w-full max-w-sm">
                  <RadialBarChart data={radialData} startAngle={180} endAngle={0} innerRadius={80} outerRadius={130} accessibilityLayer>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <PolarGrid gridType="circle" radialLines={false} stroke="none" polarRadius={[86, 74]} className="first:fill-muted last:fill-background" />
                    <RadialBar dataKey="value" background cornerRadius={10} fill="var(--color-progress)" />
                  </RadialBarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </section>

          {/* Stacked Bar Chart */}
          <section id="stacked-bar" className="scroll-mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Stacked Bar Chart</CardTitle>
                <CardDescription>Traffic sources breakdown by month.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={stackedConfig} className="h-72 w-full">
                  <BarChart data={stackedData} accessibilityLayer>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="organic" stackId="a" fill="var(--color-organic)" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="paid" stackId="a" fill="var(--color-paid)" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="referral" stackId="a" fill="var(--color-referral)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </section>

          {/* Multi Line Chart */}
          <section id="multi-line" className="scroll-mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Multi Line Chart</CardTitle>
                <CardDescription>Users, sessions, and pageviews over time.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={multiLineConfig} className="h-72 w-full">
                  <LineChart data={multiLineData} accessibilityLayer>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="users" stroke="var(--color-users)" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="sessions" stroke="var(--color-sessions)" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="pageviews" stroke="var(--color-pageviews)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </section>

          <div className="h-16" />
        </main>
      </div>
    </div>
  )
}
