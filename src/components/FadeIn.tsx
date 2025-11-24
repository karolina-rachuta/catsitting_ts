import React, { useEffect, useRef, ReactNode } from 'react';

type FadeInPropsType = {
    children: ReactNode;
};

function FadeIn({ children }: FadeInPropsType) {
    const containerRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const faders = containerRef.current.querySelectorAll('.fade-in');
        const appearOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px',
        };

        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach((fader) => appearOnScroll.observe(fader));

        return () => {
            faders.forEach((fader) => appearOnScroll.unobserve(fader));
        };
    }, []);

    return <div ref={containerRef}> {children} </div>;
}

export default FadeIn;
