import {useInView} from "react-intersection-observer";
import {animated, useSpring} from "react-spring";


export const SlideUpCard = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const slideUp = useSpring({
        transform: inView ? "translateY(0px)" : "translateY(100px)",
        from: { transform: "translateY(100px)" },
    });

    return (
        <animated.div ref={ref} style={slideUp}>
            {children}
        </animated.div>
    );
};