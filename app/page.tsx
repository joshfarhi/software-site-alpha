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
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary/15 ring-1 ring-primary/30 grid place-items-center">
              <span className="text-primary text-xs font-semibold">SaaS</span>
            </div>
            <span className="text-4xl font-semibold tracking-tight">inuzu</span>
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

        <section className="py-16 md:py-20 border-t border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl sm:text-6xl font-semibold tracking-tight">what we do</h2>
              
            </div>
            <BentoGrid className="mt-10">
              <BentoGridItem
                className="md:col-span-3"
                title={
                  <span className="text-foreground text-6xl">Custom Software Development Solutions That Transform Your Business</span>
                }
                description={
                  <span>
                    We build powerful digital products that streamline operations, enhance user experiences, and accelerate growth.
                  </span>
                }
                icon={<span className="text-primary">🚀</span>}
              />

              <BentoGridItem
                title={<span className="text-3xl sm:text-4xl font-semibold">Business Dashboard Development</span>}
                description={
                  <ul className="mt-3 list-disc pl-5 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed space-y-2">
                    <li>Interactive data visualization and reporting tools</li>
                    <li>Real-time performance monitoring and alerts</li>
                    <li>Custom KPI tracking and automated reporting</li>
                    <li>Multi-user access controls and role-based permissions</li>
                    <li>Integrations with your existing systems and databases</li>
                  </ul>
                }
                icon={<span className="text-primary">📊</span>}
                className="md:row-span-2"
              />

              <BentoGridItem
                title="Professional Website Development"
                description={
                  <ul className="mt-2 list-disc pl-4 text-sm text-muted-foreground space-y-1">
                    <li>Custom business sites and e‑commerce platforms</li>
                    <li>Progressive Web Apps for enhanced mobile UX</li>
                    <li>CMS with simple, secure admin interfaces</li>
                    <li>SEO‑optimized architecture to rank higher</li>
                    <li>Fast, secure builds using modern web tech</li>
                  </ul>
                }
                icon={<span className="text-primary">🛠️</span>}
                className="md:col-span-2"
              />

              <BentoGridItem
                title="AI‑Powered Workflow Automation"
                description={
                  <ul className="mt-2 list-disc pl-4 text-sm text-muted-foreground space-y-1">
                    <li>Machine learning for predictive analytics</li>
                    <li>RPA for repetitive task elimination</li>
                    <li>NLP for document analysis and support</li>
                    <li>Computer vision for QC and data extraction</li>
                    <li>Custom AI integrations with your stack</li>
                  </ul>
                }
                icon={<span className="text-primary">🤖</span>}
              />

              <BentoGridItem
                title="Industry‑Specific Software Solutions"
                description={
                  <ul className="mt-2 list-disc pl-4 text-sm text-muted-foreground space-y-1">
                    <li><span className="text-foreground">Healthcare</span>: patient management, telemedicine, clinical automation</li>
                    <li><span className="text-foreground">Finance</span>: trading, risk management, compliance automation</li>
                    <li><span className="text-foreground">Manufacturing</span>: supply chain, inventory, production monitoring</li>
                    <li><span className="text-foreground">Retail</span>: e‑commerce, inventory, customer analytics</li>
                    <li><span className="text-foreground">Logistics & Services</span>: routing, fleet tracking, project/billing portals</li>
                  </ul>
                }
                icon={<span className="text-primary">🏭</span>}
                className="md:col-span-2"
              />

              <BentoGridItem
                title="Why Choose Our Software Development Services"
                description={
                  <div className="mt-2 text-sm text-muted-foreground">
                    We deliver scalable solutions with an agile process and rigorous quality standards—faster time‑to‑market, measurable results.
                  </div>
                }
                icon={<span className="text-primary">✨</span>}
              />
            </BentoGrid>
            {/* Software Solutions for Strategic Industries - detailed content */}
            <section className="mt-16">
              <div className="mx-auto max-w-5xl">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Software Solutions for Strategic Industries</h3>
                <p className="mt-3 text-muted-foreground">
                  We develop custom software solutions for businesses in our target industries. Our team specializes in creating B2B and B2C dashboards, professional websites, and AI-driven automation systems that solve specific industry challenges and accelerate business growth.
                </p>

                {/* Dashboard Development */}
                <GlowBorder className="mt-8 rounded-2xl" radius="1rem" borderWidth={1}>
                  <div className="p-6 rounded-[calc(1rem-1px)]">
                    <h4 className="text-xl sm:text-2xl font-semibold">Dashboard Development</h4>
                    <p className="mt-2 text-muted-foreground">
                      Our custom dashboard solutions transform business data into actionable insights for companies in our focus industries. We build <span className="text-foreground font-medium">B2B dashboards</span> for internal operations and <span className="text-foreground font-medium">B2C dashboards</span> for customer-facing analytics.
                    </p>
                    <ul className="mt-4 list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground">
                      <li>Real-time performance monitoring and KPI tracking</li>
                      <li>Industry-specific analytics and reporting tools</li>
                      <li>Multi-user access controls and role-based permissions</li>
                      <li>Integration with existing business systems</li>
                      <li>Mobile-responsive design for field operations</li>
                    </ul>
                  </div>
                </GlowBorder>

                {/* Website & Web App Development */}
                <GlowBorder className="mt-6 rounded-2xl" radius="1rem" borderWidth={1}>
                  <div className="p-6 rounded-[calc(1rem-1px)]">
                    <h4 className="text-xl sm:text-2xl font-semibold">Website & Web Application Development</h4>
                    <p className="mt-2 text-muted-foreground">
                      We create professional websites and web applications designed for businesses in our target markets. Our solutions focus on industry-specific functionality and compliance requirements.
                    </p>
                    <ul className="mt-4 list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground">
                      <li>Custom business websites and e-commerce platforms</li>
                      <li>Industry-compliant design and functionality</li>
                      <li>SEO optimization for relevant market segments</li>
                      <li>Integration with sector-specific tools and platforms</li>
                      <li>Scalable architecture for business growth</li>
                    </ul>
                  </div>
                </GlowBorder>

                {/* AI-Driven Workflow Automation */}
                <GlowBorder className="mt-6 rounded-2xl" radius="1rem" borderWidth={1}>
                  <div className="p-6 rounded-[calc(1rem-1px)]">
                    <h4 className="text-xl sm:text-2xl font-semibold">AI-Driven Workflow Automation</h4>
                    <p className="mt-2 text-muted-foreground">
                      Our AI and automation solutions address workflow challenges specific to our target industries. We develop intelligent systems that understand industry processes, regulations, and operational requirements.
                    </p>
                    <ul className="mt-4 list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground">
                      <li>Process automation for industry-specific workflows</li>
                      <li>Machine learning models for predictive analytics</li>
                      <li>Compliance-aware automation for regulated sectors</li>
                      <li>Custom AI integrations with industry software</li>
                      <li>Intelligent optimization for operational efficiency</li>
                    </ul>
                  </div>
                </GlowBorder>

                {/* Target Industries */}
                <div className="mt-8">
                  <h4 className="text-xl sm:text-2xl font-semibold">Target Industries</h4>
                  <p className="mt-2 text-muted-foreground">We focus our expertise on select industries where we deliver maximum value:</p>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li><span className="text-foreground font-medium">Healthcare</span>: Patient management, clinical workflows, compliance systems</li>
                    <li><span className="text-foreground font-medium">Financial Services</span>: Trading platforms, risk management, regulatory compliance</li>
                    <li><span className="text-foreground font-medium">Manufacturing</span>: Production optimization, supply chain management, quality control</li>
                    <li><span className="text-foreground font-medium">Professional Services</span>: Client management, project tracking, automated billing</li>
                    <li><span className="text-foreground font-medium">E-commerce</span>: Customer analytics, inventory optimization, personalization</li>
                    <li><span className="text-foreground font-medium">Logistics</span>: Route optimization, fleet management, real-time tracking</li>
                  </ul>
                  <p className="mt-4 text-sm sm:text-base text-muted-foreground">Ready to discuss your project? <Link href="#contact" className="text-primary underline underline-offset-4">Contact us today</Link> to learn how our industry expertise can solve your specific business challenges.</p>
                </div>

                {/* Our Approach */}
                <div className="mt-10">
                  <h4 className="text-xl sm:text-2xl font-semibold">Our Approach</h4>
                  <p className="mt-2 text-muted-foreground">
                    We work with select clients in our target industries, building long-term partnerships that allow us to deliver specialized solutions. This focused approach enables us to:
                  </p>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>Understand industry-specific challenges and regulations</li>
                    <li>Develop proven solutions with faster implementation</li>
                    <li>Provide ongoing support with deep domain knowledge</li>
                    <li>Deliver higher ROI through specialized expertise</li>
                  </ul>
                  <p className="mt-4 text-sm sm:text-base text-muted-foreground">Looking for industry specialists? <Link href="#contact" className="text-primary underline underline-offset-4">Get in touch</Link> to discover how our targeted approach can benefit your business.</p>
                  <p className="mt-6 text-xs sm:text-sm text-muted-foreground">Custom software development focused on target industries. Contact us to learn more about our specialized B2B/B2C dashboards, websites, and AI-driven solutions.</p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Leading Software Development Company Delivering Innovation</h2>
              <p className="mt-4 text-muted-foreground">
                We build powerful digital solutions that transform how businesses operate—combining cutting‑edge technology with deep industry knowledge to drive growth and efficiency.
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div><span className="text-foreground font-semibold">[X]+</span> Projects</div>
                <div><span className="text-foreground font-semibold">[X]+</span> Years</div>
                <div><span className="text-foreground font-semibold">[X]+</span> Industries</div>
                <div><span className="text-foreground font-semibold">[X]%</span> Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services (concise summary; detailed bullets already in bento) */}
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div>
              <h3 className="text-foreground font-medium">Custom Dashboard Development</h3>
              <p className="mt-2">Real‑time analytics, automated reporting, and intuitive visualization for better decisions.</p>
            </div>
            <div>
              <h3 className="text-foreground font-medium">AI‑Powered Automation</h3>
              <p className="mt-2">RPA, ML, NLP, and computer vision to eliminate manual work and accelerate productivity.</p>
            </div>
            <div>
              <h3 className="text-foreground font-medium">Web & Application Development</h3>
              <p className="mt-2">Responsive PWAs, CMS, and e‑commerce—fast, secure, and SEO‑optimized.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">Our Proven Software Development Process</h2>
            <div className="mt-10 grid md:grid-cols-5 gap-4 text-sm">
              {["Discovery & Strategy","Design & Architecture","Agile Development","Testing & QA","Deployment & Support"].map((title, idx) => (
                <div key={title} className="rounded-xl border border-border bg-card p-4">
                  <div className="text-foreground font-medium">{idx+1}. {title}</div>
                  <p className="mt-2 text-muted-foreground">
                    {idx===0 && "We analyze requirements, systems, and goals to shape a clear roadmap."}
                    {idx===1 && "User‑centered interfaces and scalable architecture for performance."}
                    {idx===2 && "Iterative sprints, transparent communication, and rapid feedback."}
                    {idx===3 && "Comprehensive testing for reliability, security, and performance."}
                    {idx===4 && "Seamless launch with ongoing support to ensure continued value."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6">
            <GlowBorder className="rounded-2xl" radius="1rem" borderWidth={1}>
              <div className="p-6 rounded-[calc(1rem-1px)]">
                <blockquote className="text-lg font-medium leading-relaxed">
                  “They transformed our operations with custom dashboards—efficiency up 40% and better decisions across the org.”
                </blockquote>
                <p className="mt-3 text-sm text-muted-foreground">— [Client Name], [Title], [Company]</p>
              </div>
            </GlowBorder>
            <GlowBorder className="rounded-2xl" radius="1rem" borderWidth={1}>
              <div className="p-6 rounded-[calc(1rem-1px)]">
                <blockquote className="text-lg font-medium leading-relaxed">
                  “Their AI automation eliminated hours of manual work daily. The solution fits our industry needs perfectly.”
                </blockquote>
                <p className="mt-3 text-sm text-muted-foreground">— [Client Name], [Title], [Company]</p>
              </div>
            </GlowBorder>
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
