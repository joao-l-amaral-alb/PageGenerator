export const compareToIgnoreCase = (a: string, b: string): number => {
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

export const calcBootstrap3RemainingColSize = (contentSize: number, index: number) => {
    let numCol = "col-sm-3";
    const contentSizeRest = contentSize % 4;

    if(contentSizeRest == 3 && index == (contentSize-1) || 
        (contentSizeRest == 2 && (index == (contentSize -1 ) || index == (contentSize -2)))) {
          numCol = "col-sm-6";
    } else if (contentSizeRest == 1 && index==(contentSize-1)) {
      numCol = "col-sm-12";
    }

    return numCol;
}