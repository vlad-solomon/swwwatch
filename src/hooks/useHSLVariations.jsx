export default function useHSLVariations(hsl) {
    const offsets = [-10, -5, 0, 5, 10];
    const variations = offsets.map(offset => {
        const variation = [...hsl];
        variation[2] = Math.max(Math.min(hsl[2] + offset, 100), 0)
        return variation;
    })
    return variations;
}