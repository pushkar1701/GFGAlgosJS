function binarySearch(arr, x) {
    let mid;
    while(arr.length > 1) {
        if(arr.length%2 !== 0) {
            mid = arr[(arr.length-1)/2]
        } else {
            mid = arr[(arr.length)/2];
        }
        let isFound = mid === x ? true : false;
        if(isFound) {
            return true;
        } else if(mid > x){
            arr = arr.splice(0, arr.indexOf(mid));
        } else {
            arr = arr.splice(arr.indexOf(mid), arr.length);
        }
    }
}