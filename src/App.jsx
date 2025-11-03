import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud, Zap, Database, Users, Box, Cpu, Cog, Workflow, Globe,
  Layers, ChevronDown, ChevronUp, Rocket, Lightbulb
} from 'lucide-react';

export default function App() {
  return (
    <Router>
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
        PRISM is a next-generation platform that transforms how MSMEs, startups, and industries approach product realization. 
        It integrates <b>CAD Automation</b>, <b>PLM Connectivity</b>, <b>ERP Systems</b>, and <b>Ontology Intelligence</b> into one seamless digital ecosystem.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <Feature icon={<Zap />} title="Parametric Redesigning" desc="Instantly regenerate design variations with parametric rules — reducing redesign cycles by up to 80%." />
        <Feature icon={<Cog />} title="Intelligent Semantic Modeling" desc="Ontology-driven automation understands design logic, ensuring smarter, faster, and consistent product updates." />
        <Feature icon={<Layers />} title="Unified Digital Framework" desc="Connects PLM, ERP, and CAD in a single integrated environment that scales with your enterprise." />
      </div>

      <div className="mt-20 text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1 }}>
          <h3 className="text-3xl font-semibold mb-4 text-blue-400">Empowering MSMEs and Innovators</h3>
          <p className="text-slate-400 max-w-3xl mx-auto">
            PRISM democratizes digital manufacturing by bringing automation, knowledge-based engineering, and semantic reasoning 
            to small and medium-scale industries — unlocking efficiency, affordability, and global competitiveness.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        <MiniFeature icon={<Rocket />} title="Accelerated Prototyping" />
        <MiniFeature icon={<Cpu />} title="Smart Simulation Loops" />
        <MiniFeature icon={<Lightbulb />} title="Knowledge-Based Design" />
        <MiniFeature icon={<Workflow />} title="Automated Workflows" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        <MiniFeature icon={<Globe />} title="Global Scalability" />
        <MiniFeature icon={<Layers />} title="Connected Ecosystem" />
        <MiniFeature icon={<Cog />} title="Seamless Integration" />
        <MiniFeature icon={<Zap />} title="High Impact Innovation" />
      </div>

      <div className="mt-16">
        <Link to="/overview" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-lg">
          Explore PRISM Ecosystem
        </Link>
      </div>

      <section className="mt-24 bg-slate-800 rounded-2xl p-10 shadow-xl border border-slate-700">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-blue-400 mb-6"
        >
          Why PRISM?
        </motion.h3>
        <p className="text-slate-300 max-w-4xl mx-auto leading-relaxed text-lg">
          PRISM stands out as a transformative framework for digital engineering — merging 
          <b> parametric modeling</b>, <b> intelligent reasoning</b>, and <b> semantic interoperability</b>. 
          It’s designed to help industries reduce design dependency, shorten innovation cycles, 
          and enable autonomous decision-making through data-driven insights.
        </p>
        <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
          By bridging design, manufacturing, and business intelligence, PRISM fuels Industry 4.0 adoption, 
          ensuring every enterprise — big or small — can innovate without barriers.
        </p>
      </section>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-slate-800 rounded-xl border border-slate-700 flex flex-col items-center space-y-3 transition">
      <div className="w-12 h-12 rounded-lg bg-slate-700 grid place-items-center text-blue-400">{icon}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed text-center">{desc}</p>
    </motion.div>
  );
}

function MiniFeature({ icon, title }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center text-slate-300">
      <div className="w-12 h-12 rounded-full bg-slate-700 grid place-items-center text-blue-400 mb-2">{icon}</div>
      <span className="text-sm font-medium">{title}</span>
    </motion.div>
  );
}

// --- The rest of your Overview, Modules, Team, Contact, and Footer remain same as your version ---
function Overview() {
  return (
    <section className="mt-12">
      <h3 className="text-3xl font-semibold mb-6 text-center">Revolutionizing Product Realization</h3>
      <p className="text-slate-300 max-w-4xl mx-auto text-center mb-12">
        PRISM unifies <b>PLM</b>, <b>CAD</b>, <b>ERP</b>, and <b>Ontology Automation</b> into one adaptive framework — enabling rapid, intelligent, and traceable product development from design to delivery.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Feature icon={<Cloud />} title="Unified Ecosystem" desc="One central system linking PLM, ERP, and CAD to ensure synchronized design data." />
        <Feature icon={<Cog />} title="Ontology-Driven Intelligence" desc="Ontology captures design logic and reasoning to automate repetitive tasks." />
        <Feature icon={<Zap />} title="Workflow Automation" desc="Rule-based automation replaces manual redesign and validation cycles." />
        <Feature icon={<Database />} title="Data Traceability" desc="End-to-end traceability across design, production, and version history." />
        <Feature icon={<Workflow />} title="Seamless Collaboration" desc="All teams stay aligned through dynamic, live data synchronization." />
        <Feature icon={<Globe />} title="Scalable & Open" desc="Integrates easily with industrial standards, scalable across enterprises." />
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-slate-800 rounded-xl border border-slate-700 flex flex-col items-start space-y-3 transition">
      <div className="w-12 h-12 rounded-lg bg-slate-700 grid place-items-center text-blue-400">{icon}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function Modules() {
  const moduleData = [
    { icon: <Box />, title: 'CAD Automation', desc: 'Parametric model generation, variant updates, and rule-based redesigns with FreeCAD APIs connected to ontology.' },
    { icon: <Cloud />, title: 'PLM Connector', desc: 'Integrates with nanoPLM to manage versions, revisions, and lifecycle states with live synchronization.' },
    { icon: <Database />, title: 'ERP Bridge', desc: 'BOM, production data, and inventory updates flow seamlessly across enterprise systems.' },
    { icon: <Layers />, title: 'Ontology Engine', desc: 'Links functional, material, and manufacturing constraints with semantic reasoning for smart automation.' },
    { icon: <Cpu />, title: 'Simulation Interface', desc: 'Automates validation loops via integration with FEA and CFD tools like Ansys or Salome Meca.' },
    { icon: <Users />, title: 'Collaboration Hub', desc: 'Central workspace for engineers, designers, and managers with task and feedback integration.' },
  ];

  return (
    <section className="mt-16">
      <h3 className="text-3xl font-semibold text-center mb-8">Interactive Modules</h3>
      <p className="text-slate-300 max-w-3xl mx-auto text-center mb-12">
        Click on any module to learn more about how PRISM builds a seamless digital ecosystem across your organization.
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
            animate={{ opacity: 1, height: 'auto' }}
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

function Team() {
  return (
    <section className="mt-16 text-center">
      <h3 className="text-3xl font-semibold mb-4">Our Team</h3>
      <div className="flex justify-center gap-8 mt-8 flex-wrap">
        <TeamCard name="Suhani Kolhatkar" role="Director, Validus EduTech" />
        <TeamCard name="Anand Khandekar" role="Director, Validus EduTech" />
        <TeamCard name="R&D Team" role="Ontology, CAD, and FEA Experts" />
      </div>
    </section>
  );
}

function TeamCard({ name, role }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 w-60 hover:scale-105 transition">
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