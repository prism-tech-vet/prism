import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud, Zap, Database, Users, Box, Cpu, Cog, Workflow, Globe,
  Layers, ChevronDown, ChevronUp, Rocket, Lightbulb, Target,
  BarChart3, Factory, LineChart, Briefcase, Building
} from "lucide-react";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-slate-100 font-sans">
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

// ---------------- HEADER ----------------
function Header() {
  return (
    <header className="p-6 border-b border-slate-800 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide text-blue-400">PRISM</h1>
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

// ---------------- HOME ----------------
function Home() {
  return (
    <section className="text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400"
      >
        PRISM
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl mt-4 text-slate-300 tracking-widest"
      >
        Parametric Redesigning and Intelligent Semantic Modeling
      </motion.h2>

      <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-relaxed">
        PRISM is redefining digital product realization. It brings together <b>CAD automation</b>, <b>PLM systems</b>,
        <b> ERP integration</b>, and <b>Ontology Intelligence</b> — building a truly connected digital manufacturing ecosystem for the Industry 4.0 era.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <FeatureBox
          icon={<Zap />}
          title="Parametric Redesigning"
          desc="Auto-generate product variants with adaptive parameters — reducing redesign cycles by up to 80%."
        />
        <FeatureBox
          icon={<Cog />}
          title="Intelligent Semantic Modeling"
          desc="Ontology-driven automation understands engineering logic and drives data-aware design updates."
        />
        <FeatureBox
          icon={<Layers />}
          title="Unified Digital Framework"
          desc="Connects PLM, ERP, and CAD in one adaptive environment that evolves with your organization."
        />
      </div>

      <section className="mt-24 bg-slate-800 rounded-2xl p-10 shadow-xl border border-slate-700">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-blue-400 mb-6"
        >
          Why PRISM Exists
        </motion.h3>
        <p className="text-slate-300 max-w-4xl mx-auto text-lg leading-relaxed">
          In today’s manufacturing world, small and medium-scale industries (MSMEs) struggle to digitize due to
          fragmented systems, high-cost tools, and lack of interoperability. PRISM bridges this gap by creating an
          affordable, intelligent ecosystem that scales design knowledge and accelerates automation.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <MiniFeature icon={<Factory />} title="Built for MSMEs & Startups" />
          <MiniFeature icon={<LineChart />} title="Accelerates Design-to-Market" />
          <MiniFeature icon={<BarChart3 />} title="Reduces Cost per Iteration" />
          <MiniFeature icon={<Workflow />} title="Enables Autonomous Engineering Decisions" />
        </div>
      </section>

      <div className="mt-16">
        <Link
          to="/overview"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-lg"
        >
          Explore the PRISM Ecosystem
        </Link>
      </div>
    </section>
  );
}

// ---------------- OVERVIEW ----------------
function Overview() {
  return (
    <section className="mt-12">
      <h3 className="text-3xl font-semibold mb-6 text-center text-blue-400">
        Revolutionizing Product Realization
      </h3>
      <p className="text-slate-300 max-w-4xl mx-auto text-center mb-12">
        PRISM creates a symbiotic bridge between <b>Design</b>, <b>Manufacturing</b>, and <b>Enterprise Systems</b>. It integrates 
        PLM, ERP, CAD, and Ontology Automation into one adaptive, traceable, and intelligent framework — designed for scalability and semantic reasoning.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureBox icon={<Cloud />} title="Unified Ecosystem" desc="A single connected environment linking CAD, PLM, and ERP for frictionless data flow." />
        <FeatureBox icon={<Zap />} title="Automation at Core" desc="Reduce redesign bottlenecks using parametric rules and rule-based engineering." />
        <FeatureBox icon={<Cog />} title="Ontology Intelligence" desc="Semantic layer enables reasoning over design dependencies and decisions." />
        <FeatureBox icon={<Database />} title="Traceable Knowledge" desc="Every decision, change, and parameter is recorded for engineering transparency." />
        <FeatureBox icon={<Workflow />} title="Collaborative Intelligence" desc="Teams co-create with live versioning and real-time synchronization." />
        <FeatureBox icon={<Globe />} title="Scalable & Interoperable" desc="Easily connects with any open standard — from STEP files to ERP databases." />
      </div>

      <section className="mt-20 bg-slate-800 p-10 rounded-2xl border border-slate-700 text-center">
        <h4 className="text-2xl font-semibold mb-4 text-blue-400">Our Vision</h4>
        <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
          To democratize engineering automation for every enterprise, enabling a future where intelligent systems can
          self-adapt, learn design logic, and bridge the digital divide between engineering and business intelligence.
        </p>
      </section>
    </section>
  );
}

// ---------------- MODULES ----------------
function Modules() {
  const moduleData = [
    {
      icon: <Box />,
      title: "CAD Automation",
      desc: "Auto-regenerate parts and assemblies through parametric logic and FreeCAD APIs integrated with Ontology.",
    },
    {
      icon: <Cloud />,
      title: "PLM Connector",
      desc: "Integrates with nanoPLM for version control, revision tracking, and digital thread continuity.",
    },
    {
      icon: <Database />,
      title: "ERP Bridge",
      desc: "Synchronizes manufacturing data, BOMs, and production records to enterprise systems like Odoo or SAP.",
    },
    {
      icon: <Layers />,
      title: "Ontology Engine",
      desc: "Creates intelligent links between functions, materials, and constraints using semantic reasoning.",
    },
    {
      icon: <Cpu />,
      title: "Simulation Interface",
      desc: "Connects to FEA/CFD tools for automated analysis loops — validating designs faster and smarter.",
    },
    {
      icon: <Users />,
      title: "Collaboration Hub",
      desc: "Brings cross-functional teams together for concurrent design, versioning, and review processes.",
    },
  ];

  return (
    <section className="mt-16">
      <h3 className="text-3xl font-semibold text-center mb-8 text-blue-400">Core Modules</h3>
      <p className="text-slate-300 max-w-3xl mx-auto text-center mb-12">
        Each PRISM module represents a key layer in building intelligent, connected, and future-ready enterprises.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {moduleData.map((m, i) => (
          <CollapsibleModule key={i} {...m} />
        ))}
      </div>
    </section>
  );
}

function CollapsibleModule({ icon, title, desc }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div layout className="bg-slate-800 rounded-xl border border-slate-700 p-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 grid place-items-center bg-slate-700 text-blue-400 rounded-lg">{icon}</div>
          <h4 className="text-lg font-semibold">{title}</h4>
        </div>
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-slate-400 text-sm leading-relaxed mt-3"
          >
            {desc}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ---------------- TEAM ----------------
function Team() {
  return (
    <section className="mt-16 text-center">
      <h3 className="text-3xl font-semibold mb-4 text-blue-400">Meet the Team</h3>
      <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
        The PRISM team blends mechanical engineering, data science, and semantic AI expertise to redefine how products are designed and managed.
      </p>
      <div className="flex justify-center gap-8 mt-8 flex-wrap">
        <TeamCard name="Suhani Kolhatkar" role="Director, Validus EduTech" desc="Mechanical engineer & ontologist leading digital manufacturing intelligence and product strategy." />
        <TeamCard name="Anand Khandekar" role="Director, Validus EduTech" desc="Technology strategist with extensive experience in scalable design automation frameworks." />
        <TeamCard name="R&D Team" role="Ontology, CAD & FEA Experts" desc="Interdisciplinary team driving innovation at the intersection of engineering and AI." />
      </div>
    </section>
  );
}

function TeamCard({ name, role, desc }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 w-72 hover:scale-105 transition">
      <div className="text-lg font-semibold text-blue-300">{name}</div>
      <div className="text-slate-400 text-sm mb-3">{role}</div>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  );
}

// ---------------- CONTACT ----------------
function Contact() {
  return (
    <section className="mt-16 text-center">
      <h3 className="text-3xl font-semibold mb-4 text-blue-400">Let’s Collaborate</h3>
      <p className="text-slate-300 max-w-xl mx-auto mb-6">
        We’re looking to collaborate with investors, manufacturing partners, and tech enablers to scale PRISM globally.
      </p>
      <a
        href="mailto:info@validusedutech.com"
        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold inline-block"
      >
        Contact Us
      </a>
      <p className="text-slate-400 mt-6 text-sm">
        Email: info@validusedutech.com | Pune, India
      </p>
    </section>
  );
}

// ---------------- REUSABLE COMPONENTS ----------------
function FeatureBox({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-slate-800 rounded-xl border border-slate-700 flex flex-col items-start space-y-3 transition">
      <div className="w-12 h-12 rounded-lg bg-slate-700 grid place-items-center text-blue-400">{icon}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function MiniFeature({ icon, title }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center text-slate-300">
      <div className="w-12 h-12 rounded-full bg-slate-700 grid place-items-center text-blue-400 mb-2">
        {icon}
      </div>
      <span className="text-sm font-medium">{title}</span>
    </motion.div>
  );
}

// ---------------- FOOTER ----------------
function Footer() {
  return (
    <footer className="mt-20 py-6 text-center border-t border-slate-800 text-slate-400 text-sm">
      © {new Date().getFullYear()} Validus EduTech — PRISM Vertical | Empowering Engineering Intelligence
    </footer>
  );
}
