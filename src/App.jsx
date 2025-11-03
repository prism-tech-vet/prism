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
// ---------------- OVERVIEW ----------------
function Overview() {
  const usps = [
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Open-Source Foundation",
      desc: "PRISM is built on open technologies — no vendor lock-in or licensing costs. Open collaboration accelerates innovation and adoption.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automation-Driven",
      desc: "Parametric rules + semantic intelligence automate redesign cycles, drastically reducing manual effort and time-to-market.",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: "Graph Database Backbone",
      desc: "A graph-first semantic store enables reasoning, traceability and scalable linking of design knowledge across projects.",
    },
    {
      icon: <Workflow className="w-8 h-8 text-cyan-400" />,
      title: "Robust Engineering Pipeline",
      desc: "Seamlessly connects CAD, PLM, ERP and ontology — ensuring consistent data flow and end-to-end traceability.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-400" />,
      title: "Secure & Controlled Sharing",
      desc: "Designs and drawings are protected with fine-grained controls so teams share data safely while preserving IP.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Redefining Product Realization through Open-Source Intelligence
          </h1>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            PRISM unites parametric design, semantic reasoning and enterprise systems into one adaptive, intelligent framework —
            turning static CAD into self-aware digital design twins that learn, adapt and scale.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 border border-slate-700 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold text-blue-300 mb-3">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed">
              Democratize engineering automation using open technologies and semantic intelligence so every enterprise — regardless of size —
              can innovate without costly dependencies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 border border-slate-700 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">Our Vision</h3>
            <p className="text-slate-300 leading-relaxed">
              Build an extensible design intelligence layer that converts designs into knowledge — enabling autonomous, traceable,
              and continuously improving engineering systems across industries.
            </p>
          </motion.div>
        </div>

        {/* USPs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-6"
        >
          <h3 className="text-3xl font-semibold text-center text-blue-400 mb-8">Key Differentiators (USPs)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {usps.map((u, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="bg-slate-800 border border-slate-700 p-6 rounded-2xl hover:border-blue-400 transition"
              >
                <div className="mb-3">{u.icon}</div>
                <h4 className="text-xl font-semibold text-blue-300">{u.title}</h4>
                <p className="text-slate-400 mt-2">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA / Short Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto bg-gradient-to-r from-blue-700 to-cyan-700 p-8 rounded-3xl shadow-lg"
        >
          <h4 className="text-2xl font-semibold text-white mb-2">Investor Snapshot</h4>
          <p className="text-slate-100 leading-relaxed">
            PRISM is an IP-forward, modular platform with immediate integration potential across CAD, FEA and PLM stacks.
            Its open-source roots accelerate adoption while the semantic + parametric architecture creates defensible product value
            and enterprise scaling pathways.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------- MODULES ----------------
function Modules() {
  const modules = [
    {
      title: "CAD Parametric Core",
      desc: "Geometry, Constraints, and Degrees of Freedom form the adaptive foundation. This core ensures every model can morph intelligently when parameters change — maintaining design intent and structure.",
      icon: <Box className="w-10 h-10 text-blue-400" />,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Semantic Ontology Engine",
      desc: "Defines design intent, logical relationships, and dependencies through knowledge graphs — embedding meaning into engineering data and enabling semantic interoperability.",
      icon: <Globe className="w-10 h-10 text-green-400" />,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Simulation & FEA Module",
      desc: "Integrates stress, thermal, and modal analyses. It automates validation and links simulation data semantically with geometry and ontology — preserving design logic through every test cycle.",
      icon: <Cpu className="w-10 h-10 text-purple-400" />,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Machine Learning Layer",
      desc: "Learns from historical design and performance data using ML-DOE and predictive modeling — discovering correlations and accelerating optimization with data-driven intelligence.",
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Knowledge Feedback Loop",
      desc: "Continuously improves the system by reusing insights, auto-updating design parameters, and triggering intelligent redesigns — closing the loop for autonomous design evolution.",
      icon: <Workflow className="w-10 h-10 text-pink-400" />,
      color: "from-pink-500/20 to-rose-500/20",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white py-24 relative">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            PRISM Architecture
          </h1>
          <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">
            The PRISM architecture seamlessly connects parametric design, semantic intelligence, and machine learning into a unified intelligent pipeline.  
            Each layer enhances the next — enabling self-aware, adaptive, and continuously improving design systems.
          </p>
        </motion.div>

        {/* Vertical Flow */}
        <div className="relative flex flex-col items-center mt-16 space-y-12">
          {/* Glowing Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 opacity-30 -z-10"></div>

          {/* Modules */}
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`w-full md:w-3/4 bg-gradient-to-r ${mod.color} rounded-2xl shadow-lg border border-slate-700 p-8 flex flex-col md:flex-row items-center text-left space-y-4 md:space-y-0 md:space-x-8 hover:scale-[1.02] hover:border-blue-400 transition-all duration-300`}
            >
              <div className="p-5 bg-slate-800/70 rounded-2xl shadow-md">
                {mod.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-300">{mod.title}</h3>
                <p className="text-slate-300 mt-2 leading-relaxed">{mod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flow Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-20 max-w-4xl mx-auto bg-slate-800/70 p-10 rounded-3xl border border-slate-700 text-left space-y-6"
        >
          <h2 className="text-3xl font-semibold text-center text-cyan-400">
            The Intelligent Design Flow
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            PRISM operates as a self-reinforcing design intelligence cycle:
          </p>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li><b>CAD Core</b> defines geometry and constraints.</li>
            <li><b>Ontology Engine</b> embeds meaning, rules, and logical dependencies.</li>
            <li><b>Simulation/FEA</b> validates designs through physics-based testing.</li>
            <li><b>Machine Learning</b> learns from outcomes, discovering optimization patterns.</li>
            <li><b>Knowledge Feedback Loop</b> updates models intelligently, achieving automation with intent.</li>
          </ul>
          <p className="text-slate-400 leading-relaxed">
            Together, these modules form a continuous intelligence pipeline — one that learns, adapts, and redefines the boundaries of engineering design.
          </p>
        </motion.div>
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
