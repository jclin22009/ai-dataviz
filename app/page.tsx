import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, FileText, Upload } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Transform Your Reports into Interactive Dashboards
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Turn static investment banking and consulting reports into dynamic, interactive visualizations. 
              Upload your data and instantly generate P&L statements, KPIs, and actionable insights.
            </p>
            <div className="space-x-4">
              <Link href="/dashboard">
                <Button size="lg">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-primary" />
                <CardTitle>Static to Dynamic</CardTitle>
                <CardDescription>
                  Convert your existing reports into interactive dashboards with a single click
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Upload your reports and watch as we transform them into dynamic visualizations that bring your data to life.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary" />
                <CardTitle>Smart Analytics</CardTitle>
                <CardDescription>
                  Generate P&L statements and KPIs automatically from your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes your data to create comprehensive financial statements and identify key performance indicators.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Upload className="h-12 w-12 text-primary" />
                <CardTitle>Seamless Integration</CardTitle>
                <CardDescription>
                  Easy data upload and export capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Upload your data in various formats and export your dashboards to share with stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Choose Our Platform?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              In an industry worth over $800B, we&apos;re revolutionizing how consultants and bankers work with data. 
              Our platform saves countless hours of manual report generation while providing deeper insights through interactive visualizations.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 