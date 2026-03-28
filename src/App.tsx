import { Phone, MessageCircle, MapPin, Clock, Mail, ChevronRight, Laptop, Monitor, Wrench, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export default function App() {
  const phoneNumber = "9875367512";
  const whatsappNumber = "9875367512";
  const email = "multiserviceinfotech@gmail.com";
  const mapLink = "https://share.google/dSmjgG6a00pJYYTtU";

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-100 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5 text-blue-600" /> 171/C/1 Picnic Garden Road, Kolkata</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5 text-blue-600" /> 9:00 AM - 10:00 PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href={`mailto:${email}`} className="flex items-center hover:text-blue-600 transition-colors"><Mail className="w-4 h-4 mr-1.5 text-blue-600" /> Email Us</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0 flex items-center gap-2">
                <img src="/logo.png" alt="M.S INFOTECH Logo" className="h-14 w-auto object-contain" />
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#services" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">Services</a>
              <a href="#contact" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">Contact</a>
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Call Now</span>
                <span className="sm:hidden">Call</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/motherboard/1920/1080?blur=10')] opacity-5 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 ring-1 ring-inset ring-blue-600/20 mb-8">
              <MapPin className="w-4 h-4 mr-1.5" />
              Serving Picnic Garden Road, Kolkata
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              Expert Laptop & Desktop <span className="text-blue-600">Repair Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
              When your computer breaks down, you need a repair service you can trust. We provide fast, reliable, and professional diagnostics and repairs to get you back up and running.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {phoneNumber}
              </a>
              <a 
                href={`https://wa.me/91${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-green-500" />
                WhatsApp Us
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-gray-500 font-medium">
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1.5 text-blue-600" /> Expert Technicians</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1.5 text-blue-600" /> Fast Turnaround</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Comprehensive Repair Services</h2>
            <p className="text-lg text-gray-600">We diagnose and fix all types of hardware and software issues for both laptops and desktop computers.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 mb-6 group-hover:bg-blue-600 transition-colors">
                <Laptop className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Laptop Repair</h3>
              <p className="text-gray-600 mb-4">Screen replacements, battery issues, keyboard repairs, and motherboard diagnostics for all major brands.</p>
              <ul className="space-y-2">
                {['Screen Replacement', 'Battery Replacement', 'Keyboard Repair'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <ChevronRight className="w-4 h-4 mr-1 text-blue-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 mb-6 group-hover:bg-blue-600 transition-colors">
                <Monitor className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Desktop Repair</h3>
              <p className="text-gray-600 mb-4">Power supply issues, hardware diagnostics, cooling system repairs, and custom PC troubleshooting.</p>
              <ul className="space-y-2">
                {['Hardware Diagnostics', 'Power Supply Fixes', 'Cooling Solutions'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <ChevronRight className="w-4 h-4 mr-1 text-blue-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all group sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 mb-6 group-hover:bg-blue-600 transition-colors">
                <Zap className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Software & Upgrades</h3>
              <p className="text-gray-600 mb-4">OS installation, virus removal, performance optimization, and SSD/RAM upgrades to make your computer faster.</p>
              <ul className="space-y-2">
                {['OS Installation', 'Virus Removal', 'SSD & RAM Upgrades'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <ChevronRight className="w-4 h-4 mr-1 text-blue-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Credibility */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why Choose M.S INFOTECH?</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                As your local "Gadget's Doctor" in Kolkata, we believe in honest assessments and transparent pricing. We don't just fix the symptoms; we find the root cause to ensure your device runs smoothly for years to come.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Extended Hours</h4>
                    <p className="mt-1 text-gray-400">Open from 9:00 AM to 10:00 PM, making it easy to drop off or pick up your device after work.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                      <ShieldCheck className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Trusted Local Service</h4>
                    <p className="mt-1 text-gray-400">Conveniently located on Picnic Garden Road, serving the local community with reliable repairs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8 sm:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Ready to fix your device?</h3>
                <p className="text-gray-400 mb-8">Don't let a broken computer slow you down. Contact us today for a quick diagnostic and quote.</p>
                <div className="space-y-4">
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="flex items-center justify-center w-full px-6 py-4 text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call {phoneNumber}
                  </a>
                  <a 
                    href={`https://wa.me/91${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-4 text-base font-medium rounded-xl text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Visit Us or Get in Touch</h2>
            <p className="text-lg text-gray-600">We're located in Kolkata. Drop by our shop or contact us to schedule a repair.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-gray-900">Address</h4>
                  <p className="mt-1 text-sm text-gray-600">171/C/1 Picnic Garden Road<br />Kolkata</p>
                  <a href={mapLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                    Get Directions <ChevronRight className="w-4 h-4 ml-0.5" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-gray-900">Business Hours</h4>
                  <p className="mt-1 text-sm text-gray-600">Monday - Sunday<br />9:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-gray-900">Email</h4>
                  <a href={`mailto:${email}`} className="mt-1 text-sm text-gray-600 hover:text-blue-600 break-all">{email}</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col items-center justify-center p-12 text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Us on Google Maps</h3>
              <p className="text-gray-600 mb-8 max-w-md">We're conveniently located on Picnic Garden Road. Click below to open our location in Google Maps for easy navigation.</p>
              <a 
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/logo.png" alt="M.S INFOTECH Logo" className="h-10 w-auto object-contain mr-3" />
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href={`tel:${phoneNumber}`} className="hover:text-blue-600 transition-colors">Call Us</a>
              <a href={`https://wa.me/91${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">WhatsApp</a>
              <a href={mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Directions</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} M.S INFOTECH. All rights reserved.</p>
            <p className="mt-2 md:mt-0">171/C/1 Picnic Garden Road, Kolkata</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
