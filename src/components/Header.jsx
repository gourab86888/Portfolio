import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
    const navLinks = [
        { name: "Home", href: "#herosection" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    // Toggle the Menu open/close
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => { setIsOpen(!isOpen); };

    // State to track contact form is open or not
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const openContactForm = () => { setIsContactFormOpen(true); };
    const closeContactForm = () => { setIsContactFormOpen(false); };

    // State to track clicked link for animation
    const [clickedLink, setClickedLink] = useState("");
    const [hoveredLink, setHoveredLink] = useState("");

    const handleLinkClick = (linkName, href) => {
        setClickedLink(linkName);
        setHoveredLink(""); // Reset hover effect on click
        
        // Reset after animation
        setTimeout(() => setClickedLink(""), 600);
        
        // Navigate to section
        document.querySelector(href)?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <header className="absolute w-full z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

                {/* Logo/Name */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        delay: 0.3,
                        duration: 1.2,
                    }}
                    className="flex items-center">

                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-2">
                        G
                    </div>

                    <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                        Gourab
                    </span>

                </motion.div>

                {/* Desktop Navigation */}
                <nav className="lg:flex hidden space-x-10 text-sm font-medium mx-6">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ 
                                opacity: 1, 
                                y: 0,
                                scale: clickedLink === link.name ? [1, 1.1, 1] : 1,
                                color: clickedLink === link.name ? "#8b5cf6" : undefined
                            }}
                            whileHover={{ 
                                scale: clickedLink === link.name ? 1 : 1.05,
                                y: clickedLink === link.name ? 0 : -2,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ 
                                scale: 0.95,
                                transition: { duration: 0.1 }
                            }}
                            onHoverStart={() => setHoveredLink(link.name)}
                            onHoverEnd={() => setHoveredLink("")}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: 0.7 + index * 0.2,
                                scale: { duration: 0.6 },
                                color: { duration: 0.3 }
                            }}
                            className="group relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 cursor-pointer"
                            onClick={() => handleLinkClick(link.name, link.href)}
                        >
                            {link.name}
                            <motion.span 
                                className="absolute bottom-0 left-0 h-0.5 bg-violet-600"
                                initial={{ width: 0 }}
                                animate={{ 
                                    width: clickedLink === link.name 
                                        ? ["0%", "100%", "0%"] 
                                        : hoveredLink === link.name
                                        ? "100%" 
                                        : "0%" 
                                }}
                                transition={{ 
                                    duration: clickedLink === link.name ? 0.6 : 0.3 
                                }}
                            />
                        </motion.a>
                    ))}
                </nav>

                {/*Social Icons- Desktop*/}
                <div className="md:flex hidden items-center space-x-4">

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="https://github.com/gourab86888">
                        <FiGithub className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="https://www.linkedin.com/in/gourab76099/">
                        <FiLinkedin className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="https://x.com/Gourav_patro1">
                        <FiTwitter className="w-5 h-5" />
                    </motion.a>

                </div>

                {/*Hire Me Button*/}
                <motion.button
                    onClick={openContactForm}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 20px rgba(139, 92, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        delay: 1.5,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                    }}
                    className="ml-4 px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
                >
                    Hire Me
                </motion.button>

                {/* Mobile Menu Button*/}
                <div className="md:hidden flex items-center">
                    <motion.button
                        whileTap={{ scale: 0.7 }}
                        whileHover={{ rotate: 90 }}
                        onClick={toggleMenu}
                        className="text-gray-300">
                        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </motion.button>
                </div>

            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0,
                }}
                transition={{ duration: 0.5 }}
                className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5">
                <nav className="flex flex-col space-y-3">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            whileHover={{ 
                                x: 10,
                                color: "#8b5cf6",
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                handleLinkClick(link.name, link.href);
                                toggleMenu();
                            }}
                            className="text-gray-300 font-medium py-2 cursor-pointer"
                            href={link.href}>
                            {link.name}
                        </motion.a>
                    ))}
                </nav>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-5">
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://github.com/gourab86888">
                            <FiGithub className="h-5 w-5 text-gray-300" />
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/gourab76099/">
                            <FiLinkedin className="h-5 w-5 text-gray-300" />
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://x.com/Gourav_patro1">
                            <FiTwitter className="h-5 w-5 text-gray-300" />
                        </motion.a>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                            toggleMenu();
                            openContactForm();
                        }}
                        className="mt-4 w-full px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-violet-600 to-violet-400 font-bold">
                        Contact Me
                    </motion.button>
                </div>
            </motion.div>

            {/*Contact Form*/}
            <AnimatePresence>
                {isContactFormOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 30 }}
                            transition={{
                                type: "spring",
                                damping: 20,
                                stiffness: 300,
                                duration: 0.8,
                            }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 ">
                            <div className="flex items-center justify-between mb-4">
                                <h1 className="text-2xl font-bold text-gray-300 ">
                                    Get In Touch
                                </h1>

                                <motion.button 
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={closeContactForm}>
                                    <FiX className="w-5 h-5 text-gray-300" />
                                </motion.button>
                            </div>

                            {/*input Forms*/}
                            <form className="space-y-4 text-sm">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 bg-gray-700 transition-all duration-300"
                                        placeholder="Your Name"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 bg-gray-700 transition-all duration-300"
                                        placeholder="Your Email"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        id="message"
                                        className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 bg-gray-700 transition-all duration-300"
                                        placeholder="How can I help you?"
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    whileHover={{ 
                                        scale: 1.03,
                                        boxShadow: "0 10px 20px rgba(139, 92, 246, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50">
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header;