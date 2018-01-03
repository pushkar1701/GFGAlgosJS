let arr = [10,31,2,90,24,12,33];
function selectionSort(arr) {
    let sortedArr = [];
    let arrLen = arr.length;
    for(let i = 0; i < arrLen; i++) {
        let min = Math.min(...arr);
        let indexOfMin = arr.indexOf(min);
        let el = arr.splice(indexOfMin, 1);
        sortedArr.push(el[0]);
    }
    console.log(sortedArr);
}