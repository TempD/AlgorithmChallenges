function adjacentElementsProduct(inputArray: number[]): number {
    let result = inputArray[0] * inputArray[1];

    if (inputArray.length === 2) return result;

    for (let i = 2; i < inputArray.length; i++) {
        let currentProduct = inputArray[i] * inputArray[i-1];

        if (currentProduct > result) {
            result = currentProduct;
        }
    }

    return result;
}

console.log(adjacentElementsProduct([3, 6])); // Expected: 18
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // Expected: 21