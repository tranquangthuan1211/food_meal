import { useState, useEffect } from "react";

function Debounce (value, delay) {
    const [valueDebounce, setValueDebounce] = useState(value);

    useEffect(() => {
        const hander = setTimeout(() => setValueDebounce(value),delay);

        return () => clearTimeout(hander);
    },[value,delay])
    return valueDebounce;
}

export default Debounce;