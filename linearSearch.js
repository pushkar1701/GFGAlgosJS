let arr = [10,31,2,90,24,12,33];
let x = 2;
function linearSearch(arr, x) {
    let isFound;
    for(let i=0; i< arr.length; i++) {
        if (arr[i] == x) {
         isFound = true;
         console.log('Number found');
         return;
        } else {
            isFound = false;
        }
    }
    if(!isFound) {        
        console.log('ERROR 404');
    }
}