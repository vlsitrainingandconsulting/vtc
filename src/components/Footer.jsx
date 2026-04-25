import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const footerLinks = {
    Solutions: [
        { name: 'Lab-in-a-Box', href: '#solutions' },
        { name: 'Student Skilling', href: '#solutions' },
        { name: 'IP Design', href: '#solutions' },
        { name: 'Consulting', href: '#solutions' },
    ],
    Resources: [
        { name: 'Lab Manuals', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Sandbox', href: '#' },
        { name: 'GitHub', href: '#' },
    ],
    Company: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Blog', href: '#' },
    ],
    Legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
    ],
}

export default function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <footer id="about" className="relative bg-navy overflow-hidden">
            {/* About section */}
            <div className="border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" ref={ref}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                                <span className="text-sm font-medium text-white/70">Our Mission</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                                Building India&apos;s Semiconductor Future from <span className="text-accent">Tier-2 Cities</span>
                            </h2>
                            <p className="text-white/50 leading-relaxed mb-4">
                                VTC was founded with a singular mission: to prevent brain drain and build a thriving deep-tech ecosystem directly in cities like Visakhapatnam. We believe world-class chip design talent shouldn&apos;t need to leave their hometowns to build world-class silicon.
                            </p>
                            <p className="text-white/50 leading-relaxed">
                                By leveraging open-source EDA tools and aligning with the India Semiconductor Mission (ISM&nbsp;2.0), we&apos;re making semiconductor education accessible, affordable, and industry-relevant — creating the workforce that will power India&apos;s chip ambitions.
                            </p>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-col items-center lg:items-end gap-8">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                        </svg>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-white font-semibold text-sm">Startup India</div>
                                        <div className="text-white/40 text-xs">DPIIT Recognized</div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                                        </svg>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-white font-semibold text-sm">MSME</div>
                                        <div className="text-white/40 text-xs">Udyam Registered</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-white/30 text-sm">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                Visakhapatnam, Andhra Pradesh, India
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer links */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-white/40 hover:text-white text-sm transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <span className="text-white font-bold text-sm">V</span>
                        </div>
                        <span className="text-white/60 text-sm">
                            &copy; {new Date().getFullYear()} VTC — VLSI Training & Consulting. All rights reserved.
                        </span>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                        {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                                aria-label={social}
                            >
                                <span className="text-white/40 text-xs font-medium">{social[0]}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />
        </footer>
    )
}
