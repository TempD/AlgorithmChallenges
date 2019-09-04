function addTwoDigits(n: number): number {
    const numAsString = n.toString();
    const mostSignificantDigit = numAsString.charAt(0);
    const leastSignificantDigit = numAsString.charAt(1);


    return Number(mostSignificantDigit) + Number(leastSignificantDigit);
}

function addTwoDigits2(n: number): number {
    let numAsArray = n.toString().split("");

    let result: number = numAsArray.reduce((acc, val) => {
        return Number.parseInt(acc) + Number.parseInt(val);
    });

    return result;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits2(29));