import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const stories = [
    {
        quote: "Trained extensive cohorts at Baba Institute of Technology & Sciences, resulting in successful layout generations in under 6 weeks utilizing open-source Ubuntu workstations.",
        author: 'VTC Team',
        role: 'Flagship Case Study',
        title: 'Empowering Local Talent',
        metrics: [
            { value: '6', unit: 'Weeks', label: 'To First Layout' },
            { value: '100%', unit: '', label: 'Open-Source Stack' },
            { value: '0', unit: 'USD', label: 'License Cost' },
        ],
    },
    {
        quote: "The Lab-in-a-Box approach allowed us to set up a fully functional VLSI design lab without any proprietary tool dependencies. Our students are now job-ready.",
        author: 'Partner Institution',
        role: 'Academic Collaboration',
        title: 'Zero-to-Lab in 2 Weeks',
        metrics: [
            { value: '2', unit: 'Weeks', label: 'Lab Setup Time' },
            { value: '10x', unit: '', label: 'Cost Reduction' },
            { value: '50+', unit: '', label: 'Students Trained' },
        ],
    },
    {
        quote: "VTC's approximate computing IP cores delivered remarkable power savings for our edge AI inference workloads. The accuracy trade-off was well within tolerance.",
        author: 'Industry Partner',
        role: 'IP Design Engagement',
        title: 'Edge AI Power Optimization',
        metrics: [
            { value: '50%', unit: '', label: 'Power Saved' },
            { value: '<1%', unit: '', label: 'Accuracy Loss' },
            { value: '3x', unit: '', label: 'Battery Life' },
        ],
    },
]

export default function SuccessStories() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section id="success" className="py-24 sm:py-32 bg-surface relative overflow-hidden">
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                        <span className="text-sm font-medium text-primary">Proven Impact</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight mb-6">
                        Success <span className="gradient-text">Stories</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                        Real results from real collaborations — empowering institutions, students, and industry partners across India.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:w-80 shrink-0 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
                    >
                        {stories.map((story, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`text-left p-4 rounded-xl border transition-all duration-300 min-w-[200px] lg:min-w-0 ${activeIndex === i
                                        ? 'bg-white shadow-lg shadow-navy/5 border-primary/20'
                                        : 'bg-transparent border-border/50 hover:border-border hover:bg-white/50'
                                    }`}
                            >
                                <h4 className={`font-semibold text-sm mb-1 transition-colors ${activeIndex === i ? 'text-primary' : 'text-navy'}`}>
                                    {story.title}
                                </h4>
                                <p className="text-xs text-text-muted">{story.role}</p>
                            </button>
                        ))}
                    </motion.div>

                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex-1"
                    >
                        <div className="bg-white rounded-2xl border border-border/50 shadow-xl shadow-navy/5 overflow-hidden h-full">
                            <div className="p-8 sm:p-10 lg:p-12">
                                <svg className="w-12 h-12 text-primary/10 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>

                                <blockquote className="text-xl sm:text-2xl text-navy font-medium leading-relaxed mb-8">
                                    &ldquo;{stories[activeIndex].quote}&rdquo;
                                </blockquote>

                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">{stories[activeIndex].author[0]}</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-navy">{stories[activeIndex].author}</div>
                                        <div className="text-sm text-text-muted">{stories[activeIndex].role}</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
                                    {stories[activeIndex].metrics.map((m) => (
                                        <div key={m.label} className="text-center">
                                            <div className="text-2xl sm:text-3xl font-bold text-navy">
                                                {m.value}<span className="text-sm font-medium text-text-muted ml-1">{m.unit}</span>
                                            </div>
                                            <div className="text-xs sm:text-sm text-text-muted mt-1">{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
