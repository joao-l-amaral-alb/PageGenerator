export function compareToIgnoreCase(a: string, b: string): number {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();

    if (aLower < bLower) {
        return -1;
    }
    if (aLower > bLower) {
        return 1;
    }
    return 0;
}

export const stringToBoolean = (str: string | null | undefined) => {
    if (!str) {
        return false
    }
    if (typeof str === "string") {
        return !["0", "false", "no", "n", "null", "undefined", "nil"].includes(str.toLowerCase().trim())
    }
    return Boolean(str)
}