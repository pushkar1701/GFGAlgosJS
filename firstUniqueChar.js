function firstUniqueChar(str) {
    let arr = [],
        idx;
    for(let i =0; i < str.length; i++) {
        arr.push(str.split(str.charAt(i)).length - 1);
    }
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] === 1) {
            idx = j;
            break;
        }
    }
    return str.charAt(idx);
}