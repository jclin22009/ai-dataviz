import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, BarChart3, PieChart, TrendingUp, Coins } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* File Upload Section */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Upload Your Report</CardTitle>
              <CardDescription>
                Convert your static reports and data into interactive visualizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4 py-12">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-semibold">Drag & Drop your file here</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Support for Excel, CSV, and PDF files
                  </p>
                  <Button className="mt-4">Browse Files</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Tabs */}
          <Tabs defaultValue="visuals" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="visuals">Visualizations</TabsTrigger>
              <TabsTrigger value="pnl">P&L Statement</TabsTrigger>
              <TabsTrigger value="kpis">Key Metrics</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>
            
            {/* Visualization Tab */}
            <TabsContent value="visuals" className="space-y-4">
              <h2 className="text-xl font-semibold mb-2">Interactive Visualizations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Revenue Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-center py-8">
                      <PieChart className="h-24 w-24 text-primary/50" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Performance Trends</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-center py-8">
                      <TrendingUp className="h-24 w-24 text-primary/50" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Cash Flow</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-center py-8">
                      <BarChart3 className="h-24 w-24 text-primary/50" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            {/* P&L Tab */}
            <TabsContent value="pnl">
              <Card>
                <CardHeader>
                  <CardTitle>Profit & Loss Statement</CardTitle>
                  <CardDescription>
                    AI-generated financial statement based on your uploaded data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-semibold">Revenue</span>
                      <span className="font-semibold text-green-600">$0</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Cost of Revenue</span>
                      <span className="text-red-600">$0</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-semibold">Gross Profit</span>
                      <span className="font-semibold">$0</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Operating Expenses</span>
                      <span className="text-red-600">$0</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-semibold">Operating Income</span>
                      <span className="font-semibold">$0</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Other Income</span>
                      <span>$0</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-semibold">Net Income</span>
                      <span className="font-semibold">$0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* KPIs Tab */}
            <TabsContent value="kpis" className="space-y-4">
              <h2 className="text-xl font-semibold mb-2">Key Performance Indicators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center">
                      <Coins className="h-8 w-8 text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">Profit Margin</p>
                      <h3 className="text-2xl font-bold">--</h3>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center">
                      <BarChart3 className="h-8 w-8 text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">Revenue Growth</p>
                      <h3 className="text-2xl font-bold">--</h3>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center">
                      <TrendingUp className="h-8 w-8 text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">ROI</p>
                      <h3 className="text-2xl font-bold">--</h3>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center">
                      <FileText className="h-8 w-8 text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">Asset Turnover</p>
                      <h3 className="text-2xl font-bold">--</h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Insights Tab */}
            <TabsContent value="insights">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Generated Insights</CardTitle>
                  <CardDescription>
                    Actionable insights and recommendations based on your data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground italic">
                      Upload a report to generate AI insights about your data
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
