import React, { useState, useEffect } from 'react'
import { 
  Brain, 
  Rocket, 
  Play, 
  Target, 
  ChartLine, 
  Zap, 
  Check, 
  Star,
  Clock,
  Users,
  TrendingDown,
  Menu,
  X
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    
    // TODO: Replace with your actual form handling logic
    alert('Thank you for your interest! We\'ll be in touch soon with pilot program details.')
    e.target.reset()
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'nav-blur' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-brand-blue text-white p-2 rounded-lg glow-effect">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">RealEstateGuy.com</span>
                <span className="ml-2 px-2 py-1 bg-brand-orange text-white text-xs rounded-full font-medium">BETA</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-dark-muted hover:text-brand-blue transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-dark-muted hover:text-brand-blue transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-dark-muted hover:text-brand-blue transition-colors"
              >
                About
              </button>
              <button className="text-brand-blue hover:text-blue-400 transition-colors">
                Sign In
              </button>
              <button 
                onClick={() => scrollToSection('pilot-signup')}
                className="bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium glow-effect"
              >
                Get Early Access
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-dark-muted hover:text-white transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-dark-surface border-t border-dark-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block px-3 py-2 text-dark-muted hover:text-brand-blue transition-colors w-full text-left"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="block px-3 py-2 text-dark-muted hover:text-brand-blue transition-colors w-full text-left"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block px-3 py-2 text-dark-muted hover:text-brand-blue transition-colors w-full text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('pilot-signup')}
                  className="block w-full mt-4 bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Get Early Access
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 gradient-bg hero-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/80 to-dark-surface/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Hero Content */}
            <div className="text-white">
              {/* Hero Badge */}
              <div className="inline-flex items-center glass-effect rounded-full px-4 py-2 mb-6">
                <Brain className="w-4 h-4 mr-2 text-brand-blue" />
                <span className="text-sm font-medium">AI-Powered Real Estate Platform</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stop Losing Deals to{' '}
                <span className="text-glow hero-gradient bg-clip-text text-transparent">
                  Poor Follow-Up
                </span>
              </h1>
              
              {/* Hero Description */}
              <p className="text-xl mb-8 text-dark-muted leading-relaxed">
                Transform your real estate business with AI that never forgets to follow up, 
                scores leads intelligently, and automates your marketing. Join 500+ agents 
                already closing more deals with less admin work.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => scrollToSection('pilot-signup')}
                  className="bg-brand-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors glow-effect flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Pilot
                </button>
                <button className="glass-effect text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors border border-brand-blue/30 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
              
              {/* Hero Statistics */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold stat-number">85%</div>
                  <div className="text-dark-muted text-sm">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold stat-number">3x</div>
                  <div className="text-dark-muted text-sm">More Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold stat-number">40%</div>
                  <div className="text-dark-muted text-sm">Higher Close Rate</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - AI Dashboard Preview */}
            <div className="relative">
              <div className="glass-effect rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 card-glow">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-dark-muted">AI Command Center</span>
                </div>
                
                {/* AI Lead Scoring Card */}
                <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-lg p-4 mb-4 border border-brand-blue/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center glow-effect">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">AI Lead Scoring</h4>
                        <p className="text-xs text-dark-muted">Intelligent lead prioritization</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-dark-text">Sarah Johnson</span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium border border-green-500/30">
                        95% Match
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-dark-text">Mike Chen</span>
                      <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium border border-yellow-500/30">
                        78% Match
                      </span>
                    </div>
                  </div>
                </div>

                {/* Market Insights Card */}
                <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 rounded-lg p-4 mb-4 border border-brand-orange/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center glow-effect">
                      <ChartLine className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Market Insights</h4>
                      <p className="text-xs text-dark-muted">Real-time market analytics</p>
                    </div>
                  </div>
                  <p className="text-sm text-dark-text">
                    "Homes in Katy under $500k are selling 25% faster this month"
                  </p>
                </div>

                {/* Auto-Marketing Card */}
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-4 border border-brand-green/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center glow-effect">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Auto-Marketing</h4>
                      <p className="text-xs text-dark-muted">AI-generated content</p>
                    </div>
                  </div>
                  <p className="text-sm text-dark-text">
                    Newsletter draft ready • 3 social posts scheduled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              The Real Estate Agent's Dilemma
            </h2>
            <p className="text-xl text-dark-muted max-w-3xl mx-auto">
              80% of agents average only 3.5 transactions per year while the top 20% close 26+ deals. 
              The difference? They don't drown in admin work.
            </p>
          </div>
          
          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Problem 1: Time Poverty */}
            <div className="problem-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                <Clock className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Time Poverty</h3>
              <p className="text-dark-muted mb-4">
                Agents spend 60-70% of their time on admin tasks instead of selling. 
                Newsletter creation alone takes 4-6 hours monthly.
              </p>
              <div className="text-3xl font-bold text-red-400">70%</div>
              <div className="text-sm text-dark-muted">Time wasted on admin</div>
            </div>
            
            {/* Problem 2: Lead Leakage */}
            <div className="problem-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-500/30">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lead Leakage</h3>
              <p className="text-dark-muted mb-4">
                Only 2.4% of real estate leads convert. Poor follow-up means 
                agents need 42-100 leads per transaction.
              </p>
              <div className="text-3xl font-bold text-yellow-400">2.4%</div>
              <div className="text-sm text-dark-muted">Average conversion rate</div>
            </div>
            
            {/* Problem 3: Performance Gap */}
            <div className="problem-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                <TrendingDown className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Performance Gap</h3>
              <p className="text-dark-muted mb-4">
                Top performers are 7.4x more productive than average agents, 
                but most lack the tools to compete.
              </p>
              <div className="text-3xl font-bold text-blue-400">7.4x</div>
              <div className="text-sm text-dark-muted">Productivity difference</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Your AI Copilot for Real Estate Success
            </h2>
            <p className="text-xl text-dark-muted max-w-3xl mx-auto">
              Automate your follow-ups, score leads intelligently, and generate professional content 
              in minutes—not hours. Focus on what you do best: closing deals.
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature 1: AI Lead Scoring */}
            <div className="feature-card rounded-2xl p-8">
              <div className="w-16 h-16 bg-brand-blue rounded-xl flex items-center justify-center mb-6 glow-effect">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Lead Scoring & Intent Detection</h3>
              <p className="text-dark-muted mb-6">
                Never waste time on cold leads again. Our AI analyzes behavior patterns, 
                engagement history, and market signals to predict which leads are ready to buy.
              </p>
              <ul className="space-y-3 text-sm text-dark-muted">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  Behavioral analysis and scoring
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  Intent prediction algorithms
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  Real-time lead prioritization
                </li>
              </ul>
            </div>
            
            {/* Feature 2: Smart Follow-Up */}
            <div className="feature-card rounded-2xl p-8">
              <div className="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center mb-6 glow-effect">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Follow-Up Automation</h3>
              <p className="text-dark-muted mb-6">
                AI-generated, personalized follow-up sequences that adapt based on lead behavior. 
                Never let another lead go cold due to forgotten follow-ups.
              </p>
              <ul className="space-y-3 text-sm text-dark-muted">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  Personalized message generation
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  Automated scheduling & reminders
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  Multi-channel communication
                </li>
              </ul>
            </div>
            
            {/* Feature 3: AI Content Engine */}
            <div className="feature-card rounded-2xl p-8">
              <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center mb-6 glow-effect">
                <ChartLine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Content & Newsletter Engine</h3>
              <p className="text-dark-muted mb-6">
                Generate professional newsletters, market reports, and social content in minutes. 
                Branded, personalized, and powered by real HAR market data.
              </p>
              <ul className="space-y-3 text-sm text-dark-muted">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  HAR MLS data integration
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  Branded newsletter templates
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  One-click CRM distribution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Trusted by Top Performing Agents</h2>
            <p className="text-xl text-dark-muted">Join the pilot program and see why agents are closing 40% more deals</p>
          </div>
          
          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="testimonial-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full mx-auto mb-4 flex items-center justify-center glow-effect">
                <span className="text-2xl font-bold text-white">SJ</span>
              </div>
              <h4 className="font-bold mb-2 text-white">Sarah Johnson</h4>
              <p className="text-brand-orange text-sm mb-4">Top Producer, Keller Williams</p>
              <p className="text-dark-muted italic">
                "RealEstateGuy.com doubled my lead conversion rate in just 30 days. 
                The AI follow-up system is like having a personal assistant that never sleeps."
              </p>
              <div className="flex justify-center mt-4">
                <div className="flex text-brand-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="testimonial-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full mx-auto mb-4 flex items-center justify-center glow-effect">
                <span className="text-2xl font-bold text-white">MC</span>
              </div>
              <h4 className="font-bold mb-2 text-white">Mike Chen</h4>
              <p className="text-brand-orange text-sm mb-4">Broker, RE/MAX</p>
              <p className="text-dark-muted italic">
                "I save 15 hours a week on admin work. The AI newsletters are so good, 
                my clients think I hired a marketing agency. Game changer!"
              </p>
              <div className="flex justify-center mt-4">
                <div className="flex text-brand-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="testimonial-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center glow-effect">
                <span className="text-2xl font-bold text-white">LR</span>
              </div>
              <h4 className="font-bold mb-2 text-white">Lisa Rodriguez</h4>
              <p className="text-brand-orange text-sm mb-4">Team Leader, Century 21</p>
              <p className="text-dark-muted italic">
                "My team's productivity increased 3x after implementing RealEstateGuy.com. 
                The lead scoring is incredibly accurate—we focus on the right prospects."
              </p>
              <div className="flex justify-center mt-4">
                <div className="flex text-brand-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILOT PROGRAM CTA SECTION */}
      <section id="pilot-signup" className="py-20 bg-gradient-to-r from-brand-blue to-brand-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Pilot Program Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-medium mb-6 glow-effect">
              <Rocket className="w-4 h-4 mr-2" />
              Limited Pilot Program - 100 Spots Only
            </span>
          </div>
          
          {/* CTA Headline */}
          <h2 className="text-5xl font-bold mb-6 text-glow">
            Ready to 3x Your Productivity?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our exclusive pilot program and get early access to the AI tools that are 
            transforming how top agents work. Limited to 100 Houston-area agents.
          </p>
          
          {/* Signup Form */}
          <div className="form-dark rounded-2xl p-8 max-w-md mx-auto card-glow">
            <h3 className="text-2xl font-bold text-white mb-6">Get Early Access</h3>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <input 
                type="text" 
                name="fullName"
                placeholder="Full Name" 
                className="w-full px-4 py-3 input-dark rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className="w-full px-4 py-3 input-dark rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                required
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                className="w-full px-4 py-3 input-dark rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                required
              />
              <select 
                name="brokerage" 
                className="w-full px-4 py-3 input-dark rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent" 
                required
              >
                <option value="">Select Your Brokerage</option>
                <option value="keller-williams">Keller Williams</option>
                <option value="remax">RE/MAX</option>
                <option value="coldwell-banker">Coldwell Banker</option>
                <option value="century21">Century 21</option>
                <option value="berkshire-hathaway">Berkshire Hathaway</option>
                <option value="compass">Compass</option>
                <option value="exp-realty">eXp Realty</option>
                <option value="other">Other</option>
              </select>
              <select 
                name="transactionVolume" 
                className="w-full px-4 py-3 input-dark rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent" 
                required
              >
                <option value="">Annual Transaction Volume</option>
                <option value="1-5">1-5 transactions</option>
                <option value="6-15">6-15 transactions</option>
                <option value="16-30">16-30 transactions</option>
                <option value="30+">30+ transactions</option>
              </select>
              <button 
                type="submit" 
                className="w-full bg-brand-orange text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors glow-effect flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Join Pilot Program
              </button>
            </form>
            <p className="text-xs text-dark-muted mt-4">
              Free 60-day pilot • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-dark-muted">Choose the plan that fits your business. All plans include our core AI features.</p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="pricing-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$97</span>
                <span className="text-dark-muted">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  <span className="text-dark-text">AI Lead Scoring</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  <span className="text-dark-text">Smart Follow-ups</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  <span className="text-dark-text">Basic Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  <span className="text-dark-text">Up to 500 leads</span>
                </li>
              </ul>
              <button className="w-full bg-dark-surface text-dark-muted py-3 rounded-lg font-semibold hover:bg-dark-border transition-colors border border-dark-border">
                Coming Soon
              </button>
            </div>
            
            {/* Professional Plan (Featured) */}
            <div className="pricing-card featured rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-medium glow-effect">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$197</span>
                <span className="text-dark-muted">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-orange mr-3" />
                  <span className="text-dark-text">Everything in Starter</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-orange mr-3" />
                  <span className="text-dark-text">AI Newsletter Engine</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-orange mr-3" />
                  <span className="text-dark-text">Market Intelligence</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-orange mr-3" />
                  <span className="text-dark-text">Unlimited leads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-orange mr-3" />
                  <span className="text-dark-text">HAR Integration</span>
                </li>
              </ul>
              <button 
                onClick={() => scrollToSection('pilot-signup')}
                className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors glow-effect"
              >
                Join Pilot Program
              </button>
            </div>
            
            {/* Team Plan */}
            <div className="pricing-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Team</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$497</span>
                <span className="text-dark-muted">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  <span className="text-dark-text">Everything in Professional</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  <span className="text-dark-text">Team Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  <span className="text-dark-text">White-label Options</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  <span className="text-dark-text">Up to 10 agents</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-brand-green mr-3" />
                  <span className="text-dark-text">Priority Support</span>
                </li>
              </ul>
              <button className="w-full bg-dark-surface text-dark-muted py-3 rounded-lg font-semibold hover:bg-dark-border transition-colors border border-dark-border">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer id="about" className="bg-dark-surface text-white py-16 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-brand-blue text-white p-2 rounded-lg glow-effect">
                  <Brain className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">RealEstateGuy.com</span>
              </div>
              <p className="text-dark-muted mb-6">
                Your AI Copilot for Real Estate Success. Transform your business with 
                intelligent automation and data-driven insights.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-dark-muted hover:text-brand-blue transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-dark-muted hover:text-brand-blue transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-dark-muted hover:text-brand-blue transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Product Links */}
            <div>
              <h4 className="font-bold mb-6 text-white">Product</h4>
              <ul className="space-y-3 text-dark-muted">
                <li>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="hover:text-brand-blue transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="hover:text-brand-blue transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">API</a></li>
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h4 className="font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-dark-muted">
                <li><a href="#" className="hover:text-brand-blue transition-colors">About</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Support Links */}
            <div>
              <h4 className="font-bold mb-6 text-white">Support</h4>
              <ul className="space-y-3 text-dark-muted">
                <li><a href="#" className="hover:text-brand-blue transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-dark-border mt-12 pt-8 text-center text-dark-muted">
            <p>&copy; 2024 RealEstateGuy.com. All rights reserved. Built with ❤️ for real estate professionals.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
