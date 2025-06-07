import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const borderRef = useRef(null);
    
    // Hide Cursor on mobile
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
        return null;
    }

    useEffect(() => {
        const cursor = cursorRef.current;
        const border = borderRef.current;
        
        // Initial position offscreen
        gsap.set([cursor, border], {
            xPercent: -10,
            yPercent: -10
        });

        // Quick cursor movement for main cursor
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });
        
        // Slower border movement with delay
        const xToBorder = gsap.quickTo(border, "x", { duration: 0.4, ease: "power2.out" });
        const yToBorder = gsap.quickTo(border, "y", { duration: 0.4, ease: "power2.out" });

        // Mouse move handler
        const handleMouseMove = (e) => {
            // Immediate cursor movement
            xTo(e.clientX);
            yTo(e.clientY);
            
            // Delayed border movement
            xToBorder(e.clientX);
            yToBorder(e.clientY);
        };

        // Click animation
        const handleMouseDown = () => {
            gsap.to(cursor, { scale: 0.8, duration: 0.1 });
            gsap.to(border, { scale: 0.9, duration: 0.2 });
        };

        const handleMouseUp = () => {
            gsap.to(cursor, { scale: 1, duration: 0.1 });
            gsap.to(border, { scale: 1, duration: 0.2 });
        };

        // Hover effects for interactive elements
        const hoverElements = document.querySelectorAll('a, button, [role="button"]');
        
        const handleMouseEnter = () => {
            gsap.to(cursor, { scale: 1.3, duration: 0.3 });
            gsap.to(border, { scale: 1.5, duration: 0.4 });
        };
        
        const handleMouseLeave = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(border, { scale: 1, duration: 0.4 });
        };

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            hoverElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            {/* Arrow Border with delay - renders behind main cursor */}
            <div
                ref={borderRef}
                className="fixed top-0 left-0 w-[24px] h-[24px] pointer-events-none z-[9998]"
                style={{
                    clipPath: 'polygon(0% 0%, 0% 80%, 20% 60%, 40% 100%, 50% 90%, 30% 50%, 100% 0%)',
                    border: '2px solid white',
                    filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))'
                }}
            />
            
            {/* Main White Arrow Cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-[20px] h-[20px] bg-white pointer-events-none z-[9999]"
                style={{
                    clipPath: 'polygon(0% 0%, 0% 80%, 20% 60%, 40% 100%, 50% 90%, 30% 50%, 100% 0%)',
                    filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.3))'
                }}
            />
            
            {/* Global cursor hide */}
            <style jsx>{`
                * {
                    cursor: none !important;
                }
                
                body {
                    cursor: none !important;
                }
            `}</style>
        </>
    );
};

export default CustomCursor;