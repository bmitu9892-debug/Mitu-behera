/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Milk, 
  MapPin, 
  Users, 
  ChevronRight, 
  Star, 
  ShoppingBag, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  Twitter,
  Share2,
  Link2,
  Menu,
  X,
  CheckCircle2
} from 'lucide-react';

// Design Recipe 6: Warm Organic / Cultural
// Colors: Warm off-white, Chocolate Brown, Gold/Yellow accents

const PravutiApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const cities = ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri'];
  
  const products = [
    { 
      id: 'mini',
      name: 'Munch Milk (₹5 Pack)', 
      price: '₹5', 
      description: 'Perfect pocket-sized treat for a quick burst of energy and joy. Loved by kids across Odisha.', 
      image: '/input_file_1.jpg',
      features: ['Pocket Friendly', 'Quick Energy', 'Kids Favorite']
    },
    { 
      id: 'premium',
      name: 'Munch Milk (₹100 Pack)', 
      price: '₹100', 
      description: 'The premium pack for true chocolate lovers. Rich, creamy, and deeply satisfying.', 
      image: '/input_file_4.jpg',
      features: ['Premium Quality', 'Rich Cocoa', 'Perfect Gift']
    },
    { 
      id: 'family',
      name: 'Odisha Family Pack', 
      price: '₹250', 
      description: 'Celebrate festivals and family gatherings with our special Odisha-themed family pack.', 
      image: '/input_file_3.png',
      features: ['Festive Special', 'Shareable', 'Traditional Art']
    },
    { 
      id: 'gift',
      name: 'Utkal Premium Box', 
      price: '₹500', 
      description: 'Our luxury gift box featuring traditional Pattachitra art packaging. Perfect for weddings and special occasions.', 
      image: '/input_file_2.jpg',
      features: ['Luxury Gifting', 'Pattachitra Art', 'Assorted Flavors']
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleShare = (platform: string, product: typeof products[0]) => {
    const url = window.location.href;
    const text = `Check out ${product.name} from Pravuti Foods! Odisha's favorite milk chocolate.`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopySuccess(product.id);
        setTimeout(() => setCopySuccess(null), 2000);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#3d2b1f] font-sans selection:bg-[#e6c200] selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#fdfcf8]/80 backdrop-blur-md border-b border-[#3d2b1f]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#3d2b1f] rounded-full flex items-center justify-center">
                <Milk className="text-[#e6c200] w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#3d2b1f]">PRAVUTI <span className="text-[#e6c200]">FOODS</span></span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
              <a href="#home" className="hover:text-[#e6c200] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#e6c200] transition-colors">Our Story</a>
              <a href="#products" className="hover:text-[#e6c200] transition-colors">Products</a>
              <a href="#distributor" className="px-5 py-2 bg-[#3d2b1f] text-white rounded-full hover:bg-[#523a2a] transition-all shadow-md">Partner With Us</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#fdfcf8] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-serif italic">
              <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>Our Story</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
              <a href="#distributor" onClick={() => setIsMenuOpen(false)} className="text-[#e6c200]">Partner With Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#e6c200]/10 text-[#b39700] text-xs font-bold uppercase tracking-widest mb-6">
                Odisha's Pride
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
                Odisha Ka Apna Swad – <span className="italic text-[#3d2b1f]">Munch Milk Chocolate</span>
              </h1>
              <p className="text-xl text-[#3d2b1f]/70 mb-8 max-w-lg leading-relaxed">
                Bringing the Richness of Milk and the Joy of Chocolate to Every Corner of Odisha.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#products" className="px-8 py-4 bg-[#3d2b1f] text-white rounded-full font-bold flex items-center gap-2 hover:bg-[#523a2a] transition-all shadow-lg group">
                  Explore Products <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/919556852399?text=Hello!%20I%20would%20like%20to%20order%20Munch%20Milk%20Chocolate." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold flex items-center gap-2 hover:bg-[#128C7E] transition-all shadow-lg"
                >
                  <Phone className="w-4 h-4" /> Order Now
                </a>
                <a href="#distributor" className="px-8 py-4 border-2 border-[#3d2b1f] rounded-full font-bold hover:bg-[#3d2b1f] hover:text-white transition-all">
                  Become a Partner
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl rotate-3 bg-[#e6c200]">
                <img 
                  src="/input_file_1.jpg" 
                  alt="Delicious Milk Chocolate" 
                  className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-[#3d2b1f]/5">
                <div className="w-12 h-12 bg-[#e6c200] rounded-full flex items-center justify-center">
                  <Star className="text-white fill-current" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3d2b1f]/50">Trusted By</p>
                  <p className="text-lg font-bold">10,000+ Families</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#e6c200]/5 -z-0 rounded-l-[100px]" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#e6c200] mb-4">Hamari Pehchan</h2>
            <h3 className="text-4xl font-serif font-bold">Our Story</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg leading-relaxed text-[#3d2b1f]/80">
              <p>
                Pravuti Food Marketing ek sapne se shuru hui thi—Odisha ke logo tak world-class confectionery ka swad pahunchana. 
              </p>
              <p>
                Hamara brand <span className="font-bold text-[#3d2b1f]">Munch Milk Chocolate</span> sirf ek chocolate nahi, balki ek celebration hai. Hum quality aur taste ka perfect balance rakhte hain taaki har bite mein aapko asli milk chocolate ka ehsas ho.
              </p>
              
              {/* Founder Message */}
              <div className="mt-12 p-8 bg-[#f5f2ed] rounded-[32px] border border-[#3d2b1f]/5 relative">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
                    <img 
                      src="/input_file_0.jpg" 
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.endsWith('.jpg')) {
                          target.src = '/input_file_0.png';
                        } else if (target.src.endsWith('.png')) {
                          target.src = '/input_file_0.webp';
                        } else if (target.src.endsWith('.webp')) {
                          target.src = '/input_file_0.jpeg';
                        }
                      }}
                      alt="Founder of Pravuti Foods" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="italic text-[#3d2b1f]/70 mb-2">"Hamara lakshya hai Odisha ke har ghar mein mithas aur khushi pahunchana."</p>
                    <p className="font-bold text-[#3d2b1f]">Founder, Pravuti Foods</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-serif font-bold text-[#3d2b1f]">100%</h4>
                  <p className="text-sm uppercase tracking-wider">Pure Milk</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif font-bold text-[#3d2b1f]">Odisha</h4>
                  <p className="text-sm uppercase tracking-wider">Local Roots</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/input_file_2.jpg" alt="Chocolate Making" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
              <img src="/input_file_3.png" alt="Milk Quality" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-[#3d2b1f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#e6c200] mb-4">Hum Kyun Alag Hain?</h2>
            <h3 className="text-4xl font-serif font-bold">Why Choose Munch?</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Pure Milk Goodness', desc: 'Hum behtareen ingredients ka istemal karte hain.', icon: Milk },
              { title: 'Odisha’s Choice', desc: 'Hum Odisha ke logo ke taste aur preference ko samajhte hain.', icon: MapPin },
              { title: 'Affordable Luxury', desc: 'Mehengi chocolate jaisa swad, par pocket-friendly price mein.', icon: ShoppingBag },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <item.icon className="w-12 h-12 text-[#e6c200] mb-6" />
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-[#fdfcf8] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#e6c200 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute -right-40 top-40 w-96 h-96 bg-[#e6c200]/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 bottom-40 w-96 h-96 bg-[#3d2b1f]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#e6c200]"></div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#e6c200]">Our Pride</h2>
              <div className="h-px w-12 bg-[#e6c200]"></div>
            </div>
            <h3 className="text-5xl font-serif font-bold text-[#3d2b1f] mb-6">The Munch Collection</h3>
            <p className="text-lg text-[#3d2b1f]/70 max-w-2xl mx-auto font-serif italic">
              From pocket-friendly treats to grand festive celebrations, discover the perfect Munch Milk Chocolate for every occasion in Odisha.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group flex flex-col h-full bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#3d2b1f]/5 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f2ed] p-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-radial-gradient from-white/60 to-transparent opacity-80" />
                  
                  {/* Price Tag */}
                  <div className="absolute top-6 left-6 z-20 bg-[#e6c200] text-[#3d2b1f] px-4 py-2 rounded-full font-bold shadow-md text-lg">
                    {product.price}
                  </div>

                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#3d2b1f]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30 flex flex-col items-center justify-center gap-6 backdrop-blur-sm">
                    <p className="text-[#e6c200] font-serif italic text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Share The Joy</p>
                    <div className="flex gap-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleShare('facebook', product); }}
                        className="w-12 h-12 rounded-full bg-white text-[#3d2b1f] flex items-center justify-center hover:bg-[#e6c200] hover:text-[#3d2b1f] transition-all shadow-xl hover:scale-110"
                        title="Share on Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleShare('twitter', product); }}
                        className="w-12 h-12 rounded-full bg-white text-[#3d2b1f] flex items-center justify-center hover:bg-[#e6c200] hover:text-[#3d2b1f] transition-all shadow-xl hover:scale-110"
                        title="Share on X"
                      >
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleShare('copy', product); }}
                        className="w-12 h-12 rounded-full bg-white text-[#3d2b1f] flex items-center justify-center hover:bg-[#e6c200] hover:text-[#3d2b1f] transition-all shadow-xl hover:scale-110"
                        title="Copy Link"
                      >
                        {copySuccess === product.id ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <Link2 className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h4 className="text-2xl font-serif font-bold mb-3 text-[#3d2b1f] group-hover:text-[#e6c200] transition-colors">{product.name}</h4>
                    <p className="text-[#3d2b1f]/70 text-sm leading-relaxed mb-6">{product.description}</p>
                    
                    {/* Features List */}
                    <ul className="space-y-2 mb-8">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3d2b1f]/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#e6c200]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={`https://wa.me/919556852399?text=Hello!%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#f5f2ed] text-[#3d2b1f] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#e6c200] hover:text-[#3d2b1f] transition-all border border-[#3d2b1f]/10 group-hover:border-transparent"
                  >
                    <ShoppingBag className="w-4 h-4" /> Order Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#e6c200] mb-4">The Classic</h2>
              <h3 className="text-4xl font-serif font-bold mb-6">Munch Milk Chocolate</h3>
              <p className="text-lg text-[#3d2b1f]/80 mb-8 leading-relaxed">
                Experience the perfect symphony of rich cocoa and creamy milk. Our signature Munch Milk Chocolate is crafted to melt in your mouth, delivering a moment of pure bliss with every bite.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Milk className="w-5 h-5 text-[#e6c200]" /> Ingredients
                  </h4>
                  <p className="text-[#3d2b1f]/70 leading-relaxed">
                    Sugar, Milk Solids (35%), Cocoa Butter, Cocoa Solids, Emulsifiers (E322, E476), Nature Identical Flavouring Substances.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#e6c200]" /> Nutritional Information
                  </h4>
                  <div className="bg-[#f5f2ed] rounded-2xl p-6 border border-[#3d2b1f]/5">
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                      <div className="flex justify-between border-b border-[#3d2b1f]/10 pb-2 pr-4">
                        <span className="font-medium">Energy</span>
                        <span className="text-[#3d2b1f]/70">530 kcal</span>
                      </div>
                      <div className="flex justify-between border-b border-[#3d2b1f]/10 pb-2 pl-4">
                        <span className="font-medium">Protein</span>
                        <span className="text-[#3d2b1f]/70">7.5 g</span>
                      </div>
                      <div className="flex justify-between border-b border-[#3d2b1f]/10 pb-2 pr-4">
                        <span className="font-medium">Carbohydrates</span>
                        <span className="text-[#3d2b1f]/70">58.2 g</span>
                      </div>
                      <div className="flex justify-between border-b border-[#3d2b1f]/10 pb-2 pl-4">
                        <span className="font-medium">Total Sugars</span>
                        <span className="text-[#3d2b1f]/70">45.5 g</span>
                      </div>
                      <div className="flex justify-between pr-4 pt-2">
                        <span className="font-medium">Total Fat</span>
                        <span className="text-[#3d2b1f]/70">29.6 g</span>
                      </div>
                      <div className="flex justify-between pl-4 pt-2">
                        <span className="font-medium">Sodium</span>
                        <span className="text-[#3d2b1f]/70">85 mg</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#3d2b1f]/50 mt-4 italic">*Approximate values per 100g</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="https://wa.me/919556852399?text=Hello!%20I%20would%20like%20to%20order%20Munch%20Milk%20Chocolate." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-lg"
                  >
                    <ShoppingBag className="w-5 h-5" /> Order Now on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-square rounded-[40px] bg-[#f5f2ed] p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-white to-transparent opacity-50" />
                <img 
                  src="/input_file_4.jpg" 
                  alt="Munch Milk Chocolate Detail" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-[#e6c200]/20 rounded-full blur-xl" />
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#3d2b1f]/10 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Trust Section */}
      <section className="py-24 bg-[#f5f2ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#e6c200] mb-4">All Odisha Dealership</h2>
              <h3 className="text-4xl font-serif font-bold mb-8">Dealerships Available Across Odisha</h3>
              <p className="text-lg text-[#3d2b1f]/70 mb-8">
                From the bustling streets of Bhubaneswar to the industrial heart of Rourkela, Munch Milk Chocolate is spreading smiles across the state. We are actively looking for dealership partners in all 30 districts.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {cities.map((city, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-[#3d2b1f]/5">
                    <div className="w-2 h-2 bg-[#e6c200] rounded-full" />
                    <span className="font-bold">{city}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-white flex items-center justify-center">
                {/* Placeholder for Map Visualization */}
                <div className="text-center p-12">
                  <MapPin className="w-16 h-16 text-[#e6c200] mx-auto mb-6 animate-bounce" />
                  <p className="text-xl font-serif italic">Our network covers all 30 districts of Odisha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distributor Form Section */}
      <section id="distributor" className="py-24 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-[#3d2b1f]/5">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-[#e6c200]/10 text-[#b39700] text-xs font-bold uppercase tracking-widest mb-4">
                All Odisha Dealership Available
              </div>
              <h3 className="text-4xl font-serif font-bold mb-4">Odisha mein hamare partner banein</h3>
              <p className="text-[#3d2b1f]/60">Join the fastest growing confectionery network. Dealerships open across all 30 districts of Odisha.</p>
            </div>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Application Received!</h4>
                <p className="text-[#3d2b1f]/60">Our team will contact you within 24-48 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3d2b1f]/50">Full Name</label>
                    <input required type="text" className="w-full px-6 py-4 bg-[#fdfcf8] border border-[#3d2b1f]/10 rounded-2xl focus:outline-none focus:border-[#e6c200] transition-colors" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3d2b1f]/50">Phone Number</label>
                    <input required type="tel" className="w-full px-6 py-4 bg-[#fdfcf8] border border-[#3d2b1f]/10 rounded-2xl focus:outline-none focus:border-[#e6c200] transition-colors" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3d2b1f]/50">City / District</label>
                  <select className="w-full px-6 py-4 bg-[#fdfcf8] border border-[#3d2b1f]/10 rounded-2xl focus:outline-none focus:border-[#e6c200] transition-colors">
                    {cities.map(city => <option key={city}>{city}</option>)}
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3d2b1f]/50">Message (Optional)</label>
                  <textarea className="w-full px-6 py-4 bg-[#fdfcf8] border border-[#3d2b1f]/10 rounded-2xl focus:outline-none focus:border-[#e6c200] transition-colors h-32" placeholder="Tell us about your distribution experience..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-[#3d2b1f] text-white rounded-2xl font-bold text-lg hover:bg-[#523a2a] transition-all shadow-lg flex items-center justify-center gap-2">
                  Submit Application <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#e6c200]/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3d2b1f]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </section>

      {/* Footer */}
      <footer className="bg-[#3d2b1f] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Milk className="text-[#3d2b1f] w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight">PRAVUTI <span className="text-[#e6c200]">FOODS</span></span>
              </div>
              <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
                Dedicated to bringing the finest confectionery experiences to the beautiful state of Odisha. Quality, Taste, and Tradition in every bite.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e6c200] transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e6c200] transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e6c200] transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#e6c200]">Quick Links</h5>
              <ul className="space-y-4 text-white/60">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#distributor" className="hover:text-white transition-colors">Distributor Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#e6c200]">Contact</h5>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +91 9556852399</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> hello@pravutifoods.com</li>
                <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-1" /> Bhubaneswar, Odisha, India</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()} Pravuti Food Marketing. All rights reserved. Made with ❤️ for Odisha.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PravutiApp;
