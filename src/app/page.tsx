"use client"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Package,
  PieChart,
  ShoppingBag,
  Smartphone,
  Star,
  TrendingUp,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import "./globals.css"

export default function LandingPage() {
  const avatars = ["/avatar1.png", "/avatar2.png", "/avatar3.jpg", "/avatar4.png"]
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold"><Image src={"/logo.png"} alt="logo" width={40} height={40} className="rounded rounded-full"/></span><span>Aamdan</span>
          </div>
          <div className="flex items-center gap-4">
            {/* <Link href="#" className="text-sm font-medium hover:text-[#36b2fd] transition-colors duration-300">
              Log in
            </Link> */}
            <Button className="bg-[#36b2fd] hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-300/50"
            onClick={() => window.open("https://wa.me/923425093685", "_blank")}>
              Get Started
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 animate-gradient-flow" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-[#36b2fd] opacity-20 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-400 to-[#36b2fd] opacity-20 blur-3xl animate-float" />
          <div className="container relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#36b2fd] to-blue-400 bg-clip-text text-transparent animate-gradient-flow">
                    Dropshipping Made Simple
                  </h1>
                  <p className="mt-4 text-xl text-gray-600 md:text-2xl">
                    Launch your dropshipping business in minutes. Source products, set your margins, and start selling
                    today.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#36b2fd] to-blue-500 hover:from-blue-600 hover:to-blue-500 text-white transition-all duration-300 shadow-lg hover:shadow-blue-300/50 animate-pulse-slow"
                  >
                    Download App
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        <Image
                          src={avatars[i - 1] || "/placeholder.svg"}  
                          alt="User"
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-bold text-[#36b2fd]">5,000+</span> dropshippers already using our app
                  </div>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="relative animate-float w-fit m-auto">
                  <div className="relative w-fit">
                    <Image
                      src="/app-pic.png"
                      alt="App Screenshot"
                      width={600}
                      height={600}
                      className="h-full max-h-[600px] relative z-10"
                    />
                  </div>
                </div>
                <div className="absolute -right-12 -bottom-12 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400 to-[#36b2fd] opacity-20 blur-2xl animate-float-slow" />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by <span className="text-[#36b2fd]">Leading Brands</span>
              </h2>
              <p className="mt-4 text-xl text-gray-600">Join thousands of successful dropshippers using our platform</p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-center" style={{ animationDelay: `${i * 0.2}s` }}>
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=Brand+${i}`}
                    alt={`Brand ${i}`}
                    width={120}
                    height={60}
                    className="h-12 w-auto opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 animate-float"
                  />
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section id="features" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-[#36b2fd] to-blue-400 bg-clip-text text-transparent animate-gradient-flow">
                  Powerful Features
                </span>
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Everything you need to run a successful dropshipping business
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Package className="h-10 w-10 text-[#36b2fd]" />,
                  title: "Product Sourcing",
                  description: "Access thousands of products from verified suppliers with competitive pricing.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-[#36b2fd]" />,
                  title: "Margin Calculator",
                  description: "Set your profit margins and see real-time pricing calculations.",
                },
                {
                  icon: <Truck className="h-10 w-10 text-[#36b2fd]" />,
                  title: "Automated Shipping",
                  description: "Automatically fulfill orders and track shipments from suppliers to customers.",
                },
                {
                  icon: <Smartphone className="h-10 w-10 text-[#36b2fd]" />,
                  title: "Mobile App",
                  description: "Manage your dropshipping business from anywhere with our powerful mobile app.",
                },
                {
                  icon: <PieChart className="h-10 w-10 text-[#36b2fd]" />,
                  title: "Analytics Dashboard",
                  description: "Track sales, profits, and performance with detailed analytics and reports.",
                },
                {
                  icon: <ShoppingBag className="h-10 w-10 text-[#36b2fd]" />,
                  title: "Multi-Store Integration",
                  description: "Connect and manage multiple online stores from a single dashboard.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-100 animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-50 transition-all duration-500 group-hover:bg-blue-100" />
                  <div className="relative">
                    <div className="animate-pulse-slow">{feature.icon}</div>
                    <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="py-20 bg-gradient-to-br from-[#36b2fd] to-blue-500 text-white animate-gradient-flow"
        >
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mt-4 text-xl text-blue-100">Start your dropshipping business in three simple steps</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Sign Up & Connect",
                  description: "Create your account and connect your online store or marketplace.",
                },
                {
                  step: "02",
                  title: "Source Products",
                  description: "Browse thousands of products and add them to your store with your margins.",
                },
                {
                  step: "03",
                  title: "Sell & Fulfill",
                  description: "When customers order, we automatically fulfill and ship directly to them.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 animate-float"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-bold animate-pulse-slow">
                    {step.step}
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-blue-100">{step.description}</p>
                  {/* <div className="mt-6">
                    <Button
                      variant="secondary"
                      className="bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-blue-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-[#36b2fd] to-blue-400 bg-clip-text text-transparent animate-gradient-flow">
                  Success Stories
                </span>
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Hear from dropshippers who transformed their business with our app
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Atif Khan",
                  role: "Fashion Dropshipper",
                  image: "/avatar2.png",
                  quote:
                    "I was able to launch my fashion dropshipping business in just one day. The profit margins are amazing!",
                },
                {
                  name: "Sarah Fatima",
                  role: "Fashion Accessories Seller",
                  image: "/avatar3.jpg",
                  quote:
                    "The automated order fulfillment saved me hours of work every day. My business has grown 300% in 3 months.",
                },
                {
                  name: "Ali Raza",
                  role: "Fashion Entrepreneur",
                  image: "/avatar4.png",
                  quote:
                    "The product sourcing feature helped me find unique items that my customers love. Best decision I ever made!",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-100 animate-float"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="h-15 w-15 rounded-full border-2 border-blue-100 animate-pulse-slow"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse-slow"
                        style={{ animationDelay: `${star * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">&quot;{testimonial.quote}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section id="pricing" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-[#36b2fd] to-blue-400 bg-clip-text text-transparent animate-gradient-flow">
                  Simple Pricing
                </span>
              </h2>
              <p className="mt-4 text-xl text-gray-600">Choose the plan that fits your business needs</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$29",
                  description: "Perfect for beginners starting their dropshipping journey",
                  features: ["Up to 100 products", "Basic analytics", "Email support", "Single store connection"],
                },
                {
                  name: "Professional",
                  price: "$79",
                  description: "For growing businesses looking to scale their operations",
                  features: [
                    "Up to 1,000 products",
                    "Advanced analytics",
                    "Priority support",
                    "3 store connections",
                    "Automated order fulfillment",
                  ],
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "$199",
                  description: "For established dropshippers with high-volume sales",
                  features: [
                    "Unlimited products",
                    "Custom analytics",
                    "24/7 dedicated support",
                    "Unlimited store connections",
                    "Advanced automation tools",
                    "API access",
                  ],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl border ${
                    plan.popular ? "border-[#36b2fd]" : "border-blue-100"
                  } bg-white p-8 shadow-sm ${
                    plan.popular ? "shadow-lg shadow-blue-100" : ""
                  } transition-all duration-300 hover:shadow-md hover:shadow-blue-100 animate-float`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -right-12 top-6 rotate-45 bg-[#36b2fd] px-12 py-1 text-sm font-medium text-white animate-pulse-slow">
                      Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="ml-1 text-gray-600">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center">
                        <CheckCircle
                          className="mr-2 h-5 w-5 text-[#36b2fd] animate-pulse-slow"
                          style={{ animationDelay: `${j * 0.1}s` }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-[#36b2fd] to-blue-500 hover:from-blue-600 hover:to-blue-500 animate-pulse-slow"
                          : "bg-[#36b2fd] hover:bg-blue-600"
                      } transition-all duration-300 shadow-md hover:shadow-blue-300/50`}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="py-20 bg-gradient-to-br from-[#36b2fd] to-blue-500 text-white animate-gradient-flow">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Dropshipping Business?
              </h2>
              <p className="mt-4 text-xl text-blue-100">Download our app today and start selling in minutes</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[#36b2fd] hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-blue-300/50 animate-pulse-slow"
                >
                  Download App
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </Button> */}
              </div>
              <div className="mt-8 flex justify-center gap-4">
                <div className="animate-float">
                  <Image
                    src="/apple.jpeg"
                    alt="App Store"
                    width={160}
                    height={50}
                    className="h-12 w-auto transition-all duration-300 hover:scale-105 rounded-xl"
                  />
                </div>
                <div className="animate-float" style={{ animationDelay: "0.3s" }}>
                  <Image
                    src="/google-play.png"
                    alt="Google Play"
                    width={160}
                    height={50}
                    className="h-12 w-auto transition-all duration-300 hover:scale-105 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">Aamdan</span>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                The ultimate dropshipping platform for entrepreneurs looking to start and scale their online business.
              </p>
            </div>
            {/* <div>
              <h3 className="font-bold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="mt-12 border-t pt-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-600">© {new Date().getFullYear()} Aamdan. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 animate-float"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 animate-float"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 animate-float"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#36b2fd] transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 animate-float"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
