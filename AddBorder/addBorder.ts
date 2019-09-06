function addBorder(picture: string[]): string[] {
    const wall = '*'.repeat(picture[0].length + 2);

    picture = picture.map((item) => {
        return item.replace(/(\w+)/gi, '*$1*');
    });

    picture.unshift(wall);
    picture.push(wall);
    
    return picture;
}

console.log(addBorder(["abc", "ded"])); // Expected: [ '*****', '*abc*', '*ded*', '*****' ] 
console.log(addBorder(["abcdef", "ghijkl"])); // Expected: [ '********', '*abcdef*', '*ghijkl*', '********' ] 