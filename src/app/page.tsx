"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BarChart3, BookOpen, HelpCircle, Package, Quote, Rocket, Shield, Star, Trophy, Users, Zap, Twitter, Linkedin } from "lucide-react";

export default function F1PresentationsPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="gradientBars"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {name: "Home", id: "hero"},
            {name: "Teams", id: "teams"},
            {name: "Performance", id: "metrics"},
            {name: "Features", id: "features"},
            {name: "About", id: "about"}
          ]}
          brandName="F1 Presentations"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="F1 PRESENTATIONS"
          description="Revolutionary presentation solutions designed specifically for Formula 1 teams. Transform your race data, strategy sessions, and team communications with cutting-edge visual technology."
          buttons={[
            {text: "Get Started", href: "contact"},
            {text: "View Features", href: "features"}
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717391431-lwnq7nh1.jpg",
              imageAlt: "Formula 1 racing car at high speed"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717392794-19zfzdth.jpg",
              imageAlt: "F1 racing circuit aerial view"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717394482-nnw5hcv5.jpg",
              imageAlt: "Formula 1 team garage setup"
            }
          ]}
          autoplayDelay={4000}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why F1 Teams Choose Us"
          description="At F1 Presentations, we understand the high-speed world of Formula 1 racing demands instant, precise communication. Our specialized presentation platform delivers real-time data visualization, strategic analysis tools, and seamless team collaboration features designed for the unique needs of racing professionals."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="Advanced F1 Presentation Features"
          description="Discover our specialized tools designed for Formula 1 teams"
          tag="Features"
          tagIcon={Zap}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Real-Time Data Integration",
              description: "Connect live telemetry data directly into your presentations for instant race analysis",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717395702-f64kuizz.jpg",
              imageAlt: "Real-time data visualization dashboard"
            },
            {
              id: 2,
              title: "Team Collaboration Tools",
              description: "Share strategies and insights across your entire F1 team with secure collaboration features",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717396932-rv1pzk72.jpg",
              imageAlt: "Team collaboration interface"
            },
            {
              id: 3,
              title: "Advanced Analytics",
              description: "Transform complex racing data into clear, actionable insights with professional visualizations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717398156-t46e10a5.jpg",
              imageAlt: "Advanced analytics and charts"
            },
            {
              id: 4,
              title: "Interactive Displays",
              description: "Engage your team with interactive touchscreen presentations and immersive racing simulations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717399387-jqhd1b6d.jpg",
              imageAlt: "Interactive presentation display"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="F1 Presentation Solutions"
          description="Choose the perfect package for your Formula 1 team"
          tag="Solutions"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Race Day Analytics Pro",
              price: "€2,500/month",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717395702-f64kuizz.jpg",
              imageAlt: "Race Day Analytics Pro package"
            },
            {
              id: "2",
              name: "Team Strategy Suite",
              price: "€4,200/month",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717396932-rv1pzk72.jpg",
              imageAlt: "Team Strategy Suite package"
            },
            {
              id: "3",
              name: "Championship Complete",
              price: "€7,800/month",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717398156-t46e10a5.jpg",
              imageAlt: "Championship Complete package"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="F1 Presentation Pricing"
          description="Professional solutions tailored for Formula 1 teams"
          tag="Pricing"
          tagIcon={Trophy}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              price: "€2,500/month",
              name: "Race Day Starter",
              buttons: [
                {text: "Get Started", href: "contact"},
                {text: "Learn More", href: "features"}
              ],
              features: [
                "Real-time telemetry integration",
                "Basic data visualization",
                "5 team member access",
                "Email support"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "€4,200/month",
              name: "Team Strategy Pro",
              buttons: [
                {text: "Choose Pro", href: "contact"},
                {text: "Schedule Demo", href: "contact"}
              ],
              features: [
                "Advanced race analytics",
                "Team collaboration tools",
                "15 team member access",
                "Priority support",
                "Custom integrations"
              ]
            },
            {
              id: "championship",
              price: "€7,800/month",
              name: "Championship Elite",
              buttons: [
                {text: "Contact Sales", href: "contact"},
                {text: "Custom Demo", href: "contact"}
              ],
              features: [
                "Complete F1 analytics suite",
                "Unlimited team access",
                "Dedicated account manager",
                "24/7 race day support",
                "Custom development"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="F1 Performance Metrics"
          description="Trusted by leading Formula 1 teams worldwide"
          tag="Performance"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "12",
              description: "F1 Teams Using Our Platform"
            },
            {
              id: "2",
              value: "150+",
              description: "Races Analyzed"
            },
            {
              id: "3",
              value: "99.9%",
              description: "Race Day Uptime"
            },
            {
              id: "4",
              value: "2.5s",
              description: "Average Data Processing Speed"
            }
          ]}
        />
      </div>

      <div id="teams" data-section="teams">
        <TeamCardOne
          title="Our Expert Team"
          description="Meet the specialists behind F1 Presentations"
          tag="Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marcus Rodriguez",
              role: "F1 Technology Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717400510-os2l5nfw.jpg",
              imageAlt: "Marcus Rodriguez, F1 Technology Director"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Data Analytics Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717401625-0wduds1i.jpg",
              imageAlt: "Sarah Chen, Data Analytics Lead"
            },
            {
              id: "3",
              name: "David Thompson",
              role: "Racing Strategy Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717402867-smvhcukz.jpg",
              imageAlt: "David Thompson, Racing Strategy Expert"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What F1 Teams Say"
          description="Feedback from professional Formula 1 racing teams"
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alessandro Ferrari",
              handle: "@racing_strategist",
              testimonial: "F1 Presentations transformed how we analyze race data. The real-time integration during races gives us the competitive edge we need.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717404199-vvj6tgzn.jpg",
              imageAlt: "Alessandro Ferrari testimonial"
            },
            {
              id: "2",
              name: "Emma Johnson",
              handle: "@f1_data_analyst",
              testimonial: "The visualization tools are incredible. Complex telemetry data becomes clear insights that our drivers can instantly understand and act upon.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717405634-0lwz2jhn.jpg",
              imageAlt: "Emma Johnson testimonial"
            },
            {
              id: "3",
              name: "Carlos Mendez",
              handle: "@team_chief_engineer",
              testimonial: "Best investment we've made for our team. The collaborative features help our engineers and strategists work seamlessly together during races.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717406606-ou4j1be6.jpg",
              imageAlt: "Carlos Mendez testimonial"
            },
            {
              id: "4",
              name: "Sophie Williams",
              handle: "@f1_tech_director",
              testimonial: "The custom integrations with our existing systems were flawless. Now we have one unified platform for all our presentation needs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717408193-s3gzzjtl.jpg",
              imageAlt: "Sophie Williams testimonial"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading F1 Teams"
          description="Join the Formula 1 teams already using our presentation platform"
          tag="Trusted"
          tagIcon={Shield}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717410765-g5uwx9ej.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717412628-b87bmqne.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717414239-zju44hvs.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717415602-15jegqhf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717416693-bv7idzfv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717418055-e43ly538.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717419382-lvdtvj7x.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about F1 Presentations"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How quickly can we integrate with our existing F1 systems?",
              content: "Our platform integrates with most F1 telemetry and data systems within 24-48 hours. Our technical team works directly with your engineers to ensure seamless connectivity."
            },
            {
              id: "2",
              title: "Is the platform available during race weekends?",
              content: "Yes, we provide 24/7 support during all race weekends and practice sessions. Our dedicated race day support team ensures 99.9% uptime when you need it most."
            },
            {
              id: "3",
              title: "Can we customize the platform for our team's specific needs?",
              content: "Absolutely. Our Championship Elite plan includes custom development to match your team's unique workflows, branding, and integration requirements."
            },
            {
              id: "4",
              title: "What security measures protect our sensitive race data?",
              content: "We use enterprise-grade encryption, secure cloud infrastructure, and comply with F1's strict data protection requirements. All data is encrypted both in transit and at rest."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest F1 Insights"
          description="Stay updated with the latest in F1 presentation technology and racing analytics"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Strategy",
              title: "Real-time Race Strategy Presentations",
              excerpt: "How modern F1 teams use live data visualization to make split-second strategic decisions during races",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717420357-8d97ph90.jpg",
              imageAlt: "F1 race strategy analysis",
              authorName: "Marcus Rodriguez",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717400510-os2l5nfw.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Technology",
              title: "The Future of F1 Data Visualization",
              excerpt: "Exploring emerging technologies that will transform how Formula 1 teams present and analyze racing data",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717421606-wwb7zzu6.jpg",
              imageAlt: "Modern F1 technology",
              authorName: "Sarah Chen",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717401625-0wduds1i.jpg",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Analytics",
              title: "Telemetry Data: From Numbers to Victory",
              excerpt: "Breaking down how successful F1 teams transform complex telemetry into actionable race strategies",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717422732-ze9xh785.jpg",
              imageAlt: "F1 telemetry data analysis",
              authorName: "David Thompson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763717402867-smvhcukz.jpg",
              date: "08 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Rocket}
          title="Ready to Transform Your F1 Presentations?"
          description="Join the leading Formula 1 teams already using our platform. Get started with a custom demo tailored to your team's needs."
          inputPlaceholder="Enter your team email"
          buttonText="Request Demo"
          termsText="By requesting a demo, you agree to our Terms of Service and Privacy Policy. We respect your team's confidentiality."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="F1 Presentations"
          copyrightText="© 2025 F1 Presentations. All rights reserved."
          columns={[
            {
              title: "Solutions",
              items: [
                {label: "Race Day Analytics", href: "features"},
                {label: "Team Strategy Suite", href: "features"},
                {label: "Championship Complete", href: "features"}
              ]
            },
            {
              title: "Support",
              items: [
                {label: "Documentation", href: "https://docs.f1presentations.com"},
                {label: "Race Day Support", href: "contact"},
                {label: "Training", href: "contact"}
              ]
            },
            {
              title: "Company",
              items: [
                {label: "About Us", href: "about"},
                {label: "Our Team", href: "teams"},
                {label: "Careers", href: "https://careers.f1presentations.com"}
              ]
            }
          ]}
          socialLinks={[
            {icon: Twitter, href: "https://twitter.com/f1presentations", ariaLabel: "Follow us on Twitter"},
            {icon: Linkedin, href: "https://linkedin.com/company/f1presentations", ariaLabel: "Connect on LinkedIn"}
          ]}
        />
      </div>
    </ThemeProvider>
  );
}