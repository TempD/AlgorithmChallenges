function addBorder(picture: string[]): string[] {
    const stringLength = picture[0].length;
    let border = '';

    // Let's create our borders
    for (let i = 0; i < stringLength + 2; i++) {
        border += '*';
    }

    // Let's pad our picture
    picture = picture.map((item) => {
        return item.replace(/(\w+)/gi, '*$1*');
    });

    picture.unshift(border);
    picture.push(border);
    
    return picture;
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["abcdef", "ghijkl"]));