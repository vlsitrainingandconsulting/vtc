import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-surface to-white pt-20">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.02] blur-3xl" />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #0A192F 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-medium text-primary">Aligned with ISM 2.0</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy leading-[1.1] tracking-tight mb-6">
                            Democratizing{' '}
                            <span className="gradient-text">Silicon:</span>
                            <br />
                            <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl">
                                Open-Source VLSI Training & Indigenous IP&nbsp;Design.
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg sm:text-xl text-text-muted max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                        >
                            Aligning with the India Semiconductor Mission (ISM&nbsp;2.0) to build the next generation of chip designers and low-power processing cores from Visakhapatnam.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#solutions"
                                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1 text-lg"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore Programs
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </a>

                            <div className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-green-200 bg-green-50/50">
                                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm font-semibold text-green-700">Zero Licensing Costs</span>
                            </div>
                        </motion.div>

                        {/* Stats bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center gap-8 mt-14 justify-center lg:justify-start"
                        >
                            {[
                                { number: '100+', label: 'Students Trained' },
                                { number: '50%', label: 'Power Reduction' },
                                { number: '6 Wk', label: 'Tape-Out Time' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-navy">{stat.number}</div>
                                    <div className="text-xs sm:text-sm text-text-muted mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: 3D Abstract Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-lg mx-auto">
                            {/* Main chip illustration */}
                            <div className="animate-float">
                                <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#2563EB" />
                                            <stop offset="100%" stopColor="#06B6D4" />
                                        </linearGradient>
                                        <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#0A192F" />
                                            <stop offset="100%" stopColor="#112240" />
                                        </linearGradient>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="3" result="blur" />
                                            <feMerge>
                                                <feMergeNode in="blur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                        <filter id="softShadow">
                                            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0A192F" floodOpacity="0.15" />
                                        </filter>
                                    </defs>

                                    {/* Outer glow ring */}
                                    <circle cx="200" cy="200" r="180" fill="none" stroke="url(#chipGrad)" strokeWidth="1" opacity="0.3">
                                        <animate attributeName="r" values="175;185;175" dur="4s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="200" cy="200" r="160" fill="none" stroke="url(#chipGrad)" strokeWidth="0.5" opacity="0.15">
                                        <animate attributeName="r" values="155;165;155" dur="5s" repeatCount="indefinite" />
                                    </circle>

                                    {/* Chip body */}
                                    <rect x="110" y="110" width="180" height="180" rx="16" fill="url(#coreGrad)" filter="url(#softShadow)" />
                                    <rect x="115" y="115" width="170" height="170" rx="13" fill="none" stroke="url(#chipGrad)" strokeWidth="1.5" opacity="0.6" />

                                    {/* Die area */}
                                    <rect x="140" y="140" width="120" height="120" rx="8" fill="#0A192F" stroke="#2563EB" strokeWidth="0.5" />

                                    {/* Circuit pattern inside die */}
                                    <g opacity="0.6" stroke="#2563EB" strokeWidth="0.5" fill="none">
                                        <rect x="155" y="155" width="35" height="25" rx="3" />
                                        <rect x="200" y="155" width="30" height="25" rx="3" />
                                        <rect x="240" y="155" width="10" height="25" rx="2" />
                                        <rect x="155" y="190" width="20" height="30" rx="3" />
                                        <rect x="185" y="190" width="45" height="30" rx="3" />
                                        <rect x="240" y="190" width="10" height="30" rx="2" />
                                        <rect x="155" y="230" width="50" height="20" rx="3" />
                                        <rect x="215" y="230" width="35" height="20" rx="3" />
                                    </g>

                                    {/* Glowing data lines */}
                                    <g stroke="#2563EB" strokeWidth="1" filter="url(#glow)" opacity="0.8">
                                        <line x1="155" y1="168" x2="200" y2="168">
                                            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                                        </line>
                                        <line x1="185" y1="205" x2="230" y2="205">
                                            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
                                        </line>
                                        <line x1="175" y1="240" x2="215" y2="240">
                                            <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.8s" repeatCount="indefinite" />
                                        </line>
                                    </g>

                                    {/* Pins - Top */}
                                    {[130, 150, 170, 190, 210, 230, 250, 270].map((x, i) => (
                                        <g key={`top-${i}`}>
                                            <rect x={x - 3} y="85" width="6" height="30" rx="2" fill="url(#chipGrad)" opacity={0.5 + (i % 3) * 0.15} />
                                        </g>
                                    ))}
                                    {/* Pins - Bottom */}
                                    {[130, 150, 170, 190, 210, 230, 250, 270].map((x, i) => (
                                        <g key={`bot-${i}`}>
                                            <rect x={x - 3} y="286" width="6" height="30" rx="2" fill="url(#chipGrad)" opacity={0.5 + (i % 3) * 0.15} />
                                        </g>
                                    ))}
                                    {/* Pins - Left */}
                                    {[130, 150, 170, 190, 210, 230, 250, 270].map((y, i) => (
                                        <g key={`left-${i}`}>
                                            <rect x="85" y={y - 3} width="30" height="6" rx="2" fill="url(#chipGrad)" opacity={0.5 + (i % 3) * 0.15} />
                                        </g>
                                    ))}
                                    {/* Pins - Right */}
                                    {[130, 150, 170, 190, 210, 230, 250, 270].map((y, i) => (
                                        <g key={`right-${i}`}>
                                            <rect x="286" y={y - 3} width="30" height="6" rx="2" fill="url(#chipGrad)" opacity={0.5 + (i % 3) * 0.15} />
                                        </g>
                                    ))}

                                    {/* Center VTC text */}
                                    <text x="200" y="212" textAnchor="middle" fill="#2563EB" fontSize="18" fontWeight="bold" fontFamily="Inter, sans-serif" filter="url(#glow)">
                                        VTC
                                    </text>

                                    {/* Corner dots */}
                                    <circle cx="120" cy="120" r="4" fill="#2563EB" opacity="0.6">
                                        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="280" cy="120" r="3" fill="#06B6D4" opacity="0.4" />
                                    <circle cx="120" cy="280" r="3" fill="#06B6D4" opacity="0.4" />
                                    <circle cx="280" cy="280" r="4" fill="#2563EB" opacity="0.6">
                                        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin="1.5s" repeatCount="indefinite" />
                                    </circle>
                                </svg>
                            </div>

                            {/* Orbiting particle dots */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-4 right-8 w-3 h-3 rounded-full bg-primary/40 animate-pulse" />
                                <div className="absolute bottom-12 left-4 w-2 h-2 rounded-full bg-accent/40 animate-pulse" style={{ animationDelay: '1s' }} />
                                <div className="absolute top-1/3 right-0 w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <a href="#solutions" className="flex flex-col items-center gap-2 text-text-muted hover:text-navy transition-colors">
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </a>
            </motion.div>
        </section>
    )
}
