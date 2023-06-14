import { useSpring, } from 'react-spring';

const LoadingScreen = () => {
    useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
        delay: 500,
    });
};


export default LoadingScreen;
