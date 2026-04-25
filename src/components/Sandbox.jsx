import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const terminalLines = [
    { type: 'comment', text: '# VTC Open-Source VLSI Synthesis Flow' },
    { type: 'comment', text: '# Using Yosys + OpenROAD on Ubuntu 22.04' },
    { type: 'blank', text: '' },
    { type: 'prompt', text: '$ yosys' },
    { type: 'output', text: '' },
    { type: 'output', text: " /------------\\" },
    { type: 'output', text: " |  yosys     |" },
    { type: 'output', text: " \\------------/" },
    { type: 'output', text: '' },
    { type: 'prompt', text: 'yosys> read_verilog rtl/vtc_core.v' },
    { type: 'output', text: '1. Executing Verilog frontend: rtl/vtc_core.v' },
    { type: 'output', text: 'Parsing Verilog input from `rtl/vtc_core.v`...' },
    { type: 'output', text: 'Successfully parsed 1 module.' },
    { type: 'blank', text: '' },
    { type: 'prompt', text: 'yosys> synth -top vtc_core' },
    { type: 'output', text: '2. Executing SYNTH pass.' },
    { type: 'output', text: '2.1. Executing PROC pass (convert processes).' },
    { type: 'output', text: '2.2. Executing OPT pass (performing simple optimizations).' },
    { type: 'output', text: '2.3. Executing TECHMAP pass.' },
    { type: 'output', text: '' },
    { type: 'success', text: '   === vtc_core ===' },
    { type: 'success', text: '   Number of wires:    142' },
    { type: 'success', text: '   Number of cells:    486' },
    { type: 'success', text: '   Estimated area:  2147.00 um²' },
    { type: 'blank', text: '' },
    { type: 'prompt', text: 'yosys> write_verilog synth/vtc_core_synth.v' },
    { type: 'output', text: '3. Executing Verilog backend: synth/vtc_core_synth.v' },
    { type: 'output', text: 'Synthesis complete. ✓' },
]

const features = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
        ),
        title: 'Browser-Based Labs',
        text: 'Run Yosys, Icarus Verilog, and GTKWave directly in any browser — no installation needed.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
        ),
        title: 'Complete Lab Manuals',
        text: 'Step-by-step RTL-to-GDSII documentation with real design examples and assessment rubrics.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        title: 'Pre-built IP Cores',
        text: 'Access verified RTL for ALUs, RISC-V cores, and approximate computing blocks.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        title: 'Community Support',
        text: 'Join a growing ecosystem of chip designers, faculty, and industry mentors.',
    },
]

function TerminalTyping() {
    const [visibleLines, setVisibleLines] = useState(0)
    const termRef = useRef(null)
    const isInView = useInView(termRef, { once: true, margin: '-100px' })

    useEffect(() => {
        if (!isInView) return
        const interval = setInterval(() => {
            setVisibleLines((prev) => {
                if (prev >= terminalLines.length) {
                    clearInterval(interval)
                    return prev
                }
                return prev + 1
            })
        }, 120)
        return () => clearInterval(interval)
    }, [isInView])

    return (
        <div ref={termRef} className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border-b border-white/5">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-3 text-white/40 text-xs font-mono">vtc@ubuntu:~/synthesis</span>
            </div>

            {/* Terminal body */}
            <div className="bg-[#0d1117] p-5 font-mono text-sm leading-6 h-[380px] overflow-hidden">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                    <div key={i} className="whitespace-pre">
                        {line.type === 'comment' && <span className="text-gray-500">{line.text}</span>}
                        {line.type === 'prompt' && <span className="text-green-400">{line.text}</span>}
                        {line.type === 'output' && <span className="text-gray-300">{line.text}</span>}
                        {line.type === 'success' && <span className="text-cyan-400 font-semibold">{line.text}</span>}
                        {line.type === 'blank' && <br />}
                    </div>
                ))}
                {visibleLines < terminalLines.length && (
                    <span className="terminal-cursor text-green-400">▌</span>
                )}
            </div>
        </div>
    )
}

export default function Sandbox() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="relative py-24 sm:py-32 bg-navy overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-sm font-medium text-white/70">Live Sandbox</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                            Your <span className="text-accent">Open-Source</span> EDA Sandbox
                        </h2>

                        <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
                            Experience the complete RTL-to-GDSII flow with zero setup. Our browser-based sandbox puts professional-grade chip design tools at your fingertips — powered entirely by open-source EDA.
                        </p>

                        {/* Feature list */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {features.map((feat, i) => (
                                <motion.div
                                    key={feat.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors"
                                >
                                    <div className="text-accent shrink-0 mt-0.5">{feat.icon}</div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm mb-1">{feat.title}</h4>
                                        <p className="text-white/40 text-xs leading-relaxed">{feat.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/5"
                        >
                            Access Technical Documentation & Lab Manuals
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Right: Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <TerminalTyping />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
