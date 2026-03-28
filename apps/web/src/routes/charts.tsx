import { createFileRoute } from '@tanstack/react-router'
import { useSidebarNav } from '@/hooks/use-sidebar-nav'
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
  const { search, setSearch, activeId, filteredSections, scrollTo } = useSidebarNav(SECTIONS)

  return (
    <div className="mx-auto max-w-6xl flex px-6">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-48 shrink-0 pt-8 pb-8 pr-8 lg:block overflow-y-auto">
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
                className={`rounded-md px-3 py-1.5 text-left text-sm transition-colors ${
                  activeId === s.id
                    ? 'font-medium text-foreground bg-muted/50'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 py-12 lg:pl-4 space-y-8">
          <div className="mb-2">
            <h1 className="text-2xl font-bold tracking-tight">Charts</h1>
            <p className="text-sm text-muted-foreground">
              Recharts powered by shadcn/ui chart components with Material 3 color tokens.
            </p>
          </div>

          {/* Bar Chart */}
          <section id="bar" className="scroll-mt-20">
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
          <section id="line" className="scroll-mt-20">
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
          <section id="area" className="scroll-mt-20">
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
          <section id="pie" className="scroll-mt-20">
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
          <section id="radar" className="scroll-mt-20">
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
          <section id="radial" className="scroll-mt-20">
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
          <section id="stacked-bar" className="scroll-mt-20">
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
          <section id="multi-line" className="scroll-mt-20">
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

        </main>
    </div>
  )
}
