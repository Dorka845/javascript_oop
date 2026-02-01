const muvelet = (a, b, callback) => {
    const result = callback(a, b);
    return {result}; // shorthand property
};


const muveletLetrehoz = (jel) => {
    if (jel == '+') {
        return (a, b) => {return a + b};
    }

    if (jel == "-") {
        return (a, b) => a - b;
    }

    if (jel == "*") {
        return (a, b) => a * b;
    }

    throw new Error(`Ismeretlen muveleti jel: ${jel}`)
}

export{muvelet, muveletLetrehoz}