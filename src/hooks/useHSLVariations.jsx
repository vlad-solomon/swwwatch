export default function useHSLVariations(hsl) {
    const offsets = [-20, 10, 0, 10, 20];
    const variations = offsets.map(offset => {
        const variation = [...hsl];
        variation[2] = Math.max(Math.min(hsl[2] + offset, 100), 0)
        return variation;
    })
    return variations;
}