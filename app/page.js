'use client'

import React, { useState } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDarkMode = true; // Always dark mode

  // Color scheme - exactly what you wanted
  const colors = {
    light: {
      primary: '#8cb251', // green
      secondary: '#ffd462', // yellow  
      accent: '#f8a5c7', // pink
      neutral: '#f8f9fa',
      text: '#2c3e50',
      textLight: '#6c757d',
      background: '#ffffff',
      surface: '#f8f9fa'
    },
    dark: {
      primary: '#9bc95a',
      secondary: '#ffd970', 
      accent: '#f5b3d1',
      neutral: '#1a1a1a',
      text: '#e9ecef',
      textLight: '#adb5bd',
      background: '#121212',
      surface: '#1e1e1e'
    }
  };

  const theme = colors.dark; // Always use dark theme

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'events', label: 'Events' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Software Engineering",
      description: "Join us for an evening with Sarah Chen, a software engineer at Microsoft, as she walks us through what coding actually looks like day-to-day.",
      date: "August 15th",
      time: "6:00 PM"
    },
    {
      id: 2,
      title: "Healthcare & Medicine", 
      description: "Meet Dr. Rodriguez and learn about the realities of medical school, residency, and what it's really like to be a doctor.",
      date: "September 12th",
      time: "6:00 PM"
    }
  ];

  // Your FAQ data
  const faqData = [
    {
      question: "What is this?",
      answer: "Young Leaders Career Discovery (YLCD) is a monthly program for students who are uncertain about their future. If you are feeling lost about what comes after graduation, you are not alone. We create real experiences that let you explore what it's actually like to work in different fields."
    },
    {
      question: "When is it?",
      answer: "We host events once a month, kicking off with our first event on August 2nd. Future dates will be announced as we keep building this thing together."
    },
    {
      question: "What do we get out of this?",
      answer: "This program exists solely to help you figure out what path you want to take through life. You'll get a clear picture of what a day in the life actually looks like for someone in each field we explore. Think of it as a career test drive. You get to see if you actually like the ride before you commit to the journey."
    },
    {
      question: "Why should we choose you and not someone else?",
      answer: "YLCD was founded by a student who gets it. Unlike other programs where some adult in a suit gives you the sanitized, picture-perfect version of their job, we bring you the real deal. You'll hear from the whole family tree: people just starting out, those in the thick of it, and the ones who have made it to the top."
    },
    {
      question: "Why did you staaaart this?",
      answer: "I don't want people to go through what I did - feeling completely lost about their future, overwhelmed by everyone's opinions, and paralyzed by indecision while thinking everyone else had it figured out."
    },
    {
      question: "How does this work?",
      answer: "Check out our Instagram or website to see what's coming up, then sign up for whatever catches your eye. Your first time is free. We want to remove every barrier to you figuring this out. After that, it's just $5 per event. Each session includes real talk with professionals who won't sugarcoat their experiences, hands-on activities that give you a taste of the actual work, and chances to connect with people who might become your future network or even lifelong friends."
    }
  ]; 

  // Header Component
  const Header = () => (
    <header className="border-b" style={{ borderColor: theme.neutral, backgroundColor: theme.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <h1 className="text-2xl font-bold" style={{ 
              fontFamily: 'Instrument Serif, serif',
              color: theme.text 
            }}>
              YLCD
            </h1>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  currentPage === item.id ? 'border-b-2' : ''
                }`}
                style={{ 
                  color: currentPage === item.id ? theme.primary : theme.textLight,
                  borderColor: currentPage === item.id ? theme.primary : 'transparent'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          {/* Mobile menu button only */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t py-4" style={{ borderColor: theme.neutral }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 font-medium"
                style={{ color: currentPage === item.id ? theme.primary : theme.textLight }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );

  // Hero Section
  const HeroSection = () => (
    <section className="py-20" style={{ backgroundColor: theme.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ 
            fontFamily: 'Instrument Serif, serif',
            color: theme.text 
          }}
        >
          Young Leaders Career Discovery
        </h1>
        <p 
          className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
          style={{ color: theme.textLight }}
        >
          Because your guidance counselor's 15-minute chat wasn't quite enough
        </p>
        <button 
          className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          style={{ 
            backgroundColor: theme.primary,
            color: theme.background 
          }}
          onClick={() => setCurrentPage('events')}
        >
          Explore Events →
        </button>
      </div>
    </section>
  );

  // Founder Story Section
  const FounderSection = () => (
    <section className="py-20" style={{ backgroundColor: theme.surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ 
                fontFamily: 'Instrument Serif, serif',
                color: theme.text 
              }}
            >
              Hey, I'm the confused kid who started this
            </h2>
            <div className="space-y-4" style={{ color: theme.textLight }}>
              <p>
                I've been a walking question mark about my future since forever. The type who stands in front of Netflix for an hour trying to pick something to watch, except it's my entire life.
              </p>
              <p>
                I became a professional interest-hopper, jumping from engineering to business to law in about ten minutes while everyone kept saying "Engineering is so hard, can you handle it?" or "Only people who don't know what they want choose business."
              </p>
              <p>
                I felt like I was drowning in opinions while experiencing full-blown decision paralysis, lying awake thinking everyone else had their life together while I was a confused tourist without a map.
              </p>
              <p>
                Plot twist: I'm still figuring things out, and that's exactly why this matters. I don't want you lying awake feeling like a broken GPS, thinking something's wrong with you for not having your entire existence mapped out at sixteen.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div 
              className="w-80 h-80 rounded-3xl flex items-center justify-center text-6xl"
              style={{ backgroundColor: theme.neutral }}
            >
              📸
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Events Preview Section
  const EventsPreview = () => (
    <section className="py-20" style={{ backgroundColor: theme.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ 
              fontFamily: 'Instrument Serif, serif',
              color: theme.text 
            }}
          >
            Upcoming Events
          </h2>
          <p style={{ color: theme.textLight }}>
            Real career exploration, real professionals, real talk
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id}
              className="p-6 rounded-2xl border transition-all duration-200 hover:shadow-lg"
              style={{ 
                backgroundColor: theme.surface,
                borderColor: theme.neutral 
              }}
            >
              <h3 
                className="text-xl font-bold mb-3"
                style={{ 
                  fontFamily: 'Instrument Serif, serif',
                  color: theme.text 
                }}
              >
                {event.title}
              </h3>
              <p className="mb-4" style={{ color: theme.textLight }}>
                {event.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm" style={{ color: theme.textLight }}>
                  <div>📅 {event.date}</div>
                  <div>🕕 {event.time}</div>
                </div>
                <button 
                  className="px-4 py-2 rounded-lg font-medium transition-colors"
                  style={{ 
                    backgroundColor: theme.accent,
                    color: theme.background 
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            className="px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            style={{ 
              backgroundColor: theme.secondary,
              color: theme.background 
            }}
            onClick={() => setCurrentPage('events')}
          >
            View All Events
          </button>
        </div>
      </div>
    </section>
  );

  // FAQ Page
  const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
    return (
      <div className="min-h-screen py-20" style={{ backgroundColor: theme.background }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-center mb-12"
            style={{ 
              fontFamily: 'Instrument Serif, serif',
              color: theme.text 
            }}
          >
            Frequently Asked Questions
          </h1>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="border rounded-lg overflow-hidden transition-all duration-200"
                style={{ borderColor: theme.neutral }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left transition-colors"
                  style={{ backgroundColor: theme.surface }}
                >
                  <div className="flex justify-between items-center">
                    <h3 
                      className="text-lg font-semibold"
                      style={{ 
                        fontFamily: 'Instrument Serif, serif',
                        color: theme.text 
                      }}
                    >
                      {faq.question}
                    </h3>
                    <span style={{ color: theme.textLight }}>
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <div 
                    className="p-6 border-t"
                    style={{ 
                      backgroundColor: theme.background,
                      borderColor: theme.neutral 
                    }}
                  >
                    <p style={{ color: theme.textLight }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Contact Page
  const ContactPage = () => (
    <div className="min-h-screen py-20" style={{ backgroundColor: theme.background }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          style={{ 
            fontFamily: 'Instrument Serif, serif',
            color: theme.text 
          }}
        >
          Get In Touch
        </h1>
        
        {/* Contact Info Section */}
        <div className="mb-12">
          <h2 
            className="text-2xl font-bold mb-6"
            style={{ 
              fontFamily: 'Instrument Serif, serif',
              color: theme.text 
            }}
          >
            For Questions & Support
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                style={{ backgroundColor: theme.surface }}
              >
                <span style={{ color: theme.primary }}>✉️</span>
              </div>
              <div>
                <p className="font-medium" style={{ color: theme.text }}>
                  Email
                </p>
                <p style={{ color: theme.textLight }}>
                  hello@youngleaderscareerdiscovery.com
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                style={{ backgroundColor: theme.surface }}
              >
                <span style={{ color: theme.accent }}>📱</span>
              </div>
              <div>
                <p className="font-medium" style={{ color: theme.text }}>
                  Instagram
                </p>
                <p style={{ color: theme.textLight }}>
                  @youngleaderscareerdiscovery
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2" style={{ color: theme.text }}>
              Suggest a Career Field
            </h3>
            <p style={{ color: theme.textLight }}>
              Know someone with a cool job? Want us to explore a specific field? 
              Drop us a line - we love hearing from confused students and supportive adults alike.
            </p>
          </div>
        </div>
        
        {/* Real Talk Section - Now Below */}
        <div 
          className="p-8 rounded-2xl"
          style={{ backgroundColor: theme.surface }}
        >
          <h3 
            className="text-xl font-bold mb-6"
            style={{ 
              fontFamily: 'Instrument Serif, serif',
              color: theme.text 
            }}
          >
            Real Talk
          </h3>
          <div className="space-y-4" style={{ color: theme.textLight }}>
            <p>
              Look, reaching out can feel weird. We get it. My mom always talks about "imposter syndrome" - when you pretend to be something you're not because you don't want to feel left out, look lost, or feel embarrassed.
            </p>
            <p>
              Here's the thing: you don't have to pretend you have your life figured out. You don't have to fake knowing what you want to major in. You don't have to act like career fairs make perfect sense to you.
            </p>
            <p>
              At YLCD, we're done with the performance. No pretending, no fake confidence, no acting like we're something we're not. Just real conversations with someone who's been exactly where you are - confused, pressured, and tired of feeling like everyone else has it together except you.
            </p>
            <p>
              Whether you're panicking about college apps, your parents are driving you crazy about majors, or you just need someone to tell you that feeling lost is actually perfectly normal - we're here for it.
            </p>
            <p className="font-medium">
              No judgment. No pretending. Just real support for real confusion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Events Page
  const EventsPage = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    
    return (
      <div className="min-h-screen py-20" style={{ backgroundColor: theme.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-center mb-12"
            style={{ 
              fontFamily: 'Instrument Serif, serif',
              color: theme.text 
            }}
          >
            Events
          </h1>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex rounded-lg p-1" style={{ backgroundColor: theme.surface }}>
              {['upcoming', 'past'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-6 py-3 rounded-md font-medium transition-all duration-200"
                  style={{
                    backgroundColor: activeTab === tab ? theme.primary : 'transparent',
                    color: activeTab === tab ? theme.background : theme.textLight
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Events
                </button>
              ))}
            </div>
          </div>
          
          {/* Events Content */}
          {activeTab === 'upcoming' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id}
                  className="p-6 rounded-2xl border transition-all duration-200 hover:shadow-lg"
                  style={{ 
                    backgroundColor: theme.surface,
                    borderColor: theme.neutral 
                  }}
                >
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ 
                      fontFamily: 'Instrument Serif, serif',
                      color: theme.text 
                    }}
                  >
                    {event.title}
                  </h3>
                  <p className="mb-4" style={{ color: theme.textLight }}>
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-4 text-sm" style={{ color: theme.textLight }}>
                    <div>📅 {event.date}</div>
                    <div>🕕 {event.time}</div>
                  </div>
                  <button 
                    className="w-full py-2 rounded-lg font-medium transition-colors"
                    style={{ 
                      backgroundColor: theme.primary,
                      color: theme.background 
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div 
                className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl"
                style={{ backgroundColor: theme.surface }}
              >
                🚀
              </div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ 
                  fontFamily: 'Instrument Serif, serif',
                  color: theme.text 
                }}
              >
                Past Events Coming Soon
              </h3>
              <p style={{ color: theme.textLight }}>
                We're just getting started! Check back here after our first events for photos, 
                highlights, and speaker contact information.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Footer
  const Footer = () => (
    <footer className="border-t py-12" style={{ borderColor: theme.neutral, backgroundColor: theme.surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{ 
                fontFamily: 'Instrument Serif, serif',
                color: theme.text 
              }}
            >
              YLCD
            </h3>
            <p style={{ color: theme.textLight }}>
              Career exploration for the professionally confused. 
              Because figuring out your future shouldn't cost $1000.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{ color: theme.text }}>
              Quick Links
            </h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className="block hover:underline transition-colors"
                  style={{ color: theme.textLight }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{ color: theme.text }}>
              Follow Us
            </h4>
            <div className="space-y-2">
              <p style={{ color: theme.textLight }}>📱 @youngleaderscareerdiscovery</p>
              <p style={{ color: theme.textLight }}>✉️ hello@youngleaderscareerdiscovery.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: theme.neutral }}>
          <p style={{ color: theme.textLight }}>
            Made with ♡ by a kid who took longer to pick this font than most people take to pick a major.
          </p>
        </div>
      </div>
    </footer>
  );

  // Page Router
  const renderPage = () => {
    switch(currentPage) {
      case 'events':
        return <EventsPage />;
      case 'faq':
        return <FAQPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <>
            <HeroSection />
            <FounderSection />
            <EventsPreview />
          </>
        );
    }
  };

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text, minHeight: '100vh' }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');
        
        * {
          font-family: 'Source Sans Pro', sans-serif;
        }
        
        button:hover {
          transform: translateY(-1px);
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
      
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}