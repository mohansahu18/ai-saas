import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Code,
  CreditCard,
  Globe,
  LayoutDashboard,
  Mic,
  Pencil,
  SlidersHorizontal,
  TabletSmartphone,
  TimerIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Home() {
  const features = [
    {
      id: 1,
      name: "25+ templates",
      icon: TabletSmartphone,
      desc: "Responsive and mobile-first templates for various content types",
    },
    {
      id: 2,
      name: "Customizable",
      icon: SlidersHorizontal,
      desc: "Easily customizable components for your specific needs",
    },
    {
      id: 3,
      name: "Free Tier Available",
      icon: BookOpen,
      desc: "Start with our free tier and upgrade as you grow",
    },
    {
      id: 4,
      name: "24/7 Support",
      icon: TimerIcon,
      desc: "Round-the-clock support for all your queries",
    },
  ];

  const projectFeatures = [
    {
      icon: Pencil,
      title: "Content Generation",
      description:
        "Generate blog posts, articles, and social media content with AI",
    },
    {
      icon: Mic,
      title: "YouTube Assistance",
      description:
        "Create SEO-optimized titles, descriptions, and tags for YouTube",
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Generate and explain code in various programming languages",
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Create content in multiple languages",
    },
  ];

  const techStack = [
    "Next.js 14",
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Drizzle ORM",
    "PostgreSQL (Neon)",
    "Google's Generative AI",
    "Clerk Authentication",
    "Razorpay",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b shadow-2xl bg-white">
        <div>
          <Image src="/logo.png" alt="logo" width={50} height={40} />
        </div>
        <Link href="/dashboard">
          <Button>Get Started</Button>
        </Link>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-tr from-[#704ef8] via-[#6665fb] to-[#7096f1] py-20 px-6 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white text-black rounded-full px-4 py-2 mb-6">
              <p className="text-sm font-medium">Membership - Join Now →</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Content Generator
            </h1>
            <p className="text-xl mb-8">
              Revolutionize your content creation with our AI-powered app,
              delivering engaging and high-quality text in seconds.
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-white text-[#704ef8] hover:bg-gray-100"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
              {features.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-lg  border
                  border-[#704ef8] shadow-md"
                >
                  <div className="p-2 bg-[#704ef8] w-12 h-12 rounded-md text-white mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Project Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#704ef8] p-2 rounded-md text-white mr-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Join thousands of content creators who are already using our
              AI-powered platform to streamline their workflow.
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-[#704ef8] text-white hover:bg-[#5f3ed7]"
              >
                Try It For Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Floating CTA Button for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6">
        <Link href="/dashboard">
          <Button className="bg-[#704ef8] text-white shadow-lg">
            Start Creating
          </Button>
        </Link>
      </div>
    </div>
  );
}

// Add a Stats Section Component
const StatsSection = () => {
  const stats = [
    { number: "25+", label: "AI Templates" },
    { number: "10K+", label: "Active Users" },
    { number: "1M+", label: "Contents Generated" },
    { number: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold text-[#704ef8] mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add a Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "This AI tool has completely transformed our content creation process. We're now 3x more productive!",
      author: "Sarah Johnson",
      role: "Content Manager",
      company: "TechStart Inc.",
    },
    {
      quote:
        "The quality of AI-generated content is impressive. It's like having a professional writer on demand.",
      author: "Michael Chen",
      role: "Marketing Director",
      company: "Growth Labs",
    },
    {
      quote:
        "Easy to use, great results, and excellent support. Couldn't ask for more!",
      author: "Emma Williams",
      role: "Freelance Writer",
      company: "Self-employed",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add a How It Works Section Component
const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Choose Template",
      description: "Select from our wide range of AI content templates",
    },
    {
      number: "2",
      title: "Input Details",
      description: "Provide your requirements and preferences",
    },
    {
      number: "3",
      title: "Generate Content",
      description: "Let our AI create high-quality content for you",
    },
    {
      number: "4",
      title: "Edit & Export",
      description: "Review, edit, and download your content",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-[#704ef8] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.number}
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function EnhancedHome() {
  return (
    <div>
      {/* Include the main content */}
      <Home />
      {/* Add additional sections */}
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </div>
  );
}
