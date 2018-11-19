function repeatingCharacter(str) {
    let arr = [],
        finalArr = [];
    for(let i =0; i < str.length; i++) {
        arr.push(str.charAt(i) + (str.split(str.charAt(i)).length - 1));
    }
    for(let j = 0; j < arr.length; j ++) {
        if(arr[j] !== arr[j+1]) {
            finalArr.push(arr[j]);
        }
    }
    return finalArr.join("");
}