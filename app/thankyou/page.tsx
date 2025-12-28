import { CheckCircle2, Heart, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function ThankYouPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
                <div className="max-w-3xl w-full text-center space-y-8">
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
                            <CheckCircle2 className="w-20 h-20 md:w-24 md:h-24 text-primary relative animate-scale-in" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                            You're Changing Lives Today
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
                            Your donation is more than a gift. It's hope, opportunity, and real change for those who need it most.
                            Together, we're building a better world for our community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                        <Card className="bg-accent/30 border-accent">
                            <CardContent className="pt-6 pb-6">
                                <div className="flex justify-center mb-2">
                                    <Users className="w-8 h-8 text-accent-foreground" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-accent-foreground">500+</div>
                                <div className="text-sm text-muted-foreground mt-1">Lives impacted</div>
                            </CardContent>
                        </Card>
                        <Card className="bg-primary/10 border-primary/30">
                            <CardContent className="pt-6 pb-6">
                                <div className="flex justify-center mb-2">
                                    <Heart className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                                <div className="text-sm text-muted-foreground mt-1">Goes directly to mission</div>
                            </CardContent>
                        </Card>
                        <Card className="bg-accent/30 border-accent">
                            <CardContent className="pt-6 pb-6">
                                <div className="flex justify-center mb-2">
                                    <Globe className="w-8 h-8 text-accent-foreground" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-accent-foreground">Local</div>
                                <div className="text-sm text-muted-foreground mt-1">Community focused</div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="bg-card border-2">
                        <CardContent className="pt-8 pb-8 px-6">
                            <h2 className="text-2xl font-semibold mb-4">What happens next?</h2>
                            <ul className="space-y-3 text-left max-w-lg mx-auto">
                                <li className="flex items-start gap-3">
                                    <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">
                                        Your donation immediately supports programs helping families in need
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">
                                        We'll share regular updates showing the direct impact of your contribution
                                    </span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-muted/50 border-2">
                        <CardContent className="pt-8 pb-8 px-6">
                            <h2 className="text-2xl font-semibold mb-3">Other ways to help</h2>

                            <p className="text-muted-foreground mb-4 text-sm">
                                Your support goes beyond donations.
                            </p>

                            <ul className="mb-6 space-y-1 text-sm text-muted-foreground text-center">
                                <li>• Donate your hair through Hair2Care Wing</li>
                                <li>• Donate clothes through Feathers Wing</li>
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button asChild variant="default" className="gap-2 px-4 py-2">
                                    <Link href="mailto:punarjjanitmc123@gmail.com">
                                        <Users className="w-4 h-4" />
                                        Volunteer with Us
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </main>
        </div>
    )
}
