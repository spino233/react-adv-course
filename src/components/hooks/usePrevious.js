import { useEffect, useRef } from "react";

const usePrevious = (val) => {
    let ref = useRef(null);
    useEffect(() => {
        ref.current = val;
    }, [val]);
    return ref.current;
}

export default usePrevious;