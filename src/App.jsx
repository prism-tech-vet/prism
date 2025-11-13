import React from 'react'

export default function App() {
  return (
    <div className="font-['Inter_Tight',sans-serif] bg-black text-white relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[130px] animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 right-1/3 w-[550px] h-[550px] bg-cyan-400/15 rounded-full blur-[110px] animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
          <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-10">
            <ul className="flex gap-8 text-sm">
              <li><a href="#product" className="hover:text-cyan-400 transition">Product</a></li>
              <li><a href="#workflow" className="hover:text-cyan-400 transition">Workflow</a></li>
              <li><a href="#demos" className="hover:text-cyan-400 transition">Demos</a></li>
            </ul>
            <div className="flex-shrink-0 flex items-center justify-center">
              <img src="assests/logo.png" alt="PRISM Logo" className="h-14 w-auto" />
            </div>
            <ul className="flex gap-8 text-sm">
              <li><a href="#features" className="hover:text-cyan-400 transition">Features</a></li>
              <li><a href="#tech" className="hover:text-cyan-400 transition">Tech</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* HERO */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            Automate <span className="text-cyan-400">Design</span>. Model <span className="text-cyan-400">Semantics</span>. Deliver Instantly.
          </h1>
          <p className="text-gray-400 max-w-2xl mb-10">
            Parametric Redesigning and Semantic Intelligent Modeling Platform connecting Frontend → CAD → Ontology → ERP → Shop-floor.
          </p>
          <div className="flex gap-4">
            <a href="#demos" className="px-6 py-3 bg-cyan-400 text-black rounded-md font-semibold hover:scale-105 transition">Watch Demo</a>
            <a href="#contact" className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400/10 transition">Collaborate</a>
          </div>
        </section>

        {/* WORKFLOW */}
        <section id="workflow" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-12">How PRISM Works</h2>
            <div className="grid md:grid-cols-3 gap-10 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">CAD Parametric Core</h3>
                <p className="text-gray-400 text-sm">Geometry, Constraints, and Degrees of Freedom form the adaptive foundation. The model morphs intelligently with parameter changes, maintaining design intent and structure.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Semantic Ontology Engine</h3>
                <p className="text-gray-400 text-sm">Defines design intent, logical relationships, and dependencies through knowledge graphs — embedding meaning into engineering data and enabling semantic interoperability.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">ERP Connection</h3>
                <p className="text-gray-400 text-sm">Real-time integration closing the loop between design and manufacturing. Automatically updates BOMs, attaches PDFs & STEP files, and ensures contextual data sync between PRISM and ERP.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DEMOS */}
        <section id="demos" className="py-24 px-6 bg-black">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-12">Experience PRISM in Action</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  <video className="w-300 h-300 object-cover" controls>
                    <source src='assests/demo1.mp4' type="video/mp4" />
                  </video>
                  <div className="text-left flex flex-col justify-center" >
                    <p className="text-gray-300 text-lg">
                      <strong className="text-cyan-400">Demo 1:</strong> Watch how PRISM automates the redesign of a mechanical part by adjusting key parameters, instantly updating the CAD model while preserving design intent through semantic rules.
                    </p>
                  </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  <video className="w-300 h-300 object-cover" controls>
                    <source src='assests/demo1.mp4' type="video/mp4" />
                  </video>
                  <div className="text-left flex flex-col justify-center" >
                    <p className="text-gray-300 text-lg">
                      <strong className="text-cyan-400">Demo 1:</strong> Watch how PRISM automates the redesign of a mechanical part by adjusting key parameters, instantly updating the CAD model while preserving design intent through semantic rules.
                    </p>
                  </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <iframe src="assests/ATF_ontology_interactive-5.html" frameborder="0"></iframe>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-24 px-6 bg-gradient-to-t from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">Key Differentiators</h2>
            <ul className="grid md:grid-cols-2 gap-10 text-gray-300">
              <li><strong className="text-cyan-400">Open-Source Foundation:</strong> Built on open technologies — no vendor lock-in or licensing costs. Collaboration accelerates innovation.</li>
              <li><strong className="text-cyan-400">Automation-Driven:</strong> Parametric rules + semantic intelligence automate redesign cycles, drastically reducing manual effort and time-to-market.</li>
              <li><strong className="text-cyan-400">Graph Database Backbone:</strong> A graph-first semantic store enables reasoning, traceability, and scalable linking of design knowledge.</li>
              <li><strong className="text-cyan-400">Robust Engineering Pipeline:</strong> Connects CAD, PLM, ERP, and ontology — ensuring consistent data flow and traceability.</li>
              <li><strong className="text-cyan-400">Secure & Controlled Sharing:</strong> Fine-grained controls protect IP while allowing safe collaboration.</li>
              <li><strong className="text-cyan-400">Extensible Architecture:</strong> Modular design allows easy integration of new tools, algorithms, and workflows as needs evolve.</li>
            </ul>
          </div>
        </section>

        {/* TECH */}
        <section id="tech" className="py-16 bg-black text-center">
          <h3 className="text-xl font-semibold mb-6">Built on Open Innovation</h3>
          <div className="flex justify-center flex-wrap gap-6 text-gray-400">
            {['FreeCAD','Protégé','Python','ERPNext','GraphDB','PostgreSQL'].map(t=>(<span key={t} className="px-4 py-2 border border-gray-700 rounded-md">{t}</span>))}
          </div>
        </section>

        {/* CONTACT */}
        <footer id="contact" className="py-20 text-center bg-gradient-to-b from-black to-gray-900">
          <img src="assests/logo.png" alt="PRISM Logo" className="mx-auto h-24 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Let’s Collaborate</h4>
          <p className="text-gray-400 mb-6">Reach us at <a href="mailto:prism.tech.vet@gmail.com" className="text-cyan-400 underline">prism.tech.vet@gmail.com</a></p>
          <a href="mailto:prism.tech.vet@gmail.com" className="px-6 py-3 bg-cyan-400 text-black rounded-md font-semibold hover:scale-105 transition">Contact Us</a>
          <p className="text-xs text-gray-600 mt-8">© 2025 PRISM — Parametric Redesigning and Semantic Intelligent Modeling</p>
        </footer>
      </div>
    </div>
  )
}
