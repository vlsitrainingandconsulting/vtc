import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cards = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        tag: 'For Institutions',
        title: 'Lab-in-a-Box Environment',
        text: 'Set up a complete CoE using Yosys, OpenROAD, and Icarus Verilog. Train 100 students for the cost of 10 without million-dollar proprietary EDA licenses.',
        color: 'primary',
        metric: '10x',
        metricLabel: 'Cost Savings',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        ),
        tag: 'Student Skilling',
        title: '6-Week ESDP & Internships',
        text: 'Master the complete RTL-to-GDSII flow. Tape-out your first chip and transition from education to employment.',
        color: 'accent',
        metric: '6 Wk',
        metricLabel: 'First Tape-Out',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
            </svg>
        ),
        tag: 'IP Design & Consulting',
        title: 'Deep Tech Authority',
        text: 'Approximate Computing Architectures achieving up to 50% power reduction for Edge AI with <1% accuracy loss.',
        color: 'primary',
        metric: '50%',
        metricLabel: 'Power Reduction',
    },
]

const colorMap = {
    primary: {
        bg: 'bg-primary/5',
        text: 'text-primary',
        border: 'border-primary/10',
        badge: 'bg-primary/10 text-primary',
        metricText: 'text-primary',
    },
    accent: {
        bg: 'bg-accent/5',
        text: 'text-accent',
        border: 'border-accent/10',
        badge: 'bg-accent/10 text-accent',
        metricText: 'text-accent',
    },
}

export default function Solutions() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="solutions" className="py-24 sm:py-32 bg-white relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute -top-40 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                        <span className="text-sm font-medium text-primary">Solutions & Skilling</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight mb-6">
                        B2B & B2C <span className="gradient-text">Impact</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                        From setting up world-class labs in institutions to training individual chip designers — our solutions cover the complete semiconductor education lifecycle.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {cards.map((card, i) => {
                        const colors = colorMap[card.color]
                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                                className="group relative bg-white rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Top accent line */}
                                <div className={`absolute top-0 left-8 right-8 h-px ${card.color === 'primary' ? 'bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0' : 'bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0'}`} />

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {card.icon}
                                </div>

                                {/* Tag */}
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} mb-4`}>
                                    {card.tag}
                                </span>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-text-muted leading-relaxed mb-6">
                                    {card.text}
                                </p>

                                {/* Metric */}
                                <div className="flex items-end gap-2 pt-4 border-t border-border/50">
                                    <span className={`text-3xl font-bold ${colors.metricText}`}>{card.metric}</span>
                                    <span className="text-sm text-text-muted mb-1">{card.metricLabel}</span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
