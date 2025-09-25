import Link from "next/link";
import Image from "next/image";
import MovingBorderButton from "./components/MovingBorderButton";
import HeroSection from "./components/HeroSection";
import WobbleCard from "./components/WobbleCard";
import ThreeDMarquee from "./components/ThreeDMarquee";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import GlowBorder from "./components/GlowBorder";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <div className="mx-auto w-full max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">inuzu</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/work" className="hover:text-primary transition-colors">Our Work</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <MovingBorderButton
              as={Link}
              href="#contact"
              containerClassName="hidden sm:inline-flex"
              className="bg-background/90 px-4 py-2"
            >
              Get in touch
            </MovingBorderButton>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />

        <section className="py-24 md:py-32 border-t border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                What We Do
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We transform businesses through intelligent software solutions that combine cutting-edge technology with deep industry expertise.
              </p>
              <ul className="mx-auto mt-6 max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground text-left">
                <li>✓ Custom B2B & B2C dashboard development</li>
                <li>✓ AI-driven workflow automation solutions</li>
                <li>✓ Enterprise-grade web applications</li>
                <li>✓ Industry-specific software solutions</li>
              </ul>
            </div>
            <BentoGrid className="mb-20 grid-cols-1 md:grid-cols-2">
              <BentoGridItem
                className="group hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-500"
                title={
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Intelligent Dashboards
                  </span>
                }
                description={
                  <span className="text-base leading-relaxed">
                    Real-time analytics platforms that transform complex data into actionable insights, empowering data-driven decision making across your organization.
                  </span>
                }
                icon={<span className="text-2xl">📊</span>}
              />

              <BentoGridItem
                className="group hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-500"
                title={
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Modern Web Platforms
                  </span>
                }
                description={
                  <span className="text-base leading-relaxed">
                    Progressive Web Apps and e-commerce solutions built with cutting-edge technologies, delivering exceptional user experiences and measurable business results.
                  </span>
                }
                icon={<span className="text-2xl">🚀</span>}
              />

              <BentoGridItem
                className="group hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-500"
                title={
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    AI-Powered Automation
                  </span>
                }
                description={
                  <span className="text-base leading-relaxed">
                    Intelligent workflow automation using machine learning, RPA, and advanced AI to eliminate manual processes and accelerate operational efficiency.
                  </span>
                }
                icon={<span className="text-2xl">🤖</span>}
              />

              <BentoGridItem
                className="group hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-500"
                title={
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Industry-Specific Solutions
                  </span>
                }
                description={
                  <span className="text-base leading-relaxed">
                    Tailored software solutions designed for healthcare, finance, manufacturing, logistics, and professional services—built with deep industry knowledge and compliance requirements.
                  </span>
                }
                icon={<span className="text-2xl">🏭</span>}
              />
            </BentoGrid>
            {/* Industry Expertise */}
            <section className="relative">
              <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16">
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
                    Industry Expertise & Specialization
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    We focus on select industries where deep domain knowledge creates competitive advantage.
                    Our solutions are built with industry-specific requirements, compliance standards, and operational realities in mind.
                  </p>
                </div>

                {/* Industries Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {[
                    {
                      name: "Healthcare",
                      icon: "🏥",
                      description: "Patient management, clinical workflows, telemedicine platforms, and compliance automation for healthcare providers.",
                      features: ["HIPAA-compliant systems", "Clinical decision support", "Patient portal solutions"]
                    },
                    {
                      name: "Financial Services",
                      icon: "🏦",
                      description: "Trading platforms, risk management tools, regulatory compliance systems, and secure financial applications.",
                      features: ["Real-time risk monitoring", "Regulatory reporting", "Secure transaction processing"]
                    },
                    {
                      name: "Manufacturing",
                      icon: "🏭",
                      description: "Production optimization, supply chain management, quality control systems, and industrial IoT solutions.",
                      features: ["Production line monitoring", "Inventory optimization", "Quality assurance automation"]
                    },
                    {
                      name: "Professional Services",
                      icon: "💼",
                      description: "Client management platforms, project tracking systems, automated billing, and resource optimization tools.",
                      features: ["Client relationship management", "Project lifecycle tracking", "Automated invoicing"]
                    },
                    {
                      name: "E-commerce & Retail",
                      icon: "🛒",
                      description: "Customer analytics platforms, inventory management, personalization engines, and omnichannel retail solutions.",
                      features: ["Customer behavior analytics", "Dynamic pricing", "Inventory forecasting"]
                    },
                    {
                      name: "Logistics & Supply Chain",
                      icon: "🚛",
                      description: "Route optimization, fleet management, real-time tracking, and supply chain visibility platforms.",
                      features: ["Real-time fleet tracking", "Route optimization", "Supply chain analytics"]
                    }
                  ].map((industry, index) => (
                    <GlowBorder key={industry.name} className="rounded-2xl group hover:scale-[1.02] transition-all duration-300" radius="1rem" borderWidth={1}>
                      <div className="p-6 rounded-[calc(1rem-1px)] h-full">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{industry.icon}</span>
                          <h4 className="text-lg font-semibold text-foreground">{industry.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {industry.description}
                        </p>
                        <ul className="space-y-1">
                          {industry.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlowBorder>
                  ))}
                </div>

                {/* Why Our Industry Focus Matters */}
                <div className="text-center">
                  <GlowBorder className="rounded-2xl max-w-4xl mx-auto" radius="1rem" borderWidth={1}>
                    <div className="p-8 rounded-[calc(1rem-1px)]">
                      <h4 className="text-xl sm:text-2xl font-bold mb-4">Why Industry Specialization Matters</h4>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Unlike generalist development shops, we build deep expertise in specific industries.
                        This allows us to understand your unique challenges, regulatory requirements, and operational realities—delivering solutions that truly transform your business.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div className="text-left">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary">⚡</span>
                            <span className="font-medium">Faster Implementation</span>
                          </div>
                          <p className="text-muted-foreground text-xs">Pre-built industry knowledge accelerates development timelines.</p>
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary">🎯</span>
                            <span className="font-medium">Regulatory Compliance</span>
                          </div>
                          <p className="text-muted-foreground text-xs">Built-in compliance frameworks for regulated industries.</p>
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary">💡</span>
                            <span className="font-medium">Industry Best Practices</span>
                          </div>
                          <p className="text-muted-foreground text-xs">Solutions designed with proven industry methodologies.</p>
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary">🚀</span>
                            <span className="font-medium">Measurable ROI</span>
                          </div>
                          <p className="text-muted-foreground text-xs">Outcomes focused on your industry's key performance metrics.</p>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-border">
                        <Link href="#contact" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                          Discuss your industry challenges
                          <span className="text-sm">→</span>
                        </Link>
                      </div>
                    </div>
                  </GlowBorder>
                </div>
              </div>
            </section>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to Transform Your Business with Custom Software?</h2>
            <p className="mt-3 text-muted-foreground">Get a free strategy session: we’ll analyze workflows, identify automation opportunities, and recommend the best technology path.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition">Schedule Your Free Consultation</Link>
              <Link href="/work" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-primary/40 hover:text-primary transition">Download Our Software Development Guide</Link>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-20 border-t border-border bg-card/40">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Tell us about your project</h2>
              <p className="mt-3 text-muted-foreground">We’ll follow up within one business day.</p>
            </div>
            <GlowBorder className="mt-8" radius="1rem" borderWidth={1}>
              <form className="grid grid-cols-1 gap-4 p-6 rounded-[calc(1rem-1px)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Your name" />
                  <input className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Company" />
                </div>
                <input className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Work email" type="email" />
                <textarea className="min-h-32 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="What can we build together?" />
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-muted-foreground">By submitting, you agree to our privacy policy.</p>
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-0">
                    Send message
                  </button>
                </div>
              </form>
            </GlowBorder>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-muted-foreground flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-foreground">About</Link>
            <Link href="/work" className="hover:text-foreground">Our Work</Link>
            <Link href="#contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
