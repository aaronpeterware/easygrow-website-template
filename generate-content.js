#!/usr/bin/env node
/**
 * Generate content.json for a new customer
 * Usage: node generate-content.js "Business Name" "Service" "Location" "Phone" "Email"
 */

const fs = require('fs');

const [,, businessName, service, location, phone, email] = process.argv;

if (!businessName || !service || !location) {
  console.log('Usage: node generate-content.js "Business Name" "Service" "Location" "Phone" "Email"');
  process.exit(1);
}

const content = {
  business: {
    name: businessName,
    tagline: `Professional ${service} in ${location}`,
    phone: phone || "1300 000 000",
    email: email || `info@${businessName.toLowerCase().replace(/\s+/g, '')}.com.au`,
    address: location,
    service: service,
    location: location
  },
  hero: {
    title: `${location}'s Trusted ${service} Experts`,
    subtitle: `Professional, reliable service you can count on. Serving ${location} and surrounding areas.`,
    cta: "Get a Free Quote"
  },
  services: [
    {
      title: `${service} Services`,
      description: `Complete ${service.toLowerCase()} solutions for homes and businesses in ${location}.`,
      icon: "wrench"
    },
    {
      title: `Emergency ${service}`,
      description: "24/7 emergency service available. We're here when you need us most.",
      icon: "clock"
    },
    {
      title: "Free Quotes",
      description: `No obligation quotes for all ${service.toLowerCase()} work. Transparent pricing guaranteed.`,
      icon: "dollar"
    }
  ],
  about: {
    title: `Why Choose ${businessName}?`,
    description: `With years of experience serving ${location}, we've built a reputation for quality workmanship and exceptional customer service. Our team of licensed professionals is committed to delivering the best ${service.toLowerCase()} solutions for your needs.`,
    features: [
      "Licensed & Insured",
      `Local ${location} Business`,
      "Satisfaction Guaranteed",
      "Competitive Pricing"
    ]
  },
  testimonials: [
    {
      name: "Sarah M.",
      location: location,
      text: "Fantastic service! The team was professional and completed the work quickly. Highly recommend!",
      rating: 5
    },
    {
      name: "John D.",
      location: location,
      text: `Best ${service.toLowerCase()} service in the area. Fair prices and great communication throughout.`,
      rating: 5
    },
    {
      name: "Lisa T.",
      location: location,
      text: "Called for an emergency and they were there within the hour. Couldn't be happier!",
      rating: 5
    }
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} ${businessName}. All rights reserved.`,
    areas: `Proudly serving ${location} and surrounding areas`
  },
  seo: {
    title: `${businessName} | ${service} in ${location}`,
    description: `Professional ${service.toLowerCase()} services in ${location}. Licensed, insured, and trusted by locals. Get a free quote today!`,
    keywords: [service, location, `${service} ${location}`, `local ${service.toLowerCase()}`, `${location} ${service.toLowerCase()}`]
  },
  colors: {
    primary: "#f97316",
    secondary: "#1f2937",
    accent: "#fbbf24"
  },
  images: {
    hero: `https://source.unsplash.com/1600x900/?${encodeURIComponent(service.toLowerCase())}`,
    about: `https://source.unsplash.com/800x600/?${encodeURIComponent(service.toLowerCase())},professional`,
    logo: "/images/logo.png"
  }
};

fs.writeFileSync('content.json', JSON.stringify(content, null, 2));
console.log(`Generated content.json for ${businessName}`);
console.log(`- Service: ${service}`);
console.log(`- Location: ${location}`);
