import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Skilling', href: '#solutions' },
    { name: 'IP Design', href: '#solutions' },
    { name: 'Success Stories', href: '#success' },
    { name: 'About', href: '#about' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [isMobileOpen])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-navy/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow">
                            <span className="text-white font-bold text-lg">V</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-navy font-bold text-xl leading-tight tracking-tight">VTC</span>
                            <span className="text-text-muted text-[10px] leading-tight hidden sm:block">VLSI Training & Consulting</span>
                        </div>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-text-muted hover:text-navy transition-colors rounded-lg hover:bg-navy/5"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="#solutions"
                            className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Explore Programs
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-navy/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 flex flex-col gap-1.5">
                            <span className={`block h-0.5 bg-navy rounded-full transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block h-0.5 bg-navy rounded-full transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 bg-navy rounded-full transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border overflow-hidden"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="block px-4 py-3 text-base font-medium text-text-muted hover:text-navy hover:bg-navy/5 rounded-xl transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <div className="pt-4 border-t border-border mt-4">
                                <a
                                    href="#solutions"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl"
                                >
                                    Explore Programs
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
