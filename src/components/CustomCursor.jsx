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
            xPercent: -50,
            yPercent: -50
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
            gsap.to(cursor, { scale: 1.5, duration: 0.3 });
            gsap.to(border, { scale: 2, duration: 0.4 });
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
            {/* Border with delay - renders behind main cursor */}
            <div
                ref={borderRef}
                className="fixed top-0 left-0 w-[32px] h-[32px] border-2 border-white rounded-full pointer-events-none z-[9998]"
                style={{
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
                }}
            />
            
            {/* Main White Ball Cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-[16px] h-[16px] bg-white rounded-full pointer-events-none z-[9999]"
                style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)'
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