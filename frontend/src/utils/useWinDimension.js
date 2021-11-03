import { useState, useEffect } from "react";

const useWinDimension = () => {
    const hasWindow = typeof window !== 'undefined';

    const getWinDimension = () => {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height
        };
    };

    const [winDimension, setWinDimension] = useState(getWinDimension());

    useEffect(() => {
        if (hasWindow) {
            setWinDimension(getWinDimension);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [hasWindow])

    const handleResize = (event) => {
        console.log(getWinDimension());
    }

    return winDimension;

};

export default useWinDimension;