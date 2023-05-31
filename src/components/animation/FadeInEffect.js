import React from 'react';
import { useSpring, animated } from 'react-spring';
import {useInView} from "react-intersection-observer";

export const FadeInEffect = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const fade = useSpring({
        opacity: inView ? 1 : 0,
        from: { opacity: 0 },
        config: {
            duration: 500,
        },
    });

    return (
        <animated.div ref={ref} style={fade}>
            {children}
        </animated.div>
    );
};
