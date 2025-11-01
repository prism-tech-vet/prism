import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cloud, Zap, Database, Users, Box } from 'lucide-react';

export default function App() {
  return (
    <Router basename="/prism">
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-slate-100">
        <Header />
        <main className="max-w-7xl mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="p-6 border-b border-slate-800 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">PRISM</h1>
      <nav className="space-x-6 text-slate-300">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/overview" className="hover:text-white">Overview</Link>
        <Link to="/modules" className="hover:text-white">Modules</Link>
        <Link to="/team" className="hover:text-white">Team</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section className="text-center py-20">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold">
        Product Realization. Simplified.
      </motion.h2>
      <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
        PRISM integrates CAD, PLM, ERP, and Ontology-based automation to empower manufacturers and innovators alike.
      </p>
      <div className="mt-8">
        <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">Get Started</Link>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="mt-12">
      <h3 className="text-3xl font-semibold mb-4">Why PRISM?</h3>
      <p className="text-slate-300 max-w-3xl mx-auto">
        PRISM bridges the gap between design, data, and decision-making by automating product development workflows.
      </p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <Stat icon={<Cloud />} title="Integrated" subtitle="PLM, CAD, ERP sync" />
        <Stat icon={<Zap />} title="Automated" subtitle="Rule-driven redesigns" />
        <Stat icon={<Database />} title="Explainable" subtitle="Ontology + traceable decisions" />
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="mt-16">
      <h3 className="text-3xl font-semibold text-center mb-6">Core Modules</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <ModuleCard title="CAD Automation" desc="Parametric FreeCAD integration with ontology linkage." />
        <ModuleCard title="PLM Connector" desc="nanoPLM-based lifecycle management and change tracking." />
        <ModuleCard title="ERP Bridge" desc="Seamless resource sync for production-ready outputs." />
      </div>
    </section>
  );
}

function ModuleCard({ title, desc }) {
  return (
    <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}

function Team() {
  return (
    <section className="mt-16 text-center">
      <h3 className="text-3xl font-semibold mb-4">Our Team</h3>
      <div className="flex justify-center gap-8 mt-8">
        <TeamCard name="Suhani Kolhatkar" role="Ontology, CAD, and FEA Experts" />
        <TeamCard name="Anand Khandekar" role="Ontology, CAD, and FEA Experts" />
      </div>
    </section>
  );
}

function TeamCard({ name, role }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 w-60">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-slate-400 text-sm">{role}</div>
    </div>
  );
}

function Contact() {
  return (
    <section className="mt-16 text-center">
      <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
      <p className="text-slate-300 max-w-xl mx-auto">
        Reach out at <a href="mailto:info@validusedutech.com" className="text-blue-500 underline">info@validusedutech.com</a> to collaborate or learn more about PRISM.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-20 py-6 text-center border-t border-slate-800 text-slate-400 text-sm">
      © {new Date().getFullYear()} Validus EduTech — PRISM Vertical
    </footer>
  );
}

function Stat({ icon, title, subtitle }) {
  return (
    <div className="p-4 rounded-lg bg-slate-800 border border-slate-700 flex gap-4 items-center">
      <div className="w-12 h-12 grid place-items-center rounded bg-slate-700">{icon}</div>
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-slate-400 text-xs">{subtitle}</div>
      </div>
    </div>
  );
}
